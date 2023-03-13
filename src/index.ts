import { optionsData } from "./configs/configsData.js";
import Querys from "./query.js"


export default class ReteLigula extends Querys{
  public async post(url: string, data?: {value?: {}, querys?: {name: string, value: string | number }[]}, options?: optionsData) {
    if(data?.querys === undefined) {
      const response = await fetch(url, {
        method: "POST",
        cache: options?.cache,
        credentials: options?.credentials,
        mode: options?.mode,
        headers: options?.headers,
        redirect: options?.redirect,
        referrerPolicy: options?.referrerPolicy,
        body: JSON.stringify(data?.value)
      });
      return response;
    } else {
      const response = await fetch(url+await this.createQuery(data.querys), {
        method: "POST",
        cache: options?.cache,
        credentials: options?.credentials,
        mode: options?.mode,
        headers: options?.headers,
        redirect: options?.redirect,
        referrerPolicy: options?.referrerPolicy,
        body: JSON.stringify(data.value)
      });
      return response;
    }
  }
  public async get(url: string, data?: {value?: {}, querys?: {name: string, value: string | number }[]}, options?: optionsData) {
    if(data?.querys === undefined) {
      const response = await fetch(url, {
        method: "GET",
        cache: options?.cache,
        credentials: options?.credentials,
        mode: options?.mode,
        headers: options?.headers,
        redirect: options?.redirect,
        referrerPolicy: options?.referrerPolicy,
        body: JSON.stringify(data?.value)
      });
      return response;
    } else {
      const response = await fetch(url+await this.createQuery(data.querys), {
        method: "GET",
        cache: options?.cache,
        credentials: options?.credentials,
        mode: options?.mode,
        headers: options?.headers,
        redirect: options?.redirect,
        referrerPolicy: options?.referrerPolicy,
        body: JSON.stringify(data?.value)
      });
      return response;
    }
  }
  public async del(url: string, data?: {value?: {}, querys?: {name: string, value: string | number }[]}, options?: optionsData) {
    if(data?.querys === undefined) {
      const response = await fetch(url, {
        method: "DELETE",
        cache: options?.cache,
        credentials: options?.credentials,
        mode: options?.mode,
        headers: options?.headers,
        redirect: options?.redirect,
        referrerPolicy: options?.referrerPolicy,
        body: JSON.stringify(data?.value)
      });
      return response;
    } else {
      const response = await fetch(url+await this.createQuery(data.querys), {
        method: "DELETE",
        cache: options?.cache,
        credentials: options?.credentials,
        mode: options?.mode,
        headers: options?.headers,
        redirect: options?.redirect,
        referrerPolicy: options?.referrerPolicy,
        body: JSON.stringify(data?.value)
      });
      return response;
    }
  }
  public async put(url: string, data?: {value?: {}, querys?: {name: string, value: string | number }[]}, options?: optionsData) {
    if(data?.querys === undefined) {
      const response = await fetch(url, {
        method: "PUT",
        cache: options?.cache,
        credentials: options?.credentials,
        mode: options?.mode,
        headers: options?.headers,
        redirect: options?.redirect,
        referrerPolicy: options?.referrerPolicy,
        body: JSON.stringify(data?.value)
      });
      return response;
    } else {
      const response = await fetch(url+await this.createQuery(data.querys), {
        method: "PUT",
        cache: options?.cache,
        credentials: options?.credentials,
        mode: options?.mode,
        headers: options?.headers,
        redirect: options?.redirect,
        referrerPolicy: options?.referrerPolicy,
        body: JSON.stringify(data?.value)
      });
      return response;
    }
  }
}
