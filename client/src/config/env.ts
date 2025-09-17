import { z } from "zod";

const envSchema = z.object({
  VITE_FRONTEND_URL: z.string().min(1),
});

export const env = envSchema.parse(import.meta.env);
