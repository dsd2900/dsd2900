const fruits = [
  { number:  1, title: "레드향"　　　　},
  { number:  2, title: "샤인머스켓"　　},
  { number:  3, title: "산청딸기"　　　},
  { number:  4, title: "한라봉"　　　　},
  { number:  5, title: "사과"　　　　　},
  { number:  6, title: "애플망고"　　　},
  { number:  7, title: "딸기"　　　　　},
  { number:  8, title: "천혜향"　　　　},
  { number:  9, title: "과일선물세트"　},
  { number: 10, title: "귤"　　　　　 },
]
//undefined

for (let fr=0; fr<fruits.length; fr=fr+1) {
  if (fruits[fr].number) {
console.log(fruits[fr].number + " "+fruits[fr].title)
}
}
// VM3087:3 1 레드향
// VM3087:3 2 샤인머스켓
// VM3087:3 3 산청딸기
// VM3087:3 4 한라봉
// VM3087:3 5 사과
// VM3087:3 6 애플망고
// VM3087:3 7 딸기
// VM3087:3 8 천혜향
// VM3087:3 9 과일선물세트
// VM3087:3 10 귤
// undefined

for (let fr=0; fr<fruits.length; fr=fr+1) {
  if (fruits[fr].number) 
console.log(`${fruits[fr].number} ${fruits[fr].title}`)       //문자열이 길거나 숫자와 혼합해서 사용할때 자주 쓰임
}

// VM3165:3 1 레드향
// VM3165:3 2 샤인머스켓
// VM3165:3 3 산청딸기
// VM3165:3 4 한라봉
// VM3165:3 5 사과
// VM3165:3 6 애플망고
// VM3165:3 7 딸기
// VM3165:3 8 천혜향
// VM3165:3 9 과일선물세트
// VM3165:3 10 귤
// undefined
