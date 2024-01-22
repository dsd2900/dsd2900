const email = "dsd29002@gmail.com"
email.includes("@")
// true
email.split("@")
// (2) ['dsd29002', 'gmail.com']
email.split("@")[0]
// 'dsd29002'
email.split("@")[1]
// 'gmail.com'
let userMail = email.split("@")[0]
// undefined
// userMail
// 'dsd29002'
let company = email.split("@")
// undefined
company
// 'gmail.com'
let maskingMail = []
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail
// (4) ['d', 's', 'd', '2']
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail.join("-")
// 'd-s-d-2-*-*-*-*'
maskingMail.join("")
// 'dsd2****'
maskingMail.join("") + "@" +company
// 'dsd2****@gmail.com'
// undefined
let result = maskingMail.join("") + "@" + company
// undefined
result
'dsd2****@gmail.com'