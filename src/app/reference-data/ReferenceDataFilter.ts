import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'referenceDataFilter'
})
export class ReferenceDataFilter implements PipeTransform {
  transform(screenList: any, ...args: any[]): String {
    // Object for pipes
    if (!screenList) {
      return '';
    }

    let refDataScreenNames = '';

    screenList.forEach(el => {
      refDataScreenNames =  `${refDataScreenNames}${el},`;
    });

    return refDataScreenNames;
  }
}
