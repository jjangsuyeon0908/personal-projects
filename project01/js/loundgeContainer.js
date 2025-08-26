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
      oneStepMenuToggle[1].setAttribute('src', `img/header/pmIcon_plus.png`);

      key4 = 0;
    }

    twoStepMenuBox[0].classList.add('openBox-ani')
    oneStepMenu[1].style.backgroundColor = '#f98b96'
    oneStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_minus.png`);

    key1 = 1;

  } else if (key1 === 1) {

    if (key2 === 1) {
      threeStepMenu[0].classList.remove('openBox-ani')
      threeStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_plus.png`)

      key2 = 0;
    }
    if (key3 === 1) {
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

    if (key3 === 1) {

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

    if (key2 === 1) {
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

    if (key1 === 1) {

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
    oneStepMenuToggle[0].setAttribute('src', `img/header/pmIcon_plus.png`)

    key1 = 0;
  }

  if (key4 === 1) {
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

//기본
const arrImgSrc = [];
const arrImgAlt = [];

//더 보기 버튼 클릭하면 나오는 li
const arrImgAlt1 = [];
const arrImg1 = [];

for (let i = 0; i < sec1UlLi.length; i++) {
  arrImgSrc.push(`img/loundge/instagram/instagram_${i}.jpg`);
  arrImgAlt.push(`instagram_${i}`);
  
  
  sec1UlLiImg[i].setAttribute('src', arrImgSrc[i])
  sec1UlLiImg[i].setAttribute('alt', arrImgAlt[i])
  
}


// VIEW GALLERY 버튼 클릭하면 li 9개 추가로 보이도록 하기



const viewCon = document.querySelector('.view-con');
const viewGallery = viewCon.querySelector('.view-con button');
//const oneClickImgTag = [];

const arrImgSrc1 = [];
viewGallery.addEventListener('click', e => {
  
  for (let i = 0; i < sec1UlLi.length; i++) {
    
    //li 9개 만들어서 css 넣고 ul의 자식으로 넣기
    const liTag = document.createElement('li');
    liTag.classList.add('liTag-click');
    sec1Ul.appendChild(liTag);


    //img 9개 만들어서 css 넣기
    const imgTag = document.createElement('img');
    imgTag.classList.add('imgTag-click');


    //src, alt 속성 만들어서 imgTag에 넣어주기
    document.createAttribute('src');
    document.createAttribute('alt');

    imgTag.setAttributeNode(document.createAttribute('src'));
    imgTag.setAttributeNode(document.createAttribute('alt'));


    //imgTag에 class 속성 추가하기(class가 oneClick인 것만 배열로 만들기 위해)
    const classAttr=document.createAttribute('class'); //class 속성 생성
    imgTag.setAttributeNode(classAttr); //imgTag에 속성 추가
    imgTag.setAttribute('class', 'oneClick'); //.imgTag -> class명을 oneClick으로 설정


    //arrImg의 각 src, alt 배열 안에 값 넣기
    arrImgSrc1.push(`img/loundge/instagram/instagram_${i+10}.jpg`);
    arrImgAlt1.push(`instagram_${i+10}`);


    //9개의 imgTag를 oneClickImgTag라는 배열로 만들기
    //const oneClickImgTag = [];
    //oneClickImgTag.push(imgTag)

    //imgTag에 src, alt 값 넣기
    imgTag.setAttribute('src', arrImgSrc1[i]);
    imgTag.setAttribute('alt', arrImgAlt1[i]);


    liTag.appendChild(imgTag);

    //div 9개 만들어서 class 넣고 li의 자식으로 넣기
    const divTag = document.createElement('div');
    divTag.classList.add('divTag-click');
    liTag.appendChild(divTag);


    //p태그 9개 만들어서 class 넣고 div의 자식으로 넣기
    const pTag = document.createElement('p');
    pTag.classList.add('pTag-click');
    divTag.appendChild(pTag);

    //p태그 안에 innerText 넣기
    pTag.innerText='⠀ 💗 로즈 앰플 네이버 체험단 💗 ⠀ 로즈 앰플의 빛나는 수분광채를 가장 먼저 만나볼 수 있는 기회 ! ⠀ 를 준비했었는데요? ⠀ 3000명 수량이 홍보도 전에 전체 품절되었습니다 🥺 ⠀ 오픈 당일 오전 전체 수량 ❕조기 품절❕되어버린 마몽드 신제품 #로즈하이드라글로리앰플 ⠀ 촉촉히 차오르는 수분광채를 만나기 위해서 ⠀ 마몽드 스마트스토어 알림설정🔔 놓치지 마세요 😘 ⠀ (속닥속닥) 인스타 팔로워분들께만 드리는 힌트 💭 3월 28일, 마몽드 스마트 스토어 주목하세요! (비밀)'
  }
});





//========================================================================================================
/*section1*/

//li 클릭하면 팝업창 뜨게 하기

const popUp = document.querySelector('.pop-up');
const popCon = popUp.querySelector('.pop-con');
const leftCon = popCon.querySelector('.left-con');
const leftConImg = leftCon.querySelector('.left-con img');
const rightCon = popCon.querySelector('.right-con');
const rightConTop = rightCon.querySelector('.top-con');
const mainContent = rightConTop.querySelector('.main-content');
const mainContentP = mainContent.querySelector('p');

const rightConBottom = rightCon.querySelector('.bottom-con');
const closeCon = rightConBottom.querySelector('.close-con');
const closeBtn = closeCon.querySelector('button');



//li 클릭하면 li 아래 img의 src, alt값 가져오기
sec1Ul.addEventListener('click', e => {

  const eTarget = e.target; //img 또는 p태그
  const eTargetLi = eTarget.parentElement; //li

  console.log(eTargetLi)

  const imgSrc = eTargetLi.children[0].getAttribute('src');
  const imgAlt = eTargetLi.children[0].getAttribute('alt');
  const imgTxt = eTargetLi.children[1].children[0].innerText;

  leftConImg.setAttribute('src', imgSrc);
  leftConImg.setAttribute('alt', imgAlt);
  mainContentP.innerText = imgTxt;

  popUp.style.display = 'flex';
  popUp.classList.add('popup-ani');


});




//팝업창 다시 끄기
closeBtn.addEventListener('click', e => {
  popUp.classList.remove('popup-ani');
});










































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