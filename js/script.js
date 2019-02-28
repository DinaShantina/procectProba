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
// var a = document.getElementsByTagName('a');



var igri = [
    {
        id: 'card1',
        ime: 'Dotmocracy',
        slika: "images/1.png",
        kategorija: "Акција",
        miniSlika: "images/1.png",
        vremetranje: "5-30мин",
        link: "href='singlecard.html'",
    },
    {
        id: 'card2',
        ime: 'Project Mid-way Evaluation',
        slika: "images/2.png",
        kategorija: "Акција",
        miniSlika: "images/2.png",
        vremetranje: "30-60мин",
        link: "href='singlecard.html'",
    },
    {
        id: 'card3',
        ime: 'Тhe 5 Whys',
        slika: "images/3.png",
        kategorija: "Иновации",
        miniSlika: "images/3.png",
        vremetranje: "30-60мин",
        link: "href='singlecard.html'",
    },
    {
        id: 'card4',
        ime: 'Future Trends',
        slika: "images/4.png",
        kategorija: "Иновации",
        miniSlika: "images/4.png",
        vremetranje: "60-120мин",
        link: "href='singlecard.html'",
    },
    {
        id: 'card5',
        ime: 'Story Building',
        slika: "images/5.png",
        kategorija: "Иновации",
        miniSlika: "images/5.png",
        vremetranje: "30-60мин",
        link: "href='singlecard.html'",

    },
    {
        id: 'card6',
        ime: 'Тake a Stand',
        slika: "images/6.png",
        kategorija: "Иновации",
        miniSlika: "images/6.png",
        vremetranje: "60-120мин",
        link: "href='singlecard.html'",
    },
    {
        id: 'card7',
        ime: 'IDOARRT Meeting Design',
        slika: "images/7.png",
        kategorija: "Акција",
        miniSlika: "images/7.png",
        vremetranje: "5-30мин",
        link: "href='singlecard.html'",
    },
    {
        id: 'card8',
        ime: '3 Action Steps',
        slika: "images/8.png",
        kategorija: "Акција",
        miniSlika: "images/8.png",
        vremetranje: "120-240мин",
        link: "href='singlecard.html'",
    },
    {
        id: 'card9',
        ime: 'Letter to Myself',
        slika: "images/9.png",
        kategorija: "Иновации",
        miniSlika: "images/9.png",
        vremetranje: "5-30мин",
        link: "href='singlecard.html'",
    },
    {
        id: 'card10',
        ime: 'Аctive Listening',
        slika: "images/10.png",
        kategorija: "Иновации",
        miniSlika: "images/10.png",
        vremetranje: "60-120мин",
        link: "href='singlecard.html'",
    },
    {
        id: 'card11',
        ime: 'Feedback: I appreciate',
        slika: "images/11.png",
        kategorija: "Лидерство",
        miniSlika: "images/11.png",
        vremetranje: "60-120мин",
        link: "href='singlecard.html'",
    },
    {
        id: 'card12',
        ime: 'Explore your values',
        slika: "images/12.png",
        kategorija: "Лидерство",
        miniSlika: "images/12.png",
        vremetranje: "60-120мин",
        link: "href='singlecard.html'",
    },
    {
        id: 'card13',
        ime: 'Reflection Individual',
        slika: "images/13.png",
        kategorija: "Лидерство",
        miniSlika: "images/13.png",
        vremetranje: "30-60мин",
        link: "href='singlecard.html'",
    },
    {
        id: 'card14',
        ime: 'Back-turned Feedback',
        slika: "images/14.png",
        kategorija: "Лидерство",
        miniSlika: "images/14.png",
        vremetranje: "60-120мин",
        link: "href='singlecard.html'",
    },
    {
        id: 'card15',
        ime: 'Conflict Responses',
        slika: "images/15.png",
        kategorija: "Тим",
        miniSlika: "images/15.png",
        vremetranje: "60-120мин",
        link: "href='singlecard.html'",
    },
    {
        id: 'card16',
        ime: 'Myers-Briggs Team Reflection',
        slika: "images/16.png",
        kategorija: "Тим",
        miniSlika: "images/16.png",
        vremetranje: "60-120мин",
        link: "href='singlecard.html'",
    },
    {
        id: 'card17',
        ime: 'Personal Presentations',
        slika: "images/17.png",
        kategorija: "Тим",
        miniSlika: "images/17.png",
        vremetranje: "60-240мин",
        link: "href='singlecard.html'",
    },
    {
        id: 'card18',
        ime: 'Circles of influence',
        slika: "images/18.png",
        kategorija: "Иновации",
        miniSlika: "images/18.png",
        vremetranje: "30-120 минути",
        link: "href='singlecard.html'",
    },


];
var contentElement = document.getElementById('content');
if (contentElement !== null) {
    var contents = "";
    igri.forEach(function (element) {
        contents +=
            `<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
   <div id="`+ element.id + `" class="text">
       <a class="textDecoA"`+ element.link + `data-toggle="tooltip" container: 'body' data-placement="auto top"
        title="Click to enter the game"
           data-trigger="mouse hover">
           <div class="bgWhite">
               <div class="bgGames">
                   <img src="`+ element.slika + `"class="img img-responsive mainPhoto" alt="Photo of Brainster Logo">
               </div>
               <div class="cardText cardFlex">
                   <div>
                       <h4 class="py-x noWhiteSpace">`+ element.ime + `</h4>
                       <p class="noWhiteSpace py-x">Категорија: <span class="spanInovacii">`+ element.kategorija + `</span></p> </div>
                        <div class="IconBg1 iconProperties iconHover">  <img src="`+ element.miniSlika + `"class="img img-responsive imgCard" alt="Logo Game"> </div>
                   </div>
                   <p class="py-x1 text-Vreme"><i class="fas fa-clock"></i><span class="spanVremetranjev py-x">Времетрање</span></p>
                   <p class="pTime text-muted">`+ element.vremetranje + ` </p>
               </div>
           </div>
       </a>
   </div>
</div>`;
    });
    contentElement.innerHTML = contents;
} else {
    var target = window.localStorage.getItem('target');
    var contentsA = "";
    var cardA = document.querySelector('.cardA');
    switch (target) {
        case "card1":
            contentsA += `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>
            <div class="row">
            <div
                class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                <div class="row cardFlex">
                    <div class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                        <img src="images/1.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 1">
                    </div>
                    <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                    <h1 class="mainHeaderCard2 hidden-xs">Dotmocracy</h1>
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
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <div class="explanationFlex">
                                <div class="iconsCard">
                                    <i class="far fa-clock"></i>
                                </div>
                                <div class="textNextIcon">
                                    <p>Временска рамка</p>
                                    <p class="smallPexplanation">5-30 минути</p>
                                </div>
                            </div>
                        </div>
                    
            
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <div class="explanationFlex">
                                <div class="iconsCard">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="textNextIcon">
                                    <p>Големина на група</p>
                                    <p class="smallPexplanation">3-40</p>
                                </div>
                            </div>
                        </div>
            
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <div class="explanationFlex">
                                <div class="iconsCard">
                                    <i class="fas fa-landmark"></i>
                                </div>
                                <div class="textNextIcon">
                                    <p>Ниво за фасилитирање</p>
                                    <p class="smallPexplanation">Почетно</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <div class="explanationFlex">
                                <div class="iconsCard">
                                    <i class="fas fa-paint-roller"></i>
                                </div>
                                <div class="textNextIcon">
                                    <p>Материјали</p>
                                    <p class="smallPexplanation">Стикери,
                                        пенкала/ маркери
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
                            или да се даде приоритет.<br>
                            Ставете ги сите идеи / опции на ѕид, една идеја на еден стикер. Отстранете ги
                            сличните
                            идеи или дупликати. Колку помалку опции, толку појасното и полесно ќе биде
                            гласањето.<br>
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
                                да гласа (или помалку ако има помалку опции).<br>
                                Овие точки може да бидат дистрибуирани на било кој начин: една точка за 5
                                различни
                                идеи, сите пет точки на една идеја, итн.
                            </p>
            
                            <hr>
                            <p class="boldFont">Чекор 3:</p>
                            <p> Откако сите членови ќе ги дистрибуираат своите точки, групата може да
                                продолжи на
                                различни начини: <br>
                                <ul>
                                <li> Едноставно избирање на опцијата која добила најмногу точки.</li> 
                                <li>  Спроведување на отворен дијалог за приоритизација. Истражување кои идеи
                                добиле повеќе точки, кои добиле помалку, кои се следните чекори.</li> 
                                <li>  Организирајте ги идеите на линија од најголема до најмала точка, потоа
                                разговарајте за нив.</li> 
                                </ul>
                            </p>
                    </div>
                </div>
            </div> `;

            cardA.innerHTML = contentsA;
            window.location.hash = 'card1';
            break;

        case "card2":
            contentsA += `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>
                    <div class="row">
                        <div
                            class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                            <div class="row cardFlex">
                                <div class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                    <img src="images/2.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 2">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                    <h1 class="mainHeaderCard2a hidden-xs">Project Mid-way Evaluation</h1>
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
            
                    <h1 class="mainHeaderCard">Project Mid-way Evaluation...</h1>
                  
                    <div class="row cardBgGrey">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <div class="explanationFlex">
                                <div class="iconsCard">
                                    <i class="far fa-clock"></i>
                                </div>
                                <div class="textNextIcon">
                                    <p>Временска рамка</p>
                                    <p class="smallPexplanation">30-60 минути</p>
                                </div>
                            </div>
                        </div>
                    
            
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <div class="explanationFlex">
                                <div class="iconsCard">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="textNextIcon">
                                    <p>Големина на група</p>
                                    <p class="smallPexplanation">2-10</p>
                                </div>
                            </div>
                        </div>
            
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <div class="explanationFlex">
                                <div class="iconsCard">
                                    <i class="fas fa-landmark"></i>
                                </div>
                                <div class="textNextIcon">
                                    <p>Ниво за фасилитирање</p>
                                    <p class="smallPexplanation">Средно</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <div class="explanationFlex">
                                <div class="iconsCard">
                                    <i class="fas fa-paint-roller"></i>
                                </div>
                                <div class="textNextIcon">
                                    <p>Материјали</p>
                                    <p class="smallPexplanation">Стикери,
                                        пенкала /маркери, флипчарт.
                                    </p>
                                </div>
            
            
                            </div>
                        </div>
                    </div>
                    <div class="mainCardContent mainCardContent1">
                        <p class="boldFont">
                            Овој метод е корисен за оценување на проект во тек, за да се види дали треба да се
                            направат корекции за тимот да работи поефективно заедно. Обезбедува рамка за
                            дискусија. Учесниците се фокусираат на работите што помагаат или го попречуваат
                            тимскиот процес и создаваат чекори за подобрување.</p>
                        <hr>
            
                        <p class="boldFont"> Чекор 1:</p>
                        <p> Соберете го тимот околу флипчарт или табла. Дајте им на сите пенкала и стикери.<br>
                            Белешка до фасилитаторот:<br>
                            Ако имате група поголема од 10, можете да ги поделите на помали подгрупи, да ја
                            стартувате вежбата и да дискутирате за вежбата како целина на крајот.
                        </p>
                        <p>
                            <hr>
            
            
                            <p class="boldFont"> Чекор 2:</p>
                            <p>
                                Нацртајте една од следните слики на флипчарт / табла. Сите тие се слични, но ќе
                                даваат
                                малку поинакви резултати:<br><br>
            
                                Брод со едро и сидро. Едрото ги претставува работите кои го водат проектот напред и
                                сидростите работи што го држат назад.<br>
                                ● Брод со едро и сидро. Едрото ги претставува работите кои го водат проектот
                                напред, сидрото работи што го држат назад.<br>
                                ● Волан со пет делови наречен: стоп, старт, продолжи, повеќе, помалку.<br>
                                ● Три колони наречени: лут (со луто лице); тажен (тажно лице); задоволен (среќно
                                лице).
                            </p>
                            <hr>
                            <p class="boldFont"> Чекор 3:</p>
                            <p> Побарајте од членовите на тимот да додадат стикери на флипчартот со зборови за
                                секоја
                                категорија, поединечно и во тишина. Дајте им време колку што е потребно, но 5-10
                                минути
                                треба да биде доволно.
                            </p>
                            <hr>
                            <p class="boldFont"> Чекор 4:</p>
                            <p> Тие сега треба да ги групираат белешките во секоја категорија. Идентификување на
                                дупликати, обрасци и преклопувања.
                            </p>
                            <hr>
                            <p class="boldFont"> Чекор 5:</p>
                            <p> Откако ќе се организираат белешките, тимот може да разговара за она што се појавило.
                                Дали нешто изненадува? Кои се заедничките карактеристики? Што видовме претходно?
                                Како се чувствуваме во врска со ова? Дискутирајте околу 15-20 минути. Обидете се да
                                се
                                фокусирате на дискусијата. Осигурајте се дека членовите на тимот не се лизгаат во
                                генерализирање или се обвинуваат меѓусебно. Целта е да се има ефикасна, ефективна
                                дискусија за процесот до сега.
                            </p>
                            <hr>
                            <p class="boldFont"> Чекор 6:</p>
                            <p> Откако дискусијата ќе заврши, тимот треба да дефинира некои активности. Осигурајте
                                се
                                дека тие се запишани, споделени помеѓу тимот и релевантните засегнати страни, и им
                                се
                                дава рок за завршување.
                            </p>
                    </div>
                </div>
            </div>`
            cardA.innerHTML = contentsA;
            window.location.hash = 'card2';
            break;
        case "card3":
            contentsA += `<div class="container-fluid">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
            <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
            <ul class="list-inline flexA">
                <li>
                    <a href="https://www.brainster.io/business" target="_blank">
                        <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                    </a>
                </li>
                <li>
                    <a href="https://www.brainster.io/business" target="_blank">
                        <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                    </a>
                </li>

            </ul>
        </div>
                <div class="row">
                    <div
                        class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                        <div class="row cardFlex">
                            <div class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                <img src="images/3.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 3">
                            </div>
                            <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                <h1 class="mainHeaderCard2 hidden-xs">Тhe 5 Whys</h1>
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

                <h1 class="mainHeaderCard">Тhe 5 Whys</h1>
                <div class="row cardBgGrey">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <div class="explanationFlex">
                        <div class="iconsCard">
                            <i class="far fa-clock"></i>
                        </div>
                        <div class="textNextIcon">
                            <p>Временска рамка</p>
                            <p class="smallPexplanation">30-60 минути</p>
                        </div>
                    </div>
                </div>
            
    
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <div class="explanationFlex">
                        <div class="iconsCard">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="textNextIcon">
                            <p>Големина на група</p>
                            <p class="smallPexplanation">2-10</p>
                        </div>
                    </div>
                </div>
    
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <div class="explanationFlex">
                        <div class="iconsCard">
                            <i class="fas fa-landmark"></i>
                        </div>
                        <div class="textNextIcon">
                            <p>Ниво за фасилитирање</p>
                            <p class="smallPexplanation">Почетно</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <div class="explanationFlex">
                        <div class="iconsCard">
                            <i class="fas fa-paint-roller"></i>
                        </div>
                        <div class="textNextIcon">
                            <p>Материјали</p>
                            <p class="smallPexplanation">Бела табла или флипчарт, листови.
                            </p>
                        </div>
    
    
                    </div>
                </div>
            </div>
                <div class="mainCardContent">
                    <p class="boldFont">
                        Овој едноставен и моќен метод е корисен за откривање на јадрото на проблемот или
                        предизвикот. Како што сугерира насловот, групата дефинира проблеми, а потоа го
                        поставува прашањето &quot;зошто&quot; пет пати, често користејќи го даденото
                        објаснување
                        како
                        почетна точка за креативно решавање на проблеми.</p>
                    <hr>

                    <p class="boldFont"> Чекор 1:</p>
                    <p> Работете како група за да креирате изјава за проблем. Ова помага да се собере
                        групата
                        заедно и да се фокусира околу специфичниот предизвик. Напишете го на врвот на
                        хартијата / таблата / флипчартoт. Изјавата за проблемот треба да биде сопствена
                        изјава,
                        формулирана што е можно поконцизно.<br>
                        Пример: &quot;Ние трошиме премногу пари во нашата канцеларија&quot;. /
                        &quot;Клиентите
                        се
                        незадоволни од квалитетот на нашиот најнов производ&quot;.
                    </p>
                    <p>
                        <hr>


                        <p class="boldFont"> Чекор 2:</p>
                        <p>
                            Прашајте ја групата: Зошто го имаме овој проблем? Разговарајте за одговорот.
                            Обидете се со уште некоја изјава за проблем.
                        </p>
                        <hr>
                        <p class="boldFont"> Чекор 3:</p>
                        <p> Прашајте ја групата повторно: Зошто го имаме овој проблем? Повторно,
                            дискутирајте за
                            одговорот.
                        </p>
                        <hr>
                        <p class="boldFont"> Чекор 4:</p>
                        <p> Ако групата се чувствува како да ја идентификувалa основната причина за
                            проблемот,
                            тогаш може да престанете да прашувате зошто. Ако не, тогаш продолжете со
                            циклусот.
                        </p>
                        <hr>
                        <p class="boldFont"> Чекор 5:</p>
                        <p> Откако ќе ја имате изјавата за проблемот од корен, прашајте ја групата како би
                            сакале да
                            продолжите да ја решите. Можете да користите една од методите за генерирање на
                            идеи
                            во алатникот за да започнете да креирате нови идеи за решавање на проблемот.
                        </p>

                </div>

            </div>
        </div>
    </div>`

            cardA.innerHTML = contentsA;
            window.location.hash = 'card3';
            break;
        case "card4":
            contentsA += `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>
                    <div class="row">
                        <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                            <div class="row cardFlex">
                                <div class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                    <img src="images/4.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 4">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                    <h1 class="mainHeaderCard2 hidden-xs">Future Trends</h1>
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
                    <h1 class="mainHeaderCard">Future Trends...</h1>
                    <div class="row cardBgGrey">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Временска рамка</p>
                                <p class="smallPexplanation">60-120 минути</p>
                            </div>
                        </div>
                    </div>
                
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Големина на група</p>
                                <p class="smallPexplanation">2-40</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-landmark"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Ниво за фасилитирање</p>
                                <p class="smallPexplanation">Средно</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-paint-roller"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Материјали</p>
                                <p class="smallPexplanation">Пенкала,
                                бела табла или флипчарт,
                                маркери,
                                селотејп.
                                </p>
                            </div>
        
        
                        </div>
                    </div>
                </div>
                    <div class="mainCardContent">
                        <p class="boldFont">
                            Оваа алатка им помага на малите и големите групи да ги идентификуваат клучните
                            трансформативни трендови во текот на следните три години, да ги истражат нивните
                            последици и да почнат да гледаат како можат да се исполнат за да создадат можности за
                            бизнис. До крајот на работилницата, учесниците креираат листа на најрелевантни
                            трендови; и разработка на три најважни трендови, вклучувајќи идеи околу тоа како
                            нивната организација би можела да дејствува за да ги исполни.</p>
                        <hr>
            
                        <p class="boldFont"> Чекор 1:</p>
                        <p> Претставете ја целта на работилницата. Објаснете дека во блиска иднина ќе разговараме
                            за трансформативните трендови и ќе разгледаме како нашата организација може да
                            дејствува за да ги исполни тие трендови.<br><br>
                            Започнете со Stinky Fish вежбата од 20 минути, за поддршка на групата за безбедно
                            споделување на грижите за иднината и нејзините предизвици. Целта е да се нормализира
                            неизвесноста за иднината и да се отвори простор за разговор за тоа.<br><br>
                            Контекстот за Stinky Fish вежбата може да биде: &quot;Сподели една грижа / страв за
                            дигиталната иднина и како тоа ќе влијае на тебе лично или професионално&quot;.
                        </p>
                        <p>
                            <hr>
            
            
                            <p class="boldFont"> Чекор 2:</p>
                            <p>
                                Сега групата заеднички ќе ги прикаже најрелевантните трендови кои ја менуваат
                                нивната
                                индустрија во текот на следните 3 години.<br>
                                Овој чекор има четири круга од 5 минути. Секој круг се фокусира на различна
                                категорија:
                                бизнис, корисничко однесување, барања за таленти и технологија. Задачата е да се
                                размислува на колку што е можно повеќе релевантни трендови во секоја категорија.
            
                                Дајте им на учесниците стикери и маркери. Потребно е да напишат еден тренд на еден
                                стикер, и да го претстават пред групата пред да го закачат на ѕид, соодветно во
                                некоја од
                                4те категории.<br>
                                Дајте им 5 минути по категорија. Вкупно 20 минути.
                                Објаснете дека следниот чекор е брзо да се даде приоритет на трендовите во кои
                                    ќе има
                                    најголемо влијание. Треба да трае околу 5 минути.
                                    Користете ја алатката Dotmocracy. Совршено е за да им се помогне на големите
                                    групи да
                                    направат брзи приоритизации. Користејќи лепливи точки или маркери, на секој
                                    учесник му
                                    доставуваме 8 точки (гласови) за да ги дистрибуирате низ трендовите што ги
                                    објавиле.
                                    Тие треба да го засноваат своето гласање за тоа кои трендови се чувствуваат
                                    &quot;ќе имаат
                                    најголемо влијание врз нивниот бизнис во текот на следните 3 години&quot;.
            
                                <hr>
                                <p class="boldFont"> Чекор 3:</p>
                                <p> Целта на овој чекор е групите заеднички да ги истражуваат најважните трендови и
                                    да
                                    генерираат идеи околу деловните можности што би можеле да ги отворат.<br>
                                    Поделете ја групата во помали групи од 2-4 луѓе. Секоја нова група ќе работи со
                                    еден
                                    тренд, ги истражува своите можности, последици, потенцијални ризици и замислува:
                                    Како
                                    ќе изгледа нашата компанија за три години целосно ги искористиме можностите на
                                    овој
                                    тренд? Кои чекори треба да ги преземеме денес за да почнеме да се движиме на тој
                                    начин?<br>
                                    На секоја група дајте и темплејт со прашања и 15-20 минути за да го завршите.
                                    Пред да
                                    почнат да работат, потсетете ги учесниците дека ова е истражувачка вежба. Тие
                                    треба да
                                    работат од она што го знаат и чувствуваат, и да го комплетираат образецот
                                    прилично
                                    брзо.<br>
                                    Откако ќе ги пополнат шаблоните, групите повторно да продолжат со презентирање
                                    еден
                                    на друг.
                                </p>
                                <hr>
                                <p class="boldFont"> Чекор 4:</p>
                                <p> Зборувајте накратко за &quot;Што направивме денес денес&quot;. Потоа поканете го
                                    секој учесник
                                    на &quot;одјавување&quot; со еден увид од денот што им дава позитивно чувство за
                                    иднината.<br>
                                    Објаснете ги следните чекори на групата. Што ќе правите со трендовите и
                                    сознанијата?
                                    Како ќе работите со нив како индивидуи и компании?
                                </p>
                    </div>
                </div>
            </div>`
            cardA.innerHTML = contentsA;
            window.location.hash = 'card4';
            break;
        case "card5":
            contentsA += `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>
                    <div class="row">
                        <div
                            class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                            <div class="row cardFlex">
                                <div class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                    <img src="images/5.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 5">
                                </div>
                                    <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                        <h1 class="mainHeaderCard2 hidden-xs">Story Building</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row bg">
                    <div
                        class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                        <h1 class="mainHeaderCard">Story Building</h1>
                        <div class="row cardBgGrey">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <div class="explanationFlex">
                                <div class="iconsCard">
                                    <i class="far fa-clock"></i>
                                </div>
                                <div class="textNextIcon">
                                    <p>Временска рамка</p>
                                    <p class="smallPexplanation">30-60 минути</p>
                                </div>
                            </div>
                        </div>
                    
            
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <div class="explanationFlex">
                                <div class="iconsCard">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="textNextIcon">
                                    <p>Големина на група</p>
                                    <p class="smallPexplanation">2-40</p>
                                </div>
                            </div>
                        </div>
            
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <div class="explanationFlex">
                                <div class="iconsCard">
                                    <i class="fas fa-landmark"></i>
                                </div>
                                <div class="textNextIcon">
                                    <p>Ниво за фасилитирање</p>
                                    <p class="smallPexplanation">Почетно</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <div class="explanationFlex">
                                <div class="iconsCard">
                                    <i class="fas fa-paint-roller"></i>
                                </div>
                                <div class="textNextIcon">
                                    <p>Материјали</p>
                                    <p class="smallPexplanation">Лаптоп,
                                    таблет,
                                    смартфон.
                                    </p>
                                </div>
            
            
                            </div>
                        </div>
                    </div>
                        <div class="mainCardContent">
                            <p class="boldFont">
                                Кратка вежба за да се донесе &quot;градењето приказна&quot; во живот: клучен концепт во
                            мрежните дигитални комуникации..</p>
                            <hr>
        
                                <p class="boldFont"> Чекор 1:</p>
                                <p> Објаснете ја целта на работилницата: практично да се истражи идејата за премин од
                                    раскажување приказни до градење приказни, суштински концепт во мрежниот дигитален
                                    свет.<br><br>
                                    Денеска ќе градиме неколку приказни заедно со помош на постоечки кориснички
                                    содржини користејќи бесплатна веб-услуга наречена Storify.
                        </p>
                                <p>
                                    <hr>
                                        <p class="boldFont"> Чекор 2:</p>
                                        <p>
                                            Разговарајте со групата за видовите на приказни кои би биле интересни и соодветни за
                                            градење. Тие можат да бидат релевантни за работилницата, програмата или компанијата;
                                            или можат да бидат поврзани со лична страст.<br><br>
                                            Целта не е да се создаде квалитетно парче содржина, туку да се експериментира и да
                                            се
                                            обиде да направи разновидна алатка.
                    
                                <hr>
                                                <p class="boldFont"> Чекор 3:</p>
                                                <p> Потребно е сите да се пријават на Storify. Тие можат да ги користат постоечките
                                                    Фејсбук и
                                                    Твитер профили, или да креираат нов на Storify.<br>
                                                    Дајте им основни упатства за да започнат:<br>
                        
                                                    Изградете ја својата приказна.<br>Влечете елементи од социјалните медиуми, веб-
                                                    страниците за вести и блоговите, за да бидете интересни и сеопфатни колку што
                                                    можете.<br>
                                                    Бидете разиграни и се забавувајте се. Споделете ја вашата приказна со остатокот
                                                    од
                                                    групата пред следната работилница.
                                </p>
                    </div>
                </div>
        </div>`;
            cardA.innerHTML = contentsA;
            window.location.hash = 'card5';
            break;
        case "card6":
            contentsA += `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>
                    <div class="row">
                        <div
                            class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                            <div class="row cardFlex">
                                <div
                                    class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                    <img src="images/6.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 6">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                    <h1 class="mainHeaderCard2 hidden-xs">Тake a Stand</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="container-fluid">
            <div class="row bg">
                <div
                    class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                    <h1 class="mainHeaderCard">Тake a Stand</h1>
                    <div class="row cardBgGrey">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <div class="explanationFlex">
                                <div class="iconsCard">
                                    <i class="far fa-clock"></i>
                                </div>
                                <div class="textNextIcon">
                                    <p>Временска рамка</p>
                                    <p class="smallPexplanation">60-120 минути</p>
                                </div>
                            </div>
                        </div>
                    
            
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <div class="explanationFlex">
                                <div class="iconsCard">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="textNextIcon">
                                    <p>Големина на група</p>
                                    <p class="smallPexplanation">2-40</p>
                                </div>
                            </div>
                        </div>
            
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <div class="explanationFlex">
                                <div class="iconsCard">
                                    <i class="fas fa-landmark"></i>
                                </div>
                                <div class="textNextIcon">
                                    <p>Ниво за фасилитирање</p>
                                    <p class="smallPexplanation">Средно</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <div class="explanationFlex">
                                <div class="iconsCard">
                                    <i class="fas fa-paint-roller"></i>
                                </div>
                                <div class="textNextIcon">
                                    <p>Материјали</p>
                                    <p class="smallPexplanation">/
                                    </p>
                                </div>
            
            
                            </div>
                        </div>
                    </div>
                    <div class="mainCardContent">
                        <p class="boldFont">
                            Ова е практичен, динамичен и разноврсен метод за групи, да истражуваат идеи и
                            прашања заедно. Нешто како физички прашалник; учесниците одговараат на прашања со
                            одење околу просторот и ставајќи се на замислена линија. Ова обезбедува почетна точка
                            за размислување и дискусија, и го зајакнува тимскиот дух.</p>
                        <hr>
            
                        <p class="boldFont"> Чекор 1:</p>
                        <p> Одлучете за целта и фокусот на сесијата. Можете да го направите ова со или без помош
                            од групата.<br><br>
                            Напишете најмалку пет прашања кои центрираат околу една тема. Учесниците ќе се
                            постават по линија во зависност од нивниот одговор на прашања или колку се
                            согласуваат со изјавата. На пример, ако фокусот е на тоа колку добро тимот работи
                            заедно, можеби ќе прашате:<br>
                            &quot;Колку добро комуницираме како тим? 0 воопшто не комуницирате, 10 е совршено
                            отворена и јасна комуникација. &quot;<br>
                            &quot;Како се чувствувам за мојата улога во тимот? 0 е многу негативно. 10 е многу
                            позитивно.
                            &quot;<br>
                            &quot;Дали ние произведуваме квалитетна работа? 0 воопшто не. 10 е апсолутно да."
                        </p>
                        <p>
                            <hr>
            
            
                            <p class="boldFont"> Чекор 2:</p>
                            <p>
                                Поставете ја просторијата, така што има доволно простор за сите да застанат н
                                замислена линија. Објаснете го концептот на сесијата во групата, означувајќи една
                                страна
                                од собата како &quot;0&quot;, а другата страна како &quot;10&quot;.
            
                                <hr>
                                <p class="boldFont"> Чекор 3:</p>
                                <p> Прашајте го првото прашање.<br>
                                    Давање на учесниците неколку секунди за да се организираат по должината на
                                    линијата.<br>
                                    Направете да дискутираат за нивниот одговор на прашањето со некој во близина.
                                    Зошто
                                    се во таа ситуација? Како се чувствуваат во врска со тоа? Што треба да се
                                    промени?
                                </p>
                                <p class="boldFont"> Чекор 4:</p>
                                <p> Одвојте време за целата група да слушне од луѓе на различни точки од линијата.
                                    Идеално е колку што имате време, но барем еден од секоја 0, секоја 10 и еден
                                    некаде од
                                    средината.
                                </p>
                                <p class="boldFont"> Чекор 5:</p>
                                <p> Пред да ја затворите сесијата побарајте од групата да ги дефинира и запише сите
                                    клучни
                                    акции што се појавија преку дискусија. Треба да се назначи лице за секоја акција
                                    и краен
                                    рок за исполнување на истата.
                                </p>
                    </div>
                </div>
            </div>`;
            cardA.innerHTML = contentsA;
            window.location.hash = 'card6';
            break;
        case "card7":
            contentsA += `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>
                    <div class="row">
                        <div
                            class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                            <div class="row cardFlex">
                                <div
                                    class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                    <img src="images/7.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 7">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                    <h1 class="mainHeaderCard2 hidden-xs">IDOARRT Meeting Design</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div class="container-fluid">
            <div class="row bg">
                <div
                    class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                    <h1 class="mainHeaderCard">IDOARRT Meeting Design</h1>
                    <div class="row cardBgGrey">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
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
                
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
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
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-landmark"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Ниво за фасилитирање</p>
                                <p class="smallPexplanation">Почетно</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-paint-roller"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Материјали</p>
                                <p class="smallPexplanation">Табла за пишување,
                                флипчарт.
                                </p>
                            </div>
        
        
                        </div>
                    </div>
                </div>
                    <div class="mainCardContent">
                        <p class="boldFont">
                        IDOARRT е едноставна алатка која ќе ви помогне да водите ефикасен состанок или
                        групен процес со поставување јасна цел, структура и цели на самиот почеток. Таа има за
                        цел да им овозможи на сите учесници да го разберат секој аспект од состанокот или
                        процесот, со што се создава сигурност со заедничка основа, како за почеток. Акронимот
                        се залага за намера, посакуван исход, агенда, правила, улоги и одговорности и време.</p>
                        <hr>
            
                        <p class="boldFont"> Чекор 1:</p>
                        <p> Пред состанокот / процесот, подгответе флипчарт / слајд, во кои се наведени сите точки
                        на IDOARRT. Види подолу:<br><br>
                        Намера - Која е намерата или целта на состанокот? Со други зборови, зошто го имаме?
                        Посакуван исход (и) - Кои конкретни резултати треба да се постигнат до крајот на
                        состанокот?<br><br>
                        Агенда - Кои активности ќе поминат низ групата, во кој редослед за да се придвижите кон
                        посакуваниот исход?<br><br>
                        Улоги - Кои улоги или одговорности треба да бидат поставени за да се одржи средбата
                        без проблеми? Кој фасилитира, а кој учествува? Кој документира, а кој го следи времето?
                        Што се очекува од учесниците?<br><br>
                        Правила - Кои упатства ќе бидат поставени за време на состанокот? Тие би можеле да се
                        однесуваат на договорените групни норми. Тие, исто така, може да се однесуваат на
                        употреба на лаптопи / мобилни телефони или практични правила поврзани со просторот.
                        Нека учесниците додадат правила за да чувствуваат дека и тие имаат сопственост над
                        нив.<br><br>
                        
                        Време - Кое е очекуваното време за средбата, вклучувајќи ги и паузите, и во кое време ќе
                        заврши состанокот?
                        </p>
                        <p>
                            <hr>
            
            
                            <p class="boldFont"> Чекор 2:</p>
                            <p>
                            На почетокот на состанокот, воведете го IDOARRT, поминувајќи ја точка по точка.
                            Поканете ги учесниците да поставуваат прашања или да даваат предлози за промени.
                            Откако групата е задоволна од планот, продолжете со остатокот од состанокот.</p>
                    </div>
                </div>
            </div>
            </div>`;
            cardA.innerHTML = contentsA;
            window.location.hash = 'card7';
            break;
        case "card8":
            contentsA += `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>
                    <div class="row">
                        <div
                            class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                            <div class="row cardFlex">
                                <div
                                    class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                    <img src="images/8.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 8">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                    <h1 class="mainHeaderCard2 hidden-xs">3 Action Steps</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div class="container-fluid">
            <div class="row bg">
                <div
                    class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                    <h1 class="mainHeaderCard">3 Action Steps</h1>
                    <div class="row cardBgGrey">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Временска рамка</p>
                                <p class="smallPexplanation">120-240 минути</p>
                            </div>
                        </div>
                    </div>
                
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Големина на група</p>
                                <p class="smallPexplanation">2-10</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-landmark"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Ниво за фасилитирање</p>
                                <p class="smallPexplanation">Средно</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-paint-roller"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Материјали</p>
                                <p class="smallPexplanation">Пенкала/маркери во боја,
                                А3 формат хартија.
                                </p>
                            </div>
        
        
                        </div>
                    </div>
                </div> 
                    <div class="mainCardContent">
                        <p class="boldFont">
                        Ова е мала стратешка сесија за планирање која им помага на групи и поединци да
                        преземат акција кон посакуваните промени. Често се користи на крајот од работилницата
                        или програмата. Групата дискутира и се согласува со визија, а потоа создава некои
                        чекори за дејствување кои ќе ги водат кон таа визија. Обемот на предизвикот исто така е
                        дефиниран, преку дискусија за корисни и штетни фактори кои влијаат врз групата</p>
                        <hr>
            
                        <p class="boldFont"> Чекор 1:</p>
                        <p>  Започнете: <br>
                        Затворете ги очите и замислете дека сте 6 месеци од сега. Замислете
                        дека сте постигнале се што сте поставиле како цел. Размислете за она што сте го
                        направиле во текот на шесте месеци. Вашата работа. Вашите односи со
                        останатите. Што ве прави среќни.<br><br>
                        Дајте им на учениците пенкала и хартија. Тие сега ќе ја креираат својата визија за
                        иднината на десната страна на хартијата. Ограничете ги на 4 или 5 различни теми кои ја
                        сочинуваат оваа визија, користејќи неколку зборови, но колку што сакаат визуелни
                        елементи.<br><br>
                        Ако тие се во групи, тие треба да разговараат за нивните визии и да дефинираат
                        заедничка група визија.
                        </p>
                        <p>
                            <hr>
                            <p class="boldFont"> Чекор 2:</p>
                            <p>
                            Побарајте од нив да напишат најмалку 5 корисни фактори на врвот на страната, кои ќе
                            ги
                            поддржат за да ја реализираат својата визија. Тоа може да бидат луѓе, можности,
                            технологии, ситуации, итн.
            
                                <hr>
                                <p class="boldFont"> Чекор 3:</p>
                                <p> Во дното на страницата побарајте од нив да напишат најмалку 5 придружни фактори
                                кои
                                ќе ги поддржат за да ја реализираат својата визија. Повторно, ова може да бидат
                                луѓе,
                                можности, технологии, ситуации, итн.
                                </p>
                                <p class="boldFont"> Чекор 4:</p>
                                <p> Сега групата или поединците ќе дискутираат и ќе ги дефинираат чекорите за
                                акција.
                                Побарајте од нив да нацртаат три кутии од левата страна на хартијата до визијата
                                на
                                десната страна. Ова ќе бидат трите големи чекори што треба да ги преземат за да
                                се
                                постигне нивната визија.<br>
                                Ако работат како поединци, тогаш ги ставате во парови за да разговараат за
                                нивните
                                чекори. Ако веќе се во групи, тогаш може да разговараат за чекорите што ги
                                прават.<br>
                                Тие пишуваат чекор во секоја кутија, концизно, но со толку многу детали што им
                                се
                                потребни за да им биде јасно на самите себе и на другите.
                                </p>
                                <p class="boldFont"> Чекор 5:</p>
                                <p> За да ја затворите сесијата, отидете околу групата, барајќи од сите да ја
                                искажат својата
                                визија и еден (или сите три) чекори за акција. Прашајте го секое лице: Која е
                                првото
                                нешто што ќе го направите кога ќе се вратите во канцеларија.
                                </p>
            
            
                    </div>
                </div>
            </div>
            </div>`;
            cardA.innerHTML = contentsA;
            window.location.hash = 'card8';
            break;
        case "card9":
            contentsA += `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>
                    <div class="row">
                        <div
                            class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                            <div class="row cardFlex">
                                <div
                                    class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                    <img src="images/9.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 9">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                    <h1 class="mainHeaderCard2 hidden-xs">Letter to Myself</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div class="container-fluid">
            <div class="row bg">
                <div
                    class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                    <h1 class="mainHeaderCard">Letter to Myself</h1>
                    <div class="row cardBgGrey">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
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
                
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Големина на група</p>
                                <p class="smallPexplanation">2-40+</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-landmark"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Ниво за фасилитирање</p>
                                <p class="smallPexplanation">Почетно</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-paint-roller"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Материјали</p>
                                <p class="smallPexplanation">Пенкало,
                                разгледница, хартија, коверт, маркери, флипчарт.
                                </p>
                            </div>
        
        
                        </div>
                    </div>
                </div> 
                    <div class="mainCardContent">
                        <p class="boldFont">
                        Целта на оваа вежба е да ги поддржи учесниците во примена на нивните согледувања и
                                учења, со пишување на писмо и испраќање до нивната идна личност. Тие можат да ги
                                дефинираат клучните дејствија кои би сакале да ги преземат во иднина и да ги изразат
                                своите причини зошто е потребно да се случи таа промена.</p>
                        <hr>
            
                        <p class="boldFont"> Чекор 1:</p>
                        <p>  Поделете ги пенкалата и разгледниците / хартијата за пишување. Објаснете дека секој ќе
                        напише писмо до својата идна личност и дека ова ќе им помогне да ги применат своите
                        согледувања и учења од работилницата / програмата.
                        Кажете им дека ќе им ја испратите картичката / писмото за X број на месеци, и дека тие
                        треба да го земат предвид тоа кога ги пишуваат. Можете да ја дефинирате временската
                        рамка со групата.
                        </p>
                        <p>
                            <hr>
                            <p class="boldFont"> Чекор 2:</p>
                            <p>
                            Напишете фокус прашање на флипчарт / таблата. Тие може да бидат дефинирани од вас,
                                    или преку дискусија со групата. На пример:<br>
                                    Што ќе постигнам до X датум?<br>
                                    Што ќе правам утре, следната недела, следниот месец?<br>
                                    Како се чувствувам моментално за мојата работа / работно место / тим? И како сакам
                                    да
                                    се чувствувам во иднина?<br>
                                    Сакам да се промени ... затоа што …<br><br>
                                    Дајте им околу 10 минути за да ги завршат нивните картички / писма.
                                    <p class="boldFont">  Чекор 3:</p>
                                    <p>
                                    Соберете ги картичките / писмата, ставете ги на безбедно место и испратете ги на
                                    договорениот датум. </p>
                    </div>
                </div>
            </div>
            </div>`;
            cardA.innerHTML = contentsA;
            window.location.hash = 'card9';
            break;
        case "card10":
            contentsA += `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>
                    <div class="row">
                        <div
                            class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                            <div class="row cardFlex">
                                <div
                                    class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                    <img src="images/10.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 10">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                    <h1 class="mainHeaderCard2 hidden-xs">Аctive Listening</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div class="container-fluid">
            <div class="row bg">
                <div
                    class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                    <h1 class="mainHeaderCard">Аctive Listening</h1>
                    <div class="row cardBgGrey">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Временска рамка</p>
                                <p class="smallPexplanation">6-120 минути</p>
                            </div>
                        </div>
                    </div>
                
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Големина на група</p>
                                <p class="smallPexplanation">2-40</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-landmark"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Ниво за фасилитирање</p>
                                <p class="smallPexplanation">Средно</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-paint-roller"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Материјали</p>
                                <p class="smallPexplanation">Пенкала/маркери, 
                                флипчарт.
                                </p>
                            </div>
        
        
                        </div>
                    </div>
                </div> 
                    <div class="mainCardContent">
                        <p class="boldFont">
                        Оваа активност ги поддржува учесниците да размислуваат за едно прашање и да
                        генерираат сопствени решенија користејќи едноставни принципи на активно слушање.
                        Oва е одличен вовед во активното слушање, но исто така може да се користи со групи кои
                        веќе се запознаени со него. Учесниците работат во групи од три и се претвораат
                        во&quot;субјект&quot;, слушател и набљудувач.</p>
                        <hr>
            
                        <p class="boldFont"> Чекор 1:</p>
                        <p>  Еден моќен начин да се истражи некое прашање или проблем е да се користи активно
                        слушање со фокус на една личност во исто време. За оваа вежба, тоа е она што ќе го
                        направите.<br>
                        Опционално, направете листа заедно со групата &quot;Што е добро активно слушање?&quot;
                        Поканете ги луѓето спонтано да понудат одговори и да ги напишете на флипчарт.
                        </p>
                        <p>
                            <hr>
                            <p class="boldFont"> Чекор 2:</p>
                            <p>
                            Користење на флипчарт, воведување на трите улоги кои поединците ќе ги преземат за
                            време на вежбата.<br><br>
                            Субјект:<br>
                            Улогата на субјектот е да го испита прашањето или проблемот од неговата / нејзината
                            лична перспектива. Лицето во оваа улога треба да има на ум: оставање на фокусот да
                            биде на него, водејќи се од активниот слушател.<br><br>
                            Активниот слушател:<br>
                            Улогата на активниот слушател е да слуша со целосно присуство и фокус. Да слуша со
                            целото тело, да биде љубопитен, да набљудува. Ова лице треба да има на ум:
                            Прашување отворени прашања за да го поддржи субјектот; не нуди совети; слуша со
                            целото тело.<br><br>
                            Набљудувачот:<br>

                            Улогата на набљудувачот е да го набљудува процесот без да зборува. Да направи
                            забелешки од надворешна перспектива, да ги гледа и слуша нештата што слушателот и
                            субјектот не можат да ги забележат. Ова лице треба да има на ум: молчење низ целиот
                            процес; забележува и фаќа белешки за она што го гледа и слуша; по завршувањето ги
                            споделува набљудувањата со останатите.</p>
                            <hr>
                            <p class="boldFont"> Чекор 3:</p>
                                <p> Поставете го прашањето или проблемот. Прашањето или проблемот е она што секој
                                субјект ќе го истражува и размислува. Тоа би можело да биде вообичаено прашање за
                                целата група (на пр. &quot;Кои се најголемите препреки за промена во мојата работа и
                                како
                                можам да работам за нивно надминување?&quot;) Или секој субјект може да го постави
                                своето
                                или неговото прашање или проблем (на пр. предизвик на работното место со кој се
                                соочувате во моментов.) Осигурајте се дека сите учесници разбираат што треба да
                                истражуваат и да размислуваат.
                                </p>
                                <hr>
                                <p class="boldFont"> Чекор 4:</p>
                                <p> Учесниците се организираат во групи од три. Секој учесник треба да ја има секоја улога
                                за
                                одреден временски период. Објаснете дека групите треба да обрнат внимание на
                                времето и да се осигураат дека постојат три еднакви круга.
                                </p>
                                <hr>
                                <p class="boldFont"> Чекор 5:</p>
                            <p> Откако учесниците ќе завршат, ќе ја разгледаат вежбата, користејќи прашања како:<br>
                                - Што се случило за време на вежбата?<br>
                                - Како се чувствуваше да бидеш набљудувач?<br>
                                - Како се чувствуваше да бидеш субјект?<br>
                                - Како се чувствуваше да бидеш активен слушател?<br>
                                - Што научив за себе?<br>
                                - Како можам да применам увид од оваа вежба?<br>
                            </p>
                    </div>
                </div>
            </div>
            </div>`;
            cardA.innerHTML = contentsA;
            window.location.hash = 'card10';
            break;
        case "card11":
            contentsA += `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>
                    <div class="row">
                        <div
                            class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                            <div class="row cardFlex">
                                <div
                                    class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                    <img src="images/11.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 11">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                    <h1 class="mainHeaderCard2 hidden-xs">Feedback: I appreciate</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div class="container-fluid">
            <div class="row bg">
                <div
                    class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                    <h1 class="mainHeaderCard">Feedback: I appreciate</h1>
                    <div class="row cardBgGrey">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Временска рамка</p>
                                <p class="smallPexplanation">6-120 минути</p>
                            </div>
                        </div>
                    </div>
                
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Големина на група</p>
                                <p class="smallPexplanation">2-40</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-landmark"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Ниво за фасилитирање</p>
                                <p class="smallPexplanation">Напредно</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-paint-roller"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Материјали</p>
                                <p class="smallPexplanation">Стикери,
                                пенкала.
                                </p>
                            </div>
        
        
                        </div>
                    </div>
                </div> 
                    <div class="mainCardContent">
                        <p class="boldFont">
                        Редовен и ефективен фидбек е еден од најважните состојки во градењето конструктивни
                        односи и просперитетни тимови. Отвореноста создава доверба и довербата создава
                        поголема отвореност. Вежбите за фидбек имаат за цел да ги поддржат групите за да се
                        изгради доверба и отвореност и за поединците да стекнат самосвест и увид. Вежбите за
                        фидбек треба секогаш да се изведуваат со внимателност и висока свесност за групната
                        динамика. Ова е добра рана повратна вежба кога членовите на групата веќе имаат
                        развиено некоја удобност и сè уште се запознаваат меѓусебно. Се фокусира на
                        споделување на благодарност и љубопитност едни за други.</p>
                        <hr>
            
                        <p class="boldFont"> Чекор 1:</p>
                        <p>  Работете во мал тим или организирајте поголема група во групи од 4 до 6. Групите треба
                        да имаат барем некое искуство со работење заедно, како основа за давање фидбек.
                        </p>
                        <p>
                            <hr>
                            <p class="boldFont"> Чекор 2:</p>
                            <p>
                            Дајте ги инструкциите: &quot;Запишете го името на лицето на кое се обраќате. Завршете ги
                            следните две реченици за тоа лице. Користете ги принципите за ефективен фидбек.
                            Потпишете се со вашето име. &quot;<br>
                            &quot;До _____: Тоа што го ценам најмногу кај тебе е ... Она што би сакал да го видам повеќе
                            од тебе е ... Потпишан, _____.&quot;</p>
                            <hr>
                            <p class="boldFont"> Чекор 3:</p>
                                <p> Во секоја помала група, секој учесник ги завршува горенаведените реченици со
                                користење на стикер за секој учесник во групата. Откако сите учесници во групата
                                
                                завршат, тие ќе го доставуваат фидбекот, еден по еден, вербално, преку предавање на
                                белешката до неговиот примач.
                                </p>
                               
                    </div>
                </div>
            </div>
            </div>`;
            cardA.innerHTML = contentsA;
            window.location.hash = 'card11';
            break;
        case "card12":
            contentsA += `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>
                    <div class="row">
                        <div
                            class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                            <div class="row cardFlex">
                                <div
                                    class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                    <img src="images/12.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 12">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                    <h1 class="mainHeaderCard2 hidden-xs">Explore your values</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div class="container-fluid">
            <div class="row bg">
                <div
                    class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                    <h1 class="mainHeaderCard">Explore your values</h1>
                    <div class="row cardBgGrey">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Временска рамка</p>
                                <p class="smallPexplanation">6-120 минути</p>
                            </div>
                        </div>
                    </div>
                
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Големина на група</p>
                                <p class="smallPexplanation">2-40</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-landmark"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Ниво за фасилитирање</p>
                                <p class="smallPexplanation">Средно</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-paint-roller"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Материјали</p>
                                <p class="smallPexplanation">Стикери,
                                пенкала.
                                </p>
                            </div>
        
        
                        </div>
                    </div>
                </div> 
                    <div class="mainCardContent">
                        <p class="boldFont">
                        Вежба за учесниците да истражат кои се нивните најважни вредности. Тоа е направено на
                        интуитивен и брз начин за да ги поттикне учесниците да го следат интуитивното чувство,
                        наместо да размислуваат и да ги најдат &quot;точните&quot; вредности. Ова е добра вежба за
                        користење за да се иницира размислување и дијалог околу личните вредности.</p>
                        <hr>
            
                        <p class="boldFont"> Чекор 1:</p>
                        <p>  Поделете стикери на сите учесници.
                        </p>
                        <p>
                            <hr>
                            <p class="boldFont"> Чекор 2:</p>
                            <p>
                            Замолете ги да ги напишат десетте работи во својот живот што најмногу ги вреднуваат,
                            по еден на секој стикер, во форма на вредност. Зборови како, &quot;пријателство&quot;, &quot;семејство&quot;
                            или &quot;чесност&quot; - нешто што всушност го вреднуваат.</p>
                            <hr>
                            <p class="boldFont"> Чекор 3:</p>
                                <p> Кога сите имаат свои десет стикери, замолете ги учесниците да ги постават пред нив, за
                                да можат јасно да ги видат и да имаат добар преглед.
                                </p>
                                <p class="boldFont"> Чекор 4:</p>
                                <p> Кажете им на учесниците дека сега имаат 30 секунди за да ги одберат трите стикери кои
                                се најмалку важни за нив и да ги фрлат. Бидете напорни за тајмингот и не им давајте
                                повеќе време, дури и ако тоа е потребно. Треба да ги користат своите чувства.
                                </p>
                                <p class="boldFont"> Чекор 5:</p>
                                <p> Повторете го последниот чекор, сега давајќи им 20 секунди за да фрлат уште две.
                                </p>
                                <p class="boldFont"> Чекор 6:</p>
                                <p> И, конечно, повторете го последниот чекор, давајќи им 20 секунди да фрлите уште две.
                                Тие сега треба да имаат три стикери со нивните три најважни вредности.
                                </p>
                                <p class="boldFont"> Чекор 7:</p>
                                <p> Дајте им на учесниците 15 минути за да размислуваат поединечно, потоа 30 минути во
                                парови или групи од три за да размислуваат за следните прашања:<br>
                                Што чувствувам за вредностите со кои завршив? Дали ги очекував тие?<br>
                                Како овие вредности се покажуваат во мојот секојдневен живот?<br>
                                Кои акции ги преземам за да живеам со овие вредности?<br>
                                Кои акции треба да ги преземам за да живеам со овие вредности?<br>
                                Кои акции би сакал да ги преземам за да живеам од нив?<br><br>
                                Овие акции може да се поврзат со акционен план, користејќи ги како секојдневни
                                активности за подобрување.
                                </p>
                    </div>
                </div>
            </div>
            </div>`;
            cardA.innerHTML = contentsA;
            window.location.hash = 'card12';
            break;
        case "card13":
            contentsA += `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>
                    <div class="row">
                        <div
                            class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                            <div class="row cardFlex">
                                <div
                                    class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                    <img src="images/13.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 13">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                    <h1 class="mainHeaderCard2 hidden-xs">Reflection Individual</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div class="container-fluid">
            <div class="row bg">
                <div
                    class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                    <h1 class="mainHeaderCard">Reflection Individual</h1>
                    <div class="row cardBgGrey">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Временска рамка</p>
                                <p class="smallPexplanation">30-60 минути</p>
                            </div>
                        </div>
                    </div>
                
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Големина на група</p>
                                <p class="smallPexplanation">2-40</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-landmark"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Ниво за фасилитирање</p>
                                <p class="smallPexplanation">Средно</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-paint-roller"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Материјали</p>
                                <p class="smallPexplanation">Тефтер, лист,
                                пенкало.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
                    <div class="mainCardContent">
                        <p class="boldFont">
                        Цел: Индивидуалната рефлексија помага да ги одвоиме комплексните искуства, така што
                        успесите на искуството може да се повторат или подобрат, а неуспесите обезбедуваат
                        можности за учење и раст. Форматот е флексибилен, ве води низ клучните фази на
                        процесот на размислување и завршува со клучните точки за акција.</p>
                        <hr>
            
                        <p class="boldFont"> Чекор 1:</p>
                        <p>  Ова е индивидуална вежба. Вие го фасилитирате вашиот сопствен рефлективен процес.
                        Прво, создадете ја вистинската физичка и ментална состојба за размислување. Завршете
                        ги сите задачи кои ви создаваат притисок. Испратете ги сите важни пораки. Ако е можно,
                        одете некаде каде што е тишина.<br>
                        Белешка за фасилитаторот:<br>
                        Не е потребно да бидете премногу строги со овој процес. Клуч за успешно
                        размислување е да се следи протокот на клучните фази на процесот и да се направи
                        простор во вашиот живот за смиреност и фокусирана контемплација.
                        </p>
                        <p>
                            <hr>
                            <p class="boldFont"> Чекор 2:</p>
                            <p>
                            Разговор со себе: Како се чувствувам? Каков ми беше денот? Што имам на ум? Бидете
                            присутни во моментот. Одлучете на какво искуство ќе се фокусирате (на пример,
                            неодамнешно искуство, социјална интеракција, неодамнешен настан итн.)</p>
                            <hr>
                            <p class="boldFont"> Чекор 3:</p>
                                <p> Можеби ќе сакате да ги запишете овие работи со пенкало на хартија, без одвлекување на
                                вниманието на компјутер, телефон или таблет. Можеби сакате да поставите тајминг за
                                секое од следните прашања:<br>
                                Што се случи за време на искуството?
                                Како се чувствував и какви беа моите реакции?
                                Кои согледувања или заклучоци можам да ги извлечам од искуството? Што научив?
                                Како можам да го применам она што го научив за да го подобрам идното искуство? Какви
                                активности можам да преземам врз основа на она што го научив?
                                </p>
                                <p class="boldFont"> Чекор 4:</p>
                                <p> Доколку можете, поставете крајни рокови за секое од дејствијата што ги
                                идентификувавте за време на вашите рефлексии и споделете ги со колега. Вашиот
                                колега може да ве поддржи со тоа што ќе ве држи одговорни да ги завршите.
                                </p>
                    </div>
                </div>
            </div>
            </div>`;
            cardA.innerHTML = contentsA;
            window.location.hash = 'card13';
            break;
        case "card14":
            contentsA += `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>
                    <div class="row">
                        <div
                            class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                            <div class="row cardFlex">
                                <div
                                    class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                    <img src="images/14.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 14">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                    <h1 class="mainHeaderCard2 hidden-xs">Back-turned Feedback</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div class="container-fluid">
            <div class="row bg">
                <div
                    class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                    <h1 class="mainHeaderCard">Back-turned Feedback</h1>
                    <div class="row cardBgGrey">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Временска рамка</p>
                                <p class="smallPexplanation">6-120 минути</p>
                            </div>
                        </div>
                    </div>
                
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Големина на група</p>
                                <p class="smallPexplanation">2-40</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-landmark"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Ниво за фасилитирање</p>
                                <p class="smallPexplanation">Напредно</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-paint-roller"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Материјали</p>
                                <p class="smallPexplanation">Пенкало, маркери,
                                cтикери
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
                    <div class="mainCardContent">
                        <p class="boldFont">
                        Вежбите за фидбек имаат за цел да ги поддржат групите за да се изгради доверба и
                        отвореност, за поединците да стекнат самосвест и увид. Вежбите за повратни
                        информации секогаш треба да се водат со внимателности високата свесност за групната
                        динамика.</p>
                        <hr>
            
                        <p class="boldFont"> Чекор 1:</p>
                        <p> Во тим или во мали групи, секое лице подготвува повратни информации за секоја друга
                        личност, врз основа на следните инструкции:<br>
                        Тоа што го ценам за (лице) е...<br>
                        Што би сакал да видам повеќе од (лице) е ...<br>
                        Белешка за фасилитаторот:<br>
                        Ова е вежба за групи или тимови кои работеле заедно некое време и се запознаени со
                        давање и примање фидбек. Еден член на тимот седи со својот грб во групата, додека
                        други членови зборуваат за него / неа во трето лице.
                        </p>
                        <p>
                            <hr>
                            <p class="boldFont"> Чекор 2:</p>
                            <p>
                            Кога завршува, друг член седи со свртен грб во групата. Потоа, другите членови
                            зборуваат за оваа личност во трето лице 90 секунди. Тие го пренесуваат својот фидбек
                            како да не биле во просторијата. Во меѓувреме, предметот на фидбек пишува белешки за
                            тоа што тој / таа го слуша. Потоа, ротирајте, и повторете го истото со секоја личност.</p>
                            <hr>
                            <p class="boldFont"> Чекор 3:</p>
                                <p> Откако секој човек ќе се сврти со неговиот / нејзиниот грб кон групата, земете неколку
                                минути за сите да го разгледаат нивниот фидбек. За крај, направете круг каде секое лице
                                изразува кои еден или два фидбеци ќе ги применат по вежбата.
                                </p>
                    </div>
                </div>
            </div>
            </div>`;
            cardA.innerHTML = contentsA;
            window.location.hash = 'card14';
            break;
        case "card15":
            contentsA += `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>
                    <div class="row">
                        <div
                            class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                            <div class="row cardFlex">
                                <div
                                    class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                    <img src="images/15.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 15">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                    <h1 class="mainHeaderCard2 hidden-xs">Conflict Responses</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div class="container-fluid">
            <div class="row bg">
                <div
                    class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                    <h1 class="mainHeaderCard">Conflict Responses</h1>
                    <div class="row cardBgGrey">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Временска рамка</p>
                                <p class="smallPexplanation">6-120 минути</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Големина на група</p>
                                <p class="smallPexplanation">2-10</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-landmark"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Ниво за фасилитирање</p>
                                <p class="smallPexplanation">Почетно</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-paint-roller"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Материјали</p>
                                <p class="smallPexplanation">Method Kit за тимови, 
                                стикери,
                                маркери
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
                    <div class="mainCardContent">
                        <p class="boldFont">
                        Работилница за тим кој ќе размислува за минатите конфликти и ги користи за да генерира
                        насоки за ефикасно ракување со конфликти. Користете ja за да отворите дискусија..</p>
                        <hr>
            
                        <p class="boldFont"> Чекор 1:</p>
                        <p> Замолете ги учесниците да размислат за конфликти во тимот што ги искусиле. Овие
                        можат да бидат од или надвор од овој тековен тим, или во рамките на компанијата.
                        Тие треба да го направат ова поединечно, со идентификување на што поголем број
                        значајни конфликти, враќање на неколку години наназад доколку е потребно.
                        Конфликтите секој ги запишува во својот тефтер/телефон.
                        </p>
                        <p>
                            <hr>
                            <p class="boldFont"> Чекор 2:</p>
                            <p>
                            Преземајќи ги минатите конфликти што ги напишале, прашајте ги како поединци да го
                            рангираат секој од 1 до 3.<br>
                            1 = конфликт со кој се справив добро.<br>
                            2 = Конфликт со кој се справив просечно.<br>
                            3 = конфликт со кој се справив лошо.<br>
                            </p>
                            <hr>
                            <p class="boldFont"> Чекор 3:</p>
                                <p> Побарајте од нив да размислуваат поединечно, а потоа да разговараат за нивните
                                размислувања во парови или тројца на следниве прашања:<br>
                                Кои одговори беа најмногу критични за време на конфликтите што ги идентификував?<br>
                                Кои однесувања и активности беа ефикасни во решавањето на конфликтите?<br>
                                Кои однесување и активности не беа ефикасни во решавањето на конфликтите?
                                </p>
                                <hr>
                                <p class="boldFont"> Чекор 4:</p>
                                    <p> Врз основа на споделувањата во малите групи, побарајте од секое лице да излезе со 2-3
                                    насоки за ефикасно ракување со конфликти за кои сметаат дека групата треба да ги
                                    применува понатаму.<br>
                                    Замолете ги сите да ги споделат своите упатства со целата група, со цел секој од групата
                                    да се договори дека се соодветни и ќе ги следат во иднина.<br>
                                    Напишете ги упатствата и споделете ги дигитално.
                                    </p>
                    </div>
                </div>
            </div>
            </div>`;
            cardA.innerHTML = contentsA;
            window.location.hash = 'card15';
            break;
        case "card16":
            contentsA += `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>
                    <div class="row">
                        <div
                            class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                            <div class="row cardFlex">
                                <div
                                    class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                    <img src="images/16.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 16">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                    <h1 class="mainHeaderCard2 hidden-xs">Myers-Briggs Team Reflection</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div class="container-fluid">
            <div class="row bg">
                <div
                    class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                    <h1 class="mainHeaderCard">Myers-Briggs Team Reflection</h1>
                    <div class="row cardBgGrey">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Временска рамка</p>
                                <p class="smallPexplanation">6-120 минути</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Големина на група</p>
                                <p class="smallPexplanation">2-10</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-landmark"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Ниво за фасилитирање</p>
                                <p class="smallPexplanation">Почетно</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-paint-roller"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Материјали</p>
                                <p class="smallPexplanation">/
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
                    <div class="mainCardContent">
            
                        <p class="boldFont"> Чекор 1:</p>
                        <p> На почетокот на работилницата, дајте им на сите време да направат персонален тест за
                        личност.<br>
                        Ви препорачуваме да користите онлајн алатка како <a href="https://www.16personalities.com/">
                        16 Personalities</a>.<br><br>
                        Нагласете дека целта не е да категоризираме никого или да наметнуваме &quot;вистини&quot; за
                        нашите личности, туку да го искористиме моделот како отскочна точка за размислување,
                        односно начин за дискусија за различни мотиватори, стилови, параметри, итн.
                        </p>
                        <p>
                            <hr>
                            <p class="boldFont"> Чекор 2:</p>
                            <p>
                            Прашајте ја групата како поединци да размислуваат за нивниот тип на личност.<br>
                            Потоа, поканете ги да го споделат со целата група она што сметаат дека е вистина, и
                            што мислат дека не е.
                            </p>
                            <hr>
                            <p class="boldFont"> Чекор 3:</p>
                                <p> Поделете ја групата во парови или тројца и од секој од нив е потребно да ја истражуваат
                                секоја димензија на нивната личност подетално.Користете ги белешките од онлајн-тестот
                                и сите други материјали за кои мислите дека ќе бидат корисни, за поддршка на
                                истражувањето.<br><br>
                                Димензиите се:<br>
                                интуиција / претчувство<br>
                                интроверзија / екстраверзија<br>
                                чувство / размислување<br>
                                перцепција / судење<br>
                                </p>
                                <hr>
                                <p class="boldFont"> Чекор 4:</p>
                                    <p> По 20-30 минути за истражување на димензиите на личноста, ги враќате сите во поголема
                                    група и ги поканувате да споделат увид од нивните дискусии.<br>
                                    Завршете со одјавување, барајќи од сите да споделат еден увид што го запамтат од
                                    работилницата.
                                    </p>
                    </div>
                </div>
            </div>
            </div>`;
            cardA.innerHTML = contentsA;
            window.location.hash = 'card16';
            break;
        case "card17":
            contentsA += `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>
                    <div class="row">
                        <div
                            class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                            <div class="row cardFlex">
                                <div
                                    class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                    <img src="images/17.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 17">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                    <h1 class="mainHeaderCard2 hidden-xs">Personal Presentations</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div class="container-fluid">
            <div class="row bg">
                <div
                    class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                    <h1 class="mainHeaderCard">Personal Presentations</h1>
                    <div class="row cardBgGrey">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Временска рамка</p>
                                <p class="smallPexplanation">60-240 минути</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Големина на група</p>
                                <p class="smallPexplanation">2-40</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-landmark"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Ниво за фасилитирање</p>
                                <p class="smallPexplanation">Средно</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-paint-roller"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Материјали</p>
                                <p class="smallPexplanation">Флипчарт,
                                маркери
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
                    <div class="mainCardContent">
               
                    <hr>
            
                        <p class="boldFont"> Чекор 1:</p>
                        <p> Секој учесник ја подготвува својата лична презентација за &quot;3 работи (искуства, настани,
                            луѓе, приказни) кои придонесоа за обликување на личноста која сум денес&quot;.<br>
                            Презентацијата треба да се визуелизира со користење на зборови и симболи на една
                            хартија флипчарт. Дајте им на учесниците околу 15-20 минути за да го подготват ова.
                        </p>
                        <p>
                            <hr>
                            <p class="boldFont"> Чекор 2:</p>
                            <p>
                            Презентации: Секој учесник добива 3 минути (или повеќе во зависност од времето и
                                големината на групата) за да ја претстави својата презентација до целата група.
                                Поттикнете фокус и активно слушање.<br><br>
                                Белешка до фасилитаторот:<br>
                                Многу е важно да се создаде безбеден и отворен простор бидејќи поединците ќе
                                споделат лични приказни. Во некои случаи, поединците можат да споделат искуства кои
                                генерираат емоции во себе или во рамките на групата. Како фасилитатор, потсетете ги
                                учесниците дека ова е нормално и добредојдено. Ако поединците стануваат многу
                                емотивни, следете ги поединечно по сесијата.
                            </p>
                            <hr>
                            <p class="boldFont"> Чекор 3:</p>
                                <p> Ако сте помала група, каде што времето не е ограничено, олеснувачите можат да поканат
                                членови на групата да поставуваат прашања до секое лице веднаш по неговата /
                                нејзината презентација.
                                </p>
                                <hr>
                                <p class="boldFont"> Чекор 4:</p>
                                    <p> По 20-30 минути за истражување на димензиите на личноста, ги враќате сите во поголема
                                    група и ги поканувате да споделат увид од нивните дискусии.
                                    Завршете со одјавување, барајќи од сите да споделат еден увид што го запамтат од
                                    работилницата.
                                    </p>
                    </div>
                </div>
            </div>
            </div>`;
            cardA.innerHTML = contentsA;
            window.location.hash = 'card17';
            break;
        case "card18":
            contentsA += `<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs" id="btns">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster"  id="btnYellow">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" id="btnBlack">Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>
                    <div class="row">
                        <div
                            class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                            <div class="row cardFlex">
                                <div
                                    class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                    <img src="images/18.png" class="img img-responsive rotate-scale-down ainImgCard"  alt="Logo Game 18">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                    <h1 class="mainHeaderCard2 hidden-xs">Circles of influence</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div class="container-fluid">
            <div class="row bg">
                <div
                    class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                    <h1 class="mainHeaderCard">Circles of influence</h1>
                    <div class="row cardBgGrey">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Временска рамка</p>
                                <p class="smallPexplanation">30-120 минути</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="textNextIcon">
                                <p class="textUnderline">Големина на група</p>
                                <p class="smallPexplanation">2-40+</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-landmark"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Ниво за фасилитирање</p>
                                <p class="smallPexplanation">Почетно</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="explanationFlex">
                            <div class="iconsCard">
                                <i class="fas fa-paint-roller"></i>
                            </div>
                            <div class="textNextIcon">
                                <p>Материјали</p>
                                <p class="smallPexplanation">Маркери во боја, 
                                флипчарт/ бела табла
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
                    <div class="mainCardContent">
                    <p class="boldFont">
                    Работилница за тим кој ќе размислува за минатите конфликти и ги користи за да генерира
                    насоки за ефикасно ракување со конфликти. Користете ja за да отворите дискусија..</p>
                    <hr>
            
                        <p class="boldFont"> Чекор 1:</p>
                        <p> Потребно е учесниците да бидат седнати во два круга: кург на влијание и круг на
                        загриженост.
                        Поделете стикери и маркери и замолете ги учесниците да запишат:
                        Работи што влијаат на овој тим, надворешни и внатрешни.
                        Една работа на една белешка. Дајте им време 5-10 минути.
                        </p>
                        <p>
                            <hr>
                            <p class="boldFont"> Чекор 2:</p>
                            <p>
                            Сега побарајте од групата да ги остават своите белешки во кругот во кој сметаат дека
                            белешките припаѓаат.
                            Отстранете ги оние белешки кои се слични или исти.
                            </p>
                            <hr>
                            <p class="boldFont"> Чекор 3:</p>
                                <p> Иницирајте дискусија. Поканете ја групата да размисли за дискутирање на следните
                                прашања:
                                
                                Кои акции може да ги преземеме за да влијаеме на оние работи на кои можеме да
                                влијаеме?
                                Како би можеле да ги преиспитаме нашите приоритети врз основа на оваа
                                работилница?
                                Акциите кои произлегуваат од оваа дискусија, закачете ги на флипчарт или запишете ги
                                на таблата. Секоја акција треба да има краен рок и одговорно лице.
                                </p>
                    </div>
                </div>
            </div>
            </div>`;
            cardA.innerHTML = contentsA;
            window.location.hash = 'card18';
            break;
        default:
            break;
    }

}




function myFunction(e) {
    window.localStorage.setItem("DATA")
    console.log("TUKA SME: ", e.target);
}

document.getElementById("card1").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card1");
}, false);
document.getElementById("card2").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card2");
}, false);
document.getElementById("card3").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card3");
}, false);
document.getElementById("card4").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card4");
}, false);
document.getElementById("card5").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card5");
}, false);
document.getElementById("card6").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card6");
}, false);
document.getElementById("card7").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card7");
}, false);
document.getElementById("card8").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card8");
}, false);
document.getElementById("card9").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card9");
}, false);
document.getElementById("card10").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card10");
}, false);
document.getElementById("card11").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card11");
}, false);
document.getElementById("card12").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card12");
}, false);
document.getElementById("card13").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card13");
}, false);
document.getElementById("card14").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card14");
}, false);
document.getElementById("card15").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card15");
}, false);
document.getElementById("card16").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card16");
}, false);
document.getElementById("card17").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card17");
}, false);
document.getElementById("card18").addEventListener('click', function (e) {
    window.localStorage.setItem("target", "card18");
}, false);



