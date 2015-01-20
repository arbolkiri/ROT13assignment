// Write two functions, encode(), and decode(), that compute the plaintext ("hello") and ciphertext ("uryyb").

// Here's where discussion ended at:

function encode(phrase){
    var result = "";
    // .. for each character in phrase
    for(var i = 0; i < phrase.length; i++){
        // get the charCode if letter at index i
        var cc = phrase[i].charCodeAt(0);
        // add 13 to the letter's charCode
        cc+=13;
         if (cc > 122){
    // ... get the difference (cc-122), and add it to 97
        result += String.fromCharCode((cc-123) + 97);
        
        }else{
        result += String.fromCharCode(cc);  
        }
    }
         return result;
}

console.log(encode('abcdefhijklmnopqrstuvwxyz'))

console.log(encode("hello"));// ---> "urryb"
//charCodeAt-> returns unicode value
//fromCharCode--> returns character converted from unicode value
// console.assert(encode("hello") === "uryyb"); //---> "uryyb"

function decode(phrase){
	var result = "";
	for(var i = 0; i < phrase.length; i++){
		var dc = phrase[i].charCodeAt(0);
        dc -= 13
    
        if (dc < 97){
        result += String.fromCharCode((dc+123)-97);    
      } else {
        result += String.fromCharCode(dc);
      }
    }
        return result;
}
console.log(decode("uryyb")); //---> "hello"
console.log(decode('nopqrsuvwxyzabcdefghijklm'))

/**
---------------------------------
**/

function encode2(phrase,rotation){
    var res = "";
    bb += 5
    cc += 13 
    for(var i = 0, len = encode2.length; i < len; i++){
        var cc = len[i][charCodeAt(0)];
        var bb = len[i][charCodeAt(0)]
        if (cc > 123){
          res += String.fromCharCode((cc-123)+97);
    }else{
        res += String.fromCharCode(cc, bb);
    }

    for(var i = 0; i < rotation.length; i++){
        var bb = rotation[i].charCodeAt(0);  // var cc = phrase[i].charCodeAt(0);
        bb += 13
        
        if(bb > 123){
        res += String.fromCharCode((bb-123)+97);
    }else{
        res += String.fromCharCode(bb);
    }
  }
    return res;

}

console.log(encode2("hello")); //---> "uryyb"

// function decode2(phrase, rotation){



// console.log(decode("uryyb")); //---> "hello"

