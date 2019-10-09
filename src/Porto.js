import React from 'react'
import dashing from './img/porto/dashing.png'
import chatonomy from './img/porto/chatonomy.png'
import distributor from './img/porto/distributor.png'
import inibakatku from './img/porto/inibakatku.png'
import jejualanFb from './img/porto/jejualan-fb.png'
import jejualanMobile from './img/porto/jejualan-mobile.png'
import ongkirku from './img/porto/ongkirku.png'
import uruglasses from './img/porto/uruglasses.png'
import whIco from './img/porto/wh-ico.png'

const projects = [
  {
    title: 'Chatonomy',
    img: {
      orientation: 'landscape',
      src: chatonomy
    }
  },
  {
    title: 'Dashing',
    img: {
      orientation: 'landscape',
      src: dashing
    }
  },
  {
    title: 'Distributor POS',
    img: {
      orientation: 'landscape',
      src: distributor
    }
  },
  {
    title: 'Inibakatku',
    img: {
      orientation: 'landscape',
      src: inibakatku
    }
  },
  {
    title: 'Jejualan FB',
    img: {
      orientation: 'landscape',
      src: jejualanFb
    }
  },
  {
    title: 'Jejualan App',
    img: {
      orientation: 'portrait',
      src: jejualanMobile
    }
  },
  {
    title: 'Ongkirku App',
    img: {
      orientation: 'portrait',
      src: ongkirku
    }
  },
  {
    title: 'WhatsHalal Token ICO',
    img: {
      orientation: 'landscape',
      src: whIco
    }
  },
  {
    title: 'Uruglasses',
    img: {
      orientation: 'landscape',
      src: uruglasses
    }
  },
]

const PortoItem = props => {
  const { item } = props
  const {
    img: { src, orientation },
    title
  } = item
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="thumbnail"
    >
      <div className="thumbnail-img-wrap">
        <img src={src} alt={title} className={orientation} />
      </div>
      <div className="thumbnail-overlay hidden-xs">
        <p className="b">{title}</p>
      </div>
      <p className="title visible-xs">{title}</p>
    </a>
  )
}

const Porto = () => {
  return (
    <section className="porto text-center">
      <div className="container">
        <h2 className="b">Some of my works</h2>
        <hr />
        <br />
        <div className="row">
          {projects.map((item, index) => {
            return (
              <div
                key={`${item.title}-${index}`}
                className="col-xs-12 col-sm-4 col-md-3"
              >
                <PortoItem item={item} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Porto
