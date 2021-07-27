import React, { useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import SearchContext from "../hooks/SearchContext";
import { useHistory } from "react-router";

const SearchForm = () => {
  const history = useHistory();
  const { searchData, setSearchData } = useContext(SearchContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    history.push("/decide");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="bar">Bar</Label>
        <Input
          id="bar"
          name="type"
          type="radio"
          value="bar"
          onChange={handleChange}
        />
        <Label htmlFor="restaurant">Restaurant</Label>
        <Input
          id="restaurant"
          name="type"
          type="radio"
          value="restaurant"
          onChange={handleChange}
        />
        <Label htmlFor="cafe">Cafe</Label>
        <Input
          id="cafe"
          name="type"
          type="radio"
          value="cafe"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          type="text"
          value={searchData.location}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default SearchForm;
