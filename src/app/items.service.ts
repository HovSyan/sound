import { Injectable } from '@angular/core';
import {pages} from "./data";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  pages = pages;
  constructor() { }
}
