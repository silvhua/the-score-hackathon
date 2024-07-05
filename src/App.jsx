import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import EventPage from "./pages/EventPage/EventPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
