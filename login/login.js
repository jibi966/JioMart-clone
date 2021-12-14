document.querySelector('#Gotp').addEventListener('click',otpValidate);
var numArr = JSON.parse(localStorage.getItem('numLists')) || [] ;
var mobNum = document.querySelector('#mob').value ;


function otpValidate(){



    // document.querySelector('#otpnum').value ="";
    // document.querySelector('#name').value="";
    // document.querySelector('#email').value="";

    if(mobNum.length != 10){
        alert('Please enter valid Number');
        // document.getElementById('Gotp').hidden = false;
        // document.getElementById('loginbtn').hidden = true;
    }
    else{
        if(numArr.length == 0 ){
            signInForm();
        }
        else{
            document.querySelector('#otpnum').value="";
            numArr.map(function(elem){

                if(Number(mobNum) == Number(elem.mobile)){

                    document.getElementById('Gotp').hidden = true;
                    document.querySelector('#loginbtn').hidden = false ;
                    document.querySelector('#otp').hidden = false ;

                    document.querySelector('#loginbtn').addEventListener('click',function(){
                        var check = document.querySelector('#otpnum').value;
                        if( check == '123456'){
                            window.location.href ='Products.html';
                        }
                    })


                }
                else{
                    signInForm();
                }
            });
        }


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
    document.querySelectorAll('input').textContent ="";

    FormData();

    document.querySelector('#loginbtn').addEventListener('click',function(){
        console.log("cjeck");

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
            console.log("object");
            numArr.push(details);
            localStorage.setItem('numLists',JSON.stringify(numArr));
            window.location.href = 'myAccount.html';

        }
        else{
            console.log("object");
        }

    });

}



