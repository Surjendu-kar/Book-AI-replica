import { Box, styled, Typography } from "@mui/material";
import Nav from "./Nav";
import BookGeneratorSections from "./BookGeneratorSections";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MainContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--color-bg)",
  color: "var(--color-text)",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Header = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--color-primary)",
  padding: "2.5rem 0",
  textAlign: "center",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Container = styled(Box)(({ theme }) => ({
  maxWidth: "1000px",
  margin: "2rem auto 0",
  padding: "0 2rem",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: { padding: "0 1rem" },
}));

function BookGeneratorComp() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <MainContainer>
      <Header>
        <Typography
          variant="h1"
          sx={{
            fontSize: "2.6rem",
            marginBottom: "1rem",
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          Book Generator API
        </Typography>
      </Header>
      <Nav />
      <Container>
        <BookGeneratorSections />
      </Container>
    </MainContainer>
  );
}

export default BookGeneratorComp;
