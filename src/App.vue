<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import {useUserStore} from "./stores/useUserStore.ts"
import {onMounted, ref} from "vue";
const INIT_COLUMNS = [
  { field: 'name', header: 'Name' },
  { field: 'email', header: 'Email' }
]
/// DATA
const columns = ref<Object[]>(INIT_COLUMNS)
const loading = ref<Boolean>(false)
/// Store
const storeUser = useUserStore()

onMounted(async () => {
  loading.value = true;
  try {
    await storeUser.getUsers()
  }catch (error) {
    alert("upss, ocurrio un error al cargar la información, intenta nuevamente")
  } finally {
    loading.value = false;
  }
})



</script>

<template>
  <h1>Users from MongoDB</h1>
  <DataTable
      :value="storeUser.userList"
      tableStyle="min-width: 50rem"
  >
    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
  </DataTable>
  <Button label="Submit" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
