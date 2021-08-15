const button = document.getElementById('button');
button.addEventListener("click", function () {
    const email1 = document.getElementById('email');
    const email2 = email1.value;
    const password1 = document.getElementById('password');
    const password2 = password1.value;

    if (email2 == 'ruhi' && password2 == 345) {
        window.location.href = "banking-page.html"

    }

})
