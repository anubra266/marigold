// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// lib/mdx/rehype-component-demo.tsx
import path from 'node:path';
import fs from 'node:fs';
import { u } from 'unist-builder';
import { visit } from 'unist-util-visit';
var getJsxAttr = (node, needle) =>
  node.attributes?.find(
    ({ type, name }) => type === 'mdxJsxAttribute' && name === needle
  );
var rehypeComponentDemo = ({ contentDirPath: contentDirPath2 }) => {
  return async (tree, f) => {
    const file = f;
    visit(tree, node => {
      if (node.name === 'ComponentDemo') {
        const demoPath = getJsxAttr(node, 'file')?.value;
        if (!demoPath) return;
        if (typeof demoPath !== 'string') return;
        try {
          const filePath = path.join(
            file.cwd,
            contentDirPath2,
            file.data.rawDocumentData.sourceFileDir,
            demoPath
          );
          const source = fs.readFileSync(filePath, 'utf-8');
          const name = path.basename(demoPath, '.demo.tsx');
          node.attributes?.push(
            {
              type: 'mdxJsxAttribute',
              name: 'name',
              value: name,
            },
            {
              type: 'mdxJsxAttribute',
              name: 'source',
              value: source,
            }
          );
          node.children?.push(
            u('element', {
              tagName: 'pre',
              children: [
                u('element', {
                  tagName: 'code',
                  properties: {
                    className: ['language-tsx'],
                  },
                  children: [
                    {
                      type: 'text',
                      value: source,
                    },
                  ],
                }),
              ],
            })
          );
        } catch (err) {
          console.log(err);
        }
      }
    });
  };
};

// lib/config.ts
var siteConfig = {
  navigation: {
    componentGroups: [
      'Applicaiton',
      'Layout',
      'Navigation',
      'Form',
      'Collection',
      'Overlay',
      'Content',
    ],
  },
};

// contentlayer.config.ts
var commonFields = {
  title: {
    type: 'string',
    required: true,
  },
  caption: {
    type: 'string',
    required: true,
  },
};
var ContentPage = defineDocumentType(() => ({
  name: 'ContentPage',
  filePathPattern: 'pages/**/*.mdx',
  contentType: 'mdx',
  fields: {
    ...commonFields,
    order: {
      type: 'number',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: doc => doc._raw.flattenedPath.replace('pages', ''),
    },
    slugAsParams: {
      type: 'string',
      resolve: doc => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
  },
}));
var ComponentPage = defineDocumentType(() => ({
  name: 'ComponentPage',
  filePathPattern: 'components/**/*.mdx',
  contentType: 'mdx',
  fields: {
    ...commonFields,
    group: {
      type: 'enum',
      options: siteConfig.navigation.componentGroups,
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: doc =>
        `/${doc._raw.flattenedPath.substring(
          0,
          doc._raw.flattenedPath.lastIndexOf('/')
        )}`,
    },
    slugAsParams: {
      type: 'string',
      // Slugs are matched agains the name of the component or rather the file name
      resolve: doc => doc._raw.sourceFileName.split('.')[0],
    },
  },
}));
var contentDirPath = './content';
var contentlayer_config_default = makeSource({
  contentDirPath,
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypeComponentDemo, { contentDirPath }],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        { properties: { ariaLabel: 'Link to section' }, behavior: 'wrap' },
      ],
    ],
  },
  documentTypes: [ContentPage, ComponentPage],
});
export { ComponentPage, ContentPage, contentlayer_config_default as default };
//# sourceMappingURL=compiled-contentlayer-config-FM4ZIP4S.mjs.map
