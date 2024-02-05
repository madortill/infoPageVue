<template>
    <div ref="prompt" class="prompt">
        <div class="container">
            <span class="text">רוצים להתקין את האפליקציה שלנו?</span>
            <button @click="handleOk" class="btn yes">כן</button>
            <button @click="hideCallback" class="btn">לא</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InstallationPrompt',
    data() {
        return {
            isShow: true,
            promise: ''
        }
    },
    props: ["deffered"],
    methods: {
        showModal() {
            this.isShow = true;
            return this.promise
        },
        hideCallback() {
            this.$emit('disappear');
        },
        async handleOk() {
            // deffered is a global variable we've been using in the sample to capture the `beforeinstallevent`
            this.deffered.prompt();
            // Find out whether the user confirmed the installation or not
            const { outcome } = await this.deffered.userChoice;
            this.$emit('disappear');
            // The defferedPrompt can only be used once.

            // Act on the user's choice
            if (outcome === 'accepted') {
                console.log('User accepted the install prompt.');
            } else if (outcome === 'dismissed') {
                console.log('User dismissed the install prompt');
            }
        }
    }
}
</script>
<style scoped>
.prompt {
    position: relative;
    top: 1rem;
    left: 0;
    z-index: 10;
    width: 100vw;
    font-size: clamp(2vw, 1rem, 3.7vw);

}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(255, 255, 255);
    border: 2px black solid;
    border-radius: 0.25rem;
    gap: 0.5rem;
    width: 90vw;
    height: fit-content;
    padding: 0.75rem 1rem;
    box-sizing: border-box;
    margin: auto;
}

.btn {
    border: 1px solid black;
    padding: 0.2rem 0.7rem;
    border-radius: 0.3rem;
    min-width: 62px;
    min-height: 35px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text {
    font-weight: bold;
    margin-left: auto;
}

.yes {
    background-color: rgb(197, 242, 197);
}
</style>