let elements = document.querySelectorAll(".elem")
let overlay = document.querySelectorAll(".overlay")
elements.forEach(function(elem,index){
    elem.addEventListener("mouseenter",function(){
        if(index === 0){
            gsap.to(overlay,{
                height: "100%"
            })
        }
        if(index === 1){
            gsap.to(overlay,{
                height: "100%"
            })
        }
        if(index === 2){
            gsap.to(overlay,{
                height: "100%"
            })
        }
        if(index === 3){
            gsap.to(overlay,{
                height: "100%"
            })
        }
    })
})