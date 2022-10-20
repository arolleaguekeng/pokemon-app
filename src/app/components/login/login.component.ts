import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  message: string = 'you are disconnected, (pikachu/pikachu)';
  name: string;
  password: string;
  auth: AuthService;
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.auth = this.authService;
  }

  setMessage(){
    this.auth.isLoggedIn ?this.message = 'You are connected.'
      :this.message = 'Username and password is incorrect';
  }

  login(){
    this.message = 'Try to connect is progres...';
    this.auth.login(this.name, this.password)
    .subscribe((isLoggedIn: boolean) =>{
      this.setMessage();
      if(isLoggedIn){
        this.router.navigate(['/pokemons'])
      }
      else{
        this.password = ''
        this.router.navigate(['/login']);
      }
    })
  }

  logout(){
    this.auth.logout();
    this.message = 'You are disconnected'
  }

}

