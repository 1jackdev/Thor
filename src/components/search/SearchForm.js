import "./SearchForm.css";
import React, { useContext } from "react";
import { Form } from "reactstrap";
import UserContext from "../../hooks/UserContext";
import { useHistory } from "react-router";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";

const SearchForm = () => {
  const history = useHistory();
  const { searchData, setSearchData, geo } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!searchData.location && !geo.error) {
      searchData.coordinates = geo.coordinates;
    }
    history.push("/decide");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <ButtonGroup
          value={searchData.type}
          className="button-group"
          aria-label="outlined location button group"
          size="small"
        >
          <Button
            value="bar"
            name="type"
            variant={searchData.type === "bar" ? "contained" : "outlined"}
            onClick={handleChange}
          >
            Bar
          </Button>
          <Button
            value="restaurant"
            name="type"
            variant={
              searchData.type === "restaurant" ? "contained" : "outlined"
            }
            onClick={handleChange}
          >
            Restaurant
          </Button>
          <Button
            value="coffee"
            name="type"
            variant={searchData.type === "coffee" ? "contained" : "outlined"}
            onClick={handleChange}
          >
            Coffee
          </Button>
          <Button
            value="dessert"
            name="type"
            variant={searchData.type === "dessert" ? "contained" : "outlined"}
            onClick={handleChange}
          >
            Dessert
          </Button>
        </ButtonGroup>
        <FormLabel className="label" component="legend">
          Search Radius (mi)
        </FormLabel>
        <Slider
          aria-label="Always visible"
          name="distance"
          min={0.25}
          max={5}
          value={searchData.distance}
          valueLabelDisplay="on"
          onChange={handleChange}
        />
        <FormGroup>
          <FormLabel className="label" htmlFor="location">
            Location
          </FormLabel>
          <TextField
            className="search-field"
            id="location"
            name="location"
            type="text"
            variant="standard"
            autoFocus={true}
            placeholder="e.g. Seattle Center"
            value={searchData.location}
            required={!!searchData.location && !!searchData.coordinates.lat}
            onChange={handleChange}
          />
        </FormGroup>
        <Button
          style={{ margin: "2rem" }}
          variant="contained"
          color="success"
          onClick={handleSubmit}
        >
          Give Me Some Options
        </Button>
      </FormControl>
    </Form>
  );
};

export default SearchForm;
