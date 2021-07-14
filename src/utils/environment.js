export const API_ROSANO =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_DEV
    : process.env.REACT_APP_API_PROD;

  // export const API_ROSANO =
  // process.env.NODE_ENV === "production"
  //   ? process.env.REACT_APP_API_PROD
  //   : process.env.REACT_APP_API_DEV

    export const PASSWORD = process.env.REACT_APP_PASSWORD