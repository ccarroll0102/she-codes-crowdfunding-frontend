import "./AboutPage.css";
import Bubble2 from "../assets/Bubble2.png";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";


function AboutPage() {
  return (
    <>
    <div id="aboutInfo">
    <p className="pill pillText">Our Story </p>
    <h2 className="h2 text-white">Every Child Deserves to Feel Safe in Water</h2>
    <p className="bodyCopy text-white">Swimmerly was founded with a simple belief, that learning to swim should be accessible to every child, regardless of their family's financial situation.</p>
    </div>

    <div id="aboutBody">
    <div id="aboutBody-left">
    <h3 className="h3">Why we started Swimmerly</h3>
    <p> In Australia, drowning remains one of the leading causes of accidental death for children under 5. Yet thousands of families struggle to afford swimming lessons for their kids. We knew something had to change.</p>
    <p> Swimmerly bridges this gap by connecting communities who want to help with children who need support. We make it easy for surf life saving clubs, swim centers, and individuals to raise funds for swimming education.</p>
    <br />
    <h3 className="h3">What makes Swimmerly different</h3>
    <ul className="bubble-list">
    <li><img src={Bubble2} alt="" /><span>All donations go directly to swimming lessons for kids</span></li>
    <li><img src={Bubble2} alt="" /><span>We partner only with accredited schools and clubs</span></li>
    <li><img src={Bubble2} alt="" /><span>Full transparency on where every dollar is spent</span></li>
    <li><img src={Bubble2} alt="" /><span>Easy fundraising tools for clubs and individuals</span></li>
    <li><img src={Bubble2} alt="" /><span>Community focus that brings people together</span></li>
    </ul>
    </div>
    <div id="aboutBody-right">
    <FeatureCard
      title="Start a Fundraiser"
      description="Help kids in your community learn to swim. It's free to create a campaign."
      buttonLabel="Start Fundraising"
      buttonStyle="btn-primary"
      to="/create"
      authRedirect={true}
    />
    <FeatureCard
      title="Get in Touch"
      description="Have questions? We'd love to hear from you."
      buttonLabel="Contact Us"
      buttonStyle="btn-blue"
      to="/contact"
    />
    </div>
    </div>
  

     <div id="values"> 
      <h3 className="h3">Our Values</h3>
      <div id="valuesGrid">
        <div>
      <h4>Safety First</h4>
      <p>Water safety is a life skill. We prioritize programs that teach proper swimming technique and water awareness.</p>
        </div>
      <div>
      <h4>Community Powered</h4>
      <p>We believe in the power of communities coming together to support the next generation of swimmers.</p>
      </div>
      <div>
      <h4>100% Transparency</h4>
      <p>Every dollar raised goes directly to swimming programs. We show exactly where your donation goes.</p>
      </div>
      </div>
     </div>
      <Footer />
    </>
  );
}

export default AboutPage;