// diposit + balance-------------------------------->

const dipositbutton = document.getElementById("dipositbutton");
dipositbutton.addEventListener("click", function () {
    const dipositinput = document.getElementById('dipositinput');
    const dipositnum = dipositinput.value;
    const final = parseFloat(dipositnum);

    const showdiposit = document.getElementById("diposittotal");
    const showditex = showdiposit.innerText;
    const showdinu = parseFloat(showditex);
    const intotal = showdinu + final;

    const balance1 = document.getElementById('balance');
    const bate = balance1.innerText;
    const banum = parseFloat(bate);
    const batotal = banum + final;
    balance1.innerText = batotal;

    showdiposit.innerText = intotal;
    dipositinput.value = '';

})

// withdrow - balance-------------------------->

document.getElementById("Withdrow").addEventListener("click", function () {
    const withdrow = document.getElementById("Withdrowinput");
    const wittex = parseFloat(withdrow.value);

    const withdrowtotal = document.getElementById('Withdrowaria');
    const total = parseFloat(withdrowtotal.innerText);

    const maintotao = total + wittex;
    withdrowtotal.innerText = maintotao;

    const balance1 = document.getElementById('balance');
    const bate = parseFloat(balance1.innerText);

    const minas = bate - wittex;
    balance1.innerText = minas;
    withdrow.value = '';
})