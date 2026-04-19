import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PageTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img src={`${baseDir}static/logo.svg`} alt="千研投资知识库" class="logo-image" />
      </a>
    </div>
  )
}

PageTitle.css = `
.page-title {
  margin: 0 0 1rem 0;
  text-align: center;
}

.logo-image {
  max-width: 180px;
  height: auto;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
