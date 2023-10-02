
// 1.변수
const slide_w = document.querySelector('#banner_slide');
const slide = document.querySelector('.slide');
const slide_img = document.querySelectorAll('.slide li');

const img_n = slide_img.length;//목록개수
const img_w = 100;//이미지 한장 너비
const m = 0;//마진값
const slide_view = 1;//보여줄 개수 

let count = 0;

// 2.너비구하기
slide.style.width = (img_w+m)*img_n - m +'%';


// 3.함수작성
function mslide(n){
  slide.style.left = (img_w+m)* -n + '%';
  count = n;
  console.log(slide.style.left);
  console.log(count);
}

// 4.3초마다 움직이기
let Timer = setInterval(function(){
  if(count < img_n - slide_view){
    mslide(count+1);
  }else{
    mslide(0);
  }
},4000);