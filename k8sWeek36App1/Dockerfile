# Dockerfile
FROM oven/bun:1


WORKDIR /app
COPY ./ ./

RUN bun install

EXPOSE 8000

CMD ["bun", "index.ts"]
