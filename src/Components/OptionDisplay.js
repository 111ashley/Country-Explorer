import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {
  let currentPotentials = useSelector(selectPotentials);
  console.log(currentPotentials);
  let dispatch = useDispatch()
  return (
    <div className="stack">
      {currentPotentials.map((e, i) => {
        return (
          <h2 key={e.name.officials} className="country-option" onClick={dispatch(setDisplayCountry(currentPotentials[i]))}>
            {e.name.common}
          </h2>
        );
      })}
    </div>
  );
};

export default OptionDisplay;
