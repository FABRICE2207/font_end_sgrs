// Scrpt pour le formulaire étape par étape
const btnNext = document.querySelector('form #btn .next');
const btnPrev = document.querySelector('form #btn .prev');
const form = document.querySelector('form');

const allTab = document.querySelectorAll('form .tab');

let i = 0;

// Affiche une étape
allTab[i].classList.add('show');

// i == une étape donc si étape passe au suivant affiche btn précédent 
if(i === 0) {
    btnPrev.style.display = 'none';
} else {
    btnPrev.style.display = 'block';
}

btnNext.addEventListener('click', function(){

    // const allInputPerTab = allTab[i].querySelectorAll('input');
    // for(let j = 0; j < allInputPerTab.length; j++){
    //     if(allInputPerTab[j].value === '' || !allInputPerTab[j].checkValidity()){
    //         allInputPerTab[j].style.borderColor = 'red';
    //         return false;
    //     }
    // }

    i += 1;

    if(i>= allTab.length){
        form.submit()
        location.replace('connexion.html')
        return false;
    } else {
        for(let j = 0; j < allTab.length; j++){
            allTab[j].classList.remove('show');
        }
        
        allTab[i].classList.add('show');
    }

    if(i === 0) {
        btnPrev.style.display = 'none';
    } else {
        btnPrev.style.display = 'block';
    }
    
    if(i === allTab.length -1){
        btnNext.innerHTML = 'Enregistrer';
    } else {
        btnNext.innerHTML = "Suivant";
    }

});

btnPrev.addEventListener('click', function(){
    i -= 1;

 
        for(let j = 0; j < allTab.length; j++){
            allTab[j].classList.remove('show');
        }
        
        allTab[i].classList.add('show');

    if(i === 0) {
        btnPrev.style.display = 'none';
    } else {
        btnPrev.style.display = 'block';
    }

    if(i === allTab.length -1){
        btnNext.innerHTML = 'Enregistrer';
    } else {
        btnNext.innerHTML = "Suivant";
    }
    
});

// Script pour l'ajout de la nouvelle ligne
const addBtn = document.querySelector('.add');
const input = document.querySelector('.imp-group');

function removeInput(){
    this.parentElement.remove();
}

function addInput(){
    const intitule = document.createElement('input');
    intitule.type="text";
    intitule.name="initule"
    intitule.className="input form-control"

    const date_format = document.createElement('input');
    date_format.type="date";
    date_format.name ="date_format"
    date_format.className="form-control"

    const lieu_format = document.createElement('input');
    lieu_format.type="text";
    lieu_format.name="lieu_format";
    lieu_format.className="form-control"

    const cert_format = document.createElement('input');
    cert_format.name="cert_format";
    cert_format.className="form-control"

    const btn = document.createElement('a');
    btn.className = "delete";
    // btn.innerHTML = "&times";
    btn.innerHTML = "Supprimer";

    btn.addEventListener('click', removeInput);



    const flex = document.createElement('div');
    flex.className = "row add-col";
 
    // Les colonnes
    const col_1 = document.createElement('div');
    col_1.className = "col-md-3 add-col";

    const col_2 = document.createElement('div');
    col_2.className = "col-md-3 add-col";

    const col_3 = document.createElement('div');
    col_3.className = "col-md-3 add-col";

    const col_4 = document.createElement('div');
    col_4.className = "col-md-3 add-col";

    input.appendChild(flex)
    flex.appendChild(col_1)
    input.appendChild(flex)
    col_1.appendChild(intitule);

    input.appendChild(flex)
    flex.appendChild(col_2)
    input.appendChild(flex)
    col_2.appendChild(date_format);

    input.appendChild(flex)
    flex.appendChild(col_3)
    input.appendChild(flex)
    col_3.appendChild(lieu_format);

    input.appendChild(flex)
    flex.appendChild(col_4)
    input.appendChild(flex)
    col_4.appendChild(cert_format);

    flex.appendChild(btn);
}

addBtn.addEventListener('click', addInput);

