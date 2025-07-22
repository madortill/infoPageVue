<template>
    <div className='openContainer'>
        <div className="topContainer">
            <img :src="titleOption[`title${currentBackgroundIndex}`]" alt="title" className='title' />
            <img src="@/assets/logo.png" alt="logo" className='logo' />
            <!-- <img src="@/assets/slogan.png" alt="slogan" className='slogan' /> -->
            <h1 className='slogan-2'>"בונים ערך - מובילים דרך"</h1>
            <!-- <iframe class="youtube" width="560" height="315" src="https://www.youtube.com/embed/uJEyMlyIWlY?si=14wo5WJtUXc9XzUG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> -->
                <iframe class="youtube" width="560" height="315" src="https://www.youtube.com/embed/4510X0GG7Fc?si=M_414tkM_VlmFDks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <img src="@/assets/downArrowWhite.png" alt="arrow" className='arrow arrowAni' @click="$emit('clickedArrow')" />
    </div>
</template>

<script>
import Title1 from '@/assets/title1.svg'
import Title2 from '@/assets/title2.svg'
import Title3 from '@/assets/title3.svg'
import Title4 from '@/assets/title4.svg'

export default {
    data() {
        return {
            titleOption: {
                "title1": Title1,
                "title2": Title2,
                "title3": Title3,
                "title4": Title4
            }
        }
    },
    props: ["currentBackgroundIndex"],
    computed:  {
    }
}
</script>

<style scoped>
.topContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 4;
    position: relative;
}

.title {
    margin-top: 3vh;
    height: 21vh;
    width: 95vw;
}

.logo {
    /* margin-top: 2vh; */
    height: 19vh;
}

.slogan {
    color: white;
    /* margin-top: 3vh; */
    width: 55vw;
}

.arrow {
    color: white;
    width: 10vw;
    margin: auto;
    display: block;
}

.arrowAni {
    animation: down 1.25s infinite;
}

@keyframes down {
    0% {
        transform: translate(0, 1vh);
    }
    50% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(0, 1vh);
    }
} 

.youtube {
    max-width: 90vw;
    max-height: 30vh;
    margin-top: 2vh;
    margin-bottom: 2vh;
}

.slogan-2 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #2f486b, #00a3e6); /* רקע מדורג */
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* צל של הקופסה */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6); /* צל של הטקסט */
  direction: rtl;
  max-width: fit-content;
  margin: 2rem auto;
  transition: transform 0.3s ease;
}

.slogan-2:hover {
  transform: scale(1.05);
}

</style>
