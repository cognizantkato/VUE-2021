<template>
    <div>
        <p>First Vue Application</p>
        <p>User: {{returnFullUserDisplayName('User')}}</p>
        <p>Full Name {{userFullName}}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Person {
    firstName: string;
    lastName: string;
}

const User = defineComponent({
    data() {
        return {
            person: {
                firstName: 'Arvie',
                lastName: 'Limbo'
            },
            isActive: true
        }
    },
    methods: {
        returnFullUserDisplayName(annotation: string): string {
            return `${annotation} ${this.person.firstName} ${this.person.lastName}`;
        }
    },
    computed: {
        userFullName(): string {
            return this.person.firstName + ' ' + this.person.lastName;
        }
    }
});

export default User;
</script>
