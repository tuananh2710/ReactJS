// Tác dụng của spread là gì?
/*
    - nếu là arr thì nó sẽ bỏ '[]' đi 
    - nếu là obj nó sẽ bỏ '{}' đi
*/ 

const defaultConfig1 = {
    api : "https://fullstack.edu.vn/learning/reactjs?id=2727",
    price:'free',
}
// Dùng spead để bỏ {} rồi gán vào cái ta cần vd

// Sau khi gán xuống thì api sẽ bị ghi đè
const JS = {
    ...defaultConfig1,
    api : "https://fullstack.edu.vn/JS",
}
console.log(JS)


const logger = (a,...rest) =>{
    console.log(a)
    console.log(rest)
}

arr = ["Python","Js","Ruby"] 
logger(...arr)  // dùng spread ... để bỏ dấu "[]" 
