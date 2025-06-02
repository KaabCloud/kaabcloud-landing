# 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Generate prisma client:
```bash
npx prisma generate
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view your site

## Docker

To compile and generate the image
```
docker compose -f docker-compose.prod.yml --env-file .env build
```

To push the image
```
docker push ghcr.io/kaabcloud/kaabcloud-landing:latest
```