import { Box, Button, Typography, styled } from "@mui/material";

const Section = styled(Box)(({ theme }) => ({
  background: "#1e293b",
  borderRadius: "8px",
  padding: "2rem",
  marginBottom: "2rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  border: "1px solid #334155",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const H2Style = styled("h2")(({ theme }) => ({
  marginTop: "2rem",
  color: "#a5b4fc",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
const H3Style = styled("h3")(({ theme }) => ({
  marginTop: "2rem",
  color: "#a5b4fc",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
const H4Style = styled("h4")(({ theme }) => ({
  marginTop: "2rem",
  color: "#a5b4fc",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const CodeBlock = styled("pre")(({ theme }) => ({
  fontFamily: "'Fira Code', monospace",
  backgroundColor: "#1e293b",
  borderRadius: "4px",
  padding: "1rem",
  overflowX: "auto",
  whiteSpace: "pre-wrap",
  wordWrap: "break-word",
  fontSize: "0.9rem",
  border: "1px solid #334155",

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const BtnStyle = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  background: "#22d3ee",
  color: "#0f172a",
  border: "none",
  padding: "0.6rem 1.5rem",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: 600,
  transition: "background-color 0.3s ease, transform 0.2s ease",
  marginTop: "1rem",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

function BookGeneratorSections() {
  return (
    <>
      <Section id="authentication">
        <H2Style>Authentication</H2Style>
        <Typography>
          To use the API, you need to include your API key in the header of each
          request:
        </Typography>
        <CodeBlock>X-API-Key: YOUR_API_KEY</CodeBlock>
        <Typography>To generate an API key, use the button below:</Typography>

        <BtnStyle>Generate API Key</BtnStyle>
        <CodeBlock sx={{ marginTop: "1rem" }}></CodeBlock>
      </Section>

      <Section id="endpoints">
        <H2Style>Endpoints</H2Style>
        <H3Style>Generate Book</H3Style>

        <Box>
          <span
            style={{
              background: "#22d3ee",
              color: "#0f172a",
              padding: "0.25rem 0.5rem",
              borderRadius: "4px",
              fontWeight: "bold",
              marginRight: "0.5rem",
            }}
          >
            POST
          </span>
          <span
            style={{
              background: "#6366f1",
              padding: "0.75rem 1rem",
              borderRadius: "4px",
              fontWeight: "bold",
              display: "inline-block",
              marginBottom: "1rem",
            }}
          >
            /api/generate-book
          </span>
        </Box>

        <H4Style>Request Body</H4Style>
        <table className="parameter-table"></table>

        <H4Style>Response</H4Style>

        <CodeBlock>{"API response details..."}</CodeBlock>
      </Section>

      <Section id="tutorial">
        <H2Style>Tutorial</H2Style>
        <H3Style>Step 1: Obtain an API Key</H3Style>
        <Typography>
          Generate an API key using the button in the Authentication section
          above.
        </Typography>
        <H3Style>Step 2: Make a Request</H3Style>
        <Typography>
          Use your preferred programming language or tool to make a POST request
          to the /api/generate-book endpoint. Include your API key in the header
          and the required parameters in the request body.
        </Typography>
        <H3Style>Step 3: Handle the Response</H3Style>
        <Typography>
          The API will return a response with a job ID. You can use this ID to
          check the status of your book generation job.
        </Typography>
        <H3Style>Step 4: Retrieve the Generated Book</H3Style>
        <Typography>
          Once the job is complete, you can retrieve the generated book using
          the job ID (endpoint to be implemented).
        </Typography>
      </Section>

      <Section id="code-examples">
        <H2Style>Code Examples</H2Style>
        <H3Style>Python</H3Style>
        <CodeBlock>{"Python code snippet..."}</CodeBlock>
        <H3Style>JavaScript (Node.js)</H3Style>
        <CodeBlock>{"JavaScript code snippet..."}</CodeBlock>
      </Section>

      <Section id="overview">
        <H2Style>Overview</H2Style>
        <Typography>
          The Book Generator API allows you to generate books on various topics
          using different language models. This documentation provides details
          on how to use the API, including authentication, available endpoints,
          and code examples.
        </Typography>
      </Section>

      <Section id="pricing">
        <H2Style>API Pricing</H2Style>
        <Typography>
          Our API pricing is based on the model used and the number of tokens
          processed. Here's a breakdown of the costs:
        </Typography>
        <table></table>
        <H3Style>Token Estimation</H3Style>
        <Typography>
          On average, 1 token is approximately 4 characters or 0.75 words. For
          precise pricing, we recommend using our token calculator tool.
        </Typography>
        <H3Style>Billing</H3Style>
        <Typography>
          You will only be charged for the tokens used in generating the book.
          The API tracks token usage and bills accordingly. Detailed usage
          reports are available in your account dashboard.
        </Typography>
      </Section>
    </>
  );
}

export default BookGeneratorSections;
