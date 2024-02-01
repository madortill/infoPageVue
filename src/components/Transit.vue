<template>
    <div class='shuttleContainer'>
        <div class='titleContainer'>
            <img src="@/assets/busIcon.svg" alt="bus" class='icon' />
            <div class='titleNameBus'>היסעים</div>
        </div>
        <div class='textContainerShuttle'>
            <div class='inside keep-as-one'>
                <TitleButton>תוך קרייתי</TitleButton>
                <div class='insideText'>
                    <b class="title">יום א' 747+</b>
                    יוצא כל 20 דקות מחניון השאטלים
                    בין השעות <span class="nobreak">08:30-12:00</span>.
                    עוצר בתחנות:
                    מפקדת בה"ד 20, מבנה 534, מבנה 517 ומבנה 503.
                    <br>
                    <br>
                    <b class="title">ימים ב'-ה' קו 747</b>
                    קו אשר עובר ב-13 תחנות הפזורות ברחבי קריית ההדרכה ומשרת את כלל חיילי הבסיס
                </div>
            </div>
            <div class='outside keep-as-one'>
                <TitleButton>חוץ קרייתי</TitleButton>
                <div class='outsideText '>
                    <div class="shuttleApp">
                        <b class="title">שאטל</b>
                        שאטל הינו שירות היסעים עבור חיילי צה"ל.
                        בקריית ההדרכה יש מערך היסעים נרחב המשרת את כלל חיילי הבסיס.
                        בשביל לנסוע בשאטל, יש להוריד את אפליקציית שאטל ולהירשם במהלך השבוע בכדי להבטיח את מקומכם.
                        <a target="_blank" rel="noopener noreferrer" href="https://onelink.to/jq7h8k">להורדה</a> <br><br>
                        בימי חמישי + שישי ישנם שאטלים המסיעים את החיילים מקריית ההדרכה ל-20 מוקדים ברחבי הארץ. <br>
                        בימי ראשון ישנם 32 מוקדי איסוף מכל הארץ המסיעים את החיילים לקריית ההדרכה.<br>
                        <a class='link' target="_blank" rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/1Lq49ytTX-kpftVejXVa2G9eP0kYdf0FK/view?usp=drivesdk">הידעת
                            נסעת</a> - כל מה שצריך לדעת בדרך חזרה לבסיס!
                        <br>
                        <br>
                    </div>
                    <div class="public-transport">
                        <b class="title">תחבורה ציבורית</b>
                        מטרופולין קו 170 מגיע לש"ג המרכזי ולמרפ"א דרום מתחנה מרכזית באר שבע ולהפך.
                        תיקוף הנסיעה בתחבורה ציבורית מתבצע ע"י שימוש באפליקציית זוזו. <br>
                        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1OX1FKziHBlVdEuIlrtNSwqpXNJJQvksd/view?usp=drivesdk">הסבר על אפליקצית זוזו</a><br>
                        שימו לב הקו לא פועל בעת שעות פעילות השאטלים.
                    </div>

                </div>
            </div>
        </div>
        <img src="@/assets/shuttles.svg" alt="shuttle" class='shuttlePic' />
    </div>
</template>

<script>
import TitleButton from './TitleButton.vue';

export default {
    name: "Transit",
    data() {
        return {};
    },
    components: { TitleButton }
}
</script>

<style>
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
    /* columns: 2; */
    align-content: space-around;
    direction: rtl;
    margin-right: 5vw;

}

.shuttleTitle,
.insideTitle {
    height: 6vh;
    width: 22vw;
    margin-top: 1vh;
}

.keep-as-one {
    break-inside: avoid;
}

.outsideTitle {
    height: 7vh;
    width: 25vw;
}

.shuttleText,
.insideText,
.outsideText {
    max-width: 85vw;
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
}

.title {
    display: block;
    /* font-size: 1.1em; */
}
</style>