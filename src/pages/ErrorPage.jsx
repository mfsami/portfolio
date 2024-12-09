import React from "react";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        fontSize: "15px",
        fontWeight: "bold",
        color: "white",
      }}>
      <h1>Error 404: You broke my site. Thanks.</h1>
    </div>
  );
};

export default ErrorPage;
