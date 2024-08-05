window.addEventListener("mousemove", function(details){
    var rect = this.document.querySelector("#rect");

    var xval = gsap.utils.mapRange(0,window.innerWidth,100+rect.getBoundingClientRect().width/2,this.window.innerWidth-(100+rect.getBoundingClientRect().width/2),details.clientX)

    gsap.to('#rect', {
        left: xval,
        ease: Power3
    })


    //-------------------------- TOP - BOTTOM ----------------------------------------

    // var yval = gsap.utils.mapRange(0,window.innerHeight,100+rect.getBoundingClientRect().height/2,this.window.innerHeight-(100+rect.getBoundingClientRect().height/2),details.clientY)

    // gsap.to('#rect', {
    //     top: yval,
    //     ease: Power3
    // })
})