export class CreateHtmlElement{
    /**
     *
     * @param tag
     * @param cssClasses
     * @param attributes
     * @returns {HTMLAnchorElement | HTMLElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLObjectElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSlotElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement}
     *
     * JS Static Method: In JavaScript, static methods are defined in a class but do not require an instance of the class to be called.
     * Instead, they are called directly on the class itself.
     *
     * 'static' keyword is used to define a static function.
     *
     *
     */
    static createRootElement(tag, cssClasses = "", attributes = {}) {
        // Create a new element
        const createTagElement = document.createElement(tag); // JS function to create a new HTML tag dynamically.

        // Apply CSS classes if provided
        if (cssClasses) {
            createTagElement.className = cssClasses; // JS function which is usd to dynamically set or get the class list of an element.
        }

        // Set attributes
        for (const key in attributes) { //  JS for..in loop used to iterate over the keys / properties of a given object.
            if (attributes.hasOwnProperty(key)) { // hasOwnProperties(key): used to check if an object has a specific property as its own property.
                createTagElement.setAttribute(key, attributes[key]); // setAttribute(name,value) : Add or update an attribute of an HTML element.
            }
        }
        return createTagElement; // returns newly created element.
    }
}
