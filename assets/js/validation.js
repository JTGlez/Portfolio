document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el mail antes de la validación

    var email = document.getElementById('email').value;


    // Valida el email con regex
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email === "") {
        alert("Please enter your email.");
        return false;
    } else if(!email.match(emailPattern)) {
        alert("Please enter a valid email.");
        return false;
    }

    console.log("Validado");
    document.getElementById('form').submit()
});
