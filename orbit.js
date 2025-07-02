const ORBIT_TIME = 300;

/**
 * Start the orbit transition and animation, which causes the selected content to be displayed
 * @param {HTMLElement} elem 
 * @param {Event} event
 */
function startOrbit(elem, event) {
    const menu = document.getElementById('orbit-menu');
    elem.classList.add("orbiting");
    menu.classList.add("hiding");
    event.preventDefault();
    const headerToShow = elem.textContent.trim().toLowerCase().replaceAll(/\s+/g, '-');
    const content = document.getElementById(headerToShow); // TODO get from elem

    //window.location.hash = headerToShow;
    //window.isReadingContent = true;
    //window.clickedContent = headerToShow;
    if (content) {
        content.classList.remove("pre-hidden");
    }

    setTimeout(() => {
        elem.classList.remove("orbiting");
        menu.classList.add("post-hidden");
     }, ORBIT_TIME)
}

/**
 * Reset orbits to the default position (i.e. main menu)
 */
function resetOrbits() {
    const menu = document.getElementById('orbit-menu');
    menu.classList.remove("hiding");
    menu.classList.remove("post-hidden");
    const contents = document.getElementsByClassName('content');
    for (const content of contents) {
        content.classList.add("pre-hidden");
    }
}

window.addEventListener('popstate', function(event) {
    console.log(window.location.hash);
}, false);