let persons = [
  { name: "둘리", age: 90},
  { name: "마이클", age: 23},
  { name: "뚠띠", age: 2},
  { name: "토니스타크", age: 51},
  { name: "김정은", age: 37}
]
//undefined
for (let count = 0; count <persons.length; count++) {
  if(persons [count].age >= 19) {
      console.log("성인입니다.")
  } else {
      console.log("미성년자입니다")
  }
}

for (let count = 0; count <persons.length; count++) {
  if(persons [count].age >= 19) {
      console.log(persons[count].name+" 님은 성인입니다.")
  } else {
      console.log("미성년자입니다")
  }
}
// VM2131:3 둘리 님은 성인입니다.
// VM2131:3 마이클 님은 성인입니다.
//VM2131:5 미성년자입니다
//  VM2131:3 토니스타크 님은 성인입니다.
//  VM2131:3 김정은 님은 성인입니다.
//  undefined
  for (let count = 0; count <persons.length; count++) {
  if(persons [count].age >= 19) {
      console.log(persons[count].name+"님은 성인입니다.")
  } else {
      console.log(persons[count].name+"님은 미성년자입니다")
  }}
 // VM2205:3 둘리님은 성인입니다.
 // VM2205:3 마이클님은 성인입니다.
 // VM2205:5 뚠띠님은 미성년자입니다
 // VM2205:3 토니스타크님은 성인입니다.
 // VM2205:3 김정은님은 성인입니다.