var count=1
var mbtn=document.querySelector(".plus")
var minus=document.querySelector(".minus")
var pls=document.querySelector(".pluss")
var d=document.querySelector(".btn")

mbtn.addEventListener("click",add)

function add(){
   
    mbtn.textContent=(count=1)
    mbtn.setAttribute("class","m1")
    minus.style.display="inline-block"  
    pls.style.display="inline-block"
    if(count>1){
        document.querySelector(".plus").removeEventListener("click",add) 
    }  
  
}

minus.addEventListener("click",sub)

function sub(){
    if(count>0){
        mbtn.textContent=(count=count-1)
    }
    
    if(count==0){
        document.querySelector(".minus").removeEventListener("click",sub) 
        mbtn.style.width="200px" 
        mbtn.textContent="Add to cart"     
        mbtn.setAttribute("class","plus")
        minus.style.display="none"  
        pls.style.display="none"
        
    
    }
}

pls.addEventListener("click",plu)

function plu(){
    if(count>=2){
        document.querySelector(".pluss").removeEventListener("click",pls)
    }
    if(count<=2)
    mbtn.textContent=(count=count+1)
    mbtn.setAttribute("class","m1")
    
}