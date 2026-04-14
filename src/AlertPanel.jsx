import React from "react";
import "./styles.css";

function AlertPanel({ status }) {
  let content;

  if (status === "success") {
    content = <div className="success">Operation Complete</div>;
  } else if (status === "warning") {
    content = <div className="warning">Check Inputs</div>;
  } else if (status === "error") {
    content = <div className="error">Fatal Error</div>;
  } else {
    return null;
  }

  return <div>{content}</div>;
}

export default AlertPanel;