<template>
<div class="container">
<div class="contacts" data-aos="fade-up">
    <div class="contacts__item">
        <div class="contacts__title">Контакты</div>
        <div class="contacts__text">
            <p>Вы можете написать мне в любой удобный для вас мессенджер, чтобы записаться на съёмку</p>
            <p>Телефон:   +7 (977) 341 75 08</p>
            <p>E-MAIL:    info@mazay33.com</p>
            <p>Если у вас остались вопросы, я отвечу вам в ближайшее время.
            Также можете воспользоваться формой обратной связи:  </p>     
        </div>
    			<div class="form">
            <form action="#" id="form" class="form__body" method="POST">
                <div class="form__item">
                    <label for="formName" class="form__label"></label>
                    <input id="formName" type="text" name="name" class="form__input _req"
                    placeholder="Имя*:">
                </div>  
                <div class="form__item">
                    <label for="formNumber" class="form__label"></label>
                    <input id="formNumber" type="text" name="number" class="form__input _req _number"
                    placeholder="Телефон*:">
                </div>
                <div class="form__item">
                    <label for="formEmail" class="form__label"></label>
                    <input id="formEmail" type="text" name="email" class="form__input _req _email"
                    placeholder="E-mail:">
                </div>
                <div class="form__item">
                    <label for="formMessage" class="form__label"></label>
                    <textarea name="message" id="formMessage" class="form__input" placeholder="Сообщение:"></textarea>
                </div>
                <button type="submit" class="form__button">Отправить</button>
            </form>
    </div>
    </div>
    <div class="contacts__item">
        <div class="contacts__photo">
            <img src="../assets/images/Contact_photo_2.jpg" alt="">
        </div>
    </div>
  </div>
  </div>
</template>

