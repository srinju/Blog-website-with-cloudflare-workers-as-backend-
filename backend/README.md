```
npm install
npm run dev
```

```
npm run deploy
```
# deployment notes >>

-- backend deployed to https://backend.dassrinjoy333.workers.dev/ in cloudfalre workers by running npx run deploy 

-- we can go and see in the cloudflare workers home page to our server and update our production database links and all the jwt_secrets and all

--then for the common module we added npm and then added tsc and then we published the zod code to npm package using npm publish --access public
then we can shaare the zod validation on both frontend and backend both 