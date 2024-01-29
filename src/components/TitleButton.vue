<template>
    <div class='container'>
        <div class="text">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "TitleButton",
    props: ["text"]
}
</script>

<style scoped>

@font-face {
    font-family: Assistant-semiBold;
    src: url("/fonts/Assistant/static/Assistant-SemiBold.ttf");
}
.container {
    background-image: url(/src/assets/emptyButton.svg);
    background-repeat: no-repeat;
    background-size: contain;
    height: 6vh;
    width: fit-content;
    margin-top: 2vh;
    margin-right: 1vw;
    padding: 0.5% 0.7em 0.5% 0.7em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.text {
    text-align: center;
    color: white;
    font-size: 1.1em;
    font-family: Assistant-semiBold;
}
</style>