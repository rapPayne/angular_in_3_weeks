import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {
  translations: { [key: string]: string } = {
    new: 'Guest has placed the order',
    cooking: 'Cooking',
    readyForGuest: 'Ready for the guest',
    pickedUp: 'On its way!',
    delivered: 'Guest has their order',
    problem: 'Problem with the order',
    completed: 'Paid for. The order is closed.'
  };
  transform(value: string, ...args: unknown[]): string {
    return this.translations[value];
  }
}

