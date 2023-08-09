const fieldInput = document.getElementsByTagName('input')

const fieldEmpty = document.querySelectorAll('.field-empty')

function validateInput(){
    for(let i = 0; i < fieldInput.length; i++){
        fieldInput[i].addEventListener('blur', function(){
            if(this.value == ""){
                this.classList.remove('bg-none')
                fieldEmpty[i].classList.remove('hidden');
            }else{
                this.classList.add('bg-none')
                fieldEmpty[i].classList.add('hidden');
            }
        })
    }
    
    
}

validateInput();