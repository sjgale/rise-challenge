### Overview

The client was build using the NextJS framework, because that seemed like an interesting challenge.

Were I to keep going with this, some next steps might be:
- Improving accessibility through labels, (including aria), and reviewing the keyboard navigation and semantic structure.
- A couple components could use some additional refactoring as they were getting large.
- Tieing the persistence to a user ID.
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
