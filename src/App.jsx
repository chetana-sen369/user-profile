import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import UserProfileWithParams from "./components/UserProfile"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<UserProfileWithParams />} />
      <Route path="*" element={<NotFound />} />
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App