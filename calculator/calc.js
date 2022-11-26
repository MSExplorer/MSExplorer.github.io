let expression = prompt("请输入算式", "a + b =");
if (expression[expression.length - 1] != '=') alert("无效输入");
let num = [];
let nstack = [];
let operator = [];
let ostack = [];
let order = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '^': 3,
    '(': 0,
    ')': 0,
    '=': -1,
}
let x = 0, a, b;
let flag = false;
// for (let i = 0; i < expression.length; ++i) alert(expression[i]);
for (let i = 0; i < expression.length; ++i) {
    let ch = expression[i];
    if (ch >= '0' && ch <= '9') {
        x = x * 10 + (Number)(ch);
        flag = true;
    } else {
        if (ch === ' ') continue;
		else if (ch == '(') {
			operator.push(ch);
			continue;
		}
		if (!(ch in order)) alert("无效输入");
        if (flag) {
            num.push(x);
            x = 0;
			flag = false;
        }
		for (; order[ch] <= order[operator.at(-1)] && operator.length; ) {
			// if (ch === '(') break;
			op = operator.pop();
			if (ch === ')' && op === '(') break;
			switch (op) {
				case '+':
					num.push(num.pop() + num.pop());
					break;
				case '-':
					num.push(-1 * (num.pop() - num.pop()));
					break;
				case '*':
					num.push(num.pop() * num.pop());
					break;
				case '/':
					b = num.pop();
					a = num.pop();
					num.push(a / b);
					break;
				case '^':
					b = num.pop();
					a = num.pop();
					num.push(a ** b);
					break;
				default:
					break;
			}
		}
        if (ch != ')') operator.push(ch);
        // alert(num);
    }
}
alert(num);