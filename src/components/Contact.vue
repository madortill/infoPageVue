<template>
    <div id="contact">
        <div class='contactTitleContainer'>
            <!-- <img src="@/assets/heartIcon.svg" alt="Heart" class='heartIcon' /> -->
            <div class='titleCenter'>תיבת פניות למפקד</div>
        </div>
        <div class="father">
            <img class='mailbox' src="@/assets/envelope.svg">
            <div class="mail-text">
                <h2 class='reach-out'>תיבת פניות למפקד</h2>
                <div>
                    יש לזכור שמפקדיכם האישיים מהווים מענה ראשוני לכל עניין ובעיה.
                    <span>מייל: </span><a href="mailto:Mefaked747@gmail.com">Mefaked747@gmail.com</a>
                </div>
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
    /* font-size: 1.7vh; */
}

.reach-out {
    margin-top: 1em;
    margin-bottom: 0.2em; 
}

.contactTitleContainer {
    margin-bottom: 4vh;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
}
</style>