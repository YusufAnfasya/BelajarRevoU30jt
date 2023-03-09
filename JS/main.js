console.log("Halooo Abang")
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    slides[slideIndex-1].style.display = "block";  
    
    setTimeout(showSlides, 3000); 
}


function validateForm(){
    //get input values
    var name = document.forms["contact-email"]["fname"].value;
    var mail = document.forms["contact-email"]['email'].value;
    var city = document.forms["contact-email"]['optcity'].value;

    //validate input
    if (name == '' || mail == '' || city == '') {
        alert('Tolong Lengkapi Data');
        return false;
    }
    else{
        alert('Terima Kasih, Permintaan Anda Akan di Prosess');
        return true;
    }

}