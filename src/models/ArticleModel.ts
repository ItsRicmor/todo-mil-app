import { BaseModel } from 'sjs-base-model';
import CategoryModel from './CategoryModel';

export class ArticleModel extends BaseModel {
  id: number = 0;
  category: any = CategoryModel;
  name: string = '';
  description: string = '';
  image: string = '';
  price: number = 0;
  articleSold: number = 0;

  /*
   * Client-Side properties (Not from API)
   */

  constructor(data: any) {
    super();
    this.update(data);
  }
}
