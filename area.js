const sides = document.querySelectorAll("input");
const calculate = document.querySelector("#calculate-btn");
const output= document.querySelector("#output")

calculate.addEventListener("click",calculateArea);



function calculateArea(){
    const area = sumOfSides(Number(sides[0].value),Number(sides[1].value));
    // console.log(area)
    const areaOfTriangle = ((1/2)*area)
    output.innerText="The area of the rectangle is "+ String(areaOfTriangle)
}

function sumOfSides(firstSide,secondSide){
    const area = (sides[0].value) * (sides[1].value)
    return area
}