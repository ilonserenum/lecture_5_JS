// დავალება:

// 1. შექმენით htmlში დივი, მიანიჭეთ id და ჯსდან ამ დივში დაამატეთ შემდეგი html სტრუქტურა:
// <div class=“wraper”>
//  <img src=“რაღაცა სურათის მისამართი დაამატეთ” alt=“image”>
// <h2 class=“title”> image title </h2>
// </div>

document.getElementById("myDiv").innerHTML = `
<div class="wraper"> 
 <img src="https://source.unsplash.com/gySMaocSdqs/600x300" alt="image">
<h2 class="title"> image title </h2>
</div>
`;

// 2. მოცემულია მასივი let array =[23,45,32,5,87,7,3,98]
// sort მეთოდის საშუელებით დაალაგეთ ელემენტები კლებადობის მიხედვით და ამოიღეთ მინიმალური რიცხვი;

let array = [23, 45, 32, 5, 87, 7, 3, 98];
array.sort((a, b) => b - a);
console.log(array);
console.log(array[array.length - 1]);

// 3. მოცემულია სტრინგი - ‘12345’, გაიგეთ ამ რიცხვებსის ჯამი. ( უნდა გადაიყავნოთ მასივში, გათვალოთ ჯამი, და შემდგ ეს სტრინგი გადაიყავნოთ რიცხვში)
let myString = "12345";
let mySum = myString.split("").reduce((sum, x) => sum + parseInt(x, 10), 0);
console.log(mySum);

// 4. მოცემულია მასივი, შემდეგი მნიშვნელობებით -let array = ['html', 100, 'css', 'javascript', 25, 10, 'python', 11];
// გამოიტანეთ მარტო ციფრები;

array = ["html", 100, "css", "javascript", 25, 10, "python", 11];
let intarray = array.filter((x) => typeof x == "number");
console.log(intarray);

// 5. მოცემულია მასიცი:let array2 = [14, 150, 'css', null, 'javascript', 25];
// შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი.
// თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.

let array2 = [14, 150, "css", null, "javascript", 25];
let newarray2 = array2.map(function converter(el) {
    if (typeof el == "number") {
        return el * el;
    } else if (typeof el == "string") {
        return el.toUpperCase();
    } else {
        return el;
    }
});
console.log(newarray2);

// 6.მოცემულია სტრინგი - ‘javascript’, მიიღეთ შემოტრიალებული ვარიანტი მეთოდების გარეშე ( for loop ით)

let myString2 = "javascript";
let myString2rvrs = "";
for (let i = myString2.length - 1; i >= 0; i--) {
    myString2rvrs = myString2rvrs + myString2[i];
}
console.log(myString2rvrs);

// 7. მოცემულია სტრინგი: let info= ‘Good day”, ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუელებით.

let info = "Good day";
let sliced = info.slice(5);
console.log(sliced);

// 8. დაწერეთ ფუნქცია, რომელიც პარამეტრსდ იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.

function getStringLength(myString) {
    return myString.length;
}
console.log(getStringLength("goodday"));
console.log(getStringLength(""));
console.log(getStringLength("have a good day"));

// 9. Prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში.
// როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.

const correctAnswer = "tbilisi";
let answer = prompt("What is the capital of Georgia?").toLowerCase();
if (correctAnswer == answer) {
    console.log("პასუხი სწორია");
} else {
    console.log("პასუხი არასწორია");
}

// 10. მოცემულია: let link = “https://google.com”. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს ამ ცვლადს,
// და შეამოწმეთ indexof მეთოდის საშუალებით არის თუ არა ამ ცვლადში “https://“. თუ კი გამოიტანეთ - კი მოიცავს, თუ არა - არა, არ მოიცავს.

function checkIfHasHTTPS(myLink) {
    if (myLink.toLowerCase().indexOf("https://") != -1) {
        console.log("კი, მოიცავს");
    } else {
        console.log("არა, არ მოიცავს");
    }
}
let link = "https://google.com";
checkIfHasHTTPS(link);
checkIfHasHTTPS("google.com");

// 11. მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით,
// შეიძლება 100 ან 200 ან 10. მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”]  splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მავის მავივრად ჩასვით “strawberry”.

let fruits = ["apple", "mango", "avocado", "kiwi"];
fruits.splice(fruits.length - 2, 1, "strawberry");
console.log(fruits);
