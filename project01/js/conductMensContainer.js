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

let searchKey = 0;

/*header gnb에 mouseover시 search하단메뉴 사라지게*/
gnb.addEventListener('mouseover', e => {

  if (searchKey === 1) {

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
searchBtmCloseBtn.addEventListener('click', e => {

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

const topArrow = document.querySelector('.topArrow');



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

    if (key4 === 1) {
      twoStepMenuBox[1].classList.remove('openBox-ani')

      oneStepMenu[4].style.backgroundColor = '#ffffff'
      oneStepMenu[4].children[0].children[0].style.color = ' #000000'
      oneStepMenuToggle[1].setAttribute('src', `img/header/pmIcon_plus.png`);

      key4 = 0;
    }

    twoStepMenuBox[0].classList.add('openBox-ani')
    oneStepMenu[1].style.backgroundColor = ' #161616'
    oneStepMenu[1].children[0].children[0].style.color = ' #ffffff'
    oneStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_minus_white.png`);

    key1 = 1;

  } else if (key1 === 1) {

    if (key2 === 1) {
      threeStepMenu[0].classList.remove('openBox-ani')
      threeStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_plus_white.png`)

      key2 = 0;
    }
    if (key3 === 1) {
      threeStepMenu[1].classList.remove('openBox-ani')
      threeStepMenuToggle[1].setAttribute('src', `img/header/pmIcon_plus_white.png`)

      key3 = 0;
    }

    twoStepMenuBox[0].classList.remove('openBox-ani')
    oneStepMenu[1].style.backgroundColor = '#ffffff'
    oneStepMenu[1].children[0].children[0].style.color = ' #000000'
    oneStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_plus.png`)

    key1 = 0;

  }

});


//제품유형별 클릭하면 하위 메뉴 나오게 하기 (토글키)
twoStepMenuConduct[0].addEventListener('click', e => {

  if (key2 === 0) {

    if (key3 === 1) {
      threeStepMenu[1].classList.remove('openBox-ani')
      threeStepMenuToggle[1].setAttribute('src', `img/header/pmIcon_plus_white.png`)

      key3 = 0;
    }

    threeStepMenu[0].classList.add('openBox-ani')
    threeStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_minus_white.png`);

    key2 = 1;


  } else if (key2 === 1) {

    threeStepMenu[0].classList.remove('openBox-ani')
    threeStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_plus_white.png`)

    key2 = 0;

  }

});


//피부고민별 클릭하면 하위 메뉴 나오게 하기 (토글키)
twoStepMenuConduct[1].addEventListener('click', e => {

  if (key3 == 0) {

    if (key2 === 1) {
      threeStepMenu[0].classList.remove('openBox-ani')
      threeStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_plus_white.png`)

      key2 = 0;
    }

    threeStepMenu[1].classList.add('openBox-ani')
    threeStepMenuToggle[1].setAttribute('src', `img/header/pmIcon_minus_white.png`);

    key3 = 1;

  } else if (key3 == 1) {

    threeStepMenu[1].classList.remove('openBox-ani')
    threeStepMenuToggle[1].setAttribute('src', `img/header/pmIcon_plus_white.png`)

    key3 = 0;

  }
});



//메뉴 중 브랜드 클릭하면 하위 메뉴 나오게 하기 (토글키)
oneStepMenu[4].addEventListener('click', e => {

  if (key4 === 0) {

    if (key1 === 1) {
      twoStepMenuBox[0].classList.remove('openBox-ani')
      oneStepMenu[1].style.backgroundColor = '#ffffff'
      oneStepMenu[1].children[0].children[0].style.color = ' #000000'
      oneStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_plus.png`)

      key1 = 0;
    }

    twoStepMenuBox[1].classList.add('openBox-ani')

    oneStepMenu[4].style.backgroundColor = ' #161616'
    oneStepMenu[4].children[0].children[0].style.color = ' #ffffff'
    oneStepMenuToggle[1].setAttribute('src', `img/header/pmIcon_minus_white.png`);

    key4 = 1;

  } else if (key4 === 1) {

    twoStepMenuBox[1].classList.remove('openBox-ani')

    oneStepMenu[4].style.backgroundColor = '#ffffff'
    oneStepMenu[4].children[0].children[0].style.color = ' #000000'
    oneStepMenuToggle[1].setAttribute('src', `img/header/pmIcon_plus.png`);

    key4 = 0;

  }

});



//메뉴 클릭시 모바일gnb가 나오게
mMenu.addEventListener('click', () => {

  if (searchKey === 1) {

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

  topArrow.style.display='none';
  mGnb.style.left = '0%'

  mBody.style.overflow = 'hidden';
  mBody.style.height = '100%';
});


//X버튼 누르면 모바일 gnb창 닫히게
mCloseBtn.addEventListener('click', e => {
  mGnb.style.left = '-100%'

  mBody.style.overflow = '';
  mBody.style.height = '';

  if (key1 === 1) {
    twoStepMenuBox[0].classList.remove('openBox-ani')
    oneStepMenu[1].style.backgroundColor = '#ffffff'
    oneStepMenu[1].children[0].children[0].style.color = ' #000000'
    oneStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_plus.png`)

    key1 = 0;
  }

  if (key4 === 1) {
    twoStepMenuBox[1].classList.remove('openBox-ani')

    oneStepMenu[4].style.backgroundColor = '#ffffff'
    oneStepMenu[4].children[0].children[0].style.color = ' #000000'
    oneStepMenuToggle[1].setAttribute('src', `img/header/pmIcon_plus.png`);

    key4 = 0;
  }

  topArrow.style.display='block';
})




