var reg = document.querySelector('.reg');
var registration = "";
registration += ` <div class="container-fluid bgSignUp">
<div class="row">

    <div class="col-md-10 col-md-offset-1 col-sm-9 col-sm-offset-2 col-xs-10 col-xs-offset-1">
        <div class="row">
            <div class="col-md-4 col-md-offset-1 col-sm-10 col-sm-offest-0 col-xs-12">
            <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs my-Sing">
            <ul class="list-inline flexA">
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

                <form class="signForm">

                    <div class="cardFlex my-1">
                        <p class="pSignIn">НАЈАВИ СЕ</p>
                        <img src="images/ikonaSigns.png" class="img img-responsive imgSign" alt="Brainster Logo">

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
                        <input type="checkbox" style="margin:0"> Запамти ме ?
                    </label>

                    <button type="submit" class="btn-block yellowButton btnBrainster textWhite font my-1">Најави
                        се</button>
                    <p><a>Заборавена лозинка ?</a></p>
                </form>
      

            </div>


        </div>

    </div>
</div>
</div>`
reg.innerHTML = registration;