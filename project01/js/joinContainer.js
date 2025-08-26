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




//회원가입 js start===============================================================================

const joinForm=document.querySelector('#joinForm');
const userName=document.querySelector('#userName');
const userId=document.querySelector('#userId');
const userPw=document.querySelector('#userPw');
const userPw2=document.querySelector('#userPw2');
const userEmail=document.querySelector('#userEmail');
const userNumber=document.querySelector('#userNumber');
const userGender1=document.querySelector('#userGender1');
const userGender2=document.querySelector('#userGender2');
const joinBtn=document.querySelector('#joinBtn');
const pwChecked=document.querySelector('p.pwChecked');

const firstCheckBox = document.querySelector('.join-ctr .infoShareAgree>ul>li>input');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

joinBtn.addEventListener('click', ()=>{
 
 if(userId.value.length<=0){
  alert('아이디를 작성해 주세요');
  userId.focus();
  return false;
 };

 if(userPw.value.length<=0){
  alert('비밀번호를 작성해 주세요');
  userPw.focus();
  return false;
};

if(userPw2.value.length<=0){
  alert('재확인 비밀번호를 작성해 주세요');
  userPw2.focus();
  return false;
};

if(userName.value === '' || userName.value.length<=0){
 alert('이름을 작성해 주세요');
 userName.focus();
 return false;
};

 if(userEmail.value.length<=0){
  alert('이메일을 작성해 주세요');
  userEmail.focus();
  return false;
 };

 if(userNumber.value.length<=0){
  alert('휴대폰번호를 작성해 주세요');
  userNumber.focus();
  return false;
 };

 //회원가입 버튼 눌렀는데 비번이랑 재확인비번이랑 값이 다를 시 팝업창 뜨기
 if(userPw.value !== userPw2.value){
  alert('비밀번호가 다릅니다. 다시 작성해 주세요')
  userPw.focus();
  return false;
 }

 //회원가입 버튼 눌렀는데 휴대폰번호가 11자리 미만일 경우 팝업창 뜨기
 if(userNumber.value.length<11){
  alert('휴대폰번호 11자리 모두 입력해 주세요')
  userNumber.focus();
  return false;
 };

 //이용약관동의 checkBox 체크 안 했을 경우 팝업창 뜨기
 if(checkboxes[1].value !== 'checked'){
   alert('이용약관동의를 체크해 주세요')
   return false;
 }
 if(checkboxes[2].value !== 'checked'){
   alert('이용약관동의를 체크해 주세요')
   return false;
 }
 if(checkboxes[6].value !== 'checked'){
   alert('이용약관동의를 체크해 주세요')
   return false;
 }


 //모두다 작성시 가입실행
 confirm('마몽드 회원가입을 환영합니다')
 joinForm.submit();


});


//비밀번호 재확인 값이랑 비밀번호 값이 다를 경우 비밀번호 둘다 배경이미지 변경하기
//비밀번호가 같습니다. 다릅니다. 텍스트 넣기
userPw2.addEventListener('keyup', ()=>{
 if(userPw2.value !== userPw.value){
  userPw.style.backgroundColor='#fa5e6e85'
  userPw2.style.backgroundColor='#fa5e6e85'
  pwChecked.innerText='비밀번호가 다릅니다'
  pwChecked.style.color='#ff0000'
 } else{
  userPw.style.backgroundColor='#ffccd185'
  userPw2.style.backgroundColor='#ffccd185'
  pwChecked.innerText='비밀번호가 같습니다'
  pwChecked.style.color='#000000'
 }

});


//전체동의


function selectAll(selectAll)  {
  
  checkboxes.forEach((el) => {
    el.checked = selectAll.checked
  })

  
};


//무료 배송, 할인쿠폰 등 혜택/정보 수신 동의
function selectAll2(selectAll2)  {
  
  checkboxes[0].checked = selectAll2.checked
  checkboxes[3].checked = selectAll2.checked
  checkboxes[4].checked = selectAll2.checked
  checkboxes[5].checked = selectAll2.checked

};