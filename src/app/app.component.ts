import {Component, OnInit} from '@angular/core';
import {ItemsService} from "./items.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sound';
  current!: { text: string, audio: string };
  currentPage: number = 1;

  constructor(public itemsService: ItemsService) {
  }

  onPageChanged(page: number) {
    this.currentPage = page;
    this.current = this.getCurrentItem();
  }

  ngOnInit() {
    this.current = this.getCurrentItem() ;
  }

  private getCurrentItem() {
    return { ...this.itemsService.pages[this.currentPage - 1] };
  }
}
