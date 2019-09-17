var script = document.currentScript ||
 Array.prototype.slice.call(document.getElementsByTagName('script')).pop();
var params = (script.getAttribute('plugin-data') || '').split(/, */);

url = "https://musaeus-app.herokuapp.com/" + params[0]; 

function addScript(src, callback) {
    var s = document.createElement('script'); 
    s.setAttribute('src', src); 
    s.onload = callback; 
    document.body.appendChild(s); 
}

document.addEventListener('DOMContentLoaded', (event) => {
    addScript('https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.1/iframeResizer.min.js', main);
    function main() {
        var widget_link, iframe, i, widget_links; 
        widget_links = document.getElementById('poll-app-widget'); 
        for (i = 0; i <= Object.keys(widget_links).length; i++) { 
            widget_link = widget_links; 
            iframe = document.createElement('iframe'); 
            iframe.setAttribute('src', url); 
            iframe.setAttribute('id', 'frame' + i); 
            iframe.setAttribute('frameborder', '0'); 
            iframe.setAttribute('scrolling', 'no'); 
            iframe.setAttribute('allowfullscreen', 'true'); 
            iframe.setAttribute('style', 'min-width: 100%; max-width: 200px; width: 800px; min-height: 100%; border: none; margin: auto; display: table; !important;');
            widget_link.parentNode.replaceChild(iframe, widget_link); 
            iFrameResize({ log: false, bodyMargin: '60px' }, '#frame' + i) 

        }
    }
});