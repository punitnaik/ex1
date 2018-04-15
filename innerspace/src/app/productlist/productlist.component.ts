import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public test=["pro1","pro2","pro3","pro4","pro5","pro6","pro7","pro8","pro9","pro10"];
  public products=[{id: 1, name:"samsung", description:"samsung product description1"},
                   {id: 2, name:"siemens", description:"siemens product description2"},
                   {id: 3, name:"bosch", description:"bosch product description3"}
                  ];


}



