import { Box, Button, Typography, styled } from "@mui/material";
import CustomTable from "../CustomTable/CustomTable";
import {
  table1Headers,
  table1Rows,
  table2Headers,
  table2Rows,
} from "../CustomTable/tableData";
import CodeExamples from "./CodeExamples";

const Section = styled(Box)(({ theme }) => ({
  background: "var(--color-box-bg)",
  borderRadius: "8px",
  padding: "2rem",
  marginBottom: "2rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  border: "1px solid #334155",
  lineHeight: 1.6,
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: { padding: "1.5rem" },
}));

const H2Style = styled("h2")(({ theme }) => ({
  marginTop: "2rem",
  fontSize: "1.6rem",
  color: "var(--color-primary-light)",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
const H3Style = styled("h3")(({ theme }) => ({
  marginTop: "2rem",
  color: "var(--color-primary-light)",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
const H4Style = styled("h4")(({ theme }) => ({
  marginTop: "2rem",
  color: "var(--color-primary-light)",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const TextStyle = styled(Typography)(({ theme }) => ({
  fontSize: "1.045rem",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const CodeBlock = styled("pre")(({ theme }) => ({
  fontFamily: "'Fira Code', monospace",
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
  background: "var(--color-accent)",
  color: "var(--color-bg)",
  border: "none",
  padding: "0.6rem 1.5rem",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: 600,
  transition: "background-color 0.3s ease, transform 0.2s ease",
  marginTop: "1rem",

  "&:hover": {
    background: "#0ea5e9",
    transform: "translateY(-2px)",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

function BookGeneratorSections() {
  return (
    <>
      <Section id="overview" aria-labelledby="overview-heading">
        <H2Style>Overview</H2Style>
        <TextStyle>
          The Book Generator API allows you to generate books on various topics
          using different language models. This documentation provides details
          on how to use the API, including authentication, available endpoints,
          and code examples.
        </TextStyle>
      </Section>

      <Section id="authentication" aria-labelledby="auth-heading">
        <H2Style>Authentication</H2Style>
        <TextStyle>
          To use the API, you need to include your API key in the header of each
          request:
        </TextStyle>
        <CodeBlock>
          <CodeBlock role="code" aria-label="API key header example">
            X-API-Key: YOUR_API_KEY
          </CodeBlock>
        </CodeBlock>
        <TextStyle>To generate an API key, use the button below:</TextStyle>

        <BtnStyle aria-label="Generate API Key">Generate API Key</BtnStyle>
        <CodeBlock sx={{ marginTop: "1rem" }}></CodeBlock>
      </Section>

      <Section id="endpoints" aria-labelledby="endpoints-heading">
        <H2Style>Endpoints</H2Style>
        <H3Style>Generate Book</H3Style>

        <Box aria-labelledby="generate-book-heading">
          <span
            role="text"
            aria-label="HTTP method"
            style={{
              background: "var(--color-accent)",
              color: "var(--color-bg)",
              padding: "0.25rem 0.5rem",
              borderRadius: "4px",
              fontWeight: "bold",
              marginRight: "0.5rem",
            }}
          >
            POST
          </span>
          <span
            role="text"
            aria-label="API endpoint"
            style={{
              background: "var(--color-primary)",
              padding: "0.5rem 1rem",
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
        <CustomTable headers={table1Headers} rows={table1Rows} color={true} />

        <H4Style>Response</H4Style>

        <CodeBlock role="code" aria-labelledby="response-heading">
          {`"message": "Book generation started",
"status": "processing",
"job_id": "unique-job-identifier"
`}
        </CodeBlock>
      </Section>

      <Section id="tutorial" aria-labelledby="tutorial-heading">
        <H2Style>Tutorial</H2Style>
        <H3Style>Step 1: Obtain an API Key</H3Style>
        <TextStyle>
          Generate an API key using the button in the Authentication section
          above.
        </TextStyle>
        <H3Style>Step 2: Make a Request</H3Style>
        <TextStyle>
          Use your preferred programming language or tool to make a POST request
          to the /api/generate-book endpoint. Include your API key in the header
          and the required parameters in the request body.
        </TextStyle>
        <H3Style>Step 3: Handle the Response</H3Style>
        <TextStyle>
          The API will return a response with a job ID. You can use this ID to
          check the status of your book generation job.
        </TextStyle>
        <H3Style>Step 4: Retrieve the Generated Book</H3Style>
        <TextStyle>
          Once the job is complete, you can retrieve the generated book using
          the job ID (endpoint to be implemented).
        </TextStyle>
      </Section>

      <CodeExamples />

      <Section
        id="pricing"
        sx={{ marginBottom: "0" }}
        aria-labelledby="pricing-heading"
      >
        <H2Style>API Pricing</H2Style>
        <TextStyle>
          Our API pricing is based on the model used and the number of tokens
          processed. Here's a breakdown of the costs:
        </TextStyle>
        <CustomTable headers={table2Headers} rows={table2Rows} color={false} />
        <H3Style>Token Estimation</H3Style>
        <TextStyle>
          On average, 1 token is approximately 4 characters or 0.75 words. For
          precise pricing, we recommend using our token calculator tool.
        </TextStyle>
        <H3Style>Billing</H3Style>
        <TextStyle>
          You will only be charged for the tokens used in generating the book.
          The API tracks token usage and bills accordingly. Detailed usage
          reports are available in your account dashboard.
        </TextStyle>
      </Section>
    </>
  );
}

export default BookGeneratorSections;
