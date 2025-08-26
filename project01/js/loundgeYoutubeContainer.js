'use strict';

//======================================================================================================

/*header시작*/
const header = document.querySelector('.header');
const nav = header.querySelector('.nav');
const gnb = nav.querySelector('.gnb');
const gnbUl = gnb.querySelector('.gnb>ul');
const gnbUlLi = gnbUl.querySelectorAll('.gnb>ul>li');
const gnbUlLiA = gnb.querySelectorAll('.gnb>ul>li>a');
const logo = nav.querySelector('h1.logo img');
const rightMenuLi = document.querySelectorAll('.right-menu>ul>li');
const rightMenuLiImg = document.querySelector('.right-menu>ul>li.search>a>img');
const rightMenuSub = document.querySelectorAll('.sub-outline');
const searchCon = document.querySelector('.sub-outline .search-con');
const searchBtm = searchCon.querySelector('.search-btm');
const searchBtmCloseBtn = searchBtm.querySelector('button');
const mMenu = document.querySelector('.left-menu span.menu>img');

let searchKey=0;

/*header gnb에 mouseover시 search하단메뉴 사라지게*/
gnb.addEventListener('mouseover', e=>{

  if(searchKey === 1){

    rightMenuSub[4].classList.remove('searchBox-ani')
    header.classList.remove('headerColor-ani')
    logo.setAttribute('src', `img/header/logo_1.png`)
    mMenu.setAttribute('src', `img/header/m_menu_1.png`)

    gnbUlLiA.forEach(el => {
      el.style.color = '#31271d'
    });

    rightMenuLi[0].children[0].children[0].setAttribute('src', `img/header/right_menu_login_1.png`)
    rightMenuLi[1].children[0].children[0].setAttribute('src', `img/header/right_menu_findastore_1.png`)
    rightMenuLi[2].children[0].children[0].setAttribute('src', `img/header/right_menu_search_1.png`)

    searchKey = 0;

  }

});

/*header 바로가기 중 search 메뉴 토글키*/
rightMenuLiImg.addEventListener('click', (e) => {

  e.stopPropagation();
  e.preventDefault();
  
  if (searchKey === 0) {

    rightMenuSub[4].classList.add('searchBox-ani')
    header.classList.add('headerColor-ani')
    logo.setAttribute('src', `img/header/logo_1.png`)

    gnbUlLiA.forEach(el => {
      el.style.color = '#31271d'
    });

    rightMenuLi[0].children[0].children[0].setAttribute('src', `img/header/right_menu_login_1.png`)
    rightMenuLi[1].children[0].children[0].setAttribute('src', `img/header/right_menu_findastore_1.png`)
    rightMenuLi[2].children[0].children[0].setAttribute('src', `img/header/right_menu_search_1.png`)

    searchKey = 1;

  } else if (searchKey === 1) {

    rightMenuSub[4].classList.remove('searchBox-ani')
    searchKey = 0;
  }
});

/*닫기 누르면 검색창 닫히게*/
searchBtmCloseBtn.addEventListener('click', e=>{

  e.stopPropagation();
  e.preventDefault();

  rightMenuSub[4].classList.remove('searchBox-ani')
  header.classList.remove('headerColor-ani')
  logo.setAttribute('src', `img/header/logo_1.png`)
  mMenu.setAttribute('src', `img/header/m_menu_1.png`)

  gnbUlLiA.forEach(el => {
    el.style.color = '#31271d'
  });

  rightMenuLi[0].children[0].children[0].setAttribute('src', `img/header/right_menu_login_1.png`)
  rightMenuLi[1].children[0].children[0].setAttribute('src', `img/header/right_menu_findastore_1.png`)
  rightMenuLi[2].children[0].children[0].setAttribute('src', `img/header/right_menu_search_1.png`)

  searchKey = 0;
});


//반응형모바일메뉴시작===========================================================

const mGnb = document.querySelector('.m-gnb');
const mBody = document.querySelector('body');

const topMenu = document.querySelector('.top-menu');
const mCloseBtn = topMenu.querySelector('button.m-gnb-closeBtn');

const ctrMenu = document.querySelector('.ctr-menu');
const ctrMenuUl = ctrMenu.querySelector('ul');
const ctrMenuUlLi = ctrMenuUl.querySelectorAll('li');

