let btnMenu = document.querySelector("#btn-menu")


function mostrar_ocultar(){
    let nav=document.querySelector("#nav")
    sw=0
    if (nav.style.visibility=="hidden"){
        sw=0
        nav.s
    }
    if (nav.style.visibility=="visible"){
        sw=1
    }
    if (sw==1){
        nav.style.visibility="hidden"
    }
    if (sw==0){
        nav.style.visibility="visible"
        
    }
    
}
btnMenu.addEventListener("click",function(){
    mostrar_ocultar(); 
})



function getAncho(){
    let ancho=document.documentElement.clientWidth;
    console.log(ancho);
    
    if(ancho>710){
        let nav=document.querySelector("#nav")

        btnMenu.display="none";
        console.log("se borró");

        nav.style.visibility="visible"


    }
    else{
        nav.style.visibility="hidden"
    }
    
}



