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
        return `<rect x="57.5" y="32.5" width="185" height="185" fill="${this.hue}" />`;
    }
}

class Triangle extends Shape // extend class with Triangle
{
    createShape() // function to create an svg triangle
    {
        return `<polygon points="150,15 15,185 285,185" fill="${this.hue}" />`;
    }
}

class Circle extends Shape // extend class with Circle
{
    createShape() // function to create an svg circle
    {
        return `<circle cx="150" cy="115" r="80" fill="${this.hue}"/>`;
    }
}

module.exports = { Circle, Triangle, Square };