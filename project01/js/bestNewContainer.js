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
const mainBox1 = document.querySelector('.section.sec1 .main-box');
const Gallery1 = mainBox1.querySelector('.gallery');
const MainGallery1 = Gallery1.querySelector('.main-gallery');
const MainGalleryUl1 = MainGallery1.querySelector('.main-gallery>ul');
const mainGalleryUlLi1 = MainGalleryUl1.querySelectorAll('.main-gallery>ul>li');

const centerBtn1 = document.querySelector('.section.sec1 .sec-con .center-btn');
const arrows1 = centerBtn1.querySelectorAll('.center-btn span.arrow');

const bcon1 = document.querySelector('.section.sec1 .bcon');
const items1 = bcon1.querySelector('.bcon .items');
const itemsUl1 = items1.querySelector('.bcon .items>ul');
const itemsUlLi1 = itemsUl1.querySelectorAll('.bcon .items>ul>li');

/*section1 autoGallery에 backgroundImg 넣기*/
const arrBg1 = [];

for (let i = 0; i < mainGalleryUlLi1.length; i++) {
  arrBg1.push(`url(img/bestNew/new/new_main_${i}.jpg) no-repeat 50%/cover`);
  mainGalleryUlLi1[i].style.background = arrBg1[i];
}

//setInterval을 사용하여 3초마다 fadeGallery()함수를 호출하기

let i = -1;
//let setOut;

function fadeGallery() {

  if (i >= mainGalleryUlLi1.length - 1) i = -1;

  i++;

  //console.log(`i -> ${i}`);

  //autoGalleryfunc(i);
  mainGalleryUlLi1.forEach((el, idx) => {

    if (i === idx) {
      el.classList.add('fadeLi');
    } else {
      el.classList.remove('fadeLi');
    }

  });

  //autoOnfunc(i);
  itemsUlLi1.forEach((el, idx) => {

    if (i === idx) {
      el.classList.add('on');
    } else {
      el.classList.remove('on');
    }

  });

  //setOut = setTimeout(fadeGallery, 3000);

  //if문 이용 galleryLi 마지막 인덱스 => 처음 인덱스
  if (i >= mainGalleryUlLi1.length - 1) i = -1;
}

let setIn = setInterval(fadeGallery, 3000);

(() => {
  fadeGallery();
})();

//이벤트 위임을 이용해서 itemsUlLi mouseover시 setIn중지
//itemsUlLi mouseout시 setIn 다시 시작

itemsUl1.addEventListener('mouseover', itemsUlfn);
itemsUl1.addEventListener('mouseout', itemsUlfn);

function itemsUlfn(e) {

  itemsUlLi1.forEach((el, idx) => {

    if (e.target === el) {

      if (e.type === 'mouseover') {

        clearInterval(setIn);

      } else if (e.type === 'mouseout') {

        setIn = setInterval(fadeGallery, 3000);

      }


    }

  });

}

//center-btn span mouseover시 setIn 중지

arrows1[0].addEventListener('mouseover', e => {

  clearInterval(setIn);

});
arrows1[0].addEventListener('mouseout', e => {

  setIn = setInterval(fadeGallery, 3000);

});

arrows1[1].addEventListener('mouseover', e => {
  
  clearInterval(setIn);
  
});
arrows1[1].addEventListener('mouseout', e => {

  setIn = setInterval(fadeGallery, 3000);

});


//이벤트 위임을 이용해서 itemsUlLi click -> 해당 인덱스 galleryLi만 보이도록
itemsUl1.addEventListener('click', e => {
  itemsUlLi1.forEach((el, idx) => {
    if (e.target === el) {

      el.classList.add('on'); //클릭한 li 색 변경하기

      mainGalleryUlLi1.forEach((el2, idx2) => {
        if (idx === idx2) {

          el2.classList.add('fadeLi');

        } else {
          el2.classList.remove('fadeLi');
        }

      });

      i = idx; //이걸 왜 해주냐?? i의 순서를 내가 클릭한 itemsUlLi idx로 변경해야지 내가 클릭한
      //li 이후에 다음 이미지로 제대로 넘어가기 때문임..

    } else {
      el.classList.remove('on');
    }

  });

});



//이벤트 위임을 이용해서 centerBtn1 click -> 해당 인덱스 galleryLi만 보이도록
arrows1[0].addEventListener('click', e => {

  i--;

  if (i < 0) i = mainGalleryUlLi1.length - 1;

  mainGalleryUlLi1.forEach((element, index) => {

    if (i === index) {
      element.classList.add('fadeLi');
    } else {
      element.classList.remove('fadeLi');
    }

  });

  itemsUlLi1.forEach((element, index) => {

    if (i === index) {
      element.classList.add('on');
    } else {
      element.classList.remove('on');
    }

  });

});

