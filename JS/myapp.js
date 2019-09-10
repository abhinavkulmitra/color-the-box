let elements = document.getElementsByName('css-style');

let div =  document.getElementById('modify');

function set()
{
   // console.log(elements);

    for(let index = 0; index< elements.length; index++)
   {   
      let cssProperty = elements[index].getAttribute('id');
      
      // console.log(cssProperty);

       let cssValue = elements[index].value;
       
      // console.log(cssValue);

       div.style[ cssProperty ] = cssValue;
   }
}

document.getElementById('Set_button').addEventListener('click', set);


//trying out myself

// function Color_ch(){
//     console.log('changed');
// }
// var cl = document.getElementsByName('color');

//     cl[0].addEventListener('click', Color_ch);

//     cl[1].addEventListener('click', Color_ch);

//     cl[2].addEventListener('click', Color_ch);

//     cl[3].addEventListener('click', Color_ch);

