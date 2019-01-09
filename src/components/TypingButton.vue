<template>
    <div class="typeCircle">
        <a href="">typing</a>
    </div>
</template>

<script>
export default {
    name: 'TypingButton',
    data() {
        return {
            list: {
                'linux': 'linux',
                'python': 'python',
            }
        }
    }
}
</script>

<style scoped>
.typeCircle {
    width: 100px;
    height: 100px;
    display: inline-block;
    border-radius: 50%;
    background-color: aquamarine;
    text-align: center;
}

a {
    line-height: 100px;
}
</style>
