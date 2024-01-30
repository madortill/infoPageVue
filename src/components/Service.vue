<template>
    <div class='serviceContainer'>
        <div class='titleContainer'>
            <img src="@/assets/settingsIcon.svg" alt="settings" class='icon' />
            <div class='titleService'>שירותים כלליים</div>
        </div>
        <img src="@/assets/backArrow.png" alt="back" class='backArrow' @click="$emit('goBack')" />
        <div class='textContainer'>
            <div class='container1'>
                <div>
                    <TitleButton>מוקד 2000</TitleButton>
                    <div class='mokedText'>
                        נתקלתם בתקלה? התקשרו
                        למוקד הזכיין ופתחו קריאה
                        <p>
                            בטלפון הצבאי- 2000
                        </p>
                        בטלפון אזרחי- <a href="tel: +073-3772000">073-3772000</a>
                        <div>
                            במידה ולא מתקבל מענה ניתן
                            לבקש לפנות לנציג הצבאי
                        </div>
                    </div>
                    <div>
                        <TitleButton>יוהל"ם ומהו"ת</TitleButton>
                        <div class='yohalamText'>
                            <p>
                                מרכז המעניק טיפול רגשי, סיוע
                                רפואי וליווי משפטי לחיילות וחיילים
                                במקרים של פגיעה מינית, אלימות
                                במשפחה ובין בני זוג ובמקרים של
                                היריון בלתי מתוכנן.
                                מהו”ת- מרכז התמודדות ותמיכה:
                                <a href="tel: +1111">1111</a> שלוחה 5 2
                                או בווטסאפ-
                                <a href="https://api.whatsapp.com/send?phone=0529282398&text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20">052-9282398</a>
                            </p>
                        </div>
                    </div>
                    <!-- <div>
                        <img src="@/assets/mokedMichshuv.svg" alt="michshuv" class='titleName1' />
                        <div class='michshuvText'>
                            <p>
                                בניין המפקדה (206) קומה 1- (חלון קבלה
                                בחניית מפקדת קרה”ד)
                                ניתן לפנות דרך הטלפון:
                                <a href="tel: +073-3772000">073-3772000</a> שלוחה 2.
                                שעות פעילות: 8:30-12:00 13:00-18:00
                            </p>
                        </div> -->
                    <div>
                        <TitleButton>עמדת חוגרים</TitleButton>
                        <div class='michshuvText'>
                            <p>שעות פתיחה:<br>
                                 יום א’ - ד’: <span class="nobreak">08:30-17:00</span> <br> &nbsp<span class="nobreak"> הפסקה בין השעות 12:00-13:00</span></p>
                            <p>יום ה- 8:30 - 12:00</p>
                            <p>טלפון מטכ”לי 0747-2345</p>
                            <p>טלפון אזרחי <a href="tel: +0733772345">073-3772345</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class='container2'>
                <div>
                    <TitleButton>מספרה</TitleButton>
                    <div class='barberText'>
                        תאמו תור מראש והסתפרו
                        במרכז המסחרי בבסיס-
                        <p><a href="tel: +054-5562343">054-5562343</a></p>
                        <p>א-ה: 08:00-18:00
                            הפסקה: 12:00-13:00</p>
                    </div>
                </div>
                <div>
                    <TitleButton>ת"ש</TitleButton>
                    <div class='tashText'>
                        טיפול בבקשות ת״ש ,סיוע
                        כלכלי ובירור זכאויות ותנאי
                        שירות -יש לפנות למשרד
                        הת״ש בבה״ד.
                    </div>
                </div>
                <div>
                    <TitleButton>חינוך</TitleButton>
                    <div class='educText'>
                        <p>תפקידי מדור החינוך בקריית
                            ההדרכה- לספק שירותי חינוך עבור
                            המשרתים ביחידה תוך חיזוק
                            תחושבת המחויובות והשייכות
                            למדינת ישראל. </p>
                        <p>
                            לכל בה"ד מדור חינוך משלו וניתן
                            לפנות אליהם במגוון נושאי חינוך.
                        </p>
                    </div>
                </div>
            </div>
            <div class='discContainer'>
                <div class='displine'>
                    <TitleButton>משמעת</TitleButton>
                    <div class='discText'>
                        <div>
                            בקריית ההדרכה ינועו עם כומתה על הראש כלל המשרתים.
                            חלה חובת הצדעה בשטח היחידה מדרגת אל”ם ומעלה.
                            בשישי שבת וחג לא חלה החובה לחבישת כומתה.
                        </div>
                    </div>

                </div>
                <img src="@/assets/base.svg" alt="base" class='basePic' />
            </div>
        </div>
        <div class='textContainer2'>
            <div>
                <TitleButton>חמ"ל קריית ההדרכה</TitleButton>
                <div class='hamalText'>
                    <p>
                        גורם אחראי על משימת
                        האבטחה ביחידה.
                    </p>
                    <p>
                        חמ״ל מבצעי למקרי חירום,
                        טלפון - <a href="tel: + 073-3772222"> 073-3772222</a>
                    </p>
                    <p>
                        טלפון מטכלי: 0747-2222
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TitleButton from './TitleButton.vue';
export default {
    name: "Service",
    components: {TitleButton}
}
</script>

<style>
.icon {
    height: 4vh;
    width: 9vw;
}

.serviceContainer {
    margin-top: 5vh;
    position: relative;
}

.titleService {
    font-size: 4vh;
    font-weight: 700;
    margin-left: 1vw;
}

.titleName {
    font-size: 4vh;
    font-weight: 700;
    margin-right: 1vw;
    margin-top: 2vh;
    width: 25vw;
    height: 6vh;
}

.titleName1 {
    font-size: 4vh;
    font-weight: 700;
    margin-right: 1vw;
    width: 41vw;
    height: 8vh;
}

.titleName2 {
    font-size: 4vh;
    font-weight: 700;
    margin-right: 1vw;
    width: 38vw;
    height: 7vh;
}

.titleContainer {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.textContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    direction: rtl;
    margin-right: 5vw;
    /* margin: 2vh 0vh; */
}

.container2 {
    margin-right: 9vw;
}

.container1 {
    margin-right: 2vw;
}

.textContainer2 {
    margin-right: 12vw;
}

.hamalText {
    width: 35vw;
}

.PPPText {
    width: 70vw;
}

.textContainer>div {
    flex-basis: 20ch;
    flex-shrink: 0;
}

.educText,
.tashText,
.barberText,
.michshuvText,
.yohalamText,
.mokedText,
.hamalText,
.PPPText {
    /* margin-right: 5vw; */
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
}

.container1,
.container2 {
    width: 30vw;
}

p {
    padding: 0;
    margin: 0;
}

.discContainer {
    margin-top: 3vh;
    display: flex;
}

.discText {
    margin-right: 5vw;
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
    width: 60vw;
}

.basePic {
    position: relative;
    left: 11vw;
    height: 40vh;
}

.backArrow {
    width: 8vw;
    position: absolute;
    left: 2vw;
    top: 2vh;
    transform: rotate(90deg);

}
</style>