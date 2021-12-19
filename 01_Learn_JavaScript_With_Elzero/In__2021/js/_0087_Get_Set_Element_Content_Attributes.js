/**
 * DOM [ Get / Set Element Content And Attributes ]
 * -- innerHTML
 * -- textContent
 * -- Chang Attributes Directly
 * -- Chang Attributes With Methods
 * ---- getAttribute
 * ---- setAttribute
 * 
 * Search -> innerHTML
 * 
 */

let myElement = document.querySelector(" .js ");
let myElement1 = document.querySelector(" .js1 ").innerHTML = myElement
let myElement2 = document.querySelector(" .js2 ").textContent = myElement
let myElement3 = document.querySelector(" .js3 ").innerHTML = " Text From <span>Main.js</span> File By innerHTML ";
let myElement4 = document.querySelector(" .js4 ").textContent = " Text From <span>Main.js</span> File By textContent";

console.log(myElement); // -> <div class="js">JavaScript <span>DIV</span> &lt;spna&gt; </div>
console.log(myElement.innerHTML); // -> JavaScript <span>DIV</span> &lt;spna&gt; 
console.log(myElement.textContent); // -> JavaScript DIV <spna> 


document.images[0].src = 'https://hamzoooz.sd/images/test.png';
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "picture";
document.images[0].className = " image-test";

let myMyLink = document.querySelector(".link");

console.log( myMyLink.getAttribute( "class" ) );
console.log( myMyLink.getAttribute( "href" ) );

myMyLink.setAttribute( "class", "class hamzoooz");

myMyLink.setAttribute( "title", "hamzoooz");
myMyLink.setAttribute( "href", "hamzoooz.sd" );

console.log( myMyLink.getAttribute( "class" ) );
console.log( myMyLink.getAttribute( "href" ) );

























































































































































































































































































































// This To Live Sever

// if ('WebSocket' in window) {
//     (function () {
//         function refreshCSS() {
//             var sheets = [].slice.call(document.getElementsByTagName("link"));
//             var head = document.getElementsByTagName("head")[0];
//             for (var i = 0; i < sheets.length; ++i) {
//                 var elem = sheets[i];
//                 var parent = elem.parentElement || head;
//                 parent.removeChild(elem);
//                 var rel = elem.rel;
//                 if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
//                     var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
//                     elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
//                 }
//                 parent.appendChild(elem);
//             }
//         }
//         var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
//         var address = protocol + window.location.host + window.location.pathname + '/ws';
//         var socket = new WebSocket(address);
//         socket.onmessage = function (msg) {
//             if (msg.data == 'reload') window.location.reload();
//             else if (msg.data == 'refreshcss') refreshCSS();
//         };
//         if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
//             console.log('Live reload enabled.');
//             sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
//         }
//     })();
// }
// else {
//     console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
// }