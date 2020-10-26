var numSquares = 6; // number of squares
var colors = []; // array of random colors
var words = []; // array of random English words
var terms = {
	Zhejiang: '浙江',
	'to kill': '杀',
	'incident, event': '事件',
	'all circles, all walks of life': '各界',
	'introspection, self-examination': '反思',
	'unable, incapable': '无法',
	'endure, bear': '忍受',
	'heavy, weighty': '沉重',
	"one's own (children, parents)": '亲生',
	tragedy: '悲剧',
	province: '省',
	'profound, deep': '深刻',
	'Jinhua City': '金华市',
	'to be born': '出生',
	'ordinary, common': '普通',
	'labor worker': '工人',
	food: '食品',
	'workers and staff members': '职工',
	'long-term; over a long period of time': '长期',
	'place other than where one is; other places': '外地',
	'train station': '火车站',
	"since one's childhood": '从小到大',
	'basically, on the whole': '基本上',
	'look after, care for': '照顾',
	'grow; grow up': '长大',
	knit: '织',
	sweater: '毛衣',
	'support (financially); supply': '供',
	'attend school; read; study': '读书',
	'middle school, junior high school': '初中',
	'go up to a higher level in school': '升',
	'enter a school by passing the entrance exam': '考进',
	'honors class; advanced class; tracked class for bright students': '重点班',
	'first half (of a game, concert, period, etc.)': '上半',
	'rank as; be ranked as': '排名',
	'count from the end; count backwards': '倒数',
	'second half': '下半',
	'to be overjoyed (at an unexpected gain or good news)': '喜出望外',
	midterm: '其中',
	'the end of the semester': '期末',
	'to bury': '埋下',
	seed: '种子',
	'end of the month': '月底',
	'attend (meeting, discussion, etc.)': '参加',
	'have learned of': '得知',
	ferociously: '狠狠',
	'to hit, to beat': '打',
	'measure word for meals, occurrences, etc.': '顿',
	'to kick': '踢',
	soccer: '足球',
	'to break': '打断',
	'heavy pressure': '重压',
	'under...': '之下',
	'to feel': '感到',
	'subject subject to discipline; control (a child)': '管',
	'strict, stern': '严',
	'realize, achieve, bring about': '实现',
	'put forward, pose, raise': '提出',
	'objective, target': '目标',
	'profoundly; deeply': '深深',
	'feel wronged': '委屈',
	'repressed; depressed': '压抑',
	'to remind': '提醒',
	'once again; for the second time': '再次',
	conflict: '冲突',
	'hopelessness; despair; give up all hope': '绝望',
	'gate; doorway; entrance; door': '门口儿',
	'meausre word for things with handles or things to take hold of': '把',
	'a hammer with a wood shaft': '木柄榔头',
	'to; towards': '朝',
	'back of head': '后脑',
	smash: '砸',
	'while still alive': '活活',
	'to shock; to astonish': '震惊',
	'to attend school': '就读',
	'report; make known': '反映',
	'ordinarily; normally': '平时',
	'always, all the time': '一向',
	'hardworking, painstaking': '刻苦',
	frugal: '节俭',
	'(of a student) of good character and scholarship': '品学兼优',
	'character; nature; disposition': '性格',
	'gentle and quiet': '文静',
	'学习好，身体好，思想好的学生 - students who are good in studying, sports, and thinking': '三好学生',
	'be admitted to the Communist Youth League': '入团',
	'collective, group': '集体',
	'enthusiastic, zealous': '热心',
	'willing to help others': '乐于助人',
	do: '干',
	'violent conduct; atrocities': '暴行',
	local: '当地',
	'related; concerned; relevant': '有关',
	expert: '专家',
	"to hope that one's son will become a dragon; to hope that one's son will become successful": '望子成龙',
	'eager, anxious (should be preceded by verb such as 成功 or 结婚)': '--心切',
	children: '子女',
	fragile: '脆弱',
	'to lack': '缺乏',
	legality: '法制',
	'to lead to, give rise to': '导致',
	'measure word for dramatic pieces': '出',
	contradiction: '矛盾',
	'be well trained': '训练有素',
	'remove the corpse and erase all trace': '移尸灭迹',
	'a brief note': '字条',
	'to deceive, cheat, dupe': '欺骗',
	'to see a doctor': '看病',
	'surprisingly; unexpectedly': '居然',
	'(do something) as usual': '照常',
	'extremely; very': '十分',
	'only; alone': '仅仅',
	"school work; one's study": '学业',
	'and; also; besides; moreover': '并且',
	'to be indifferent': '淡薄',
	'bear; sustain': '承受',
	'hope; expectation': '期望',
	'perfect; desirable; ideal': '理想',
	'be bound to; inevitable': '必然',
	'homicide; murder': '凶杀',
	pornography: '色情',
	'reading material': '读物',
	'spread far and wide; spread unchecked': '泛滥',
	'harmful; unwholesome': '不良',
	'enhance; reinforce': '加强',
	'moral integrity': '人格'
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
var pre = document.querySelector('#pre');
var post = document.querySelector('#post');
var eDisplay;

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
			// removes class from both
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
				pre.textContent = eDisplay + ' is';
				engDisplay.textContent = terms[pickedWord];
				post.textContent = 'in Chinese';
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
	eDisplay = engDisplay.textContent;
	resetButton.textContent = 'New Word';
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i] && words[i]) {
			squares[i].style.display = 'inline-block !important';
			squares[i].style.backgroundColor = colors[i];
			squares[i].textContent = terms[words[i]];
		} else {
			squares[i].style.display = 'none';
		}
	}

	h1.style.backgroundColor = 'steelblue';
	pre.textContent = 'What is';
	post.textContent = 'in Chinese?';
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
