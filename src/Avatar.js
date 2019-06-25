import React from 'react'
import anu from './img/anu.jpeg'

const Avatar = () => {
  return (
    <section className="gummy-back">
      <div className="avatar jumbotron gummy-front text-center">
        <div className="container">
          <div className="avatar-container">
            <img src={anu} alt="Yeri Pratama" />
          </div>
          <h1 className="b">
            <a className="a-white teal-shadow" href="https://pirey.github.io">
              Yeri Pratama
            </a>
          </h1>
          <hr />
          <p>Web Developer</p>
        </div>
      </div>
    </section>
  )
}

export default Avatar
