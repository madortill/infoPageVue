<template>
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
.father {
    position: relative;
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
}
.mailbox {
    width: 90vw;
    height: auto;
    margin-bottom: 3vh;
}

.mail-text {
    position: absolute;
    max-width: 50%;
    z-index: 1;
}

.reach-out {
    margin-top: 1em;
    margin-bottom: 0.2em; 
}
</style>