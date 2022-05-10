<template>
  <div class="space-y-30px mt-300px">
    <h1 class="text-5xl w-300px mx-auto">小鹤音形按键</h1>
    <div class="mx-auto" :class="`w-${120*9}px`">
      <div
        v-for="(row, index) in rows"
        :key="index"
        class="flex relative"
        :class="`ml-${index * 50}px`"
      >
        <div
          v-for="key in row"
          :key="key.key"
          class="border h-120px w-120px relative p-10px"
        >
          <img
            class="absolute top-0 right-0 -z-1"
            :src="`/src/assets/xh/${key.key}.png`"
          />
          <div class="text-3xl ">{{ key.key.toUpperCase() }}</div>
          <div class="text-xl text-red-500 mt-20px">{{ key.vs }}</div>
          <div class="text-right text-blue-500">{{ key.ve }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let rowOne =
  'q-q-iu,w-w-ei,e-e-e,r-r-uan,t-t-ue,y-y-un,u-sh-u,i-ch-i,o-o-uo:o,p-p-ie';
let rowTwo =
  'a-a-a,s-s-ong:iong,d-d-ai,f-f-en,g-g-eng,h-h-ang,j-j-an,k-k-uai:ing,l-l-uang:iang';
let rowThree = 'z-z-ou,x-x-ua:ia,c-c-ao,v-zh-ui:u,b-b-in,n-n-iao,m-m-ian';
let wrap = (e: string) => {
  let [key, vs, ve] = e.split('-');
  return {
    key,
    vs,
    ve: ve.split(':').join(' '),
  };
};
let rows = [
  rowOne.split(',').map(e => wrap(e)),
  rowTwo.split(',').map(e => wrap(e)),
  rowThree.split(',').map(e => wrap(e)),
];
</script>

<style scoped></style>
