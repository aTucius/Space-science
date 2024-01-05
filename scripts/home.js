var heading = document.querySelector(".heading")

window.addEventListener("mousemove", function(event){
    var positionX = event.clientX / 90
    var positionY = event.clientY / 90

    heading.style.transform = `translate(${positionX}px, ${positionY}px)`
})