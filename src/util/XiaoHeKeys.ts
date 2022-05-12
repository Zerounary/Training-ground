let data =
  'q-q-iu,w-w-ei,e-e-e,r-r-uan,t-t-ue,y-y-un,u-sh-u,i-ch-i,o-o-uo:o,p-p-ie,a-a-a,s-s-ong:iong,d-d-ai,f-f-en,g-g-eng,h-h-ang,j-j-an,k-k-uai:ing,l-l-uang:iang,z-z-ou,x-x-ua:ia,c-c-ao,v-zh-ui:ü,b-b-in,n-n-iao,m-m-ian';
let words =
  '握-wo,若-ro,托-to,哟-yo说-uo,戳-io,喔-oo,破-po,奥-ao,所-so,多-do,佛-fo,过-go,或-ho,扩-ko,末-mo,做-zo,错-co,桌-vo,拨-bo,挪-no,末-mo,穷-qs,容-rs,同-ts,用-ys,冲-is,送-ss,动-ds,共-gs,红-hs,空-ks,龙-ls,总-zs,熊-xs,从-cs,中-vs,弄-ns,肉-rz,头-tz,有-yz,受-uz,抽-iz,剖-pz,搜-sz,都-dz,否-fz,够-gz,后-hz,口-kz,楼-lz,走-zz,凑-cz,周-vz,某-mz';

export interface KeyElement {
  key: string;
  vs: string;
  ve: Array<string>;
}

export let allKeys = data.split(',').map(toKeyElement);


export let keyBoardData = [
  allKeys.slice(0, 10),
  allKeys.slice(10, 19),
  allKeys.slice(19, 26),
];

export let vss = allKeys.map(key => key.vs);

// 被展开的韵母
export let ves = flatten(allKeys.map(key => key.ve));

export let vesNoFlatted = allKeys.map(key => key.ve);

let pinyins: Array<PinYinElement> = [];

export interface PinYinElement {
  full: string;
  vs: string;
  ve: string;
}

for (let vs of vss) {
  for (let ve of ves) {
    pinyins.push({
      full: `${vs}${ve}`,
      vs,
      ve,
    });
  }
}

export let allPinYins = pinyins;

export function getRandomKeys(repeatNum: number): Array<KeyElement> {
  let result: Array<KeyElement> = [];
  for (let i = 0; i < repeatNum; i++) {
    result = [...result, ...allKeys];
  }
  // shuffle result
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

interface WordElement {
  word: string;
  keys: Array<string>;
}

/**
 * 转化字符成WorkElement
 * @param wordStr
 * @returns
 */
let toWordElement = (wordStr: string): WordElement => {
  let [word, pingYin] = wordStr.split('-');
  return {
    word,
    keys: splitPingYin(pingYin),
  };
  // 将完整的拼音拆分成声母和韵母
  function splitPingYin(pinYin: string): Array<string> {
    let pinYinObj = pinyins.find(p => p.full == pinYin);
    return [pinYinObj?.vs || '', pinYinObj?.ve || ''];
  }
}

export let allWords = words.split(',').map(toWordElement);

/**
 * 将Key字符串转换成KeyElement对象
 * @param keyStr
 * @returns
 */
function toKeyElement(keyStr: string): KeyElement {
  let [key, vs, ve] = keyStr.split('-');
  return {
    key,
    vs,
    ve: ve.split(':'),
  };
}

// 展开数组
function flatten(arr: Array<any>) {
  return arr.reduce((acc, cur) => acc.concat(cur), []);
}
