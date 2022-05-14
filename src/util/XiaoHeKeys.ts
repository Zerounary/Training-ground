let data =
  'q-q-iu,w-w-ei,e-e-e,r-r-uan,t-t-ue,y-y-un,u-sh-u,i-ch-i,o-o-uo:o,p-p-ie,a-a-a,s-s-ong:iong,d-d-ai,f-f-en,g-g-eng,h-h-ang,j-j-an,k-k-uai:ing,l-l-uang:iang,z-z-ou,x-x-ua:ia,c-c-ao,v-zh-ui:ü,b-b-in,n-n-iao,m-m-ian';
let words =
  '握-wo,若-ro,托-to,哟-yo,说-uo,戳-io,喔-oo,破-po,奥-ao,所-so,多-do,佛-fo,过-go,或-ho,扩-ko,末-mo,做-zo,错-co,桌-vo,拨-bo,挪-no,末-mo,穷-qs,容-rs,同-ts,用-ys,冲-is,送-ss,动-ds,共-gs,红-hs,空-ks,龙-ls,总-zs,熊-xs,从-cs,中-vs,弄-ns,肉-rz,头-tz,有-yz,受-uz,抽-iz,剖-pz,搜-sz,都-dz,否-fz,够-gz,后-hz,口-kz,楼-lz,走-zz,凑-cz,周-vz,某-mz,二-eg,热-re,特-te,也-ye,设-ue,车-ie,色-se,得-de,各-ge,何-he,克-ke,乐-le,则-ze,测-ce,着-ve,呢-ne,么-me,黑-hw,贼-zw,每-mw,为-ww,配-pw,费-fw,类-lw,被-bw,内-nw,问-wf,任-rf,深-uf,陈-if,盆-pf,森-sf,分-ff,很-hf,肯-kf,怎-zf,岑-cf,真-vf,本-bf,嫩-nf,们-mf,翁-wg,仍-rg,疼-tg,生-ug,成-ig,碰-pg,僧-sg,等-dg,风-fg,更-gg,横-hg,坑-kg,冷-lg,增-zg,曾-cg,正-vg,蹦-bg,能-ng,梦-mg';

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

export interface PracticeElement {
  display: string;
  keys: string;
}

export function getRandomVss(repeatNum: number): PracticeElement[] {
  let result: PracticeElement[] = [];

  result = getRandomElements(allKeys, repeatNum).map(e => ({
    display: e.vs,
    keys: e.key,
  }));

  return result;
}

export function getRandomVes(repeatNum: number): Array<PracticeElement> {
  let result: PracticeElement[] = [];
  result = getRandomElements(allKeys, repeatNum).map(e => ({
    display: e.ve,
    keys: e.key,
  }));
  return result;
}

export function getRandomWords(repeatNum: number): Array<PracticeElement> {
  let result: PracticeElement[] = [];
  result = getRandomElements(allWords, repeatNum).map(e => ({
    display: e.word,
    keys: e.keys.join(''),
  }));
  return result;
}
function getRandomElements(arr: Array<any>, repeatNum: number) {
  return shuffle(repeat(arr, repeatNum));
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
export let toWordElement = (wordStr: string): WordElement => {
  let [word, pingYinKeyStr] : string[] = wordStr.split('-');
  return {
    word,
    keys: pingYinKeyStr.split('')
  };
};

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

// shuffle a array
function shuffle(arr: Array<any>) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// repeat a array
export function repeat(arr: Array<any>, repeatNum: number) {
  let result: Array<any> = [];
  for (let i = 0; i < repeatNum; i++) {
    result = [...result, ...arr];
    // result.concat(arr);
  }
  return result;
}
