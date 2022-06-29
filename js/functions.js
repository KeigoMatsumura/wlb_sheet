'use strict';

const work_val = 0;
const houselife_val = 0;
const social_val = 0;
const study_val = 0;
const health_val = 0;


// genre: main
// go to school 
document.getElementById('goto_school').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";

    }
)   
// prepare for the presentation
document.getElementById('prep_presentations').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// build some apps
document.getElementById('develop_apps').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// succcessed in reaserch projects
document.getElementById('success_reaserch').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)    


// genre: health
// take a bath
document.getElementById('take_a_bath').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// laundary
document.getElementById('laundry').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// breakfast
document.getElementById('breakfast').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// lunch
document.getElementById('lunch').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// dinner
document.getElementById('dinner').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// working out 
document.getElementById('hitgym').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// go for a cycling
document.getElementById('cycling').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// funton laundry
document.getElementById('futon_laundry').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// cooking 
document.getElementById('cook').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// take a walk 
document.getElementById('take_a_walk').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// meditation
document.getElementById('meditation').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   

// genre: social
// talk_with_someone
document.getElementById('talk_with_someone').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// do_for_others
document.getElementById('do_for_others').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// talk_with_heterosexual
document.getElementById('talk_with_heterosexual').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// dating
document.getElementById('dating').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// play_with_animals
document.getElementById('play_with_animals').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// play_with_plants
document.getElementById('play_with_plants').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   

// genre: intellectual
// read some books
document.getElementById('read_books').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// art 
document.getElementById('art').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// see_the_scenery
document.getElementById('see_the_scenery').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   

// genre:money
// renew the UDC website
document.getElementById('renew_UDC_website').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// renew_ChouChou_website
document.getElementById('renew_ChouChou_website').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   
// make_a_new_contract
document.getElementById('make_a_new_contract').addEventListener('click',
    function () {
    this.style.backgroundColor = "#3fb811";
    }
)   


// calc score 
document.getElementById('calc_button').addEventListener('click',
    function () {
    // this.style.backgroundColor = "#fbbe81";
    }
)   

function func() {
    console.log;
}

const buttons = document.querySelectorAll('button');
console.log(buttons)

const clearButtonSelection = (buttons) => {
    setTimeout(func =()=>{
        buttons.checked = false;
    },100)
}

buttons.forEach(buttons => {
    buttons.addEventListener('mouseup', func =()=>{
        if(buttons.checked){
            clearButtonSelection(buttons)
        }
    });
});

// from here 
const radioButtons = document.querySelectorAll('input[type="radio"]');

const clearRadioButton = (radioButton) => {
  setTimeout(func =()=>{
    radioButton.checked = false;
  },100)
}

radioButtons.forEach(radioButton => {
  let queryStr = 'label[for="' + radioButton.id + '"]'
  let label = document.querySelector(queryStr)

  radioButton.addEventListener("mouseup", func=()=>{
    if(radioButton.checked){
      clearRadioButton(radioButton)
    }
  });

  if(label){
    label.addEventListener("mouseup", func=()=>{
      if(radioButton.checked){
        clearRadioButton(radioButton)
      }
    });
  }

});