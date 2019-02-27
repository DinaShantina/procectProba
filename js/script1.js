function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
    $('.overlay').addClass('active');
    document.getElementsByClassName(".overlay").style.marginLeft = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
}


function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    $('.overlay').removeClass('active');
    // document.getElementById("main").style.marginLeft = "0";
}

$(function () {
    $('[data-toggle="popover"]').popover()
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})



// function myFunction() {
//     document.getElementById("first").style.display = "block";
// }
// document.getElementById('text').addEventListener('click', myFunction);

// var kartici1 = [
//     {
//         title: 'Dotmocracy',
//         photogame: "images/1.png",
//         title2: 'Dotmocracy',
//         time: "5-30мин",
//         group: "3-40",
//         level: "Почетно",
//         materijali: "Стикери, пенкала / маркери.",
//     },
//     {
//         title: 'Project Mid-way Evaluation',
//         photogame: "images/2.png",
//         title2: 'Project Mid-way Evaluation',
//         time: "30-60 минути",
//         group: "2-10",
//         level: "Средно",
//         materijali: "Стикери, пенкала / маркери, флипчарт."
//     }];

var contentsA = "";
var cardA = document.querySelector('.cardA');

contentsA += `<div class="container-fluid">
<div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
        <div class="row">
            <div
                class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                <div class="row cardFlex">
                    <div class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                        <img src="images/1.png" class="img img-responsive rotate-scale-down ainImgCard">
                    </div>
                    <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                        <h1 class="mainHeaderCard2">Dotmocracy</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<div class="container-fluid">
<div class="row bg">
    <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">

        <h1 class="mainHeaderCard">Dotmocracy...</h1>

        <div class="row cardBgGrey">
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div class="explanationFlex">
                    <div class="iconsCard">
                        <i class="far fa-clock"></i>
                    </div>
                    <div class="textNextIcon">
                        <p class="textUnderline">Временска рамка</p>
                        <p class="smallPexplanation">5-30 минути</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div class="explanationFlex">
                    <div class="iconsCard">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="textNextIcon">
                        <p class="textUnderline">Големина на група</p>
                        <p class="smallPexplanation">3-40</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div class="explanationFlex">
                    <div class="iconsCard">
                        <i class="fas fa-landmark"></i>
                    </div>
                    <div class="textNextIcon">
                        <p class="my-left textUnderline">Ниво за фасилитирање</p>
                        <p class="smallPexplanation my-left">Почетно</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div class="explanationFlex">
                    <div class="iconsCard">
                        <i class="fas fa-paint-roller"></i>
                    </div>
                    <div class="textNextIcon">
                        <p class="my-left textUnderline">Материјали</p>
                        <p class="smallPexplanation my-left">Стикери,
                            пенкала /маркери.
                        </p>
                    </div>


                </div>
            </div>
        </div>
        <div class="mainCardContent">
            <p class="boldFont">
                Едноставен метод за групна приоритизација или донесување одлуки. Ова не е
                активност
                сама по себе, туку метод што треба да се користи во процесите каде што се јавува
                приоритет или одлучувањето е цел. Со овој групен методот за брзо се гледа кои
                опции се
                најпопуларни или релевантни. Опциите или идеите се напишани на стикери или
                залепени
                на ѕид за цела група да ги види. Секое лице гласа за можностите за кои смета
                дека се
                најиздржани, а таа информација се користи за да се донесе одлука.</p>

            <hr>

            <p class="boldFont"> Чекор 1:</p>
            <p> Овој метод често се користи кога се генерира збир на можни идеи и треба да се
                проценат
                или да се даде приоритет.
                Ставете ги сите идеи / опции на ѕид, една идеја на еден стикер. Отстранете ги
                сличните
                идеи или дупликати. Колку помалку опции, толку појасното и полесно ќе биде
                гласањето.
                Проверете дали сите опции на ѕидот се јасни за сите членови во групата.
            </p>
            <p>

                <hr>


                <p class="boldFont"> Чекор 2:</p>
                <p>
                    Групата сега ќе гласа за опциите кои тие сметаат дека се најдобри со
                    користење на
                    точки,
                    направени едноставно со маркер на стикерите. Секој член на групата добива 5
                    точки
                    за
                    да гласа (или помалку ако има помалку опции).
                    Овие точки може да бидат дистрибуирани на било кој начин: една точка за 5
                    различни
                    идеи, сите пет точки на една идеја, итн.
                </p>

                <hr>
                <p class="boldFont">Чекор 3:</p>
                <p> Откако сите членови ќе ги дистрибуираат своите точки, групата може да
                    продолжи на
                    различни начини: <br>
                    ● Едноставно избирање на опцијата која добила најмногу точки.<br>
                    ● Спроведување на отворен дијалог за приоритизација. Истражување кои идеи
                    добиле повеќе точки, кои добиле помалку, кои се следните чекори.<br>
                    ● Организирајте ги идеите на линија од најголема до најмала точка, потоа
                    разговарајте за нив.
                </p>
        </div>
    </div>
</div>`;

cardA.innerHTML = contentsA;





