This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, start the json-server:

```bash
npm run serve-json
# or
yarn serve-json
# or
pnpm serve-json
# or
bun serve-json
```

The server will run on [http://localhost:3001](http://localhost:3001).


Secondn, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the blog post listing page.


## Design

The page was styled based on [this Figma design](https://www.figma.com/design/NUyt1uyTLwjz3WFv77uqOh/Ddsgnr---Blog-%2F-Magazine-Webflow-Website-Template-(Community)?node-id=3-1065&t=2yhUdwF6Rggxt4TK-0).


## My approach

Already knowing some React I learned Next.js while working on this task.

I've used server components (except error.tsx), because there's no client interaction, the pages only display data. 
The blog post list is fetched on the main page. 
Clicking 'Load more' on any post cards routes to a page with the specific post, where only that post is fetched. 
The 'All posts' link above the title routes back to the blog list. 
A loding component is rendered while the pages load.

The page components are in the src/app folder, other components are in src/components, types, data and scripts are in src/lib.

For the blog data a mock back-end is set up with [json-server](https://github.com/typicode/json-server/tree/v0). 
It serves data from src/lib/data.json to where blog posts were fetched from 
[JSONplaceholder](https://jsonplaceholder.typicode.com/posts) and modified with the src/lib/data.js script, by pointing the json-server to this file at the first run.
Images were added from [Lorem Picsum](https://picsum.photos/).

The blog list grid and the pages are fully responsive, using a mobile-first approach.
Scss files are in the src/styles folder, they are structured considering scalability.
