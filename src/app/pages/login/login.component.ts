import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  usuario: UsuarioModel = new UsuarioModel();
  ngOnInit() {
  }

  login(form: NgForm){
    if (form.invalid) return;
    console.log(form);
  }
}
