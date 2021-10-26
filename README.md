### Overview

The client was built using the NextJS framework, because this seemed like a fun opportunity to become more familiar with it.

Were I to keep going with this, some next steps might be:
- Improving accessibility through labels, (including aria).
- A couple components could use some additional refactoring as they were getting large.
- Tie the UI persistence to a user ID.
- Adding some UI or end-to-end tests.

### Instructions for local environment

To run the rest API:

1. `cd server`
2. `yarn install`
3. `yarn start`

To run the client:

1. `cd client`
2. `yarn install`
3. `yarn dev` (or `yarn build && yarn start` for production mode)


Navigate to [localhost:3000](http://localhost:3000) to view the app in action.
