import { createClient } from "redis";
import { env } from "./env.js";
import { logger } from "../utils/logger.js";

export const redisClient = createClient({
  url: env.REDIS_URL,
});

redisClient.on("error", (err) => {
  logger.error("Redis Client Error", err);
});

redisClient.on("connect", () => {
  logger.success("Connected to Redis successfully!");
});

export const connectRedis = async () => {
  try {
    await redisClient.connect();
  } catch (error) {
    logger.error("Failed to connect to Redis", error);
    process.exit(1);
  }
};
