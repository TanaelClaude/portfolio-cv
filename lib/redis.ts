import { Redis } from "@upstash/redis";

export function createRedisClient(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  try {
    return Redis.fromEnv();
  } catch (error) {
    console.error("Failed to initialize Upstash Redis:", error);
    return null;
  }
}
