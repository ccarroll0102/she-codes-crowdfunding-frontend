import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer id="footer">
        <div id="footer-top">
          <h2 className="h2 text-white">Ready to Help a Child Learn to Swim?</h2>
          <p className="bodyCopy text-white">Start your fundraising journey today. Whether you're a parent, coach, or community member, you can make a difference.</p>
        </div>
        <div id="footer-columns">
          <div id="footer-left">
            <h6>Swimmerly</h6>
            <p>Helping children learn essential water safety skills through community-powered fundraising.</p>
          </div>
          <div id="footer-right">
            <div>
              <p className="footer-heading">Fundraise</p>
              <Link to="/create">Start a Fundraiser</Link>
              <Link to="/fundraisers">Donate Now</Link>
            </div>
            <div>
              <p className="footer-heading">Support</p>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  export default Footer;
