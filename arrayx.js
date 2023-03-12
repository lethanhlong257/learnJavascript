const a = [1,2,3,4,5,'a','b',7]
const b = [2,3,4,'c','b']

console.log('mảng a = ' + a)
console.log('mảng b = ' + b)
function locso(array) {
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (isNaN(element)){
        array.splice(index,1)
        index--
    }    
    }
}
locso(a)
locso(b)
console.log('Lọc các kí tự k phải số ra khỏi mảng a = ' + a)
console.log('Lọc các kí tự k phải số ra khỏi mảng b = ' + b)

const same = []
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    if (b.includes(element)) {
        same.push(element)
    }
}
console.log('Các giá trị bị trùng nhau ở 2 mảng a và b = ' + same)

