/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Blog from "./Blog";


const BlogPage = () => {


  return (
    <div
      className="md:px-32 h-full w-full py-16 px-4 receipt-box"
    //   style={{ backgroundColor: "#101418", color: "white" }}
    >

      <div className=" actual-receipt">
        <h1 className="text-center mt-3 font-semibold text-5xl">
          Frequently Asked Questions
        </h1>
        <Blog></Blog>

      </div>
    </div>
  );
};

export default BlogPage;
