// getAttr 함수
function getAttr(node, prop) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}
// setAttr 함수
function setAttr(node, prop, value) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  // 전달받은 prop의 타입이 string이 아니라면 Error!

  if (typeof prop !== "string") {
    throw new TypeError(
      "setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다."
    );
  }

  if (prop === "textContent") {
    // "textContent" 속성인 경우
    node.textContent = value; // 프로퍼티에 접근하여 값 변경
    return;
  }
  if (!node[prop] && prop !== "class" && prop !== "title") {
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);
}

// attr 함수
function attr(node, prop, value) {
  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}

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

// Audio 설정 함수
function setAudio(audioElement, name) {
  audioElement.volume = 0.1;
  audioElement.src = `./assets/audio/${name.toLowerCase()}.m4a`;
}