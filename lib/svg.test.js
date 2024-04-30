const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");

describe("SVG",() =>
{
    it("should be a 300 x 200 svg", () =>
    {
        const expectation = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"></svg>`
        const testSVG = new SVG();
        expect(testSVG.createSVG()).toEqual(expectation);
    });
    it("should include centered text", () =>
    {
        const expectation = 
            `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><text x="150" y="135" font-size="70" text-anchor="middle" fill="cyan">Test</text></svg>`
        const testSVG = new SVG();
        testSVG.txtTouch("Test", "cyan");
        expect(testSVG.createSVG()).toEqual(expectation);
    });
    it("should allow color choice by hexidecimal number", () =>
    {
        const expectation = 
            `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><text x="150" y="135" font-size="70" text-anchor="middle" fill="#FF00FF">Test</text></svg>`
        const testSVG = new SVG();
        testSVG.txtTouch("Test", "#FF00FF");
        expect(testSVG.createSVG()).toEqual(expectation);
    });
    it("should include smaller text if shape choice is triangle", () =>
    {
        const expectation = 
            `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="150,15 15,185 285,185" fill="magenta" /><text x="150" y="135" font-size="60" text-anchor="middle" fill="cyan">Test</text></svg>`;
    
        const testTriangle = new Triangle();
        testTriangle.hueTouch("magenta");
        const testSVG = new SVG();
        testSVG.shapeTouch(testTriangle);
        testSVG.txtTouch("Test", "cyan", testTriangle);
        expect(testSVG.createSVG()).toEqual(expectation);
    });
    it("should include a shape", () =>
    {
        const expectation = 
            `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="150" cy="115" r="80" fill="magenta"/><text x="150" y="135" font-size="70" text-anchor="middle" fill="cyan">Test</text></svg>`;
    
        const testShape = new Circle();
        testShape.hueTouch("magenta");
        const testSVG = new SVG();
        testSVG.shapeTouch(testShape);
        testSVG.txtTouch("Test", "cyan");
        expect(testSVG.createSVG()).toEqual(expectation);
    });
})