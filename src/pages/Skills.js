import React from 'react'
import "../css/Skills.css"

export default function Skills() {
  return (
    <div className='Skill'>

      <div className='skillHeading'>
        <h1>
          My Skills
        </h1>
        <p>
          I like to craft Beautiful and Scalable web products
        </p>
      </div>

      <div className='skillcontent'>

        <div className='leftContent'>

          <div className='leftInnerContent'>

            <div className='leftPhoto'>
              <p>photo</p>
            </div>

            <div className='leftQuotes'>
              <h3>
                Design + Development
              </h3>
              <p>
                Clean, modern designs - optimized for performance, search engines, and converting users to customers
              </p>
            </div>

          </div>

          <div className='leftInnerContent'>

            <div className='leftPhoto'>
              <p>photo</p>
            </div>

            <div className='leftQuotes'>
              <h3>
                Technology
              </h3>
              <p>
                Combined all the latest technologies to a progressive website.              </p>
            </div>

          </div>

          <div className='leftInnerContent'>

            <div className='leftPhoto'>
              <p>photo</p>
            </div>

            <div className='leftQuotes'>
              <h3>
                Always Responsive
              </h3>
              <p>
                A responsive design makes your website accessible to all users, regardless of their device.              </p>
            </div>

          </div>

        </div>

        <div className='rightcontent'>

          <div className='rightInnerContent'>

            <div id='html'>
              <p className='rightPara'>
                HTML
              </p>
            </div>

            <div>
              <p className='leftPara'>
                75%
              </p>
            </div>

          </div>

          <div className='rightInnerContent'>

            <div id='css'>
              <p className='rightPara'>
                Css
              </p>
            </div>

            <div>
              <p className='leftPara'>
                70%
              </p>
            </div>

          </div>

          <div className='rightInnerContent'>

            <div id='javascript'>
              <p className='rightPara'>
                Javascript
              </p>
            </div>

            <div>
              <p className='leftPara'>
                68%
              </p>
            </div>

          </div>

          <div className='rightInnerContent'>

            <div id='react'>
              <p className='rightPara'>
                React Js
              </p>
            </div>

            <div>
              <p className='leftPara'>
                63%
              </p>
            </div>

          </div>

          <div className='rightInnerContent'>

            <div id='node'>
              <p className='rightPara'>
                Node Js
              </p>
            </div>

            <div>
              <p className='leftPara'>
                60%
              </p>
            </div>

          </div>

          <div className='rightInnerContent'>

            <div id='express'>
              <p className='rightPara'>
                Express Js
              </p>
            </div>

            <div>
              <p className='leftPara'>
                60%
              </p>
            </div>

          </div>

          <div className='rightInnerContent'>

            <div id='mongodb'>
              <p className='rightPara'>
                Mongo DB
              </p>
            </div>

            <div>
              <p className='leftPara'>
                68%
              </p>
            </div>

          </div>

          <div className='rightInnerContent'>

            <div id='python'>
              <p className='rightPara'>
                Python
              </p>
            </div>

            <div>
              <p className='leftPara'>
                50%
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}