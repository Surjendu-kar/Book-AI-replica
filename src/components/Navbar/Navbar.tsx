import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 0",
  flexWrap: "wrap",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "24px",
  fontWeight: 700,
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const LogoBox = styled(Box)(({ theme }) => ({
  width: "30px",
  height: "30px",
  background: "linear-gradient(45deg, #726bff, #57b6fe)",
  borderRadius: "50%",
  marginRight: "10px",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const LinkStyle = styled(Link)(({ theme }) => ({
  color: "#ffffff",
  textDecoration: "none",
  marginLeft: "20px",
  fontWeight: 300,
  transition: "color 0.3s ease",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: { margin: "10px 20px 10px 0" },
}));

const TextStyle = styled(Typography)(({ theme }) => ({
  transition: "0.3s ease",
  "&:hover": {
    color: "#8a2be2",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const LoginSignupStyle = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  padding: "10px 20px",
  backgroundImage: "linear-gradient(45deg, #726bff, #57b6fe);",
  color: "white",
  textDecoration: "none",
  borderRadius: "4px",
  transition: "background-color 0.3s",

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

function Navbar() {
  return (
    <MainContainer>
      <LogoContainer>
        <LogoBox />
        <img
          style={{ width: "50px" }}
          alt="Book-AI logo"
          src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
        />
        <p>BookAI</p>
      </LogoContainer>

      <FlexBox>
        {[
          { text: "Features", to: "/features" },
          { text: "How It Works", to: "/how-it-works" },
          { text: "Roadmap", to: "/roadmap" },
          { text: "API", to: "/book-generator" },
          { text: "Price", to: "/book-generator" },
          { text: "Models", to: "/book-generator" },
        ].map((link) => (
          <LinkStyle to={link.to} key={link.text}>
            <TextStyle>{link.text}</TextStyle>
          </LinkStyle>
        ))}
        <LinkStyle to={"/login"}>
          <LoginSignupStyle>Login / Sign Up</LoginSignupStyle>
        </LinkStyle>
      </FlexBox>
    </MainContainer>
  );
}

export default Navbar;
