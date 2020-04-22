var $ = require('jquery');
var keyboard = require('virtual-keyboard');

var qa = 0 ;
// import { resolve } from "path";
//import{_} from 'lodash';
// const _ = require('lodash');


// const users = [
//     { type : 'boss' ,user: 'barney',  age: 36, active: true },
//     { type : 'boss' ,user: 'fred', age: 40, active: false },
//     { type : 'boss' ,user: 'pebbles', age: 1,  active: true },
//     { type : 'manager' , user: 'pebbles', age: 1,  active: true }
//   ];

//   console.log(_.filter(users , {type : 'boss'}));

//   var array = ['a', 'b', 'c', 'a', 'b', 'd' , 'c'];
 
// _.pull(array, 'a', 'c');
// console.log(array);


// const delay = (interval) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, interval);
//     });
// };

// const main = async () => {
//     console.log('Starting...');

//     // 等待五秒
//     await delay(5000);
    
//     console.log('Done after five seconds')
// };

// main();


// const arr = [ 1, 2, 3, 4, 5 ];
// let results = arr.map((num)=>{
//     return num +1 ;
// })

// console.log(results);


// async function demo01() {
//     return 234 ;
//     //return Promise.resolve(234);
//     return new Promise((resolve)=>{
//        resolve(234);
//     })
// }

// demo01().then(val => {
//     console.log(val);// 234
// });

// function sleep(second) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(' enough sleep~');
//         }, second);
//     })
// }
// function normalFunc() {
//     console.log('normalFunc');
// }
// async function awaitDemo() {
//     await normalFunc();
//     console.log('something, ~~');
//     let result = await sleep(2000);
//     console.log(result);// 两秒之后会被打印出来
// }
// awaitDemo();



// const aa = async ()=>{
//     return 123 ; //=Promise.resolve(123);
// }

// const sleep = (sec)=>{
    
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(123)
//         },sec);
//     });

// }

// const awaitDemo = async()=>{
//     console.log("start");
//     let result = await sleep(2000);
//     console.log(result);
// }

// awaitDemo();


// function sleep(second, param) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(param);
//         }, second);
//     })
// }

// async function test() {
//     let result1 = await sleep(1000, 'req01');
//     console.log(result1);
//     let result2 = await sleep(1000, 'req02' + result1);
//     console.log(result2);
//     let result3 = await sleep(1000, 'req03' + result2);
//     console.log(result3);
//     // console.log(`
//     //     ${result3}
//     //     ${result2}
//     //     ${result1}
//     // `);
//     return result3 ; //因為是async所以會回傳一個promise物件 return result3 等同於Promise.resolve(result3)
// }

// test().then((value)=>{ //因為test會回傳一個promise物件所以可以用.then繼續做之後要做的事情
//     console.log(value)
// });





// function sleep(second) {
//     return new Promise((resolve, reject) => {
//         if(second>3000){
//             reject("睡太久了");
//         }else{
//         setTimeout(() => {
//             resolve(`睡了${second/1000}秒`);
//         }, second);
//         }
//     })
// }

// const sleep =async function(second) {
    
//         if(second>3000){
//             return Promise.reject("sleep too long")
//         }
//         else{
//             return second;
            
//         }
  
// }


// const testReject = async()=>{
    
//     try{
//     let result = await sleep(5000);
//     console.log(result);
//     }catch(error){
//         console.log(error);
//     }
   
// }


// testReject();

$(document).ready(function() {

$('.keyboardInput').keyboard({
	layout: 'custom',
	customLayout: {
		'normal': [
			'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
			'{tab} q w e r t y u i o p [ ] \\',
			'a s d f g h j k l ; \' {enter}',
			'{shift} z x c v b n m , . / {shift}',
			'{accept} {space} {left} {right} {sp:.2} {del} {toggle}'
		],
		'shift': [
			'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
			'{tab} Q W E R T Y U I O P { } |',
			'A S D F G H J K L : " {enter}',
			'{shift} Z X C V B N M < > ? {shift}',
			'{accept} {space} {left} {right} {sp:.2} {del} {toggle}'
		]
	},
	css: {
		// add dark themed class to keyboard popup
		// to use bright svg padlock icon
		popup : 'ui-keyboard-dark-theme'
	}
})

  
});