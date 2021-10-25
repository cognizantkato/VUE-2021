<template>
    <img :class="classes" src="@/assets/characters/archer.png">
</template>
<script lang="ts">
import { defineComponent} from 'vue';

const Character = defineComponent({ 
    props: {
        type: String
    },
    computed: {
        classes() {
            if (this.type == 'Player') {
                return '';
            } else{
                return 'flip';
            }
        }
    }
})

export default Character;
</script>

<style scoped>
.flip {
  transform: scaleX(-1);
}
</style>
