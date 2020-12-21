import React from 'react'
import projects from './projects'

function findProjectByTitle(projects, title) {
  return projects.find((item) => {
    return item.title === title
  })
}

const ProjectLinks = props => {
  const { links } = props
  return (
    <div className="text-center" style={{textTransform: 'none'}}>
      Links:{'  '} {links.map((link, i) => {
        return (
          <>
            <a href={link.url} className="a-white a-bold" style={{display: 'inline-block', marginRight: '5px'}}>{link.label}</a>
            {i < links.length - 1 ? ', ' : ''}
          </>
        )
      })}
    </div>
  )
}

const ProjectImage = props => {
  const { image } = props
  return (
    <a
      href={image.src}
      rel="noopener noreferrer"
      target="_blank"
      className="col-xs-12 col-sm-6 col-md-6"
    >
      <div className="thumbnail">
        <div className="thumbnail-img-wrap">
          <img
            src={image.src}
            alt={image.src}
            className={image.orientation}
          />
        </div>
        <div className="thumbnail-overlay hidden-xs">
          <p className="b">{image.alt ? image.alt : 'View Image'}</p>
        </div>
        {image.alt ? (
          <p className="title visible-xs">{image.alt}</p>
        ) : null}
      </div>
    </a>
  )
}

const PortofolioDetail = props => {
  const { history } = props
  const { title } = props.match.params
  const project = findProjectByTitle(projects, decodeURI(title))

  const goBack = () => {
    history.goBack()
  }
  return (
    <section className="portofolio text-center">
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
                <span key={tag} className="label label-default">{tag}</span>
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
          {project.images.map((image, index) => {
            return (
              <ProjectImage key={`${image.src}-${index}`} image={image} />
            )
          })}
        </div>
        <br />
        <button onClick={goBack} className="btn btn-outline">
          View Other Projects
        </button>
      </div>
    </section>
  )
}

export default PortofolioDetail