const oneStepMenu = ctrMenu.querySelectorAll('.outline.first>ul.main');
const oneStepMenuToggle = ctrMenu.querySelectorAll('.outline.first>ul.main>li img');

const twoStepMenu = ctrMenu.querySelectorAll('.outline.first>ul.sub.first>.outline.second>ul.types');
const twoStepMenuBox = ctrMenu.querySelectorAll('.outline.first>ul.sub.first');
const twoStepMenuConduct = ctrMenu.querySelectorAll('.outline.first>ul.sub.first>.outline.second>ul.types.conduct');
const twoStepMenuBrand = ctrMenu.querySelectorAll('.outline.first>ul.sub.first>.outline.second>ul.types.brand');
const twoStepMenuToggle = ctrMenu.querySelectorAll('.outline.first>ul.sub.first>.outline.second>ul.types>li img');

const threeStepMenu = ctrMenu.querySelectorAll('.outline.first>ul.sub.first>.outline.second>ul.sub.second');
const threeStepMenuToggle = ctrMenu.querySelectorAll('.outline.first>ul.sub.first>.outline.second>ul.types.conduct img');



//a태그 이동방지
oneStepMenu[1].children[0].children[0].addEventListener('click', e => {
  e.preventDefault();
});



//스킨케어 클릭하면 하위 메뉴 나오게 하기 (토글키)
let key1 = 0;
let key2 = 0;
let key3 = 0;
let key4 = 0;

oneStepMenu[1].addEventListener('click', e => {

  e.stopPropagation();
  e.preventDefault();

  if (key1 === 0) {

    if(key4 === 1){
      twoStepMenuBox[1].classList.remove('openBox-ani')

      oneStepMenu[4].style.backgroundColor = '#ffffff'
      oneStepMenuToggle[1].setAttribute('src', `img/header/pmIcon_plus.png`);
  
      key4 = 0;
    }

    twoStepMenuBox[0].classList.add('openBox-ani')
    oneStepMenu[1].style.backgroundColor = '#f98b96'
    oneStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_minus.png`);

    key1 = 1;

  } else if (key1 === 1) {

    if(key2 ===1){
      threeStepMenu[0].classList.remove('openBox-ani')
      threeStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_plus.png`)
  
      key2 = 0;
    }
    if(key3 ===1){
      threeStepMenu[1].classList.remove('openBox-ani')
      threeStepMenuToggle[1].setAttribute('src', `img/header/pmIcon_plus.png`)
  
      key3 = 0;
    }

    twoStepMenuBox[0].classList.remove('openBox-ani')
    oneStepMenu[1].style.backgroundColor = '#ffffff'
    oneStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_plus.png`)

    key1 = 0;

  }

});


//제품유형별 클릭하면 하위 메뉴 나오게 하기 (토글키)
twoStepMenuConduct[0].addEventListener('click', e => {

  if (key2 === 0) {

    if(key3 === 1){

      threeStepMenu[1].classList.remove('openBox-ani')
      threeStepMenuToggle[1].setAttribute('src', `img/header/pmIcon_plus.png`)
  
      key3 = 0;
    }

    threeStepMenu[0].classList.add('openBox-ani')
    threeStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_minus.png`);

    key2 = 1;


  } else if (key2 === 1) {

    threeStepMenu[0].classList.remove('openBox-ani')
    threeStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_plus.png`)

    key2 = 0;

  }

});


//피부고민별 클릭하면 하위 메뉴 나오게 하기 (토글키)
twoStepMenuConduct[1].addEventListener('click', e => {

  if (key3 == 0) {

    if(key2 === 1){
      threeStepMenu[0].classList.remove('openBox-ani')
      threeStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_plus.png`)
  
      key2 = 0;
    }

    threeStepMenu[1].classList.add('openBox-ani')
    threeStepMenuToggle[1].setAttribute('src', `img/header/pmIcon_minus.png`);

    key3 = 1;

  } else if (key3 == 1) {

    threeStepMenu[1].classList.remove('openBox-ani')
    threeStepMenuToggle[1].setAttribute('src', `img/header/pmIcon_plus.png`)

    key3 = 0;

  }
});



