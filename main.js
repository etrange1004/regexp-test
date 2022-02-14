const str = `
010-1234-5678.
etrange1004@gmail.com
https://www.omdbapi.com/?apikey=d57a48ed&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`

// const regexp = RegExp('the', 'gi')
const regexp1 = /the/gi
const regexp2 = /fox/gi
const regexp3 = /fox/gi

console.log(str.match(regexp1))
console.log(str.match(/the/gi))
console.log(str.match(/\.$/gim))
console.log(regexp2.test(str))
let a = str.replace(regexp3, 'AAA')
console.log(a)
console.log(str)
console.log(str.match(/d$/gm))
console.log(str.match(/^t/gim))
console.log(str.match(/h..p/gim))
console.log(str.match(/fox|dog/gim))
console.log(str.match(/https?/gim))
console.log(str.match(/d{2}/gim))
console.log(str.match(/\b\w{2,3}\b/g))
console.log(str.match(/[0-9]{1,}/g))
console.log(str.match(/[가-힣]{1,}/g))
console.log(str.match(/\bf\w{1,}\b/g)) // 중요
console.log(str.match(/\d{1,}/g))
console.log(str.match(/\s/g))
console.log(str.match(/.{1,}(?=\@)/g))
console.log(str.match(/(?<=\@).{1,}/g))