arrows1[1].addEventListener('click', e => {

  i++;

  if (i > mainGalleryUlLi1.length - 1) i = 0;

  mainGalleryUlLi1.forEach((element, index) => {

    if (i === index) {
      element.classList.add('fadeLi');
    } else {
      element.classList.remove('fadeLi');
    }

  });

  itemsUlLi1.forEach((element, index) => {

    if (i === index) {
      element.classList.add('on');
    } else {
      element.classList.remove('on');
    }

  });

});



//========================================================================================================
/*section2*/
const sectionSec2 = document.querySelector('.section.sec2');
const mainBox2 = sectionSec2.querySelector('.section.sec2 .main-box');
const Gallery2 = mainBox2.querySelector('.gallery');
const MainGallery2 = Gallery2.querySelector('.main-gallery');
const MainGalleryUl2 = MainGallery2.querySelector('.main-gallery>ul');
const mainGalleryUlLi2 = MainGalleryUl2.querySelectorAll('.main-gallery>ul>li');

const centerBtn2 = document.querySelector('.section.sec2 .sec-con .center-btn');
const arrows2 = centerBtn2.querySelectorAll('.center-btn span.arrow');

const bcon2 = document.querySelector('.section.sec2 .bcon');
const items2 = bcon2.querySelector('.bcon .items');
const itemsUl2 = items2.querySelector('.bcon .items>ul');
const itemsUlLi2 = itemsUl2.querySelectorAll('.bcon .items>ul>li');


/*section2 autoGallery에 backgroundImg 넣기*/
const arrBg2 = [];

for (let i = 0; i < mainGalleryUlLi2.length; i++) {
  arrBg2.push(`url(img/bestNew/best/best_main_${i}.jpg) no-repeat 50%/cover`);
  mainGalleryUlLi2[i].style.background = arrBg2[i];
}




//setInterval을 사용하여 3초마다 fadeGallery()함수를 호출하기

let i2 = -1;
//let setOut;

function fadeGallery2() {

  if (i >= mainGalleryUlLi2.length - 1) i2 = -1;

  i2++;

  //console.log(`i -> ${i}`);

  //autoGalleryfunc(i);
  mainGalleryUlLi2.forEach((el, idx) => {

    if (i2 === idx) {
      el.classList.add('fadeLi');
    } else {
      el.classList.remove('fadeLi');
    }

  });

  //autoOnfunc(i);
  itemsUlLi2.forEach((el, idx) => {

    if (i2 === idx) {
      el.classList.add('on');
    } else {
      el.classList.remove('on');
    }

  });

  //setOut = setTimeout(fadeGallery, 3000);

  //if문 이용 galleryLi 마지막 인덱스 => 처음 인덱스
  if (i2 >= mainGalleryUlLi2.length - 1) i2 = -1;
}

let setIn2 = setInterval(fadeGallery2, 3000);

(() => {
  fadeGallery2();
})();

//이벤트 위임을 이용해서 itemsUlLi mouseover시 setIn중지
//itemsUlLi mouseout시 setIn 다시 시작

itemsUl2.addEventListener('mouseover', itemsUlfn2);
itemsUl2.addEventListener('mouseout', itemsUlfn2);

function itemsUlfn2(e) {

  itemsUlLi2.forEach((el, idx) => {

    if (e.target === el) {

      if (e.type === 'mouseover') {

        clearInterval(setIn2);

      } else if (e.type === 'mouseout') {

        setIn2 = setInterval(fadeGallery2, 3000);

      }


    }

  });

}

//center-btn span mouseover시 setIn 중지

arrows2[0].addEventListener('mouseover', e => {

  clearInterval(setIn2);

});
arrows2[0].addEventListener('mouseout', e => {

  setIn2 = setInterval(fadeGallery2, 3000);

});

arrows2[1].addEventListener('mouseover', e => {
  
  clearInterval(setIn2);
  
});
arrows2[1].addEventListener('mouseout', e => {

  setIn2 = setInterval(fadeGallery2, 3000);

});