//메뉴 중 브랜드 클릭하면 하위 메뉴 나오게 하기 (토글키)
oneStepMenu[4].addEventListener('click', e => {

  if (key4 === 0) {

    if(key1 === 1){

      twoStepMenuBox[0].classList.remove('openBox-ani')
      oneStepMenu[1].style.backgroundColor = '#ffffff'
      oneStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_plus.png`)
  
      key1 = 0;
    }

    twoStepMenuBox[1].classList.add('openBox-ani')

    oneStepMenu[4].style.backgroundColor = '#f98b96'
    oneStepMenuToggle[1].setAttribute('src', `img/header/pmIcon_minus.png`);

    key4 = 1;

  } else if (key4 === 1) {

    twoStepMenuBox[1].classList.remove('openBox-ani')

    oneStepMenu[4].style.backgroundColor = '#ffffff'
    oneStepMenuToggle[1].setAttribute('src', `img/header/pmIcon_plus.png`);

    key4 = 0;

  }

});



//메뉴 클릭시 모바일gnb가 나오게
mMenu.addEventListener('click', () => {

  if(searchKey === 1){

    rightMenuSub[4].classList.remove('searchBox-ani')
    header.classList.remove('headerColor-ani')
    logo.setAttribute('src', `img/header/logo_1.png`)
    mMenu.setAttribute('src', `img/header/m_menu_1.png`)

    gnbUlLiA.forEach(el => {
      el.style.color = '#31271d'
    });

    rightMenuLi[0].children[0].children[0].setAttribute('src', `img/header/right_menu_login_1.png`)
    rightMenuLi[1].children[0].children[0].setAttribute('src', `img/header/right_menu_findastore_1.png`)
    rightMenuLi[2].children[0].children[0].setAttribute('src', `img/header/right_menu_search_1.png`)

    searchKey = 0;

  }

  mGnb.style.left = '0%'

  mBody.style.overflow = 'hidden';
  mBody.style.height = '100%';
});


//X버튼 누르면 모바일 gnb창 닫히게
mCloseBtn.addEventListener('click', e => {
  mGnb.style.left = '-100%'

  mBody.style.overflow = '';
  mBody.style.height = '';

  if(key1 ===1){
    twoStepMenuBox[0].classList.remove('openBox-ani')
    oneStepMenu[1].style.backgroundColor = '#ffffff'
    oneStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_plus.png`)

    key1 = 0;
  }

  if(key4 === 1){
    twoStepMenuBox[1].classList.remove('openBox-ani')

    oneStepMenu[4].style.backgroundColor = '#ffffff'
    oneStepMenuToggle[1].setAttribute('src', `img/header/pmIcon_plus.png`);

    key4 = 0;
  }
})


//========================================================================================================
/*section1*/

//li에 img 넣기

const sec1 = document.querySelector('.section1');
const sec1Ul = sec1.querySelector('ul');
const sec1UlLi = sec1Ul.querySelectorAll('li');
const sec1UlLiImg = document.querySelectorAll('.section1 .sec-con>ul>li img')


const arrImgSrc = [];
const arrImgAlt = [];

const arrImgSrc1 = [];
const arrImgAlt1 = [];
const arrImg1 = [];

for (let i = 0; i < sec1UlLi.length; i++) {
  arrImgSrc.push(`img/loundge/youtube/youtube_${i}.jpg`);
  arrImgAlt.push(`youtube_${i}`);


  sec1UlLiImg[i].setAttribute('src', arrImgSrc[i])
  sec1UlLiImg[i].setAttribute('alt', arrImgAlt[i])

}



//VIEW GALLERY 버튼 클릭하면 li 9개 추가로 보이도록 하기
const viewCon = document.querySelector('.view-con');
const viewGallery = viewCon.querySelector('.view-con button');


