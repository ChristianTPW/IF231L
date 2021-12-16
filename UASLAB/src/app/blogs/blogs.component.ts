import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../content-service.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  public blg = [] as any;

  constructor(private router: Router, private cntService: ContentService) {}

  ngOnInit(): void {
    const sessExists = localStorage.getItem('sess');
    if (!sessExists) {
      this.router.navigate(['/login']);
      return;
    }

    this.blg = this.cntService.getBlogs();
  }

  logout() {
    localStorage.removeItem('sess');
    this.router.navigate(['/login']);
  }
}
