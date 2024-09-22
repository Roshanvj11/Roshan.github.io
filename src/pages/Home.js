import React from 'react'
import Button from '@mui/material/Button';
import "../css/Home.css"

export default function Home() {
  return (
    <div className='Home'>

      <div className='homeContent'>
        <div className='headings first'>
          <h1 >Hi There,</h1>
        </div>
        <div className='headings second'>
          <h1 >I'm Roshan Vijay</h1>
        </div>
        <div className='headings third'>
          <h1 >A Full web Developer</h1>
        </div>
        <div className='homeButton'>
        <Button className='btn1' variant="contained">Hire Me</Button>
        <Button className='btn2' variant="contained">Resume</Button>
        </div>
        <div className='homeNavigation'>
          <p className='para1'>in</p>
          <p className='para2'>git</p>
          <p className='para2'>mail</p>
          <p className='para3'>fb</p>
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
