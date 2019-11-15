console.log('************** Excercise 1 Hello World **************')

let  Message='Hello world';
console.log(Message);


console.log('************** Excercise 2: it is a leap year **************')

let year:number=2001;

let IfLeapYear = (_year:number): void =>
{
    let isLeapYear:boolean = true;
    if(year%4 == 0){
        isLeapYear = true;
        if(year % 100 == 0 && year % 400 != 0){
            isLeapYear = false;
        }
    }
else
{
       isLeapYear = false;
    }
    if(isLeapYear){
        console.log('This is a leap year.');
    }else{
        console.log('This is not a leap year.');
    }
} 

IfLeapYear(2001);

console.log('************** Excercise 3: Age Calculation **************')

let listNumOfDaysInYear = new Map<string,number>();
listNumOfDaysInYear.set("Earth",365);
listNumOfDaysInYear.set("Mars",288);

let GetAgeInYears = (_ageInSeconds:number,_planet:string):void => {
    let _ageInYears = _ageInSeconds / (3600*24*listNumOfDaysInYear.get(_planet));
    console.log(Math.round(_ageInYears));
}

GetAgeInYears(3150000000,"Earth");
GetAgeInYears(3150000000,"Mars"); 


console.log('************* Excercise 4: phrase ***************')

let input = 'Wellcome To NIIT Ltd';
let words = input.trim().split(' ');
let wordsMap  = new Map();
let createWordMap = (words) => {   
  words.forEach((word) => {(wordsMap.hasOwnProperty(word)) ? wordsMap[word]++ : wordsMap[word] = 1;});
  return wordsMap;
};
let wordsCount = createWordMap(words);
console.log(wordsCount); 

console.log('************** Excercise 5: Reverse **************')

let reversestring = function (username) { return username.split("").reverse().join(""); };
console.log(reversestring("Wellcome"));


