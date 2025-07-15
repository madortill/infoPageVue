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
                    <b class="title">ימים א'-ה' קו 747</b>
                    קו אשר עובר ב-17 תחנות הפזורות ברחבי קריית ההדרכה ומסביב לה ומשרת את כלל חיילי הבסיס.
                    הקו פועל 
                    בין השעות <span class="nobreak">07:00-19:00</span>.
                    ומבצע סבבים כל חצי שעה למעט הפסקת צהריים בשעה 12:00-13:00.
                    ניתן לראות את הקו בלייב באפליקציית שאטל.
                    העיר מרושתת במצלמות 24/7.
                    <br>
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
                        <br>
                        <a target="_blank" rel="noopener noreferrer" href="https://apple.co/3s8BG1A">להורדה לאייפון</a> <br>
                        <a target="_blank" rel="noopener noreferrer" href="https://bit.ly/3scDS8n">להורדה לאנדרואיד</a> <br><br>

                        בימי חמישי + שישי ישנם שאטלים המסיעים את החיילים מקריית ההדרכה ל-26 מוקדים ברחבי הארץ. <br>
                         בימי ראשון ישנם 37 מוקדי איסוף מכל הארץ המסיעים את החיילים לקריית ההדרכה ומבצעים הורדה של חיילים בתחנות בתוך הבסיס:<br>
                         חניון מרפאה <br>
                         חניון בית כנסת מזרחי<br>
                         חניון מגורים 521 <br>
                         חניון מגורים 507 <br>
                         <br>
                        <a class='link' target="_blank" rel="noopener noreferrer"
                            href="https://www.canva.com/design/DAGC15xzHZQ/KU9oVumyVt8n4p7n4PTUBA/view?utm_content=DAGC15xzHZQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcb8f3a0787">הידעת
                            נסעת</a> - כל מה שצריך לדעת בדרך חזרה לבסיס!
                        <br>
                        <br>
                    </div>
                    <div class="public-transport">
                        <b class="title">תחבורה ציבורית</b>
                        מטרופולין קו 170 מגיע לש"ג המרכזי ולמרפ"א דרום מתחנה מרכזית באר שבע ולהפך.
                        תיקוף הנסיעה בתחבורה ציבורית מתבצע ע"י שימוש באפליקציית זוזו. <br>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.canva.com/design/DAFuQ84Oad0/_Cj8i-OvWwcJF1h5-tiTWQ/view?utm_content=DAFuQ84Oad0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h744b6dcff7">הסבר על אפליקצית זוזו</a><br>
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
