import { BaseModel } from 'sjs-base-model';
import { ArticleModel } from './ArticleModel';
import { ClientModel } from './ClientModel';

export default class OrderModel extends BaseModel {
  id: number = 0;
  article: any = ArticleModel;
  client: any = ClientModel;
  deliveryDay: string = '';
  state: string = '';
  foodTime: string = '';

  /*
   * Client-Side properties (Not from API)
   */

  constructor(data: any) {
    super();

    this.update(data);
  }
}
