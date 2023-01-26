import React from "react";
import { useState } from "react";
import style from "./SearchBar.module.css";
import Validation from "./Validation/Validation";

const SearchBar = (props) => {
  const fecha_actual = new Date().toLocaleDateString();
  const [buttonActive, setButtonActive] = useState(false);
  const [input, setInput] = useState({
    check_in: "",
    check_out: "",
    adults: "",
    children: "",
  });

  const [errors, setErrors] = useState({
    check_in: "",
    check_out: "",
    adults: "",
    children: "",
    max_cant: "",
  });

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors(Validation({ ...input, [e.target.name]: e.target.value }));
  };

  const submitChange = (e) => {
    e.preventDefault();
    alert("Click");
  };

  return (
    <div className={style.flexContainer}>
      <div className={style.searchBar}>
        <form onSubmit={submitChange} className={style.containerSearchbar}>
          {errors.max_cant && <p className={style.error}>{errors.max_cant}</p>}

          <div>
            <div className={style.containerInpErrors}>
              <div className={style.containerInput}>
                <input
                  type="date"
                  placeholder="Check-in"
                  name="check_in"
                  className={style.date}
                  value={input.check_in}
                  onChange={handleInputChange}
                />
              </div>
              {errors.check_in && (
                <p className={style.error}>{errors.check_in}</p>
              )}
            </div>
          </div>

          <div>
            <div className={style.containerInpErrors}>
              <div className={style.containerInput}>
                <input
                  type="date"
                  placeholder="Check-out"
                  name="check_out"
                  className={style.date}
                  value={input.check_out}
                  onChange={handleInputChange}
                />
              </div>
              {errors.check_out && (
                <p className={style.error}>{errors.check_out}</p>
              )}
            </div>
          </div>

          <div>
            <div className={style.containerInpErrors}>
              <div className={style.containerInput}>
                <input
                  type="number"
                  placeholder="Adults"
                  className={style.pl}
                  value={input.adults}
                  onChange={handleInputChange}
                  name="adults"
                  min="0"
                />
                <span className={style.iconAdults}></span>
              </div>
              {errors.adults && <p className={style.error}>{errors.adults}</p>}
            </div>
          </div>

          <div>
            <div className={style.containerInpErrors}>
              <div className={style.containerInput}>
                <input
                  type="number"
                  placeholder="Children"
                  className={style.pl}
                  value={input.children}
                  onChange={handleInputChange}
                  name="children"
                  min="0"
                />
                <span className={style.iconChildren}></span>
              </div>
              {errors.children && (
                <p className={style.error}>{errors.children}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={
              errors.adults ||
              errors.check_in ||
              errors.check_out ||
              errors.children ||
              errors.max_cant ||
              input.check_in == "" ||
              input.check_out == "" ||
              input.adults == "" ||
              input.children == ""
                ? !buttonActive
                : buttonActive
            }
            className={
              errors.adults ||
              errors.check_in ||
              errors.check_out ||
              errors.children ||
              errors.max_cant ||
              input.check_in == "" ||
              input.check_out == "" ||
              input.adults == ""
                ? style.buttonOff
                : style.buttonOn
            }
          >
            Booking Now
          </button>
        </form>
      </div>
    </div>
  );
};







export default SearchBar;