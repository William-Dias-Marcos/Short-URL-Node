import express, { Request, Response } from "express";

import { env } from "./config/env";
import { logger } from "./utils/logger";

const app = express();

// Middleware para permitir que o Express entenda requisições com corpo em JSON
app.use(express.json());

// Rota de teste (Health Check)
app.get("/health", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ status: "ok", message: "Server is running perfectly!" });
});

app.listen(env.PORT, () => {
  logger.success(`Server is running on port ${env.PORT}`);
});
