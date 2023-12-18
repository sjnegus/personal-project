/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
let today = new Date()
today = today.getFullYear()

let copyright = document.getElementById('copyright')
copyright.textContent = '&copy;'
copyright.innerHTML = `&copy; ${today} Sam Negus`