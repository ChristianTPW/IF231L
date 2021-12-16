import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor() {}

  getNews = function () {
    return [
      {
        title: 'Title 1',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, ist. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam expedita praesentium beatae quis officia id earum, rerum ipsum esse?',
        date: '19/12/2000 ',
      },
      {
        title: 'Title 2',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, ist. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam expedita praesentium beatae quis officia id earum, rerum ipsum esse?',
        date: '18/12/2000 ',
      },
      {
        title: 'Title 3',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, ist. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam expedita praesentium beatae quis officia id earum, rerum ipsum esse?',
        date: '17/12/2000 ',
      },
      {
        title: 'Title 4',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, ist. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam expedita praesentium beatae quis officia id earum, rerum ipsum esse?',
        date: '16/12/2000 ',
      },
    ];
  };

  getBlogs = function () {
    return [
      {
        title: 'Blog 1',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, ist. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam expedita praesentium beatae quis officia id earum, rerum ipsum esse?',
        date: '20/12/2000 ',
      },
      {
        title: 'Blog 2',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, ist. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam expedita praesentium beatae quis officia id earum, rerum ipsum esse?',
        date: '15/12/2000 ',
      },
      {
        title: 'Blog 3',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, ist. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam expedita praesentium beatae quis officia id earum, rerum ipsum esse?',
        date: '10/12/2000 ',
      },
      {
        title: 'Blog 4',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, ist. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam expedita praesentium beatae quis officia id earum, rerum ipsum esse?',
        date: '5/12/2000 ',
      },
    ];
  };
}
