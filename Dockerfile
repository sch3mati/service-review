FROM node:12.18.3
ENV NODE_ENV=production
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install

# RUN npm run seed