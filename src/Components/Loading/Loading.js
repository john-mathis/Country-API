import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "..//Loading/Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <CircularProgress />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
