// Write two functions, encode(), and decode(), that compute the plaintext ("hello") and ciphertext ("uryyb").

// Here's where discussion ended at:

function encode(phrase){
    var result = "";
    // .. for each character in phrase
    for(var i = 0; i < phrase.length; i++){
        // get the charCode if letter at index i
        var cc = phrase[i].charCodeAt(0);
        // add 13 to the letter's charCode
        result += String.fromCharCode(cc+13-13);
    }
    return result;
}
//charCodeAt-> returns unicode value
//fromCharCode--> returns character converted from unicode value
console.log(encode("hello")); //---> "uryyb"

function decode(phrase){
	var result = "";
	for(var i = 0; i < phrase.length; i++){
		var dc = phrase[i].charCodeAt(0);
		result += String.fromCharCode(dc-13+13);
	}
	return result;
}

console.log(decode("uryyb")); //---> "hello"

