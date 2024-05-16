const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt =e.clientX; 
}

window.onmouseup = () =>  {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextpercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    track.dataset.percentage = nextpercentage;

    track.animate({
        transform: `translate(${nextpercentage}% , -50%)`
    },  {duration: 1200 , fill: "forwards"});
}

for(const image of track.getElementsByClassName("image")){
    image.animate({ 
        objectPosition:`${nextpercentage + 100}% 50%`
    }, {duration: 1200 , fill: "forwards"});
}