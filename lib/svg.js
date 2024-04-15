class SVG // new class called SVG
{
    constructor() // constructor function to build SVG
    {
        this.txtContent = ""; // empty string for logo text
        this.shapeContent =""; // empty string for logo shape
    }

    createSVG() // function to return svg text
    {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"></svg>` // svg file as written text
    }

    txtTouch(txtHue, txt) // function taking in txtHue and txt from CLI
    {
        this.txtContent = `<text x="60%" y="60%" dominant-baseline="middle" text-anchor="middle" fill="${txtHue}">${txt}</text>`; // text content with attributes
    }

    shapeTouch(shape) // function taking in shape from CLI
    {
        this.shapeContent = shape.createShape(); // calling function from Shape class extension
    }
}

module.exports = SVG; // exporting SVG for other modules to reference SVG class