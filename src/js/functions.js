const btn = document.querySelectorAll('#buttons a');

btn.forEach((element) => {
    element.addEventListener('click', (event) =>{
        event.preventDefault();        
    })
})