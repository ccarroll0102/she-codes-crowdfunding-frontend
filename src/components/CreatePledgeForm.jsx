import { useAuth } from "../hooks/use-auth.js"
import { useState } from "react";
import postPledge from "../api/post-pledge.js";
import { Link } from "react-router-dom";
import "./CreatePledgeForm.css";

function CreatePledgeForm({ fundraiserId, onPledgeCreated }) {
    const { auth } = useAuth();
    const [formData, setFormData] = useState({
        amount: "",
        comment: "",
        anonymous: false,
        fundraiser: Number(fundraiserId)
    });

    const presetAmounts = [25, 50, 75, 100];

    const handlePresetClick = (amount) => {
        setFormData({ ...formData, amount });
    };

    const handleChange = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setFormData({ ...formData, [event.target.name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postPledge(formData, auth.token)
            .then(() => onPledgeCreated())
            .catch((err) => alert(err.message));
    };

    if (!auth.token) {
        return (
            <div className="pledge-form-card">
                <h5 className="h5">Submit a Pledge</h5>
                <p>You must <Link to="/login">log in</Link> to make a pledge.</p>
            </div>
        );
    }

    return (
        <form className="pledge-form-card" onSubmit={handleSubmit}>
            <h5 className="h5">Submit a Pledge</h5>
            <div>
                <p className="custom-amount-label">Select amount</p>
                <div className="preset-amounts">
                    {presetAmounts.map((amount) => (
                        <button
                            key={amount}
                            type="button"
                            className={formData.amount === amount ? "selected" : ""}
                            onClick={() => handlePresetClick(amount)}
                        >
                            ${amount}
                        </button>
                    ))}
                </div>
            </div>
            <label className="custom-amount-label">
                Enter custom amount
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="$"
                />
            </label>
            <label className="custom-amount-label">
                Leave a comment
                <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Write a message..."
                />
            </label>
            <label className="anonymous-label">
                <input
                    type="checkbox"
                    name="anonymous"
                    onChange={handleChange}
                    checked={formData.anonymous}
                />
                Pledge anonymously
            </label>
            <button className="btn-primary" type="submit">Submit</button>
        </form>
    );
}

export default CreatePledgeForm;
