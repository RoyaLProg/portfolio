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

    return items.filter(item => item.groups.indexOf(filter) !== -1);
  }
}
