import { BaseModel } from 'sjs-base-model';
import { ArticleModel } from './ArticleModel';

export default class AuthModel extends BaseModel {
  id: number = 0;
  articles: any = [ArticleModel];
  name: string = '';
  finishDate: string = '';
  initialDate: string = '';
  foodTime: string = '';
  /*
   * Client-Side properties (Not from API)
   */

  constructor(data: any) {
    super();

    this.update(data);
  }
}
