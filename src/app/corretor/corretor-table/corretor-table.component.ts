import { Component, OnInit } from '@angular/core';
import { Corretor } from '../corretor';
import { Http } from '@angular/http';

@Component({
  selector: 'app-corretor-table',
  templateUrl: './corretor-table.component.html',
  styleUrls: ['./corretor-table.component.css']
})
export class CorretorTableComponent implements OnInit {

  private corretores = new Array<Corretor>();

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://srvacx01d:8080/acx/corretoresEspeciaisRest/corretores').subscribe(resp => {
      this.corretores = resp.json(); 
    }, error => {
      console.log(error);
    }); 
  }

}
