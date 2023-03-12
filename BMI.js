const height = 1.9
const weight = 60

const man = [ height , weight ]

function BMI(person){
console.log('Bạn cao ' + person[0] + 'm và nặng ' + person[1] + 'kg')
    let BMI = person[1] / ( person[0] * person[0] )
    if (BMI < 18.5) {
        console.log( 'Bạn đang Gầy và có Nguy cơ bệnh Thấp')       
    }
    if (18.5 <= BMI && BMI < 25) {
        console.log( 'Bạn đang Bình Thường và có Nguy cơ bệnh Trung Bình')       
    }
    if (25 <= BMI && BMI < 30) {
        console.log( 'Bạn đang Hơi Béo và có Nguy cơ bệnh Cao')       
    }
    if (30 <= BMI && BMI < 35) {
        console.log( 'Bạn đang Béo Phì Cấp Độ 1 và có Nguy cơ bệnh Cao')       
    }
    if (35 <= BMI && BMI < 40) {
        console.log( 'Bạn đang Béo Phì Cấp Độ 2 và có Nguy cơ bệnh Rất Cao')       
    }
    if (BMI >= 40) {
        console.log( 'Bạn đang Béo Phì Cấp Độ 3 và có Nguy cơ bệnh Nguy Hiểm')       
    }


}
BMI(man)