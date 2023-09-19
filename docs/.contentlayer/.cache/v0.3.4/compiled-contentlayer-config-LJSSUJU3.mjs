// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

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
var contentlayer_config_default = makeSource({
  contentDirPath: './content',
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
  },
  documentTypes: [ContentPage, ComponentPage],
});
export { ComponentPage, ContentPage, contentlayer_config_default as default };
//# sourceMappingURL=compiled-contentlayer-config-LJSSUJU3.mjs.map
