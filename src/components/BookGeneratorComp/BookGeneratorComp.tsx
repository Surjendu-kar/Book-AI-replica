import { Box, styled, Typography } from "@mui/material";
import Nav from "./Nav";
import BookGeneratorSections from "./BookGeneratorSections";

const MainContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#0f172a",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Header = styled(Box)(({ theme }) => ({
  backgroundColor: "#6366f1",
  padding: "2.5rem 0",
  textAlign: "center",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Container = styled(Box)(({ theme }) => ({
  maxWidth: "1000px",
  margin: "2rem auto",
  padding: "0 2rem",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

function BookGeneratorComp() {
  return (
    <MainContainer>
      <Header>
        <Typography
          variant="h1"
          sx={{ fontSize: "2.6rem", marginBottom: "1rem", fontWeight: "bold" }}
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
