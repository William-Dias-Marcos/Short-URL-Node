import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  REDIS_URL: z.string().url("REDIS_URL must be a valid URL"),
  DEBUG: z.coerce.boolean().default(false),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error(
    "Fatal error: Invalid environment variables.",
    _env.error.format(),
  );
  process.exit(1);
}

export const env = _env.data;
