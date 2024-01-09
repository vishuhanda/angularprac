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


tabs:tab[] = [
{tab_name:"search-1",tab_icon:"",tab_title:"search"},
{tab_name:"search-2",tab_icon:"",tab_title:"+"}
]


openNewTab(event:Event){
  var totalTabs = this.tabs.length
  console.log("open new tab called " + totalTabs)
  this.tabs = this.tabs.concat({tab_name:"search-"+totalTabs,tab_icon:"",tab_title:"search"})

}


}
