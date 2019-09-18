console.log('Hola, Funciona!!');
document.querySelector('.apiCall').addEventListener('click', () => {
    fetch('http://localhost:3000')
        .then(res => res.text())
        .then(res => {
            document.querySelector('.response').innerText = res
        })
        
});
