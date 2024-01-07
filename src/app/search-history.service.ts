import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {
  private readonly storageKey = 'searchHistory';

  constructor() {}

  getHistory(): any[] {
    const history = localStorage.getItem(this.storageKey);
    return history ? JSON.parse(history) : [];
  }

  addToHistory(searchTerm: String, searchResult: any[]): void {
    let history = this.getHistory();
    const item = {...searchResult, searchTerm};
    const existingIndex = history.findIndex((item) => item.searchTerm === searchTerm);
    if (existingIndex !== -1) {
        // If the search term exists, update its search result
        history[existingIndex].searchResult = searchResult;
      } else {
        // Add the new search term and its result to the history
        history.unshift(item);
        history = history.slice(0, 10); // Limit history to 10 items (adjust as needed)
      }
    
      // Save the updated history to local storage
      localStorage.setItem(this.storageKey, JSON.stringify(history));
  }
}
