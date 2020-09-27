import React from 'react'
import { Link } from 'react-router-dom'
import projects from './projects'

const ProjectLinks = props => {
  const { links } = props
  return (
    <div className="text-center" style={{textTransform: 'none'}}>
      Links: {links.map((link, i) => {
        return (
          <>
            <a href={link.url} style={{display: 'inline-block', marginRight: '5px'}}>{link.label}</a>
            {i < links.length - 1 ? ', ' : ''}
          </>
        )
      })}
    </div>
  )
}

const PortoDetail = props => {
  const { history } = props
  const { index } = props.match.params
  const project = projects[index]

  const goBack = () => {
    history.goBack()
  }
  return (
    <section className="porto text-center">
      <div className="container">
        <h2 className="b">{project.title}</h2>
        <hr />
        <br />
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-sm-offset-3 col-sm-6">
            <p>{project.description}</p>
          </div>
        </div>
        {project.tags ? (
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1 col-sm-offset-3 col-sm-6">
              {project.tags.map(tag => (
                <span className="label label-default">{tag}</span>
              ))}
            </div>
          </div>
        ) : null}
        {project.links ? (
          <ProjectLinks links={project.links} />
        ) : null}
        <br />
        <br />
        <div className="row">
          {project.images.map((img, index) => {
            return (
              <a
                key={`${img.src}-${index}`}
                href={img.src}
                rel="noopener noreferrer"
                target="_blank"
                className="col-xs-12 col-sm-6 col-md-6"
              >
                <div className="thumbnail">
                  <div className="thumbnail-img-wrap">
                    <img
                      src={img.src}
                      alt={img.src}
                      className={img.orientation}
                    />
                  </div>
                  <div className="thumbnail-overlay hidden-xs">
                    <p className="b">{img.alt ? img.alt : 'View Image'}</p>
                  </div>
                  {img.alt ? (
                    <p className="title visible-xs">{img.alt}</p>
                  ) : null}
                </div>
              </a>
            )
          })}
        </div>
        <br />
        <Link onClick={goBack} className="btn btn-outline">
          View Other Projects
        </Link>
      </div>
    </section>
  )
}

export default PortoDetail
