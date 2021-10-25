let re;
re = /hello/;
// re = /hello/i; it will be a match in this case

// Metacharacter symbols
re = /^h/i; // must start with
re = /d$/i; // must ends with
re = /World$/i; // must ends with
re = /^hello$/i; // it can only be hello 
re = /h.llo/i; // it will pass any of the char from alphabet instead of dot
re = /h*llo/i; // it mathces any character 0 or more times it means starts with h and ends with llo
re = /gre?a?y/i; // it means gray or grey works
re = /gre?a?y\?/i; // at the end of the string \ do the job for escaping char
// in this way we can search the special word in a sentence which ends with question mark


// brackets [] - character sets
re = /gr[ae]y/i;  // must be an a or e that means works for gray or grey
re = /[GF]ray/;   // it means Gray or Fray
re = /[^GF]ray/; // it will work anything except Gray or Fray 
re = /[A-Z]ray/; // match any uppercase letter Aray... Kray....Zray
re = /[a-z]ray/; // works for aray....kray....zray
re = /[A-Za-z]ray/; // it is the union of two above which is Aray aray .... Kray kray .... Zray zray
re = /[0-9]ray/; // match any digit  0ray .... 5ray.... 9ray
re = /[0-9][0-9]ray/; // match any digit  0ray .... 5ray.... 9ray 10ray... 50ray...99ray

// braces {} - quantifiers

re = /Hel{2}o/i; // it means Hello
re = /Hel{2,4}o/i; // it means Hello or Helllo or Hellllo  2,3,4 l times in word
re = /Hel{2,}o/i; // at least m times in this case 2 times

// parantheses () - grouping

re = /[0-9]x{3}/; // it returns (number)xxx in this case 0xxx ... 1xxx ... 5xxx ... 9xxx
re = /([0-9]x){3}/; //  0x0x0x ... 5x5x5x ... 9x9x9x   if there is more than 3 (number)x patterns it will work also
re = /^([0-9]x){3}$/; // now looks for 0x0x0x ... 5x5x5x ... 9x9x9x

// shorthand character classes

re = /\w/; // word character - alphanumeric or _  for example a3_
re = /\w+/; // + makes it ones or more character
re = /\W/; // Non word character like !
re = /\d/; // match any digit
re = /\d+/; // it will match ones or more digits
re = /\D/; // non digits
re = /\s/; // matches whitespace
re = /\S/; // matches non whitespace
re = /Hell\b/i; // not gonna exists in Hello it will look exactly Hell

// assertions
re = /e(?=l)/; // match e only if followed by l
re = /e(?!l)/; // match e only if NOT followed by l



// string to match
const str = 'Hello';


// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} does not matches ${re.source}`);
    }
}

reTest(re, str);

