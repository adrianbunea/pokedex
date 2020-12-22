FROM node

WORKDIR app

COPY package*.json ./
# This needs to be done because volume mapping is done when starting the container, not when building the image

RUN npm install --from-lock-file
