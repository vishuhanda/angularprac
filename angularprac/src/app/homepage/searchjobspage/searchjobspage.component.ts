import { Component, OnInit } from '@angular/core';
import { tabI } from './tab';

@Component({
  selector: 'app-searchjobspage',
  templateUrl: './searchjobspage.component.html',
  styleUrls: ['./searchjobspage.component.scss']
})
export class SearchjobspageComponent implements OnInit{

  Searchjobspagecomponent(){
  }

ngOnInit(): void {

}


tabs:tabI[] = [
{tab_index:0,tab_name:"new-search-1",tab_icon:"",tab_title:"new-search-1"},
{tab_index:1,tab_name:"new-search-2",tab_icon:"",tab_title:"+"}
]


openNewTab(event:Event,tab_index:number){
  var totalTabs = this.tabs.length
  console.log("open new tab called " + totalTabs)
  if(totalTabs-1 === tab_index){
     this.tabs[tab_index].tab_title = "new-search" + (tab_index +1)
     this.tabs[tab_index].tab_name = "new-search" + (tab_index +1)
    this.tabs = this.tabs.concat({tab_index:totalTabs-1,tab_name:"new-search-"+totalTabs,tab_icon:"",tab_title:"+"})
  }

}


}
