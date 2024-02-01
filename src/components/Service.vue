<template>
    <div class='serviceContainer'>
        <div class='titleContainer'>
            <img src="@/assets/settingsIcon.svg" alt="settings" class='icon' />
            <div class='titleService'>שירותי הקרייה</div>
        </div>
        <img src="@/assets/backArrow.png" alt="back" class='backArrow' @click="$emit('goBack')" />
        <div class='textContainer'>
            <div class="keep-as-one">
                <TitleButton>מוקד 2000</TitleButton>
                <div class='mokedText'>
                    נתקלתם בתקלה? התקשרו
                    למוקד הזכיין ופתחו קריאה
                    <p>
                        בטלפון הצבאי- 2000
                    </p>
                    בטלפון אזרחי- <a href="tel:073-3772000">073-3772000</a>
                    <div>
                        המוקד מטפל בתקלות בנושאים:
                        <ul>
                            <li>הסעדה - תפעול, כשרות וברה"צ</li>
                            <li>שאטלים פנימיים</li>
                            <li>תקשוב ומרת"ק</li>
                            <li>חזות מחנה - ניקיון וגינון</li>
                            <li>מרכז אחזקה טנ"א</li>
                            <li>לוגיסטיקה - מרלו"ג, אפסנכל ותחנת הדלק</li>
                            <li>בטיחות</li>
                            <li>מבנים ציבוריים (מבני הדרכה, בתי כנסת, ספרייה)</li>
                            <li>אחזקת בינוי ותשתיות</li>
                            <li>מרכז מסחרי </li>
                        </ul>
                        במידה ולא מתקבל מענה ניתן
                        לפנות לנציג הצבאי - רת"ח מוקד זוהר ראדה <a href="tel:054-934-9346">054-9349346</a>
                    </div>
                </div>
                <div class="keep-as-one">
                    <TitleButton>יוהל"ם ומהו"ת</TitleButton>
                    <div class='yohalamText'>
                        <p>
                            מרכז המעניק טיפול רגשי, סיוע
                            רפואי וליווי משפטי לחיילות וחיילים
                            במקרים של פגיעה מינית, אלימות
                            במשפחה ובין בני זוג ובמקרים של
                            היריון בלתי מתוכנן.
                            מהו”ת- מרכז התמודדות ותמיכה:
                            <a href="tel:1111">1111</a> שלוחה 5 ואז 2
                        </p>
                    </div>
                </div>
                <div class="keep-as-one">
                    <TitleButton>שירותי תקשוב</TitleButton>
                    <div class='michshuvText'>
                        חלון הקבלה נמצא בבניין המפקדה קומה 1- (בחניית מפקדת קרה”ד) <br>
                        <ul>
                            <li>הלבנות והשחרות</li>
                            <li>טופס טיולים נכנס/יוצא</li>
                            <li>הרשאות לתיקיות רשת</li>
                            <li>קידוד חוגרים</li>
                        </ul>
                        זמני פעילות: ימים א'-ה' <span class="nobreak">8:00-20:00</span> <br>
                        הפסקות: <span class="nobreak">12:00-13:00</span>, <span class="nobreak">18:00-19:00</span>
                    </div>
                    <!-- ניתן לפנות דרך הטלפון:
                            <a href="tel:073-3772000">073-3772000</a> שלוחה 2. -->
                </div>
                <div class="keep-as-one">
                    <TitleButton>עמדת חוגרים</TitleButton>
                    <div class='michshuvText'>
                        <p>שעות פתיחה:<br>
                            יום א’ - ד’: <span class="nobreak">08:30-17:00</span> <br><span class="nobreak"> הפסקה בין השעות
                                12:00-13:00</span></p>
                        <p>יום ה- 8:30 - 12:00</p>
                        <p>טלפון מטכ”לי 0747-2345</p>
                        <p>טלפון אזרחי <a href="tel:0733772345">073-3772345</a></p>
                    </div>
                </div>
            </div>

            <div class="keep-as-one">
                <TitleButton>מספרה</TitleButton>
                <div class='barberText'>
                    תאמו תור מראש והסתפרו
                    במרכז המסחרי בבסיס-
                    <p><a href="tel:054-5562343">054-5562343</a></p>
                    <p>א-ה: 08:00-18:00
                        הפסקה: 12:00-13:00</p>
                </div>
            </div>
            <div class="keep-as-one">
                <TitleButton>ת"ש</TitleButton>
                <div class='tashText'>
                    טיפול בבקשות ת״ש ,סיוע
                    כלכלי ובירור זכאויות ותנאי
                    שירות -יש לפנות למשרד
                    הת״ש בבה״ד.
                </div>
            </div>
            <div class="keep-as-one">
                <TitleButton>חינוך</TitleButton>
                <div class='educText'>
                    <p>תפקידי מדור החינוך בקריית
                        ההדרכה- לספק שירותי חינוך עבור
                        המשרתים ביחידה תוך חיזוק
                        תחושת המחויבות והשייכות
                        למדינת ישראל. </p>
                    <p>
                        לכל בה"ד מדור חינוך משלו וניתן
                        לפנות אליהם במגוון נושאי חינוך.
                    </p>
                </div>
            </div>
            <div class='keep-as-one displine'>
                <TitleButton>נגדי משמעת קריית ההדרכה</TitleButton>
                <div class='discText'>
                    <div>
                        בקריית ההדרכה ינועו עם כומתה על הראש כלל המשרתים.
                        חלה חובת הצדעה בשטח היחידה מדרגת אל”ם ומעלה.
                        בשישי שבת וחג לא חלה החובה לחבישת כומתה. <br>
                        נגדי משמעת ביחידות: <br>
                        רנ"גית קריית ההדרכה: <a href="tel:">073-3772622</a> <br>
                        רס"רית מפקדה : <a href="tel:">073-3772670</a> <br>
                        רס"ר בה"ד 7 : <a href="tel:">073-3773443</a> <br>
                        רס"ר בה"ד 6 : <a href="tel:">073-3775525</a> <br>
                        רס"ר בה"ד 20 : <a href="tel:">073-3774031</a> <br>
                        רס"ר בה"ד 10 : <a href="tel:">073-3775269</a> <br>
                        רס"רית הכשרות יסוד בה"ד 10: <a href="tel:">073-3775183</a> <br>
                        רס"ר בה"ד 11 : <a href="tel:">073-3774835</a> <br>
                        רס"ר ענף הכשרות בה"ד 11 : <a href="tel:">073-3774834</a> <br>
                        רס"ר בה"ד חינוך : <a href="tel:">073-3774728</a> <br>
                        רס"ר בה"ד 13 : <a href="tel:">073-3775296</a> <br>
                        חמ"ל מ.צ הנגב : <a href="tel:">073-3772797</a> <br>
                    </div>
                </div>
            </div>
            <div class="keep-as-one">
                <TitleButton>חמ"ל קריית ההדרכה</TitleButton>
                <div class='hamalText'>
                    <p>
                        גורם אחראי על משימת
                        האבטחה ביחידה.
                    </p>
                    <p>
                        חמ״ל מבצעי למקרי חירום,
                        טלפון - <a href="tel:073-3772222"> 073-3772222</a>
                    </p>
                    <p>
                        טלפון מטכלי: 0747-2222
                    </p>
                </div>
            </div>
            <img src="@/assets/base.svg" alt="base" class='basePic' />
            <!-- <div class="keep-as-one">
                <TitleButton>חמ"ל קריית ההדרכה</TitleButton>
                <div class='hamalText'>

                </div>
            </div> -->
            <div>

            </div>
        </div>
    </div>
</template>

<script>
import TitleButton from './TitleButton.vue';
export default {
    name: "Service",
    components: { TitleButton }
}
</script>

<style scoped>
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

.titleContainer {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.textContainer {
    columns: 2;
    direction: rtl;
    margin-right: 5vw;
    max-width: 90vw;
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
.discText,
.PPPText {
    /* margin-right: 5vw; */
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
}


p {
    padding: 0;
    margin: 0;
}

.discContainer {
    margin-top: 3vh;
    display: flex;
}

/* .discText {
    margin-right: 5vw;
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
    width: 58vw;
} */

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

.keep-as-one {
    break-inside: avoid;
}
</style>