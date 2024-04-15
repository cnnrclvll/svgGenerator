class Shape { // defining a Shape class object
    constructor ()  // constructor function
    {
        this.hue = ""; // define hue as empty string
    }
    hueTouch(hue) // function taking in hue
    {
        this.hue = hue; // set hue value
    }
}

class Square extends Shape // extend class with Square
{
    createShape() // function to create an svg square
    {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.hue}" />`;
    }
}

class Triangle extends Shape // extend class with Triangle
{
    createShape() // function to create an svg triangle
    {
        return `<polygon points="100,20 40,180 160,180" fill="${this.hue}" />`;
    }
}

class Circle extends Shape // extend class with Circle
{
    createShape() // function to create an svg circle
    {
        return `<circle cx="150" cy="100" r=""100" fill="${this.hue}"/>`;
    }
}

module.exports = { Square, Triangle, Circle };