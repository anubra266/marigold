// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { visit as visit2 } from "unist-util-visit";

// lib/mdx/rehype-component-demo.tsx
import path from "node:path";
import fs from "node:fs";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";
var getJsxAttr = (node, needle) => node.attributes?.find(
  ({ type, name }) => type === "mdxJsxAttribute" && name === needle
);
var rehypeComponentDemo = ({
  contentDirPath: contentDirPath2
}) => {
  return async (tree, f) => {
    const file = f;
    visit(tree, (node) => {
      if (node.name === "ComponentDemo") {
        const demoPath = getJsxAttr(node, "file")?.value;
        if (!demoPath)
          return;
        if (typeof demoPath !== "string")
          return;
        try {
          const filePath = path.join(
            file.cwd,
            contentDirPath2,
            file.data.rawDocumentData.sourceFileDir,
            demoPath
          );
          const source = fs.readFileSync(filePath, "utf-8");
          const name = path.basename(demoPath, ".demo.tsx");
          node.attributes?.push(
            {
              type: "mdxJsxAttribute",
              name: "name",
              value: name
            },
            {
              type: "mdxJsxAttribute",
              name: "source",
              value: source
            }
          );
          node.children?.push(
            u("element", {
              tagName: "pre",
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"]
                  },
                  children: [
                    {
                      type: "text",
                      value: source
                    }
                  ]
                })
              ]
            })
          );
        } catch (err) {
          console.log(err);
        }
      }
    });
  };
};

// contentlayer.config.ts
var getNormalizedPath = (val) => {
  let paths = val.split("/");
  if (paths.at(-1) === paths.at(-2)) {
    paths.pop();
  }
  return paths;
};
var ContentPage = defineDocumentType(() => ({
  name: "ContentPage",
  filePathPattern: "{**,*}/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    caption: {
      type: "string",
      required: true
    },
    order: {
      type: "number"
    }
  },
  computedFields: {
    // Transforms the page's path to a slug to use with next.js API
    slug: {
      type: "string",
      resolve: (doc) => getNormalizedPath(doc._raw.flattenedPath).join("/")
    },
    // Subsection is the 1st folder level of a page.
    section: {
      type: "string",
      resolve: (doc) => {
        const path2 = getNormalizedPath(doc._raw.flattenedPath);
        return path2.length < 2 ? null : path2.at(0);
      }
    },
    // Subsection is the 2nd folder level of a page.
    subsection: {
      type: "string",
      resolve: (doc) => {
        const path2 = getNormalizedPath(doc._raw.flattenedPath);
        return path2.length < 3 ? null : path2.at(1);
      }
    }
    /**
     * flattened Path:
     *
     * - pages/concepts/layouts
     * - components/button/button
     * - hooks/useTheme/useTheme
     *
     * [ 'components', 'footer', 'footer' ] footer footer
     */
    // section: {
    //   type: 'string',
    //   resolve: doc => doc._raw.sourceFileDir.split('/').at(-1),
    // },
    // slug: {
    //   type: 'string',
    //   resolve: doc => doc._raw.flattenedPath.replace('pages', ''),
    // },
    // slugAsParams: {
    //   type: 'string',
    //   resolve: doc => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    // },
  }
}));
var contentDirPath = "./content";
var contentlayer_config_default = makeSource({
  contentDirPath,
  documentTypes: [ContentPage],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypeComponentDemo, { contentDirPath }],
      rehypeSlug,
      // to inject the source code and other stuff inside `pre` element props
      () => (tree) => {
        visit2(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;
            if (codeEl.tagName !== "code") {
              return;
            }
            if (codeEl.data?.meta) {
              const regex = /event="([^"]*)"/;
              const match = codeEl.data?.meta.match(regex);
              if (match) {
                node.__event__ = match ? match[1] : null;
                codeEl.data.meta = codeEl.data.meta.replace(regex, "");
              }
            }
            node.__rawString__ = codeEl.children?.[0].value;
          }
        });
      },
      [
        rehypePrettyCode,
        {
          theme: "material-theme-palenight",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      () => (tree) => {
        visit2(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "div") {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
              return;
            }
            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
              return;
            }
            preElement.properties["__rawString__"] = node.__rawString__;
          }
        });
      },
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            class: [
              "relative",
              "no-underline",
              "before:absolute",
              "before:-left-6",
              "before:inset-y-0",
              "before:flex",
              "before:items-center",
              "before:text-secondary-400",
              "before:text-2xl",
              `hover:before:content-['#']`
            ].join(" ")
          }
        }
      ]
    ]
  }
});
export {
  ContentPage,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-A6IQZ5NV.mjs.map
