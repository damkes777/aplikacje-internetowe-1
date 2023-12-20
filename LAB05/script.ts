// const msg: string = "Hello!";
// alert(msg);

function loadStyle(filename: string): void
{
    const head: HTMLHeadElement = document.getElementsByTagName("head")[0];
    const oldStyle: Element | null = document.querySelector("head link[href*='style/style']");

    if (oldStyle != null) {
        head.removeChild(oldStyle);
    }

    const newStyle: HTMLElement = document.createElement("link");

    newStyle.setAttribute("rel", "stylesheet");
    newStyle.setAttribute("type", "text/css");
    newStyle.setAttribute("href", filename);

    head.appendChild(newStyle);
}


const styleOne: string = "style/style1.css";
const styleTwo: string = "style/style2.css";

const styles: string[] = [styleOne, styleTwo];

function styleLink(styles: string[]): void
{
    const styleDiv: HTMLElement | null = document.getElementById('otherStyle');

    for (let i = 0; i < styles.length; i++) {
        const styleButton: HTMLButtonElement = document.createElement('button');

        styleButton.textContent = "style" + i;
        styleButton.addEventListener('click', function () {
            loadStyle(styles[i]);
        })

        styleDiv?.appendChild(styleButton);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    styleLink(styles);
})