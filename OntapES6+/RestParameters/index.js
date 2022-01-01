// Dùng rest để nhận nhiều đối số
// Dùng với các biến thông thường

const logger = (a,b,...rest) => { // Ta có thể thêm parameters những đối số thừa sẽ đc đưa vào rest
    console.log(a,b)
    console.log(rest)
}
logger(1,2,3,4,5)

console.log("Res dùng cho object")

const logger1 = ({name,version,...rest}) =>{ // Rest cho obj cx tương tự
    console.log(name,version) // Chú ý đối số nhận trc rest parameters ta phải dùng đúng tên của obj 
    console.log(rest)
}
logger1({
    name:"Python",
    version:2020,
    teacher: "Tuan Anh",
    price:"free",
})

const logger2 = ([a,b,...rest]) =>{// Rest cho array cx tương tự. Không có chú ý
    console.log(a,b)
    console.log(rest)
}
logger2([1,2,3,4,5,6])




