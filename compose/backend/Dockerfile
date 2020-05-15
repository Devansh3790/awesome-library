FROM node:latest

# set app directory
WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# copy package.json and package-lock.json files
COPY ./backend/package*.json ./

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
RUN npm install -g typescript
RUN npm install --silent

# start app
COPY ./compose/backend/start /start
RUN sed -i 's/\r$//g' /start
RUN chmod +x /start

# entrypoint app
COPY ./compose/backend/entrypoint /entrypoint
RUN sed -i 's/\r$//g' /entrypoint
RUN chmod +x /entrypoint

ENTRYPOINT ["/entrypoint"]

# If you are building your code for production
# RUN npm ci --only=production
