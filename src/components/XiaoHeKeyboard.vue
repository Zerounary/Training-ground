<template>
  <div class="space-y-30px mt-100px">
    <span class="ml-50px ml-100px"></span>
    <h1 class="text-5xl w-300px mx-auto">小鹤音形按键</h1>
    <div>
      <div class="w-300px h-100px text-center text-6xl m-auto">
        {{ currentKeyDisplay }}
      </div>
      <div class="flex">
        <input
          ref="input"
          class="w-300px h-50px m-auto border text-center"
          v-model="inputValue"
          @focus="onFocus"
          @blur="onBlur"
          @keyup="keyup"
          :placeholder="''"
        />
      </div>
    </div>
    <div class="mx-auto w-1170px">
      <div
        v-for="(row, index) in keyBoardData"
        :key="index"
        class="flex relative"
        :class="`ml-${index * 50}px`"
      >
        <div
          v-for="key in row"
          :key="key.key"
          class="border h-120px w-120px relative p-10px"
          :class="highlightClass(key.key)"
        >
          <img class="absolute top-0 right-0 z-1" :src="`xh/${key.key}.png`" />
          <div class="text-3xl">{{ key.key.toUpperCase() }}</div>
          <div class="text-xl text-red-500 mt-20px">{{ key.vs }}</div>
          <div class="text-right text-xl text-blue-500">
            {{ key.ve.join(' ') }}
          </div>
        </div>
      </div>
      <div class="text-xl">单元训练</div>
      <div class="border p-3 rounded space-x-3">
        <div>
          <select v-model="mode" @change="volOptChange">
            <option value="vs">声母</option>
            <option value="ve">韵母</option>
            <option value="word">汉字</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, Ref, computed } from 'vue';
import {
  keyBoardData,
  getRandomVss,
  getRandomVes,
  getRandomWords,
  PracticeElement,
} from '@/util/XiaoHeKeys';

// 所有字段的数据对象
let mode : Ref<string> = ref('word');
let autoStart = ref(true);

let getPracticeList = function (num: number) {
  let keys: PracticeElement[] = [];
  switch (mode.value) {
    case 'vs':
      keys = getRandomVss(num);
      break;
    case 've':
      keys = getRandomVes(num);
      break;
    case 'word':
      keys = getRandomWords(num);
      break;
    default:
      return (keys = []);
  }
  return keys;
};

// 获取训练列表kk
let practiceList: Ref<PracticeElement[]> = ref(getPracticeList(3));
let index = ref(0);
let currentKey: Ref<PracticeElement | undefined> = ref();
let inputValue = ref('');
let input = ref();

let nextKey = () => {
  inputValue.value = '';
  index.value++;
  if (index.value == practiceList.value.length) {
    index.value = 0;
    practiceList.value = getPracticeList(3);
  }
  currentKey.value = practiceList.value[index.value];
};

let keyup = (e: { key: string }) => {
  if (inputValue.value == currentKey.value?.keys) {
    nextKey();
  }
};

let reset = () => {
  index.value = 0;
  practiceList.value = getPracticeList(3);
  currentKey.value = undefined;
  input.value.focus();
};

onMounted(() => {
  // input.value.focus();
});

let onFocus = () => {
  start();
};

let onBlur = () => {
  // currentKey.value = undefined;
};

let volOptChange = () => {
  reset();
};

let highlightClass = function (key: string) {
  if (currentKey.value == undefined) {
    return '';
  }
  let checkKey = currentKey.value?.keys[inputValue.value.length]
  if( checkKey == key) {
    return 'bg-yellow-300';
  } else {
    return 'filter grayscale';
  }
};

// 获取当前的值
let currentKeyDisplay = computed(() => {
  return currentKey.value?.display;
});

function start() {
  if (autoStart.value) {
    nextKey();
  }
}
</script>

<style scoped></style>
