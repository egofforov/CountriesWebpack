import "./../css/mian.css";

import request from "./request";

const API = "https://restcountries.com/v3.1/all";

import { createCountries } from "./updateUI";
import "./filter";
import "./mode";

request(API)
  .then((data) => {
    createCountries(data);
  })
  .catch((err) => {
    alert(err.message);
  });
