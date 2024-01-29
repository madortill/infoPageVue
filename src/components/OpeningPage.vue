<template>
    <div className='openContainer'>
        <div className="topContainer">
            <img :src="titleOption[`title${currentBackgroundNum}`]" alt="title" className='title' />
            <img src="@/assets/logo.png" alt="logo" className='logo' />
            <img src="@/assets/slogan.png" alt="slogan" className='slogan' />
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
    props: ["currentBackground"],
    computed:  {
        currentBackgroundNum () { 
            return (this.currentBackground.charAt(this.currentBackground.length - 1));
        }
    }
}
</script>

<style>
.openContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 86vh;
    position: relative;
    justify-content: space-between;
}
.topContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    margin-top: 3vh;
    height: 21vh;
    width: 95vw;
}

.logo {
    margin-top: 2vh;
    height: 19vh;
}

.slogan {
    color: white;
    margin-top: 3vh;
    width: 55vw;
}

.arrow {
    color: white;
    width: 10vw;
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


</style>