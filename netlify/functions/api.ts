import { Handler } from "@netlify/functions";

const handler: Handler = async (event) => {
  const path = event.path;

  // API routes
  if (path === "/api/ping") {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: process.env.PING_MESSAGE || "ping",
      }),
    };
  }

  if (path === "/api/demo") {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Demo endpoint",
        timestamp: new Date().toISOString(),
      }),
    };
  }

  // Default response
  return {
    statusCode: 404,
    body: JSON.stringify({ error: "Not found" }),
  };
};

export { handler };
