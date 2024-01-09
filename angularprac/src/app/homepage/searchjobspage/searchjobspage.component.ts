import { Component } from '@angular/core';
import { tab } from './tab';

@Component({
  selector: 'app-searchjobspage',
  templateUrl: './searchjobspage.component.html',
  styleUrls: ['./searchjobspage.component.scss']
})
export class SearchjobspageComponent {

  Searchjobspagecomponent(){

  }

newTab:String = "+"


tabs:tab[] = [
{tab_name:"search-one",tab_icon:"",tab_title:"search"},
{tab_name:"search-two",tab_icon:"",tab_title:"+"}
]


openNewTab(){
  this.newTab = "Search new job"

}


}
