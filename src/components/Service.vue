<template>
    <div class='serviceContainer'>
        <div class='titleContainer'>
            <img src="@/assets/settingsIcon.svg" alt="settings" class='icon' />
            <div class='titleService'>שירותי הקריה</div>
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
                        לפנות לנציג הצבאי - רת"ח מוקד סתיו מימרן  <a href="tel:050-7113619">050-7113619</a>
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
                            היריון בלתי מתוכנן. <br>
                            שני כהן רמ״ד פרט- <a href="tel:0503109216">050-3109216</a> <br>
                            מהו”ת- מרכז התמודדות ותמיכה:
                            <a href="tel:1111">1111</a> שלוחה 5 ואז 2 <br>
                            או בווצאפ: <a href="https://wa.me/0529282398">052-9282398</a> <br>
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
                        זמני פעילות: <br>
                        יום א': 10:00-19:00 <br>
                        יום ב'- ה': 08:00-19:00 <br>
                        הפסקות: <span class="nobreak">12:00-13:00</span>
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
                    מיקום - במרכז המסחרי בבסיס.<br>
                    <p>טלפון: <a href="tel:054-5562343">054-5562343</a> / <a href="tel:073-3775462">073-3775462</a> </p>
                    <p>שעות פעילות:</p>
                    <p>א'-ה': 08:00-18:00</p>
                    <p>הפסקה: 12:00-13:00</p>
                    <p>בימים א'-ה' מומלץ לקבוע תור מראש.</p>
                    <p>ימי ו': 08:00-12:00</p>
                    <p>בימי ו' <b>חובה</b> לקבוע תור מראש.</p>
                </div>
            </div>
            <div class="keep-as-one">
                <TitleButton>ת"ש</TitleButton>
                <div class='tashText'>
                    טיפול בבקשות ת״ש ,סיוע
                    כלכלי ובירור זכאויות ותנאי
                    שירות -יש לפנות למשרד
                    הת״ש בבה״ד. <br>
                    רמ״ד פרט קריית ההדרכה, רס"ן שני זנו : <a href="tel: 050-3109216"> 050-3109216</a>
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
                    רמ"ד חינוך קריית ההדרכה, אע"צ יותם רגב : <a href="tel: 0586596250">058-6596250</a>
                </div>
            </div>
            <div class='keep-as-one displine'>
                <TitleButton>נגדי משמעת קריית ההדרכה</TitleButton>
                <div class='discText'>
                    <div>
                        חלה חובת הצדעה בשטח היחידה מדרגת אל”ם ומעלה<br>
                        נגדי משמעת ביחידות: <br>
                        רנ"גית קריית ההדרכה: <a href="tel: 073-3772622">073-3772622</a> <br>
                        רס"רית מפקדה : <a href="tel:073-3772670">073-3772670</a> <br>
                        רס"ר בה"ד 7 : <a href="tel: 073-3773443">073-3773443</a> <br>
                        רס"ר בה"ד 6 : <a href="tel: 073-3775525">073-3775525</a> <br>
                        רס"ר בה"ד 20 : <a href="tel: 073-3774031">073-3774031</a> <br>
                        רס"ר בה"ד 10 : <a href="tel: 073-3775269">073-3775269</a> <br>
                        רס"רית הכשרות יסוד בה"ד 10: <a href="tel: 073-377518">073-3775183</a> <br>
                        רס"ר בה"ד 11 : <a href="tel: 073-3774835">073-3774835</a> <br>
                        רס"ר ענף הכשרות בה"ד 11 : <a href="tel: 073-3774834">073-3774834</a> <br>
                        רס"ר בה"ד חינוך : <a href="tel: 073-3774728">073-3774728</a> <br>
                        רס"ר בה"ד 13 : <a href="tel: 073-3775296">073-3775296</a> <br>
                        חמ"ל מ.צ הנגב : <a href="tel: 073-3772797">073-3772797</a> <br>
                    </div>
                </div>
            </div>
            <div class='keep-as-one displine'>
                <TitleButton>קצינות ת"ש קריית ההדרכה</TitleButton>
                <div class='discText'>
                    <div>
                        עילית אלטמן ק. ת"ש בה"ד 10: <a href="tel:0525180998">052-5180998</a> <br>
                        ספיר סומך, ק. ת״ש בה״ד 6: <a href="tel:0506688281">050-6688281</a> <br>
                        רוני לורנץ, ק. ת״ש בה״ד 20: <a href="tel:0527071570">052-7071570</a> <br>
                        תהל אור, ק. ת״ש בה״ד 11: <a href="tel:052-2143450">052-2143450</a> <br>
                        עומר כהן, ק. ת"ש בה"ד 13: <a href="tel:0544687046">054-4687046</a> <br>
                        דקל ציתאיאת, ק. ת״ש בה"ד 6: <a href="tel:055-8810877">055-8810877</a> <br>
                        מיכל אש, ק. ת״ש בה"ד 7: <a href="tel:050-9700455">050-9700455</a> <br>
                        ליאב עמר - ק. ת"ש בה"ד 20: <a href="tel:058-5955105">058-5955105</a> <br>
                        חושן הרשקוביץ, ק. ת״ש מפקדת קריית ההדרכה ובה"ד החינוך: <a href="tel:0526370683">052-6370683</a> <br>
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
            <div class="keep-as-one">
                <TitleButton>תחנת דלק</TitleButton>
                <div class='hamalText'>
                    נמצאת ליד הש.ג. המזרחי.
                    מיועדת לרכבים צבאיים של משרתי קריית ההדרכה.
                </div>
            </div>
            <div class="keep-as-one">
                <TitleButton>הגנת הסביבה</TitleButton>
                <div class='hamalText'>
                    בביסטופ ישנה אפשרות לתת בקבוקים למחזור.
                    כל חייל זכאי להזדכות על מקסימום 50 בקבוקים ביום ולקבל במזומן את סכום הפיקדון.
                    מפקדים - עודדו את החיילים למחזור, בצה"ל שומרים על הכדור.
                </div>
            </div>
            <img src="@/assets/base.svg" alt="base" class='basePic' />
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
