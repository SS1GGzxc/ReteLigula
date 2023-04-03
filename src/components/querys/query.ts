import {Base64, Hex} from 'cryptoloc'
import { InputQuery } from '../../configs/configsData.js';

export default class Querys {
  public async createQuery(query: InputQuery[]) {
    var resp = `?`;
    if (query.length >= 2) {
      for (var i = 0; i < query.length; i++) {
        if(query[i]?.typeEcnode === "Hex") {
          resp += `${query[i]!.name}=${await Hex.encrypt(query[i]!.value.toString())}&`
        }
        if(query[i]?.typeEcnode === "Base64") {
          resp += `${query[i]!.name}=${await Base64.encode(query[i]!.value.toString())}&`
        }
      }
    } else {
      if(query[0]?.typeEcnode === "Hex") {
        resp += `${query[0]!.name}=${await Hex.encrypt(query[0]!.value.toString())}`
      }
      if(query[0]?.typeEcnode === "Base64") {
        resp += `${query[0]!.name}=${await Base64.encode(query[0]!.value.toString())}`
      }
    }
    return resp;
  }
}
