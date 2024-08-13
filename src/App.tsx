import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookGeneratorComp from "./components/BookGeneratorComp/BookGeneratorComp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book-generator" element={<BookGeneratorComp />} />
      {/* <Route path="/features" element={<Features />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}

export default App;
