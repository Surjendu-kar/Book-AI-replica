import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/features" element={<Features />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/api" element={<API />} />
      <Route path="/price" element={<Price />} />
      <Route path="/models" element={<Models />} />
      <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}

export default App;
