import { Request, Response } from "express";
import { z } from "zod";

import { logger } from "../utils/logger.js";
import { createShortUrl } from "../service/urlService.js";

const shortenSchema = z.object({
  url: z.string().url("Invalid URL format"),
});

export const shortenUrl = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const validation = shortenSchema.safeParse(req.body);

    if (!validation.success) {
      res.status(400).json({ error: validation.error.format() });
      return;
    }

    const { url } = validation.data;
    const shortId = await createShortUrl(url);
    const shortUrl = `${req.protocol}://${req.get("host")}/${shortId}`;

    res.status(201).json({ shortId, shortUrl, originalUrl: url });
  } catch (error) {
    logger.error("Failed to shorten URL", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