//이벤트 위임을 이용해서 itemsUlLi click -> 해당 인덱스 galleryLi만 보이도록
itemsUl2.addEventListener('click', e => {
  itemsUlLi2.forEach((el, idx) => {
    if (e.target === el) {

      el.classList.add('on'); //클릭한 li 색 변경하기

      mainGalleryUlLi2.forEach((el2, idx2) => {
        if (idx === idx2) {

          el2.classList.add('fadeLi2');

        } else {
          el2.classList.remove('fadeLi2');
        }

      });

      i2 = idx; //이걸 왜 해주냐?? i의 순서를 내가 클릭한 itemsUlLi idx로 변경해야지 내가 클릭한
      //li 이후에 다음 이미지로 제대로 넘어가기 때문임..

    } else {
      el.classList.remove('on');
    }

  });

});



//이벤트 위임을 이용해서 centerBtn1 click -> 해당 인덱스 galleryLi만 보이도록
arrows2[0].addEventListener('click', e => {

  i2--;

  if (i2 < 0) i2 = mainGalleryUlLi2.length - 1;

  mainGalleryUlLi2.forEach((element, index) => {

    if (i2 === index) {
      element.classList.add('fadeLi2');
    } else {
      element.classList.remove('fadeLi2');
    }

  });

  itemsUlLi2.forEach((element, index) => {

    if (i2 === index) {
      element.classList.add('on');
    } else {
      element.classList.remove('on');
    }

  });

});

arrows2[1].addEventListener('click', e => {

  i2++;

  if (i2 > mainGalleryUlLi2.length - 1) i2 = 0;

  mainGalleryUlLi2.forEach((element, index) => {

    if (i2 === index) {
      element.classList.add('fadeLi2');
    } else {
      element.classList.remove('fadeLi2');
    }

  });

  itemsUlLi2.forEach((element, index) => {

    if (i2 === index) {
      element.classList.add('on');
    } else {
      element.classList.remove('on');
    }

  });

});
















































///*자동실행되는 autoGallery 함수 만들기*/

//let i2 = -1;

//function autoGallery2() {

//  //autoGallery2 li의 마지막 index 후, 처음으로 reset
//  if (i2 >= mainGalleryUlLi2.length - 1) i2 = -1;

//  i2++;

//  const gap = mainGalleryUlLi2[1].offsetLeft - mainGalleryUlLi2[0].offsetLeft;
//  const goto = (-gap * i2) + 'px';

//  MainGallery2.style.left = goto;
//  MainGallery2.style.transition = 'all 0.5s';

//  //scrollBar img와 함께 움직이기
//  itemsUlLi2.forEach((el, idx) => {

//    if (idx === i2) {
//      el.classList.add('on')
//    } else {
//      el.classList.remove('on')
//    }
//  });
//}



////autoGallery2함수를 3초마다 실행
//let setIn2 = setInterval(autoGallery2, 3000);



////autoGallery 즉각 실행
//(() => {
//  autoGallery2();
//})();



//const centerBtn2 = document.querySelector('.section.sec2 .sec-con .center-btn');
//const arrows2 = centerBtn2.querySelectorAll('.center-btn span.arrow');


////arrow버튼에 마우스 오버하면 자동갤러리 중지
//centerBtn2.addEventListener('mouseover', e => {
//  const eTarget = e.target; //img
//  const eTargetP = e.target.parentElement; //span

//  arrows2.forEach((el, idx) => {

//    if (eTargetP === el) {
//      clearInterval(setIn2);
//    }
//  });

//});



////arrow버튼에 마우스 아웃하면 자동갤러리 다시 시작
//centerBtn2.addEventListener('mouseout', e => {
//  const eTarget = e.target; //img
//  const eTargetP = e.target.parentElement; //span

//  arrows2.forEach((el, idx) => {

//    if (eTargetP === el) {
//      setIn2 = setInterval(autoGallery2, 3000);
//    }
//  });

//});



////spanArrow[0] 클릭하면 .gallery 왼쪽으로 gap만큼 이동
////spanArrow[1] 클릭하면 .gallery 오른쪽으로 gap만큼 이동
//// .items>ul>li 인덱스값에 따라서 on클래스 적용
//centerBtn2.addEventListener('click', e => {
//  const eTargetP = e.target.parentElement; //span

//  arrows2.forEach((el, idx) => {

//    if (eTargetP === el) {

//      if (idx === 0) {

//        if (i2 <= 0) i2 = mainGalleryUlLi2.length;

//        i2--;

//        const gap = mainGalleryUlLi2[1].offsetLeft - mainGalleryUlLi2[0].offsetLeft;
//        const goto = (-i2 * gap) + 'px';

//        MainGallery2.style.left = goto;
//        MainGallery2.style.transition = 'all 0.5s'

//        itemsUlLi2.forEach((el2, idx2) => {
//          if (i2 === idx2) {
//            el2.classList.add('on');
//          } else {
//            el2.classList.remove('on');
//          }
//        });

