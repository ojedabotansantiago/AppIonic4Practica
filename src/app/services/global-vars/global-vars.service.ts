import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalVarsService {

  static isLogin = false;

  constructor() {}
}
