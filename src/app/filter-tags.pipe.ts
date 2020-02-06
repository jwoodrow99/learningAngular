import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './content-card/content-card-helper';

@Pipe({
  name: 'filterTags'
})
export class FilterTagsPipe implements PipeTransform {

    matching: Content[];

  transform(content: Content[], type: string): Content[] {
    this.matching = [];
    content.forEach((jazzie: Content) => {
        if (jazzie.type == type){
            this.matching.push(jazzie);
        }
    });
    return this.matching;
  }

}
