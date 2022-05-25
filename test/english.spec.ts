import { allWords, toPracticeElement, toWordElement } from './../src/util/EnglishWords';
import { expect, beforeEach, it, describe } from 'vitest';
// import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '../src/stores/counter';

// beforeEach(() => {
//   setActivePinia(createPinia());
// });

describe('小鹤音行基础数据', () => {

  let word = {
    word: 'staff',
    mean: '员工'
  }
  it('原数据结构正确', () => {
    expect(toWordElement('staff-员工')).toEqual(word);
    expect(allWords[0]).toEqual(word);
  });

  let pratice = {
    display: 'staff',
    keys: 'staff',
    mean: '员工'
  }
  it('训练字结构正确', () => {
    expect(toPracticeElement(word)).toEqual(pratice);
  });

});
