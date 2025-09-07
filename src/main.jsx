import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing";
import Planning from "./pages/Planning";
import Profile from "./pages/Profile";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/planning" element={<Planning />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

