import React from "react";
import Information from "./Information";
import Button from "./Button";
import "./Profile.css";

const Profile = (props) => {
  const profile = props.profile;
  return (
    <div className="contenedor">
      <img className="avatar" src={profile.avatar} alt="" />
      <Information name={profile.name} info={profile.info} />
      <Button />
    </div>
  );
};

export default Profile;