//========================================================================================================
/*section1*/


//li에 img 넣기

const conductCon = document.querySelector('.conduct-con');
const conductConUl = conductCon.querySelector('ul');
const conductConUlLi = conductConUl.querySelectorAll('li');
const pictureConImg = document.querySelectorAll('.picture-con img');



const arrImgSrc = [];
const arrImgAlt = [];


for (let i = 0; i < conductConUlLi.length; i++) {
  arrImgSrc.push(`img/mens/mens_${i}.jpg`);
  arrImgAlt.push(`mens_${i}`);


  pictureConImg[i].setAttribute('src', arrImgSrc[i])
  pictureConImg[i].setAttribute('alt', arrImgAlt[i])

};



//하트 누르면 빨간 하트, 한 번 더 누르면 다시 빈 하트 되도록 하기 (토글키)
const heart = document.querySelectorAll('.heart')
const heartImg = document.querySelectorAll('.heart img')

const bool = [];

for (let i = 0; i < conductConUlLi.length; i++) {
  bool.push(false);
}

conductConUl.addEventListener('click', e => {

  e.preventDefault();
  e.stopPropagation();

  const eTarget = e.target;
  //console.log(eTarget);

  heartImg.forEach((el, idx) => {
    if (eTarget === el) {
      //console.log(el,idx)
      //console.log(bool[idx])
      //console.log(!bool[idx])
      //console.log(bool[idx]=!bool[idx]);
      //console.log(bool[idx])
      //console.log(bool)

      bool[idx] = !bool[idx];
      console.log(bool[idx])

      if (bool[idx]) {
        el.setAttribute('src', `img/mens/heart_1.png`)
        el.setAttribute('alt', `mens_1`)
      } else {
        el.setAttribute('src', `img/mens/heart_0.png`)
        el.setAttribute('alt', `mens_0`)
      }
      //if(bool[idx] == false){

      //  el.setAttribute('src', `img/mens/heart_1.png`)
      //  el.setAttribute('alt', `mens_1`)

      //}else if(bool[idx] == true){

      //  el.setAttribute('src', `img/mens/heart_0.png`)
      //  el.setAttribute('alt', `mens_0`)

      //}
    }
  })
})




//topArrow 만들기==================================================

//const topArrow = document.querySelector('.topArrow');

window.addEventListener('scroll', () => {

  const topScroll = document.documentElement.scrollTop;
  //console.log(topScroll)
  if (topScroll > 150) {
    topArrow.classList.add('topArrow-ani')
  } else {
    topArrow.classList.remove('topArrow-ani')

  }

});


//arrow버튼 누르면 스크롤 맨 위로 가기
function goToTop() {
  document.documentElement.scrollTop = 0;
}

topArrow.addEventListener('click', goToTop)
































//하트채우기 예제
//const bool=[];

//for(let i=0; i<4;i++){
//  bool.push(false);
//}

//const box=document.querySelector('.box')
//const boxDiv = document.querySelectorAll('.box div')

//box.addEventListener('click', e=>{
//  const eTarget=e.target;

//  boxDiv.forEach((el,idx)=>{
//    if(el==eTarget){
//      console.log(el,idx)
//      console.log(bool[idx])
//      console.log(!bool[idx])
//      console.log(bool[idx]=!bool[idx]);
//      console.log(bool[idx])
//      console.log(bool)
//    }
//  })
//})



////상품 상세페이지 만들 때 참고하기!
//const arrSrc = [];
//const arrAlt = [];
////const arrPTxt = [];

//let liStr = ``;

//for (let i = 0; i < 16; i++) {
//  arrSrc.push(`img/skinCare/skinCare_${i}.jpg`);
//  arrAlt.push(`skinCare_${i}`);
//  //arrPTxt.push(`Lorem ipsum dolor sit amet consectetur`);

//  liStr += `
//  <img src="${arrSrc[i]}" alt="${arrAlt[i]}">
//  <div class="desc">
//    <p>${arrPTxt}</p>
//  </div>`;
//}

//sec1Ul.innerHTML = liStr;