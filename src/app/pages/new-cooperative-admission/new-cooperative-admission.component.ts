import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import Swal from "sweetalert2";

@Component({
  selector: 'app-new-cooperative-admission',
  templateUrl: './new-cooperative-admission.component.html',
  styleUrls: ['./new-cooperative-admission.component.scss']
})
export class NewCooperativeAdmissionComponent implements OnInit {
  infoCollaborators$!: Observable<any>
  items!: any;
  collaboratorForm!: FormGroup;

  constructor(
    public fb: FormBuilder
  ){}

  ngOnInit(): void{
     this.createForm();

  }

  createForm(){

    this.collaboratorForm = this.fb.group({
      cpf: [null, [Validators.required]]
    })
  }

  submitForm(){
  if(this.collaboratorForm.valid){
     // verificar se o cpf digitado é valido

     if(this.isValidCPF(this.collaboratorForm.get('cpf')?.value)){
      Swal.fire({
        icon: 'success',
        title: 'CPF localizado!!',
        showConfirmButton: false,
        timer: 2500
      });
      this.getItens()
     }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...!',
        showConfirmButton: false,
        text: 'CPF inserido não é valido',
        timer: 2500

      });
      this.items = [];
     }
  }
  }

  isValidCPF(cpf: string): boolean {


    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }

    // Validação dos dígitos verificadores
    let sum = 0;
    let remainder: number;

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.charAt(9))) {
      return false;
    }

    sum = 0;

    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.charAt(10))) {
      return false;
    }
    return true;
  }

  getItens(){
   return this.items = [
      {
        "situation": "Situação Cadastral do CPF",
        "typeConsult": "Consulta na Receita Federal",

        "description": [{
          "icon": "material-symbols-rounded",
          "name": "person",
          "span": " Nome",
          "label":" Mariane de Sousa Oliveira",
          "account": false,
        },
        {
          "icon": "material-symbols-rounded success",
          "name": "check_circle",
          "span": "Situação do CPF",
          "label":" Regular",
          "account": false,
        },


      ]
      },
      {
        "situation": "Conta Aplicação",
        "typeConsult": "Cooperativa Viacredi",
        "description": [{
          "icon": "material-symbols-rounded",
          "name": "credit_card",
          "span": " Numero da conta",
          "label":"557932-4",
          "account": true,
        },

      ]
      },
      {
        "situation": "Conta corrente",
        "typeConsult": "Cooperativa Viacredi",
        "description": [{
          "icon": "material-symbols-rounded",
          "name": "credit_card",
          "span": " Numero da conta",
          "label":"778461-8",
          "account": true,
        },

      ]
      },
    ];
  }
}
