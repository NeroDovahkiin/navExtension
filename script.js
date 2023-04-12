let slider = document.querySelector('[type=range]');
let cards = document.querySelectorAll('.card');
let label = document.querySelector('label');
let select = document.querySelector('select');

slider.addEventListener('input', e => {
    /*
    cards.forEach(card => {
        card.style.width = e.target.value + 'px';
        card.style.height = (e.target.value) / 1.7777 + 'px';
        
        
    });*/
    // edito la variable css
    document.documentElement.style.setProperty('--cardWidth', e.target.value + 'px');
    label.innerText = e.target.value + "px";
});

select.addEventListener('change', e => {
    let selectedIndex = select.selectedOptions[0].value;
    document.documentElement.style.setProperty('--numColumns', selectedIndex);
    //
    document.documentElement.style.setProperty('--cardWidth', '200px');
    label.innerText = "200px";
    


    //new
    switch (selectedIndex) {
        case '4':
            document.getElementById("rangeCards").min = 200;
            document.getElementById("rangeCards").max = 440;
            break;
        case '5':
            document.getElementById("rangeCards").min = 200;
            document.getElementById("rangeCards").max = 346;
            break;
        case '6':
            document.getElementById("rangeCards").min = 200;
            document.getElementById("rangeCards").max = 287;
            break;
        case '7':
            document.getElementById("rangeCards").min = 200;
            document.getElementById("rangeCards").max = 244;
            break;
        case '8':
            document.getElementById("rangeCards").min = 150;
            document.getElementById("rangeCards").max = 200;
            break;
        default:
            document.getElementById("rangeCards").min = 200;
            document.getElementById("rangeCards").max = 580;
    }
    document.getElementById("rangeCards").value = 200;
    
});

console.info("card width current value: " + getComputedStyle(document.documentElement).getPropertyValue('--cardWidth'));