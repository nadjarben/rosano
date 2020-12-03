export const API_ROSANO =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_DEV
    : process.env.REACT_APP_API_PROD;

    export const PASSWORD = process.env.REACT_APP_PASSWORD