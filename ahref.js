// document.querySelector(".img-container").addEventListener("click", e => {
//     const playline = document.querySelector(".img-container");
//     // const circle = document.querySelector(".circle");

//     const divRect = playline.getBoundingClientRect();
//     console.log("divReact-left: "+divRect.left)
//     const clickX = e.clientX - divRect.left;
//     console.log("e.clientX: "+e.clientX)
//     console.log("ClickX: "+clickX)
//     const playbarWidth = divRect.width;
//     console.log("Width: "+playbarWidth);
//     // let clickPercent = (clickX / playbarWidth) * 100;

//     // audio.currentTime = (audio.duration * clickPercent) / 100;

// });


// const adjust = document.querySelector(".img-container");

const adjust = document.querySelector(".img-container img");

    // const circle = document.querySelector(".circle");

    const divRect = adjust.getBoundingClientRect();
const divReact = divRect.left;
document.documentElement.style.setProperty('--width', `${divReact}px`);
console.log(divReact);


const img_container = document.querySelectorAll(".img-container");
img_container.forEach(element=> {
    // const img_container = document.querySelectorAll(".img-container");
    element.addEventListener('click', function() {
       const container = element.outerHTML
            localStorage.setItem('container', container);
            const url = element.getAttribute("data-url");
            window.location.href = url;
    });
});


document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".left").style.left ="0px"
    console.log("Clicked")
})

document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".left").style.left ="-100%"
    console.log("Clicked")
})



