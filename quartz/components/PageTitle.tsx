import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PageTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="title-text">
        <div class="title-line">一图千研</div>
        <div class="title-line">茁速灵动</div>
      </a>
    </div>
  )
}

PageTitle.css = `
.page-title {
  margin: 0 0 1rem 0;
  text-align: left;
  width: 100%;
}

.title-text {
  text-decoration: none;
  color: #F8F6F2;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  display: block;
  width: 100%;
}

.title-line {
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  line-height: 2.8;
  width: 100%;
  opacity: 0.8;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
