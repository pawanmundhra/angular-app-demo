import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customReferenceData'
})
export class CustomReferenceDataPipe implements PipeTransform {

  transform(screenList: any, ...args: any[]): any {
    // Object for pipes
    if (!screenList) {
       return {};
    }
    return screenList.toString();
  }

}
