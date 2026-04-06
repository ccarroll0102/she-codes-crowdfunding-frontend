import "./ContactUsPage.css";
import Footer from "../components/Footer.jsx";

function ContactUsPage() {
  return (
    <>
      <div id="ContactHeader">
        <h1 className="h1 text-white">Contact Us</h1>
        <p className="bodyCopy text-white">Have questions? We'd love to hear from you.</p>
      </div>

        <div className = "ContactDetails">
          <div>
            <h5 className="h5">Email us</h5>
            <p>For general enquiries and support</p>
            <a href="mailto:contact@swimmerly.com">hello@swimmerly.com.au</a>
            <p className="bodyCopy"></p>
          </div>
          <div>
            <h5 className="h5">Location</h5>
            <p>Based in Sydney, Australia</p>
            <p className="bodyCopy">Supporting communities nationwide</p>
          </div>
          <div>
            <h5 className="h5">Response Time</h5>
            <p>We aim to respond within 24-48 hours</p>
            <p className="bodyCopy">Monday to Friday, 9am - 5pm AEST</p>
          </div>
        </div>

      <Footer />
    </>
  );
}

export default ContactUsPage;