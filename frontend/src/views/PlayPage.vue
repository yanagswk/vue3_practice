<script lang="ts" setup>
// 3-1 で作成したテトリスのフィールドを定義するコード
const row = 20;
const column = 10;

const field = new Array(row);

for (let i = 0; i < row; i++) {
  const fieldColumn = new Array(column).fill(0);
  field[i] = fieldColumn;
}
</script>

<template>
  <h1>プレイ画面</h1>
  <h2>ユーザ名: {{ $route.query.name }}</h2>

  <div class="container-teto">
    <table class="field-teto" style="border-collapse: collapse">
      <tr v-for="(row, y) in field" :key="y">
        <td class="block-teto" v-for="(col, x) in row" :key="x" />
      </tr>
    </table>

    <!-- <table>
      <tr>
        <td>aaaa</td>
        <td>bbbb</td>
      </tr>
      <tr>
        <td>aaaa</td>
        <td>bbbb</td>
      </tr>
    </table> -->
  </div>
</template>

/*
<!-- テトリスのフィールドのデザインを整えるためのスタイルシート -->
*/
<style scoped>
.container-teto {
  display: flex;
  justify-content: center;
  align-items: stretch;
}

.field-teto {
  border: ridge 0.4em #2c3e50;
  border-top: none;
}

.block-teto {
  width: 1em;
  height: 1em;
  border: 0.1px solid #95a5a6;
}
</style>
