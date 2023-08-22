let btn = document.getElementById("mainBtn");
btn.addEventListener('click', function onClick(event) {
    const backgroundColor = document.body.style.backgroundColor;

    if (backgroundColor === 'black'){
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        btn.style.color = 'black';
    }else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        btn.style.color = 'black';
    }
})

let minbtn = document.getElementById("mainMinBtn");
minbtn.addEventListener('click', function onClick(event) {
    const fontSize = document.body.style.fontSize;

    if (fontSize === '16px'){
        document.body.style.fontSize = '-2';
    }
})
