const button = document.getElementById('payment');

button.addEventListener('mouseover', function handleMouseOver() {
    button.style.backgroundColor = '#766CF1';
});

button.addEventListener('mouseout', function handleMouseOut() {
    button.style.backgroundColor = '#382AE1';
});

const changeAbo = document.getElementById('change-abo');

changeAbo.addEventListener('mouseover', function handleMouseOver() {
    changeAbo.style.color = '#766CF1';
});

changeAbo.addEventListener('mouseout', function handleMouseOut() {
    changeAbo.style.color = '#382AE1';
});

const cancel = document.getElementById('cancel');

cancel.addEventListener('mouseover', function handleMouseOver() {
    cancel.style.color = '#161E46';
});

cancel.addEventListener('mouseout', function handleMouseOut() {
    cancel.style.color = 'grey';
});
