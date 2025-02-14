
import React from 'react'
import './App.css'
import logo  from'./apollo/logo.svg'
import web  from'./apollo/Web-banner'
import web2  from'./apollo/web2.webp'
import web3  from'./apollo/web3.jpg'
import web4  from'./apollo/web4.webp'
import web5 from './apollo/thumbnail.jpg'
import web6 from './apollo/thumnail2.jpg'
import web7 from './apollo/thumbnail3.jpg'
import web8 from './apollo/certificate.png'
import web9 from './apollo/certificate.png'
import { FaBookMedical } from "react-icons/fa";
import { FaHouseMedicalCircleCheck } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { FaWalkieTalkie } from "react-icons/fa6";
import { LuUserRoundSearch } from "react-icons/lu";
import { FaHospitalAlt } from "react-icons/fa";
import { RiMentalHealthLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const App = () => {

  return (
    <div>
      
    <header>
        <nav>
            <ul class="nav-links">

                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Appointments</a></li>
                <li><a href="#">Contact</a></li>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />

            </ul>
        </nav>
    </header>
  
            <div className='pr'>
            
            <img src={logo} className='item' alt="..."/>
          
         
                {/* <div class="search-bar"> */}
                <input className='search-bar' type="text" placeholder="Search doctor or hospital"/>
            
            <button class="no">1066</button>
            <button class="call">1800-506-8550 </button>
            {/* </div>   */}
            </div>
    
            <section class="banner">
        <div class="banner-content">
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={web} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={web2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={web3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={web4} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    </section>
    <section class="trendings">
      
        <div class="trendings-containers">
            <div class="cards"><FaBookMedical /><p>book appointment</p></div>
            <div class="cards"><FaHouseMedicalCircleCheck /><p>book health check</p></div>
            <div class="cards"><GiMedicines /><p>buy medicines</p></div>
            <div class="cards"><FaWalkieTalkie /><p>consult online</p></div>
            <div class="cards"><LuUserRoundSearch /><p>find doctor</p></div>
            <div class="cards"><FaHospitalAlt /><p>view health record</p></div>
            <div class="cards"><RiMentalHealthLine /><p>Health & Well</p></div>

        </div>
    </section>
    <section class="hero">
        <h1>Explore our Centres of Clinical Excellence</h1>
        <p>Apollo Hospitals has dedicated Centres of Excellence for several key specialties and super specialties.<br/> They are unique and state of the art facilities spread across several of the Apollo hospital locations and<br/> each Centre of Excellence stands out as a citadel of world class clinical outcomes.
        </p>
        

    </section>
    <div class="card-container">
        <div class="card">
            <img src={web5} alt="Event 1"/>
            <div class="card-content">
                <p class="date">20 Jan 25</p>
                <h3 class="title">The Apollo University and Apollo Hospitals Partner...</h3>
                <p class="description">India, January 20, 2025: The Apollo University, Apollo Hospitals and University...</p>
                <a href="#" class="read-more">Read More →</a>
            </div>
        </div>

        <div class="card">
            <img src={web6} alt="Event 2"/>
            <div class="card-content">
                <p class="date">29th September 2024</p>
                <h3 class="title">ALICE 2024</h3>
                <p class="description">The flagship APOLLO LEADERSHIP & INNOVATION IN CARDIAC ENDEAVOURS is back...</p>
                <a href="#" class="read-more">Read More →</a>
            </div>
        </div>

        <div class="card">
            <img src={web7} alt="Event 3"/>
            <div class="card-content">
                <p class="date">23 Jan 25</p>
                <h3 class="title">Pioneering Precision Medicine: New Research Hub Opens...</h3>
                <p class="description">Apollo Hospitals has taken a significant leap in healthcare innovation...</p>
                <a href="#" class="read-more">Read More →</a>
            </div>
        </div>
    </div>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-left">
                <img src={logo} alt="Apollo Hospitals Logo" class="logo"/>
                <div class="certifications">
                    <img src={web8} alt="Certification 1"/>
                    <img src={web9} alt="Certification 2"/>
                </div>
                <div class="newsletter">
                    <h3>Subscribe to Our Newsletter</h3>
                    <input type="email" placeholder="Enter your email id"/>
                    <button>Submit</button>
                </div>
            </div>

            <div class="footer-links">
                <div class="footer-column">
                    <h4>Patient Care</h4>
                    <ul>
                        <li><a href="#">Find A Doctor</a></li>
                        <li><a href="#">Medical Services</a></li>
                        <li><a href="#">Patient Testimonials</a></li>
                        <li><a href="#">Pay Online</a></li>
                        <li><a href="#">Apollo Surgery</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4>Centres Of Excellence</h4>
                    <ul>
                        <li><a href="#">Orthopaedics</a></li>
                        <li><a href="#">Nephrology & Urology</a></li>
                        <li><a href="#">Bariatric Surgery</a></li>
                        <li><a href="#">Cardiology</a></li>
                        <li><a href="#">Gastroenterology</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4>Medical Procedures</h4>
                    <ul>
                        <li><a href="#">Proton Therapy</a></li>
                        <li><a href="#">Cosmetic Surgery</a></li>
                        <li><a href="#">Bone Marrow Transplant</a></li>
                        <li><a href="#">Oral & Maxillofacial Surgery</a></li>
                        <li><a href="#">Hand MicroSurgery</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4>Corporate</h4>
                    <ul>
                        <li><a href="#">Company Overview</a></li>
                        <li><a href="#">Our Doctors Achieve</a></li>
                        <li><a href="#">The Apollo Ethos</a></li>
                        <li><a href="#">The Apollo Story</a></li>
                        <li><a href="#">Investor Relations</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4>Academics & Research</h4>
                    <ul>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Academics</a></li>
                        <li><a href="#">Clinical Research</a></li>
                        <li><a href="#">Honors List</a></li>
                        <li><a href="#">Apollo Torch: Alumni Network</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <button class="blue-btn">Book Health Check-Up</button>
            <button class="orange-btn">Book Appointment</button>
        </div>
    </footer>
    </div>
  )
}

export default App