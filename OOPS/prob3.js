class Bank {
  // property
  accountDetails = {
    1000: {
      accno: 1000,
      userName: "userOne",
      password: "password1",
      balance: 5000,
    },
    1001: {
      accno: 1001,
      userName: "userTwo",
      password: "password2",
      balance: 7000,
    },
    1002: {
      accno: 1002,
      userName: "userThree",
      password: "password3",
      balance: 8000,
    },
    1003: {
      accno: 1003,
      userName: "userFour",
      password: "password4",
      balance: 6000,
    },
    1004: {
      accno: 1004,
      userName: "userFive",
      password: "password5",
      balance: 9000,
    },

  };

  //   methods
  // Validate account no : (check account no is there)
   validateDetails(acccno){
    if(acccno in this.accountDetails){
        return true
    }else{
        return false
    }
   }

  // authenticate account (acccno, username & password)
  autenticateAccount(accNo,userName,password){
    if(this.validateDetails(accNo)){
        let accDetails = this.accountDetails[accNo]
        if(accDetails.userName == userName && accDetails.password == password){
            return true
        }else{
            return false
        }
    }else{
        console.log("Acc is invalid")
    }
  }


  // balance enquiry (accno)
  balance(accNo,userName,password){
    if(this.autenticateAccount(accNo,userName,password)){
        let accDetails = this.accountDetails[accNo]
        console.log(accDetails.balance)
    }else{
        return console.log("Acc not Found")
    }
  }
}

let checkAcc = new Bank()
let res = checkAcc.validateDetails(1001)
// res?console.log("Acoount is valid"):console.log("Account is not valid")

let authAcc = new Bank()
let res2 = authAcc.autenticateAccount(1004,"userFive","password5")
// console.log(res2)

let balance = new Bank()
balance.balance(1004,"userFive","password5")

