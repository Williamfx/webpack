// 1.使用ES6导入语法，导入jQuery
import $ from 'jquery'

//导入样式（在webpack中，一切皆模块，都可以通过ES6导入语法进行导入和使用）
import './css/index.css'

import logo from './images/logo.jpg'
$('.box').attr('src', logo)

$(function() {
    $('li:odd').css('background-color', 'pink')
    $('li:even').css('background-color', 'purple')
})()

// function info(target) {
//     target.info = 'Person info'
// }

// @info
// class Person {}

// consle.log(Person.info)
consle.log(1)