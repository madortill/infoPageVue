<template>
    <div class='healthContainer'>
        <div class='titleContainer'>
            <img src="@/assets/healthIcon.svg" alt="health" class='healthIcon' />
            <div class='titleNameHealth'>רפואה</div>
        </div>
        <img src="@/assets/backArrow.png" alt="back" class='backArrow' @click="$emit('goBack')" />
        <div class='healthTextContainer'>
            <div class='healthCenter'>
                <img src="@/assets/healthCenter.svg" alt="center" class='titleName' />
                <div class='centerText'>
                    המרכז הרפואי נותן שירותי רפואה ראשונית לכלל משרתי
                    החובה בקריית ההדרכה.
                    מחוץ למחנה נמצא המרפ"א שמכיל בתוכו רפואת
                    מומחים, מרפאת אנשי קבע, בית מרקחת ושירותי
                    פיזיותרפיה. <br>
                    מרפאת ערב למקרים דחופים לאחר התייעצות עם אחות
                    <span class="nobreak">18:00-22:00</span>.
                    משעה 22:00 עד פתיחת המרפאה ב08:00 בבוקר.
                    שעות פעילות מרפאות הבה״דים: <br>
                    יום א׳ - 13:00-22:00 <br>
                    ימים ב׳-ד׳ - 08:00-22:00 <br>
                    יום ה׳ - 08:00 - שאטל הבה״ד <br>
                    לקביעת מפגש חובש ראשוני יש לפנות למרפאת הבה"ד.
                </div>
            </div>

            <div class='medicineContainer'>
                <img src="@/assets/medicineRoom.svg" alt="medicine" class='titleName' />
                <div class='medicText'>
                    שעות פעילות: 08:00-17:30, הפסקה 12:00-13:00 <br>
                    במקרה רפואי דחוף - יש להתקשר לטלפון חירום
                    <a href="tel: +073-3772819">073-3772819</a>

                </div>
            </div>
            <div class='teethContainer'>
                <img src="@/assets/dentist.svg" alt="teeth" class='titleName' />
                <div class='dentistText'>
                    מיקום- המרכז הרפואי, קומה .2
                    מספר טלפון- <a href="tel: +073-377-2874">073-3772874</a>. <br>
                    ניתן לפנות גם בוואטסאפ - <a href="https://api.whatsapp.com/send?phone=052-9257270">052-925-7270</a><br>
                    מקרים דחופים ייכנסו ללא קביעת תור מראש. <br>
                    לאחר השעה 17:00 יש לפנות לחדר הטיפולים במרכז הרפואי / בטלפון חירום - <a
                        href="tel: +073-3772819">073-3772819</a><br>
                    שעות פעילות-
                    08:00-17:00
                </div>
            </div>
            <div class='teethContainer'>
                <TitleButton>בריאות הנפש</TitleButton>
                <div class='dentistText'>
                    מדור ברהן מדור בריאות הנפש נמצא בקומה השנייה במרפאה המרכזית. כאשר יש במדור פסיכיאטר וקבן מוסמך וקבן מפקדה .
                    לקבלת טיפול מקב"ן היחידה ניתן לפנות למפקדים או בפנייה עצמאית למשרד הקבן.
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
    height: 135vh;
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
    /* columns: 2; */
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
    bottom: 10vh;
    top: -4%;
}

.nobreak {
    break-inside: avoid;
    white-space: nowrap;
}
</style>