FROM node:10-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN node -v 
RUN npm install
RUN npm rebuild node-sass
RUN npm run build

# expose 5000 on container
EXPOSE 3005

# set app serving to permissive / assigned
# ENV NUXT_HOST=0.0.0.0
# set app port
# ENV NUXT_PORT=3005


CMD [ "npm", "start" ]