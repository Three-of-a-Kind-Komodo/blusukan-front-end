const NODE_ENV = process.env.NODE_ENV || "development";

const URI =
  NODE_ENV === "development"
    ? "http://localhost:3001"
    : process.env.REACT_APP_BACKEND_URI;

export { URI };
