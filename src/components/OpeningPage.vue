<template>
    <div className='openContainer'>
        <div className="topContainer">
            <img :src="titleOption[`title${currentBackgroundIndex}`]" alt="title" className='title' />
            <img src="@/assets/logo.png" alt="logo" className='logo' />
            <img src="@/assets/slogan.png" alt="slogan" className='slogan' />
            <!-- <iframe class="youtube" width="560" height="315" src="https://www.youtube.com/embed/uJEyMlyIWlY?si=14wo5WJtUXc9XzUG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> -->
            <iframe class="youtube" width="560" height="315" src="https://www.youtube.com/embed/_-NvtI9wK3k?si=AmP7KcqLb-a9P4BT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
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
</style>