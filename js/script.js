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

    function addTitleEventListener(title) {
        title.addEventListener('click', (event) => {
            event.stopPropagation();

            const allTitles = document.querySelectorAll(".title h6");
            allTitles.forEach(element => {
                if (element !== title) {
                    element.classList.remove("selected");
                    const icon = element.querySelector('i');
                    if (icon) {
                        icon.remove();
                    }
                }
            });

            const isSelected = title.classList.contains("selected");

            if (isSelected) {
                title.classList.remove("selected");
                const icon = title.querySelector('i');
                if (icon) {
                    icon.remove();
                }
                const selection = document.getElementById("select-container");
                selection.innerHTML = `<div class="box">
                                            <img src="">
                                            <div class="title">
                                                <h6>Seleziona il tuo album cliccando sul nome</h6>
                                            </div>
                                        </div>`;
            } else {
                title.classList.add("selected");
                const icon = document.createElement('i');
                icon.classList.add('fa-solid', 'fa-star');
                title.appendChild(icon);

                const box = title.closest('.box');
                const clonedBox = box.cloneNode(true);
                clonedBox.classList.remove('active');

                const selection = document.getElementById("select-container");
                selection.innerHTML = '';
                selection.appendChild(clonedBox);
            }
        });
    }

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        addBoxEventListener(box);
        const title = box.querySelector('.title h6');
        addTitleEventListener(title);
    });

    // Caricare il valore di val dal localStorage
    var val = parseInt(localStorage.getItem('val'), 10);
    if (isNaN(val) || val === 0) {
        val = 0;
    }

    var h3 = document.getElementById("point");
    h3.textContent = val;

    function showSelectedAlbums() {
        const checkboxes = document.querySelectorAll('#checkbox input[type="checkbox"]');
        const selectedAlbums = [];
        checkboxes.forEach((checkbox) => {
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

            title.appendChild(h6);
            box.appendChild(img);
            box.appendChild(title);
            container.appendChild(box);

            addBoxEventListener(box);
            addTitleEventListener(h6);
        });
        list();
    }

    function list() {
        const list = document.querySelector(".list");
        list.classList.toggle("hidden");
    }

    window.showSelectedAlbums = showSelectedAlbums;
    window.list = list;
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
    localStorage.setItem('val', val);
}

function remove() {
    var h3 = document.getElementById("point");

    val--;
    h3.textContent = val;
    localStorage.setItem('val', val);
}

function selectAll() {
    const checkboxes = document.querySelectorAll('#checkbox input[type="checkbox"]');
    const its = document.querySelectorAll('.it #checkbox input[type="checkbox"]');
    const ens = document.querySelectorAll('.en #checkbox input[type="checkbox"]');
    const it = document.getElementById('it');
    const en = document.getElementById('en');
    
    checkboxes.forEach(checkbox => {
        if (en.classList.contains('online')) {
            if (checkbox.closest('.en')) {
                checkbox.checked = false;
            } else {
                checkbox.checked = true;
            }
        } else if (it.classList.contains('online')) {
            if (checkbox.closest('.it')) {
                checkbox.checked = false;
            } else {
                checkbox.checked = true;
            }
        } else {
            checkbox.checked = true;
        }
    });

    showSelectedAlbums();
}

function deselectAll() {
    const checkboxes = document.querySelectorAll('#checkbox input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

window.onload = function() {
    showSelectedAlbums();
    list();
    var storedVal = parseInt(localStorage.getItem('val'), 10);
    if (!isNaN(storedVal) && storedVal !== 0) {
        val = storedVal;
        var h3 = document.getElementById("point");
        h3.textContent = val;
    }
    const selection = document.getElementById("select-container");
    selection.innerHTML = `<div class="box">
                                <img src="">
                                <div class="title">
                                    <h6>Seleziona il tuo album cliccando sul nome</h6>
                                </div>
                            </div>`;
}

function en(){
    const en = document.getElementById("en");
    var ens = document.querySelectorAll(".en");

    en.classList.toggle("online");
    ens.forEach(element => {
        element.classList.toggle("hidden");
    });
}

function it(){
    const it = document.getElementById("it");
    var its = document.querySelectorAll(".it");

    it.classList.toggle("online");
    its.forEach(element => {
        element.classList.toggle("hidden");
    });
}