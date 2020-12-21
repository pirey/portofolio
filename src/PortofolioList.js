import React from 'react'
import { Link } from 'react-router-dom'
import projects from './projects'

const PortofolioListItem = props => {
  const { item } = props
  const { images, title } = item
  const { src, orientation } = images[0]
  return (
    <div className="thumbnail">
      <div className="thumbnail-img-wrap">
        <img src={src} alt={title} className={orientation} />
      </div>
      <div className="thumbnail-overlay hidden-xs">
        <p className="b">{title}</p>
      </div>
      <p className="title visible-xs">{title}</p>
    </div>
  )
}

const PortofolioList = () => {
  return (
    <section className="portofolio text-center">
      <div className="container">
        <h2 className="b">Some of my works</h2>
        <hr />
        <br />
        <div className="row">
          {projects.map((item, index) => {
            return (
              <Link
                key={`${item.title}-${index}`}
                className="col-xs-12 col-sm-4 col-md-3"
                to={`/portofolio/${encodeURI(item.title)}`}
              >
                <PortofolioListItem item={item} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PortofolioList
