<template>
    <div class='equipContainer'>
        <div class='titleContainer'>
            <img src="@/assets/tankIcon.svg" alt="tank" class='equipIcon' />
            <div class='equipTitle'>ציוד צבאי</div>
        </div>
        <img src="@/assets/backArrow.png" alt="back" class='backArrow' @click="$emit('goBack')" />
        <div class='containers'>
            <div class='afsankolContainer'>
                <TitleButton>אפסנכל</TitleButton>
                <div>
                    <div>
                        מחסן ציוד לוגיסטי קדמי אשר נותן מענה
                        בהחלפת ציוד אישי. במקום קיימות לפחות 2
                        עמדות זמינות לקבלת קהל, וישנם שני חדרי
                        מדידה באזור ההמתנה
                        <p>
                            שעות פתיחה-
                        </p>
                        <p>
                            א-ה- 08:30-20:00
                        </p>
                        <p>
                            יום ו’ ובערבי חג - 08:00-12:00
                        </p>
                    </div>
                    <div>
                        באפסנכל ניתן מענה בשירותי כביסה לחיילי
                        קרה”ד.
                        <p>
                            כביסה שתתקבל עד יום שני תוחזר מכובסת
                            ונקייה עד שני בשבוע הבא.
                        </p>
                    </div>
                    <div>
                        מחסן א’ - מענה להחלפת מדי א’ “חדש
                        תמורת חדש” בימים ב’ - ה’ בין השעות
                        10:00-14:00
                    </div>
                </div>
            </div>
            <div class='marlogContainer'>
                <TitleButton>מרלו"ג</TitleButton>
                <div>
                    <div>
                        מרלו”ג קריית ההדרכה ממוקם בין המרת”ק
                        לארמו”ן.
                        <p>
                            שעות פעילות - 
                        </p>
                        <p>
                            א’-ה’- 08:00-17:00
                        </p>
                    </div>
                    המרלוג נותן מענה ושירות בתיאום מראש ע”ב
                    הזנת סרגל או מפגשים, לרבות:
                    <ol>
                        <li>
                            ציוד לוגיסטי להכשרות יונפק בהתאם לכרך
                            ההפעלה (ג’) ע”י הזכיין.
                        </li>
                        <li>
                            ציוד ע”פ קיטים שהוגדרו מראש להכשרות (1-6)
                            יונפקו לפי שיוך הקיט.
                        </li>
                        <li>
                            ציוד לפרט ינופק לחניך בחדר במהלך הקליטה
                            במגורים ובהתאם להנחיות מדור תכנון.
                        </li>
                        <li>
                            ציוד משרדי יונפק בקיטים כשבוע טרם תחילת
                            ההכשרה.
                        </li>
                    </ol>
                </div>
            </div>
            <!-- <div class='windowContainer'>
                <img src="@/assets/tikshuvWindow.svg" alt="Window" class='titleName' />
                <div>
                    <p>
                        - הלבנה
                    </p>
                    <p>
                        - טופס טיולים נכנס יוצא
                    </p>
                    <p>
                        - הרשאות לתיקיות רשת
                    </p>
                    <p>
                        - קידוד חוגרים
                    </p>
                    <p>
                        שעות פעילות:
                    </p>
                    <p>
                        18:00 - 13:00 , 08:00-12:00, 19:00-20:00
                    </p>
                </div>
            </div> -->
            <div class='merkazContainer'>
                <TitleButton><span class="nobreak">מרכז תקשוב (מרת"ק)</span></TitleButton>
                <div>
                    מרת”ק, מספק ציוד תקשובי
                    וכולל מעבדות תקשוב.
                    <p>
                        שעות פתיחה: א-ה' 08:00-20:00</p>
                    <p>
                        תורן זכיין- <a href="tel:052-7032177"> 052-7032177</a>
                    </p>
                    <p>
                        טלפון- <a href="tel:054-8775797">054-8775797</a>
                    </p>
                </div>
            </div>
        </div>
        <div class='gunsCenterContainer'>
            <TitleButton>תחום הארמו"ן (נשקייה)</TitleButton>
            <div class='gunsText'>
                <div>
                    <p>מתן מענה בתחום הנשק והתחמושת. </p>
                    <p>קורסים והכשרות מגיעים בתיאום מראש ע"י המפקדים, בהתאם לשעות הפעילות:</p>
                    <p>יום א': 09:30-11:45, 13:00-16:30.</p>
                    <p>יום ב'- ד': 08:00-11:45, 13:00-16:30.</p>
                    <p>יום ה': 08:00-11:45, 13:00-15:00.</p>
                    <br>
                    <p>אנשי סגל רשאים להגיע עצמאית ללא תיאום מראש בהתאם לשעות הפעילות:</p>
                    <p>יום א': 09:30-11:45, 13:00-17:00.</p>
                    <p>יום ב'- ד': 08:00-13:45, 13:00-17:30.</p>
                    <p>יום ה': 08:00-11:45, 13:00-15:00.</p>
                    <p>עבור כל פתיחה מעבר לשעות הפעילות נדרש לקבל אישור אל"ם.</p>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TitleButton from './TitleButton.vue';

export default {
    name: 'Equipment',
    data() {
        return {};
    },
    components: { TitleButton }
}
</script>

<style scoped>
.equipContainer {
    margin-top: 2vh;
    position: relative;
}


.equipIcon {
    height: 4vh;
    width: 10vw;
    margin-right: 1vw;
}

.equipTitle {
    font-size: 4vh;
    font-weight: 700;
    margin-left: 1vw;
}

.containers {
    margin-right: 7vw;
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
}

.afsankolContainer,
.marlogContainer,
.merkazContainer,
.windowContainer {
    max-width: 85vw;
}


.titleNameGuns {
    font-size: 4vh;
    font-weight: 700;
    margin-right: 1vw;
    width: 40vw;
    height: 7vh;
}

.gunsText {
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
    margin-top: 1vh;
}

.backArrow {
    width: 8vw;
    position: absolute;
    left: 2vw;
    top: 2vh;
    transform: rotate(90deg);

}

.gunsCenterContainer {
    margin-right: 7vw;
    margin-top: 3vh;
}

ol {
    margin-top: 0.5em;
}
</style>