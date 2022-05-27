import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-empresas-consulta',
  templateUrl: './empresas-consulta.component.html',
  styleUrls: ['./empresas-consulta.component.css']
})
export class EmpresasConsultaComponent implements OnInit {
 


  
  constructor(
    //declarando atributos do componente que já
    //serão inicializados automaticamente
    private httpClient: HttpClient
  ) { }
 
  //método executado sempre que o componente é aberto
  ngOnInit(): void {
 
    //executar o serviço de consulta de empresas na API
    this.httpClient.get(environment.apiEmpresas)
      .subscribe({
        //resposta de sucesso da API
        next: (result) => {
          console.log(result);
        },
        //resposta de erro da API
        error: (e) => {
          console.log(e);
        }
      });
  }
 
}
 

