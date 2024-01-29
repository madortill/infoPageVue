<template>
            <div class='fitContainer' >
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
                    ו- 06:00-13:00
                    </p>
                    <p>
                    שעות רישום לחדר כושר -
                    14:00 - 12:00
                    </p>
                    <div>
                    יום ראשון 19:00 ספינינג
                    <p>
                    יום שלישי 18:30 פילאטיס
                    </p>
                    <p>
                    יום רביעי 18:00 חיזוק ויציבה
                    </p>
                    </div>
                    <p>
                    *הכניסה לחדר הכושר לאחר
                    הרשמה והצגת חוגר בכניסה.
                    *כל מתאמן מחויב להגיע על
                    מדי ספורט תקניים ועם מגבת
                    אישית.
                    *כל מתאמן מעל גיל 23 או
                    מתחת לפרופיל 72 נדרש
                    לאישור רופא המאשר לו   
                    </p>
                    </div>
                </div>
                <div class='libraryContainer'>
                    <img src="@/assets/libraryButton.png" alt="library" class='titleName' />
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
                <div>
                    <img src="@/assets/poolButton.svg" alt="pool" class='titleName' />
                    <div class='poolText'>
                        שעות פעילות-
                        <p>בכל יום: 14:00-19:30
                        יום א’: 1</p>
                        <p>
                        בנוסף בימי ב’-ה’: 6:30-9:00
                        </p>
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
                            הרשמה מול רמ”ד כושר קרבי 
                        </div>
                    </div>
                    <div class='genericText1'>
                    שאר מתקני קריית הספורט פועלים בתיאום מול המדא״גים של
                    הבה״דים בנוסף ישנם חוגי מפקדה לכלל מפקדות הבה״דים.
                    כמו כן, מוצעים אימונים אישיים לאנשי הקבע ולחיילים בסדיר. 
                    <p>
                    רמ”ד כושר קרבי- <a href="tel: +053-333-4515" >053-3334515</a>.
                    </p>
                    </div>
                </div>
                <img src="@/assets/pool.svg" alt="pool" class='poolPic' />
            </div>
        </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
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
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 115vh;
}

.libraryContainer {
    margin-right: 4vw;
}

.gymText, .poolText, .libraryText {
    width: 40vw;
}

.poolPic {
    height: 60vh;
    position: relative;
    bottom: 85vh;
    right: 45vw;
}

.genericText1 {
    margin-top: 7vh;
    width: 75vw;
    margin-right: 3vw;
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

</style>