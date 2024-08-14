import { Box } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/HeroSection/Hero";

function Home() {
  return (
    <Box
      sx={{ width: "90%", maxWidth: "1200px", margin: "auto", padding: "20px" }}
    >
      <Navbar />
      <Hero />
    </Box>
  );
}

export default Home;
