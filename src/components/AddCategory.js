import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Component to handle the functionality to add new categories.
 *
 * @param setCategories function to mutate the categories state from parent
 */
export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 0){
            setCategories((cats) => [...cats, inputValue]);
            setInputValue("");
        }
    }

  return (
    <>
      <h2>AddCategory</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}