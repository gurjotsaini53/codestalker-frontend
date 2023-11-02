import React from "react";

function Alert(props) {
  return (
    <>
      <div
        className="alert alert-success alert-dismissible fade show  "
        role="alert"
      >
        <i>
          {" "}
          <strong> {props.alert}</strong>
        </i>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}

export default Alert;
