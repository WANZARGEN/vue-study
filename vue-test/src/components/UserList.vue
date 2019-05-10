<template>
    <v-data-table :headers="headers" :items="users">
        <template v-slot:items="props" >
            <tr v-on:click="increment(props.item.index)">
                <td>{{ props.item.index }}</td>
                <td>{{ props.item.name.first }} {{ props.item.name.last }}</td>
                <td>{{ props.item.address }}</td>
                <td>{{ props.item.age }}</td>
                <td>{{ props.item.company }}</td>
                <td>{{ props.item.email }}</td>
                <td>{{ count[props.item.index] }}</td>
            </tr>
        </template>
    </v-data-table>
</template>

<script>
import userApi from '@/services/user';
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('counter');

export default {
    data() {
        return {
            headers: [
                { text: "#", value: "index" }, 
                { text: "name", value: "name" },
                { text: "address", value: "address", sortable: false },
                { text: "age", value: "age", sortable: false },
                { text: "company", value: "company" },
                { text: "email", value: "email", sortable: false },
                { text: "count", value: "count", sortable: false }
            ],
            users: []
        }
    },
    computed: {
        ...mapState({
            count: state => state.count
        })
    },
    methods: {
        ...mapActions([
            'increment'
        ]),
        listUsers: function() {
            userApi.list()
            .then((res) => {
                this.users = res.data
            })
            .catch((err) => {
                console.error(err);
            })
            .then(() => {
            // always executed
            }); 
        }
    },
    mounted() {
        this.listUsers()
    },
    created() {

    },
    watch() {
        
    }
}
</script>

<style lang="scss" scoped>

</style>


