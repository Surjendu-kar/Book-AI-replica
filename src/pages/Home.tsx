import { Box } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <Box
      sx={{ width: "90%", maxWidth: "1200px", margin: "auto", padding: "20px" }}
    >
      <Navbar />
    </Box>
  );
}

export default Home;
