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




//section1시작=================================================================================

const gallery = document.querySelector('.gallery');
const galleryUl = gallery.querySelector('.gallery>ul');
const galleryUlLi = galleryUl.querySelectorAll('.gallery>ul>li');

const bottomCon = document.querySelector('.section.sec1 .sec-con .bottom-con');
const items = bottomCon.querySelector('.bottom-con .items');
const itemsInner = items.querySelector('.items-inner');
const itemsInnerUl = itemsInner.querySelector('.items-inner>ul');
const itemsInnerUlLi = itemsInnerUl.querySelectorAll('.items-inner>ul>li');


/*autoGallery에 backgroundImg 넣기*/
const arrBg = [];

for (let i = 0; i < galleryUlLi.length; i++) {
  arrBg.push(`url(img/index/section1/main_${i}.jpg) no-repeat 50%/cover`);
  galleryUlLi[i].style.background = arrBg[i];
}



/*자동실행되는 autoGallery 함수 만들기*/
let i = 0;
let setOut;

function autoGallery() {


  i++;
  
  //console.log('4')
  const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
  const goto = (-gap * i) + 'px';

  if(i > galleryUlLi.length - 1){

    gallery.style.left='-' + galleryUlLi[1].offsetLeft + 'px';
    gallery.style.transition = 0 +'ms';

    i=1;

    setOut=setTimeout(autoGallery, 0);

  }else{
    
    gallery.style.left = goto;
    gallery.style.transition = 500 + 'ms';

    setOut=setTimeout(autoGallery, 3000);
  }


  //scrollBar img와 함께 움직이기
  itemsInnerUlLi.forEach((el, idx)=>{

    let idx2=i-1;

    if(idx2 == galleryUlLi.length-2) idx2=0;
  
    if(idx == idx2){
     el.classList.add('on')
    }else{
     el.classList.remove('on')
    }
   });

}



//autoGallery 즉각 실행
(() => {
  autoGallery();
})();



const centerBtn = document.querySelector('.section.sec1 .sec-con .center-btn');
const arrows = centerBtn.querySelectorAll('.center-btn span.arrow');


//arrow버튼에 마우스 오버하면 자동갤러리 중지
centerBtn.addEventListener('mouseover', e => {

  e.preventDefault();
  e.stopPropagation();

  const eTarget = e.target; //img
  const eTargetP = e.target.parentElement; //span
  //console.log('2')
  arrows.forEach((el, idx) => {

    if (eTargetP === el) {
      clearTimeout(setOut);
    }
  });

});


//arrow버튼에 마우스 아웃하면 자동갤러리 다시 시작
centerBtn.addEventListener('mouseout', e => {

  e.preventDefault();
  e.stopPropagation();

  const eTarget = e.target; //img
  const eTargetP = e.target.parentElement; //span
  //console.log('3')
  arrows.forEach((el, idx) => {

    if (eTargetP === el) {
      setOut = setTimeout(autoGallery, 3000);
    }
  });

});



//spanArrow[0] 클릭하면 .gallery 왼쪽으로 gap만큼 이동
//spanArrow[1] 클릭하면 .gallery 오른쪽으로 gap만큼 이동

centerBtn.addEventListener('click', e => {

  e.preventDefault();  
  e.stopPropagation();

  const eTargetP = e.target.parentElement; //span

  arrows.forEach((el, idx) => {

    if (eTargetP === el) {

      if (idx === 0) {

        //왼쪽쪽버튼 눌렀을 때 이동시키기
        if (i <= 1) i = galleryUlLi.length-1;
        
        i--;

        const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
        const goto = (-gap * i) + 'px';
      
        if(i > galleryUlLi.length - 1){
      
          gallery.style.left='-' + galleryUlLi[1].offsetLeft + 'px';
          gallery.style.transition = 0 +'ms';
      
          i=1;
      
          setOut=setTimeout(autoGallery, 0);
      
        }else{
          
          gallery.style.left = goto;
          gallery.style.transition = 500 + 'ms';
      
        }
      
      
        //scrollBar img와 함께 움직이기
        itemsInnerUlLi.forEach((el, idx)=>{
      
          let idx2=i-1;
      
          if(idx2 == galleryUlLi.length-2) idx2=0;
        
          if(idx == idx2){
           el.classList.add('on')
          }else{
           el.classList.remove('on')
          }
         });

      } else if (idx === 1) {

        //오른쪽버튼 눌렀을 때 이동시키기

        if (i >= galleryUlLi.length - 2) i = 0;

        i++;

        const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
        const goto = (-i * gap) + 'px';

        gallery.style.left = goto;
        gallery.style.transition = 'all 0.5s'
      
      
        //scrollBar img와 함께 움직이기
        itemsInnerUlLi.forEach((el, idx)=>{
      
          let idx2=i-1;
      
          if(idx2 == galleryUlLi.length-2) idx2=0;
        
          if(idx == idx2){
           el.classList.add('on')
          }else{
           el.classList.remove('on')
          }
         });
      }
    }
  });

});



