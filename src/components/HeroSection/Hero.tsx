import { Box, styled, Typography } from "@mui/material";

function Hero() {
  const MainContainer = styled(Box)(({ theme }) => ({
    textAlign: "center",
    padding: "80px 0 0px 20px",
    position: "relative",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  }));

  const H1Style = styled("h1")(({ theme }) => ({
    fontSize: "48px",
    marginBottom: "20px",
    lineHeight: 1.2,
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  }));

  const SpanStyle = styled("span")(({ theme }) => ({
    background: "linear-gradient(45deg, #8a2be2, #4b0082)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    position: "relative",
    "::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: "-5px",
      width: "100%",
      height: "3px",
      background: "linear-gradient(45deg, #726bff, #57b6fe)",
    },
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  }));

  const SubTitle = styled("p")(({ theme }) => ({
    fontSize: "20px",
    maxWidth: "600px",
    margin: "0 auto 40px",
    color: "#b3b3b3",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  }));

  const ButtonContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: "5px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const BtnStyle = styled("a")(({ theme }) => ({
    display: "inline-block",
    padding: "15px 30px",
    backgroundImage: "linear-gradient(45deg, #726bff, #57b6fe);",
    color: "white",
    textDecoration: "none",
    borderRadius: "30px",
    fontWeight: 600,
    transition: "background-color 0.3s",

    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  }));

  return (
    <MainContainer>
      <H1Style>
        Explore the Possibilities of <SpanStyle>AI Book Writing</SpanStyle> with
        BookAI
      </H1Style>

      <SubTitle>
        Unleash the power of AI to create captivating books in minutes.
        Download, Distribute wherever you want. Generate unlimited free books
      </SubTitle>
      <ButtonContainer>
        <BtnStyle href="https://trybookai.com/playground" target="_blank">
          Get Started
        </BtnStyle>
        <BtnStyle href="/api">Get API Access</BtnStyle>
      </ButtonContainer>

      <Typography sx={{ color: "yellow", marginTop: "2rem" }}>
        Attention: TryBookAI has been acquired by Indicus AI. Indicus LLM will
        be used for text and image generation
      </Typography>
    </MainContainer>
  );
}

export default Hero;
