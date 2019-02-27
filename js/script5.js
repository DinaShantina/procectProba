var contentsD = "";
var cardD = document.querySelector('.cardD');

contentsD += `<div class="container-fluid">
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
            <div class="row">
                <div
                    class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                    <div class="row cardFlex">
                        <div class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                            <img src="images/5.png" class="img img-responsive rotate-scale-down ainImgCard">
                        </div>
                            <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                <h1 class="mainHeaderCard2">Story Building</h1>
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
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
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

                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
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
                                <p class="smallPexplanation my-left">Лаптоп,
                                    таблет,
                                    смартфон
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
                            свет.
                            Денеска ќе градиме неколку приказни заедно со помош на постоечки кориснички
                            содржини користејќи бесплатна веб-услуга наречена Storify.
                </p>
                        <p>
                            <hr>
                                <p class="boldFont"> Чекор 2:</p>
                                <p>
                                    Разговарајте со групата за видовите на приказни кои би биле интересни и соодветни за
                                    градење. Тие можат да бидат релевантни за работилницата, програмата или компанијата;
                                    или можат да бидат поврзани со лична страст.
                                    Целта не е да се создаде квалитетно парче содржина, туку да се експериментира и да
                                    се
                                    обиде да направи разновидна алатка.
            
                        <hr>
                                        <p class="boldFont"> Чекор 3:</p>
                                        <p> Потребно е сите да се пријават на Storify. Тие можат да ги користат постоечките
                                            Фејсбук и
                                            Твитер профили, или да креираат нов на Storify.
                                            Дајте им основни упатства за да започнат:
                
                                            Изградете ја својата приказна. Влечете елементи од социјалните медиуми, веб-
                                            страниците за вести и блоговите, за да бидете интересни и сеопфатни колку што
                                            можете.
                                            Бидете разиграни и се забавувајте се. Споделете ја вашата приказна со остатокот
                                            од
                                            групата пред следната работилница.
                        </p>
            </div>
        </div>
</div>`;

cardD.innerHTML = contentsD;