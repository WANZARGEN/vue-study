<template>
    <v-data-table :headers="headers" :items="users">
        <template v-slot:items="props">
            <td>{{ props.index }}</td>
            <td>{{ props.item.name.first }} {{ props.item.name.last }}</td>
            <td>{{ props.item.address }}</td>
            <td>{{ props.item.age }}</td>
            <td>{{ props.item.company }}</td>
            <td>{{ props.item.email }}</td>
            <!-- <td>{{ props.item.name }}</td> -->
        </template>
    </v-data-table>
</template>

<script>
import data from '../data/users.json';

export default {
    data() {
        return {
            headers: [
                { text: "#" }, 
                { text: "name", value: "name" },
                { text: "address", value: "address", sortable: false },
                { text: "age", value: "age", sortable: false },
                { text: "company", value: "company" },
                { text: "email", value: "email", sortable: false },
                // { text: "count", value: "count", sortable: false },
            ],
            users: data
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


