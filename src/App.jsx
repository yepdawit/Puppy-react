import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Allplayers from "./components/Allplayers";
import SinglePlayer from "./components/SinglePlayer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Allplayers />} />
        <Route path="/:id" element={<SinglePlayer />} />
      </Routes>
    </Router>
  );
};

export default App;
