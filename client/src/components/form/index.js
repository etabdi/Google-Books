import React from "react";
import './style.css';



function Form(props){
return (
  <div className="container">
  <form>
    <div className="form-group">
      <br/>
      <label htmlFor="search"><h4>Search for and save Books of Interest</h4></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search a Book"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3 mb-5">
        Search
        </button>
    </div>
  </form>
  </div>
);
}

export default Form;