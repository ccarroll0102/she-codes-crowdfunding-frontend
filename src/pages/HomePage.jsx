import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import useFundraisers from "../hooks/use-fundraisers";
import FundraiserCard from "../components/FundraiserCard";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import Bubble1 from "../assets/Bubble1.png";
import Bubble2 from "../assets/Bubble2.png";
import Bubble3 from "../assets/Bubble3.png";
import Bubble4 from "../assets/Bubble4.png";

function HomePage() {
    const { fundraisers } = useFundraisers();
    const { auth } = useAuth();
    const navigate = useNavigate();

    const handleStartFundraising = () => {
        if (auth.token) {
            navigate("/create");
        } else {
            navigate("/login");
        }
    };

    return (
        <> 
            <div id="hero">
                <p className="pill pillText">Water Safety for Every Child</p>   
                <h1 className="h1 text-white"> Help Kids Learn to Swim</h1>
                <p className="bodyCopy text-white"> Support swimming lessons for children through surf life saving clubs, swim centers and community programs.</p>
                <div id ="hero-buttons">
                <button onClick={handleStartFundraising} className="btn-primary">Start Fundraising</button>
                <Link to="/fundraisers"><button className="btn-secondary">Donate Now</button></Link>    
                </div>
            </div>

            <div id="info">
                <p className="caption"> Simple Process</p>
                <h2 className="h2"> How Swimmerly Works </h2>
                <p className="bodyCopy"> Start fundraising for swimming lessons in four easy steps. </p>
            </div>

            <div id="steps">
                <div>
                <img src={Bubble1} alt="Bubble"/>
                <h4 className="h4">Create Your Fundraiser</h4>
                <p className="bodyCopy"> Set up your fundraising page in minutes with your story and swimming goal.</p>
                </div>
                <div>
                <img src={Bubble2} alt="Bubble"/>
                <h4 className="h4">Share Your Story</h4>
                <p className="bodyCopy">Spread the word with family and friends via social media and email.</p>
                </div>
                <div>
                <img src={Bubble3} alt="Bubble"/>
                <h4 className="h4">Collect Donations</h4>
                <p className="bodyCopy">Receive donations securely. Every dollar goes toward swimming lessons.</p>
                </div>
                <div>
                <img src={Bubble4} alt="Bubble"/>
                <h4 className="h4">Start Swimming!</h4>
                <p className="bodyCopy">Funds go directly to your chosen swim program. Kids start learning!</p>
                </div>
            </div>

            <div id="features">
                <p className="caption">Featured Fundraisers</p>
                <h2 className="h2">Help These Kids Learn to Swim</h2>
                <div id="fundraiser-list">
                    {fundraisers.map((fundraiserData, key) => {
                        return <FundraiserCard key={key} fundraiserData={fundraiserData} index={key} />;
                    })}
                </div>
            </div>
        <Footer />
        </>
);

};

export default HomePage;