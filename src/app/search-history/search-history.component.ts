import { Component, OnInit } from '@angular/core';
import { SearchHistoryService } from '../search-history.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent {

  searchHistory: any[] = [];

  constructor(private historyService: SearchHistoryService) {
    this.searchHistory = this.historyService.getHistory();
  }

}

