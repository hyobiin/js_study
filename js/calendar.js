document.addEventListener('DOMContentLoaded', () => {

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let day = today.getDay();
    const dayKorea = ['일', '월', '화', '수', '목', '금', '토']

    for(i=day; i <= dayKorea.length;){
        const $today = document.getElementsByClassName('today')[0]; //class는 중복이 가능해서 배열의 몇 번째 값인지 써줘야 함
        $today.innerText = today.toLocaleDateString() + ' ' + dayKorea[i];
        break;
    }

    const $year = document.getElementsByClassName('year_num')[0];
    $year.innerText = year;
    let $month = document.getElementsByClassName('month_num')[0];
    $month.innerText = month;

    const $btnPrev = document.getElementsByClassName('btn_prev')[0];
    const $btnNext = document.getElementsByClassName('btn_next')[0];

    $btnPrev.addEventListener('click', function(){
        let saveMonth = $month.innerText;
        let saveYear = $year.innerText;
        function calMonth(){
            if($month.innerText = saveMonth - 1 < 1){
                $month.innerText = 12;
                $year.innerText = saveYear - 1;
            }else{
                $month.innerText = saveMonth - 1;
            }
        }
        calMonth();
    });

    $btnNext.addEventListener('click', function(){
        let saveMonth = $month.innerText;
        let saveYear = $year.innerText;
        function calMonthPlus(){
            if($month.innerText = parseInt(saveMonth) + 1 > 12){
                $month.innerText = 1;
                $year.innerText = parseInt(saveYear) + 1;
            }else{
                $month.innerText = parseInt(saveMonth) + 1;
            }
        }
        calMonthPlus();
    });
    
});