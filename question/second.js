const canvas = [
  "0000*00000",
  "0000***000",
  "**00******",
  "*****00000"
]

// 0 -> color red
// * -> color green
// X -> color blue

function changeColor(x, y, initialColor, finalColor) {
  // Your code here
}

canvas.forEach(word => console.log(word))

// Test Case 1

// Input: changeColor(4, 0, "*", "X")
// Output: 

// 0000X00000
// 0000XXX000
// XX00XXXXXX
// XXXXX00000

// Test Case 2

// Input: changeColor(0, 0, "0", "X")
// Output: 

// XXXX*00000
// XXXX***000
// **XX******
// *****00000

// Test Case 3

// Input: changeColor(0, 0, "0", "*")
// Output:

// *****00000
// *******000
// **********
// *****00000