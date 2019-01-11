<template>
    <div class="typeCircle">
        <router-link v-bind:to="url">{{ kind }}</router-link> 
    </div>
</template>

<script>
export default {
    name: 'TypingButton',
    data() {
        return {
            message: "this is button",
        }
    },
    props: {
        id: Number,
        kind: String,
        url: String
    }
}
</script>

<style lang="scss" scoped>
.typeCircle {
    width: 100px;
    height: 100px;
    margin: 20px;
    display: inline-block;
    border-radius: 50%;
    background-color: aquamarine;
    a{
        line-height: 100px;
        font-size: 1.5em;
    }
}
</style>

