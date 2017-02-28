'use strict';
var message = [
	[3],
	[2], //j : column
	[1]
];
var block = [
	[20, 16, 7], //i : row in a j column, block[0][2] = 16
	[10, 2, 3],
	[25, 17, 21]
];

var key = [
	[5, 6, 6],
	[46, 64, 4],
	[35, 65, 5]
];

var xor = function(key, block){
	var i = 0;
	var j = 0;
	var x = [
		[],
		[],
		[]
	];
	while (j < key.length) {
		while (i < block.length) {
			x[i][j] = block[i][j]^key[i][j];
			i++;
		}
		j++;
		i = 0;
	}
return x;
}

var cipherBlock = xor(key, block);

var enc = function(message, block){
	var i = 0;
	var j = 0;
	var x = [
		[],
		[],
		[]
	];
	while (j < message.length) {
		while (i < block.length) {
			x[j][i] = message[j]*block[j][i];
			i++;
		}
		j++;
		i = 0;
	}
console.log(x);
return x;
}

var dec = function(z, block){
	var i = 0;
	var j = 0;
	var x = [
		[],
		[],
		[]
	]
	while (j < z.length) {
		while (i < block.length) {
			x[j] = z[j][i]/block[j][i];
			i++;
		}
		j++;
		i = 0;
	}
return x;
}

var z = enc(message, cipherBlock);
var h = dec(z, cipherBlock);
console.log(h);
