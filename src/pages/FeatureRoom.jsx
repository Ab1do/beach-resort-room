import React, { Component } from "react";
import Loading from "../Components/Loading";
import Room from "../Components/Room";
import Title from "../Components/Title";
import RoomContext from "../context/RoomContext";

class FeatureRoom extends Component {
  state = {};
  static contextType = RoomContext;

  render() {
    let { loading, featuredRoom: rooms } = this.context;

    rooms = rooms.map((room) => <Room key={room.id} room={room} />);
    return (
      <section className="featured-rooms">
        <Title title="feature rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeatureRoom;
