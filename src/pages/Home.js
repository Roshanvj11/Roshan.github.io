import React from 'react'
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import NavigationIcon from '@mui/icons-material/Navigation';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import { saveAs } from 'file-saver';
import handleResume from './Resume';
import "../css/Home.css"

export default function Home() {
  // const handleResume = () => {

  //   const pdfBlob = new Blob(
  //     ['Roshan vijay Resume'],
  //     { type: 'application/pdf' }
  //   );

  //   saveAs(pdfBlob,"Roshan Vijay Resume.pdf")
  // }
  return (

    <div className='Home'>

      <div className='homeContent'>

        <div className='headings first'>
          <h1 >Hi There,</h1>
        </div>
        <div className='headings second'>
          <h1 >I'm <span id="roshan">Roshan Vijay</span></h1>
        </div>
        <div className='headings third'>
          <h1 >A <span id='reactjs'>React Js Developer</span></h1>
        </div>
        <div className='homeButton'>
          <a href='https://www.linkedin.com/in/roshan-443070262/'>
            <Button className='btn1' variant="contained" sx={{ backgroundColor: '#ff4000' }}>
              <NavigationIcon className='btnsize' sx={{ marginRight: '6px', fontSize: '16px', textAlign: 'center' }} />Hire
            </Button>
          </a>
          <Button className='btn2' variant="contained" sx={{ backgroundColor:'#251d9d'}} onClick={handleResume}>
            <ArrowDownwardIcon className='btnsize' sx={{ marginRight: '6px', fontSize: '16px', textAlign: 'center' }} />Resume
          </Button>
        </div>
        <div className='homeNavigation'>
          <a href='https://www.linkedin.com/in/roshan-443070262/' className='para1'>
            <LinkedInIcon className='logosize' style={{ fontSize: '40px', color: '#0077B5' }} />
          </a>
          <a href='https://github.com/Roshanvj11' className='para2'>
            <GitHubIcon className='logosize' style={{ fontSize: '40px', color: '#171515' }} />
          </a>
          <a href='https://mail.google.com/mail/?view=cm&to=sroshanvijay@gmail.com&su=Subject&body=BodyText' className='para2'>
            <EmailIcon className='logosize' style={{ fontSize: '40px', color: 'FCCD2A' }} />
          </a>
          <a href='https://m.facebook.com/profile.php?id=100009256512718' className='para3'>
            <FacebookOutlinedIcon className='logosize' style={{ fontSize: '40px', color: '#316FF6' }} />
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