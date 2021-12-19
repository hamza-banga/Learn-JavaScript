/**
 * DOM  [ Creat Elements ]
 *      CreatElement
 *      CreatCommnet
 *      CreatTextNode
 *      CreatAttribute
 *      AppendChild
 */

/**
 * (method) Document.createElement<keyof HTMLElementTagNameMap>(tagName: keyof HTMLElementTagNameMap, options?: ElementCreationOptions): HTMLObjectElement | ... 67 more ... | HTMLVideoElement (+2 overloads)
 *  Creates an instance of the element for the specified tag.
 * @param tagName — The name of an element.
 * createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];
 */
let myElement = document.createElement( "div" );

/**
 * (method) Document.createAttribute(localName: string): Attr
 * Creates an attribute object with a specified name.
 * @param name — String that sets the attribute object's name.
 */
let myAttribute = document.createAttribute("data-custom");

/**
 * (method) Document.createTextNode(data: string): Text
 * Creates a text string from the specified value.
 * @param data String that specifies the nodeValue property of the text node.
 * createTextNode(data: string): Text;
 */
let myText = document.createTextNode(" Product One ");

/**
 * (method) Document.createComment(data: string): Comment
 * Creates a comment object with the specified data.
 * @param data — Sets the comment object's data.
 * createComment(data: string): Comment;
 */
let myComment = document.createComment("This Div");

/**
 * (property) Element.className: string
 * Returns the value of element's class content attribute. Can be set to change it.
 * className: string;
 */
myElement.className = "product";
myElement.setAttributeNode(myAttribute);
myElement.setAttribute("data-test", "Testing");
myElement.appendChild(myComment);
myElement.appendChild((myText));

document.body.appendChild(myElement)
console.log(myElement);
