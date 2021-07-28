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
import SearchContext from "../../hooks/SearchContext";
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
      <FormControl>
        <FormLabel component="legend">Location Type</FormLabel>
        <RadioGroup
          row
          aria-label="location"
          name="type"
          value={searchData.type}
          onChange={handleChange}
          required
        >
          <FormControlLabel value="bar" control={<Radio />} label="Bar" />
          <FormControlLabel
            value="restaurant"
            control={<Radio />}
            label="Restaurant"
          />
          <FormControlLabel value="coffee" control={<Radio />} label="Coffee" />
          <FormControlLabel
            value="desserts"
            control={<Radio />}
            label="Desserts"
          />
        </RadioGroup>
        <FormLabel component="legend">Search Radius</FormLabel>
        <RadioGroup
          row
          aria-label="distance"
          name="distance"
          value={searchData.distance}
          onChange={handleChange}
          required
        >
          <FormControlLabel
            value="0.25"
            control={<Radio />}
            label="0.25 miles"
          />
          <FormControlLabel
            value="0.5"
            control={<Radio />}
            label="0.50 miles"
          />
          <FormControlLabel value="1" control={<Radio />} label="1 mile" />
          <FormControlLabel value="5" control={<Radio />} label="5 miles" />
        </RadioGroup>
        <FormGroup>
          <FormLabel htmlFor="location">Location</FormLabel>
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

        <Button
          id="btn"
          variant="contained"
          color="primary"
          type="submit"
        >
          Give Me Some Options
        </Button>
      </FormControl>
    </Form>
  );
};

export default SearchForm;
