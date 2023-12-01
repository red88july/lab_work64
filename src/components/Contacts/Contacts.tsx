import React from 'react';
import '../../styles.css';

const Contacts: React.FC = () => {
  return (
    <>
      <div className="" style={{backgroundColor: '#0067b8'}}>
        <div className="d-flex flex-column justify-content-center align-items-center container pt-5">
          <h3 className="text-white mb-4">Contact us</h3>
          <p className="text-white mb-4">
            Sign in so we can get you the right help and support.
          </p>
          <a href="#" className="btn-sign border border-white text-white text-center mb-5">Sign In</a>
        </div>
      </div>
      <div className="container mt-5">
        <h4>Select the product you need help with</h4>
        <p>We'll show you self-help options first. Additional help is available if you need it, including live chat with
          a Microsoft specialist.</p>
        <div className="d-flex mt-5 gap-3 flex-wrap">
          <a href="#" className="d-flex flex-column align-items-center justify-content-center link-box">
            <div className="card-microsoft d-flex flex-column sizing-link-box"></div>
            <span className="text-dark pt-1">Microsoft 365</span>
          </a>
          <a href="#" className="d-flex flex-column align-items-center justify-content-center link-box">
            <div className="card-office d-flex flex-column sizing-link-box"></div>
            <span className="text-dark pt-1">Office</span>
          </a>
          <a href="#" className="d-flex flex-column align-items-center justify-content-center link-box">
            <div className="card-windows d-flex flex-column sizing-link-box"></div>
            <span className="text-dark pt-1">Windows</span>
          </a>
          <a href="#" className="d-flex flex-column align-items-center justify-content-center link-box">
            <div className="card-xbox d-flex flex-column sizing-link-box"></div>
            <span className="text-dark pt-1">Xbox</span>
          </a>
          <a href="#" className="d-flex flex-column align-items-center justify-content-center link-box">
            <div className="card-surface d-flex flex-column sizing-link-box"></div>
            <span className="text-dark pt-1">Surface device</span>
          </a>
          <a href="#" className="d-flex flex-column align-items-center justify-content-center link-box">
            <div className="card-dynamics d-flex flex-column sizing-link-box"></div>
            <span className="text-dark pt-1">Dynamics 365</span>
          </a>
          <a href="#" className="d-flex flex-column align-items-center justify-content-center link-box">
            <div className="card-intune d-flex flex-column sizing-link-box"></div>
            <span className="text-dark pt-1">Intune</span>
          </a>
          <a href="#" className="d-flex flex-column align-items-center justify-content-center link-box">
            <div className="card-azure d-flex flex-column sizing-link-box"></div>
            <span className="text-dark pt-1">Azure</span>
          </a>
          <a href="#" className="d-flex flex-column align-items-center justify-content-center link-box">
            <div className="card-server d-flex flex-column sizing-link-box"></div>
            <span className="text-dark pt-1">Server products</span>
          </a>
        </div>
        <div className="d-flex mt-5 gap-3 flex-wrap mb-3">
          <a href="#" className="d-flex flex-column align-items-center justify-content-center link-box">
            <div className="card-accessories d-flex flex-column sizing-link-box"></div>
            <span className="text-dark pt-1">PC accessories</span>
          </a>
          <a href="#" className="d-flex flex-column align-items-center justify-content-center link-box">
            <div className="card-advertising d-flex flex-column sizing-link-box"></div>
            <span className="text-dark pt-1">Advertising</span>
          </a>
        </div>
        <a href="#" className="link-list">Show expanded list of products</a>
        <div className="mt-5">
          <h2>More support options</h2>
          <div className="main-option-box d-flex mt-3 gap-5">
            <div className="link-option-item">
              <a href="#" className="link-option">Business Assist</a>
              <p>Subscribe to Business Assist to get expert advice
                from small-business specialists. Already a subscriber?
                <a href='#' className="link-option"> sign in now</a>
              </p>
            </div>
            <div className="link-option">
              <a href="#" className="link-option">Help for admins of small businesses</a>
              <p>Open a service request in the Microsoft 365 admin center. This service is free.</p>
            </div>
            <div className="link-option">
              <a href="#" className="link-option">Microsoft Store support</a>
              <p>"Get help and support, whether you're shopping now or need help with a past purchase."</p>
            </div>
          </div>
        </div>
      </div>
      <div className="box-footer pt-3 pb-3 mt-5 gap-3 bg-secondary-subtle">
          <div className="d-flex justify-content-center align-items-center border-bottom border-secondary pb-3">
            <h5 className="m-0 me-5 text-secondary">Was this information helpful?</h5>
            <div className="d-flex flex-row gap-3">
              <button type="button" className="btn-info">Yes</button>
              <button type="button" className="btn-info">No</button>
            </div>
          </div>
        <div className="d-flex flex-wrap justify-content-between pt-4 pb-5 container">
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

export default Contacts;