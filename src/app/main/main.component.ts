import {Component, Input, OnChanges, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import {ItemsService} from "../items.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnChanges {
  @ViewChild('audio') audio!: HTMLVideoElement;

  @Input() current!: {text: string, audio: string}

  buttons: {text: string, selected: boolean, isRight: boolean}[] = [];

  constructor(private itemsService: ItemsService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    const rightText = this.current.text;
    let wrong1, wrong2;

    while (true) {
      wrong1 = this.itemsService.pages[~~(Math.random() * this.itemsService.pages.length)].text;
      wrong2 = this.itemsService.pages[~~(Math.random() * this.itemsService.pages.length)].text;
      if(wrong1 !== wrong2 && wrong1 !== rightText && wrong2 !== rightText) {
        break;
      }
    }

    const index = ~~(Math.random() * 3);
    this.buttons[index % 3] = { text: rightText, selected: false, isRight: true };
    this.buttons[(index + 1) % 3] = { text: wrong1, selected: false, isRight: false };
    this.buttons[(index + 2) % 3] = { text: wrong2, selected: false, isRight: false };
  }

  play() {
    this.audio.play();
  }
}
