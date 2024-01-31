<template>
    <div id="contact">
        <div class='contactTitleContainer'>
            <!-- <img src="@/assets/heartIcon.svg" alt="Heart" class='heartIcon' /> -->
            <div class='titleCenter'>תיבת פניות למפקד</div>
        </div>
        <div class="father">
            <img class='mailbox' src="@/assets/envelope.svg">
            <div class="mail-text">
                    יש לזכור שמפקדיכם האישיים מהווים מענה ראשוני לכל עניין ובעיה.
                    <span>מייל: </span><a href="mailto:Mefaked747@gmail.com">Mefaked747@gmail.com</a>
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
</style>