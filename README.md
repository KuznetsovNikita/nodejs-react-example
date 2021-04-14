# nodejs-react-example

Node.js + Express + TypeScript + React + Less Example

### Build Commands

Used `yarn` package manager and `lerna` mono repository with client and server packages.

```bash
# install lerna
yarn install

# install dependencies for both packages
yarn bootstrap

# run development servers
yarn start

# run lint
yarn lint

# build production version
yarn build
```

After the `start`:

You could open `http://localhost:3000` to see application.

You could go to `http://localhost:3002/swagger/` to see API Swagger documentation.

### Missing from implementation

#### Server

1. May be add WebSocket service to send new message to other users..
2. In the backend have to use database to store data, to not lose it on restart;
3. In the backend have to add new route `\` to return builded static clients files for deploy;
4. In the backend have to add a logging system;
5. On the server, have to read environment variables;
6. On the server, have to add the processing of invalid data, for example, if they ask for a non-existing channel;
7. In the backend have to add an integration tests;

#### Client

1. To the client have to add environment variables with base url for different environments;
2. Server errors have to be handled and display on the client;
3. In the client have to add an unit tests;
4. It is necessary to anticipate a case: if there is a slow Internet and the user can add second messages until the first message is saved.
5. In the client have to crate user friendly design.

### Requirements

Build a prototype message board for in-house use.

The board consists of multiple named channels. Channels contain messages written by users.
Users can select a channel from a list of channels, view messages in the selected channel, and
submit new messages to the selected channel. Board is implemented as a single page web
application in React and a simple backend in NodeJS.
