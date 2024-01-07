import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { UserSearchComponent } from './user-search/user-search.component';

const routes: Routes = [
  { path: 'user-search', component: UserSearchComponent},
  { path: 'search-history', component: SearchHistoryComponent},
  { path: '', redirectTo:"/user-search", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