//      } else if (idx === 1) {

//        if (i2 >= mainGalleryUlLi2.length - 1) i2 = -1;

//        i2++;

//        const gap = mainGalleryUlLi2[1].offsetLeft - mainGalleryUlLi2[0].offsetLeft;
//        const goto = (-i2 * gap) + 'px';

//        MainGallery2.style.left = goto;
//        MainGallery2.style.transition = 'all 0.5s'

//        itemsUlLi2.forEach((el2, idx2) => {
//          if (i2 === idx2) {
//            el2.classList.add('on');
//          } else {
//            el2.classList.remove('on');
//          }
//        });
//      }
//    }
//  });

//});



////items li버튼에 마우스 오버하면 자동갤러리 중지
//itemsUl2.addEventListener('mouseover', e => {
//  const eTarget = e.target; //li

//  itemsUlLi2.forEach((el, idx) => {

//    if (eTarget === el) {
//      clearInterval(setIn2);
//    }
//  });
//});



////items li버튼에 마우스 아웃하면 자동갤러리 다시 시작
//itemsUl2.addEventListener('mouseout', e => {
//  const eTarget = e.target; //li

//  itemsUlLi2.forEach((el, idx) => {

//    if (eTarget === el) {
//      setIn2 = setInterval(autoGallery2, 3000);
//    }
//  });
//});



////items li 클릭시 각 해당되는 화면 이동
//itemsUl2.addEventListener('click', e => {
//  const eTarget = e.target; //li

//  itemsUlLi2.forEach((el, idx) => {

//    if (eTarget === el) {

//      i2 = idx;
//      const gap = mainGalleryUlLi2[1].offsetLeft - mainGalleryUlLi2[0].offsetLeft;
//      const goto = (-i2 * gap) + 'px';

//      MainGallery2.style.left = goto;
//      MainGallery2.style.transition = 'all 0.5s'

//      el.classList.add('on');

//    } else {
//      el.classList.remove('on');
//    }
//  });
//});



//section1 li에 transition효과 넣기================================================

const mainBox1Li = document.querySelector('.section.sec1 .sec-con .desc-box .desc-line');

const subBox1 = document.querySelector('.section.sec1 .sec-con .sub-box');
const subBox1Ul = subBox1.querySelector('.section.sec1 .sec-con .sub-box>ul');
const subBox1UlLi = subBox1Ul.querySelectorAll('.section.sec1 .sec-con .sub-box>ul>li');

window.addEventListener('scroll', e => {

  const topScroll = document.documentElement.scrollTop;


  if (topScroll > 200) {

    mainBox1Li.classList.add('rolling-ani');
    mainBox1Li.style.transition = 'all 0.5s'

  }

  if (topScroll > 400) {

    subBox1UlLi[0].classList.add('rolling-ani');
    subBox1UlLi[0].style.transition = 'all 0.4s'

    subBox1UlLi[1].classList.add('rolling-ani');
    subBox1UlLi[1].style.transition = 'all 0.8s'

    subBox1UlLi[2].classList.add('rolling-ani');
    subBox1UlLi[2].style.transition = 'all 1.2s'

    subBox1UlLi[3].classList.add('rolling-ani');
    subBox1UlLi[3].style.transition = 'all 1.6s'
  }

});



//section2 li에 transition효과 넣기================================================


const mainBox2Li = document.querySelector('.section.sec2 .sec-con .desc-box .desc-line');

const subBox2 = document.querySelector('.section.sec2 .sec-con .sub-box');
const subBox2Ul = subBox2.querySelector('.section.sec2 .sec-con .sub-box>ul');
const subBox2UlLi = subBox2Ul.querySelectorAll('.section.sec2 .sec-con .sub-box>ul>li');



window.addEventListener('scroll', e => {

  const topScroll = document.documentElement.scrollTop;

  //console.log(topScroll)

  if (topScroll > 1800) {

    mainBox2Li.classList.add('rolling-ani');
    mainBox2Li.style.transition = 'all 0.5s'

  }

  if (topScroll > 2000) {


    subBox2UlLi[0].classList.add('rolling-ani');
    subBox2UlLi[0].style.transition = 'all 0.4s'

    subBox2UlLi[1].classList.add('rolling-ani');
    subBox2UlLi[1].style.transition = 'all 0.8s'

    subBox2UlLi[2].classList.add('rolling-ani');
    subBox2UlLi[2].style.transition = 'all 1.2s'

    subBox2UlLi[3].classList.add('rolling-ani');
    subBox2UlLi[3].style.transition = 'all 1.6s'
  }

});