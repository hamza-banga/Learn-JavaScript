/**
 * DOM [ Add Event Listener ]
 *      addEventListener
 *      Use Without On 
 *      Attach Multiple JEvenets
 *      Error Test 
 * 
 * search 
 *      Capture & Bubblig JavaScript 
 *      removeEventListener
 */

//  Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
//  The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.
//  When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
//  When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.
//  When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.
//  If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.
//  The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = tow; // -> Excuet Only This Becouse It Well OverWrite On one();

// function one(){
//     console.log("Message From OnClick 1 ");
// }

// function tow(){
//     console.log("Message From OnClick 2 ");
// }

// myP.addEventListener("click", function(){
//     console.log("Message From OnClick 1 Event  ")
// });

// myP.addEventListener("click", one );
// myP.addEventListener("click", tow );

myP.onclick = function(){
    let newP = myP.cloneNode(true);
    newP.className = "clone";
    document.body.appendChild(newP);
};

// let clone = document.querySelector(" .clone ");
// clone.onclick = function(){
//     console.log("I am Clone ");
// };


document.addEventListener("click", function(e){
    if ( e.target.className === 'clone' ){
        console.log("I am Clone ");
    }
});




