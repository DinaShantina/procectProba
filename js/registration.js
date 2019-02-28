var reg = document.querySelector('.reg');
var registration = "";
registration += `<div class="container-fluid">
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
reg.innerHTML = registration;