 const auth = () => {
  const token = String(Math.floor(Math.random() *1000000)).padStart(6, "0")
  document.getElementById("target").innerText =token
  document.getElementById("target").style.color = "#" + token

}



//셀프 클로징 태그인 인풋태그는 InnerText 대신 Value 값을 넣는다.
// innerText와 Value의 차이만 알고 있으면 된다..