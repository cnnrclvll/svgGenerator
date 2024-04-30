const { Triangle } = require("./shapes");

class SVG // new class called SVG
{
    constructor() // constructor function to build SVG
    {
        this.txtContent = ""; // empty string for logo text
        this.shapeContent =""; // empty string for logo shape
    }

    createSVG() // function to return svg text
    {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeContent}${this.txtContent}</svg>` // svg file as written text
    }

    shapeTouch(logoShape) // function taking in shape from CLI
    {
        this.shapeContent = logoShape.createShape(); // calling function from Shape class extension
    }

    txtTouch(txt, txtHue, logoShape) // function taking in txtHue and txt from CLI
    {
        if (logoShape instanceof Triangle) // if else to use a smaller text size when shape type is triangle. allows text to fit within triangle while remaining centered
        {
            this.txtContent = `<text x="150" y="135" font-size="60" text-anchor="middle" fill="${txtHue}">${txt}</text>`; // text content with attributes
        } 
        else
        {
        this.txtContent = `<text x="150" y="135" font-size="70" text-anchor="middle" fill="${txtHue}">${txt}</text>`; // text content with attributes
        }
    }


}

module.exports = SVG; // exporting SVG for other modules to reference SVG class