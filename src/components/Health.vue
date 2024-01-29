<template>
    <div class='healthContainer' >
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
                    החובה בקריית ההדרכה
                    <p>
                        מחוץ למחנה נמצא המרפ"א שמכיל בתוכו רפואת
                        מומחים, מרפאת אנשי קבע, בית מרקחת ושירותי
                        פיזיותרפיה.
                    </p>
                    <p>
                        מרפאת ערב למקרים דחופים לאחר התייעצות עם אחות
                        18:00-22:00.
                    </p>
                    <div>
                        משעה 22:00 עד פתיחת המרפאה ב08:00 בבוקר.
                    </div>
                    <div>
                        שעות פעילות מרפאות הבה״דים -
                        <p>
                            יום א׳ - 13:00-22:00
                        </p>
                        <p>
                            ימים ב׳-ד׳ - 08:00-22:00
                        </p>
                        <p>
                            יום ה׳ - 08 - שאטל הבה״ד
                        </p>
                        <p>
                            לקביעת מפגש חובש ראשוני יש לפנות למרפאת הבה"ד
                        </p>
                    </div>
                </div>
            </div>
            <div class='medicineContainer'>
                <img src="@/assets/medicineRoom.svg" alt="medicine" class='titleName' />
                <div class='medicText'>
                    שעות פעילות ,08:00-17:30 הפסקה 12:00-13:00
                    מקרה רפואי דחוף -יש להתקשר לטלפון חירום-
                    <p>
                        <a href="tel: +073-3772819">073-3772819</a>
                    </p>
                </div>
            </div>
            <div class='teethContainer'>
                <img src="@/assets/dentist.svg" alt="teeth" class='titleName' />
                <div class='dentistText'>
                    מיקום- המרכז הרפואי, קומה .2
                    <p>
                        מספר טלפון- <a href="tel: +073-377-2874">073-3772874</a>
                    </p>
                    <p>
                        ניתן לפנות גם בוואטסאפ - 052-925-7270
                    </p>
                    <p>
                        מקרים דחופים ייכנסו ללא קביעת תור מראש,
                        לאחר השעה 17:00 יש לפנות לחדר הטיפולים במרכז
                    </p>
                    <p>
                        הרפואי /בטלפון חירום- <a href="tel: +073-3772819">073-3772819</a>
                    </p>
                    <p>
                        שעות פעילות-
                    </p>
                    <p>
                        08:00-17:00
                    </p>
                </div>
            </div>
        </div>
        <img src="@/assets/baseMap.svg" alt="base" class='baseLastPic' />
    </div>
</template>

<script>
export default {
    name: "Health",
    data() {
        return {

        }
    }
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

.dentistText, .medicText, .centerText {
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
    margin-right: 5vw;
    width: 60vw;
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
    bottom: 10vh;
}

</style>