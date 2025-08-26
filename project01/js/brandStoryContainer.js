'use strict';

//header시작====================================================================

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


/*header gnb에 mouseover시 색상 변경*/
gnb.addEventListener('mouseover', (e) => {

  const topScroll = document.documentElement.scrollTop;

  if(searchKey === 1){

    if(topScroll > 0){
      header.style.backgroundColor = '#ffffff00'
      header.style.borderTop = '3px solid #ffffff00'
      header.style.transition = 'all 0.3s';
    }

    rightMenuSub[4].classList.remove('searchBox-ani')
    header.classList.remove('headerColor-ani')
    logo.setAttribute('src', `img/header/logo_0.png`)
    mMenu.setAttribute('src', `img/header/m_menu_0.png`)

    gnbUlLiA.forEach(el => {
      el.style.color = '#ffffff'
    });

    rightMenuLi[0].children[0].children[0].setAttribute('src', `img/header/right_menu_login_0.png`)
    rightMenuLi[1].children[0].children[0].setAttribute('src', `img/header/right_menu_findastore_0.png`)
    rightMenuLi[2].children[0].children[0].setAttribute('src', `img/header/right_menu_search_0.png`)

    searchKey = 0;

  }

  header.style.backgroundColor = '#ffffff'
  header.style.borderTop = '3px solid #f3acb3'

  //header.classList.add('headerColor-ani')

  logo.setAttribute('src', `img/header/logo_1.png`)

  gnbUlLiA.forEach(el => {
    el.style.color = '#31271d'
  })

  rightMenuLi[0].children[0].children[0].setAttribute('src', `img/header/right_menu_login_1.png`)
  rightMenuLi[1].children[0].children[0].setAttribute('src', `img/header/right_menu_findastore_1.png`)
  rightMenuLi[2].children[0].children[0].setAttribute('src', `img/header/right_menu_search_1.png`)

  mMenu.setAttribute('src', `img/header/m_menu_1.png`)
});



/*header gnb에 mouseout시 색상 변경*/
gnb.addEventListener('mouseout', (e) => {

  const topScroll = document.documentElement.scrollTop;

  if(topScroll === 0 && searchKey === 1){

    header.style.backgroundColor = '#ffffff00'
    header.style.borderTop = '3px solid #ffffff00'
  
    logo.setAttribute('src', `img/header/logo_1.png`)
  
    gnbUlLiA.forEach(el => {
      el.style.color = '#31271d'
    })
  
    rightMenuLi[0].children[0].children[0].setAttribute('src', `img/header/right_menu_login_1.png`)
    rightMenuLi[1].children[0].children[0].setAttribute('src', `img/header/right_menu_findastore_1.png`)
    rightMenuLi[2].children[0].children[0].setAttribute('src', `img/header/right_menu_search_1.png`)
  
    mMenu.setAttribute('src', `img/header/m_menu_1.png`)

  }else if(topScroll === 0 && searchKey === 0){


    header.style.backgroundColor = '#ffffff00'
    header.style.borderTop = '3px solid #ffffff00'
  
    logo.setAttribute('src', `img/header/logo_0.png`)
  
    gnbUlLiA.forEach(el => {
      el.style.color = '#ffffff'
    })
  
    rightMenuLi[0].children[0].children[0].setAttribute('src', `img/header/right_menu_login_0.png`)
    rightMenuLi[1].children[0].children[0].setAttribute('src', `img/header/right_menu_findastore_0.png`)
    rightMenuLi[2].children[0].children[0].setAttribute('src', `img/header/right_menu_search_0.png`)
  
    mMenu.setAttribute('src', `img/header/m_menu_0.png`)


  }else if(topScroll > 0){

    header.style.backgroundColor = '#ffffff'
    header.style.borderTop = '3px solid #f3acb3'
  
    logo.setAttribute('src', `img/header/logo_1.png`)
  
    gnbUlLiA.forEach(el => {
      el.style.color = '#31271d'
    })
  
    rightMenuLi[0].children[0].children[0].setAttribute('src', `img/header/right_menu_login_1.png`)
    rightMenuLi[1].children[0].children[0].setAttribute('src', `img/header/right_menu_findastore_1.png`)
    rightMenuLi[2].children[0].children[0].setAttribute('src', `img/header/right_menu_search_1.png`)
  
    mMenu.setAttribute('src', `img/header/m_menu_1.png`)

  }

});



