import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim='Your Perfect Banking Partner'
  acno=""
  psw=""


  userDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:100000},
    1001:{acno:1002,username:"anu",password:123,balance:200000},
    1002:{acno:1002,username:"joyal",password:123,balance:150000},
    1003:{acno:1003,username:"anaga",password:123,balance:100000},
  }

  constructor() { }

  ngOnInit(): void {
  }

  // login(a:any,b:any){
  //   var acnum=a.value
  //   var psw=b.value
  //   let userdetails=this.userDetails
  //   if(acnum in userdetails){
  //     if(psw==userdetails[acnum]['password']){
  //       alert('login success')
  //     }
  //     else{
  //       alert('incorrect password')
  //     }
  //   }
  //     else{
  //       alert('user not exist or incorrect ac number')
  //     }
    
    

  // }


  login(){
    var acnum=this.acno
    var psw=this.psw
    let userdetails=this.userDetails
    if(acnum in userdetails){
      if(psw==userdetails[acnum]['password']){
        alert('login success')
      }
      else{
        alert('incorrect password')
      }
    }
      else{
        alert('user not exist or incorrect ac number')
      }
    
    

  }








  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
  

  }
  pswChange(event:any){
    this.psw=event.target.value
    console.log(this.psw);
    
  }

}
