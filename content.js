
var jquery = require('jquery');

const htmlMap = {
    body:`
        <div class='infoList'>
            <div class='infoListName'>姓名</div>
            <div class='infoListNameValue'>Johnny</div>
            <div class='infoListAge'>年齡</div>
            <div class='infoListAgeValue'>24</div>
            <div class='infoListHeight'>身高</div>
            <div class='infoListHeightValue'>180</div>
        </div>
    `
}



const stateMap = {
    $container : null,
}
//$('.body')
const init = ($container)=>{
    console.log(111111);
stateMap.$container = $container.html(htmlMap.body);   
}   

module.exports = init; 
