import { BaseModel } from 'sjs-base-model';
import { ClientModel } from './ClientModel';

export default class AuthModel extends BaseModel {
  id: number = 0;
  client: any = ClientModel;
  username: string = '';
  roles: Array<string> = [];
  token: string = '';

  /*
   * Client-Side properties (Not from API)
   */

  constructor(data: any) {
    super();

    this.update(data);
  }
}
