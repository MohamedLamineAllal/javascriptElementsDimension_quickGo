



/**
 * 
 */

// The two functions to get the screen width and Height (cross browser support)

function getScreenHeight() {
    return height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
}

function getScreenWidth() {
    return width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
}

