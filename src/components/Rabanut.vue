<template>
    <div class='rabanut'>
        <div class='rabTitleContainer'>
            <img src="@/assets/bookIcon.svg" alt="bus" class='bookIcon' />
            <div class='rabTitleName'>רבנות</div>
        </div>
        <div class='containerrrrrr'>
            <img src="@/assets/backArrow.png" alt="back" class='backArrow' @click="$emit('goBack')" />
            <div class='rabText'>
                    שירותי הרבנות בקריית ההדרכה כוללים:
                    <ul>
                        <li>תפילות כסדרן בשלושה בתי כנסת</li>
                        <li>ליווי גיור, ייעוץ אישי ומשפחתי, שיחות ושיעורים</li>
                        <li>זמנים מגדריים במתקני הספורט</li>
                        <li>כשרות בחדרי האוכל ובמתחמי ההסעדה (הכל מהדרין)</li>
                        <li>ציוד דת לכל דורש</li>
                        <li>שבתות וחגים עם רב אורח ופעילויות מיוחדות ברוח היהדות</li>
                    </ul>
                    <div>
                        לפרטים מלאים ולהרחבה, ניתן לפנות לרב קריית ההדרכה , הרב ליאור
                        בטלפון <a href="tel:054-695-6624">054-6956624</a>
                        ובווצאפ <a href="https://wa.me/972546956624">לחץ כאן</a>.
                        <br>
                        בתחומי כשרות וציוד ניתן לפנות לראש תחום דת, נאור
                        בטלפון <a href="tel:052-6374225">052-6374225</a>
                        ובווצאפ <a href="https://wa.me/972526374225" class="nobreak">לחץ כאן</a>
                    </div>
                <img src="@/assets/kneset.svg" alt="kneset" class='RabanutPic' />
            </div>
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
.bookIcon {
    height: 5vh;
    width: 8vw;
}

.rabanut {
    margin-top: 4vh;
    /* height: 50vh; */
    position: relative;
    margin-bottom: 4vh;
}

.rabTitleContainer {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2vw;
}

.containerrrrrr {
    margin-right: 5vw;
    font-size: 1.7vh;
    font-weight: 600;
    width: 63vw;
    margin-right: 30vw;
    direction: rtl;
}

.rabTitleName {
    font-size: 4vh;
    font-weight: 700;
    margin-right: 1vw;
    width: 20vw;
    height: 6vh;
}

.RabanutPic {
    position: absolute;
    left: 71vw;
    top: 5vh;
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

.bigger {
    font-size: 1.1em;
}
</style>