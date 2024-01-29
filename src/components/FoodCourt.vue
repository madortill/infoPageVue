<template>
    <div class="foodContainer" >
        <div class='titleContainer'>
            <img src="@/assets/foodIcon.svg" alt="icon" class='icon' />
            <div class='titleFood'>חדר אוכל</div>
        </div>
        <img src="@/assets/backArrow.png" alt="back" class='backArrow' @click="$emit('goBack')" />
        <div class='genericContainer'>
            <img src="@/assets/lunchroom.svg" alt="room" class='lunchPic' />
            <div class='genericText'>
                בקריית ההדרכה ישנם 6 חדרי אוכל.
                פעילים A, B, C, D אוכל חדרי
                במהלך כל השבוע ובכל השעות
                הנקובות.
                חדר אוכל E הוא פיתייה ופעיל בימים
                א׳-ה׳ במהלך שעות ארוחת הצהריים
                בלבד.
            </div>
            <div class='textContainerFood'>
                <div>
                    <img src="@/assets/openHours.svg" alt="openHours" class='titleName' />
                    <div class='openText'>
                        <div>
                            <b>ימי א׳ -ה׳-</b>
                            <p>
                                בוקר- 06:30-08:00
                                צהריים- 11:30-14:00
                                ערב- 18:00-20:00
                            </p>
                        </div>
                        <div>
                            <b>ימי שישי-</b>
                            <p>
                                בוקר- 06:30-08:00
                                צהריים- 11:30-13:30
                                ערב -משתנה בהתאם
                                לכניסת השבת.
                            </p>
                        </div>
                        <div>
                            <b>ימי שבת-</b>
                            <p>
                                בוקר- 06:30-08:00
                                צהריים- 11:30-14:30
                                ערב- משתנה בהתאם לזמן
                                יציאת שבת.
                            </p>
                        </div>
                        <div>
                            מידי שבוע מופץ ויסות חדרי אוכל
                            קרייתי במסרתו נקבעות שעות לכל
                            בה”ד, יש להקפיד להגיע בשעות
                            שהוקצו לבה”ד.
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="@/assets/middleMeal.svg" alt="middle" class='titleName' />
                        <div class='middleText'>
                            בקריית ההדרכה ניתן להזמין ולמשוך
                            ארוחות ביניים מעמדת הפריסה
                            שהוגדרה בצמוד לרמפה של המטבח.
                            <p> איך מזמינים ארוחת ביניים?
                                פנו לתכנון הצבאי של הבה״ד שלכם -
                                דרישה למפקדת הסעדה - הזנה
                                במערכת ניהול העיר - ובאמצעות
                                מספר המפגש שלכם תוכלו למשוך
                                את הפריסה.</p>
                        </div>
                    </div>
                    <div>
                        <img src="@/assets/kashrut.svg" alt="kasher" class='titleName' />
                        <div class='kosherText'>
                            <p>בשר גולמי וטחון חלק מהרבנות.
                                מוצרי עוף רבנות מהדרין.</p>
                            <p>ירקות ופירות שמיטא לחומרה.</p>
                            <p>ירק עלי בפיקוח חרקים למהדרין.
                                חומרי גלם ומוצרי חלב בד”צ העדה
                                החרדית בחדר אוכל A. </p>
                            <p>
                                מס טלפון אחראי כשרות ודת-
                                רס”ב נאור בוכובזה - <a href="tel: +0526374225">052-6374225</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FoodCourt",
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

.foodContainer {
    position: relative;
}

.titleFood {
    font-size: 4vh;
    font-weight: 700;
    margin-left: 1vw;
}

.titleContainer {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
}

.lunchPic {
    position: relative;
    left: 22vw;
    height: 49vw;
}

.genericText {
    position: relative;
    bottom: 20vh;
    right: 53vw;
    width: 40vw;
    margin-left: 4vw;
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
}

.titleName {
    height: 6vh;
    width: 22vw;
}

.middleText,
.kosherText {
    width: 45vw;
    margin-right: 5vw;
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
}

.openText {
    width: 25vw;
    margin-right: 5vw;
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
}

.textContainerFood {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    direction: rtl;
    position: relative;
    bottom: 14vh;
}

.textContainerFood>div {
    flex-basis: 20ch;
    flex-shrink: 0;
}

.kosherPic {
    height: 5vh;
    width: 8vw;
}

p {
    padding: 0;
    margin: 1vw;
}

.backArrow {
    width: 8vw;
    position: absolute;
    left: 2vw;
    top: 2vh;
    transform: rotate(90deg);
}
</style>