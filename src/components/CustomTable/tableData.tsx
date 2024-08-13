export const table1Headers = ["Parameter", "Type", "Description"];
export const table1Rows = [
  {
    Parameter: "api",
    Type: "string",
    Description: "The API provider to use. Options: 'openai' or 'together'",
  },
  {
    Parameter: "model",
    Type: "string",
    Description:
      "The specific model to use (e.g., 'gpt-3.5-turbo', 'gpt-4', 'llama-2-70b')",
  },
  {
    Parameter: "topic",
    Type: "string",
    Description: "The main topic or theme of the book",
  },
  {
    Parameter: "language",
    Type: "string",
    Description: "The language in which the book should be generated",
  },
  {
    Parameter: "word-count",
    Type: "integer",
    Description: "The approximate number of words for the generated book",
  },
];

export const table2Headers = ["API", "Model", "Price per 1K tokens"];
export const table2Rows = [
  {
    API: "OpenAI",
    Model: "GPT-3.5",
    "Price per 1K tokens": "$0.002",
  },
  {
    API: "OpenAI",
    Model: "GPT-4",
    "Price per 1K tokens": "$0.03",
  },
  {
    API: "Together AI",
    Model: "Llama-2-70b",
    "Price per 1K tokens": "$0.0008",
  },
  {
    API: "Together AI",
    Model: "Llama-2-13b",
    "Price per 1K tokens": "$0.0006",
  },
];
