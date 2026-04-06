import { Link } from "react-router-dom";
import "./FundraiserCard.css";

const pills = ["Individual", "Swim Center", "Surf Club"];

function FundraiserCard(props) {
  const { fundraiserData, index } = props;
  const fundraiserLink = `/fundraiser/${fundraiserData.id}`;

  return (
    <div className="fundraiser-card">
      <div className="card-top">
        <span className="card-pill">{pills[index]}</span>
        <h4>{fundraiserData.title}</h4>
      </div>

       <div className="card-bottom">
       <p>{fundraiserData.description}</p>
       <p>Goal: ${fundraiserData.goal}</p>
       <Link to={fundraiserLink}>
        <button className="btn-primary card-donate">Donate Now</button>
        </Link>
    </div>
  </div>
  );
}

export default FundraiserCard;
