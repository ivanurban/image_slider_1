

//GLOBAL VARIABLES
//Nodelist of all images
const slides = document.querySelectorAll(".imageGrid");

let slideIndex = 0



let mySlides = document.querySelector(".mySlides")


//Click on image:
//1.Function to open and close modal

const openModal = () => {

    document.querySelector(".modal").style.display ="flex";

}

const closeModal = () =>{

    document.querySelector(".modal").style.display ="none";

}
//2.Func to show image
const showSlides = (n, test) =>{

       
    if(n < 0 ){

    n = slides.length -1;
    mySlides.innerHTML = slides[n].innerHTML;
    slideIndex = n;
    
    }

    else if(n > slides.length -1){

    n = 0;
    mySlides.innerHTML = slides[n].innerHTML;
    slideIndex = n;

     }

    if (test == 0){

        mySlides.innerHTML = slides[n].innerHTML;
        slideIndex = n
    }
    else if (test == 1){

        console.log("n iz else if petlje",n)
        
        mySlides.innerHTML = slides[n].innerHTML;

        
    }
          
        
               
     
}

//3.Function to go through images

    // Next/previous controls

const plusSlides = (n) => {
        let test = 1
        showSlides(slideIndex +=n, test);
       
    }

   

//First click on some image
for(let i = 0;i<slides.length;i++){


    let test = 0
    
    slides[i].addEventListener("click", function(){

    openModal();

    showSlides(i, test)

    
    });
}

