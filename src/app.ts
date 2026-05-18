import express, { Request, Response } from "express";

import { env } from "./config/env";
import { logger } from "./utils/logger";
import { connectRedis } from "./config/redis";
import urlRoutes from "./routes/urlRoutes";

const app = express();

// Middleware para permitir que o Express entenda requisições com corpo em JSON
app.use(express.json());

// Rotas da API
app.use("/api", urlRoutes);

// Rota de teste (Health Check)
app.get("/health", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ status: "ok", message: "Server is running perfectly!" });
});

const startServer = async () => {
  await connectRedis();
  app.listen(env.PORT, () => {
    logger.success(`Server is running on port ${env.PORT}`);
  });
};

startServer();
