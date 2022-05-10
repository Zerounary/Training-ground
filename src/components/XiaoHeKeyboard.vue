<template>
  <div class="space-y-30px mt-100px">
    <span class="ml-50px ml-100px"></span>
    <h1 class="text-5xl w-300px mx-auto">小鹤音形按键</h1>
    <div>
      <div class="w-300px h-100px text-center text-6xl m-auto">
        {{ practiceList[index] }}
      </div>
      <div class="flex">
        <input
          ref="input"
          class="w-300px h-50px m-auto border text-center"
          v-model="inputValue"
          @keyup="keyup"
          :placeholder="''"
        />
      </div>
    </div>
    <div class="mx-auto w-1170px">
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
          :class="`${
            highlightKey == ''
              ? ''
              : highlightKey == key.key
              ? 'bg-yellow-300'
              : ' filter grayscale'
          }`"
        >
          <img class="absolute top-0 right-0 z-1" :src="`xh/${key.key}.png`" />
          <div class="text-3xl">{{ key.key.toUpperCase() }}</div>
          <div class="text-xl text-red-500 mt-20px">{{ key.vs }}</div>
          <div class="text-right text-xl text-blue-500">{{ key.ve }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

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

let all = [rowOne, rowTwo, rowThree]
  .join(',')
  .split(',')
  .map(e => wrap(e));
let ves: any[] = [];
let veitems = all.map(e => {
  if (e.ve.includes(' ')) {
    return e.ve.split(' ');
  } else {
    return [e.ve];
  }
});

for (const iterator of veitems) {
  ves = [...ves, ...iterator];
}

let getPraticeList = (num: number) => {
  let list: string | any[] = [];
  for (let i = 0; i < num; i++) {
    list = [...list, ...ves];
  }
  // shuffle the list
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
};

let practiceList = ref(getPraticeList(3));
let index = ref(0);

let getKey = (by: 'vs' | 've', val: string) => {
  let key = all.find(e => e[by].split(" ").includes(val)
  )?.key || '';
  return key;
};

console.log(getKey('ve', 'iang'));


let getVal = () => {
  return practiceList.value[index.value];
};

let highlightKey = ref(getKey('ve', getVal()));
let inputValue = ref('');
let input = ref();

let nextKey = () => {
  inputValue.value = '';
  index.value++;
  if(index.value == practiceList.value.length){
    index.value = 0;
    practiceList.value = getPraticeList(3);
  }
  let val = getVal();
  highlightKey.value = getKey('ve', val);
};

let keyup = (e: { key: string; }) => {
  if (e.key == highlightKey.value) {
    nextKey();
  }
};

onMounted(() => {
  input.value.focus();
})
</script>

<style scoped></style>
