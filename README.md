Javascript Backend

### Example Package.json

```json
{
  "name": "name",
  "version": "1.0.0",
  "main": "server.js", // server file
  "module": "server.js",
  "scripts": {
    "start": "bun server.js" // run script
  },
  "type": "module", // modren way: allow to use import 
  "private": true, // don't create npm registry
  "dependencies": {
    "express": "^5.2.1" // packeges
  }
}
```