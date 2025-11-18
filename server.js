const app = require("./src/app");
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`User-Order service running on http://localhost:${PORT}`);
});
