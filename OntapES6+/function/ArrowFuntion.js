/*
  - Arrow function không phải là một constructor
  - Arrow function không dùng được trong đối tượng
*/


function logger(log)
{
    console.log(log)
}
logger('Hello World')

// Ta cũng có thể dùng funtion gán
const logger1 = function(log)
{
    console.log(log)
}
logger1("Hello World1")

// Ta dùng Arrow Funtion : Chỉ cần bỏ funtion và thêm dấu => vào sau ()
const logger2 = (log) =>{
    console.log(log)
}
logger2("Arrow Funtion")


// Arrow funtion không phải là  constructor

/*
const students = (id,name) => {
    this.id = id 
    this.name = name
}
*/
// Tạo struct
const students = function(id,name) { // Nếu ta lm như trên nó sẽ báo lỗi
    this.id = id 
    this.name = name
}


const student1 = new students(1,"Tuan Anh")
console.log(student1)


// Arrow function không dùng làm hàm trong đổi tượng

/*
const teacher = {
    "Id":01,
    name: 'Nguyen Thi Thuy',
    getName : ()=>{
        console.log(this.name)
    }
}
*/

// Nếu làm như trên ta cũng k thấy đc gì
const teacher = {
    "Id":01,
    name: 'Nguyen Thi Thuy',
    getName : function(){
        console.log(this.name)
    }
}
teacher.getName()



