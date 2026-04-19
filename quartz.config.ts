import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "千研投资知识库",
    pageTitleSuffix: " - 千研投资",
    enableSPA: true,
    enablePopovers: true,
    locale: "zh-CN",
    baseUrl: "qianyan.invest",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f5",
          lightgray: "#e8e6e2",
          gray: "#b8b8b8",
          darkgray: "#8b7355",
          dark: "#2b2b2b",
          secondary: "#8b7355",
          tertiary: "#c9a961",
          highlight: "rgba(201, 169, 97, 0.15)",
          textHighlight: "#c9a96188",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#8b7355",
          darkgray: "#c9a961",
          dark: "#ebebec",
          secondary: "#c9a961",
          tertiary: "#8b7355",
          highlight: "rgba(201, 169, 97, 0.15)",
          textHighlight: "#c9a96188",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config