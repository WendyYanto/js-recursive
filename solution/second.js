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
  if (x < 0 || y < 0 || x >= 10 || y >= 4) {
    return
  }
  if (canvas[y][x] == initialColor) {
    const word = canvas[y]
    canvas[y] = word.substring(0, x) + finalColor + word.substring(x + 1)
    changeColor(x + 1, y, initialColor, finalColor)
    changeColor(x - 1, y, initialColor, finalColor)
    changeColor(x, y + 1, initialColor, finalColor)
    changeColor(x, y - 1, initialColor, finalColor)
  }
}

// changeColor(0, 0, "0", "*")
canvas.forEach(word => console.log(word))