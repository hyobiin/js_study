document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('.btn_menu');
    const btnClose = document.querySelector('.btn_close');
    const menuBox = document.getElementsByClassName('menu_box')[0];
    const menuBoxH = menuBox.scrollHeight;
    const menuList = document.getElementsByClassName('menu_list_box')[0];

    // 메뉴 보이기
    const clickMenu = () => {
        document.querySelector('body').classList.add('hidden');
        document.querySelector('.menu_wrap').classList.add('active');
    }

    // 메뉴 닫기
    btnMenu.addEventListener('click', clickMenu);
    btnClose.addEventListener('click', function(){
        document.querySelector('body').classList.remove('hidden');
        document.querySelector('.menu_wrap').classList.remove('active');
    });

    // 스크롤시 메뉴 타이틀 fixed
    menuList.onscroll = function(){
        menuList.classList.add('scroll');
        let scrollTop_ = menuList.scrollTop;
        if(scrollTop_ < 50){
            menuList.classList.remove('scroll');
        }
        console.log(scrollTop_);
        // console.log(fMenuLi[1].pageYOffset);
        // console.log(fMenu);
        // 스크롤시 각 메뉴 타이틀에 active
        for(var i = 0; i < fMenu.length; i++){
            // if(fMenuLi[i].scrollTop < 100){
                // document.querySelector('.menu_box li').classList.remove('active');
                // fMenu[i].classList.add('active');
            // }
            console.log(fMenuLi[i].scrollTop_ + ' kk');
            // console.log(fMenuLi);
        }
    }

    // 타이틀 click시 해당 타이틀로 이동
    const fMenu = document.querySelectorAll('.menu_box li');
    const fMenuLi = document.querySelectorAll('.menu_list_box .list_box > li');

    // click시 active 생성
    for(var i = 0; i < fMenu.length; i++){
        fMenu[i].addEventListener('click', function(e){
            for(var j = 0; j < fMenu.length; j++){
                fMenu[j].classList.remove('active');
                fMenuLi[j].classList.remove('active');
            }
        });
    }

    // click시 해당 li로 이동
    fMenu.forEach((el, index) => {
        el.onclick = () => {
            fMenu[index].classList.add('active');
            fMenuLi[index].classList.add('active');

            const menuHeight = document.querySelector('.menu_box').offsetHeight;
            const _location = fMenuLi[index].offsetTop;

            let sum = 0;
            for(var i = 0; i <= index; i++){
                sum = fMenuLi;
            }

            if(event.clientY < 40){
                document.querySelector('.menu_list_box').scrollTo({
                    top: _location - menuHeight,
                    behavior: 'smooth'
                });
            }else{  //.menu_box가 fixed 되지 않았을 때
                document.querySelector('.menu_list_box').scrollTo({
                    top: _location - 100,
                    behavior: 'smooth'
                });
            }
        }
    });

    // **참고

    // 클릭시 각 기준점에서 좌표 구하기
    // function pos(event){
    //     var str = "";
    //     str = "offsetX: " + (event.offsetX == undefined ? event.layerX : event.offsetX);
    //     str += ", offsetY: " + (event.offsetY == undefined ? event.layerY : event.offsetY);
    //     str += "<br/>screenX: " + event.screenX;
    //     str += ", screenY: " + event.screenY;
    //     str += "<br/>clientX: " + event.clientX;
    //     str += ", clientY: " + event.clientY;
    //     str += "<br/>pageX: " + event.pageX;
    //     str += ", pageY: " + event.pageY;
    //     document.getElementById('result').innerHTML = str;
    // }
    
});