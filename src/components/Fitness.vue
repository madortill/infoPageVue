<template>
    <div class='fitContainer'>
        <div class='titleContainer'>
            <img src="@/assets/heartIcon.svg" alt="Heart" class='heartIcon' />
            <div class='titleCenter'>פנאי וכושר</div>
        </div>
        <img src="@/assets/backArrow.png" alt="back" class='backArrow' @click="$emit('goBack')" />
        <div class='gymContainer'>
            <div class='gymText'>
                <div class='libraryContainer'>
                    <TitleButton>ספרייה</TitleButton>
                    <div class='libraryText'>
                        מיקום -מרכז מסחרי, קומה 1 <br>
                        מתחם נוח וחדשני הכולל פינות ישיבה ועבודה. <br>
                        לשירותכם שירותי השאלת ספרים,
                        שירותי הדפסה באזרחי וצבאי,
                        <br>עבודה על בסיס מחשבים צבאיים ואינטרנט, 2 חללי לימוד ועבודה קבוצתיים בתיאום
                        מול ספרנית. <br>
                        טל - <a href="tel:054-8186548">054-8186548</a> או דרך מייל צבאי טל וקסלבלט ctrl+k <br>
                        <b>שעות פעילות:</b> <br>
                        א'-ד': 08:00-17:00, &nbsp;
                        19:00-22:00. <br>
                        ה': 08:00-17:00 <br>
                    </div>
                </div>
                <TitleButton class="titleNameGym">חדר כושר</TitleButton>
                מיקום -קריית הספורט, קומה 1 <br>
                <b>שעות פתיחה:</b>
                <p>א-ה 06:00-22:00</p>
                <p>
                    ו- 06:00-15:00
                </p>
                <p>
                    שבת - 19:00-22:00
                </p>
                <p>
                    שעות רישום לחדר כושר -
                    14:00 - 12:00
                </p> <br>
                אימונים לאנשי הסגל יתקיימו בימים:
                <div>
                    ראשון 19:00 ספינינג
                    <p>
                        שלישי 18:30 פילאטיס
                    </p>
                    <p>
                        רביעי 18:00 חיזוק ויציבה
                    </p>
                </div>
                <p>
                    לרישום לאימונים: שיר מיכאלי <a href="tel:058-6999493">058-6999493</a>
                </p>
                <br>
                <p>
                    *הכניסה לחדר הכושר לאחר
                    הרשמה והצגת חוגר בכניסה. <br>
                    *כל מתאמן מחויב להגיע על
                    מדי ספורט תקניים ועם מגבת
                    אישית. <br>
                    *כל מתאמן מעל גיל 23 או
                    מתחת לפרופיל 72 נדרש
                    לאישור רופא.
                </p>
            </div>
        </div>
        <div class='fitTextContainer'>
            <!-- <div class="cols"> -->
            <div class="cols poolText">
                <div class="keep-as-one">
                    <TitleButton>בריכה</TitleButton>
                    מיקום -קריית הספורט, קומת כניסה <br>
                    <p>
                        בקריית הספורט קיימת בריכת שחייה
                        חצי אולימפית.</p>
                    <b>שעות פעילות:</b> <br>
                    ראשון - 15:00-19:00 <br>
                    שני - 7:30-9:00, 16:00-20:00 <br>
                    שלישי - 15:00-19:00 <br>
                    רביעי - 15:00-19:00 <br>
                    חמישי - 16:00-20:00 <br>
                    אימוני שחייה לאנשי קבע ימי שני ב06:30-07:30
                    <p>
                        *יש לוודא הרשמה לחדר הכושר לפני כניסה לבריכה
                    </p>
                    <div>
                        *כל מתאמן מעל גיל 23 או
                        <p>

                            מתחת לפרופיל 72 נדרש
                        </p>
                        <p>
                            לאישור רופא.
                        </p>
                    </div>
                    <p>
                        *על כולם למלא הצהרת בריאות
                        מקרפ"ר 300 <a href="https://www.prat.idf.il/lomdot/refua/%D7%A9%D7%90%D7%9C%D7%95%D7%9F-%D7%90%D7%A1/%D7%A9%D7%90%D7%9C%D7%95%D7%9F-%D7%90%D7%A1-%D7%A4%D7%AA%D7%99%D7%97%D7%94/?returnUrl=%2flomdot%2frefua%2f%d7%a9%d7%90%d7%9c%d7%95%d7%9f-%d7%90%d7%a1%2f%d7%a9%d7%90%d7%9c%d7%95%d7%9f-%d7%90%d7%a1-%d7%a4%d7%aa%d7%99%d7%97%d7%94%2f">לקישור</a>
                    </p>
                </div>
                <img src="@/assets/pool.svg" alt="pool" class='poolPic' />
                <div class='genericText1'>
                    שאר מתקני קריית הספורט פועלים בתיאום מול המדא״גים של
                    הבה״דים בנוסף ישנם חוגי מפקדה לכלל מפקדות הבה״דים.
                    כמו כן, מוצעים אימונים אישיים לאנשי הקבע ולחיילים בסדיר.
                    <p>
                        נטע רמ”ד כושר קרבי- <a href="tel:053-333-4515">053-3334515</a>.
                        איתי אביסרור (רס"פ) <a href="tel:052-5566026">052-5566026</a>
                    </p>
                </div>
            </div>
            <div>
                <TitleButton>קציני אימון גופני בקריית ההדרכה:</TitleButton>
                <ul class="libraryText">
                    <li>רמ״ד כושר- סגן נטע לוי <a href="tel:0533334515">053-3334515</a></li>
                    <li>קא״גית בה״ד 7, 11, 20, חינוך ובית ספר לפיקוד - סג״ם לינוי כהן מצליח <a
                            href="tel:0545505528">054-5505528</a></li>
                    <li>קא״גית בה״ד 6, 10, 13 ומפקדה - סג״ם אביטל פיליפסון <a href="tel:0587203843">058-7203843</a></li>
                </ul>
            </div>
            <div>
                <TitleButton>מדריכי אימון גופני בקריית ההדרכה:</TitleButton>
                <ul class="libraryText">
                    <li>בה״ד 6- אגם אלגלי- <a href="tel:050-9660555">050-9660555</a></li>
                    <li>בה״ד 13- אגם שנקר-<a href="tel:0528914115">052-8914115</a><br> &nbsp;
                        ורותם ארד-<a href="tel:052-2735282">052-2735282</a></li>
                    <li>בה״ד 11- כפיר לסקר- <a href="tel:054-4770480">054-4770480</a> </li>
                    <li>בה״ד 7- רוני שלם- <a href="tel:0585605565">058-5605565</a><br> &nbsp;
                        וגל מירון- <a href="tel:054-4476410">054-4476410</a> </li>
                    <li>בה״ד 20- דריה אפשטיין- <a href="tel:0508585527">050-8585527</a><br> &nbsp;
                        ושחר דולב- <a href="tel:054-7090771">054-7090771</a> </li>
                    <li>בה״ד חינוך- גל מירון- <a href="tel:054-4476410">054-4476410</a> </li>
                    <li>בית ספר לפיקוד- דריה אפשטיין- <a href="tel:050-8585527">050-8585527</a> </li>
                    <li>בה״ד 10- רוני דותן- <a href="tel:0504703709">0504703709</a>,<br> &nbsp;
                        מיה גבריאל- <a href="tel:0544866646">054-4866646</a>,<br> &nbsp;
                        עדן רוזנברג- <a href="tel:0508908118">050-8908118</a> <br> &nbsp;
                        ושיר מיכאלי- <a href="tel:058-6999493">058-6999493</a> </li>
                    <li>מפקדה- שיר מיכאלי- <a href="tel:058-6999493">058-6999493</a> </li>
                    <li>מדריך קרב מגע- אלירן שמח- <a href="tel:052-2935635">052-2935635</a> </li>
                    <li>מציל- גל אולגרט <a href="tel:0506618236">050-6618236</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import TitleButton from './TitleButton.vue';

export default {
    data() {
        return {};
    },
    components: { TitleButton }
}
</script>

<style>
.heartIcon {
    height: 4vh;
    width: 9vw;
    margin-right: 1vw;
}

.fitContainer {
    margin-top: 4vh;
    position: relative;
}

.titleCenter {
    font-size: 4vh;
    font-weight: 700;
    margin-left: 1vw;
}

.fitTextContainer {
    margin-right: 7vw;
    padding-bottom: 3vh;
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
    height: fit-content;
}

.gymContainer {
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
}

.gymText,
.poolText,
.libraryText {
    max-width: 93vw;
}

.gymText {
    /* background: linear-gradient(180deg, #cae3ea, #88bbe3); */
    width: 100vw;
    padding-right: 7vw;
}

.poolText {
    min-width: 40vw;
}


.poolPic {
    height: 60vh;
    /* position: relative;
    bottom: 85vh;
    right: 45vw; */
}

.genericText1 {
    margin-top: 2vh;
    max-width: 85vw;
    column-span: all;
}

.titleNameGym {
    height: 7.25vh;
    width: 30vw;
}

.backArrow {
    width: 8vw;
    position: absolute;
    left: 2vw;
    top: 2vh;
    transform: rotate(90deg);
}

.cols {
    columns: 2;
}

.libraryContainer,
.poolText {
    margin-top: 1vh;
}
</style>