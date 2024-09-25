import React from 'react'
import Button from '@mui/material/Button';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Men from '../images/men1.png';
import handleResume from './Resume';
import "../css/About.css"

export default function About() {
  return (
    <div className='About' >

      {/* <div className='aboutQuotes'>
        <h1>Fueled by curiosity,driven by innovation</h1>
      </div> */}

      {/* <div className='AboutInnerContent'> */}

        <div className='aboutImage'>
          <img src={Men} alt='men'/>
        </div>

        <div className='aboutContent'>
          <div className='aboutHeading'>
            <h1>
              About Me
            </h1>
          </div>
          <div className='aboutSummary'>
            <p>
              Hi, I'm Roshan Vijay, a passionate web developer and recent MSc graduate in Networking and Information Technology. I specialize in full-stack development with expertise in the MERN stack. During my academic journey, I built real-world projects, including a doctor appointment system, and gained valuable industry experience through internships. I'm always eager to learn new technologies and take on challenging projects that push the boundaries of my skills.
            </p>
          </div>
          <div className='aboutTable'>
            <table className='table'>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>Roshan Vijay</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td><a href='https://mail.google.com/mail/?view=cm&to=sroshanvijay@gmail.com&su=Subject&body=BodyText'>sroshanvijay@gmail.com</a></td>
              </tr>
              <tr>
                <td>Linkedin</td>
                <td>:</td>
                <td><a href='https://www.linkedin.com/in/roshan-443070262/'>https://www.linkedin.com/in/roshan-443070262/</a></td>
              </tr>
              <tr>
                <td>Github</td>
                <td>:</td>
                <td><a href='https://github.com/Roshanvj11'>https://github.com/Roshanvj11</a></td>
              </tr>
              <tr>
                <td>Whatsapp</td>
                <td>:</td>
                <td><a href='https://wa.me/6383437403?text=Hello%20there!'>6383437403</a></td>
              </tr>
            </table>
          </div>
          <div className='aboutDownload'>
            <Button className='downloadbtn' variant="contained" onClick={handleResume} sx={{ backgroundColor: '#ff4000',fontSize:'12px' }}>
             <ArrowCircleDownIcon sx={{marginRight:"10px"}}/> download Cv
            </Button>
          </div>

        </div>

      {/* </div> */}

    </div>
  )
}
