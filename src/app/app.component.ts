import {Component, OnInit} from '@angular/core';
import {ItemsService} from "./items.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  PROGRESS_STEP = 11;

  title = 'sound';
  current!: { text: string, audio: string };
  currentPage: number = 1;
  totalProgress!: number;
  currentProgress: number = 0;

  constructor(public itemsService: ItemsService) {
  }

  onPageChanged(page: number) {
    this.currentPage = page;
    this.current = this.getCurrentItem();
  }

  ngOnInit() {
    this.current = this.getCurrentItem() ;
    this.totalProgress = this.itemsService.pages.length * this.PROGRESS_STEP;
  }

  onAddProgress() {
    this.currentProgress += this.PROGRESS_STEP;
  }

  private getCurrentItem() {
    return { ...this.itemsService.pages[this.currentPage - 1] };
  }
}
