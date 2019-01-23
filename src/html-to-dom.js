
function htmlToDOM(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default htmlToDOM;