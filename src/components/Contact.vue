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
</style>