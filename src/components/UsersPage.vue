<template>
    <div>
      <h2>Список пользователей</h2>

      <div v-if="!list.length" class="alert alert-warning">
        Загрузка...
      </div>
      <user-list v-else :users="list"></user-list>
    </div>
</template>

<script>
  import axios from 'axios'
  import UserList from '@/components/UserList.vue'

  export default {
      name: "UsersPage",
      components: {
        UserList
      },
      data: () => ({
        //Список пользователей
        list: []
      }),
      methods: {
        loadData() {
          axios.get('http://localhost:3004/users/')
            .then((response) => {
              this.list = response.data;
            })
        }
      },
      mounted() {
        this.loadData();
      }
    }
</script>

<style scoped>

</style>
