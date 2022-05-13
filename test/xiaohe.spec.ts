import { keyBoardData, ves, vss, allKeys, allWords, repeat, getRandomVes, toWordElement, allPinYins } from './../src/util/XiaoHeKeys';
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
  let veData = ['o', 'u','ü', 'i', 'e', 'a', 'iu', 'ei', 'uan','ue','un','uo','ie','ong','iong','ai','en','eng','ang','an','uai','ing','uang','iang','ou','ua','ia','ao','ui', 'in','iao','ian'];
  it('韵母数据正确', () => {
    expect(ves.sort()).toEqual(veData.sort())
  });
  it('随机声母列表', () => {
    expect(getRandomVes(1).length).toEqual(allKeys.length);
    expect(getRandomVes(2).length).toEqual(allKeys.length * 2);
    expect(getRandomVes(3).length).toEqual(allKeys.length * 3);

    // 测试每一个都有对应的字段
  })

  it('训练字结构正确', () => {
    let word = {
      word: '握',
      keys: ['w', 'o']
    }
    console.log(allPinYins.filter(e => e.full.startsWith('t')))

    expect(allWords[0]).toEqual(word);
    console.log("🚀 ~ file: xiaohe.spec.ts ~ line 66 ~ it ~ allWords", allWords)
    expect(toWordElement('握-wo')).toEqual(word);
  })

  it('测试 repeat 函数', () => {
    let arr = [ 1, 2, 3]
    expect(repeat(arr, 1)).toEqual([1,2,3])
    expect(repeat(arr, 2)).toEqual([1,2,3,1,2,3])
    expect(repeat(arr, 3)).toEqual([1,2,3,1,2,3,1,2,3])
  })
});
