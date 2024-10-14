// Create HTML elements
const html = document.createElement('html');
html.setAttribute('lang', 'en');

const head = document.createElement('head');
const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

const title = document.createElement('title');
title.textContent = 'Popup Animation Example';

const style = document.createElement('style');
style.textContent = `
    #button {
        padding: 10px 20px;
        font-size: 16px;
        transition: transform 0.2s;
    }
    #button:hover {
        transform: scale(1.1);
    }
`;

const body = document.createElement('body');
const div = document.createElement('div');
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
div.style.height = '100vh';

const button = document.createElement('button');
button.id = 'button';
button.textContent = 'Hover over me!';

// Append elements
head.appendChild(metaCharset);
head.appendChild(metaViewport);
head.appendChild(title);
head.appendChild(style);

div.appendChild(button);
body.appendChild(div);

document.documentElement.appendChild(head);
document.documentElement.appendChild(body);
