import React, { useState, useContext, useEffect } from "react";
import { ListGroup, ListGroupItem, ListGroupItemText } from "reactstrap";
import UserContext from "../../hooks/UserContext";
import BackendApi from "../../api/api";
import BackButton from "../buttons/BackButton";
import "./Profile.css";
const Profile = () => {
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
  return (
    <div className="container">
      <main>
        <BackButton />
        <h3>Oh, the places you've been...</h3>
        <ListGroup>
          {userData.selections.map((s) => {
            return (
              <ListGroupItem key={s.yelp_id}>
                <ListGroupItemText>{s.name}</ListGroupItemText>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </main>
    </div>
  );
};

export default Profile;
