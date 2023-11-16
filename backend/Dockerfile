###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

COPY . .
COPY ./.env ./.env

RUN npm ci

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]