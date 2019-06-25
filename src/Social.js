import React from 'react'

const LinkIcon = ({ href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {icon ? <i className={`fa ${icon} fa-2x`} /> : null}
    </a>
  )
}

const Social = () => {
  return (
    <section className='social text-center'>
      <div className='container'>
        <div className='box wrap'>
          <div className='col'>
            <LinkIcon href='https://github.com/pirey' icon='fa-github' />
          </div>
          <div className='col'>
            <LinkIcon href='https://www.linkedin.com/in/yeri-pratama/' icon='fa-linkedin-square' />
          </div>
          <div className='col'>
            <LinkIcon href='https://facebook.com/pratama.yeri' icon='fa-facebook-official' />
          </div>
          <div className='col'>
            <LinkIcon href='https://twitter.com/_pirey' icon='fa-twitter' />
          </div>
          <div className='col'>
            <LinkIcon href='mailto:arifyeripratama@gmail.com?subject=Hello' icon='fa-envelope' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Social
