//question 1
let n=100;
function divBy15(num){
    while(num>=15){
        num=num-15;
    }
    return num;
}
function divBy5(num){
    while (num >= 5) {
        num = num - 5;
    }
    return num;
}
function divBy3(num){
    while (num >= 3) {
        num = num - 3;
    }
    return num;
}
for(let i=1;i<=n;i++)
{
    if(divBy15(i)==0){
       console.log("FizzBuzz");
    }
    else if(divBy5(i)==0){
        console.log("Buzz");
    }
    else if(divBy3(i)==0){
        console.log("Fizz");
    }
    else{
       console.log(i);
    }
}
/*  output :
        1
        2
        Fizz
        4
        Buzz
        Fizz
        7
        8
        Fizz
        Buzz
        11
        Fizz
        13
        14
        FizzBuzz
        16
        17
        Fizz
        19
        Buzz
        Fizz
        22
        23
        Fizz
        Buzz
        26
        Fizz
        28
        29
        FizzBuzz
        31
        32
        Fizz
        34
        Buzz
        Fizz
        37
        38
        Fizz
        Buzz
        41
        Fizz
        43
        44
        FizzBuzz
        46
        47
        Fizz
        49
        Buzz
        Fizz
        52
        53
        Fizz
        Buzz
        56
        Fizz
        58
        59
        FizzBuzz
        61
        62
        Fizz
        64
        Buzz
        Fizz
        67
        68
        Fizz
        Buzz
        71
        Fizz
        73
        74
        FizzBuzz
        76
        77
        Fizz
        79
        Buzz
        Fizz
        82
        83
        Fizz
        Buzz
        86
        Fizz
        88
        89
        FizzBuzz
        91
        92
        Fizz
        94
        Buzz
        Fizz
        97
        98
        Fizz
        Buzz
*/

//question 2 === palindrome words of given string
let str="Madam is walking on the road at wow street";
var s=str.split(" ");
console.log("palindrome words of given string are : ");
var palindrome_words=[];
for(let i=0;i<s.length;i++){
        var rev = "";
        var word=s[i];
        for (var j = word.length - 1; j >= 0; j--) {
            rev = rev + word[j];
        }
    if (s[i].toLowerCase() == rev.toLowerCase())
        {
            console.log(s[i]);
        }
}
/*
output :
        Madam
        wow
*/