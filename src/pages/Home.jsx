import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import FeatureRoom from "./FeatureRoom";
const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe Rooms Starting At $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatureRoom />
    </React.Fragment>
  );
};

export default Home;