/*header 바로가기 중 search 메뉴 토글키*/
rightMenuLiImg.addEventListener('click', (e) => {

  e.stopPropagation();
  e.preventDefault();

  const topScroll = document.documentElement.scrollTop;
  
  if (searchKey === 0) {
    
    if(topScroll > 0){
      header.style.backgroundColor = '#ffffff00'
      header.style.borderTop = '3px solid #ffffff00'
      header.style.transition = 'all 0.3s';

    }


    rightMenuSub[4].classList.add('searchBox-ani')
    header.classList.add('headerColor-ani')
    logo.setAttribute('src', `img/header/logo_1.png`)
    mMenu.setAttribute('src', `img/header/m_menu_1.png`)

    gnbUlLiA.forEach(el => {
      el.style.color = '#31271d'
    });

    rightMenuLi[0].children[0].children[0].setAttribute('src', `img/header/right_menu_login_1.png`)
    rightMenuLi[1].children[0].children[0].setAttribute('src', `img/header/right_menu_findastore_1.png`)
    rightMenuLi[2].children[0].children[0].setAttribute('src', `img/header/right_menu_search_1.png`)

    searchKey = 1;

  } else if (searchKey === 1) {

    if(topScroll > 0){
      header.style.backgroundColor = '#ffffff00'
      header.style.borderTop = '3px solid #ffffff00'
      header.style.transition = 'all 0.3s';
    }

    rightMenuSub[4].classList.remove('searchBox-ani')
    header.classList.remove('headerColor-ani')
    logo.setAttribute('src', `img/header/logo_0.png`)
    mMenu.setAttribute('src', `img/header/m_menu_0.png`)

    gnbUlLiA.forEach(el => {
      el.style.color = '#ffffff'
    });

    rightMenuLi[0].children[0].children[0].setAttribute('src', `img/header/right_menu_login_0.png`)
    rightMenuLi[1].children[0].children[0].setAttribute('src', `img/header/right_menu_findastore_0.png`)
    rightMenuLi[2].children[0].children[0].setAttribute('src', `img/header/right_menu_search_0.png`)

    searchKey = 0;
  }
});

/*닫기 누르면 검색창 닫히게*/
searchBtmCloseBtn.addEventListener('click', e=>{

  e.stopPropagation();
  e.preventDefault();

  const topScroll = document.documentElement.scrollTop;

  if(topScroll > 0){
    header.style.backgroundColor = '#ffffff00'
    header.style.borderTop = '3px solid #ffffff00'
    header.style.transition = 'all 0.3s';
  }

  rightMenuSub[4].classList.remove('searchBox-ani')
  header.classList.remove('headerColor-ani')
  logo.setAttribute('src', `img/header/logo_0.png`)
  mMenu.setAttribute('src', `img/header/m_menu_0.png`)

  gnbUlLiA.forEach(el => {
    el.style.color = '#ffffff'
  });

  rightMenuLi[0].children[0].children[0].setAttribute('src', `img/header/right_menu_login_0.png`)
  rightMenuLi[1].children[0].children[0].setAttribute('src', `img/header/right_menu_findastore_0.png`)
  rightMenuLi[2].children[0].children[0].setAttribute('src', `img/header/right_menu_search_0.png`)

  searchKey = 0;
});







