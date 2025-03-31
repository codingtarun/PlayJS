export class CheckImageExists {
    /**
     *
     * @param image
     * @returns {Promise<unknown>}
     *
     * A static class created to check if images exists.
     */
    static checkImage(image) {
        /**
         *
         * Get more info about this promise function
         *
         */
        return new Promise((resolve) => {
            const img = new Image();
            const imagePath = `./assets/images/${image}`;
            const fallbackPath = "./assets/images/ubuntu_app.png";
            img.src = imagePath;
            img.onload = () => resolve(imagePath);  // Return an image path if found
            img.onerror = () => resolve(fallbackPath); // Return fallback if not found
        });
    }
}