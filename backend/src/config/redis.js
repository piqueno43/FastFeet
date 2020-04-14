// docker run --name redisname -p 6379:6379 -d -t redis:alpine
export default {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
};
