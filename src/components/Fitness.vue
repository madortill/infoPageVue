<template>
    <div class='fitContainer'>
        <div class='titleContainer'>
            <img src="@/assets/heartIcon.svg" alt="Heart" class='heartIcon' />
            <div class='titleCenter'>פנאי וכושר</div>
        </div>
        <img src="@/assets/backArrow.png" alt="back" class='backArrow' @click="$emit('goBack')" />
        <div class='fitTextContainer'>
            <div class='gymContainer'>
                <img src="@/assets/gym.svg" class="titleNameGym" />
                <div class='gymText'>
                    מיקום -קריית הספורט, קומה 1
                    שעות פתיחה-
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
                        לרישום לאימונים: שיר מיכאלי <a href="tel +58-6999493">058-6999493</a>
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
                        לאישור רופא המאשר לו
                    </p>
                </div>
            </div>
            <div class='libraryContainer'>
                <img src="@/assets/libraryButton.png" alt="library" class='titleNameGym' />
                <div class='libraryText'>
                    שעות פעילות-
                    <p>
                        א-ה- 08:00-17:00
                    </p>
                    <p>
                        19:00-22:00
                    </p>
                    <p>
                        בספרייה קיימים מחשבים אזרחיים
                        וצבאיים עם אופצייה להדפסה,
                        פסנתר וספרים המסווגים לפי
                        נושאים.
                    </p>
                </div>
            </div>
            <!-- <div class="cols"> -->
            <div class="cols poolText">
                <img src="@/assets/poolButton.svg" alt="pool" class='titleNameGym' />
                <div class='poolText'>
                    <b>שעות פעילות:</b> <br>
                    ראשון - 15:00-19:00 <br>
                    שני - 7:30-9:00, 16:00-20:00 <br>
                    שלישי - 15:00-19:00 <br>
                    רביעי - 15:00-19:00 <br>
                    חמישי - 16:00-20:00 <br>
                    אימוני שחייה לאנשי קבע ימי שני ב6:30-7:30
                    <p>
                        בקריית הספורט קיימת בריכת שחייה
                        חצי אולימפית.
                    </p>
                    <p>
                        *ניתן להיכנס רק לאחר הרשמה לחדר
                        הכושר
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
                        מקרפר 300
                    </p>
                    <div>
                        ישנם אימוני שחייה עם מאמן מקצועי
                        כל יום שני ב6:30 לאנשי הקבע בלבד.
                        הרשמה מול רמ”ד כושר קרבי.
                    </div>
                </div>
                <img src="@/assets/pool.svg" alt="pool" class='poolPic' />
                <div class='genericText1'>
                    שאר מתקני קריית הספורט פועלים בתיאום מול המדא״גים של
                    הבה״דים בנוסף ישנם חוגי מפקדה לכלל מפקדות הבה״דים.
                    כמו כן, מוצעים אימונים אישיים לאנשי הקבע ולחיילים בסדיר.
                    <p>
                        נטע רמ”ד כושר קרבי- <a href="tel:+53-333-4515">053-3334515</a>.
                        איתי אביסרור (רס"פ) <a href="tel:+52-5566026">052-5566026</a>
                    </p>
                </div>
            </div>
            <div>
                <TitleButton>קציני אימון גופני בקריית ההדרכה:</TitleButton>
                <ul class="libraryText">
                    <li>רמ״ד כושר- סגן נטע לוי <a href="tel+533334515" class="nobreak">053-3334515</a></li>
                    <li>קא״גית בה״ד 7, 11, 20, חינוך ובית ספר לפיקוד - סג״ם לינוי כהן מצליח <a class="nobreak"
                            href="tel+545505528">054-5505528</a></li>
                    <li>קא״גית בה״ד 6, 10, 13 ומפקדה - סג״ם אביטל פיליפסון <a href="tel+587203843"
                            class="nobreak">058-7203843</a></li>
                </ul>
            </div>
            <div>
                <TitleButton>מדריכי אימון גופני בקריית ההדרכה:</TitleButton>
                <ul class="libraryText">
                    <li>בה״ד 6- אגם אלגלי- <a class="nobreak" href="tel+50-9660555">050-9660555</a></li>
                    <li>בה״ד 13- אגם שנקר-<a class="nobreak" href="tel+528914115">052-8914115</a> ורותם ארד- <a class="nobreak" href="tel+052-2735282">052-2735282</a></li>
                    <li>בה״ד 11- כפיר לסקר- <a class="nobreak" href="tel+54-4770480">054-4770480</a> </li>
                    <li>בה״ד 7- רוני שלם- <a class="nobreak" href="tel+585605565">058-5605565</a> וגל מירון- <a class="nobreak" href="tel+054-4476410">054-4476410</a> </li>
                    <li>בה״ד 20- דריה אפשטיין- <a class="nobreak" href="tel+508585527">050-8585527</a> ושחר דולב- <a class="nobreak" href="tel+054-7090771">054-7090771</a> </li>
                    <li>בה״ד חינוך- גל מירון- <a class="nobreak" href="tel+54-4476410">054-4476410</a> </li>
                    <li>בית ספר לפיקוד- דריה אפשטיין- <a class="nobreak" href="tel+050-8585527">050-8585527</a> </li>
                    <li>בה״ד 10- רוני דותן- <a class="nobreak" href="tel+504703709">0504703709</a>, מיה גבריאל- <a class="nobreak" href="tel+0544866646">054-4866646</a>, עדן רוזנברג- <a href="tel+0508908118">050-8908118</a> ושיר מיכאלי- <a href="tel+058-6999493">058-6999493</a> </li>
                    <li>מפקדה- שיר מיכאלי- <a class="nobreak" href="tel+58-6999493">058-6999493</a> </li>
                    <li>מדריך קרב מגע- אלירן שמח- <a class="nobreak" href="tel+52-2935635">052-2935635</a> </li>
                    <li>מציל- גל אולגרט <a class="nobreak" href="tel+506618236">050-6618236</a></li>
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

.fitTextContainer {
    margin-right: 7vw;
    padding-bottom: 3vh;
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
    height: fit-content;
}


.gymText,
.poolText,
.libraryText {
    max-width: 93vw;
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
</style>