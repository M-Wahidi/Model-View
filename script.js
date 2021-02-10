//selectors
const openButton = document.querySelector('.open-model')
const closeButton = document.querySelector('.close')
const overlay = document.querySelector('.overlay')
const model = document.getElementById('model')
const modelOuter = document.getElementById('model-outer')
//handler
openButton.addEventListener('click',openModel)
closeButton.addEventListener('click',closeModel)
    
// functions 
function openModel (){
    overlay.classList.add('model_overlay')
    modelOuter.style.display = 'flex'
    model.style.display = 'none'
}
function closeModel (){
    modelOuter.style.display = 'none'
    model.style.display = 'flex'
    overlay.classList.remove('model_overlay')
}
