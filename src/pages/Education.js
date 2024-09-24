import React from 'react'
import "../css/Education.css"

export default function Education() {
  return (
    <div className='Education'>

      <div id='eduHeading'>
        <h1>Educational Qualifications</h1>
      </div>

      <div className='eduContent'>


        <div className='eduContentOne'>

          <div className='Qualification'>

            <div className='qualificationHead'>
              <h3>
                Master of Science
              </h3>
              <p>2022 - 2024</p>
            </div>

            <div className='qualificationContent' >

              <table className='qualificationTable'>

                <tr>
                  <td>St.John's College</td>
                  <td>:</td>
                  <td>Tirunelveli,Tamilnadu</td>
                </tr>

                <tr>
                  <td>Minor</td>
                  <td>:</td>
                  <td>Networking and Information Technology</td>
                </tr>

                <tr>
                  <td>Percentage</td>
                  <td>:</td>
                  <td>80%</td>
                </tr>

              </table>
            </div>

          </div>

          <div className='Qualification'>

            <div className='qualificationHead'>
              <h3>
                Bachelor of Science
              </h3>
              <p>2019 - 2022</p>
            </div>

            <div className='qualificationContent' >

              <table className='qualificationTable'>

                <tr>
                  <td>St.Xavier's College</td>
                  <td>:</td>
                  <td>Tirunelveli,Tamilnadu</td>
                </tr>

                <tr>
                  <td>Minor</td>
                  <td>:</td>
                  <td>Mathematics</td>
                </tr>

                <tr>
                  <td>Percentage</td>
                  <td>:</td>
                  <td>69%</td>
                </tr>

              </table>
            </div>

          </div>

        </div>

        <div className='eduContentTwo'>

          <div className='internship'>

            <div className='internHead'>
              <h2>
                Internship
              </h2>
            </div>

            <div className='internshipContent'>

              <div className='internCompany'>
                <h3>Efloz IT services</h3>
                <p>26.12.2023 - 03.04.2024  </p>
              </div>

              <div className='internSoftware'>
                <p>react js</p>
                <p>Node js</p>
                <p>Express js</p>
                <p>mongoDB</p>
              </div>

              <div className='internPara'>
                <p>•	Developed MERN stack development skills during a 3-month intensive course, including MongoDB, Express.js, React.js, and Node.js.</p>
                <p> •	Contributed to real-world web application projects, gaining practical, hands-on experience in full-stack web development.</p>
                <p>•	Completed a final-year project on a <b>Dentist Appointment System</b> using the MERN stack, implementing features such as appointment scheduling and user management.</p>
                <p>•	Implemented user authentication, appointment booking, and notifications features.</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
