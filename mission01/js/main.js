// 1. email 정규표현식을 사용한 validation
// 2. pw 정규표현식을 사용한 validation
// 3. 상태 변수 관리
// 4. 로그인 버튼을 클릭시 조건처리
const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@'
};

const email = document.querySelector('.user-email-input');
const pw = document.querySelector('.user-password-input');
const button = document.querySelector('.btn-login');


// 상태 변수 관리
let emailPass = false;
let pwPass = false;

function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// 아이디 이메일 유효성 검사
email.addEventListener('input',function() {
  if (emailReg(this.value)){
    this.classList.remove('is--invalid');
    emailPass = true;
  }else {
    this.classList.add('is--invalid');

    emailPass = false;

  }
})

// 비밀번호 유효성 검사
pw.addEventListener('input',function() {
  if (pwReg(this.value)){
    this.classList.remove('is--invalid');
    pwPass = true;
  }else {
    this.classList.add('is--invalid');

    pwPass = false;

  }

})

// 로그인 버튼을 클릭시 조건처리
button.addEventListener('click',(e)=>{
  e.preventDefault();
  
  if( email.value === user.id && pw.value === user.pw) {
    window.location.href = 'welcome.html';
  }else {
    alert('아이디 또는 패스워드를 확인 해주세요.');
  }
  
})