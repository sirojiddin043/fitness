//var x = 10;
//var y = 3;
//console.log(x + y);
//console.log(x - y);
//console.log(x * y);
//console.log(x / y);

//var x = 'salom';
//var y = 'proweb';

//console.log(x + y);


//var admin = alert(name);

//var name = 'веселий';

//var js = 1000 + "108";
//console.log(js)


//var x = +prompt(10);
//var y = +prompt(15);
//var x = -prompt(10);
//var y = -prompt(15);
//var x = +prompt(10);
//var y = -prompt(15);



//alert(x + y)


//var x = +prompt(15);
//var y = +prompt(15);
//var z = +prompt(15);
//var res = (x / y / z);
//alert(res)


//var x = +prompt('yozing birinchi raqami 1');
//var y = +prompt('yozing ikkinchi raqami 1');


//if (x > y){
//    alert('birinchi raqam 1 kotta');
//}

//else if(x < y){
//    alert('ikkinchi raqam 2 kotta');
//}
//else{
//    alert('raqamlar barvar');
//}


//var x = 10;
//var y = 20;
//
//function num() {
//    if(x > y){
//        console.log(x);
//    }
//    else{
//        console.log(y);
//    }
//}
//num()

//var answer = document.getElementById('answer');
//var btn = document.getElementById('btn');
//var out = document.getElementById('out');
//var random = Math.floor(Math.random() * 10 + 1);
//console.log(random);
//
//btn.onclick = function () {
//    if(isNaN(answer.value)){
//        out.innerHTML = 'soni yozing!!';
//    }
//    else if(answer.value > random){
//        out.innerHTML = 'sizning soningiz kotta oylaganizdan';
//    }
//    else if(answer.value < random){
//        out.innerHTML = 'sizning soningiz kam oylaganizdan';
//    }
//    else{
//        out.innerHTML = 'tabrikliman!! siz toptingiz';
//    }
//}

// var week = +prompt('1 dan 7 gacha');
// if(week == 1){
//     alert('du')
// }
// else if(week == 2){
//     alert('se')
// }
// else if(week == 3){
//     alert('chor')
// }
// else if(week == 4){
//     alert('pay')
// }
// else if(week == 5){
//     alert('juma')
// }
// else if(week == 6){
//     alert('shanba')
// }
// else if(week == 7){
//     alert('yahsanba')
// }

// switch (week) {
//     case '1':
//         alert('du')
//         break;
//         case '2':
//             alert('se')
//             break;
//             case 3:
//                 alert('chu')
//                 break;
//                 case 4:
//                     alert('pay')
//                     break;
//                     case 5:
//                     alert('juma')
//                     break;
//                     case 6:
//                     alert('shan')
//                     break;
//                     case 7:
//                         alert('yak')
//                         break;
//                         default:
//                             alert('bunaqa kun yoq')
// }


//var x = +prompt(4);
//var y = +prompt(2);
//var z = +prompt(3);
//
//if(x > y || x > z){
//    alert('birinchi x kop')
//}
//else if(x < y || y > z){
//    alert('ikkinchi y kop')
//}
//else if(z > y || y < z){
//    alert('uchinchi z kop')
//}

//var age = +prompt();
//var res = 18;
//
//if(res > age){
//    out.innerHTML = 'sizga hali oqish va oqish kere';
//}
//else if(res < age){
//    out.innerHTML = 'sizga hali ishlash va ishlash kere';
//}
//else  {
//}
//    out.innerHTML = 'sizga pensiga chiqshingiz kere';

// var a = 0;
// var b = 10;
// //
// //do{
// //    console.log(a);
// //    a++;
// //}
// //
// //while(a <= b){
// //    console.log(a);
// //    a++;
// //}
// for(var i = 0; i <= 10; i++){
//     console.log(i);
// }


// for(var i = 30; i <= 100; i++){
//     document.write(i + '<br/>')
// }
// var summa ;

// for(var i = 0; i <= 100; i++){
//     if(summa % 100 == i ){
//         console.log(i)
//     }
//  }

// var summa = 1;
// for(var i = 1; i <= 20; i++){
//    console.log(summa)
// }

// var array = ['apelsin','banan','olma','limon',1,2,3,4,5,6];
//  array.push('grusha'); //elementlani oxirgiga massivlani qoyiladi
//  array.unshift('tarvuz'); //elementi boshiga qoyiladi massivlani


// array.pop(); oxirdagi elementi udalit qiladi
// array.shift();boshidagi elementi udalit qiladi
// array.splice();
// console.log(array[3]) usha massivi chiqazib beradi
//  console.log(array.length) //strakalani chiqazib beradi 

// var fruits = ['apelsin','banan','olma','limon'];

// var out = document.querySelector('.out');


