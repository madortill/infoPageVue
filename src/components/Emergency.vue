<template>
  <div class="Emergency">
    <div class="titleContainer">
      <img src="@/assets/warning.png" alt="Emergency" class="EmergencyIcon" />
      <div class="titleNameHealth">מצב חירום בקריית ההדרכה</div>
    </div>
    <img
      src="@/assets/backArrow.png"
      alt="back"
      class="backArrow"
      @click="$emit('goBack')"
    />
    <div class="healthTextContainer">
      <div class="healthCenter">
        <TitleButton>מצב חירום</TitleButton>
        
      </div>
    </div>
    <img src="@/assets/baseMap.svg" alt="base" class="baseLastPic" />
  </div>
</template>

<script>
import TitleButton from "./TitleButton.vue";

export default {
  name: "Emergency",
  data() {
    return {};
  },
  components: { TitleButton },
};
</script>

<style>
.Emergency {
  margin-top: 2vh;
  position: relative;
  overflow: hidden;
}

.EmergencyIcon {
  width: 8vw;
  margin-right: 1vw;
}

.titleNameHealth {
  font-size: 4vh;
  font-weight: 700;
  margin-left: 1vw;
}

.dentistText,
.medicText,
.centerText {
  font-size: 1.7vh;
  font-weight: 600;
  direction: rtl;
  margin-right: 5vw;
  max-width: 75vw;
}

.healthTextContainer {
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
  top: -4%;
}

.nobreak {
  break-inside: avoid;
  white-space: nowrap;
}
</style>
