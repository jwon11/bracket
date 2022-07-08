$(document).ready(function () {


    $('.project_list').slick({
        slidesToShow: 4, //디폴트 배너 수

        slidesToScroll: 1, //스크롤 되는 배너 수

        autoplay: true, //오토플레이

        autoplaySpeed: 3000, //오토플레이 속도 3초

        arrows: false, //화살표 표시 ( <-, -> ) false

        dots: false, //몇 번째 배너인지 현재 위치 점으로 표시 false

        pauseOnHover: false, //마우스 올리면 일시정지 false


        //반응형
        responsive: [{
            breakpoint: 940, //width px
            settings: {
                slidesToShow: 3 //보여지는 배너 수
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 430,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});
