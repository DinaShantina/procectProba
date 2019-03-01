
var targetA = window.localStorage.getItem('targetA');
console.log(targetA)
var reg = document.querySelector('.reg');
// var registration = "";

switch (targetA) {
    case 'reg1':
        reg.innerHTML += `<div class="container-fluid">
        <div class="row blackBg">
    
            <div class="col-md-10 col-md-offset-2 col-sm-11 col-sm-offest-1 col-xs-10 col-xs-offset-1">
    
                <div class="purpleContactBg">
                    <div class="row">
    
                        <div
                            class="col-md-6 col-md-offset-0 col-sm-11 col-sm-offset-0 col-xs-12 col-xs-offeset-0 TextBgRegistration">
                            <h2 class="textYellow headerYellow text-left">Регистрирај Се</h2>
                            <form>
                                <div class="form-group">
                                    <label class="sr-only" for="inputFirstName">Име</label>
                                    <input type="text" class="form-control" id="inputFirstName" placeholder="Име">
                                </div>
                                <div class="form-group">
                                    <label class="sr-only" for="inputLastName">Презиме</label>
                                    <input type="text" class="form-control" id="inputLastName"
                                        placeholder="Презиме">
                                </div>
    
                                <div class="form-group">
                                    <label class="sr-only" for="inputCompany">Компанија</label>
                                    <input type="text" class="form-control" id="inputCompany"
                                        placeholder="Компанија">
                                </div>
                                <div class="form-group">
                                    <label class="sr-only" for="inputEmail">Број</label>
                                    <input type="number" class="form-control" id="exampleInputPassword1"
                                        placeholder="Број">
                                </div>
                                <div class="form-group">
                                    <label class="sr-only" for="inputEmail">Email</label>
                                    <input type="email" class="form-control" id="exampleInputPassword1"
                                        placeholder="Email">
                                </div>
                                <div class="row">
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <p class="pTextForm">Број на вработени</p>
                                        <select class="form-control">
                                            <option>2-10</option>
                                            <option>11-50</option>
                                            <option>51-200</option>
                                            <option>200+</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <p class="pTextForm">Сектор</p>
                                        <select class="form-control">
                                            <option>Човечки ресурси</option>
                                            <option>Маркетинг</option>
                                            <option>Продукт</option>
                                            <option>Продажба</option>
                                            <option>CEO</option>
                                            <option>друго</option>
                                        </select>
                                    </div>
                                </div>
                                <textarea maxlength="300" class="form-control"
                                    rows="3" placeholder="Ве молиме користете го овој простор за да ни кажете повеќе за вашите потреби. Нашиот тим може да направат сопствени решенија околу реквизирањето, подигнување, вградување, 
                                    ангажирање и споредување на вашиот талент."></textarea>
    
                                <button type="submit" class="yellowBlack btnBrainster padSubmit">Регистрирај
                                    се</button>
                            </form>
    
                        </div>
    
                    </div>
    
                </div>
                <div class="buttonSA flexA hidden-lg hidden-md hidden-sm visible-xs">
                    <ul class="list-inline">
                        <li>
                            <a href="https://www.brainster.io/business" target="_blank">
                                <button class="yellowButton btnBrainster">Обуки за компании</button>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.brainster.io/business" target="_blank">
                                <button class="yellowBlack btnBrainster">Вработи наши студенти</button>
                            </a>
                        </li>
    
                    </ul>
                </div>
            </div>
    
        </div>`

        break;

    case 'sign1':
        // var sign = document.getElementById('sign');
        reg.innerHTML += ` <div class="container-fluid bgSignUp">
        <div class="row">

            <div class="col-md-10 col-md-offset-1 col-sm-9 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                <div class="row">
                    <div class="col-md-4 col-md-offset-1 col-sm-10 col-sm-offest-0 col-xs-12">

                        <form class="signForm">

                            <div class="cardFlex my-1">
                                <p class="">НАЈАВИ СЕ</p>
                                <img src="images/ikonaSigns.png" class="img img-responsive imgSign">

                            </div>
                            <div class="form-group">
                                <label class="font" for="exampleInputEmail1">Email адреса</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <label class="font" for="exampleInputPassword1">Лозинка</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"
                                    placeholder="Password">
                            </div>

                            <label class="checkBox">
                                <input type="checkbox"> Запамти ме ?
                            </label>

                            <button type="submit" class="btn-block yellowButton btnBrainster textWhite font my-1">Најави
                                се</button>
                            <p><a>Заборавена лозинка ?</a></p>
                        </form>
                        <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs my-Sing">
                            <ul class="list-inline">
                                <li>
                                    <a href="https://www.brainster.io/business" target="_blank">
                                        <button class="yellowButton btnBrainster">Обуки за компании</button>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.brainster.io/business" target="_blank">
                                        <button class="yellowBlack btnBrainster">Вработи наши студенти</button>
                                    </a>
                                </li>

                            </ul>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    </div>`
        sign.innerHTML = registration;
        break;
    case 'contact1':
        // var contact = document.getElementById('contact');
        reg.innerHTML += `<div class="container-fluid">
            <div class="row contactBg">
                <div class="col-md-10 col-md-offset-2">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="contactForm">

                                <img class="img img-responsive imgFlex" src="images/logoBlack.png"
                                    style="width: 45%">

                                <h2 class="text-center bgText">Телефон<br>
                                    +389 70 38 47 28</h2>

                                <h2 class="text-center bgText"> Емаил<br>
                                    <a href="mailto:yourname@yourisp.com">contact@brainster.co</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        // contact.innerHTML = registration;
        break;
    case 'about1':

        reg.innerHTML += ` <div class="container-fluid">
        <div class="row">
        
            <div class="col-lg-12 col-md-12 col-sm-12 bgAbout">
                <div class="col-md-2">
                    <img class="imgAbout img img-responsive hidden-sm hidden-xs" src="images/aboutus.png" alt="Brainster Logo">
                </div>
        
                <div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 TextBgAbout">
        
                    <h2 class="tileH2">Ајде заедно да го промениме начинот на кој учиме!
                    </h2>
                    <br>
                    <p class="aboutP">Ние веруваме дека секој поседува практични вештини да предава како и
                        постојана
                        потреба да стекнува
                        нови
                        знаења. <br>
        
                        Затоа гo создадовме <span class="spanPurple"><a href="#">Brainster.</a></span><br>
        
                        Brainster е платформа за офлајн курсеви каде ќе можете да предавате и да посетувате
                        курсеви на
                        најразлични теми - од курсеви за изработка на мобилни апликации, до курсеви за улична
                        фотографија.
                    </p>
        
                    <h2 class="tileH2">Нашата визија е да го претвориме целиот град во
                        универзитет,
                        секој
                        простор во
                        училница и секој
                        од
                        нас
                        во инструктор и студент.</h2><br>
                    <p class="aboutP"> <span class="spanPurple"><a href="#">Brainster</a></span> Ви овозможува
                        активно
                        да
                        учествувате во градењето на локалната 2.0
                        заедница, да се
                        вмрежите
                        со луѓе со слични интереси, да креирате, да го споделувате Вашето знаење и да учите од
                        другите.<br>
        
                        Нашата прва станица е Скопје. Очекувајте нѐ во октомври на различни кул локации како
                        co-working
                        простории, работилници, акселератори, па дури и во кафулиња.</p><br>
                    <p class="tileH2">Контакт<br>
                        <span class="spanPurple"><a href="mailto:yourname@yourisp.com">contact@brainster.co</a></span>
                    </p>
                </div>
            </div>
        
        </div>
        </div>`

        break;
    default:

};
function myFunction(event) {
    window.localStorage.setItem("DATA")
    console.log("TUKA SME: ", event.targetA);
}

// document.getElementById("reg1").addEventListener('click', function (event) {
//     window.localStorage.setItem("targetA", "reg1");
// }, false);

// document.getElementById("sign1").addEventListener('click', function (event) {
//     window.localStorage.setItem("targetA", "sign1");
// }, false);
// document.getElementById("contact1").addEventListener('click', function (event) {
//     window.localStorage.setItem("targetA", "contact1");
// }, false);

// document.getElementById("about1").addEventListener('click', function (event) {
//     window.localStorage.setItem("targetA", "about1");
// }, false);