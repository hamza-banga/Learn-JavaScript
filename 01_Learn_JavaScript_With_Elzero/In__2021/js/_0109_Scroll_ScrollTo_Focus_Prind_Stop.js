/**
 * BOM 
 * -- Stop()
 * -- print()
 * -- focus()
 * -- scrollTo(x, y || Options)
 * -- scroll(x, y || Options)
 * -- scrollBy(x, y || Options)
 */

// window.scrollTo({
//     left: 1500,
//     top:500,
//     behavior:"smooth"
// });

let stopScroll = document.getElementById("stop");
let runScroll = document.getElementById("run");
let top1 = document.getElementById("top");
let down = document.getElementById("down");
console.log(stopScroll)
console.log(runScroll)
console.log(top1)
console.log(down);

let Autoscroll = setInterval(function(){
    window.scrollBy({
        left: 1500,
        top:5,
        behavior:"smooth"
    });
},500)


stopScroll.onclick = function (){
    clearInterval(Autoscroll)
}

// runScroll.onclick = function (){
//     window.location.reload();
// }

runScroll.onclick = function (){
    Autoscroll = setInterval(function(){
        window.scrollBy({
            left: 1500,
            top:5,
            behavior:"smooth"
        });
    },500)
}

top1.onclick = function(){
    window.scrollTo(0,0);
};


down.onclick = function(){
    window.scrollTo(100000,100000);
};
