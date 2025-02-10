export class Application{
    // Defining class properties
    title;
    company;
    description;
    status;
    installed;
    rating;
    image;
    link;
    category;
    constructor(title,company,link,description,status,installed,rating,image,category) {
        // Constructor to set the properties values based on value passed when this class is initialized.
        this.title = title;
        this.company = company;
        this.link = link;
        this.description = description;
        this.status = status;
        this.installed = installed;
        this.rating = rating;
        this.image = image;
        this.category = category;
    }
}