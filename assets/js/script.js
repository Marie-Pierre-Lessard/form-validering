/* Form validering
Vi skal afprøve form validering i praksis, så du skal oprette en form med følgende felter og validerings kriterier:

GJORT: fornavn (mindst 2 karakterer)
GJORT: efternavn (mindst 2 karakterer)
GJORT: Adresse (mindst 5 karakterer)
GJORT: postnummer (kun tal)
GJORT: email (skal pattern evalueres)
GJORT: button (skal starte evalueringen)

user feedback
GJORT: felt der indeholder fejl skal markeres med rød border

GJORT: under formen skal der være en skriftlig besked om hvad der mangler og hvordan brugeren kan rette op på fejlene.

GJORT: alle evaluerings resultater skal udskrives til konsollen.

GJORT: Hvis formen evaluer korrekt, skal den fjernes, og der skal vises en besked med ordlyden "tak for informationen" i stedet.

GJORT: Din form skal styles så den ser "lækker" ud. Se HER for eksempler.

GJORT: Hvis du bliver færdig, så skal funktionaliteten skrives om til "realtime" evaluering af alle felter, med samme feedback.

HUSK!
Inden du går igang, skal du opsætte en GitHub page, til din main branch, og aflevere et link til dit Repository. */


/* The following code is based on models found at 
https://www.w3resource.com/javascript-exercises/event/javascript-event-handling-exercise-4.php
and 
https://www.mailercheck.com/articles/email-validation-javascript
and additional sources
*/
const resForm = document.getElementById('reservationForm');
console.log(resForm);

const errorMesContainer = document.getElementById('errorMessageDiv');
console.log(errorMesContainer);

