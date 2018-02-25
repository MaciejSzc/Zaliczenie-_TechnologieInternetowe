  // SLIDER

    var buttonNext = document.querySelector('.buttonNext');
    var buttonPrev = document.querySelector('.buttonPrev');
    var listElements = document.querySelectorAll('section.banner li');
    var current = 0;

    var pictureIndex = [];
    for (var i = 0; i < listElements.length; i++) {
        pictureIndex.push(listElements[i]);
    }

    //CALCULATOR 

  var dropdown = document.querySelectorAll('.drop_down_list');
    var liEl = document.querySelectorAll('.list_panel > li');
    var counter = 0;
    var sum = document.querySelector('.sum');

    var title = document.querySelector('.panel_left .title');
    var color = document.querySelector('.panel_left .color');
    var pattern = document.querySelector('.panel_left .pattern');
    var titleValue = document.querySelector('.panel_right .title.value');
    var colorValue = document.querySelector('.panel_right .color.value');
    var patternValue = document.querySelector('.panel_right .pattern.value');

    var transportInput = document.querySelector('.checkbox input');
    var transport = document.querySelector('.panel_left .transport');
    var transportValue = document.querySelector('.panel_right .transport.value');


    dropdown.forEach(function (el) {
        el.addEventListener('click', function () {
            if (this.children) {
                this.lastElementChild.classList.toggle("block");
            }
        });
    });