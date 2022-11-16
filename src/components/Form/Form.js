import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <form onSubmit={props.addCourse}>
      <input
        type="text"
        onChange={props.updateCoures}
        value={props.current}
        className="course-input"
      />
      <input
        type="submit"
        value="Add Course"
        className="course-submit"
      />
    </form>
  );
};

export default Form;
