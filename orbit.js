// Time in ms that the orbit animation takes
const ORBIT_TIME = 300;
// Class to add to the planet to trigger start animation
const PLANET_ORBIT_START_CLASS = "orbiting";
// The menu element that contains the planets
const ORBIT_MENU_ID = "orbit-menu";
// Class to add to flag things as disappearing
const HIDING_CLASS = "hiding";
// Class that flags elements as hidden by default on page load
const PRE_HIDDEN_CLASS = "pre-hidden";
// Class that marks an element as having been hidden
const POST_HIDDEN_CLASS = "post-hidden";
// Class used for the actual page content containers
const CONTENTS_CLASS = "content";
// Class used to flag elements that should be reappearing
const REAPPEAR_CLASS = "re-showing";

/**
 * Start the orbit transition and animation, which causes the selected content to be displayed
 * @param {HTMLElement} elem the clicked element
 * @param {Event} event the onclick event
 */
function startOrbit(elem, event) {
    const menu = document.getElementById(ORBIT_MENU_ID);
    elem.classList.add(PLANET_ORBIT_START_CLASS);
    menu.classList.add(HIDING_CLASS);
    event.preventDefault();
    const headerToShow = elem.textContent.trim().toLowerCase().replaceAll(/\s+/g, '-');
    const content = document.getElementById(headerToShow); // TODO get from elem

    // TODO this isn't working well, but could be done in the future
    //window.location.hash = headerToShow;
    //window.isReadingContent = true;
    //window.clickedContent = headerToShow;
    if (content) {
        content.classList.remove(PRE_HIDDEN_CLASS);
    }

    setTimeout(() => {
        elem.classList.remove(PLANET_ORBIT_START_CLASS);
        menu.classList.add(POST_HIDDEN_CLASS);
     }, ORBIT_TIME)
}

/**
 * Reset orbits to the default position (i.e. main menu)
 */
function resetOrbits() {
    const menu = document.getElementById(ORBIT_MENU_ID);
    menu.classList.remove(HIDING_CLASS);
    menu.classList.remove(POST_HIDDEN_CLASS);
    menu.classList.add(REAPPEAR_CLASS);
    setTimeout(() => menu.classList.remove(REAPPEAR_CLASS), ORBIT_TIME);
    const contents = document.getElementsByClassName(CONTENTS_CLASS);
    for (const content of contents) {
        content.classList.add(PRE_HIDDEN_CLASS);
    }
}
