'use strict';

/*    Chức năng ẩn thông tin cá nhân   */

const thongTin = document.querySelector('.info');
const logIn = document.querySelector('.login');
const logOut = document.querySelector('.logout');
const btnOut = document.querySelector('.btn-secondary');

const anHienTTCaNhan = function (){
    thongTin.classList.add('anThongTin');
    logOut.classList.add('anThongTin');
    logIn.classList.remove('hienLogIn');
}
anHienTTCaNhan ();

    // Xử lý chế độ đăng nhập bằng email
function login() {
    const emailValue = document.getElementById('email').value.toLocaleLowerCase();
    const errorEmail = document.getElementById('error-email');
    
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // Kiểm tra các kí tự nhập vào không phải là kí tự đặc biệt
    const check = emailValue.match(regex);
        //  Email nhập đúng thì hiển thị thông tin
    if (check) {
        thongTin.classList.remove('anThongTin');
        logOut.classList.remove('anThongTin');
        logIn.classList.add('hienLogIn');
    } else {
        errorEmail.innerHTML = 'Email không hợp lệ'
    }
}
    // Xử lý chế độ đăng xuất
btnOut.addEventListener('click', anHienTTCaNhan);


/*    Chức năng ẩn thông tin nghề nghiệp   */


function onMouseOver(element) {
    const viewMore = element.querySelector('.view-more');
    viewMore.style.display = 'inline-block';
}

function onMouseOut(element) {
    const viewMore = element.querySelector('.view-more');
    if(!viewMore.classList.value.includes('view-less')){
        viewMore.style.display = 'none';
    }
}

function clickViewMore(element){
    const listNangLuc = element.closest('.list-nangluc');
    const viewMore = listNangLuc.querySelector('.control-view');
    const sectionContent = listNangLuc.querySelectorAll('.section-content');
    if (viewMore.classList.value.includes('view-more')){
        sectionContent.forEach((element) => {
            element.style.display = 'block';
        });
        viewMore.classList.remove('view-more');
        viewMore.classList.add('view-less');
        viewMore.innerHTML = 'View less';
    }else{
        sectionContent.forEach((element) => {
            element.style.display = 'none';
        });
        viewMore.classList.remove('view-less');
        viewMore.classList.add('view-more');
        viewMore.innerHTML = 'View more';
    }
}
