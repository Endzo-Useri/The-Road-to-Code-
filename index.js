const grid = document.querySelector(".grid")
const startBtn = document.getElementById("start")
const score = document.getElementById("score")
let squares = []
let currentSnake = [2, 1, 0]

function createGrid() {
	for (let i = 0; i < 100; i++) {
		const square = document.createElement("div")
		square.classList.add("square")
		grid.appendChild(square)
		squares.push(square)
	}
}
createGrid()

currentSnake.forEach(index => squares[index].classList.add("snake"))

function move() {
	const tail = currentSnake.pop()
	squares[tail].classList.remove("snake")
}
move()