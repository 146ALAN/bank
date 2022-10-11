import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any
  currentAcno:any
  userDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:100000,transaction:[]},
    1001:{acno:1002,username:"anu",password:123,balance:200000,transaction:[]},
    1002:{acno:1002,username:"joyal",password:123,balance:150000,transaction:[]},
    1003:{acno:1003,username:"anaga",password:123,balance:100000,transaction:[]},
  }

  constructor() { }



  register(acno:any,username:any,password:any){
    let userdetails=this.userDetails
    if(acno in userdetails){
      return false
    }
    else{
      userdetails[acno]={acno,username,password,balance:0}
      console.log(userdetails);
      
      return true
    }
  }




  login(acnum:any,psw:any){
   
    let userDetails=this.userDetails
    if(acnum in userDetails){//acnum will check whether there is an acnum that has entered by a user in userdetails.
      if(psw==userDetails[acnum]['password']){
       this.currentUser=userDetails[acnum]['username']  
       this.currentAcno=acnum
       return true
      }
      else{
        alert('incorrect password')
        return false
      }
    }
      else{
        alert('user not exist or incorrect ac number')
        return false
      }
    
    

  }




  deposit(acnum:any,pswrd:any,amnt:any){
    let userDetails=this.userDetails
    var amount=parseInt(amnt)
    if(acnum in userDetails){
      if(pswrd==userDetails[acnum]['password']){
        userDetails[acnum]['balance']+=amount
        userDetails [acnum]['transaction'].push({ type:'credit',amount})
        return userDetails[acnum]['balance']
      }
      else{
        alert('incorrect password')
      }
    }
    else{
      alert('user not exist')
      return false
    }

  }
  withdraw(acnum:any,pswrd:any,amnt:any){
    let userDetails=this.userDetails
    var amount=parseInt(amnt)
    if(acnum in userDetails){
      if(pswrd==userDetails[acnum]['password']){
        if(userDetails[acnum]['balance']>=amnt){
        userDetails[acnum]['balance']-=amount
        userDetails [acnum]['transaction'].push({ type:'debit',amount})
        return userDetails[acnum]['balance']
      }
      else{
        alert('insufficient balance')
        
      }
      }
      else{
        alert('incorrect password')
      }
      }
      else{
        alert('user not exist')
        return false
    }
    
  }
  getTransaction(acno:any){
    return this.userDetails[acno]['transaction']
  }
}

