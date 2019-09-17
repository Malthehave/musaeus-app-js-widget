var script = document.currentScript ||
/*Polyfill*/ Array.prototype.slice.call(document.getElementsByTagName('script')).pop();
var params = (script.getAttribute('plugin-data') || '').split(/, */);

url = "https://musaeus-app.herokuapp.com/" + params[0]; // Set the url

// Function to add a script to the dom
function addScript(src, callback) {
    var s = document.createElement('script'); // Create our script tag
    s.setAttribute('src', src); // Set the src attribute
    s.onload = callback; // And call the callback when it has been loaded
    document.body.appendChild(s); // And finaly append it to to body
}

// The main function
document.addEventListener('DOMContentLoaded', (event) => {
    // DOM Should be ready
    addScript('https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.1/iframeResizer.min.js', main);
    function main() {
        var widget_link, iframe, i, widget_links; // Declare our variables
        widget_links = document.getElementById('poll-app-widget'); // This is our widget class div, that we need to append our iframe to
        for (i = 0; i <= Object.keys(widget_links).length; i++) { // We make a for loop if we have mutiple widgets to add an iframe to
            widget_link = widget_links; // We make sure we're adding to the correct widget class
            iframe = document.createElement('iframe'); // Let's create our iframe
            iframe.setAttribute('src', url); // The website to use in the Iframe
            iframe.setAttribute('id', 'frame' + i); // Set a unique id
            iframe.setAttribute('frameborder', '0'); // Here we make the border = 0
            iframe.setAttribute('scrolling', 'no'); // Make sure the iframe can't be scrolled
            iframe.setAttribute('allowfullscreen', 'true'); // Set the allow fulscreen to true. Used for the video
            iframe.setAttribute('style', 'min-width: 100%; max-width: 200px; width: 800px; min-height: 100%; border: none; margin: auto; display: table; !important;');
            widget_link.parentNode.replaceChild(iframe, widget_link); // And now we replace the old child with our new one (the iframe)
            iFrameResize({ log: false, bodyMargin: '60px' }, '#frame' + i) // And we use Iframe Resizer library to determine the height

        }
    }
});