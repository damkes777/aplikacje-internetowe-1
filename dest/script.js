"use strict";
// const msg: string = "Hello!";
// alert(msg);
function loadStyle(filename) {
    const head = document.getElementsByTagName("head")[0];
    const oldStyle = document.querySelector("head link[href*='style/style']");
    if (oldStyle != null) {
        head.removeChild(oldStyle);
    }
    const newStyle = document.createElement("link");
    newStyle.setAttribute("rel", "stylesheet");
    newStyle.setAttribute("type", "text/css");
    newStyle.setAttribute("href", filename);
    head.appendChild(newStyle);
}
const styleOne = "style/style1.css";
const styleTwo = "style/style2.css";
const styles = [styleOne, styleTwo];
function styleLink(styles) {
    const styleDiv = document.getElementById('otherStyle');
    for (let i = 0; i < styles.length; i++) {
        const styleButton = document.createElement('button');
        styleButton.textContent = "style" + i;
        styleButton.addEventListener('click', function () {
            loadStyle(styles[i]);
        });
        styleDiv === null || styleDiv === void 0 ? void 0 : styleDiv.appendChild(styleButton);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    styleLink(styles);
});
