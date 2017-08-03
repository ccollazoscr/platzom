'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var transaltion = str;

	//Si la palabra termina en ar se le quitan esos dos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		//Slice permite cortar caracteres
		transaltion = str.slice(0, -2);
	}

	//Si la palabra inicia con Z se le adiciona pe al final
	if (str.toLowerCase().startsWith('z')) {
		transaltion += 'pe';
	}

	//Si la palabra traducida tiene diez o más letras se debe partir a la mitad y unir con un - del medio
	var length = transaltion.length;
	if (transaltion.length >= 10) {
		var firstHalf = transaltion.slice(0, Math.round(length / 2));
		var secondHalf = transaltion.slice(Math.round(length / 2));
		transaltion = firstHalf + '-' + secondHalf;
	}

	//Si la palabra original es un palindromo ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas
	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	function minMay(str) {
		var length = str.length;
		var transaltion = '';
		var capitalize = true;

		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			transaltion += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}

		return transaltion;
	}

	if (str == reverse(str)) {
		return minMay(str);
	}

	return transaltion;
}