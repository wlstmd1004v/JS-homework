# Poster 구현


---
![RESULT](./result.gif)




---

### 과제 요구사항
```
1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
    setBgColor 함수
    setImage 함수
    setNameText 함수
```
```js
1. 클릭 이벤트 활성화
nav.addEventListener("click", (e) => {
  const target = e.target;
  const li = target.closest("li");

  if (!li) return; // li 요소가 클릭된 것이 아니면 종료

  const index = li.dataset.index - 1;
  const dataItem = data[index];

```

```js
2. nav 클릭시 배경 색상 변경
setBgColor(dataItem.color, body);
```
```js
3. 이미지 변경
setImage(visualImage, dataItem.name.toLowerCase(), dataItem.alt);
```
```js
4. 텍스트 변경
setText(nickName, dataItem.name);
```

```js
5. 함수 분리
    setBgColor 함수
    setImage 함수
    setNameText 함수

// BgColor 설정 함수
function setBgColor(colors, node) {
  const [color1, color2 = "#000"] = colors;
  node.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// Image src, alt 설정 함수
function setImage(node, name = "", alt = "") {
  node.src = `./assets/${name.toLowerCase()}.jpeg`;
  node.alt = alt;
}

// Text 설정 함수
function setText(node, text) {
  node.textContent = text;
}
```

