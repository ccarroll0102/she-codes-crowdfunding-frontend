import { Link } from "react-router-dom";
import "./FundraiserCard.css";

const colors = ["#007B87", "#008CD5", "#FC494D"];

function FundraiserCard(props) {
  const { fundraiserData, index } = props;
  const fundraiserLink = `/fundraiser/${fundraiserData.id}`;
  const color = colors[index % colors.length];

  return (
    <div className="fundraiser-card">
      <div className="card-top" style={{ backgroundColor: color }}>
        <span className="card-pill">Goal: ${fundraiserData.goal}</span>
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
