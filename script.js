function createGrid() {
    const main = document.createElement('main');
    const body = document.querySelector('body');

    for (let i = 0 ; i < 16 ; i++) {
        const div = document.createElement('div')
        div.classList.add("item");
        main.appendChild(div);
    };

    main.classList.add("grid-container")

    body.appendChild(main);
};