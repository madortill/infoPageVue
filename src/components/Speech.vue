<template>
    <div class='bodySpeech'>
        <img src="@/assets/introSpeech.svg" alt="speech" class='speech' />
        <!-- <div className='mailbox'>
                <h1 className='reach-out'>תיבת פניות למפקד</h1>
                <p>יש לזכור שמפקדיכם האישיים מהווים מענה ראשוני לכל עניין ובעיה</p>
                <p><span>מייל:</span> <a href="mailto:"></a></p>
            </div> -->
        <img src="@/assets/building.svg" alt="building" class='building' />
    </div>
</template>

<script>
    export default {
        name: 'Speech'
    }
</script>

<style>
body,
html {
    margin: 0;
    height: 100vh;
}

.bodySpeech {
    height: 100%;
    margin-top: 3vh;
}

.building {
    margin-right: -20%;
    height: 28vh;
    width: 95vw;
}

.reach-out {}

.mailbox {
    background-image: url("./assets/envelope.svg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 90vw;
    aspect-ratio: 1/1;
}
</style>