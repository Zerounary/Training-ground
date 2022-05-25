<template>
  <div class="space-y-30px mt-100px">
    <span class="ml-50px ml-100px visible invisible"></span>
    <h1 class="text-5xl w-300px mx-auto">英语单词复习</h1>
    <div class="space-y-3">
      <div class="w-600px h-100px text-center text-6xl m-auto">
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
      <div class="w-500px h-100px flex items-center justify-center bg-gray-50 text-center text-6xl text-gray-400 m-auto" @click="seeIt" >
        <span :class="`${hiddenMean ? 'invisible' : 'visible'}`">{{ currentKeyMean }}</span>
      </div>
      <div class="text-xl">单元训练</div>
      <div class=" grid grid-cols-3 gap-3 border p-3 rounded space-x-3">
        <div>
          <select v-model="mode" @change="volOptChange">
            <option value="word">单词</option>
          </select>
        </div>
        <div>
          <label for="hiddenMean">隐藏含义：<input id="hiddenMean" type="checkbox" v-model="hiddenMean" /></label>
        </div>
        <div>
          <label for="hiddenMean">训练次数：<input v-model="practiceTime" @change="onPracticeTimeChange" /></label>
        </div>
        <div class=" col-span-3">
          <button class="bg-blue-500 text-white h-50px w-full rounded" @click="start">开始</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, Ref, computed } from 'vue';
import { getRandomWords, PracticeElement } from '@/util/EnglishWords';

// 所有字段的数据对象
let mode: Ref<string> = ref('word');
let autoStart = ref(true);
let hiddenMean = ref(true);
let practiceTime = ref(1);

let getPracticeList = function (num: number) {
  let keys: PracticeElement[] = [];
  switch (mode.value) {
    case 'word':
      keys = getRandomWords(num);
      break;
    default:
      return (keys = []);
  }
  return keys;
};

// 获取训练列表kk
let practiceList: Ref<PracticeElement[]> = ref(getPracticeList(practiceTime.value));
let index = ref(0);
let currentKey: Ref<PracticeElement | undefined> = ref();
let inputValue = ref('');
let input = ref();

let seeIt = () => {
  let currentHiddenOption = hiddenMean.value;
  hiddenMean.value = !currentHiddenOption;
  setTimeout(() => {
    hiddenMean.value = currentHiddenOption;
  }, 3000);
}
let nextWord = () => {
  inputValue.value = '';
  index.value++;
  if (index.value == practiceList.value.length) {
    index.value = 0;
    practiceList.value = getPracticeList(practiceTime.value);
  }
  currentKey.value = practiceList.value[index.value];
};

let keyup = (e: { key: string }) => {
  if (inputValue.value == currentKey.value?.keys) {
    nextWord();
  }
};

let reset = () => {
  index.value = 0;
  practiceList.value = getPracticeList(practiceTime.value);
  currentKey.value = undefined;
  input.value.focus();
};

onMounted(() => {
  // input.value.focus();
});

let onFocus = () => {
  // start();
};

let onPracticeTimeChange = () => {
  reset();
}

let onBlur = () => {
  // currentKey.value = undefined;
};

let volOptChange = () => {
  reset();
};

// 获取当前的值
let currentKeyDisplay = computed(() => {
  return currentKey.value?.display;
});

let currentKeyMean = computed(() => {
  return currentKey.value?.mean;
});

function start() {
  if (autoStart.value) {
    nextWord();
  }
}
</script>

<style scoped></style>
