import { useParams } from "react-router-dom";
import useFundraiser from "../hooks/use-fundraiser";
import CreatePledgeForm from "../components/CreatePledgeForm";
import "./FundraiserPage.css";
import Footer from "../components/Footer.jsx";

function FundraiserPage() {
// Here we use a hook that comes for free in react router called `useParams` to get the id from the URL so that we can pass it to our useFundraiser hook.
   const { id } = useParams();
   // useFundraiser returns three pieces of info, so we need to grab them all here
   const { fundraiser, isLoading, error, refetch } = useFundraiser(id);

   if (isLoading) {
        return (<p>loading...</p>)
   }

   if (error) {
        return (<p>Error: {error.message}</p>)
   }

   return (
       <>
           <div id="fundraiserHero">
               <h2 className="text-white">{fundraiser.title}</h2>
               <p className="text-white">{fundraiser.description}</p>
               <div id="fundraiser-pills">
                   <span className="pill pillText">Created: {new Date(fundraiser.date_created).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
                   <span className="pill pillText">{`Status: ${fundraiser.is_open ? "Open" : "Closed"}`}</span>
               </div>
               </div>
               <div id="fundraiser-body">
               <div id="pledges-column">
               <h3>Recent Supporters:</h3>
               <div id="pledge-list">
                   {fundraiser.pledges.map((pledgeData, key) => {
                       return (
                           <div className="pledge-card" key={key}>
                               <div className="pledge-card-left">
                                   <p className="pledge-supporter">{pledgeData.supporter}</p>
                                   {pledgeData.comment && <p className="pledge-comment">{pledgeData.comment}</p>}
                                   {pledgeData.date_created && <p className="pledge-date">{new Date(pledgeData.date_created).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>}
                               </div>
                               <p className="pledge-amount">${pledgeData.amount}</p>
                           </div>
                       );
                   })}
               </div>
               </div>
               <CreatePledgeForm fundraiserId={id} onPledgeCreated={refetch}/>
               </div>
           <Footer />
       </>
   );
}

export default FundraiserPage;