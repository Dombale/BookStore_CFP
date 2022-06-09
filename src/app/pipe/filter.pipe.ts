import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const searchBooks = [];
        for (const book of value){
          if(book.bookName.toLowerCase().includes(filterString.toLowerCase()) || book.author.toLowerCase().includes(filterString.toLowerCase())){
            searchBooks.push(book);
        }
      }
    return searchBooks;
  }

}
