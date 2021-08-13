let imgsTatoo = document.getElementById('galleryImgs');
let galleryBtn = document.getElementById('gallery-btn');
let hiden = document.getElementById('gallery-no-btn');
hiden.classList.add('show');
console.log(imgsTatoo.children.length);

let imgsInVis = function(imgs) {
    for (let i = 6; i < imgs.children.length; i++)
    {imgs.children[i].classList.add('show')}
};
imgsInVis(imgsTatoo);

let imgsVis = function () {
    for (let i = 6; i < imgsTatoo.children.length; i++)
    {imgsTatoo.children[i].classList.remove('show')}
    galleryBtn.classList.add('show');
    hiden.classList.remove('show');

};

let hidenImgs = function(){
    for (let i = 6; i < imgsTatoo.children.length; i++)
    {imgsTatoo.children[i].classList.add('show')}
    galleryBtn.classList.remove('show');
    hiden.classList.add('show');

};


galleryBtn.addEventListener('click', imgsVis);
hiden.addEventListener('click', hidenImgs);
