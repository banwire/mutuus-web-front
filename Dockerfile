# pull official base image
FROM node:13.12.0-alpine as build

WORKDIR /app
# add app
COPY . ./
RUN npm install --silent && npm run build --silent


FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]