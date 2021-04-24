// Hej Helena!

/* This is my answer to the question:
 Parentheses are needed because multiplication and subtraction both have the precedence number 16. With addition instead of multiplication, for example, this wouldn't be a problem, because addition has a lower precedence number than subtraction. With the same precedence number, JS wouldn't know which to execute first and I might get the "correct" answer. */

/* Answer the question why JavaScript needs the parentheses in thiscase? You can put your answer as plain text when you hand in theassignment.

TEST DATA
Case1
triangleOne: base = 10cm, height = 13cm
triangleTwo: base = 16,5cm, height = 20,3cm 

Case2
triangleThree: base = 16,5cm, height = 20,3cm
triangleFour: base = 20,3cm, height = 16,5cm

Case3
triangleFive: base = 7,8cm, height = 5,6cm
triangleSix: base = 9,3cm, height = 12,4cm    */

// CASE ONE
const triangleOneArea = (10 * 13) / 2;
const triangleTwoArea = (16.5 * 20.3) / 2;

if (triangleOneArea > triangleTwoArea) {
  console.log(
    `Triangle one has an area of ${triangleOneArea} cm2 and triangle two has an area of ${triangleTwoArea} cm2. This makes triangle one ${
      triangleOneArea - triangleTwoArea
    } cm2 bigger than triangle two`
  );
} else if (triangleOneArea === triangleTwoArea) {
  console.log(
    `Triangle one has an area of ${triangleOneArea} cm2 and triangle two has an area of ${triangleTwoArea} cm2. This makes no triangle bigger than the other.`
  );
} else {
  console.log(
    `Triangle two has an area of ${triangleTwoArea} cm2 and triangle one has an area of ${triangleOneArea} cm2. This makes triangle two ${
      triangleTwoArea - triangleOneArea
    } cm2 bigger than triangle one`
  );
}

// CASE TWO
const triangleThreeArea = triangleTwoArea;
const triangleFourArea = triangleTwoArea;

if (triangleThreeArea > triangleFourArea) {
  console.log(
    `Triangle three has an area of ${triangleThreeArea} cm2 and triangle four has an area of ${triangleFourArea} cm2. This makes triangle three ${
      triangleThreeArea - triangleFourArea
    } cm2 bigger than triangle four`
  );
} else if (triangleThreeArea === triangleFourArea) {
  console.log(
    `Triangle three has an area of ${triangleThreeArea} cm2 and triangle four has an area of ${triangleFourArea} cm2. This makes no triangle bigger than the other.`
  );
} else {
  console.log(
    `Triangle two has an area of ${triangleFourArea} cm2 and triangle three has an area of ${triangleThreeArea} cm2. This makes triangle four ${
      triangleFourArea - triangleThreeArea
    } cm2 bigger than triangle three`
  );
}

/*
triangleFive: base = 7,8cm, height = 5,6cm
triangleSix: base = 9,3cm, height = 12,4cm  */

/* switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
} */

const triangleFiveArea = (7.8 * 5.6) / 2;
const triangleSixArea = ((9.3 * 12.4) / 2).toFixed(2);

const triangleFiveAreaBigger = triangleFiveArea > triangleSixArea;

if (triangleFiveAreaBigger) {
  console.log(
    `The size of triangle five is ${triangleFiveArea} cm2 while the size of triangle six is ${triangleSixArea} cm2. Triangle five is thereby the larger triangle.`
  );
} else if (triangleFiveArea < triangleSixArea) {
  console.log(
    `The size of triangle six is ${triangleSixArea} cm2 while the size of triangle five is ${triangleFiveArea}. Triangle six is thereby the larger triangle.`
  );
} else {
  console.log(
    `Both triangles have an area of ${triangleFiveArea} cm2. The triangles are equally big.`
  );
}
