<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <TypingButton 
      v-for="item in list"
      v-bind:key="item.id"
      v-bind:kind="item.kind"
      v-bind:url="item.url">
    </TypingButton>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <br>
    </ul>
  </div>
</template>

<script>
import TypingButton from './TypingButton.vue'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to ming',
      list: [
        { id: 1, kind: 'linux', url: '/typing/linux'},
        { id: 2, kind: 'c', url: '/typing/c'},
        { id: 3, kind: 'html', url: '/tping/html'}
      ]
    }
  },
  components: {
    TypingButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: skyblue;
}
</style>
