import React from "react";
import { Box, styled } from "@mui/material";
import { Theme } from "@mui/material/styles";

const Section = styled(Box)(({ theme }: { theme: Theme }) => ({
  background: "var(--color-box-bg)",
  borderRadius: "8px",
  padding: "2rem",
  marginBottom: "2rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  border: "1px solid #334155",
  lineHeight: 1.6,
  [theme.breakpoints.down("sm")]: { padding: "1.5rem" },
}));

const H2Style = styled("h2")(() => ({
  marginTop: "2rem",
  fontSize: "1.6rem",
  color: "var(--color-primary-light)",
}));

const H3Style = styled("h3")(() => ({
  marginTop: "2rem",
  color: "var(--color-primary-light)",
}));

const CodeBlock = styled("pre")(() => ({
  fontFamily: "'Fira Code', monospace",
  borderRadius: "4px",
  padding: "1rem",
  overflowX: "auto",
  whiteSpace: "pre-wrap",
  wordWrap: "break-word",
  fontSize: "0.9rem",
  border: "1px solid #334155",
}));

const CodeExamples: React.FC = () => {
  return (
    <Section id="code-examples">
      <H2Style>Code Examples</H2Style>
      <H3Style>Python</H3Style>
      <CodeBlock>{`import requests

API_KEY = "your_api_key_here"
API_ENDPOINT = "https://tryBookAI.com/api/generate-book"

headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}

data = {
    "api": "openai",
    "model": "gpt-3.5-turbo",
    "topic": "The Future of Artificial Intelligence",
    "language": "English",
    "word_count": 5000
}

response = requests.post(API_ENDPOINT, json=data, headers=headers)

if response.status_code == 200:
    result = response.json()
    print(f"Book generation started. Job ID: {result['job_id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")`}</CodeBlock>
      <H3Style>JavaScript (Node.js)</H3Style>
      <CodeBlock>{`const axios = require('axios');

const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
};

axios.post(API_ENDPOINT, data, { headers })
    .then(response => {
        console.log(\`Book generation started. Job ID: \${response.data.job_id}\`);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });`}</CodeBlock>
    </Section>
  );
};

export default CodeExamples;
