import React, { useRef, useState } from "react";
import "./List.css";
import "../Form/Form.css";

const List = (props) => {
  const [edit, setEdit] = useState(false);

  const coursesMap = () => {
    return (
      <li>
        <span>{props.i + 1}-</span>
        <span className="course-name">{props.course.name}</span>
        <button onClick={toggleEdit}>Edit</button>
        <button
          name={props.course.name}
          onClick={props.deleteCourse}
        >
          Delete
        </button>
      </li>
    );
  };

  // toggle edit
  const toggleEdit = () => {
    setEdit(!edit);
  };

  //useRef
  const updateInput = useRef();

  // update course
  const updateCourse = (e) => {
    e.preventDefault();
    props.editCourse(props.index, updateInput.current.value);
    // console.log(updateInput.current.value);
    toggleEdit();
  };

  // render update form
  const renderUpdateForm = () => {
    return (
      <form
        className="update-form"
        onSubmit={updateCourse}
      >
        <input
          type="text"
          className="course-update"
          defaultValue={props.course.name}
          ref={updateInput}
        />
        <button className="update-submit">Update</button>
      </form>
    );
  };

  return <div>{edit ? renderUpdateForm() : coursesMap()}</div>;
};

export default List;
