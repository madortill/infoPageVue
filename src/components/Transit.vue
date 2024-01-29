<template>
    <div class='shuttleContainer' >
        <div class='titleContainer'>
            <img src="@/assets/busIcon.svg" alt="bus" class='icon' />
            <div class='titleNameBus'>היסעים</div>
        </div>
        <div class='textContainerShuttle'>
            <div class='shuttle'>
                <img src="@/assets/shuttleButton.svg" alt="shuttle" class='shuttleTitle' />
                <div class='shuttleText'>
                    <p>שאטל הינו שירות היסעים עבור חיילי צה״ל. </p>
                    <p> בקריית ההדרכה קיים מערך היסעים הכולל שירותי היסעים חוץ קרייתים ותוך קרייתיים.</p>
                    <div>בימי חמישי + שישי ישנם שאטלים המסיעים את החיילים מקריית ההדרכה ל-20 מוקדים ברחבי הארץ.</div>
                    <div>בימי ראשון ישנם 32 מוקדי איסוף מכל הארץ המסיעות את החיילים לקריית ההדרכה.</div>
                </div>
            </div>
            <div class='outside'>
                <img src="@/assets/outsideBase.svg" alt="outside" class='outsideTitle' />
                <div class='outsideText'>
                    <p>מטרופולין קו - 170 מגיע לש.ג המרכזי ולמרפ״א דרום.</p>
                    <p>אפליקציית שאטל - קישור להורדה ולהרשמה - <a href="https://onelink.to/jq7h8k">לחץ כאן</a></p>
                </div>
            </div>
            <div class='inside'>
                <img src="@/assets/insideKiryaButton.png" alt="inside" class='insideTitle' />
                <div class='insideText'>
                    קו 747- קו אשר עובר ב-12 תחנות הפזורות ברחבי קריית ההדרכה ומשרת את כלל חיילי הבסיס.
                </div>
            </div>
            <div class='inside'>
                <div class='titleFather insideTitle'>
                    <p class='did-you-know'>ידעת נסעת</p>
                </div>
                <div class='insideText'>
                    ״ידעת נסעת״ כל מה שצריך לדעת בדרך חזרה לבסיס!</div>
                <div class='insideText'>747 השאטל הפנימי של קריית ההדרכה </div>
                <div class='insideText'> 747+ הקו שלוקח אתכם בימי ראשון הכי קרוב למגורים </div>
                <a class='insideText link'
                    href="https://drive.google.com/file/d/1Lq49ytTX-kpftVejXVa2G9eP0kYdf0FK/view?usp=drivesdk">לחץ כאן</a>
            </div>
        </div>
        <img src="@/assets/shuttles.svg" alt="shuttle" class='shuttlePic' />
    </div>
</template>

<script>
export default {
    name: "Transit",
    data() {
        return {

        }
    }
}
</script>

<style>
body,
html {
    height: 100vh;
    margin: 0;
}

.shuttleContainer {
    margin-top: 17vh;
}

.icon {
    height: 4vh;
    width: 9vw;
    margin-right: 1vw;
}

.titleContainer {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
}

.titleNameBus {
    font-size: 4vh;
    font-weight: 700;
}

.textContainerShuttle {
    columns: 2;
    align-content: space-around;
    direction: rtl;
}

.shuttleTitle,
.insideTitle {
    height: 6vh;
    width: 22vw;
    margin-top: 1vh;
}

.outside,
.shuttle,
.inside {
    break-inside: avoid;
}

.outsideTitle {
    height: 7vh;
    width: 25vw;
}

.shuttleText,
.insideText,
.outsideText {
    width: 40vw;
    margin-right: 5vw;
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
}

.shuttlePic {
    position: relative;
    right: 38vw;
    height: 30vh;
}

.titleFather {
    background-image: url("@/assets/emptyButton.svg");
    background-repeat: no-repeat;
    background-size: contain;
    padding-top: 3%;
    padding-bottom: 1%;
    box-sizing: border-box;
}

.did-you-know {
    text-align: center;
    color: white;
    font-size: 0.95em;
}

.link {
    display: inline;
}</style>