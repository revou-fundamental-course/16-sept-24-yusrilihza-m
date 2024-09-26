let indexSlide = 1;
showSlide(1);

function nextSlide(n){
  showSlide(indexSlide += n);
}

function showSlide(index){
  let listImage = document.getElementsByClassName('myslides');
  console.log(indexSlide);
  

  if (index > listImage.length) indexSlide = 1

  let i = 0;
  while(i < listImage.length){
  listImage[i].style.display = 'none';
  i++;
  }
  listImage[indexSlide - 1].style.display = 'block';
  console.log(indexSlide);
}
setInterval(() => nextSlide(1), 2000)