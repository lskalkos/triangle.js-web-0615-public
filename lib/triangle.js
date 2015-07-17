'use strict';


function TriangleError() {
    this.name = 'TriangleError';
}

TriangleError.prototype = Object.create(Error.prototype);
TriangleError.prototype.constructor = TriangleError;

function Triangle(side1, side2, side3){
  // add your solution here!

    var side1 = side1;
    var side2 = side2;
    var side3 = side3;


    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
        throw new TriangleError();
    }

    this.kind = function() {
        if (side1 === side2 && side2 === side3) {
            return 'equilateral';
        } else if (side1 === side2 || side2 === side3 || side1 === side3) {
            return 'isosceles';
        } else if (side1 != side2 && side2 != side3) {
            return 'scalene';
        }
    }
};


