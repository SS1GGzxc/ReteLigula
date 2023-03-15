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

  const response = await app.post("url", data?, options?); // or get, put, delete

  console.log(response.data); // you can get from 'response': data, type, status, statusText and ok
```
