const mainButton = document.getElementById('mainPageButton');
const text1 = document.getElementById('text1');
const div1 = document.getElementById('div1');


// div1.onmousemove = ev => {
//
//     let color1 = ev.x
//     let color2 = ev.y
//     let color3 = ev.y + ev.x
//
//     div1.style.background = rgb(${color1}, ${color2}, ${color3})
// }


// mainButton.onclick = function (ev) {
//     text1.innerText = "Hello WOrld";
//     console.log('CLICK !!!!')
// }



const cars = document.getElementById('cars');
const models = document.getElementById('models');
cars.onclick = (ev)=>{
    const modelName = ev.target.innerText;
    console.log(modelName);


    switch (modelName) {
        case 'BMW':
            models.innerText = 'm3 , m5 , E38, x7';
            break;
        case 'Mercedes':
            models.innerText = 'G63 , E220 , C390, A180';
            break;
        case 'Жигулі':
            models.innerText = '2101 , 2107 , 2108, 2110';
            break;


    }

}