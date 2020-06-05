import { BaseModel } from 'sjs-base-model';

export class ApiErrorModel extends BaseModel {
  status: string = '';
  timestamp: string = '';
  message: string = '';
  debugMessage: string = '';
  subErrors: number = 0;

  /*
   * Client-Side properties (Not from API)
   */

  constructor(data: any) {
    super();
    this.update(data);
  }
}