//items li버튼에 마우스 오버하면 자동갤러리 중지
itemsInnerUl.addEventListener('mouseover', e => {
  const eTarget = e.target; //li

  itemsInnerUlLi.forEach((el, idx) => {

    if (eTarget === el) {
      clearTimeout(setOut);
    }
  });
});

//items li버튼에 마우스 아웃하면 자동갤러리 다시 시작
itemsInnerUl.addEventListener('mouseout', e => {
  const eTarget = e.target; //li

  itemsInnerUlLi.forEach((el, idx) => {

    if (eTarget === el) {
      setOut = setTimeout(autoGallery, 3000);
    }
  });
});



//items li 클릭시 각 해당되는 화면 이동
itemsInnerUl.addEventListener('click', e => {
  const eTarget = e.target; //li

  itemsInnerUlLi.forEach((el, idx) => {

    if (eTarget === el) {

      let idx3 = idx+1;

      i = idx3;
      const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
      const goto = (-i * gap) + 'px';

      gallery.style.left = goto;
      gallery.style.transition = 'all 0.5s'

      el.classList.add('on');

    } else {
      el.classList.remove('on');
    }
  });
});





//============================================================================================
/*section2*/

//li클릭하면 각 해당하는 img 넣기, 객체 셀렉
const leftTopUl = document.querySelector('.con-left-top>ul');
const leftTopUlLi = leftTopUl.querySelectorAll('.con-left-top>ul>li');

const conRightInner = document.querySelector('.con-right-inner');
const rightGallery = conRightInner.querySelector('.right-gallery');
const rightGalleryUl = rightGallery.querySelector('.right-gallery>ul');
const rightGalleryUlLi = rightGalleryUl.querySelectorAll('.right-gallery>ul>li');
const rightGalleryUlLiImg = document.querySelectorAll('.right-gallery>ul>li img');
const rightGalleryUlLiP = document.querySelectorAll('.right-gallery>ul>li p');

const reviewCon = document.querySelectorAll('.review-con');
const reviewId = document.querySelectorAll('.review-id');


//각 li에 해당하는 img 경로를 배열에 담기
const arrCreamSrc = [];
const arrCreamAlt = [];
for (let i = 0; i < 6; i++) {
  arrCreamSrc.push(`img/index/section2/cream/sec2_cream_${i}.jpg`) //src값
  arrCreamAlt.push(`bestSeller_${i}`) //alt값
}

const arrSkinLotionSrc = [];
const arrSkinLotionAlt = [];
for (let i = 0; i < 6; i++) {
  arrSkinLotionSrc.push(`img/index/section2/skinLotion/sec2_skinLotion_${i}.jpg`) //src값
  arrSkinLotionAlt.push(`bestSeller_${i}`) //alt값
}

const arrEssenceAmpleSerumSrc = [];
const arrEssenceAmpleSerumAlt = [];
for (let i = 0; i < 6; i++) {
  arrEssenceAmpleSerumSrc.push(`img/index/section2/essenceAmpleSerum/sec2_essenceAmpleSerum_${i}.jpg`)
  arrEssenceAmpleSerumAlt.push(`bestSeller_${i}`)
}

const arrMaskSrc = [];
const arrMaskAlt = [];
for (let i = 0; i < 6; i++) {
  arrMaskSrc.push(`img/index/section2/mask/sec2_mask_${i}.jpg`)
  arrMaskAlt.push(`bestSeller_${i}`)
}



