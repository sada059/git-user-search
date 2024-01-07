import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RepositoryUserService } from '../repository-user.service';
import { SearchHistoryService } from '../search-history.service';
import { User } from '../user';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  user!: User | undefined;
  searchText!: string;
  displayUserDetailContainer = false;
  displayGithubUserErrorNotFound = false;
  searchResults: any;

  constructor(private userservice : RepositoryUserService, private historyService : SearchHistoryService) { }

  //accessing form inputs
  @ViewChild('f')
  searchForm!: NgForm;

  ngOnInit(): void {}

  //search for a github user
  searchGithubUser () {
    this.searchText = this.searchForm.value.search;
    this.userservice.getUserResponse(this.searchText).then(
      (response) => {
        this.user = this.userservice.getUserDetails;
        this.displayUserDetailContainer = true;
        this.searchResults = this.userservice.getUserDetails;
        if(this.searchResults) this.historyService.addToHistory(this.searchText, this.searchResults);
      },
      (error) => {
        console.log(error);
        this.displayGithubUserErrorNotFound = true;
      }
    );
  }

}
