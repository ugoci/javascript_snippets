let maxbtn = document.getElementById("mainMaxBtn");
maxbtn.addEventListener('click', function onClick(event) {
    let fontSize = document.body.style.fontSize;

    if (fontSize){
        document.body.style.fontSize = '1.5rem';
    }else {
        document.body.style.fontSize = '1rem';
    }
})
