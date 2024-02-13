const projectContact = {

    contactPage: function () {

        const formValidation = {

            validate: function () {

                const form_contact = document.getElementById("form_contact");

                if(form_contact) {

                    const name = document.getElementById("name");
                    const email = document.getElementById("email");
                    const country = document.getElementById("message");

                    function checkForm() {

                        const name_val = name.value.trim();
                        const email_val = email.value.trim();
                        const message_val = message.value.trim();

                        let hasError = false;

                        // name
                        if(name_val === '') {
                            setErrorForInput(name, 'This field should not be empty');
                            hasError = true;
                        } else if (name_val.length < 2) {
                            setErrorForInput(name, 'First Name must be at least 2 characters');
                            hasError = true;
                        } else if (!isName(name_val)) {
                            setErrorForInput(name, 'Must not contain special characters: @\/:*?"<>|');
                            hasError = true;
                        } else {
                            setSuccessForInput(name);
                        }

                        // email
                        if(email_val === '') {
                            setErrorForInput(email, 'This field should not be empty');
                            hasError = true;
                        } else if (!isNormalEmail(email_val)) {
                            setErrorForInput(email, 'Enter a valid email address');
                            hasError = true;
                        } 
                        else {
                            setSuccessForInput(email);
                        }

                        // message
                        if(message_val === '') {
                            setErrorForInput(message, 'This field should not be empty');
                            hasError = true;
                        } else {
                            setSuccessForInput(message);
                        }

                        if(!hasError) {

                            form_contact.classList.add("submitting");
                            
                            alert("SUCCESS");
                        }
                    }

                    form_contact.addEventListener("submit", function(e) {
                        e.preventDefault();
                        checkForm();
                    });
                }
            }

        }

        function isNormalEmail(email) {
            return /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/.test(email);
        }
        function isName(name) {
            return /^[A-Za-z' .-]+$/.test(name);
        }

        function setErrorForInput(input, text) {
            const inputWrap = input.parentElement;
            const errorText = inputWrap.querySelector('.input-error');
            // const inputField = inputWrap.querySelector('.input-field');
            inputWrap.classList.remove("success");
            inputWrap.classList.add("error");
            errorText.innerHTML = `<svg id="error_black_24dp" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16">
            <path id="Path_7397" data-name="Path 7397" d="M0,0H16V16H0Z" fill="none"/>
            <path id="Path_7398" data-name="Path 7398" d="M8.794,2a6.794,6.794,0,1,0,6.794,6.794A6.8,6.8,0,0,0,8.794,2Zm.679,10.191H8.115V10.832H9.474Zm0-2.718H8.115V5.4H9.474Z" transform="translate(-0.794 -0.794)" fill="#dc3545"/>
        </svg>` + text;

        }
        function setSuccessForInput(input) {
            const inputWrap = input.parentElement;
            const errorText = inputWrap.querySelector('.input-error');
            // const inputField = inputWrap.querySelector('.input-field');
            inputWrap.classList.remove("error");
            inputWrap.classList.add("success");
            errorText.innerHTML = '';
        }

        formValidation.validate();
    },
}

window.addEventListener("DOMContentLoaded", (event) => {
    projectContact.contactPage();
});