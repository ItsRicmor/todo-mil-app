import { BaseModel } from 'sjs-base-model';

export default class CategoryModel extends BaseModel {
  id: number = 0;
  name: string = '';

  /*
   * Client-Side properties (Not from API)
   */

  constructor(data: any) {
    super();
    this.update(data);
  }
}
