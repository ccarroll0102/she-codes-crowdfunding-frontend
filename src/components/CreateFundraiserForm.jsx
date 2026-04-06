import { useState } from "react";
import { useAuth } from "../hooks/use-auth.js";
import { useNavigate } from "react-router-dom";
import postFundraiser from "../api/post-fundraiser.js";
import "./CreateFundraiserForm.css";
import Footer from "./Footer.jsx";
                 
function CreateFundraiserForm() {
    const { auth } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",                                       
        description: "",
        goal: "",
    });

    const handleChange = (event) => {
        const { name, type, value, files } = event.target;
        setFormData((prev) => ({ ...prev, [name]: type === "file" ? files[0] : value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postFundraiser(formData, auth.token)
            .then((fundraiser) => {
                navigate(`/fundraiser/${fundraiser.id}`);
            })
            .catch((err) => {
                console.error(err);
                alert(err.message);
            });
    };

    return (
        <>
        <div className="startfundraising-card">
            <h3>Start Fundraising</h3>
            <p className="bodyCopy">Create your fundraiser and share it with your community.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Fundraiser Title:
                    <input type="text" name="title" onChange={handleChange} />
                </label>
                <label>
                    Tell Your Story:
                    <textarea name="description" onChange={handleChange}></textarea>
                </label>
                <label>
                    Fundraiser Goal:
                    <input type="number" name="goal" onChange={handleChange} />
                </label>
                <label>
                    Image:
                    <input type="file" name="image" onChange={handleChange} />
                </label>
                <button className="btn-primary" type="submit">Create Fundraiser</button>
                <p className="disclaimer">By creating a fundraiser, you agree to our terms and conditions.</p>
            </form>
            </div>
        <Footer />
        </>
    )
}

export default CreateFundraiserForm;