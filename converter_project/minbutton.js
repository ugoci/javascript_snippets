let minbtn = document.getElementById("mainMinBtn");
minbtn.addEventListener('click', function onClick(event) {
    let fontSize = document.body.style.fontSize;

    if (fontSize){
        document.body.style.fontSize = '0.75rem';
    }else {
        document.body.style.fontSize = '1rem';
    }
})


