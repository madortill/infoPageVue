<template>
    <div id="contact">
        <div class='contactTitleContainer'>
            <!-- <img src="@/assets/heartIcon.svg" alt="Heart" class='heartIcon' /> -->
            <div class='titleCenter'>תיבת פניות למפקד קריית ההדרכה</div>
        </div>
        <div class="father">
            <img class='mailbox' src="@/assets/envelope.svg">
            <div class="mail-text">
                תיבת פניות למפקד קריית ההדרכה בכל בעיה, נושא או תחום. <br>
                <span>מייל: </span><a href="mailto:Mefaked747@gmail.com">Mefaked747@gmail.com</a>
                טלפון אזרחי: <a href="tel:0377333003">073-3773003</a> <br>
                טלפון מטכ"לי: 0747-3003
            </div>
            <div class="madortill">נתקלתם בבעיה? הצעה לשיפור האתר? פנו אלינו: <a href="mailto:mador.till@gmail.com?subject=%D7%A4%D7%A0%D7%99%D7%99%D7%94%20%D7%9E%D7%90%D7%AA%D7%A8%20-%20%D7%A2%D7%9C%D7%95%D7%9F%20%D7%A7%D7%A8%D7%99%D7%99%D7%AA%20%D7%94%D7%94%D7%93%D7%A8%D7%9B%D7%94&body=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%0A%D7%90%D7%A0%D7%99%20%D7%A4%D7%95%D7%A0%D7%94%20%D7%90%D7%9C%D7%99%D7%9B%D7%9D%20%D7%91%D7%A7%D7%A9%D7%A8%20%D7%9C%D7%90%D7%AA%D7%A8%20%D7%A2%D7%9C%D7%95%D7%9F%20%D7%A7%D7%A8%D7%99%D7%99%D7%AA%20%D7%94%D7%94%D7%93%D7%A8%D7%9B%D7%94.">mador.till@gmail.com</a></div>
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

<style scoped>
#contact {
    margin-top: 5vh;
    overflow-y: hidden;
}
.father {
    position: relative;
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
}
.mailbox {
    width: 100vw;
    height: auto;
    margin-bottom: -1vh;

    
}

.mail-text {
    position: absolute;
    max-width: 50%;
    z-index: 1;
    padding-top: 1.6em
    /* font-size: 1.7vh; */
}
.contactTitleContainer {
    margin-bottom: 4vh;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
}

.titleCenter {
    font-size: clamp(3vw, 4vh, 7vw);
}

.madortill {
    position: absolute;
    bottom: 0;
    font-family: "assistantBold";
    white-space: nowrap;
    font-size: clamp(1vw, 1rem, 3.4vw);
}
</style>