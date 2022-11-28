import './style.css'
let draggableModalZIndex = 1;

const draggable = elem => {
    const draggableModalWindow = document.createElement('div');
    draggableModalWindow.appendChild(elem);
    draggableModalWindow.className = 'draggable'
    draggableModalWindow.style.zIndex = `${draggableModalZIndex++}`;

    document.body.appendChild(draggableModalWindow);

    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    const modalWindowWidth = draggableModalWindow.offsetWidth;
    const modalWindowHeight = draggableModalWindow.offsetHeight;

    const modalWindowLeft = Math.max((windowWidth - modalWindowWidth) / 2, 0);
    const modalWindowTop = Math.max((windowHeight - modalWindowHeight) / 2, 0);

    draggableModalWindow.style.left = `${modalWindowLeft}px`;
    draggableModalWindow.style.top = `${modalWindowTop}px`;

    draggableModalWindow.onmousedown = e => {
        const box = elem.getBoundingClientRect();

        const shiftX = e.pageX - box.left;
        const shiftY = e.pageY - box.top;

        document.onmousemove = e => {
            draggableModalWindow.style.left = `${e.pageX - shiftX}px`;
            draggableModalWindow.style.top = `${e.pageY - shiftY}px`;
        }

        document.onmouseup = () => {
            document.onmousemove = null;
        }
    }
    
}

const shawDraggableRectangle = () => {
    const contentElem = document.createElement('div');
    contentElem.className = 'rectangle';
    contentElem.style.backgroundColor = `#${((1 << 24) * Math.random() | 0).toString(16)}`;

    draggable(contentElem);
}

export default shawDraggableRectangle;