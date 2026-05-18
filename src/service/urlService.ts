import { nanoid } from "nanoid";
import { redisClient } from "../config/redis";

export const createShortUrl = async (originalUrl: string): Promise<string> => {
  // Gera um ID alfanumérico curto de 6 caracteres
  const shortId = nanoid(6);

  // Salva no banco Redis: chave (shortId) -> valor (originalUrl)
  await redisClient.set(shortId, originalUrl);

  return shortId;
};
