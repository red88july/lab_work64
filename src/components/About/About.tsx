import React from 'react';
import SeniorPicture from '../../uploads/senior.jpg';
import BoardsPicture from '../../uploads/boards.jpg';
import EmployeePicture from '../../uploads/employes.jpg';
import AlumniPcture from '../../uploads/alumni.jpg';
import '../../styles.css';

const About: React.FC = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex align-items-start justify-content-start pic-style p-5">
          <div className="sizing">
            <h1 className="text-white">Who we are</h1>
            <div>
              <p className="text-white w-75 fs-5">
                "Our people and their stories are what make us one of the world’s most dynamic companies."
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-between flex-wrap align-items-stretch">
          <div className="card mt-5" style={{width: '18rem'}}>
            <img src={SeniorPicture} className="card-img-top" alt="Our team senior engineer"/>
            <div className="card-body">
              <h3 className="card-title">Senior leadership</h3>
              <p className="card-text">"Get to know our senior leadership. Explore the biographies, photos, and speeches
                of the leaders who shape our vision."</p>
              <a href="https://news.microsoft.com/leadership/?section=senior-leaders" className="links text-primary">Learn
                about senior leadership</a>
            </div>
          </div>
          <div className="card mt-5" style={{width: '18rem'}}>
            <img src={BoardsPicture} className="card-img-top" alt="Boards of directors"/>
            <div className="card-body">
              <h3 className="card-title">Board of Directors</h3>
              <p className="card-text">"Explore the biographies, photos, and speech transcripts of our Board of
                Directors."</p>
              <a href="https://news.microsoft.com/leadership/?section=board-members" className="links text-primary">Learn
                more about the Board</a>
            </div>
          </div>
          <div className="card mt-5" style={{width: '18rem'}}>
            <img src={EmployeePicture} className="card-img-top" alt="Our team senior engineer"/>
            <div className="card-body">
              <h3 className="card-title">Employees</h3>
              <p className="card-text">"Our people represent communities and cultures of the world coming together to
                help others achieve more."</p>
              <a href="https://news.microsoft.com/life/" className="links text-primary">Explore Microsoft life</a>
            </div>
          </div>
          <div className="card mt-5" style={{width: '18rem'}}>
            <img src={AlumniPcture} className="card-img-top" alt="Our team senior engineer"/>
            <div className="card-body">
              <h3 className="card-title">Alumni</h3>
              <p className="card-text">"The Microsoft Alumni Network keeps you connected to the things you loved about
                working at Microsoft. Experience the technology, learning,giving, and — most importantly — the
                people."</p>
              <a href="https://news.microsoft.com/leadership/?section=senior-leaders" className="links text-primary">Join
                us</a>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mt-5 gap-3">
          <span>Follow Microsoft</span>
          <a href="https://www.facebook.com/Microsoft" className="facebook"></a>
          <a href="https://twitter.com/microsoft" className="twitter"></a>
          <a href="https://www.linkedin.com/company/microsoft/" className="linkedin"></a>
        </div>
      </div>
      <div className="pt-3 pb-3 mt-5 gap-3 bg-secondary-subtle">
        <div className="d-flex flex-wrap justify-content-between container">
          <ul className="list-style">
            <li><strong>Whats's new</strong></li>
            <li><a href="#" className="links text-secondary style-footer-link">Surface Laptop Studio 2</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Surface Laptop Go 3</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Surface Pro 9</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Surface Laptop 5</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Surface Studio 2+</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Copilot in Windows</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Microsoft 365</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Windows 11 apps</a></li>
          </ul>
          <ul className="list-style">
            <li><strong>Microsoft Store</strong></li>
            <li><a href="#" className="links text-secondary style-footer-link">Account profile</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Download center</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Microsoft Store support</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Returns</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Order tracking</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Certified Refurbished</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Microsoft Store Promise</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Flexible Payments</a></li>
          </ul>
          <ul className="list-style">
            <li><strong>Education</strong></li>
            <li><a href="#" className="links text-secondary style-footer-link">Microsoft in education</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Devices for education</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Microsoft Teams for Education</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Microsoft 365 Education</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">How to buy for your school</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Educator training and development</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Deals for students and parents</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Azure for students</a></li>
          </ul>
          <ul className="list-style">
            <li><strong>Business</strong></li>
            <li><a href="#" className="links text-secondary style-footer-link">Microsoft Cloud</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Microsoft Security</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Dynamics 365</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Microsoft 365</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Microsoft Power Platform</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Microsoft Teams</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Microsoft Industry</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Small Business</a></li>
          </ul>
          <ul className="list-style">
            <li><strong>Developer & IT</strong></li>
            <li><a href="#" className="links text-secondary style-footer-link">Azure</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Developer Center</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Documentation</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Microsoft Learn</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Microsoft Tech Community</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Azure Marketplace</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">AppSource</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Visual Studio</a></li>
          </ul>
          <ul className="list-style">
            <li><strong>Company</strong></li>
            <li><a href="#" className="links text-secondary style-footer-link">Careers</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">About Microsoft</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Company news</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Privacy at Microsoft</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Investors</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Diversity and inclusion</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Accessibility</a></li>
            <li><a href="#" className="links text-secondary style-footer-link">Sustainability</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;