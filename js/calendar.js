document.addEventListener('DOMContentLoaded', () => {

    buildCalendar();

    // let today = new Date();
    // let year = today.getFullYear();
    // let month = today.getMonth() + 1;
    // let date = today.getDate();
    // let day = today.getDay();
    // const dayKorea = ['일', '월', '화', '수', '목', '금', '토']

    // 오늘 날짜
    /* for(i=day; i <= dayKorea.length;){
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
    }); */
    
    let nowMonth = new Date();


    // calendar_test_table.html 에 있는 거 가져온 것
    // 달력 생성 : 해당 달에 맞춰 테이블을 만들고, 날짜를 채워 넣는다.
    function buildCalendar() {

        let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);     // 이번달 1일
        let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);  // 이번달 마지막날

        let tbody_Calendar = document.querySelector(".Calendar > tbody");
        document.getElementById("calYear").innerText = nowMonth.getFullYear();             // 연도 숫자 갱신
        document.getElementById("calMonth").innerText = leftPad(nowMonth.getMonth() + 1);  // 월 숫자 갱신

        while (tbody_Calendar.rows.length > 0) {                        // 이전 출력결과가 남아있는 경우 초기화
            tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
        }

        let nowRow = tbody_Calendar.insertRow();        // 첫번째 행 추가           

        for (let j = 0; j < firstDate.getDay(); j++) {  // 이번달 1일의 요일만큼
            let nowColumn = nowRow.insertCell();        // 열 추가
        }

        for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {   // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복  

            let nowColumn = nowRow.insertCell();        // 새 열을 추가하고


            let newDIV = document.createElement("p");
            newDIV.innerHTML = leftPad(nowDay.getDate());        // 추가한 열에 날짜 입력
            nowColumn.appendChild(newDIV);

            if (nowDay.getDay() == 6) {                 // 토요일인 경우
                nowRow = tbody_Calendar.insertRow();    // 새로운 행 추가
            }


            
            // 날짜 구분
            if (nowDay < today) {                       // 지난날인 경우
                newDIV.className = "pastDay";
            }
            else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) { // 오늘인 경우           
                newDIV.className = "today";
                newDIV.onclick = function () { choiceDate(this); }
            }
            else {                                      // 미래인 경우
                newDIV.className = "futureDay";
                newDIV.onclick = function () { choiceDate(this); }
            }
        }
    }


    // function addRow(){
    //     const test = document.getElementById('test');

    //     const newRow = test.insertRow();

    //     const newCell1 = newRow.insertCell(0);
    //     const newCell2 = newRow.insertCell(1);

    //     newCell1.innerText = 'ddd';
    //     newCell2.innerText = 'sss';
    // }

});