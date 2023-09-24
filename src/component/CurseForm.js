import React from "react";

const CurseForm = (props) => {
  return (
    <form onSubmit={props.addCourse}>
      <input type="text" value={props.current} onChange={props.updateCourse} />
      <button type="submit">Add </button>
    </form>
  );
};

export default CurseForm;
