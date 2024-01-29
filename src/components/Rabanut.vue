<template>
            <div class='rabanut' >
            <div class='containerrrrrr'>
                <div class='rabTitleContainer'>
                    <img src="@/assets/bookIcon.svg" alt="bus" class='bookIcon' />
                    <div class='rabTitleName'>רבנות</div>
                </div>
                <img src="@/assets/backArrow.png" alt="back" class='backArrow' @click="$emit('goBack')" />
                <div class='rabText'>
                    <h6>שירותי הדת בקריית ההדרכה</h6>
                    <p>
                        בקריית ההדרכה ישנם שלושה בתי כנסת ותפילות במניין בשעות שונות
                        פיקוח כשרות בחדרי האוכל, במתחמי האוכל ובאירועים
                        זמנים מגדריים לאימונים במתחם הספורט
                        ליווי חיילים וחיילות בתהליך גיור
                        שיעורים, חברותות, מרצים שונים ורב אורח בשבת
                        שיחות אישיות לכל המעוניין/ת
                        ציוד דת
                    </p>
                    <div>
                        לפרטים, יש ליצור קשר עם אחראי כשרות ודת: 
                        <p>נאור בוכובזה: <a href="tel: + 052-6374225">052-6374225</a></p>
                    </div>
                    <div>
                        רב קריית ההדרכה, הרב ליאור בנימין: 
                        <p><a href="tel: +054-695-6624" >054-6956624</a></p>
                    </div>
                </div>
            </div>
            <img src="@/assets/kneset.svg" alt="kneset" class='RabanutPic' />
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
.bookIcon {
    height: 5vh;
    width: 8vw;
}

.rabanut {
    margin-top: 4vh;
    height: 50vh;
    position: relative;
}

.rabTitleContainer {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
}

.containerrrrrr {
    display: flex;
    flex-direction: column;
    margin-right: 5vw;
    font-size: 1.7vh;
    font-weight: 600;
    width: 55vw;
    margin-right: 30vw;
    direction: rtl;
    align-items: center;
}

.rabTitleName {
    font-size: 4vh;
    font-weight: 700;
    margin-right: 1vw;
    width: 20vw;
    height: 6vh;
}

.RabanutPic {
    position: relative;
    left: 55vw;
    bottom: 35vh;
    height: 50vh;
}

.rabText {
    margin-top: 2vh;
    margin-right: 3vw;
}

.kosher {
    height: 5vh;
    width: 8vw;
}

.backArrow {
    width: 8vw;
    position: absolute;
    left: 2vw;
    top: 2vh;
    transform: rotate(90deg);
}

</style>