viewGallery.addEventListener('click', e => {
  
  for (let i = 0; i < sec1UlLi.length; i++) {
    
    //li 9개 만들어서 css 넣고 ul의 자식으로 넣기
    const liTag = document.createElement('li');
    liTag.classList.add('liTag-click');
    sec1Ul.appendChild(liTag);

    //img 9개 만들어서 css 넣기
    const imgTag = document.createElement('img');
    imgTag.classList.add('imgTag-click');

    //liTag에 class 속성 추가하기(onclick 버튼 추가)
    const classAttr=document.createAttribute('onclick'); //class 속성 생성
    liTag.setAttributeNode(classAttr); //liTag에 속성 추가
    liTag.setAttribute('onclick', `goYutube${i+10}()`); //.liTag -> class명을 onClick으로 설정


    //src, alt 속성 만들어서 imgTag에 넣어주기
    document.createAttribute('src');
    document.createAttribute('alt');

    imgTag.setAttributeNode(document.createAttribute('src'));
    imgTag.setAttributeNode(document.createAttribute('alt'));


    //arrImg의 각 src, alt 배열 안에 값 넣기
    arrImgSrc1.push(`img/loundge/youtube/youtube_${i+10}.jpg`);
    arrImgAlt1.push(`youtube_${i+10}`);


    //imgTag에 src, alt 값 넣기
    imgTag.setAttribute('src', arrImgSrc1[i]);
    imgTag.setAttribute('alt', arrImgAlt1[i]);

    liTag.appendChild(imgTag);

    //div.desc태그 만들어서 li 자식으로 넣기
    const descTag = document.createElement('div');
    descTag.classList.add('desc-click');
    liTag.appendChild(descTag);


    //p태그 9개 만들어서 class 넣고 div의 자식으로 넣기
    const pTag = document.createElement('p');
    descTag.appendChild(pTag);

    //p태그 안에 innerText 넣기
    pTag.innerText='마몽드 Youtube 채널'
  }
});












//========================================================================================================
/*section1*/

function goYutube0(){
  window.location.href = 'https://www.youtube.com/watch?v=bz5cf1qPQCY';
}
function goYutube1(){
  window.location.href = 'https://www.youtube.com/watch?v=WR1OJ0493Ls';
}
function goYutube2(){
  window.location.href = 'https://www.youtube.com/watch?v=cxhNYTcJ9es';
}
function goYutube3(){
  window.location.href = 'https://www.youtube.com/watch?v=h4D6uxypdfg';
}
function goYutube4(){
  window.location.href = 'https://www.youtube.com/watch?v=3VzfYxj7Lo0';
}
function goYutube5(){
  window.location.href = 'https://www.youtube.com/watch?v=KUxTnDL-Sho';
}
function goYutube6(){
  window.location.href = 'https://www.youtube.com/watch?v=6KSXIcrxNiw';
}
function goYutube7(){
  window.location.href = 'https://www.youtube.com/watch?v=w2HTXimVrZk';
}
function goYutube8(){
  window.location.href = 'https://www.youtube.com/watch?v=JyNkqm8hNMY';
}
function goYutube9(){
  window.location.href = 'https://www.youtube.com/watch?v=G739m1oq5kM';
}
function goYutube10(){
  window.location.href = 'https://www.youtube.com/watch?v=PHF9H-sM2ps';
}
function goYutube11(){
  window.location.href = 'https://www.youtube.com/watch?v=pl3LRyXdm4E';
}
function goYutube12(){
  window.location.href = 'https://www.youtube.com/watch?v=JyNkqm8hNMY';
}
function goYutube13(){
  window.location.href = 'https://www.youtube.com/watch?v=JyNkqm8hNMY';
}
function goYutube14(){
  window.location.href = 'https://www.youtube.com/watch?v=JyNkqm8hNMY';
}
function goYutube15(){
  window.location.href = 'https://www.youtube.com/watch?v=JyNkqm8hNMY';
}
function goYutube16(){
  window.location.href = 'https://www.youtube.com/watch?v=bz5cf1qPQCY';
}
function goYutube17(){
  window.location.href = 'https://www.youtube.com/watch?v=WR1OJ0493Ls';
}
function goYutube18(){
  window.location.href = 'https://www.youtube.com/watch?v=pl3LRyXdm4E';
}

































////상품 상세페이지 만들 때 참고하기!
//const arrSrc = [];
//const arrAlt = [];
//const arrPTxt = [];

//let liStr = ``;

//for (let i = 0; i < 9; i++) {
//  arrSrc.push(`img/loundge/instagram/instagram_${i}.jpg`);
//  arrAlt.push(`instagram_${i}`);
//  arrPTxt.push(`Lorem ipsum dolor sit amet consectetur`);

//  liStr += `
//  <img src="${arrSrc[i]}" alt="${arrAlt[i]}">
//  <div class="desc">
//    <p>${arrPTxt}</p>
//  </div>`;
//}



//sec1Ul.innerHTML = liStr;