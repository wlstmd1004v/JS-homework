/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
setBgColor 함수
setImage 함수
setNameText 함수

*/


const body = document.querySelector("body");
const nav = document.querySelector(".nav");
// 변경할 이미지 및 텍스트 요소
const visualImage = document.querySelector(".visual img");
const listImage = document.querySelector("button img");
const nickName = document.querySelector(".nickName");
// 오디오 객체
const audio = new Audio();

// 이벤트 위임을 통해 li 요소들에 클릭 이벤트를 추가
nav.addEventListener("click", (e) => {
  const target = e.target;
  const li = target.closest("li");

  if (!li) return; // li 요소가 클릭된 것이 아니면 종료

  const index = li.dataset.index - 1;
  const dataItem = data[index];

  // 배경색 변경
  setBgColor(dataItem.color, body);

  // 이미지 변경
  setImage(visualImage, dataItem.name.toLowerCase(), dataItem.alt);

  // 닉네임 변경
  setText(nickName, dataItem.name);

  // 음악 변경 및 실행
  setAudio(audio, dataItem.name);
  if (audio.paused) audio.play();
  else audio.pause();

  // 모든 li 항목에 is-active 클래스를 제거하고 클릭된 li에만 추가
  const liItems = document.querySelectorAll("li");
  liItems.forEach((item) => item.classList.remove("is-active"));
  li.classList.add("is-active");
});