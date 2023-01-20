import app from "./app.js";

const PORT = process.env.PORT || 4000;

// try catch listen
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/api/v1`);
});
