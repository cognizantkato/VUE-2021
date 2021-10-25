<template>
  <h1>{{ props.msg }}</h1>
  <button @click="changeMessage">Change Message</button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  emits: {
    changeMsg: null
  },
  setup(props, context) {
    const fullPropsMessage = computed(() => {
      return 'Some Message ' + props.msg
    })

    const changeMessage = () => {
      context.emit('changeMsg');
    }

    return {
      props,
      changeMessage
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
</style>
