<template>
    <div class="foodContainer">
        <div class='titleContainer'>
            <img src="@/assets/foodIcon.svg" alt="icon" class='icon' />
            <div class='titleFood'>חדר אוכל</div>
        </div>
        <img src="@/assets/backArrow.png" alt="back" class='backArrow' @click="$emit('goBack')" />
        <div class='genericContainer'>
            <img src="@/assets/lunchroom.svg" alt="room" class='lunchPic' />
            <div class='genericText'>
                בקריית ההדרכה ישנם 4 חדרי אוכל בישיבה הפועלים בכלל הארוחות וחדר אוכל אחד מהיר הפועל בארוחת צהריים. <br>
                מידי שבוע מופץ ויסות חדרי אוכל
                קרייתי במסרתו נקבעות שעות לכל
                בה”ד, יש להקפיד להגיע בשעות
                שהוקצו לבה”ד.
            </div>
            <div class='textContainerFood'>
                <div class="openingHours keep-as-one">
                    <TitleButton>שעות פתיחה</TitleButton>
                    <div class="text">
                        <table dir="rtl">
                            <tbody>
                                <tr>
                                    <th class="cell time">
                                        <p>ימים:</p>
                                    </th>
                                    <th class="cell">
                                        <p>א' &ndash; ה'</p>
                                    </th>
                                    <th class="cell">
                                        <p>ימי שישי</p>
                                    </th>
                                    <th class="cell">
                                        <p>ימי שבת</p>
                                    </th>
                                </tr>
                                <tr>
                                    <td class="cell time">
                                        <p>בוקר</p>
                                    </td>
                                    <td class="cell">
                                        <p>06:30-08:00</p>
                                    </td>
                                    <td class="cell">
                                        <p>06:30-08:00</p>
                                    </td>
                                    <td class="cell">
                                        <p>06:30-08:00</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="cell time">
                                        <p>צהריים</p>
                                    </td>
                                    <td class="cell">
                                        <p>11:30-14:00</p>
                                    </td>
                                    <td class="cell">
                                        <p>11:30-13:30</p>
                                    </td>
                                    <td class="cell">
                                        <p>11:30-14:30</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="cell time">
                                        <p>ערב</p>
                                    </td>
                                    <td class="cell">
                                        <p>18:00-20:00</p>
                                    </td>
                                    <td class="cell">
                                        <p>משתנה בהתאם לכניסת השבת</p>
                                    </td>
                                    <td class="cell">
                                        <p>משתנה בהתאם לזמן יציאת שבת</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="middle keep-as-one">
                    <TitleButton>ארוחת ביניים</TitleButton>
                    <div class='middleText text'>
                        בקריית ההדרכה ניתן להזמין ולמשוך
                        ארוחות ביניים מעמדת הפריסה
                        שהוגדרה במטבח.
                        <p> איך מזמינים ארוחת ביניים?
                            פנו לתכנון הצבאי של הבה״ד שלכם -
                            דרישה למפקדת הסעדה - הזנה
                            במערכת ניהול העיר - ובאמצעות
                            מספר המפגש שלכם תוכלו למשוך
                            את הפריסה.</p>
                    </div>
                </div>
                <div class="keep-as-one">
                    <TitleButton>כשרות</TitleButton>
                    <div class='kosherText text'>
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
                <div class="special keep-as-one">
                    <TitleButton>מענה לאוכלוסיות מיוחדות</TitleButton>
                    <div class='kosherText text'>
                        בקריית ההדרכה קיים מענה ייעודי לאוכלוסיות הצליאק והאלרגיים.
                        המענה מתבסס על המענה הקיים בצה"ל, בתוספת פריטים יחודיים כגון קורנפלקס ללא גלוטן, קינוחים ועוד.
                        בשונה מיתר צה"ל המענה בקרה"ד זמין עד לטווח ה-50 ק"מ וחייל צליאיקי או אלרגני יכול לקבל מנה חמה גם
                        בפעילות בשטח וגם בסיורים
                        קיים מענה גם מגוון לאוכלוסיית הצליאקים והאלרגניים הטבעונים
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TitleButton from './TitleButton.vue';

export default {
    name: "FoodCourt",
    data() {
        return {};
    },
    components: { TitleButton }
}
</script>

<style scoped>
.icon {
    height: 4vh;
    width: 9vw;
}

.openingHours {
    column-span: all;
    margin-bottom: 2vh;
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

.text {
    min-width: 20ch;
    margin-right: 5vw;
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
}

.openText {
    margin-right: 5vw;
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
}

.textContainerFood {
    columns: 2;
    direction: rtl;
    position: relative;
    bottom: 14vh;
    margin-right: 5vw;
    max-width: 90vw;

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

.keep-as-one {
    break-inside: avoid;
}

table {
    width: 85vw;
    table-layout: fixed;
}

.cell {
    /* white-space: nowrap; */
    direction: rtl;
    border: 1px solid black;
}

th.cell {
    font-weight: bold;
}

.time {
    width: 11.5vw;
}

.special {
    padding-top: 2vh;
}
</style>