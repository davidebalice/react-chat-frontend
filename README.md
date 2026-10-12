# React Chat

The frontend of a real-time chat app built with React, Redux and Socket.IO.
Users can register, see who is online, exchange text, emoji and image messages, and see when their messages have been delivered and seen.

**Live demo:** <https://react-chat.davidebalice.dev/>

![Screenshot](docs/screenshot.png)

Backend repository: <https://github.com/davidebalice/node-chat-api>

## Features

- Registration with profile image, login and logout (JWT)
- Edit profile (user name, email, password, image)
- Friends list with last message and search
- Online users shown in real time
- Real-time messages with Socket.IO: text, emoji and images
- Typing indicator
- Delivered and seen status for messages
- Notification and sending sounds

## Tech stack

- [React 17](https://react.dev/)
- [Create React App](https://create-react-app.dev/) (`react-scripts`)
- [Redux](https://redux.js.org/) with Redux Thunk
- [Socket.IO client](https://socket.io/docs/v4/client-api/)
- [React Router 6](https://reactrouter.com/)
- [Axios](https://axios-http.com/), [jwt-decode](https://github.com/auth0/jwt-decode), [Moment.js](https://momentjs.com/)
- [Sass](https://sass-lang.com/)
- [use-sound](https://github.com/joshwcomeau/use-sound), [React Hot Toast](https://react-hot-toast.com/), [React Icons](https://react-icons.github.io/react-icons/)

## Getting started

### Requirements

- Node.js 16 (the project depends on `node-sass` 7, which does not build on newer Node versions)
- npm
- A running instance of [node-chat-api](https://github.com/davidebalice/node-chat-api)

### Installation

```bash
git clone https://github.com/davidebalice/react-chat-frontend.git
cd react-chat-frontend
npm install
```

### Configuration

Settings are read from `.env` (development) and `.env.production` (production build):

| Variable                  | Description                                          |
| ------------------------- | ---------------------------------------------------- |
| `REACT_APP_API_BASE_URL`  | Base URL of the chat API (used for images)           |
| `REACT_APP_SOCKET_URL`    | Socket.IO server URL (e.g. `ws://localhost:8005`)    |

In development, API requests to `/api/...` are proxied to `http://localhost:8004` (the `proxy` field in `package.json`).

### Available scripts

| Command         | Description                                   |
| --------------- | --------------------------------------------- |
| `npm start`     | Start the development server on port 3000     |
| `npm run build` | Create a production build in `build/`         |
| `npm test`      | Run the test runner                           |

## Project structure

```
src/
├── components/     # Chat, friends, messages, message input, login, register, edit profile
├── store/          # Redux store, actions, reducers and action types
├── sass/           # SCSS partials
├── audio/          # Notification sounds
└── App.js          # Routes
```

## Author

**Davide Balice** – [davidebalice.dev](https://www.davidebalice.dev)
