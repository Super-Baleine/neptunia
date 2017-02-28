'use strict';

var message = [
	[3],
	[2], //j : column
	[1]
];
var block = [
	[20, 16, 7], //i : row in a j column
	[10, 2, 3],
	[25, 17, 21]
];
// console.log(block[0][1]); --> 16
var x = [
	[],
	[],
	[]
];

var i = 0;
var j = 0;

while (j < message.length) {
	while (i < block.length) {
		x[j][i] = message[j]*block[j][i];
		i++;
		console.log(x);
	}
	j++;
	i = 0;
}
