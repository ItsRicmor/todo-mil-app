import { BaseModel } from 'sjs-base-model';

export class ClientModel extends BaseModel {
  id: number = 0;
  clientType: string = '';
  email: string = '';
  cellphone: string = '';
  name: string = '';
  lastName: string = '';

  /*
   * Client-Side properties (Not from API)
   */

  constructor(data: any) {
    super();
    this.update(data);
  }
}
