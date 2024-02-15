import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'; 
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'; 
import { faCode}from '@fortawesome/free-solid-svg-icons'; 
import { faObjectUngroup}from '@fortawesome/free-solid-svg-icons'; 
import { faBug}from '@fortawesome/free-solid-svg-icons'; 
import { faShieldHeart}from '@fortawesome/free-solid-svg-icons'; 
import { faLocationDot}from '@fortawesome/free-solid-svg-icons'; 
import { faEnvelope}from '@fortawesome/free-solid-svg-icons'; 
import { faPhone}from '@fortawesome/free-solid-svg-icons'; 


import { faSquareFacebook} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin}  from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram}  from '@fortawesome/free-brands-svg-icons';




import FileSaver from 'file-saver';
const handleDownload = () => {
 
  const pdfUrl = 'Samia Resume.pdf'
  FileSaver.saveAs(pdfUrl,'Samia Resume.pdf')
};

function Home() {
  const name = "Samia Saghir";
  const email = "samiasaghir462@gmail.com";
  const phone = "03454944335";
  const address = 'Kacha rawa road rehman pura lahore 54000';
  const year = new Date().getFullYear();
  
  // Social media links
  const socialMediaLinks = {
    linkedIn: "https://www.linkedin.com/in/samia-saghir-99595b25b/",
    github: "https://github.com/SamiaSaghir89",
    facebook: "https://www.facebook.com/samia.mughal.927"
  };
  return (
    <>
      <nav id="menu">
        <input type="checkbox" id="responsive-menu" onclick="updatemenu()" />
        <label></label>
        
        <ul>
          
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#education">Eduction</a>
          </li>
          <li>
            <a href="#services">Service</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact-us</a>
          </li>
        </ul>
      </nav>
      <div className="sideText">
      <h1>Hi There! <span id="animated-emoji">👋🏻</span></h1>

    <h1>I'M SAMIA SAGHIR</h1>
    <h1 class ="change-content"></h1>
    <button className="down-load" onClick={handleDownload}>
          Download CV
          <FontAwesomeIcon icon={faDownload} />
        </button>
      </div>
    
  <div className="sideImg">
    <img src='/pics/girl.jpg'/>
  </div>




   <div class="line-styling">
        <div class="style-line"></div>
        <div class="style-circle"></div>
        <div class="style-circle"></div>
    </div>
    <section id="about">
        <div className="aboutme">
          <h1 className="about-heading">Who I am..</h1>
          <p style={{wordSpacing: '2.5px'}}>I am a front-end developer, passionate about bringing designs to life
          I may be described as a front-end developer who is enthusiastic about bringing designs to life through the use of code. I specialise in the creation of web experiences that are both visually beautiful and engaging, and I have competence in HTML, CSS, and JavaScript, as well as various frameworks. My objective is to ensure that any website I work on is not only user-friendly but also responsive across all platform and device types. I am committed to transforming your ideas into web solutions that are not only useful but also appealing and easily accessible.</p>
        
        </div>
        <div className="aboutimg" />


      </section>
      <div class="line-styling">
        <div class="style-line"></div>
        <div class="style-circle"></div>
        <div class="style-circle"></div>
    </div>
      {/* Education Section  */}
      <section id="education">
        <div className="educard-img" />
        <div className="education-background">
          <h1 className="education-heading">Education</h1>
          <div className="box-1">
            <div className="icon"><FontAwesomeIcon icon={faGraduationCap} /></div>
            <div className="education-detail"><span>2020-Present</span>
              <h2 className="degree">Bachelor In Computer Science</h2>
              <h4 className="institute">Rise College</h4>
            </div>
          </div>
      
          <div className="box-1">
            <div className="icon"><FontAwesomeIcon icon={faGraduationCap} /></div>
            <div className="education-detail"><span>2018-2020</span>
              <h2 className="degree">ICS</h2>
              <h4 className="institute">Himayat-E-Islam Khawateen College (H.I.K.C)</h4>
            </div>
          </div>
          <div className="box-1">
            <div className="icon"><FontAwesomeIcon icon={faGraduationCap} /></div>
            <div className="education-detail"><span>2016-2018</span>
              <h2 className="degree">Matriculation</h2>
              <h4 className="institute">Govt Girls Hight School</h4>
            </div>
          </div>
        </div>
      </section>
      <div class="line-styling">
        <div class="style-line"></div>
        <div class="style-circle"></div>
        <div class="style-circle"></div>
    </div>
    {/* Skills Section  */}
    <section id="skills">
        <h3 className="skills-heading">Skills</h3>
        <div className="images-container">
          <img src="/pics/js (1).png" alt="js" width="90px" height="50px" />
        <img src="/pics/html.png" alt="" width="120px" height="90px" />
          <img src="/pics/css-3.png" alt="" width="140px" height="100px" />
          <img src="/pics/pngwing.com(3).png" id="github" alt="" width="120px" height="90px" />
          <img src="/pics/pngwing.com (4).png" alt="" width="120px" height="90px" />
          <img src="/pics/react.png" alt="" width="120px" height="90px" />
          <img src="/pics/node.png" alt="" width="120px" height="90px" />
          <img src="/pics/sql.png" alt="" width="120px" height="90px" />
          <img src="/pics/angular.png" alt="" width="120px" height="90px" />
          <img src="/pics/mongo.png" alt="" width="120px" height="90px" />



        </div>
      </section>
       {/* Project Section  */}
       <section id="Projects">
    <h1 className="projects-h">Projects</h1>
    <div className="project-section">
        <div className="projects-detail" id="project1">
            <a href="https://mohidshahid.netlify.app/#" className="code-link1">
                <img src="/pics/github (1).png" alt="" />
            </a>
            <img src="/pics/pro1.png" alt="" className="Project-img" />
            <div class="elements">
                <h3 class="project-heading">Amazon-Clone</h3>
                <p class="text-1">Simple HTML, CSS, and JavaScript built Amazon's online store. The website was redesigned after new foundations. This project teaches us how to clone Amazon's e-commerce site with React.
                </p>
                <div class="project-img">
                <img src="/pics/html.png" alt="" width="120px" height="90px" />
                <img src="/pics/css-3.png" alt="" width="140px" height="100px" />
                    <img src="/pics/js (1).png" alt="js" width="90px" height="50px" />
                    
                   <img src="/pics/react.png" alt="" width="120px" height="90px" />
                </div>
            </div>
            </div>
          <div className="projects-detail" id="project2">
            <a href="https://mohidshahid.netlify.app/#" className="code-link1">
            <img src="/pics/github (1).png" alt="" /></a>
            <img src="/pics/pro2.png" alt="" className="Project-img" />
            <div className="elements">
              <h3 className="project-heading">Restaurant For Table Reservation</h3>
              <p className="text-1">The system was created to offer online reservation services to customers. Services to see menus and reserve tables utilising html, css, bootstrap, and javascript
</p>
            <div class="project-img">
                <img src="/pics/html.png" alt="" width="120px" height="90px" />
                <img src="/pics/css-3.png" alt="" width="140px" height="100px" />
                    <img src="/pics/js (1).png" alt="js" width="90px" height="50px" />
                    
                    <img src="/pics/pngwing.com (4).png" alt="" width="120px" height="90px" />
                </div>
          </div>
          </div>
          <div className="projects-detail" id="project3">
            <a href="https://github.com/SamiaSaghir89/YumFood" className="code-link1">
            <img src="/pics/github (1).png" alt="" /></a>
            <img src="/pics/pro3.png" className="Project-img" alt="" />
            <div className="elements">
              <h3 className="project-heading">YumFood</h3>
              <p className="text-1">I created "YumFood" using the MERN (MongoDB, Express.js, React, Node.js) technology stack. YumFood is an online food ordering and
delivery platform designed to make the process of ordering and
delivering food easy and seamles</p>
<div class="project-img">
<img src="/pics/react.png" alt="" width="120px" height="90px" />
          <img src="/pics/node.png" alt="" width="120px" height="90px" />
                    
          <img src="/pics/expressjs.png" alt="js" width="90px" height="50px" />
                    <img src="/pics/mongo.png" alt="" width="120px" height="90px" />


                </div>
            </div>
          </div>
        </div></section>
        <section id="services">
        <h3 class="Service">Services</h3>
        <div class="domain-boxes">
            <div class="domain-box">
                <div class="domain-icon"><FontAwesomeIcon icon={faCode} /></div>
                <div class="domain">Web Development</div>
            </div>
            <div class="domain-box">
                <div class="domain-icon"><FontAwesomeIcon icon={faObjectUngroup} /></div>
                <div class="domain">Ui UX design</div>
            </div>
            <div class="domain-box">
                <div class="domain-icon"><FontAwesomeIcon icon={faBug} /></div>
                <div class="domain">Bugs Fixing</div>
            </div>
            <div class="domain-box">
                <div class="domain-icon"><FontAwesomeIcon icon={faShieldHeart} /></div>
                <div class="domain">Client Satisfaction</div>
            </div>
        </div>
    </section>
    <div className="container">
        {/* <span class="big-circle"></span> */}
        {/* <img src="img/shape.png" class="square" alt="" /> */}
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              We're here to help you with any questions or inquiries you may have. Our team is dedicated to
              providing the best solutions and services to meet your needs.
            </p>
            <div className="info">
              <div className="information">
              <FontAwesomeIcon className="fa-solid" icon={faLocationDot} />
                <p>{address}</p>
              </div>
              <div className="information">
              <FontAwesomeIcon className="fa-solid" icon={faEnvelope} />
                <p>{email}</p>
              </div>
              <div className="information">
              <FontAwesomeIcon  className="fa-solid"
              icon={faPhone} />
                <p>{phone}</p>
              </div>
            </div>
            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href={socialMediaLinks.facebook}>
                <FontAwesomeIcon  icon={faSquareFacebook} />
                </a>
               
                <a href="">
                <FontAwesomeIcon icon={faSquareInstagram} />
                </a>
                <a href={socialMediaLinks.linkedIn}>
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
          <div id="contact" className="contact-form">
            <span className="circle one" />
            <span className="circle two" />
            <form name="submit-to-google-sheet" autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="Name" required className="input" />
                <label htmlFor>Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="Email" className="input" />
                <label htmlFor>Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="Phone" className="input" />
                <label htmlFor>Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="Message" className="input" required defaultValue={""} />
                <label htmlFor>Message</label>
                <span>Message</span>
              </div>
              <input type="submit" defaultValue="Send" className="btn" />
            </form>
            <span id="msg" />
          </div>
        </div>
      </div>
      <footer>
      <div>
        <p>Contact Information:</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
      <div>
        <p>Social Media Links:</p>
        <p><a href={socialMediaLinks.linkedIn}>LinkedIn</a></p>
        <p><a href={socialMediaLinks.twitter}>Twitter</a></p>
        <p><a href={socialMediaLinks.github}>GitHub</a></p>
      </div>
      <div>
        <p>Copyright Notice: © {name} {year}. All Rights Reserved.</p>
       
      </div>
    </footer>
    </>
  );
}
export default Home;
