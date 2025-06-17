<template>
    <div class='tableContainer' >
        <div class='titleTable'>תוכן עניינים</div>
        <div class='buttonContainer'>
            <img src="@/assets/busesButton.svg" alt="buses" class='buttons' @click="(e) => $emit('clickedSubject', e.currentTarget.alt)" />
            <img src="@/assets/lunchButton.svg" alt="lunch" class='buttons' @click="(e) => $emit('clickedSubject', e.currentTarget.alt)" />
            <img src="@/assets/serviceButton.svg" alt="service" class='buttons' @click="(e) => $emit('clickedSubject', e.currentTarget.alt)" />
            <img src="@/assets/centerButton.svg" alt="shoppingCenter" class='buttons' @click="(e) => $emit('clickedSubject', e.currentTarget.alt)" />
            <img src="@/assets/fitnessButton.svg" alt="fitness" class='buttons' @click="(e) => $emit('clickedSubject', e.currentTarget.alt)" />
            <img src="@/assets/equipButton.svg" alt="equip" class='buttons' @click="(e) => $emit('clickedSubject', e.currentTarget.alt)" />
            <img src="@/assets/rabanutButton.svg" alt="rabanut" class='buttons' @click="(e) => $emit('clickedSubject', e.currentTarget.alt)" />
            <img src="@/assets/healthButton.svg" alt="health" class='buttons' @click="(e) => $emit('clickedSubject', e.currentTarget.alt)" />
            <img src="@/assets/securityButton.svg" alt="security" class='buttons' @click="(e) => $emit('clickedSubject', e.currentTarget.alt)" />
            <img src="@/assets/constructionButton.svg" alt="construction" class='buttons' @click="(e) => $emit('clickedSubject', e.currentTarget.alt)" />
            <img src="@/assets/mapButton.svg" alt="baseMap" class='buttons' @click="(e) => $emit('clickedSubject', e.currentTarget.alt)" />
            <img src="@/assets/emergencyButton.svg" alt="emergency" class='buttons' @click="(e) => $emit('clickedSubject', e.currentTarget.alt)" />
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

<style>
.tableContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.titleTable {
    font-size: 4vh;
    font-weight: 700;
}

.buttonContainer {
    margin-top: 2vh;
    display: flex;
    flex-direction: row;
    direction: rtl;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
}

.buttons {
    width: 42vw;
    height: 9vh;
}
</style>