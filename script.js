function createGrid() {
    const main = document.createElement('main');
    const body = document.querySelector('body');

    for (let i = 0 ; i < 16 ; i++) {
        const div = document.createElement('div')
        main.appendChild(div);
    };

    body.appendChild(main);
};