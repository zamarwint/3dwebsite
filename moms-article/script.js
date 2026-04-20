const button = document.getElementById('dark');
const article = document.getElementById('article');
const image = document.getElementById('image');
const title = document.getElementById('title');
const para1 = document.getElementById('para1');
const para2 = document.getElementById('para2');

function darkMode() {
    button.classList.toggle('change1');
    article.classList.toggle('change2');

    title.classList.toggle('change3');
    para1.classList.toggle('change3');
    para2.classList.toggle('change3');

    image.classList.toggle('change4');
}