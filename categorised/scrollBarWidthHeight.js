



/**
 * 
 */
// scroll bar width and height


function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    var body = document.body || document.getElementsByTagName('body')[0]
    body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);        

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}


function getScrollbarHeight() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.height = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    var body = document.body || document.getElementsByTagName('body')[0]    
    body.appendChild(outer);

    var heightNoScroll = outer.offsetHeight;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.height = "100%";
    outer.appendChild(inner);        

    var heightWithScroll = inner.offsetHeight;

    // remove divs
    outer.parentNode.removeChild(outer);

    return heightNoScroll - heightWithScroll;
}