export class CheckImageExists {
    static check(image) {
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