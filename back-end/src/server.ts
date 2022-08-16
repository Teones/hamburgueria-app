import app from "./app.js";

const PORT = process.env.PORT || 5000;
const BANK = process.env.NODE_ENV
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}, witth the bank ${BANK}`);
});