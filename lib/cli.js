const inquirer = require("inquirer"); // require inquirer for CLI
const SVG = require("./svg.js"); // import SVG class
const { Circle, Triangle, Square } = require('./shapes.js'); // Import the Circle, Square, and Triangle classes from svg.js
const { writeFile } = require("fs/promises");

class CLI { // define command line interface
    run() { // function to run prompt
        return inquirer
        .prompt([ // questions to generate logo
            {
                name: "txt",
                type: "input",
                message: "Enter 1-3 characters to be used for your logo.",
                validate: (txt) => txt.length < 4 || // control length of answer with validate
                "Error: Character Limit of 3.",
            },
            {
                name: "txtHue",
                type: "input",
                message: "Enter a color for the characters in your logo (simple text or hexadecimal numbers accepted).",
            },
            {
                name: "shape",
                type: "list",
                message: "Choose a shape for your logo.",
                choices: [ "circle", "triangle", "square"],
            },
            {
                name: "shapeHue",
                type: "input",
                message: "Enter a color for the characters in your logo (simple text or hexadecimal numbers accepted).",
            }
        ])
        .then(({ txt, txtHue, shape, shapeHue }) => // callback function taking the user responses
        {
            let logoShape; // new variable called logoShape
            switch(shape) // switch statement for shape in the case of...
            {
                case "square":
                    logoShape = new Square();
                    break;
                
                case "triangle":
                    logoShape = new Triangle();
                    break;
                
                case "circle":
                    logoShape = new Circle();
                    break;

                default: // default if no selection
                    logoShape = new Square();
                    break;
            }
            logoShape.hueTouch(shapeHue); // 
        
            const logo = new SVG(); // new SVG object
            logo.txtTouch(txt, txtHue); // send txt and attributes to SVG function
            logo.shapeTouch(logoShape); // send shape and attributes to SVG function
            return writeFile("Logo.svg", logo.createSVG()); // write file using fs and run createSVG function from svg file
        })
        .then(() => {
            console.info("Logo Successfully Created!")
        })
        .catch((error) => 
        {
            console.log(error);
            console.log("Whoops, something went wrong!");
        })
    }
}

module.exports = CLI; // export CLI class to other modules