import useFundraisers from "../hooks/use-fundraisers";
import FundraiserCard from "../components/FundraiserCard";
import Footer from "../components/Footer";

function FundraisersPage() {
    const { fundraisers } = useFundraisers();

    return (
        <>
            <div id="fundraisers-page">
                <h2 className="h2">All Fundraisers</h2>
                <div id="fundraiser-list">
                    {fundraisers.map((fundraiserData, key) => (
                        <FundraiserCard key={key} fundraiserData={fundraiserData} index={key} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FundraisersPage;
