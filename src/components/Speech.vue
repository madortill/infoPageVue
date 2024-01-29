<template>
    <div class='bodySpeech'>
        <img src="@/assets/introSpeech.svg" alt="speech" class='speech' />
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


</style>