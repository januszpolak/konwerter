const formKm = document.getElementById('formKm');
const inputKm = document.getElementById('km');

const check = (e) => {

    e.preventDefault()
    const equal = inputKm.value;
    const miles = equal / 1.6;
    const spanKm = document.getElementById('spanKm')
    spanKm.textContent = miles;

}

formKm.addEventListener('submit', check);

const formMiles = document.getElementById('formMiles');
const inputMiles = document.getElementById('miles');

const check1 = (e) => {

    e.preventDefault()
    const equal = inputMiles.value;
    const km = equal * 1.6;
    const spanMiles = document.getElementById('spanMiles')
    spanMiles.textContent = km;

}

formMiles.addEventListener('submit', check1);

const formKg = document.getElementById('formKg');
const inputKg = document.getElementById('kg');

const check2 = (e) => {

    e.preventDefault()
    const equal = inputKg.value;
    const kg = equal * 0.1575;
    const spanKg = document.getElementById('spanKg')
    spanKg.textContent = kg;

}

formKg.addEventListener('submit', check2);

const formSt = document.getElementById('formSt');
const inputSt = document.getElementById('st');

const check3 = (e) => {

    e.preventDefault()
    const equal = inputSt.value;
    const st = equal / 0.1575;
    const spanSt = document.getElementById('spanSt')
    spanSt.textContent = Math.floor(st);

}

formSt.addEventListener('submit', check3);