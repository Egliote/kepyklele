import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "./models/product";

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(value: Product[], args?: string): any {
    if (args)
      return value.filter(product => product.name.toLowerCase().indexOf(args.toLowerCase())>=0);
    else
      return value;
  }

}
