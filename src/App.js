import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import { ExcerciseDetail, Home } from "./pages";
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExcerciseDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
};

export default App;
