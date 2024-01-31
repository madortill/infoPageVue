<template>
    <div class='mapContainer'>
        <div>
            <div class='titleNameMap'>מפת הבסיס</div>
            <img src="@/assets/mapIcon.svg" alt="map" class='mapIcon' />
        </div>
        <div class="image-father">
            <img src="/map.png" class="map-pic" @click="toggler = !toggler" alt="מפת הבסיס">
            <div class="overlay" :style="`opacity: ${overlayOpacity}`">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="maximize">
                    <path stroke="#ffffffb9" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="2.5" d="M14 10L20 4" />
                    <path stroke="#ffffffb9" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="2.5" d="M4 20L10 14" />
                    <path stroke="#ffffffb9" stroke-linecap="round" stroke-width="2.5"
                    d="M15 3.5L19 3.5C19.8284 3.5 20.5 4.17158 20.5 5V9.00001" />
                    <path stroke="#ffffffb9" stroke-linecap="round" stroke-width="2.5"
                    d="M8.99999 20.5L5 20.5C4.17157 20.5 3.5 19.8284 3.5 19L3.50001 15" />
                </svg>
                <p>יש ללחוץ להגדלה</p>
            </div>
        </div>
        <img src="@/assets/backArrow.png" alt="back" class='backArrow' @click="$emit('goBack')" />
        <FsLightbox :toggler="toggler" :sources="[mapImage]" type="image" />
    </div>
</template>

<script>
import FsLightbox from "fslightbox-vue/v3";
import mapImage from "/map.png";

let overlayInterval;
export default {
    components: { FsLightbox },
    data() {
        return {
            toggler: false,
            overlayOpacity: 1,
            mapImage,
        }
    },
    methods: {
        addOverlay () {
            this.overlayOpacity = 1;
            setTimeout(() => {
                this.overlayOpacity = 0;
            }, 2500);
            setTimeout(() => {
                this.addOverlay()
            }, 30000)
        }
    },
    mounted() {
        overlayInterval = this.addOverlay()
    },
}
</script>

<style scoped>
.mapContainer {
    position: relative;
    margin-top: 2vh;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 3vh;
}

.mapIcon {
    height: 4vh;
    width: 10vw;
    margin-right: 1vw;
}

.titleNameMap {
    font-size: 4vh;
    font-weight: 700;
    margin-left: 1vw;
    margin-right: 2vw;
    margin-bottom: 1vh;
    display: inline-block;
}


.backArrow {
    width: 8vw;
    position: absolute;
    left: 2vw;
    top: 2vh;
    transform: rotate(90deg);
}

.image-father {
    width: fit-content;
    height: fit-content;
    position: relative;
}

.map-pic {
    max-width: 75vw;
    display: block;
}

.overlay {
    background-color: rgba(0, 0, 0, 0.616);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #ffffffb9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.4em;
    gap: 0.5em;
    pointer-events: none;
    transition: opacity 0.2s;
}

.maximize {
    max-height: 7%;
}

</style>