let ImgOnea = document.getElementsByClassName("mima_one");
let ImgTwoa = document.getElementsByClassName("mima_two");
let ImgThreea = document.getElementsByClassName("mima_three");
let ImgFoura = document.getElementsByClassName("mima_four");


console.log(document.getElementById('mimi'));
document.getElementById('mimi').src = "https://cher-dak.netlify.app/imgs/catalog/png/druf.png";

ImgOnea.onclick = function() {
    console.log("kaka");
    document.getElementById('mimi').src = "https://cher-dak.netlify.app/imgs/catalog/png/compas.png";
};
ImgTwoa.onclick = function() {
    document.getElementById('mimi').src = "https://cher-dak.netlify.app/imgs/catalog/png/druf.png";
};
ImgThreea.onclick = function() {
    document.getElementById('mimi').src = "https://cher-dak.netlify.app/imgs/catalog/png/compas.png";

};
console.log(ImgOnea);
//start the left to right display animation
let lr = document.querySelectorAll('.animatLtoR');
Array.from(lr);
    lr.forEach(anim => {
        anim.style.opacity = "0";
    });

window.addEventListener('scroll',()=>{
    
    Array.from(lr);
    lr.forEach(anim => {
        
        
        let contentPosition = anim.getBoundingClientRect().top;
        let screenPosition = window.innerHeight ;
        if (contentPosition <= screenPosition) {
            anim.classList.replace("animatLtoR", "show");
            anim.style.opacity = "1";
        }
});
});

//start the right to left display animation
let rl = document.querySelectorAll('.animatrtol');
Array.from(rl);
    rl.forEach(anim => {
        anim.style.opacity = "0";
    });


    
    Array.from(rl);
    rl.forEach(anim => {
        let contentPosition = anim.getBoundingClientRect().top;
        let screenPosition = window.innerHeight ;
        console.log(anim.getBoundingClientRect().top);
        
        window.addEventListener('scroll',()=>{
        if (contentPosition <= screenPosition) {
            anim.classList.replace("animatrtol", "show_two");
            anim.style.opacity = "1";
        }
});
});



//start the scale display animation 
let sc = document.querySelectorAll('.scale_anim');
Array.from(sc);
    sc.forEach(anim => {
        anim.style.opacity = "0";
    });

window.addEventListener('scroll',()=>{
    
    Array.from(sc);
    sc.forEach(anim => {
        
        
        let contentPosition = anim.getBoundingClientRect().top;
        let screenPosition = window.innerHeight ;
        if (contentPosition <= screenPosition) {
            anim.classList.replace("scale_anim", "show_three");
            anim.style.opacity = "1";
        }
});
});

// start the rotate scroll event
let ro = document.querySelectorAll('.rot');
Array.from(ro);
    ro.forEach(anim => {
        anim.style.opacity = "0";
    });

window.addEventListener('scroll',()=>{
    
    Array.from(ro);
    ro.forEach(anim => {
        
        
        let contentPosition = anim.getBoundingClientRect().top;
        let screenPosition = window.innerHeight ;
        if (contentPosition <= screenPosition) {
            anim.classList.replace("rot", "show_threepipi");
            anim.style.opacity = "1";
        }
});
});