import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";

const App = () => {
  const [courses, setCourses] = useState([{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }]);
  const [current, setCurrent] = useState("");

  //deleteCourse
  const deleteCourse = (e) => {
    const name = e.target.getAttribute("name");

    setCourses(courses.filter((course) => course.name !== name));
  };

  // updateCoures
  const updateCoures = (e) => {
    // console.log(e.target.value);
    setCurrent(e.target.value);
  };

  // console.log(current);
  //addCourse
  const addCourse = (e) => {
    e.preventDefault();
    setCourses([...courses, { name: current }]);
    setCurrent("");
  };

  // edit course
  const editCourse = (index, value) => {
    let course = courses[index];
    course.name = value;
    // console.log(courses);
  };
  // console.log(courses);

  // course List
  const courseList = courses.map((course, i) => {
    return (
      <List
        course={course}
        deleteCourse={deleteCourse}
        i={i}
        key={i}
        editCourse={editCourse}
        index={i}
      />
    );
  });

  return (
    <div className="App">
      <h1 className="app-title">CRUD APP</h1>
      <div>
        <h2 className="add-course">Add Courses</h2>
      </div>
      <div>
        <Form
          updateCoures={updateCoures}
          addCourse={addCourse}
          current={current}
        />
      </div>
      <div>
        <ol>{courseList}</ol>
      </div>
    </div>
  );
};

export default App;
