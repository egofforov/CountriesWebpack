const searchFormEl = document.querySelector(".search");

searchFormEl.search.addEventListener("input", () => {
  const inputValue = searchFormEl.search.value.toLowerCase();
  const cadsItem = document.querySelectorAll(".cards__item");
  const cardsTitles = document.querySelectorAll(".cards__title");
  cardsTitles.forEach((title, i) => {
    if (title.textContent.toLowerCase().includes(inputValue)) {
      cadsItem[i].style.display = "block";
    } else {
      cadsItem[i].style.display = "none";
    }
  });
});

const serchSelect = document.querySelectorAll(".search__select-list li ");
const searchSelectSpan = document.querySelector(".search__select span");

import { createCountries } from "./updateUI";
import request from "./request";

serchSelect.forEach((li) => {
  li.addEventListener("click", () => {
    searchSelectSpan.textContent = li.textContent;

    let filterAPI;

    if (li.textContent == "All") {
      filterAPI = "https://restcountries.com/v3.1/all";
    } else {
      filterAPI = `https://restcountries.com/v3.1/region/${li.textContent}`;
    }

    request(filterAPI)
      .then((data) => {
        createCountries(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  });
});
