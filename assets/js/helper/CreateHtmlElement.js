export class CreateHtmlElement{
    static createRootElement(tag, cssClasses = "", attributes = {}) {
        // Create a new element
        const createTagElement = document.createElement(tag);

        // Apply CSS classes if provided
        if (cssClasses) {
            createTagElement.className = cssClasses;
        }

        // Set attributes
        for (const key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                createTagElement.setAttribute(key, attributes[key]);
            }
        }
        return createTagElement;
    }
}
