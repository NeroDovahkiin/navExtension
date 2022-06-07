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

select.addEventListener('change',  e => {
    let selectedIndex = select.selectedOptions[0].value;
    document.documentElement.style.setProperty('--numColumns', selectedIndex);
});

console.info("card width current value: " + getComputedStyle(document.documentElement).getPropertyValue('--cardWidth'));