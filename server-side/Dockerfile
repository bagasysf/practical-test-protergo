FROM node:lts-hydrogen
WORKDIR /apps
COPY . .
RUN npm install --production
ENV PORT=3000
ENV NODE_ENV=production
ENV DATABASE_NAME=app
ENV DATABASE_URL=postgres://postgres:bismillahtestprotergo@db.lyiictxbienqbfkpqvkt.supabase.co:6543/postgres
ENV JWT_SECRET_KEY=sosecret
EXPOSE 80
CMD ["node", "bin/www"]