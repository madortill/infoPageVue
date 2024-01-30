<template>
  <div class="body" :style="{ backgroundImage: 'url(' + bgOption[currentBackgroundIndex - 1] + ')' }">
    <img class="baseBgImg" :src="`src/assets/bg/topBg${currentBackgroundIndex}.svg`">
    <!-- <TopBg class="baseBgImg" :colors="bgColors[currentBackgroundIndex]"></TopBg> -->
    <OpeningPage :currentBackgroundIndex="currentBackgroundIndex" @clickedArrow="clickedArrow" />
    <Speech ref="speech" />
    <TableOfContent ref="table" @clickedSubject="clickedSubject" />
    <Transit ref="buses" />
    <FoodCourt ref="lunch" @goBack="goback" />
    <Service ref="service" @goBack="goback" />
    <Rabanut ref="rabanut" @goBack="goback" />
    <ShoppingCenter ref="shoppingCenter" @goBack="goback"></ShoppingCenter>
    <Fittness ref="fitness" @goBack="goback" />
    <Equipment ref="equip" @goBack="goback" />
    <Health ref="health" @goBack="goback" />
    <Security ref="security" @goBack="goback" />
    <BaseMap ref="baseMap" @goBack="goback"></BaseMap>
    <Contact ref="contact"></Contact>
  </div>
</template>

<script>
import OpeningPage from './components/OpeningPage.vue';
import Speech from './components/Speech.vue';
import TableOfContent from './components/TableOfContent.vue';
import Transit from './components/Transit.vue';
import FoodCourt from './components/FoodCourt.vue';
import Service from './components/Service.vue';
import Rabanut from './components/Rabanut.vue';
import ShoppingCenter from './components/ShoppingCenter.vue';
import Fittness from './components/Fitness.vue';
import Equipment from './components/Equipment.vue';
import Health from './components/Health.vue';
import Security from './components/Security.vue';

import Background1 from './assets/bg/background1.svg';
import Background2 from './assets/bg/background2.svg';
import Background3 from './assets/bg/background3.svg';
import Background4 from './assets/bg/background4.svg';
import Contact from './components/Contact.vue';
import BaseMap from './BaseMap.vue';
import TopBg from './components/topBg.vue';

export default {
  components: {
    OpeningPage,
    Speech,
    TableOfContent,
    Transit,
    FoodCourt,
    Service,
    Rabanut,
    ShoppingCenter,
    Fittness,
    Equipment,
    Health,
    Security,
    Contact,
    BaseMap,
    TopBg
},
  data() {
    return {
      currentBackgroundIndex: Math.floor(Math.random() * (5 - 1) + 1),
      bgOption: [
        Background1,
        Background2,
        Background3,
        Background4,
      ]
    };
  },
  computed: {
    currentBackground() {
      return
    }
  },
  methods: {
    clickedSubject(refName) {
      // const sections = { buses: this.$refs.buses, lunch: this.$refs.lunch, service: this.$refs.service, center: this.$refs.center, fitness: this.$refs.fitness, equip: this.$refs.equip, rabanut: this.$refs.rabanut, health: this.$refs.health, security: this.$refs.security };
      this.$refs[refName].$el.scrollIntoView({ behavior: 'smooth' });
    },
    clickedArrow() {
      console.log(this.$refs.speech);
      this.$refs.speech.$el.scrollIntoView({ behavior: 'smooth' });
    },
    goback() {
      this.$refs.table.$el.scrollIntoView({ behavior: 'smooth' });
    },
  },
};

console.log('put filter on background!!!!!!!')
</script>

<style>
body,
html {
  height: 100vh;
  margin: 0;
  overflow-x: hidden;
  font-family: "assistant";
  direction: rtl;
}

.baseBgImg {
  height: 97vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
}

@font-face {
  font-family: "assistant";
  src: url("/fonts/Assistant/Assistant-VariableFont_wght.ttf");
}

.body {
  height: fit-content;
  margin-top: 3vh;
  width: 100vw;
  /* background-image: url("@/assets/baseBgImage.png"), url("@/assets/background.svg");
  background-size: 100vh 100vw;
  background-repeat: no-repeat, repeat; */
  /* position: relative;
  z-index: 1; */
  position: relative;
  background-repeat: no-repeat round;
  background-position-y: 81vh;
  /* background-size: 100vw auto; */
}

/* hue-rotate(36deg) saturate(0.5);
hue-rotate(-111.26deg) saturate(1.1)
hue-rotate(-152deg); */
</style>