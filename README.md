# How to run the application

# Initialize Node version

``` shell
nvm use
```

- follow the prompt and install the version mentioned in .nvmrc

# Install Dependencies

``` shell
npm i
```


# Run the app

``` shell
npm run relay
```

# Update the client .env file with the Websocket Endpoint

``` dotenv
PUBLIC_RELAY_SERVER_URL="ws://localhost:3000"
```
