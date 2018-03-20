/** 
 * 
*/
// height width of a dom element 

var domEl = document.createElement('div')


// height width with padding border and scrollbar
var elHeightPaddingBorderScrollBar = domEl.offsetHeight
var elWidthPaddingBorderScrollBar = domEl.offsetWidth

//height width with padding
var elHeightPadding = domEl.clientHeight
var elWidthPadding = domEl.clientWidth


// height width no border no padding  [work with inline] (but scroll bar included) IE9+
function getDomElHeight_noBorderNoPadding(element) {
    var cs = getComputedStyle(element);
    var paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
    var borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);

    return element.offsetHeight - paddingY - borderY;
}

function getDomElWidth_noBorderNoPadding(element) {
    var cs = getComputedStyle(element);
    var paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
    var borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);

    return element.offsetWidth - paddingX - borderX;
}


//height width no border no padding no scroll bar (don't work with inline element (must be inline-block)) IE9+
function getDomElHeight_noBorderNoPaddingNoScrollBar(element) {
    var computedStyle = getComputedStyle(element);
    elementHeight = element.clientHeight; // height with padding

    elementHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);

    return elementHeight
}

function getDomElWidth_noBorderNoPaddingNoScrollBar(element) {
    var computedStyle = getComputedStyle(element);
    elementWidth = element.clientWidth; // width with padding

    elementWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);

    return elementWidth
}

// you can create another version if needed even i don't see why but if! you just calculate the scrollbar height or width depend on what you want. and substract it too in the function that support inline element! see scrollBarWidthHeight.js for that or getScrollbarWidth() function bellow (if you are in all.js file)