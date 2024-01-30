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
                    <img src="@/assets/2000Button.png" alt="2000" class='titleName' />
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
                        <img src="@/assets/yohalamButton.png" alt="yohalam" class='titleName' />
                        <div class='yohalamText'>
                            <p>
                                מרכז המעניק טיפול רגשי, סיוע
                                רפואי וליווי משפטי לחיילות וחיילים
                                במקרים של פגיעה מינית, אלימות
                                במשפחה ובין בני זוג ובמקרים של
                                היריון בלתי מתוכנן.
                            </p>
                            <p>
                                מהו”ת- מרכז התמודדות ותמיכה:
                            </p>
                            <p>
                                <a href="tel: +1111">1111</a> שלוחה 5 2
                                או בווטסאפ-
                                <a href="https://api.whatsapp.com/send?phone=0529282398&text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20">052-9282398</a>
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src="@/assets/mokedMichshuv.svg" alt="michshuv" class='titleName1' />
                        <div class='michshuvText'>
                            <p>
                                בניין המפקדה (206) קומה -1 (חלון קבלה
                                בחניית מפקדת קרה”ד)
                            </p>
                            <p>
                                ניתן לפנות דרך הטלפון:
                            </p>
                            <p>
                                <a href="tel: +073-3772000">073-3772000</a> שלוחה 2.
                                שעות פעילות: 8:30-12:00 13:00-18:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class='container2'>
                <div>
                    <img src="@/assets/barberButton.png" alt="barber" class='titleName' />
                    <div class='barberText'>
                        תאמו תור מראש והסתפרו
                        במרכז המסחרי בבסיס-
                        <p><a href="tel: +054-5562343">054-5562343</a></p>
                        <p>א-ה: 08:00-18:00
                            הפסקה: 12:00-13:00</p>
                    </div>
                </div>
                <div>
                    <img src="@/assets/tash.png" alt="tash" class='titleName' />
                    <div class='tashText'>
                        טיפול בבקשות ת״ש ,סיוע
                        כלכלי ובירור זכאויות ותנאי
                        שירות -יש לפנות למשרד
                        הת״ש בבה״ד.
                    </div>
                </div>
                <div>
                    <img src="@/assets/education.svg" alt="educ" class='titleName' />
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
                    <img src="@/assets/discipline.svg" alt="discpline" class='titleName' />
                    <div class='discText'>
                        <div>
                            בקריית ההדרכה ינועו עם כומתה על הראש כלל המשרתים.
                            חלה חובת הצדעה בשטח היחידה מדרגת אל”ם ומעלה.
                            בשישי שבת וחג לא חלה החובה לחבישת כומתה.
                        </div>
                        <div>
                            <p>עמדת חוגרים</p>
                            <p>שעות פתיחה:</p>
                            <p>יום א’ - ד ,08:30-12:00 13:00-17:00</p>
                            <p>יום ה- 8:30 - 12:00</p>
                            <p>טלפון מטכ”לי 0747-2345</p>
                            <p>טלפון אזרחי <a href="tel: +0733772345">073-3772345</a></p>
                        </div>
                    </div>

                </div>
                <img src="@/assets/base.svg" alt="base" class='basePic' />
            </div>
        </div>
        <div class='textContainer2'>
            <div>
                <img src="@/assets/hamal.png" alt="hamal" class='titleName2' />
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
export default {
    name: "Service",
    data() {
        return {

        }
    }
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
    margin-right: 5vw;
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