var contentsC = "";
var cardC = document.querySelector('.cardC');

contentsC += `
<div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainPhotoSingle">
                    <div class="row">
                        <div
                            class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offeset-1 col-xs-12">
                            <div class="row cardFlex">
                                <div class="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-1 col-xs-4 hidden-xs">
                                    <img src="images/3.png" class="img img-responsive rotate-scale-down ainImgCard">
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-5 col-xs-12">
                                    <h1 class="mainHeaderCard2">Тhe 5 Whys</h1>
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
                                    <p class="smallPexplanation">2-10</p>
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
                                    <p class="smallPexplanation my-left">Пенкала,
                                        бела табла или флипчарт, листови.
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
                            формулирана што е можно поконцизно.
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
cardC.innerHTML = contentsC;