//li클릭하면 각 해당하는 img 넣기
leftTopUl.addEventListener('click', (e) => {
  console.log(e.target); //p
  console.log(e.currentTarget); //ul

  const eTarget = e.target; //p
  const eTargetParent = e.target.parentElement; //li
  const eCTarget = e.currentTarget; //ul


  if (eTargetParent === leftTopUlLi[0]) {
    //li 중 크림 선택했을 때 해당 img 불러오기
    rightGalleryUlLiImg[0].setAttribute('src', arrCreamSrc[0])
    rightGalleryUlLiImg[0].setAttribute('alt', arrCreamAlt[0])
    rightGalleryUlLiImg[1].setAttribute('src', arrCreamSrc[1])
    rightGalleryUlLiImg[1].setAttribute('alt', arrCreamAlt[1])
    rightGalleryUlLiImg[2].setAttribute('src', arrCreamSrc[2])
    rightGalleryUlLiImg[2].setAttribute('alt', arrCreamAlt[2])
    rightGalleryUlLiImg[3].setAttribute('src', arrCreamSrc[3])
    rightGalleryUlLiImg[3].setAttribute('alt', arrCreamAlt[3])
    rightGalleryUlLiImg[4].setAttribute('src', arrCreamSrc[4])
    rightGalleryUlLiImg[4].setAttribute('alt', arrCreamAlt[4])
    rightGalleryUlLiImg[5].setAttribute('src', arrCreamSrc[5])
    rightGalleryUlLiImg[5].setAttribute('alt', arrCreamAlt[5])

    //li 중 크림 선택했을 때 해당 p태그 불러오기
    rightGalleryUlLiP[0].innerText = '바쿠치올 레티놀 크림'
    rightGalleryUlLiP[1].innerText = '바쿠치올과 순수 레티놀의 황금비율 \n 저자극 수분 탄력 크림'
    rightGalleryUlLiP[2].innerText = '프로바이오틱스 세라마이드 크림'
    rightGalleryUlLiP[3].innerText = '기본부터 탄탄한 건강 장벽을 세워주는 \n 산뜻한 저자극 보습장벽 크림'
    rightGalleryUlLiP[4].innerText = '블루 캐모마일 크림'
    rightGalleryUlLiP[5].innerText = '블루 캐모마일 추출물과 히아루론산의 \n 저자극 수분 진정 크림'
    rightGalleryUlLiP[6].innerText = '비타민 판테놀 10 크림'
    rightGalleryUlLiP[7].innerText = '판테놀과 비타민을 함유한 포뮬러가 \n 함유된 건강 보습 크림'
    rightGalleryUlLiP[8].innerText = '로즈 워터 수딩젤'
    rightGalleryUlLiP[9].innerText = '장미수 90.81%를 듬뿍 담아 촉촉하고 \n 흡수가 빠른 멀티 사용 수딩젤'
    rightGalleryUlLiP[10].innerText = '에이지 컨트롤 파워 리프트 크림'
    rightGalleryUlLiP[11].innerText = '피부 노화 징후를 케어하여 탄탄한 탄력을 \n 부여 해주는 안티에이징 탄력 크림'

    //li 중 크림 선택했을 때 해당 review-con에 리뷰 넣기
    reviewCon[0].innerText = '벌써 3통째예요! 기미가 고민인 요즘 \n 사용하면 피부가 밝아지고 확실히 잡티가 옅어지네요~'
    reviewId[0].innerText = '@ss00****'
    reviewCon[1].innerText = '얼굴도 속당김 없이 여전히 촉촉하구요 \n 재구매의사 완전 100%입니다! \n 다들 정말 추천 드려요'
    reviewId[1].innerText = '@jani******'



  } else if (eTargetParent === leftTopUlLi[1]) {
    //li 중 스킨/로션 선택했을 때 해당 img 불러오기
    rightGalleryUlLiImg[0].setAttribute('src', arrSkinLotionSrc[0])
    rightGalleryUlLiImg[0].setAttribute('alt', arrSkinLotionAlt[0])
    rightGalleryUlLiImg[1].setAttribute('src', arrSkinLotionSrc[1])
    rightGalleryUlLiImg[1].setAttribute('alt', arrSkinLotionAlt[1])
    rightGalleryUlLiImg[2].setAttribute('src', arrSkinLotionSrc[2])
    rightGalleryUlLiImg[2].setAttribute('alt', arrSkinLotionAlt[2])
    rightGalleryUlLiImg[3].setAttribute('src', arrSkinLotionSrc[3])
    rightGalleryUlLiImg[3].setAttribute('alt', arrSkinLotionAlt[3])
    rightGalleryUlLiImg[4].setAttribute('src', arrSkinLotionSrc[4])
    rightGalleryUlLiImg[4].setAttribute('alt', arrSkinLotionAlt[4])
    rightGalleryUlLiImg[5].setAttribute('src', arrSkinLotionSrc[5])
    rightGalleryUlLiImg[5].setAttribute('alt', arrSkinLotionAlt[5])

    //li 중 스킨/로션 선택했을 때 해당 p태그 불러오기
    rightGalleryUlLiP[0].innerText = '로즈 워터 토너'
    rightGalleryUlLiP[1].innerText = '더 클린하고 촉촉해진 90.97% \n 리얼 장미수 로즈워터 토너'
    rightGalleryUlLiP[2].innerText = '프로바이오틱스 세라마이드 스킨 소프너'
    rightGalleryUlLiP[3].innerText = '플로럴바이오틱스™와 7겹 세라마이드가 \n 함유된 저자극 보습장벽 스킨소프너'
    rightGalleryUlLiP[4].innerText = '프로바이오틱스 세라마이드 에멀전'
    rightGalleryUlLiP[5].innerText = '기본부터 탄탄한 건강 장벽을 \n 세워주는 저자극 보습장벽 에멀전'
    rightGalleryUlLiP[6].innerText = '레티놀 앰플 토너'
    rightGalleryUlLiP[7].innerText = '순수레티놀이 피부 탄력을 도와주는 \n 고보습 안티에이징 앰플 토너'
    rightGalleryUlLiP[8].innerText = '센텔라 트러블 토너'
    rightGalleryUlLiP[9].innerText = '외부 환경으로 인해 자극받은 피부를 \n 진정시켜주는 병풀 트러블 토너'
    rightGalleryUlLiP[10].innerText = '캐모마일 퓨어 토너'
    rightGalleryUlLiP[11].innerText = '전성분 단 6가지, 꼭 필요함만으로 \n 채워진 민감 피부를 위한 저자극 토너'

    //li 중 크림 선택했을 때 해당 review-con에 리뷰 넣기
    reviewCon[0].innerText = '로즈 워터 토너는 저자극 테스트도 거친 \n 아이라 민감한 피부도 쓸 수 있어 믿고 쓸 수 있겠더라구요💗'
    reviewId[0].innerText = '@hxxi*****'
    reviewCon[1].innerText = '촉촉한 사용감으로 메이크업 전후에도 \n 밀림 현상 없는 마무리 감이 너무 좋았어요🙋🏻‍♀️'
    reviewId[1].innerText = '@tiee****'


  } else if (eTargetParent === leftTopUlLi[2]) {
    //li 중 에센스/앰플/세럼 선택했을 때 해당 img 불러오기
    rightGalleryUlLiImg[0].setAttribute('src', arrEssenceAmpleSerumSrc[0])
    rightGalleryUlLiImg[0].setAttribute('alt', arrEssenceAmpleSerumAlt[0])
    rightGalleryUlLiImg[1].setAttribute('src', arrEssenceAmpleSerumSrc[1])
    rightGalleryUlLiImg[1].setAttribute('alt', arrEssenceAmpleSerumAlt[1])
    rightGalleryUlLiImg[2].setAttribute('src', arrEssenceAmpleSerumSrc[2])
    rightGalleryUlLiImg[2].setAttribute('alt', arrEssenceAmpleSerumAlt[2])
    rightGalleryUlLiImg[3].setAttribute('src', arrEssenceAmpleSerumSrc[3])
    rightGalleryUlLiImg[3].setAttribute('alt', arrEssenceAmpleSerumAlt[3])
    rightGalleryUlLiImg[4].setAttribute('src', arrEssenceAmpleSerumSrc[4])
    rightGalleryUlLiImg[4].setAttribute('alt', arrEssenceAmpleSerumAlt[4])
    rightGalleryUlLiImg[5].setAttribute('src', arrEssenceAmpleSerumSrc[5])
    rightGalleryUlLiImg[5].setAttribute('alt', arrEssenceAmpleSerumAlt[5])

    //li 중 에센스/앰플/세럼 선택했을 때 해당 p태그 불러오기
    rightGalleryUlLiP[0].innerText = '로즈 블레미쉬 클리어링 세럼'
    rightGalleryUlLiP[1].innerText = '7일 만에 잡티를 개선해주는 \n 진정 잡티 세럼'
    rightGalleryUlLiP[2].innerText = '레드 에너지 리커버리 세럼'
    rightGalleryUlLiP[3].innerText = '수분,장벽,피부결을 개선해주는 \n 폴리페놀 항산화세럼'
    rightGalleryUlLiP[4].innerText = '로즈 블레미쉬 로즈 페이스 세트'
    rightGalleryUlLiP[5].innerText = '7일 만에 잡티를 케어하는 \n 로즈 톤업 기초 세트'
    rightGalleryUlLiP[6].innerText = '에이지 컨트롤 파워리프트 세럼'
    rightGalleryUlLiP[7].innerText = '젊고 탱탱한 피부로 가꿔주는 \n 안티에이징 탄력 세럼'
    rightGalleryUlLiP[8].innerText = '에이지 컨트롤 에센스'
    rightGalleryUlLiP[9].innerText = '탄탄하게 리프팅해주는 \n 토탈 안티에이징 에센스'
    rightGalleryUlLiP[9].innerText = '로즈 하이드라 글로리 앰플'
    rightGalleryUlLiP[9].innerText = '수분으로 고밀도 광채를 \n 선사하는 수분광채 앰플'

    //li 중 에센스/앰플/세럼 선택했을 때 해당 review-con에 리뷰 넣기
    reviewCon[0].innerText = '튜브형이라 사용하기도 휴대하기도 좋아 \n 요즘 외출 전에 꼭 챙기고 있어요'
    reviewId[0].innerText = '@dahy*****'
    reviewCon[1].innerText = '덧발라도 밀림이 없고 메이크업도 잘먹어 \n 좋더라구요😊'
    reviewId[1].innerText = '@bins****'


  } else if (eTargetParent === leftTopUlLi[3]) {
    //li 중 마스크 선택했을 때 해당 img 불러오기
    rightGalleryUlLiImg[0].setAttribute('src', arrMaskSrc[0])
    rightGalleryUlLiImg[0].setAttribute('alt', arrMaskAlt[0])
    rightGalleryUlLiImg[1].setAttribute('src', arrMaskSrc[1])
    rightGalleryUlLiImg[1].setAttribute('alt', arrMaskAlt[1])
    rightGalleryUlLiImg[2].setAttribute('src', arrMaskSrc[2])
    rightGalleryUlLiImg[2].setAttribute('alt', arrMaskAlt[2])
    rightGalleryUlLiImg[3].setAttribute('src', arrMaskSrc[3])
    rightGalleryUlLiImg[3].setAttribute('alt', arrMaskAlt[3])
    rightGalleryUlLiImg[4].setAttribute('src', arrMaskSrc[4])
    rightGalleryUlLiImg[4].setAttribute('alt', arrMaskAlt[4])
    rightGalleryUlLiImg[5].setAttribute('src', arrMaskSrc[5])
    rightGalleryUlLiImg[5].setAttribute('alt', arrMaskAlt[5])

    //li 중 마스크 선택했을 때 해당 p태그 불러오기
    rightGalleryUlLiP[0].innerText = '플라워 앰플 마스크팩'
    rightGalleryUlLiP[1].innerText = '병풀70% 시트로 피부에 닿는 면까지 \n 신경쓰는 플라워 앰플'
    rightGalleryUlLiP[2].innerText = '플라워랩 에센스마스크'
    rightGalleryUlLiP[3].innerText = '2,000ppm 함유된 꽃 추출물이 \n 들어간 초밀착 마스크'
    rightGalleryUlLiP[4].innerText = '마이크로 딥클렌징오일'
    rightGalleryUlLiP[5].innerText = '자연유래 식물성 오일 함유! \n 피부 부담 없는 딥 클렌징 오일'
    rightGalleryUlLiP[6].innerText = '마이크로 딥클렌징 폼'
    rightGalleryUlLiP[7].innerText = '98.8% 미세먼지 세정은 기본! \n ‘블랙헤드 개선해 주는 딥 클렌징 폼'
    rightGalleryUlLiP[8].innerText = '포어 클린 블랙헤드 스틱'
    rightGalleryUlLiP[9].innerText = '쓱싹 문지르면 블랙헤드가 제거되는 \n 블랙헤드 클렌징 스틱'
    rightGalleryUlLiP[10].innerText = '트리플 멀티 클렌징 폼'
    rightGalleryUlLiP[11].innerText = '창포물로 세안한 듯 개운하게, \n 한 번에 지워주는 멀티 클렌징'

    //li 중 마스크 선택했을 때 해당 review-con에 리뷰 넣기
    reviewCon[0].innerText = '이렇게 보습력 좋은 마스크는 처음이예요 \n 앞으로도 애용하겠습니다🌞'
    reviewId[0].innerText = '@eart***'
    reviewCon[1].innerText = '여자친구한테 선물로 줬는데 넘 만족하더 \n 라구요 종종 사주려구요'
    reviewId[1].innerText = '@taey**'

  }

});