/*scrollTop에서 마우스휠로 내려갈 때 header 색 변경*/
window.addEventListener('scroll', () => {
  
  const topScroll = document.documentElement.scrollTop;

  if (topScroll === 0) {

    if(searchKey === 1){
      rightMenuSub[4].classList.add('searchBox-ani')
      header.classList.add('headerColor-ani')
      logo.setAttribute('src', `img/header/logo_1.png`)
  
      gnbUlLiA.forEach(el => {
        el.style.color = '#31271d'
      });
  
      rightMenuLi[0].children[0].children[0].setAttribute('src', `img/header/right_menu_login_1.png`)
      rightMenuLi[1].children[0].children[0].setAttribute('src', `img/header/right_menu_findastore_1.png`)
      rightMenuLi[2].children[0].children[0].setAttribute('src', `img/header/right_menu_search_1.png`)

    }else{

      header.style.backgroundColor = '#ffffff00'
      header.style.borderTop = '3px solid #ffffff00'
      header.style.transition = 'all 0.2s';
  
      logo.setAttribute('src', `img/header/logo_0.png`)
  
      gnbUlLiA.forEach(el => {
        el.style.color = '#ffffff'
      });
  
      rightMenuLi[0].children[0].children[0].setAttribute('src', `img/header/right_menu_login_0.png`)
      rightMenuLi[1].children[0].children[0].setAttribute('src', `img/header/right_menu_findastore_0.png`)
      rightMenuLi[2].children[0].children[0].setAttribute('src', `img/header/right_menu_search_0.png`)
  
      mMenu.setAttribute('src', `img/header/m_menu_0.png`)
      
    }


  } else if(topScroll > 0){
    header.style.backgroundColor = '#ffffff'
    header.style.borderTop = '3px solid #f3acb3'
    header.style.transition = 'all 0.2s';

    logo.setAttribute('src', `img/header/logo_1.png`)

    gnbUlLiA.forEach(el => {
      el.style.color = '#31271d'
    });

    rightMenuLi[0].children[0].children[0].setAttribute('src', `img/header/right_menu_login_1.png`)
    rightMenuLi[1].children[0].children[0].setAttribute('src', `img/header/right_menu_findastore_1.png`)
    rightMenuLi[2].children[0].children[0].setAttribute('src', `img/header/right_menu_search_1.png`)

    mMenu.setAttribute('src', `img/header/m_menu_1.png`)
  }
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

  const topScroll = document.documentElement.scrollTop;

  if(searchKey === 1){

    if(topScroll > 0){
      header.style.backgroundColor = '#ffffff00'
      header.style.borderTop = '3px solid #ffffff00'
      header.style.transition = 'all 0.3s';
    }

    rightMenuSub[4].classList.remove('searchBox-ani')
    header.classList.remove('headerColor-ani')
    logo.setAttribute('src', `img/header/logo_0.png`)
    mMenu.setAttribute('src', `img/header/m_menu_0.png`)

    gnbUlLiA.forEach(el => {
      el.style.color = '#ffffff'
    });

    rightMenuLi[0].children[0].children[0].setAttribute('src', `img/header/right_menu_login_0.png`)
    rightMenuLi[1].children[0].children[0].setAttribute('src', `img/header/right_menu_findastore_0.png`)
    rightMenuLi[2].children[0].children[0].setAttribute('src', `img/header/right_menu_search_0.png`)

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
/*scroll 내릴 때 배경색 그라데이션 효과 주기 <- 어려우니까 일단 스킵...*/

//const sec3=document.querySelector('.section.sec3');
//const sec4=document.querySelector('.section.sec4');
//const sec5=document.querySelector('.section.sec5');
//const sec6=document.querySelector('.section.sec6');

//window.addEventListener('scroll',e=>{
//  const topScroll=document.documentElement.scrollTop;

//  console.log(topScroll)

//  if(topScroll > 1766){
//    //sec3.style.background='linear-gradient(#ff0000)'
//    sec3.classList.add('sec3-ani')
//  }
//});






//========================================================================================================
/*section2*/

const imgBoxCon = document.querySelector('.imgBox-con');
const btmCon = imgBoxCon.querySelector('.imgBox-con .btmCon');
const btmConUl = btmCon.querySelector('.imgBox-con .btmCon>ul');
const btmConUlLi = btmConUl.querySelectorAll('.imgBox-con .btmCon>ul>li');

const topCon = imgBoxCon.querySelector('.imgBox-con .topCon');
const topConImg = topCon.querySelector('.imgBox-con .topCon img');


//img 클릭 시 크게 보이도록

btmConUl.addEventListener('click', e => {
  const eTarget = e.target; //img
  const eCtarget = e.currentTarget; //ul

  btmConUlLi.forEach((el, idx) => {

    if (eTarget.parentElement === el) {
      const imgSrc = el.children[0].getAttribute('src');
      const imgAlt = el.children[0].getAttribute('alt');

      topConImg.setAttribute('src', imgSrc);
      topConImg.setAttribute('alt', imgAlt);


      el.classList.add('on2')
    } else {
      el.classList.remove('on2')
    }
  });

});




//========================================================================================================
/*section5*/


const mainGallery = document.querySelector('.main-gallery');
const gallery = mainGallery.querySelector('.main-gallery .gallery');
const galleryUl = gallery.querySelector('.main-gallery .gallery>ul');
const galleryUlLi = galleryUl.querySelectorAll('.main-gallery .gallery>ul>li');

const centerBtn = mainGallery.querySelector('.main-gallery .center-btn');
const arrows = centerBtn.querySelectorAll('span.arrow');

const bcon = mainGallery.querySelector('.main-gallery .bcon');
const items = bcon.querySelector('.main-gallery .bcon .items');
const itemsUl = items.querySelector('.main-gallery .bcon .items>ul');
const itemsUlLi = itemsUl.querySelectorAll('.main-gallery .bcon .items>ul>li');




//양쪽 버튼 클릭시 1칸씩 li가 옆으로 움직이도록 하기
let i = -1;

centerBtn.addEventListener('click', e => {
  const eTarget = e.target; //img
  const eTargetP = e.target.parentElement; //span

  //console.log(eTargetP, arrows)

  arrows.forEach((el, idx) => {

    if (eTargetP === el) {

      if (idx === 0) {

        if (i <= 0) i = galleryUlLi.length - 3;
        //console.log(i, idx)

        i--;

        const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
        const goto = (-i * gap) + 'px';

        //console.log(gap, goto)

        gallery.style.left = goto;
        gallery.style.transition = 'all 0.5s'

        itemsUlLi.forEach((el2, idx2) => {
          if (i === idx2) {

            el2.classList.add('on3');

          } else {
            el2.classList.remove('on3');
          }
        });

      } else if (idx === 1) {

        if (i >= 9) i = -1;
        console.log(i, idx)

        i++;

        const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
        const goto = (-i * gap) + 'px';

        console.log(gap, goto)

        gallery.style.left = goto;
        gallery.style.transition = 'all 0.5s'

        itemsUlLi.forEach((el2, idx2) => {
          if (i === idx2) {
            el2.classList.add('on3');
          } else {
            el2.classList.remove('on3');
          }
        });

      }
    }
  });

});


//====================================================================================================
//오토갤러리 반응형으로 만들기..

var mqlDeskTop = matchMedia("screen and (max-width: 1920px)");
var mqlTablet = matchMedia("screen and (max-width: 1019px)");
var mqlMoblie = matchMedia("screen and (max-width: 680px)");

//mqlTablet.media // -> "screen and (max-width: 1019px)"
//mqlTablet.matches // -> true




if (mqlDeskTop.matches) {
  
  //양쪽 버튼 클릭시 1칸씩 li가 옆으로 움직이도록 하기
let i = -1;

centerBtn.addEventListener('click', e => {
  const eTarget = e.target; //img
  const eTargetP = e.target.parentElement; //span

  //console.log(eTargetP, arrows)

  arrows.forEach((el, idx) => {

    if (eTargetP === el) {

      if (idx === 0) {

        if (i <= 0) i = galleryUlLi.length - 3;
        //console.log(i, idx)

        i--;

        const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
        const goto = (-i * gap) + 'px';

        //console.log(gap, goto)

        gallery.style.left = goto;
        gallery.style.transition = 'all 0.5s'

        itemsUlLi.forEach((el2, idx2) => {
          if (i === idx2) {

            el2.classList.add('on3');

          } else {
            el2.classList.remove('on3');
          }
        });

      } else if (idx === 1) {

        if (i >= 9) i = -1;
        console.log(i, idx)

        i++;

        const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
        const goto = (-i * gap) + 'px';

        console.log(gap, goto)

        gallery.style.left = goto;
        gallery.style.transition = 'all 0.5s'

        itemsUlLi.forEach((el2, idx2) => {
          if (i === idx2) {
            el2.classList.add('on3');
          } else {
            el2.classList.remove('on3');
          }
        });

      }
    }
  });

});
  
}else if(mqlTablet.matches){
  
  console.log('데스크탑버전입니다')

  //양쪽 버튼 클릭시 1칸씩 li가 옆으로 움직이도록 하기
  let i = -1;

  centerBtn.addEventListener('click', e => {
    const eTarget = e.target; //img
    const eTargetP = e.target.parentElement; //span

    //console.log(eTargetP, arrows)

    arrows.forEach((el, idx) => {

      if (eTargetP === el) {

        if (idx === 0) {

          if (i <= 0) i = galleryUlLi.length - 2;
          //console.log(i, idx)

          i--;

          const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
          const goto = (-i * gap) + 'px';

          console.log(gap, goto)

          gallery.style.left = goto;
          gallery.style.transition = 'all 0.5s'
          

          //li 1개 더 추가해야 하는데 왜 안 되는지..?
          const itemsUlLiPlus=document.createElement('li');
          itemsUlLi.append(li1);
          
          itemsUlLi.forEach((el2, idx2) => {
            if (i === idx2) {

              el2.classList.add('on3');

            } else {
              el2.classList.remove('on3');
            }
          });

        } else if (idx === 1) {

          if (i >= 10) i = -1;
          //console.log(i, idx)

          i++;

          const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
          const goto = (-i * gap) + 'px';

          console.log(gap, goto)

          gallery.style.left = goto;
          gallery.style.transition = 'all 0.5s'

          itemsUlLi.forEach((el2, idx2) => {
            if (i === idx2) {
              el2.classList.add('on3');
            } else {
              el2.classList.remove('on3');
            }
          });

        }
      }
    });

  });
  

}else if(mqlMoblie.matches){
  console.log('모바일버전입니다')
}










//========================================================================================================
/*section6*/

const sectionSec6 = document.querySelector('.section.sec6');
const btmCon6 = sectionSec6.querySelector('.section.sec6 .btm-con');
const btmCon6Ul = btmCon6.querySelector('.section.sec6 .btm-con>ul');
const btmCon6UlLi = btmCon6Ul.querySelectorAll('.section.sec6 .btm-con>ul>li');
const desc6 = btmCon6Ul.querySelectorAll('.section.sec6 .btm-con>ul>li .desc');
const h26 = btmCon6Ul.querySelectorAll('.section.sec6 .btm-con>ul>li .title .title-inner h2');
const p6 = btmCon6Ul.querySelectorAll('.section.sec6 .btm-con>ul>li .desc p');


btmCon6UlLi.forEach(el => {
  el.addEventListener('mouseover', e => {
    const eCTaret = e.currentTarget;
    btmCon6UlLi.forEach(el2 => {
      if (eCTaret === el2) {
        //console.log(eCTaret,'<<')
        el2.children[1].classList.add('desc-animation')
      }
    })

  })
})



//========================================================================================================
/*scroll*/

const section = document.querySelectorAll('.section');
const scrollBtnUl = document.querySelector('.scroll-btn>ul');
const scrollBtnUlLi = scrollBtnUl.querySelectorAll('.scroll-btn>ul>li');

scrollBtnUl.addEventListener('click', (e) => {
  //e.preventDefault();
  const eTarget = e.target; //li
  scrollBtnUlLi.forEach((el, idx) => {
    if (eTarget === el) {
      const sTop = section[idx + 1].offsetTop;
      console.log(`sTop-> ${sTop}`);
      window.scroll({
        top: sTop,
        left: 0,
        behavior: 'smooth'
      });
      el.classList.add('on');
    } else {
      el.classList.remove('on');
    }
  });
});