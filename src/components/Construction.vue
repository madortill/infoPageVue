<template>
  <div class="construction">
    <div class="titleContainer">
      <img src="@/assets/tools.svg" alt="health" class="healthIcon" />
      <div class="titleNameHealth">בינוי</div>
    </div>
    <img
      src="@/assets/backArrow.png"
      alt="back"
      class="backArrow"
      @click="$emit('goBack')"
    />
    <div class="healthTextContainer">
      <div class="healthCenter">
        <TitleButton>בינוי</TitleButton>
        <div class="centerText">
          בקריית ההדרכה כל מענה הבינוי והתשתיות ניתן ע"י הזכיין, בבקרה של יחידת
          הפיקוח הצבאי. בכל תקלה יש לפתוח קריאה במוקד 2000.
          <br />
          שימו לב,
          <br />
          <ol type="1">
            <li>
              כל תקלה שמפריעה לפרט יש לפתוח תקלה במיידי ולעדכן את רס"ר היחידה.
            </li>
            <li>
              תקלות מפריעות במגורים:
              <ol>
                <li>מים חמים/זרם מים ב-8 מקלחות לפחות במבנה
                </li>
                <li> תאורה מרכזית בחדר לא עובדת/מרצדת</li>
                <li>חשמל לא עובד בחדר, או מזגן לא תקין בחדר
                </li>
                <li>אסלות או מקלחות לא תקינות</li>
              </ol>
            </li>
            <li> תקלות מפריעות מטופלות ע"י הזכיין עד 8 שעות מרגע פתיחת התקלה ולכן חשוב לדווח בהקדם למוקד.
            </li>
          </ol>
          חשוב לזכור! כל תקלה שלא טופלה תוך 3 ימים או לשביעות רצונך, יש לדווח לרסר הבהד או למפקד על מנת שיועבר לגורמי הפיקוח הצבאי.
        </div>
      </div>
    </div>
    <img src="@/assets/baseMap.svg" alt="base" class="baseLastPic" />
  </div>
</template>

<script>
import TitleButton from "./TitleButton.vue";

export default {
  name: "construction",
  data() {
    return {};
  },
  components: { TitleButton },
};
</script>

<style>
.construction {
  margin-top: 2vh;
  position: relative;
  overflow: hidden;
}

.healthIcon {
  height: 4vh;
  width: 10vw;
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
