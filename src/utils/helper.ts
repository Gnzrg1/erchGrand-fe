export const Utils = {
  API_URL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000/api"
      : "https://erchgrand-be-2023-o46q.onrender.com/api",
      
};

export default Utils;