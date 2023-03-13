# ReteLigula
> Fast simple tiny HTTP library for Nodejs

## Install
```sh
  npm install reteligula
```
```sh
  yarn add reteligula
```
```sh
  pnpm add reteligula
```

## Usage
```javascript
  import ReteLigula from "reteligula";

  const app = new ReteLigula();

  const response = await app.post("url", options); // or get, put, delete

  console.log(response.json());
```