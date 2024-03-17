import React from "react";
import ReactDom from "react-dom/client";
import Index from "./Index";

const App = () => {
  return <Index />;
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
