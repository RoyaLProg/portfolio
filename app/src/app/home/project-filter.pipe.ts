import { Pipe, PipeTransform } from '@angular/core';
import { Project } from "./project"

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform(items: Project[], filter: string): any {
    if (!items || !filter || filter === 'All') {
      return items;
    }

    var newitems: Project[] = [];
    items.forEach(item => {
      let groups = item.groups.split(',');
      groups.forEach(group => {
        if (group === filter) {
          newitems.push(item);
        }
      }
      );
    });
    return newitems;
  }
}
