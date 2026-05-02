# How to connect MongoDB atlas to Backend

## Create Project
### Required Packages
```bash
bun init ProjectName
bun i express mongoose dotenv
bun i -d nodemon prettier
```

### Project Structure
```plaintext
05_Pro-Backend-Project
├── bun.lock
├── package.json
├── public
├── README.md
└── src
    ├── app.js
    ├── constants.js
    ├── controllers
    ├── db
    │   └── index.js
    ├── index.js
    ├── middleware
    ├── models
    ├── routes
    └── utils
```

### Preittier Config `.prettierrc` and `.prettierignore`
```json
{
    "singleQuote":false,
    "bracketSpacing":true,
    "tabWidth":2,
    "semi":true,
    "trailingComma":"es5"
}

// for .prettierignore
.vscode/
node_modules/
*.env
.env
.env.*
```

### Package.json
```json
"scripts": {
    "devenv": "bun nodemon -r dotenv/config --experimental-json-modules src/index.js",
}
```

---

## Create a free account on `https://cloud.mongodb.com`

- Then create new cluster then select free

- Then create user to DB and allow IPs

- Then click on connect > `click driver` copy url `mongodb+srv://db_admin:<db_password>@testdb0.lasyw4b.mongodb.net/?appName=testDB0`

---

### src/.env config
```
PORT = 8000
MONGO_URI = mongodb+srv://[username]:[password]@testdb0.lasyw4b.mongodb.net
```

### src/constants.js
```
export const DB_NAME = 'testDB0';
```

### src/index.js
```js
// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()   
```

### db/index.js

```js
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`) // init connection
        
        console.log(`\n MongoDB Connected !! DB Host: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MONGODB Connection Error", error);
        process.exit(1)
    }
}
export default connectDB
```

