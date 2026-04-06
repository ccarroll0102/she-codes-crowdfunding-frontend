import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import "./FeatureCard.css";

function FeatureCard({ title, description, buttonLabel, buttonStyle, to, authRedirect }) {
    const { auth } = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {
        if (authRedirect && !auth.token) {
            navigate("/login");
        } else {
            navigate(to);
        }
    };

    return (
      <div className="feature-card">
        <h4 className="h4">{title}</h4>
        <p className="bodyCopy">{description}</p>
        <button className={buttonStyle} onClick={handleClick}>{buttonLabel}</button>
      </div>
    );
}

export default FeatureCard;
