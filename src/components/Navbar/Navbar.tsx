import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LinkStyle = styled(Link)(({ theme }) => ({
  color: "#ffffff",
  textDecoration: "none",
  marginLeft: "20px",
  fontWeight: 300,
  transition: "color 0.3s ease",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 0",
        flexWrap: "wrap",
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        sx={{ fontSize: "24px", fontWeight: 700 }}
      >
        <Box
          sx={{
            width: "30px",
            height: "30px",
            background: "linear-gradient(45deg, #726bff, #57b6fe)",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        />
        <img
          style={{ width: "50px" }}
          alt="Book-AI logo"
          src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
        />
        <p>BookAI</p>
      </Box>

      <Box sx={{ display: "flex",  alignItems: "center" }}>
        {[
          { text: "Features", to: "/features" },
          { text: "How It Works", to: "/how-it-works" },
          { text: "Roadmap", to: "/roadmap" },
          { text: "API", to: "/api" },
          { text: "Price", to: "/price" },
          { text: "Models", to: "/models" },
        ].map((link) => (
          <LinkStyle to={link.to} key={link.text}>
            <Typography>{link.text}</Typography>
          </LinkStyle>
        ))}
        <LinkStyle to={"/login"}>
          <Typography
            sx={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundImage: "linear-gradient(45deg, #726bff, #57b6fe);",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
              transition: "background-color 0.3s",
            }}
          >
            Login / Sign Up
          </Typography>
        </LinkStyle>
      </Box>
    </Box>
  );
}

export default Navbar;
