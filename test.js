let text="Sanad Rahahleh"
console.log(text.length)

let text2="    dskjsbdkjbshdb    "
console.log(text2.trim());
console.log(text2.trimStart());
console.log(text2.trimEnd());


let num = "5";
console.log(num.padStart(4, "0"));

let n="Rahahleh"
console.log(n.padStart(14,"Sanad "));

let n2="Sanad"
console.log(n2.padEnd(14," Rahahleh"));

let n3="Sanad Rahahleh"
console.log(n3.charAt(1));


console.log(n3.charCodeAt(0));

let n4="S,A,N,A,D"
console.log(n4.split());

console.log(n3.slice(0,5));


let n5 = "JavaScript";
console.log(text.substring(4,10));


let text3 = "Hello World";

console.log(text3.replace("World","JS"));
console.log(text3.charAt(1));


let text4 = "javascript";

console.log(text4.toUpperCase());

let text5 = "HELLO";

console.log(text5.toLowerCase());


let a = "Hello";
let b = "World";

console.log(a.concat(" ", b));

console.log(a.rev);


let text6="coding is fun";
console.log(text6.slice(0,6));

console.log(text6.includes("coding"));



let words = ["hello", "world"];

console.log(words.join("-"));



let text7 = "hello";

let reversed = text7.split("").reverse().join("");

console.log(reversed);



let text8="elepheeeeeant"
let count=0;

for(let i=0;i<text8.length;i++)
{
if('e'===text8[i])
    count++;
}
console.log(count);




let text9 = "racecar";

let reversed2 = text.split("").reverse().join("");

console.log(text === reversed2);



let text10 = "hello world";

let words2 = text10.split(" ");
let result4 = "";

for (let i = 0; i < words2.length; i++) {
  let word5 = words2[i];
  let capitalized = word5[0].toUpperCase() + word5.slice(1);

  result4 += capitalized + " ";
}

console.log(result4.trim());


let text11 = "JavaScript is fun";

console.log(text11.startsWith("Java"));
console.log(text11.endsWith("Java"));



let text12 = "ha";

console.log(text12.repeat(3));


let text13 = "hello world";

let result5 = text13.split(" ").reverse().join(" ");

console.log(result5);




let email="Sanadrahahleh204@gmail.com"

if(email.includes("@gmail.com"))
    console.log(true);
else
    console.log(false);
    

let text14 = "hello";

let result6 = text14.split("").sort().join("");

console.log(result6);
    

let price2 = 12.2922;
console.log(price2.toFixed(2));



let text15 = "aabbccdd";

let arr = text15.split("");

let result = [];

for (let i = 0; i < arr.length; i++) {
  if (!result.includes(arr[i])) {
    result.push(arr[i]);
  }
}

console.log(result.join(""));



let word11 = "listen";
let word22 = "silent";

let result11 =
  word11.split("").sort().join("") ===
  word22.split("").sort().join("");

console.log(result11);



let text22 = "The quick brown fox";

let result12 = text22.split(" ").reverse().join(" ");

console.log(result12);





let text16 = "Web development is fascinating";

let words16 = text16.split(" ");

let longest = "";

for (let word of words16) {
  if (word.length > longest.length) {
    longest = word;
  }
}

console.log(longest);





let text17 = "A man, a plan, a canal, Panama!";

let clean = text17.toLowerCase().replace(/[^a-z0-9]/g, "");

let reversed12 = clean.split("").reverse().join("");

console.log(clean === reversed12);




let text18 = "mississippi";

let result16 = {};

for (let char of text18) {
  if (result16[char]) {
    result16[char]++;
  } else {
    result16[char] = 1;
  }
}

console.log(result16);





let text19 = "Hello World";

let result18 = text19
  .replace(/a/gi, "1")
  .replace(/e/gi, "2")
  .replace(/i/gi, "3")
  .replace(/o/gi, "4")
  .replace(/u/gi, "5");

console.log(result18);