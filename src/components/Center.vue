<template>
    <div class='center'>
        <div class='titleContainer'>
            <img src="@/assets/moneyIcon.svg" alt="money" class='moneyIcon' />
            <div class='titleCenter'>מרכז מסחרי</div>
        </div>
        <img src="@/assets/backArrow.png" alt="back" class='backArrow' @click="$emit('goBack')" />
        <div class='cenTextContainer'>
            <div class='bistopContainer'>
                <img src="@/assets/bistopButton.png" alt="bistop" class='titleName' />
                <div class='bisText'>
                    מאפייה - כשר חלבי מהדרין
                    <p>
                        שעות פתיחה-
                    </p>
                    <p>
                        א-ד- 07:00-22:00
                    </p>
                    <p>
                        ה- 07:00-20:30
                    </p>
                    <p>
                        ו- 07:00-13:00
                    </p>
                </div>
            </div>
            <div class='shnitzelContainer'>
                <img src="@/assets/shnitzel.svg" alt="Shnitzel" class='titleName' />
                <div class='shnizText'>
                    כשרות-רבנות מהדרין
                    טלפון*-9131
                    <p>
                        שעות פתיחה-
                    </p>
                    <p>
                        א-ה- 11:30-21:00
                    </p>
                </div>
            </div>
            <div class='burgerContainer'>
                <img src="@/assets/burgerButton.png" alt="Burger" class='titleName' />
                <div class='burgerText'>
                    כשר -בשרי למהדרין
                    שעות פתיחה-
                    <p>
                        א-ה- 11:30-21:00
                    </p>
                </div>
            </div>
            <div class='coffeeContainer'>
                <img src="@/assets/coffeeTime.svg" alt="coffee" class='titleName' />
                <div class='coffeeText'>
                    כשר -חלבי למהדרין
                    שעות פתיחה-
                    <p>
                        א-ה- 06:30-21:00
                    </p>
                </div>
            </div>
            <div class='gidronContainer'>
                <img src="@/assets/gidron.svg" alt="Gidron" class='titleName' />
                <div class='gidronText'>
                    כשר -חלבי למהדרין
                    שעות פתיחה-
                    <p>
                        א-ד 06:30-19:30
                    </p>
                    <p>
                        ה- 08:30-14:00
                    </p>
                    <p>
                        ו- 06:30-14:00
                    </p>
                </div>
            </div>
            <div class='shiftzurimContainer'>
                <img src="@/assets/shiftzurim.svg" alt="shifzturim" class='titleName' />
                <div class='shifturText'>
                    שעות פתיחה-
                    <p>
                        א-ד 09:30-20:00
                    </p>
                    <p>
                        ה- 08:30-14:00
                    </p>
                </div>
            </div>
            <div class='freshContainer'>
                <img src="@/assets/freshop.svg" alt="freshop" class='titleName' />
                <div class='freshText'>
                    כשר -חלבי למהדרין
                    <p>
                        טלפון- <a href="tel: + 052-5991194"> 052-5991194</a>
                    </p>
                    שעות פתיחה-
                    <p>
                        א-ד- 07:00-22:00
                    </p>
                    <p>
                        ה- משתנה.
                    </p>
                </div>
            </div>
            <div class='DVContainer'>
                <img src="@/assets/DVcom.svg" alt="dvCom" class='titleName' />
                <div class='DVText'>
                    טלפון- <a href="tel: + 055-9989777"> 055-9989777</a>
                    <p>
                        שעות פתיחה -
                    </p>
                    <p>
                        א-ד- 09:30-20:0
                    </p>
                    <p>
                        ה- 09:30-14:00
                    </p>
                </div>
            </div>
            <img src="@/assets/center.png" class='centerPic' />
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.backArrow {
    width: 8vw;
    position: absolute;
    left: 2vw;
    top: 2vh;
    transform: rotate(90deg);
}

.bisText,
.shnizText,
.burgerText,
.coffeeText,
.gidronText,
.shifturText,
.bankText,
.DVText,
.freshText {
    width: 25vw;
}

.bistopContainer,
.shnitzelContainer,
.burgerContainer,
.coffeeContainer,
.gidronContainer,
.shiftzurimContainer,
.freshContainer,
.DVContainer,
.bankContainer {
    margin-right: 2vw;
}

.centerPic {
    height: 50vh;
    position: relative;
    left: 40vw;
}</style>