import "./SearchForm.css";
import React, { useContext } from "react";
import { Form } from "reactstrap";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  TextField,
} from "@material-ui/core";
import UserContext from "../../hooks/UserContext";
import { useHistory } from "react-router";

const SearchForm = () => {
  const history = useHistory();
  const { searchData, setSearchData } = useContext(UserContext);
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
      <FormControl>
        <RadioGroup
          row
          aria-label="location"
          name="type"
          value={searchData.type}
          onChange={handleChange}
          required
        >
          <FormControlLabel
            value="bar"
            control={<Radio color="primary" />}
            label="Bar"
            labelPlacement="top"
          />
          <FormControlLabel
            value="restaurant"
            control={<Radio color="primary" />}
            label="Restaurant"
            labelPlacement="top"
          />
          <FormControlLabel
            value="coffee"
            control={<Radio color="primary" />}
            label="Coffee"
            labelPlacement="top"
          />
          <FormControlLabel
            value="dessert"
            control={<Radio color="primary" />}
            label="Dessert"
            labelPlacement="top"
          />
        </RadioGroup>
        <FormLabel className="label" component="legend">
          Search Radius
        </FormLabel>
        <RadioGroup
          row
          aria-label="distance"
          name="distance"
          value={searchData.distance}
          onChange={handleChange}
        >
          <FormControlLabel
            value="0.25"
            control={<Radio />}
            label="1/4 mile"
            labelPlacement="top"
          />
          <FormControlLabel
            value="0.5"
            control={<Radio />}
            label="1/2 mile"
            labelPlacement="top"
          />
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="1 mile"
            labelPlacement="top"
          />
          <FormControlLabel
            value="5"
            control={<Radio />}
            label="5 miles"
            labelPlacement="top"
            required
          />
        </RadioGroup>
        <FormGroup>
          <FormLabel className="label" htmlFor="location">
            Location
          </FormLabel>
          <TextField
            id="location"
            name="location"
            type="text"
            variant="outlined"
            value={searchData.location}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <Button id="btn" variant="contained" color="primary" type="submit">
          Give Me Some Options
        </Button>
      </FormControl>
    </Form>
  );
};

export default SearchForm;
