FROM node:18.3.0

LABEL version="1.0"
LABEL description="This is the base docker image for the Try It Out frontend react app."
LABEL maintainer = ["jackdev1@icloud.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --omit=dev

COPY . .

EXPOSE 3000

CMD ["npm", "start"]