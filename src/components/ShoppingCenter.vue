<template>
    <div class='center'>
        <div class='titleContainer'>
            <img src="@/assets/moneyIcon.svg" alt="money" class='moneyIcon' />
            <div class='titleCenter'>מרכז מסחרי</div>
        </div>
        <img src="@/assets/backArrow.png" alt="back" class='backArrow' @click="$emit('goBack')" />
        <div class='cenTextContainer'>
            <div class='bistopContainer keep-as-one'>
                <TitleButton>ביסטופ</TitleButton>
                <div class='bisText'>
                    מאפייה - כשר חלבי מהדרין <br>
                    שעות פתיחה- <br>
                    א'-ד': 07:00-22:00 <br>
                    ה': 07:00-20:30 <br>
                    ו': 07:00-13:00
                </div>
            </div>
            <div class='shnitzelContainer keep-as-one'>
                <TitleButton>השניצלייה</TitleButton>
                <div class='shnizText'>
                    כשרות-רבנות מהדרין <br>
                    טלפון - <a href="tel:+8-634-4474">08-6344474</a><br>
                    שעות פתיחה:
                    א'- ה' <span class="nobreak">11:30-21:00</span>
                </div>
            </div>
            <div class='burgerContainer keep-as-one'>
                <TitleButton>בורגר110</TitleButton>
                <div class='burgerText'>
                    כשר -בשרי למהדרין <br>
                    שעות פתיחה:
                    א'-ה' <span class="nobreak">11:30-21:00</span>
                </div>
            </div>
            <div class='coffeeContainer keep-as-one'>
                <TitleButton>coffee time</TitleButton>
                <div class='coffeeText'>
                    כשר -חלבי למהדרין <br>
                    שעות פתיחה:
                    א'- ה'
                    <span class="nobreak">
                        06:30-21:00
                    </span>
                </div>
            </div>
            <div class='gidronContainer keep-as-one'>
                <TitleButton>גידרון</TitleButton>
                <div class='gidronText'>
                    כשר -חלבי למהדרין <br>
                    שעות פתיחה: <br>
                    <span class="nobreak">
                        א'-ד' 06:30-19:30
                    </span>
                    <p>
                        ה'- 08:30-14:00
                    </p>
                    <p>
                        ו'- 06:30-14:00
                    </p>
                </div>
            </div>
            <div class='shiftzurimContainer keep-as-one'>
                <TitleButton>שיפצורים</TitleButton>
                <div class='shifturText'>
                    שעות פתיחה: <br>
                    <span class="nobreak">
                        א'-ד' 09:30-20:00
                    </span>
                    <br>
                    <span class="nobreak">
                        ה'- 08:30-14:00
                    </span>
                </div>
            </div>
            <div class='freshContainer keep-as-one'>
                <TitleButton>freshop</TitleButton>
                <div class='freshText'>
                    כשר -חלבי למהדרין
                    <p>
                        טלפון- <a href="tel: + 052-5991194"> 052-5991194</a>
                    </p>
                    שעות פתיחה: <br>
                    <span class="nobreak">
                        א'-ד' 07:00-22:00
                    </span>
                    <br>
                    <span class="nobreak">
                        ה'- משתנה.
                    </span>
                </div>
            </div>
            <div class='DVContainer keep-as-one'>
                <TitleButton>DVcom</TitleButton>
                <div class='DVText'>
                    טלפון- <a href="tel: + 055-9989777"> 055-9989777</a>
                    <p>
                        שעות פתיחה:
                    </p>
                    <span class="nobreak">
                        א'-ד' 09:30-20:0
                    </span>
                    <br>
                    <span class="nobreak">
                        ה'- 09:30-14:00
                    </span>
                </div>
            </div>
            <img src="@/assets/center.png" class='centerPic' />
        </div>
    </div>
</template>

<script>
import TitleButton from './TitleButton.vue';

export default {
    name: "ShoppingCenter",
    data() {
        return {

        }
    },
    components: { TitleButton }
}
</script>

<style scoped>
.moneyIcon {
    height: 4vh;
    width: 9vw;
    margin-right: 1vw;
}

.center {
    position: relative;
}

.titleCenter {
    font-size: 4vh;
    font-weight: 700;
    margin-left: 1vw;
}

.cenTextContainer {
    margin-right: 5vw;
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
    columns: 2;
}

.backArrow {
    width: 8vw;
    position: absolute;
    left: 2vw;
    top: 2vh;
    transform: rotate(90deg);
}


.keep-as-one {
    margin-right: 2vw;
    break-inside: avoid;
}

.centerPic {
    height: 50vh;
    position: relative;
    left: 10vw;
}
</style>