//autogallery 버튼 클릭시마다 움직이기
const rightGalleryCenterBtn = conRightInner.querySelector('.center-btn');
const rightGalleryCenterBtnArrows = rightGalleryCenterBtn.querySelectorAll('span.arrow');



let i2 = -1;

rightGalleryCenterBtn.addEventListener('click', e => {

  e.stopPropagation();
  e.preventDefault();

  const eTarget = e.target; //img
  const eTargetParent = e.target.parentElement; //span

  rightGalleryCenterBtnArrows.forEach((el, idx) => {

    if (eTargetParent === el) {

      if (idx === 0) {

        if (i2 <= 0) i2 = galleryUlLi.length-2;
        //console.log(i2, idx);

        i2--;

        const gap2 = rightGalleryUlLi[1].offsetLeft - rightGalleryUlLi[0].offsetLeft;
        const goto2 = (-gap2 * i2) + 'px';

        rightGallery.style.left = goto2;
        rightGallery.classList.add('gallery-animation')

      } else if (idx === 1) {

        if (i2 >= 3) i2 = -1;

        i2++;

        const gap2 = rightGalleryUlLi[1].offsetLeft - rightGalleryUlLi[0].offsetLeft;
        const goto2 = (-gap2 * i2) + 'px';

        rightGallery.style.left = goto2;
        rightGallery.classList.add('gallery-animation')
      }
    }
  });


});






