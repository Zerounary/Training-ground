import { keyBoardData, ves, vss } from './../src/util/XiaoHeKeys';
import { expect, beforeEach, it, describe } from 'vitest';
// import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '../src/stores/counter';

// beforeEach(() => {
//   setActivePinia(createPinia());
// });

describe('小鹤音行基础数据', () => {
  it('键盘数据二位数组正确', () => {
    expect(keyBoardData.length).toEqual(3);
    expect(keyBoardData[0].length).toEqual(10);
    expect(keyBoardData[1].length).toEqual(9);
    expect(keyBoardData[2].length).toEqual(7);
  });
  let vsData = [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'sh',
    'ch',
    'o',
    'p',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'z',
    'x',
    'c',
    'zh',
    'b',
    'n',
    'm',
  ];
  it('声母数据正确', () => {
    expect(vss).toEqual(vsData);
  });
  let veData = ['o', 'u','ü', 'i', 'e', 'a', 'iu', 'ei', 'uan','ue','un','uo','ie','ong','iong','ai','en','eng','ang','an','uai','ing','uang','iang','ou','ua','ia','ao','üi', 'in','iao','ian'];
  it('韵母数据正确', () => {
    expect(ves.sort()).toEqual(veData.sort())
  });

});
