// firstContainer.addEventListener('click', function(){
//         document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//         console.log("Clicked on Container")
//     })

// firstContainer.addEventListener('mouseover',function(){
//     console.log("mouse on conatiner");
// })

// firstContainer.addEventListener('mouseout',function(){
//     console.log("mouse out of conatiner");
// })

// let prevHTML = document.querySelector('.container')[1].innerHTML;

// firstContainer.addEventListener('mouseup',function () {
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log9("mouse up when clicked on container");
// })

// firstContainer.addEventListener('mousedown',function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> WE HAVE CLICKED</b>";
//     console.log9("mouse down when clicked on container");
// })

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;

firstContainer.addEventListener('mouseup', function () {
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up when clicked on Container");
})

firstContainer.addEventListener('mousedown', function () { 
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked<\b>";     
    console.log("Mouse down when clicked on Container"); 
 })

 logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}

obj = {name:"harry" , length:1}
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`);
console.log(parsed);
