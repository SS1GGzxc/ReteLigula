import {encrypt} from 'cryptoloc'

export default class Querys {
  public async createQuery(query: {name: string, value: string | number }[]) {
    var resp: string = `?`;
    if (query.length >= 2) {
      for (var i = 0; i < query.length; i++) {
        resp += `${query[i]!.name}=${await encrypt(query[i]!.value.toString())}&`
      }
    } else {
      resp += `${query[0]!.name}=${await encrypt(query[0]!.value.toString())}`
    }
    return resp;
  }
}
