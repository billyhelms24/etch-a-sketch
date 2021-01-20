function createGrid() {
    const main = document.createElement('main');
    const body = document.querySelector('body');

    for (let i = 0 ; i < 16 ; i++) {
        const div = document.createElement('div')
        div.classList.add("grid-item");
        div.textContent = i + 1;
        main.appendChild(div);
    };

    main.classList.add("grid-container")

    body.appendChild(main);
};