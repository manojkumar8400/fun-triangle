const sides = document.querySelectorAll("input");
const calculate = document.querySelector("#calculate-btn");
const output= document.querySelector("#output")

calculate.addEventListener("click",calculateArea);



function calculateArea(){
    const area = 
    sumOfSides(Number(sides[0].value),
    Number(sides[1].value));
    var areaOfTriangle = ((1/2)*area)
    
    output.innerText="The area of the triangle is "+ String(areaOfTriangle**(0.5))
}

function sumOfSides(){
    return Number(sides[0].value) * Number(sides[1].value)
}
