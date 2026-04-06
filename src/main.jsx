import React from "react";
import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import FundraiserPage from "./pages/FundraiserPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import FundraisersPage from "./pages/FundraisersPage.jsx";
import CreateFundraiserPage from "./pages/CreateFundraiserPage.jsx";

import NavBar from "./components/NavBar.jsx";
import { AuthProvider } from "./components/AuthProvider.jsx";

 
const router = createBrowserRouter([
   {
       path: "/",
       element: <NavBar />,
       children: [
           { path: "/", element: <HomePage /> },
           { path: "/login", element: <LoginPage /> },
           { path: "/signup", element: <SignUpPage /> },
           { path: "/about", element: <AboutPage /> },
           { path: "/contact", element: <ContactUsPage /> },
           { path: "/fundraisers", element: <FundraisersPage /> },
           { path: "/create", element: <CreateFundraiserPage /> },
           { path: "/fundraiser/:id", element: <FundraiserPage /> },
       ],
   },
 ]);

 ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
   </React.StrictMode>
 );