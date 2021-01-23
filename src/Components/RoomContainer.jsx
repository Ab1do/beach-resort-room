import React, { useContext } from "react";
import RoomContext from "../context/RoomContext";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";

const RoomContainer = () => {
  const { loading, storedRoom, rooms } = useContext(RoomContext);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={storedRoom} />
    </>
  );
};

export default RoomContainer;
