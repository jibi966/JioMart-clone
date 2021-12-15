document.querySelector('#Gotp').addEventListener('click',otpValidate);
var numArr = JSON.parse(localStorage.getItem('DataBase')) || [] ;
var mobNum = document.querySelector('#mob').value ;
var numberIdentifier = JSON.parse(localStorage.getItem('NumbersArray')) || [];
if(numberIdentifier.length > 0){
    numberIdentifier.length = 0;
}


function otpValidate(){

    if(mobNum.length == 10 && numArr.length > 0 ){

        document.querySelector('#otpnum').value="";
            numArr.map(function(elem){

                if(mobNum == elem.mobile){

                    document.getElementById('Gotp').hidden = true;
                    document.querySelector('#loginbtn').hidden = false ;
                    document.querySelector('#otp').hidden = false ;

                    document.querySelector('#loginbtn').addEventListener('click',function(){
                        var check = document.querySelector('#otpnum').value;
                        if( check == '123456'){
                            var numObj={
                                enteredNum : mobNum,
                            }
                            numberIdentifier.push(numObj);
                            localStorage.setItem('NumbersArray',JSON.stringify(numberIdentifier));
                            window.location.href ='Products.html';
                        }
                    })
                }
                else{
                    signInForm();
                }
            });


    }
    else{
        signInForm();
    }
}
function FormData(){

    document.querySelector('#numRemoval').textContent = "Change";

    document.querySelector('#numRemoval').addEventListener('click',function(){

        document.querySelector('#signininfo').innerHTML = "please enter your details.";
        document.querySelector('#mob').value = "";
        document.querySelector('#numRemoval').textContent = "";
        document.querySelector('#form').hidden = true ;
        document.querySelector('#otp').hidden = true ;
        document.getElementById('Gotp').hidden = false;
        document.getElementById('loginbtn').hidden = true;
    });
}

function signInForm(){

    document.querySelector('#form').hidden = false ;
    document.getElementById('Gotp').hidden = true;
    document.querySelector('#loginbtn').hidden = false ;
    document.querySelector('#otp').hidden = false ;
    document.querySelector('#name').value ="";
    document.querySelector('#email').value ="";
    document.querySelector('#otpnum').value ="";


    FormData();

    document.querySelector('#loginbtn').addEventListener('click',function(){

        var name = document.querySelector('#name').value;
        var email = document.querySelector('#email').value;
        var password = document.querySelector('#password').value;
        var repassword = document.querySelector('#re-t-password').value;
        var check = document.querySelector('#otpnum').value ;
        var details = {
            Fname : name,
            mail : email,
            pwd : password,
            mobile : mobNum ,
        };

        if( mobNum.length == 10 && name.length >=3 && password.length > 5 && password == repassword  && check == '123456'){
            var numObj={
                enteredNum : mobNum,
            }
            numberIdentifier.push(numObj);
            localStorage.setItem('NumbersArray',JSON.stringify(numberIdentifier));
            numArr.push(details);
            localStorage.setItem('DataBase',JSON.stringify(numArr));
            window.location.href = 'myAccount.html';

        }
        else{
            alert('check the details again');
        }

    });
}

document.querySelector('.terms').addEventListener('click', function(){
    window.location.href ='Terms.html'
});

document.querySelector('.privacy').addEventListener('click', function(){
    window.location.href ='Privacy.html'
});



