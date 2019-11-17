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

let input = 'Welcome to to niit ltd';
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

console.log('************** Excercise 6: Triangle **************')

let chk_tringle=(num1 :number, num2:number, num3:number): void =>{
    if((num1==num2)&& (num2==num3)&&(num1==num3))
    
    {
        console.log("The Given triangle is equivalent triangle");
        console.log(num1,num2,num3);
    }
    else if((num1!=num2)&&(num2!=num3)&&(num1!=num3))
    {
        console.log("The given triangle is an Scalene Traingle");
        console.log(num1,num2,num3);
    }
    else
        console.log("The given triangle is an Scalene Traingle");
        console.log(num1,num2,num3);
    
    }
    chk_tringle(3,4,3);
    

    console.log('************** Excercise 7: Armstrong Number **************')    



    let arm_str = (arms:number) =>
    {
        console.log(arms);
    return new Promise(function(resolve,reject){
    
        if(arms==0)
        {
    reject("invalid number.")        ;
        }
    
        let arm: number=0;
        let a: number=0;
        let temp:number=arms;           
        var check=arms.toString().length;
        while(temp>0)
            {
                a=temp%10;
                temp=Math.floor(temp/10); 
                arm=arm+Math.pow(a,check);
            }   
        if(arm==arms)
            {
             
          return  resolve(arms+ " is Armstrong Number");
            }
        else
            {
                return  resolve(arms+ " is Not Armstrong Number");
            }
    })
    }
    arm_str(1634).then(success,failure);
    function success(Smessage)
    {
    console.log(Smessage);    
    }
    function failure(Fmessage)
    {
    console.log(Fmessage);    
    }









