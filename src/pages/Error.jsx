import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import Hero from "../Components/Hero";

const Error = () => {
  return <Hero >
    <Banner title="404" subtitle="Page not Found" >
      <Link to="/" className="btn-primary">Return hoom</Link>
    </Banner>
  </Hero>
};

export default Error;
