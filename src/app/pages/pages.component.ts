import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {pages} from "../data";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  pages: number[] = [];

  @Input() size!: number;
  @Input() currentPage!: number;

  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    for(let i = 0; i < this.size; i++) {
      this.pages[i] = i + 1;
    }
  }
}