resForm.addEventListener('submit', (event) => {
    console.log('Brugeren trykkede på knappen Næste');

    errorMesContainer.innerHTML = '';

    const requiredFields = resForm.querySelectorAll('[required]');
    console.log(requiredFields);

    requiredFields.forEach((reqfield) => {
        /* trim() trims any leading or trailing spaces, so that an entry that only contains spaces is considered blank (empty) */
        if (reqfield.value.trim() === '') {
            console.log('Obligatorisk(e) felt(er) er ikke udfyldt(e)');

            const reqFieldName = reqfield.getAttribute('name');
            const errorMessageReq = document.createElement('p');
            /* the following is to insert the input's name (field name) in the error message */
            errorMessageReq.textContent = `Feltet ${reqFieldName} skal udfyldes.`;
            errorMesContainer.appendChild(errorMessageReq);

            // "Inside the event listener function, the default form submission behavior is prevented using event.preventDefault() to stop the form from being submitted and the page from being refreshed." https://www.w3resource.com/javascript-exercises/event/javascript-event-handling-exercise-4.php    
            /* Note: when I had event.preventDefault(); above all the ifs, like in the reference found, instead of under each condition in case of invalidity, the form did not get submitted even after validation. */
            event.preventDefault();
        } 
        // THE FOLLOWING WORKS AND SHOWS THAT CONSTANTS INSIDE OF CURLY BRACKETS ONLY APPLY TO CODE INSIDE OF THE CURLY BRACKETS, SO THEIR NAME CAN BE REUSED SOMEWHERE ELSE!
        // IS THERE A POINT IN HAVING AN ERROR MESSAGE FOR CORRECT ENTRY, THOUGH?
        else {
            console.log('Obligatorisk(e) felt(er) er udfyldt(e)');
  
            const errorMessageReq = document.createElement('p');
            errorMessageReq.textContent = '';
            errorMesContainer.appendChild(errorMessageReq);
        }
    });
    
    function validateNames(twocharnames) {
        const namePattern = /^[a-zA-Z.-\s]{2,}$/;
        return namePattern.test(twocharnames);
    }    

    const fieldsWithMinLengthTwo = resForm.querySelectorAll('.minLengthTwo');
    console.log(fieldsWithMinLengthTwo);

    fieldsWithMinLengthTwo.forEach((minlengthtwofield) => {
        if (!validateNames(minlengthtwofield.value)) {
            console.log('Minimumslængden er ikke nået, eller ugyldige tegn blev brugt');

            const minLengthTwoFieldName = minlengthtwofield.getAttribute('name');
            const errorMesMinLengthTwo = document.createElement('p');
            errorMesMinLengthTwo.textContent = `Værdien i feltet ${minLengthTwoFieldName} er ugyldig. Feltet er tomt, ugyldige tegn blev brugt, eller minimumslængden (2) er ikke nået.`;
            errorMesContainer.appendChild(errorMesMinLengthTwo);

            event.preventDefault();
        } 
        else {
            console.log('Minimumslængden er nået, og tegn er gyldige');

            const errorMesMinLengthTwo = document.createElement('p');
            errorMesMinLengthTwo.textContent = '';
            errorMesContainer.appendChild(errorMesMinLengthTwo);
        }
    });

    function validateAddresses(fivecharaddress) {
        const addressPattern = /^[a-zA-Z0-9.-\s]{5,}$/;
        return addressPattern.test(fivecharaddress);
    }    

    const fieldsWithMinLengthFive = resForm.querySelectorAll('.minLengthFive');
    console.log(fieldsWithMinLengthFive);

    fieldsWithMinLengthFive.forEach((minlengthfivefield) => {
        if (!validateAddresses(minlengthfivefield.value)) {
            console.log('Minimumslængden er ikke nået, eller ugyldige tegn blev brugt');

            const minLengthFiveFieldName = minlengthfivefield.getAttribute('name');
            const errorMesMinLengthFive = document.createElement('p');
            errorMesMinLengthFive.textContent = `Værdien i feltet ${minLengthFiveFieldName} er ugyldig. Feltet er tomt, ugyldige tegn blev brugt, eller minimumslængden (5) er ikke nået.`;
            errorMesContainer.appendChild(errorMesMinLengthFive);

            event.preventDefault();
        } 
        else {
            console.log('Minimumslængden er nået, og tegn er gyldige');

            const errorMesMinLengthFive = document.createElement('p');
            errorMesMinLengthFive.textContent = '';
            errorMesContainer.appendChild(errorMesMinLengthFive);
        }
    });

    function validatePostalCodes(fourcharpostcode) {
        const postCodePattern = /^[0-9]{4}$/;
        return postCodePattern.test(fourcharpostcode);
    }    

    const fieldsWithLengthFour = resForm.querySelectorAll('.LengthFour');
    console.log(fieldsWithLengthFour);

    fieldsWithLengthFour.forEach((lengthfourfield) => {
        if (!validatePostalCodes(lengthfourfield.value)) {
            console.log('Længden er for stor/lille, eller ugyldige tegn blev brugt');

            const lengthFourFieldName = lengthfourfield.getAttribute('name');
            const errorMesLengthFour = document.createElement('p');
            errorMesLengthFour.textContent = `Værdien i feltet ${lengthFourFieldName} er ugyldig. Feltet er tomt, ugyldige tegn blev brugt, eller længden er større eller mindre end 4.`;
            errorMesContainer.appendChild(errorMesLengthFour);

            event.preventDefault();
        } 
        else {
            console.log('Længden er korrekt (4), og tegn er gyldige');

            const errorMesLengthFour = document.createElement('p');
            errorMesLengthFour.textContent = '';
            errorMesContainer.appendChild(errorMesLengthFour);
        }
    });

    /* On some order pages, there would be more than 1 passport number, so an array is good to keep for such an example.
    In case browser doesn't make it impossible to enter more than 9 characters, length exceeded is mentioned in feedback. */
    function validatePassports(maxninecharpassport) {
        const passportPattern = /^[a-zA-Z0-9]{0,9}$/;
        return passportPattern.test(maxninecharpassport);
    }    

    const fieldsWithMaxLengthNine = resForm.querySelectorAll('.maxLengthNine');
    console.log(fieldsWithMaxLengthNine);
    
    fieldsWithMaxLengthNine.forEach((maxlengthninefield) => {
        if (!validatePassports(maxlengthninefield.value)) {
            console.log('Maximumslængden er overskredet, eller ugyldige tegn blev brugt');

            const maxLengthNineFieldName = maxlengthninefield.getAttribute('name');
            const errorMesMaxLengthNine = document.createElement('p');
            errorMesMaxLengthNine.textContent = `Værdien i feltet ${maxLengthNineFieldName} er ugyldig. Feltet er tomt, ugyldige tegn blev brugt, eller maximumslængden (9) er overskredet.`;
            errorMesContainer.appendChild(errorMesMaxLengthNine);

            event.preventDefault();
        } 
        else {
            console.log('Data indenfor maximumslængden, og tegn er gyldige');

            const errorMesMaxLengthNine = document.createElement('p');
            errorMesMaxLengthNine.textContent = '';
            errorMesContainer.appendChild(errorMesMaxLengthNine);
        }
    });
    
    /* Some forms could ask for multiple email addresses in case 1 turns out to give an undeliverable error, or some security purpose, so an array is good to keep for such an example. */
    function validateEmails(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
        }

    const emailFields = resForm.querySelectorAll('.emailInputs');
    console.log(emailFields);
    
    emailFields.forEach((emailfield) => {
        if (!validateEmails(emailfield.value)) {
            console.log('Tom felt, ugyldige tegn, eller minimumslængde ikke nået');

            const emailFieldName = emailfield.getAttribute('name');
            const errorMesEmail = document.createElement('p');
            errorMesEmail.textContent = `Værdien i feltet ${emailFieldName} er ugyldig. Feltet er tomt, ugyldige tegn blev brugt, eller minimumslængden er ikke nået.`;
            errorMesContainer.appendChild(errorMesEmail);

            event.preventDefault();
        } 
        else {
            console.log('Minimumslængden er nået, og tegn er gyldige');

            const errorMesEmail = document.createElement('p');
            errorMesEmail.textContent = '';
            errorMesContainer.appendChild(errorMesEmail);
        }
    });

    return true;
});

/* MAYBE TO DO:   
In Chrome, it is not possible to pick a date passed the max. date, but it may not be like that in all browsers... 
Problem: I don't know how to specify max date with a regular expression, and another solution than an arrow could be more appropriate since no more than a single birth date will ever be required. 
That is outside of the scope of the assignment, though! 
*/

