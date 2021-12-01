/**
 *  Console Method
 *  error
 *  table
 *  Web API 
 *  Style Consloe  -> Directive  %c
 * 
 */

// (method) Document.write(...text: string[]): void
// Writes one or more HTML expressions to a document in the specified window.
// @param content — Specifies the text and HTML tags to write.
document.write("<h2>Open Console </h2>")

// (method) Console.log(...data: any[]): void 
console.log("This log");
// (method) Console.error(...data: any[]): void
console.error("This Error")
// (method) Console.table(tabularData?: any, properties?: string[]): void
console.table(["PHP","JS","CSS","Python"]);
console.log("Hello %cFrom JS %cFile",  "color:red ; font-size:40px" , "color:blue ; font-size:45px")

