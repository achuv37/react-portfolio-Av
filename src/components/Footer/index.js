import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href='http://github.com/achuv37' target='_blank'>
          <img 
            src={require("../../assets/logos/github.png")}
            alt="GitHub"
            className="logos"
          ></img>
        </a>
      </div>
      
      <div>
        <a href='https://www.linkedin.com/' target='_blank'>
          <img 
            src={require("../../assets/logos/linkedin.png")}
            alt="linkedin"
            className="logos"
          ></img>
        </a>
      </div>
      <div>
        <a href='https://www.twitter.com/' target='_blank'>
          <img 
            src={require("../../assets/logos/twitter.png")}
            alt="twitter"
            className="logos"
          ></img>
        </a>
      </div>
    </footer>
  );
  
}

export default Footer;