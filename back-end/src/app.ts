import "express-async-errors";
import express, {json} from "express";
import dotenv from "dotenv";
import cors from "cors"

import router from "./routes/index.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
dotenv.config();

const app = express();
app.use(json());
app.use(cors());
app.use(router);

// if(process.env.NODE_ENV === "test") {
//     app.use()
// }

app.use(errorHandlerMiddleware);

export default app;