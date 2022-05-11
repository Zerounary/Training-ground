let data = 'q-q-iu,w-w-ei,e-e-e,r-r-uan,t-t-ue,y-y-un,u-sh-u,i-ch-i,o-o-uo:o,p-p-ie,a-a-a,s-s-ong:iong,d-d-ai,f-f-en,g-g-eng,h-h-ang,j-j-an,k-k-uai:ing,l-l-uang:iang,z-z-ou,x-x-ua:ia,c-c-ao,v-zh-ui:ü,b-b-in,n-n-iao,m-m-ian'

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
]

export let vss = allKeys.map(key => key.vs);

// 被展开的韵母
export let ves = flatten(allKeys.map(key => key.ve));

export let vesNoFlatted = allKeys.map(key => key.ve);

export function getRandomKeys (repeatNum: number) : Array<KeyElement> {
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


/**
 * 将Key字符串转换成KeyElement对象
 * @param keyStr 
 * @returns 
 */
function toKeyElement(keyStr: string) : KeyElement {
  let [key, vs, ve] = keyStr.split('-');
  return {
    key,
    vs,
    ve: ve.split(':')
  };
}


function flatten(arr: Array<any>) {
  return arr.reduce((acc, cur) => acc.concat(cur), []);
}



