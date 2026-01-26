import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const PORT = Number(process.env.PORT) || 3000;
const DATASOURCE = process.env.DATASOURCE || "json";

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Datasource selected: ${DATASOURCE}`);
});
