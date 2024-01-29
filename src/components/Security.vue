<template>
            <div class='securityContainer' >
            <div class='titleContainer'>
                <img src="@/assets/securityIcon.svg" alt="security" class='securityIcon' />
                <div class='titleNamesecurity'>בטיחות בדרכים</div>
            </div>
            <img src="@/assets/backArrow.png" alt="back" class='backArrow' @click="$emit('goBack')" />
            <div class='securityTextContainer'>
                <div class='securityCenter'>
                    <img src="@/assets/emptyButton.svg" alt="center" class='titleName' />
                    <div class='centerText'>
                        <p>כאן ייכנס טקסט</p>
                    </div>
                </div>
            </div>
            <!-- {/* <img src={BaseMap} alt="base" class='baseLastPic' /> */} -->
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

<style>
.securityContainer {
    margin-top: 2vh;
    margin-bottom: 5vh;
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

.dentistText, .medicText, .centerText {
    font-size: 1.7vh;
    font-weight: 600;
    direction: rtl;
    margin-right: 5vw;
    width: 60vw;
}

.securityTextContainer {
    margin-right: 8vw;
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

.baseLastPic {
    height: 55vh;
    width: 130vw;
    position: relative;
    left: 25vw;
    bottom: 10vh;
}

</style>