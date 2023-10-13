# How to set up nodejs express server with typescript and yarn boiler plat

1. Create a new directory for your project and navigate to it in your terminal.
2. Run the following command to initialize a new Node.js project using Yarn
   `yarn init -y`
3. Run the following command to initialize a new Node.js project using Yarn
   `yarn add express typescript ts-node @types/express`
4. Create a tsconfig.json file in the root of your project with the following contents:

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

5. Create a new file called server.ts in the root of your project and add the following code.

```
import express from 'express';

const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
res.send('Pong!');
});

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
```

6. Add the following script to the "scripts" section of your package.json file:

```
"scripts": {
    "start": "ts-node server.ts"
  },
```

7. Start the server by running the following command
   `yarn start`
