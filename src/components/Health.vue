<template>
    <div class='healthContainer'>
        <div class='titleContainer'>
            <img src="@/assets/healthIcon.svg" alt="health" class='healthIcon' />
            <div class='titleNameHealth'>רפואה</div>
        </div>
        <img src="@/assets/backArrow.png" alt="back" class='backArrow' @click="$emit('goBack')" />
        <div class='healthTextContainer'>
            <div class='healthCenter'>
                <TitleButton>המרכז הרפואי</TitleButton>
                <div class='centerText'>
                    המרכז הרפואי נותן שירותי רפואה ראשונית לכלל משרתי
                    החובה בקריית ההדרכה.<br>
                    מרפ"א דרום שנמצא מחוץ למחנה מכיל בתוכו רפואת
                    מומחים, בית מרקחת, מעבדה, מרפאת אנשי קבע ומכון
                    פיזיותרפיה. <br>
                    במרפאת קריית ההדרכה מתקיימת מרפאת ערב למקרים דחופים לאחר שמתבצע ייעוץ מול אחות,
                    שעות פעילות מרפאת הערב בימים א'-ד' בשעות
                    <span class="nobreak">18:00-22:00</span>.<br>
                    טלפון אזרחי: <a href="tel:0733772888">073-3772888</a> <br>
                    טלפון מטכ”לי: <span class="nobreak">0747-2888</span> <br>

                    <b>שעות פעילות מרפאות הבה״דים: </b><br>
                    יום א׳ - 13:00-22:00 <br>
                    ימים ב׳-ד׳ - 08:00-22:00 <br>
                    יום ה׳ - 08:00 - שאטל הבה״ד <br>
                    לקביעת מפגש חובש ראשוני יש לפנות למרפאת הבה"ד. <br>
                </div>
            </div>

            <div class='medicineContainer'>
                <TitleButton>חדר תרופות</TitleButton>
                <div class='medicText'>
                    <b>שעות פעילות: </b><br>
                    א'- ד' 08:00-17:30 <br>
                    ה' - 08:00-16:00 <br>
                    הפסקת צהריים 12:00-13:00 <br>
                    בכל צורך בתרופות שלא בשעות פעילות חדר התרופות יש לפנות לחדר A13 - חדר הטיפולים לקבלת תרופות.
                    <!-- במקרה רפואי דחוף - יש להתקשר לטלפון חירום
                    <a href="tel:073-3772819">073-3772819</a> -->

                </div>
            </div>
            <div class='teethContainer'>
                <TitleButton>מרפאת שיניים</TitleButton>
                <div class='dentistText'>
                    מרפאת השיניים שייכת למרפ"א דרום. <br>
                    מיקום- המרכז הרפואי, קומה 2. <br>
                    שעות פעילות-
                    <span class="nobreak">08:00-17:00</span> <br>
                    שירותי עזרה ראשונה זמינים 24/7. <br>
                    מספר טלפון אזרחי: <a href="tel:073-377-2855">073-3772855</a>. <br>
                    מספר טלפון מטכ"לי: 0747-2855 <br>
                    ניתן לפנות גם בוואטסאפ - <a href="https://wa.me/972529257270">052-9257270</a><br>
                    מקרים דחופים ייכנסו ללא קביעת תור מראש. <br>
                    לאחר השעה 17:00 יש לפנות לחדר הטיפולים במרכז הרפואי / בטלפון חירום - <a
                        href="tel:073-3772819">073-3772819</a><br>
                </div>
            </div>
            <div class='teethContainer'>
                <TitleButton>בריאות הנפש</TitleButton>
                <div class='dentistText'>
                    מדור בריאות הנפש נמצא בקומה השנייה במרפאה המרכזית. כאשר יש במדור פסיכיאטר וקב"ן מוסמך וקב"ן
                    מפקדה .
                    לקבלת טיפול מקב"ן היחידה ניתן לפנות למפקדים או בפנייה עצמאית למשרד הקב"ן.
                </div>
            </div>
        </div>
        <img src="@/assets/baseMap.svg" alt="base" class='baseLastPic' />
    </div>
</template>

<script>
import TitleButton from './TitleButton.vue';

export default {
    name: "Health",
    data() {
        return {};
    },
    components: { TitleButton }
}
</script>

<style>
.healthContainer {
    margin-top: 2vh;
    position: relative;
    overflow: hidden;
}

.healthIcon {
    height: 4vh;
    width: 10vw;
    margin-right: 1vw;
}

.titleNameHealth {
    font-size: 4vh;
    font-weight: 700;
    margin-left: 1vw;
}

.dentistText,
.medicText,
.centerText {
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
    margin-right: 5vw;
    max-width: 75vw;
}

.healthTextContainer {
    margin-right: 8vw;
}

p {
    margin: 0;
}

.backArrow {
    width: 8vw;
    position: absolute;
    left: 2vw;
    top: 2vh;
    transform: rotate(90deg);
}

.baseLastPic {
    height: 55vh;
    width: 130vw;
    position: relative;
    left: 25vw;
    top: -4%;
}

.nobreak {
    break-inside: avoid;
    white-space: nowrap;
}
</style>