// var add = document.querySelector('.add');
// var del = document.querySelector('.del');

// for(i = 0; i < fruits.length; i++){
//     out.innerHTML += fruits[i] + '<br/>';
// }

// add.onclick = function(){
//     var addFruit = document.querySelector('.add-fruit').value;
//     if(!addFruit){
//         alert('poliyani toldiring')
//     }
//     else{
//        fruits.push(addFruit); 
//        out.innerHTML = '';
//        for(i = 0; i < fruits.length; i++){
//         out.innerHTML += fruits[i] + '<br/>';
//        }
//     }
//     document.querySelector('.add-fruit').value = '';
    
    
    
//     console.log(addFruit);
//     console.log(fruits)
// }
// del.onclick = function(){
//     var delFruit = document.querySelector('.del-fruit').value;
//     if(!delFruit){
//         alert('poliyani nomerini yozing')
//     }
//     else if(delFruit == 0 || delFruit > fruits.length){
//         alert('nomer tovari tori yozing');
//     }
//     else{
//         fruits.splice(delFruit -1, 1);
//         out.innerHTML = '';
//         for(i = 0; i < fruits.length; i++){
//          out.innerHTML += fruits[i] + '<br/>';
//         }
//     }
//     document.querySelector('.del-fruit').value = '';
    

//     console.log(fruits)
// }

// const burger = document.querySelector('.burger');

// burger.addEventListener('click', (e) =>{
//     e.target.classList.toggle('open');
// }); 

// var color = ['pink', 'black','white','red','green','blue','yellow','brown','gray','orange'];
// var random = Math.floor(Math.random() * color.length);
// var randomColor = color[random];
// console.log(randomColor)
// while (true) {
//     var max = +prompt('hush kelibsiz oyinga "rangni talang" \n' + color + '\nmiqdorini yozing miqdori 1dan 5gacha ');
//     if(isNaN(max)){
//         alert('soni yozing 1 dan 5 gacha');
//     }
//     else if(max > 0 && max <= 5){
//         break;
//     }
//     else{
//         alert('soni yozing 1 dan 5 gacha');
//     }
// }

// var i = 0;

// while (i < max) {
//     i++;
//     var answer = prompt('rangni yozing nomini. sizda bor' + max + 'popitka. popitka ' + i );
//     answer = answer.toLowerCase();
//     if(answer == null){
//         alert('siz oyini qarshi boldingiz')
//         break;
//     }
//     else if(answer != randomColor){
//         alert('не правильно');
//     }
//     else if(answer == randomColor){
//         alert('tabrikliman siz toptingiz');
//         break;
//     }
//     if(i == max){
//         alert('popitkalringiz tugadi. siz yutqazdingiz');
//     }
// }

// const



const theif = {
    jacket: "black",
    height: 1.93,
    colors:{
        hair: "dark blue",
        style: "string",
    },
};
// theif.howOf();
const{hair, style} = theif.colors;

console.log(hair);;
console.log(style);
























// let numberOfSeries;

// function startApp() {
//     numberOfSeries = +prompt('nechta serial kordingiz?', "");

//     while (
//         numberOfSeries == "" ||
//         numberOfSeries == null ||
//         isNaN(numberOfSeries)
//     ) {
//         numberOfSeries = +prompt('nechta serial kordingiz?', "");
//     }

// }

// startApp();

// const seriesDB = {    
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     private: false, 
//  };

//  function rememberMySeries() {
//  for(i = 0; i < 2; i++){
//     const a = prompt("oxirgi korgan serialingiz?");
//      b = prompt("nechi baxo berasiz?");
//      seriesDB.series[a] = b
//      if (a != null && b != null && a != "" && b != "") {
//         seriesDB.series[a] = b;
//         console.log("done");
//      }
//      else{
//         console.log("error");
//         i--;
//      }
//    }
//  }

// function detectLevelSeries(count) {
//     if(seriesDB < 5){
//         console.log("kam serial korgansiz");
//     }
//     else if(seriesDB >= 5 && seriesDB < 10){
//         console.log("siz classik tamoshabin ekasiz");
//     }
//     else if(seriesDB >= 10){
//         console.log("siz serialchi zvezda ekansiz");
//     }
//     else{
//         console.log("error");
//     }
// }
// detectLevelSeries();




// function showDb(hidden) {   
//     if(!hidden){
//         console.log(seriesDB);
//     }
// }
// showDb(seriesDB.private);

// let writeGenres = +prompt('yahshi korgan janiringiz?', "");

// function writeGenres() {
//     for (let i = 0; i <= 2 ; i++) {
//         const genre = prompt(`yahshi korgan janiringiz ${i + 1}`);
//         seriesDB.genres[i] = genre;
//     }
// }