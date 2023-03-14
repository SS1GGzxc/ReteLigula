import { InputData, optionsData, result } from "./configs/configsData.js";
import Querys from "./components/querys/query.js"


export default class ReteLigula extends Querys{
  public async post(url: string, data?: InputData, options?: optionsData) {
    if(data?.query === undefined) {
      const response = await fetch(url, {
        method: "POST",
        cache: options?.cache,
        credentials: options?.credentials,
        mode: options?.mode,
        headers: options?.headers,
        redirect: options?.redirect,
        referrerPolicy: options?.referrerPolicy,
        body: JSON.stringify(data?.BodyValue)
      });
      var datesp;
      try {
        datesp = await response.text();
      } catch (err: any) {
        datesp = await response.json();
      }
      const result: result = {data: datesp, status: response.status, statusText: response.statusText, type: response.type, ok: response.ok};
      return result;
    } else {
      const response = await fetch(url+await this.createQuery(data.query), {
        method: "POST",
        cache: options?.cache,
        credentials: options?.credentials,
        mode: options?.mode,
        headers: options?.headers,
        redirect: options?.redirect,
        referrerPolicy: options?.referrerPolicy,
        body: JSON.stringify(data.BodyValue)
      });
      var datesp;
      try {
        datesp = await response.text();
      } catch (err: any) {
        datesp = await response.json();
      }
      const result: result = {data: datesp, status: response.status, statusText: response.statusText, type: response.type, ok: response.ok};
      return result;
    }
  }
  public async get(url: string, data?: InputData, options?: optionsData) {
    if(data?.query === undefined) {
      const response = await fetch(url, {
        method: "GET",
        cache: options?.cache,
        credentials: options?.credentials,
        mode: options?.mode,
        headers: options?.headers,
        redirect: options?.redirect,
        referrerPolicy: options?.referrerPolicy,
        body: JSON.stringify(data?.BodyValue)
      });
      var datesp;
      try {
        datesp = await response.text();
      } catch (err: any) {
        datesp = await response.json();
      }
      const result: result = {data: datesp, status: response.status, statusText: response.statusText, type: response.type, ok: response.ok};
      return result;
    } else {
      const response = await fetch(url+await this.createQuery(data.query), {
        method: "GET",
        cache: options?.cache,
        credentials: options?.credentials,
        mode: options?.mode,
        headers: options?.headers,
        redirect: options?.redirect,
        referrerPolicy: options?.referrerPolicy,
        body: JSON.stringify(data?.BodyValue)
      });
      var datesp;
      try {
        datesp = await response.text();
      } catch (err: any) {
        datesp = await response.json();
      }
      const result: result = {data: datesp, status: response.status, statusText: response.statusText, type: response.type, ok: response.ok};
      return result;
    }
  }
  public async del(url: string, data?: InputData, options?: optionsData) {
    if(data?.query === undefined) {
      const response = await fetch(url, {
        method: "DELETE",
        cache: options?.cache,
        credentials: options?.credentials,
        mode: options?.mode,
        headers: options?.headers,
        redirect: options?.redirect,
        referrerPolicy: options?.referrerPolicy,
        body: JSON.stringify(data?.BodyValue)
      });
      var datesp;
      try {
        datesp = await response.text();
      } catch (err: any) {
        datesp = await response.json();
      }
      const result: result = {data: datesp, status: response.status, statusText: response.statusText, type: response.type, ok: response.ok};
      return result;
    } else {
      const response = await fetch(url+await this.createQuery(data.query), {
        method: "DELETE",
        cache: options?.cache,
        credentials: options?.credentials,
        mode: options?.mode,
        headers: options?.headers,
        redirect: options?.redirect,
        referrerPolicy: options?.referrerPolicy,
        body: JSON.stringify(data?.BodyValue)
      });
      var datesp;
      try {
        datesp = await response.text();
      } catch (err: any) {
        datesp = await response.json();
      }
      const result: result = {data: datesp, status: response.status, statusText: response.statusText, type: response.type, ok: response.ok};
      return result;
    }
  }
  public async put(url: string, data?: InputData, options?: optionsData) {
    if(data?.query === undefined) {
      const response = await fetch(url, {
        method: "PUT",
        cache: options?.cache,
        credentials: options?.credentials,
        mode: options?.mode,
        headers: options?.headers,
        redirect: options?.redirect,
        referrerPolicy: options?.referrerPolicy,
        body: JSON.stringify(data?.BodyValue)
      });
      var datesp;
      try {
        datesp = await response.text();
      } catch (err: any) {
        datesp = await response.json();
      }
      const result: result = {data: datesp, status: response.status, statusText: response.statusText, type: response.type, ok: response.ok};
      return result;
    } else {
      const response = await fetch(url+await this.createQuery(data.query), {
        method: "PUT",
        cache: options?.cache,
        credentials: options?.credentials,
        mode: options?.mode,
        headers: options?.headers,
        redirect: options?.redirect,
        referrerPolicy: options?.referrerPolicy,
        body: JSON.stringify(data?.BodyValue)
      });
      var datesp;
      try {
        datesp = await response.text();
      } catch (err: any) {
        datesp = await response.json();
      }
      const result: result = {data: datesp, status: response.status, statusText: response.statusText, type: response.type, ok: response.ok};
      return result;
    }
  }
}
