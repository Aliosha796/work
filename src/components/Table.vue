<template>
  <table>
    <thead>
      <tr>
        <th scope="col">name</th>
        <th scope="col">age</th>
        <th scope="col">gender</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in personInfo">
        <th scope="row">{{ item.name }}</th>
        <td>{{ item.age }}</td>
        <td>{{ item.gender }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import { ref } from "vue";
let personInfo = ref("");

fetch(
  "https://www.fastmock.site/mock/21a85c5b9141cd10638e8b3bd37dcf8f/api/demolist"
)
  .then((res) => res.json())
  .then((res) => {
    console.log("远程获取的数据=======>", res.data);
    personInfo.value = res.data;
    console.log("获取到的数据=======>", personInfo.value);
  });
</script>
<style>
thead,
tfoot {
  background-color: #3f87a6;
  color: #fff;
}

tbody {
  background-color: #e4f0f5;
}

caption {
  padding: 10px;
  caption-side: bottom;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  font-family: sans-serif;
  font-size: 30px;
  width: 60%;
  margin: auto;
}

td,
th {
  border: 1px solid rgb(190, 190, 190);
  padding: 5px 10px;
}

td {
  text-align: center;
}
</style>
