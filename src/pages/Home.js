import React from 'react'
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
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
          <a href='https://www.linkedin.com/in/roshan-443070262/' className='para1'>
            <LinkedInIcon style={{fontSize:'40px' ,color:'#0077B5'}} />
          </a>
          <a href='https://github.com/Roshanvj11' className='para2'>
            <GitHubIcon style={{fontSize:'40px' ,color:'#171515'}} />
          </a>
          <a href='https://mail.google.com/mail/?view=cm&to=sroshanvijay@gmail.com&su=Subject&body=BodyText' className='para2'>
            <EmailIcon style={{fontSize:'40px' ,color:'FCCD2A'}} />
          </a>
          <a href='https://m.facebook.com/profile.php?id=100009256512718' className='para3'>
            <FacebookOutlinedIcon style={{fontSize:'40px' ,color:'#316FF6'}} />
          </a>
        </div>
      </div>

      <div className='homeImage'>

        <div className='homeImage2'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </div>
  )
}
