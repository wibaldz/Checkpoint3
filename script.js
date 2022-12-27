let myForm = document.getElementById('myForm');


myForm.addEventListener('submit', function(e){
let name = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let myRegex = /^[a-zA-Z-\s]+$/;
let mail = document.getElementById('mail');
let myMailRegex = /^[^ ]+@[^ ]+\.[a-z]{2, 3}$/;

if (name.value.trim() == ""){
    let myNameError = document.getElementById('error-nom');
    myNameError.style.color = "red";
    myNameError.innerHTML = "Le champ Nom est requis";
    e.preventDefault();
    
}else if(myRegex.test(name.value) == false){
    let myNameError = document.getElementById('error-nom');
    myNameError.style.color = "red";
    myNameError.innerHTML = "Le nom doit comporter uniquement des lettres et des tirets";
    e.preventDefault();

}

if (prenom.value.trim() == ""){
    let myPrenomError = document.getElementById('error-prenom');
    myPrenomError.style.color = "red";
    myPrenomError.innerHTML = "Le champ Prénom est requis";
    e.preventDefault();
    
}else if(myRegex.test(prenom.value) == false){
    let myPrenomError = document.getElementById('error-prenom');
    myPrenomError.style.color = "red";
    myPrenomError.innerHTML = "Le prénom doit comporter uniquement des lettres et des tirets";
    e.preventDefault();

}

if (mail.value.trim() == ""){
    let myMailError = document.getElementById('error-mail');
    myMailError.style.color = "red";
    myMailError.innerHTML = "Le champ adresse mail est requis";
    e.preventDefault();
    
}else if(myMailRegex.test(mail.value) == false){
    
    let myMailError = document.getElementById('error-mail');
    myMailError.style.color = "red";
    myMailError.innerHTML = "L'adresse mail doit comporter uniquement des lettres, tirets et chiffres";
    e.preventDefault();

}

}
)


document.body.onload=function(){
    nbr=5;//nombre d'images
    p=0; //position
    elements = document.getElementById("elements");
    prevSlide = document.getElementById("nav-gauche");
    nextSlide = document.getElementById("nav-droite");

    nextSlide.onclick=function(){
        if(p> -nbr+1)
        p--;
        elements.style.transform="translate("+p*600+"px)";
        elements.style.transition="all 0.5s ease";
        afficherMasquer();
    }

    prevSlide.onclick=function(){
        if(p<0)
        p++;
        elements.style.transform="translate("+p*600+"px)";
        elements.style.transition="all 0.5s ease";
        afficherMasquer();
    }

    function afficherMasquer(){
        if(p==-nbr+1)
        nextSlide.style.visibility="hidden";
        else
        prevSlide.style.visibility="visible";


        if(p==0)
        prevSlide.style.visibility="hidden";
        else
        nextSlide.style.visibility="visible";
        

    }

} 





function myFunction() {
  var x = document.getElementsById("projet1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction() {
  var x = document.getElementsByClassName("projetText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}