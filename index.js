main();

function main()
{
    console.log('In main........');
    const divMain = document.getElementById('divMain');
    createImgAnchor(divMain);
}

function createImgAnchor(divMain)
{
    console.log('In createImgAnchor.........');
    const imgAnchor = document.createElement('a');
    imgAnchor.text = 'click me';

    divMain.appendChild(imgAnchor);

    imgAnchor.addEventListener('click', () => {showImg();});


}


function showImg()
{
    console.log('In showImg.........');
    
    divImg = document.createElement('div');
    divImg.style.top = divImg.style.left = 0;
    divImg.style.height = divImg.style.width = '50%'

    img = document.createElement('img');
    img.style.top = img.style.left = 0;
    img.style.height = img.style.width = '50%'
    img.src = '111.jpg';
    divImg.appendChild(img);

    document.body.appendChild(divImg);
}