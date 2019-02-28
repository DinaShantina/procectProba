var reg = document.querySelector('.reg');
var registration = "";
registration += `<div class="container-fluid">
<div class="row contactBg">
    <div class="col-md-10 col-md-offset-2">
        <div class="row">
            <div class="col-md-4">
                <div class="contactForm">
                <div class="buttonS flexA hidden-lg hidden-md hidden-sm visible-xs"  id="contactButton">
                <ul class="list-inline flexA">
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowButton btnBrainster">Обуки за компании</button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brainster.io/business" target="_blank">
                            <button class="yellowBlack btnBrainster" >Вработи наши студенти</button>
                        </a>
                    </li>

                </ul>
            </div>

                    <img class="img img-responsive imgFlex" src="images/logoBlack.png">

                    <h2 class="text-center bgText">Телефон<br>
                    <a href="tel:+38970384728">
                        +389 70 38 47 28</a></h2>

                    <h2 class="text-center bgText">Емаил<br>
                        <a href="mailto:yourname@yourisp.com">contact@brainster.co</a></h2>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`
reg.innerHTML = registration;