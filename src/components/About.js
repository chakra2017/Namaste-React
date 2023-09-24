import { useContext } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import React from "react";
const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>About</h1>
      <h4>{loggedInUser}</h4>
      <h2>this is react js</h2>
      {/* <User name={"Chakradhar (function)"} location={"Bangalore(function)"} /> */}
      <UserClass />
    </div>
  );
};

export default About;
