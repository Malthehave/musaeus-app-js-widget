// Function to add a script to the dom
function addScript(src, callback) {
    const s = document.createElement('script'); // Create our script tag
    s.setAttribute('src', src); // Set the src attribute
    s.onload = callback; // And call the callback when it has been loaded
    document.body.appendChild(s); // And finaly append it to to body
}

// The main function
document.addEventListener('DOMContentLoaded', (event) => {
    // DOM should be ready
    addScript('https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.1/iframeResizer.min.js', main); // Add the iframeresizer libary
    function main() {
        let iframe, plugin_service, styles; // Declare our variables
        const elms = document.querySelectorAll("[id='musaeus-app-widget']"); // Get all musaeus-app-widget id's
        for (let i = 0; i < elms.length; i++) { // Loop over each id
            plugin = elms[i].dataset.plugin; // Get the correct plugin data
            if (typeof(plugin) == 'undefined') { break } // If no plugin data is specified break the loop 
            url = "http://127.0.0.1:8000/" + plugin; // Set the url for the iframe
            iframe = document.createElement('iframe'); // Let's create our iframe
            iframe.setAttribute('src', url); // The website to use in the Iframe
            iframe.setAttribute('id', 'frame' + i); // Set a unique id
            iframe.setAttribute('frameborder', '0'); // Here we make the border = 0
            iframe.setAttribute('scrolling', 'no'); // Make sure the iframe can't be scrolled
            plugin_service = plugin.split('/')[0]; // Here we access the specific plugin service
            if (plugin_service == 'video') { // We need diferent atributes for the video plugin
                styles = 'min-width: 100%; min-height: 100%; border: none; margin: 0 auto; display: table; !important;'
                iframe.setAttribute('allowFullScreen', ''); // Set the allow fulscreen to true. Used for the video
            } else {
                styles = 'min-width: 100%; min-height: 100%; border: none; margin: 0 auto; border-radius: 12px; box-shadow: 0 2px 5px rgba(0, 0, 0, .1); display: table; !important;'
            }
            iframe.setAttribute('style', styles); // Assign the styles that we declared eariler to the iframe tag
            elms[i].parentNode.replaceChild(iframe, elms[i]); // And now we replace the old child with our new one (the iframe)
            iFrameResize({ log: false, bodyMargin: '10px' }, '#frame' + i); // And we use Iframe Resizer library to determine the height
        }
    }
});