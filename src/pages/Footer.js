import React from 'react'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import "../css/Footer.css"

export default function Footer() {
  return (
    <div className='footer'>
        <p>
            No 54, Vedha koil street, konganthan Parai, Tirunelveli, Tamilnadu 
        </p>
        <p >
        <a id='phno' href="tel:6383437403"><CallOutlinedIcon/> 6383437403</a>
        </p>
    </div>
  )
}
