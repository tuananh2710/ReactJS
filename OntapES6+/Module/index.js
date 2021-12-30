import logger from './logger.js'// lấy dữ liệu từ export default
import {TYPE_LOG,TYPE_WARN,TYPE_ERROR} from "./logger.js" // Lấy dữ liệu từ export const

// Muốn dùng được import thì ta phải dùng type = "Module"
console.log(logger("This is export default"))
console[TYPE_LOG](logger("This is export const"))
console[TYPE_WARN](logger("This is export const"))
console[TYPE_ERROR](logger("This is export const"))

// Ta cũng có thể import theo kiểu này
import * as modules from './logger.js'
console[TYPE_LOG](modules) // Ta có thể lấy cả kiểu default and const



// Dùng module trung gian
// Ta export default từ app.js thông qua index1/js
import loggerTG from './logger/index1.js'
console.log(loggerTG,"Import trung gian")

/*
khi import thì ta có thể đổi tên thằng (export bằng default)
Đôi với export const thì không đổi được tên
VD: import logger -> import log => ok
VD: import {TYPE_LOG} -> import {type} -> error
*/