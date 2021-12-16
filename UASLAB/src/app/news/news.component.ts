import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  public nws = [] as any;

  constructor(private cntService: ContentService) {}

  ngOnInit(): void {
    this.nws = this.cntService.getNews();
  }
}
