document.addEventListener('DOMContentLoaded', () => {

    // buildCalendar();

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let day = today.getDay();
    const dayKorea = ['일', '월', '화', '수', '목', '금', '토']

    // 오늘 날짜
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

    // 이전 버튼 클릭
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
        // buildCalendar();
    });

    // 다음 버튼 클릭
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
        // buildCalendar();
    });
    
    let nowMonth = new Date();

    // 날짜 생성
    // function buildCalendar(){
        
    //     let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1); // 이번달 1일
    //     let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0) // 이번달 마지막 날

    //     let tbodyCal = document.querySelector('.calendar_date_wrap > tbody');

    //     while (tbodyCal.rows.length > 0){ // 이전 결과 초기화
    //         tbodyCal.deleteRow(tbodyCal.rows.length - 1);
    //     }

    //     let nowRow = tbodyCal.insertRow(); // 첫번째 행 추가 // default 값은 '-1' -> 가장 마지막 행 // .insertRow(-1);

    //     for (let j = 0; j < firstDate.getDay(); j++){ // 이번달 1일의 요일만큼
    //         let nowColumn = nowRow.insertCell(); // 새 열 추가
    //     }

    //     for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)){

    //         let nowCloumn = nowRow.insertCell();

    //         let newDiv = document.createElement('p');
    //         newDiv.innerHTML = leftPad(nowDay.getDate());
    //         nowColumn.appendChild(newDiv);

    //         if(nowDay.getDay() == 6){ // 토요일일 경우
    //             nowRow = tbodyCal.insertRow();
    //         }

    //         if(nowDay < today){
    //             newDiv.className = 'pastDay';
    //         }else if(nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()){ // 오늘인 경우
    //             newDiv.className = 'today';
    //             newDiv.onclick = function(){
    //                 choiceDate(this);
    //             }
    //         }else{ // 미래인경우
    //             newDiv.className = 'futureDay';
    //             newDiv.onclick = function(){
    //                 choiceDate(this);
    //             }
    //         }
    //     }

    //     // 날짜 선택
    //     function choiceDate(newDiv){
    //         if(document.getElementsByClassName('choiceDay')[0]){
    //             document.getElementsByClassName('choiceDay')[0].classList.remove('choiceDay');
    //         }
    //         newDiv.classList.add('choiceDay'); // 선택된 날짜에 class 추가
    //     }

    // }

    function addRow(){
        const test = document.getElementById('test');

        const newRow = test.insertRow();

        const newCell1 = newRow.insertCell(0);
        const newCell2 = newRow.insertCell(1);

        newCell1.innerText = 'ddd';
        newCell2.innerText = 'sss';
    }
});