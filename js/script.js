document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.querySelector('.container');

    function addBoxEventListener(box) {
        box.addEventListener('click', () => {
            if (box.classList.contains('active')) {
                box.classList.remove('active');
                setTimeout(() => {
                    container.prepend(box);
                }, 400);
            } else {
                box.classList.add('active');
                setTimeout(() => {
                    container.appendChild(box);
                }, 400);
            }
            console.log("ciao");
        });
    }

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        addBoxEventListener(box);
    });

    var val = localStorage.getItem('punteggio');
    if (val === null) {
        val = 0;
    } else {
        val = parseInt(val);
    }
    var h3 = document.getElementById("point");
    h3.textContent = val;

    function showSelectedAlbums() {
        const checkboxes = document.querySelectorAll('#checkbox input[type="checkbox"]');
        const selectedAlbums = [];
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                selectedAlbums.push(checkbox.nextElementSibling.textContent);
            }
        });
        container.innerHTML = '';
        selectedAlbums.forEach(album => {
            const box = document.createElement('div');
            box.classList.add('box');

            const img = document.createElement('img');
            img.src = `img/${album.replace(/ /g, '_').replace(/>/g, '_').replace(/\?/g, 'xxx')}.jpg`;

            const title = document.createElement('div');
            title.classList.add('title');

            const h6 = document.createElement('h6');
            h6.textContent = album;

            title.appendChild(h6);
            box.appendChild(img);
            box.appendChild(title);
            container.appendChild(box);

            addBoxEventListener(box);
        });
        list();
    }

    function list() {
        const list = document.querySelector(".list");
        list.classList.toggle("hidden");
    }

    function number() {
        alert("Per ora questa funzione non è ancora disponibile, mi dispiace bro");
    }

    window.showSelectedAlbums = showSelectedAlbums;
    window.list = list;
    window.number = number;
    window.add = add;
    window.remove = remove;

    var h3 = document.getElementById("point");
    h3.textContent = val;
});

var val = 0;

function add() {
    var h3 = document.getElementById("point");

    val++;
    h3.textContent = val;

    updateScore();
}

function remove() {
    var h3 = document.getElementById("point");

    val--;
    h3.textContent = val;

    updateScore();
}

function updateScore() {
    localStorage.setItem('punteggio', val);
}