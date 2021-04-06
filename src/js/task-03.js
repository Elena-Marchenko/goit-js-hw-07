const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesListEl = document.querySelector('#gallery');

imagesListEl.style.display = 'flex';
imagesListEl.style.alignItems = 'center';
imagesListEl.style.justifyContent = 'space-between';


const imagestListItemEl = images.map(image => {
    const imgItemEl = document.createElement('li');
    imgItemEl.insertAdjacentHTML(
        'afterbegin',
        `<img src='${image.url}' alt='${image.alt}' width='500px'>`,
    );
    imgItemEl.style.listStyle = 'none';
    return imgItemEl;
});

imagesListEl.append(...imagestListItemEl);
console.log(imagestListItemEl);