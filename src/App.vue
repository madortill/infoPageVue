<template>
  <div class="body" :style="{ backgroundImage: 'url(' + bgOption[currentBackgroundIndex - 1] + ')' }">
    <prompt v-show="isPromptShown" :deffered="deferredPrompt" @disappear="isPromptShown = false; deferredPrompt = null" />
    <img class="baseBgImg" :src="topBg[currentBackgroundIndex - 1]">
    <OpeningPage :currentBackgroundIndex="currentBackgroundIndex" @clickedArrow="clickedArrow" class="overflowx" />
    <Speech ref="speech" class="overflowx" />
    <TableOfContent ref="table" @clickedSubject="clickedSubject" class="overflowx" />
    <Transit ref="buses" class="overflowx" />
    <FoodCourt ref="lunch" @goBack="goback" class="overflowx" />
    <Service ref="service" @goBack="goback" class="overflowx" />
    <Rabanut ref="rabanut" @goBack="goback" class="overflowx" />
    <ShoppingCenter ref="shoppingCenter" @goBack="goback" class="overflowx" />
    <Fittness ref="fitness" @goBack="goback" class="overflowx" />
    <Equipment ref="equip" @goBack="goback" class="overflowx" />
    <Health ref="health" @goBack="goback" class="overflowx" />
    <Security ref="security" @goBack="goback" class="overflowx" />
    <BaseMap ref="baseMap" @goBack="goback" class="overflowx" />
    <Contact ref="contact" class="overflowx" />
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
import Prompt from "./components/InstallationPrompt.vue"

import Background1 from '/bg/background1.svg';
import Background2 from '/bg/background2.svg';
import Background3 from '/bg/background3.svg';
import Background4 from '/bg/background4.svg';

import topBg1 from '/bg/topBg1.svg';
import topBg2 from '/bg/topBg2.svg';
import topBg3 from '/bg/topBg3.svg';
import topBg4 from '/bg/topBg4.svg';

import Contact from './components/Contact.vue';
import BaseMap from './BaseMap.vue';

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
    Prompt
  },
  data() {
    return {
      currentBackgroundIndex: Math.floor(Math.random() * (5 - 1) + 1),
      deferredPrompt: '',
      isPromptShown: false,
      bgOption: [
        Background1,
        Background2,
        Background3,
        Background4,
      ],
      topBg: [
        topBg1,
        topBg2,
        topBg3,
        topBg4
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
  created() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevents the default mini-infobar or install dialog from appearing on mobile
      e.preventDefault();
      // Save the event because you'll need to trigger it later.
      this.deferredPrompt = e;
      this.isPromptShown = true;
    })
  }
}
</script>

<style>
body,
html {
  height: 100vh;
  margin: 0;
  /* overflow-x: hidden; */
  font-family: "assistant", sans-serif;
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
  font-display: swap;
  src: url("/fonts/Assistant/Assistant-VariableFont_wght.ttf");
}

.body {
  height: fit-content;
  width: 100vw;
  position: relative;
  background-repeat: no-repeat round;
  background-position-y: 81vh;
}

.overflowx {
  max-width: 100vw;
  overflow-x: hidden;
}

/* hue-rotate(36deg) saturate(0.5);
hue-rotate(-111.26deg) saturate(1.1)
hue-rotate(-152deg); */
</style>