import { Component, OnInit } from '@angular/core';
import {Icompany} from './homepageI'


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

companies:Icompany[] = [];

ngOnInit(): void {

var baazigamescompany:Icompany = {
  companynamewithposition:"Baazi Games - QA Automation",
  imagename:"../../assets/instahyre/logo.webp",
  jobavailablelocation:"Delhi",
  Foundedyear:"Founded in 2004",
  employeestrength:" Total Employees -  500",
  companyinfo:"Baazi Games is a group of companies operational in a variety of online games such as fantasy cricket, poker games, card games, rummy, casi",
  requiredskills:["Cucumber","Java","Python"]
}

var jcigamescompany:Icompany = {
  companynamewithposition:"Baazi Games - QA Automation",
  imagename:"../../assets/instahyre/logo.webp",
  jobavailablelocation:"Delhi",
  Foundedyear:"Founded in 2004",
  employeestrength:" Total Employees -  500",
  companyinfo:"Baazi Games is a group of companies operational in a variety of online games such as fantasy cricket, poker games, card games, rummy, casi",
  requiredskills:["Cucumber","Java","Python"]
}

var xyzgamescompany:Icompany = {
  companynamewithposition:"Baazi Games - QA Automation",
  imagename:"../../assets/instahyre/logo.webp",
  jobavailablelocation:"Delhi",
  Foundedyear:"Founded in 2004",
  employeestrength:" Total Employees -  500",
  companyinfo:"Baazi Games is a group of companies operational in a variety of online games such as fantasy cricket, poker games, card games, rummy, casi",
  requiredskills:["Cucumber","Java","Python"]
}

this.companies = [baazigamescompany,xyzgamescompany,jcigamescompany]









}


}
