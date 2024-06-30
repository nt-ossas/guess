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
        });
    }

    function addYoursEventListener(yours) {
        yours.addEventListener('click', (event) => {
            event.stopPropagation(); 
    
            const yoursAll = document.querySelectorAll(".yours");
            yoursAll.forEach(element => {
                if (element !== yours) {
                    element.classList.remove("selected");
                }
            });
    
            const isSelected = yours.classList.contains("selected");
    
            if (isSelected) {
                yours.classList.remove("selected");
                const selection = document.getElementById("select-container");
                selection.innerHTML = '';
            } else {
                yours.classList.add("selected");
                console.log("ciao");
    
                const box = yours.closest('.box');
    
                const clonedBox = box.cloneNode(true);
                clonedBox.classList.remove('active');
    
                const selection = document.getElementById("select-container");
                selection.innerHTML = '';
                const h3 = document.createElement("h3");
                h3.textContent = "Il tuo album";
                selection.appendChild(h3);
                selection.appendChild(clonedBox);
            }
        });
    }

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        addBoxEventListener(box);
    });

    var val;
    if (isNaN(val)) {
        val = 0;
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
            if (album == "did you know that there's...") {
                h6.classList.add("long");
            }
            h6.textContent = album;

            const yours = document.createElement('div');
            yours.classList.add("yours");
            yours.innerHTML = '<i class="fa-solid fa-star"></i>'

            title.appendChild(h6);
            box.appendChild(img);
            box.appendChild(title);
            box.appendChild(yours);
            container.appendChild(box);

            addBoxEventListener(box);
            addYoursEventListener(yours);
        });
        list();
    }

    function list() {
        const list = document.querySelector(".list");
        list.classList.toggle("hidden");
    }
    
    window.showSelectedAlbums = showSelectedAlbums;
    window.list = list;
    window.number = number;
    window.add = add;
    window.remove = remove;
    window.selectAll = selectAll;
    window.deselectAll = deselectAll;

    var h3 = document.getElementById("point");
    h3.textContent = val;
});

var val = 0;

function add() {
    var h3 = document.getElementById("point");

    val++;
    h3.textContent = val;
}

function remove() {
    var h3 = document.getElementById("point");

    val--;
    h3.textContent = val;
}

function selectAll() {
    const checkboxes = document.querySelectorAll('#checkbox input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
    showSelectedAlbums();
}

function deselectAll() {
    const checkboxes = document.querySelectorAll('#checkbox input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

window.onload = function(){
    showSelectedAlbums();
    list();
}