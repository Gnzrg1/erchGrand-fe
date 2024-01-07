export const Utils = {
  API_URL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000/api"
      : "https://erchgrand-be1.onrender.com/api",
      
};

export default Utils;