//section3===================================================================================




//section3 li에 transition효과 넣기
const sec3 = document.querySelector('.section.sec3');
const sec3SecCon = sec3.querySelector('.sec-con');

const sec3Gallery = sec3SecCon.querySelector('.ctr-gallery');
const sec3GalleryUl = sec3Gallery.querySelector('ul');
const sec3GalleryUlLi = sec3GalleryUl.querySelectorAll('li');


window.addEventListener('scroll', e=>{

  const topScroll = document.documentElement.scrollTop;

  console.log(topScroll)

  if(topScroll > 1100){

    sec3GalleryUlLi.forEach(el=>{
      el.classList.add('rolling-ani');
    });

    sec3GalleryUlLi[0].style.transition='all 1s'
    sec3GalleryUlLi[4].style.transition='all 1s'

    sec3GalleryUlLi[1].style.transition='all 1.5s'
    sec3GalleryUlLi[3].style.transition='all 1.5s'

    sec3GalleryUlLi[2].style.transition='all 2s'

  }

});



//section4=====================================================================================
//li 클릭하면 팝업창 뜨게 하기

const reviewUl = document.querySelector('.view-review>ul');
const reviewUlLi = document.querySelectorAll('.view-review>ul>li');
const reviewUlLiImg = document.querySelectorAll('.view-review>ul>li img');

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
reviewUl.addEventListener('click', e => {

  const eTarget = e.target; //img 또는 p태그
  const eTargetLi = eTarget.parentElement; //li

  //console.log(eTargetLi)

  const imgSrc = eTargetLi.children[0].getAttribute('src');
  const imgAlt = eTargetLi.children[0].getAttribute('alt');
  const imgTxt = eTargetLi.children[2].children[0].innerText;

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