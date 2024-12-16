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

# Update the frontend client .env file with the Websocket Endpoint

``` dotenv
PUBLIC_RELAY_SERVER_URL="ws://localhost:3000"
```

## Note for iCloud Drive Syncing

Install and use the following npm package to prevent iCloud Drive from syncing the `node_modules` folder: [https://github.com/HaoChuan9421/nosync-icloud/blob/master/docs/README_en.md](nosync-icloud)
