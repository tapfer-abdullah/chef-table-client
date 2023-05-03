/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Header from "../../SharePages/Header";
import Footer from "../../SharePages/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
        <Header></Header>
      <div 
      id="error-page" 
      className="text-center py-10 text-danger"
    //   style={{height: "400px"}}
      >
        <div className="py-5">
            <img 
            style={{height: "400px", width: "400px", borderRadius: "50%", margin: "0 auto"}}
            src="https://miro.medium.com/v2/resize:fit:800/1*hFwwQAW45673VGKrMPE2qQ.png" alt="" />
        </div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-danger mt-2 mb-4">
          <i>{error.statusText || error.message}</i>
        </p>
        <button className="btn btn-outline text-success hover:btn-accent">
              <Link to={`/`}>Back to Home</Link>
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
