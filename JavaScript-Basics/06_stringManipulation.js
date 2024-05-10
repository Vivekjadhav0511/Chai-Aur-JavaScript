// ************STRING***************************************************

// Another Way To Declare A String 

let Str = new String("New String")

console.log(Str);

let Name = "vivek "

let repoCount = 50

console.log(Name + repoCount + " value");

console.log(`${Name.toLocaleUpperCase()} And RepoCount Is ${repoCount}`);  // String InterPolation 

let gameName = new String("candy crush")

/* String {'candy crush'}
0
: 
"c"
1
: 
"a"
2
: 
"n"
3
: 
"d"
4
: 
"y"
5
: 
" "
6
: 
"c"
7
: 
"r"
8
: 
"u"
9
: 
"s"
10
: 
"h"
length
: 
11


 */

console.log(gameName.length);

console.log(gameName);


let FullName = "Vivek Manoj Jadhav"

console.log(FullName);

console.log(FullName.toUpperCase());  // VIVEK MANOJ JADHAV  convert all The Charater to UpperCAse 

console.log(FullName.toLocaleUpperCase());  // VIVEK MANOJ JADHAV

console.log(FullName.toLowerCase()); // vivek manoj jadhav Convert All The Character To Lower Case

console.log(FullName.toLocaleLowerCase()); // vivek manoj jadhav

console.log(FullName.length);  // 18 Lenght

let trimExample = "    TrimKaro   "

console.log(trimExample.trim());



console.log(FullName.split("")); // Split The string Into A SubString And  Return INto A Array /* ['V', 'i', 'v', 'e', 'k', ' ', 'M', 'a', 'n', 'o', 'j', ' ', 'J', 'a', 'd', 'h', 'a', 'v'] */ 

// console.log(FullName.replace( , tushar));

console.log(FullName.charAt(5)); // Return The Character presnt At The Given index Value 

console.log(FullName.charCodeAt(6)); // 77 { Assci Value } Returns the Unicode value of the character at the specified location

console.log(FullName.concat(" From Yavatmal")); // Vivek Manoj Jadhav From Yavatmal Append The Given Character At The End Of The String 

console.log(FullName.lastIndexOf());

console.log(FullName.substring(0, 5)); // Vivek It Gives The Substing takes a Start index And End Index And Last Value dosen't count 

console.log(FullName.slice(0, 5));  // Takes A Start Index And Number Of Character We Want & Also takes a Negative Value 

console.log(FullName.indexOf("k")); // Gives A Index Value Of Character Start from A 0th Value...

console.log(FullName.toString());

let Score = "55555"

let NewScore = Number(Score)

console.log(Score, typeof (Score)); // 55555 string

console.log(NewScore, typeof (NewScore)); // 55555 'number'

console.log(FullName.replace("Vivek", "Tushar"));  // Tushar Manoj Jadhav  Replace The String "Vivek " With "Tushar"

console.log(FullName.match("a")); // Match The String And Return The Index Value OF The String  /* 
// ['a', index: 7, input: 'Vivek Manoj Jadhav', groups: undefined] */

console.log(FullName.matchAll("ViveK"));

// console.log(FullName.06);

let SpreedString = "Spread The String"

console.log(...SpreedString.split(''));

console.log();

let trimExamplee = "     TirmKaro  "  // Remove White Spaces At The end Of the String And Start Of the String 

console.log(trimExamplee.length,trimExamplee);

console.log(trimExamplee.trim().length,trimExamplee);

console.log(trimExamplee.length,trimExamplee.trimStart(),trimExamplee,trimExamplee.length);


                                 