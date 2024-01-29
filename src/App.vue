<template>
  <div :style="{ backgroundImage: 'url(' + bgOption[currentBackground] + ')' }" class="body">
    <OpeningPage :currentBackground="currentBackground" @clickedArrow="clickedArrow" />
    <Speech ref="speech" />
    <TableOfContent ref="table" @clickedSubject="clickedSubject" />
    <!-- <Transit ref="buses" />
    <FoodCourt ref="lunch" @goBack="goback" />
    <Service ref="service" @goBack="goback" /> -->
    <Rabanut ref="rabanut" @goBack="goback" />
    <Center ref="center" @goBack="goback"></Center>
    <Fittness ref="fitness" @goBack="goback" />
    <!-- <Equipment ref="equip" @goBack="goback" />
    <Health ref="health" @goBack="goback" />
    <Security ref="security" @goBack="goback" /> -->
    <!-- <Contact ref="contact"></Contact> -->
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
import Center from './components/Center.vue';
import Fittness from './components/Fitness.vue';
import Equipment from './components/Equipment.vue';
import Health from './components/Health.vue';
import Security from './components/Security.vue';

import Background1 from './assets/background1.jpeg';
import Background2 from './assets/background2.jpeg';
import Background3 from './assets/background3.jpeg';
import Background4 from './assets/background4.jpeg';
import Contact from './components/Contact.vue';

export default {
  components: {
    OpeningPage,
    Speech,
    TableOfContent,
    Transit,
    FoodCourt,
    Service,
    Rabanut,
    Center,
    Fittness,
    Equipment,
    Health,
    Security,
    Contact
},
  data() {
    return {
      currentBackground: `bg${Math.floor(Math.random() * (4 - 1) + 1)}`,
      bgOption: {
        bg1: Background1,
        bg2: Background2,
        bg3: Background3,
        bg4: Background4,
      },
    };
  },
  computed: {

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
</script>

<style>
body, html {
  height: 100%;
  margin: 0;
  overflow-x: hidden;
  font-family: "assistant";
  direction: rtl;
}

@font-face {
  font-family: "assistant";
  src: url("/fonts/Assistant/Assistant-VariableFont_wght.ttf");
}

.body {
  width: 100vw;
  background-size: cover;
}
</style>