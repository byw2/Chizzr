var numSquares = 6; // number of squares
var colors = []; // array of random colors
var words = []; // array of random English words
var terms = {
	'one-time use': '一次性',
	product: '产品',
	hotel: '饭店',
	annoying: '讨厌',
	quality: '质量',
	'poor/not up to standard': '差',
	'not necessarily': '不见得',
	pair: '双',
	bamboo: '竹子',
	black: '黑',
	sticky: '黏',
	'waiter/waitress': '服务员',
	'to switch': '换',
	'to break': '断',
	'not as good as': '不如',
	'large in quantity': '大量',
	'to use': '使用',
	'to improve': '进步',
	'even though': '尽管',
	'as of now': '目前',
	direction: '方向',
	population: '人口',
	'natural resources': '资源',
	'to recycle': '回收',
	'to repeat': '重复',
	'to discard': '丢',
	'to pollute': '污染',
	environment: '环境',
	all: '全',
	'hundred million': '亿',
	'to throw away': '扔',
	advantage: '好处',
	disadvantage: '坏处',
	'do you mean to say...': '难道',
	economy: '经济',
	conditions: '条件',
	cause: '造成',
	world: '世界',
	country: '国家',
	'paper cup': '纸杯',
	'paper towel': '纸巾',
	'even/so much so that': '甚至于',
	underwear: '内裤',
	'raw material': '原料',
	wood: '树木',
	protect: '保护',
	forest: '森林',
	'to advocate': '提倡',
	plastic: '塑料',
	persuade: '劝',
	bag: '袋子',
	advertisement: '广告',
	trash: '垃圾',
	'to mix': '混',
	'to classify': '分类',
	'to rely on': '靠',
	'to pick up': '捡',
	'to make a living by': '靠...为生',
	'in reality': '实际上',
	'to imagine': '想象',
	'scenic spot': '风景区',
	can: '易拉罐儿',
	'bottle water': '矿泉水',
	bottle: '瓶子',
	'to thank/gratitude': '感谢',
	'next generation': '下一代'
};
// get all the elements
// engDisplay new word button mode button squares message
var pickedColor;
var pickedWord;
var engDisplay = document.getElementById('engDisplay');
var messageDisplay = document.getElementById('message');
var resetButton = document.querySelector('#reset');
var squares = document.querySelectorAll('.square');
var modeButtons = document.querySelectorAll('.mode');
var h1 = document.querySelector('h1');

init();

function init() {
	setupModeButtons(); // setup mode buttons
	setupSquares(); // sets up square colors
	reset(); // generate random colors
}

// sets up buttons and determines how many squares to show
function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function() {
			// removes selected class from both
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			// how many squares do we show
			this.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6);
			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener('click', function() {
			var clickedColor = this.style.backgroundColor;
			if (this.textContent === terms[pickedWord]) {
				messageDisplay.textContent = 'Correct!';
				changeColorsAndText(clickedColor, this.textContent);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = 'Play again?';
			} else {
				messageDisplay.textContent = 'Try again.';
				this.style.backgroundColor = '#232323';
				this.textContent = '';
			}
		});
	}
}

function reset() {
	// generate random colors
	colors = generateRandomColors(numSquares);
	// generate random words
	words = generateRandomWords(numSquares);
	// pick a random color
	pickedColor = pickColor();
	// pick a random word
	pickedWord = pickWord();
	engDisplay.textContent = pickedWord; // will implement later using Python
	resetButton.textContent = 'New Word';
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i] && words[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
			squares[i].textContent = terms[words[i]];
		} else {
			squares[i].style.display = 'none';
		}
	}

	h1.style.backgroundColor = 'steelblue';

	messageDisplay.textContent = '';
}

resetButton.addEventListener('click', function() {
	reset();
});

function changeColorsAndText(color, text) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
		squares[i].textContent = text;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function pickWord() {
	var random = Math.floor(Math.random() * words.length);
	return words[random];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function generateRandomWords(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		r = randomWord();
		while (arr.includes(r)) {
			r = randomWord();
		}
		arr.push(r);
	}
	return arr;
}

function randomColor() {
	// pick a "red" from 0-255
	var r = Math.floor(Math.random() * 180);
	// pick a "green" from 0-255
	var g = Math.floor(Math.random() * 180);
	// pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 180);
	// spaces are CRUCIAL
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function randomWord() {
	var keys = Object.keys(terms);
	return keys[Math.floor(keys.length * Math.random())];
}
