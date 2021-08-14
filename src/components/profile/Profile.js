import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../hooks/UserContext";
import BackendApi from "../../api/api";
import BackButton from "../buttons/BackButton";
import AlertDialog from "../buttons/AlertDialog";
import CategoryCard from "../categories/CategoryCard";
import formatSelections from "../../helpers/selections";
import "./Profile.css";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let categoryArr = [];

  useEffect(() => {
    async function getUserSelections() {
      let username = user.username;
      let results = await BackendApi.GetUser(username);
      setUserData(results);
      setIsLoading(false);
    }
    getUserSelections();
  }, [user]);

  if (isLoading) {
    return <p data-testid="loading">Loading &hellip;</p>;
  }
  if (userData) {
    categoryArr = formatSelections(userData.selections);
  }

  function hasPreferences() {
    return (
      <div>
        <div>
          {" "}
          <h2> Hi, {user.firstName}!</h2>
          <br />{" "}
          <p style={{ fontSize: "20px" }}>
            According to your selections, these are your favorite categories.
          </p>
          <AlertDialog />
        </div>
        <ul className="profile-ul">
          {categoryArr.map((c) => {
            return <CategoryCard key={c} cat={c} />;
          })}
        </ul>
      </div>
    );
  }

  function noPreferences() {
    return (
      <div>
        <div>
          {" "}
          <h2> Hi, {user.firstName}!</h2>
          <br />{" "}
        </div>
        <div>
          Once we have a good idea of your preferences, we'll show them here!
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <main>
        <BackButton />
        {categoryArr.length ? hasPreferences() : noPreferences()}
      </main>
    </div>
  );
};

export default Profile;
