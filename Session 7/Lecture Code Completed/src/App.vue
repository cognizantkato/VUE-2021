<template>
  <h1>The Composition API</h1>
  <p>{{ fullName }}</p>
  <p>Age: {{ person.age }}</p>
  <button @click="changePersonValue">Change Name</button>
  <button @click="counter++">Add Counter</button>

  <app-hello-world 
    :msg="message"
    @changeMsg="message = 'New Message'"
  ></app-hello-world>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUpdated, reactive, ref, toRefs, watch } from 'vue';
import HelloWorldVue from './components/HelloWorld.vue';

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const App = defineComponent({
  components: {
    appHelloWorld: HelloWorldVue
  },
  setup() {
    // const firstName = ref<string>('Don');
    // const lastName = ref<string>('Jasa');
    // const age = ref<number>(28);
    let person = ref<Person>({ // reactive
      firstName: 'Don',
      lastName: 'Jasa',
      age: 28
    });

    const changeName = (): void => {
      person.value.firstName = 'Lyndon'
    }
    const changePersonValue = (): void => {
      person.value = {
        firstName: 'Lyndon',
        lastName: 'Jasa',
        age: 29
      }
    }

    const fullName = computed((): string => {
      return person.value.firstName + ' ' + person.value.lastName
    })

    const counter = ref<number>(0);
    watch(counter, (value: number) => {
      console.log('Current counter value: ' + value);
    })

    const message = ref<string>('Hello World Using Composition API');

    onMounted(() => {
      console.log('App.vue has been mounted');
    })

    onUpdated(() => {
      console.log('Ref values has been updated');
    })

    return {
      person,
      changeName,
      changePersonValue,
      fullName,
      counter,
      message
    }
  }
});

export default App;
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

h1 {
  color: #2c3e50;
}
</style>
