import React from 'react'
import "../css/Home.css"

export default function Home() {
  return (
    <div className='Home'>

      <div className='homeContent'>
        <div className='headings'>
          <h1 >Hi There,</h1>
        </div>
        <div className='headings'>
          <h1 >I'm Roshan Vijay</h1>
        </div>
        <div className='headings'>
          <h1 >A Full web Developer</h1>
        </div>
        <div className='homeButton'>
          <button>Hire Me</button>
          <button>Resume</button>
        </div>
        <div className='homeNavigation'>
          <p>in</p>
          <p>git</p>
          <p>mail</p>
          <p>fb</p>
        </div>
      </div>

      <div className='homeImage'>
        <div className='homeImage2'>
          <image>image</image>
        </div>
      </div>

    </div>
  )
}
