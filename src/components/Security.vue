<template>
    <div class='securityContainer'>
        <div class='titleContainer'>
            <img src="@/assets/securityIcon.svg" alt="security" class='securityIcon' />
            <div class='titleNamesecurity'>בטיחות</div>
        </div>
        <img src="@/assets/backArrow.png" alt="back" class='backArrow' @click="$emit('goBack')" />
        <div class='securityTextContainer'>
            <div class='securityCenter'>
                <TitleButton>הוראות הבטיחות למבקרים/אורחים:</TitleButton>
                <div class='securityText'>
                    בטיחות הינה האחריות של כל אחד: <br>
                    נהלי בטיחות קריית ההדרכה, בריאות וסביבה וביטחון למבקרים בקריית ההדרכה. <br>
                    כל משרת ועובד בקריית ההדרכה חייבים למלא אחר הוראות הבטיחות בקריית ההדרכה, לקיים את הוראות החוק ולהפעיל
                    שיקול דעת בביצוע המשימות היומיות שלהם. <br>
                    לנהלי בטיחות קריית ההדרכה כנס <a target="_blank" rel="noopener noreferrer" href="https://mador-till-prod.github.io/safety-cards-mifkada/code/index.html">לכאן</a>.<br>
                    בכל סוגיה ניתן לפנות לקצין הבטיחות שלמה <a href="tel:052-9247181">052-9247181.</a>
                </div>
            </div>
            <div class='securityCenter'>
                <br>
                <b>חניה</b>
                <div class='securityText'>
                    <ul>
                        <li> מבקרים צריכים להחנות במקום מסודר על פי חוקי התנועה (בחנייה החיצונית והפנימית) </li>
                        <li> חל איסור על כניסה וחנייה של רכבים בשטחי המגורים.</li>
                        <li> חל איסור חנייה באדום לבן, אדום-צהוב, רחבת כיבוי אש.</li>
                    </ul>

                    
                </div>
            </div>
            <p class="bigger"> זכור! האחריות לבטיחות היא גם עליך!</p>
        </div>
    </div>
</template>

<script>
import TitleButton from './TitleButton.vue';

export default {
    data() {
        return {

        }
    },
    components: { TitleButton }
}
</script>

<style scoped>
.securityContainer {
    margin-top: 2vh;
    height: fit-content;
    position: relative;
    overflow: hidden;
}

.securityIcon {
    height: 4vh;
    width: 10vw;
    margin-right: 1vw;
}

.titleNamesecurity {
    font-size: 4vh;
    font-weight: 700;
    margin-left: 1vw;
}

.securityText {
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
    /* margin-right: 5vw; */
    max-width: 80vw;
}

.securityTextContainer {
    margin-right: 8vw;
    margin-bottom: 5vh;
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

ul {
    margin: 0;
}

.bigger {
    margin-top: 1vh;
    font-size: 1.2em;
    text-align: center;
    font-weight: bold;
}
</style>