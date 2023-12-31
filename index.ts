import express from "express";
import "express-async-errors";
import cors from "cors";
import * as methodOverride from "method-override";
import { engine } from "express-handlebars";
import { handleError } from "./utils/errors";
import { homeRouter } from "./routers/home";
import { childRouter } from "./routers/child";
import { giftRouter } from "./routers/gift";
import "./utils/db";
import { handlebarsHelpers } from "./utils/handlebars-helpers";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// app.use(methodOverride("_method"));
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
app.use(express.static("public"));
app.use(express.json()); // Content-type: application/json
// app.engine(
//   ".hbs",
//   engine({
//     extname: ".hbs",
//     helpers: handlebarsHelpers, // Dodatkowe funkcjonalności, które chcemy dodać do Handlebarsów
//   })
// );
// app.set("view engine", ".hbs");

app.use("/child", childRouter);
app.use("/gift", giftRouter);

app.use(handleError);

app.listen(3001, "0.0.0.0", () => {
  console.log("Listening on http://0.0.0.0:3001");
});
