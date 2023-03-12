const prompt = require('prompt-sync')({sigint: true});

let play = 'y'

while (play == 'y' | play =='Y') {
    
const money = prompt('Nhập số tiền đặt cược $: ');
const num = prompt('Nhập số muốn cược (0-99): ')
console.log('Số may mắn là: ')
console.log( x = Math.floor(Math.random()*100+1))
if(num === x){
    console.log('Bạn đã trúng thưởng ' + (80*money) + ' $')
}
else{console.log('Bạn không trúng thưởng')}
play = prompt('Bạn có muốn tiếp tục không? (y/n)')
}
console.log('Cảm ơn Bạn đã tham gia, hẹn gặp Bạn lần sau')