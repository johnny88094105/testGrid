//import {init as bodyInit} from './content';
var $ = require('jquery');
var bodyInit = require('./content.js');
const htmlMap = {
    main:`
       
            <div class='title'></div>
            <div class='body'></div>
            <div class='footer'></div>
       
    `
}

const stateMap = {
    $container : null 
}


console.log(99999);

$(document).ready(function(){
    let $wrapper = $(".wrapper");
    init($wrapper);
    console.log(44444444444);
})


const init = ($container)=>{
    stateMap.$container = $container.html(htmlMap.main);
    initTitle();
    initFooter();
    bodyInit(initBody());
    
}

const initTitle = ()=>{
    return stateMap.$container.find('title');

}
const initBody = ()=>{
    //return stateMap.$container.find('body');
    return $('.body');
}

const initFooter = ()=>{
    return stateMap.$container.find*('footer');
}

