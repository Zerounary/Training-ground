let data = 'q-q-iu,w-w-ei,e-e-e,r-r-uan,t-t-ue,y-y-un,u-sh-u,i-ch-i,o-o-uo:o,p-p-ie,a-a-a,s-s-ong:iong,d-d-ai,f-f-en,g-g-eng,h-h-ang,j-j-an,k-k-uai:ing,l-l-uang:iang,z-z-ou,x-x-ua:ia,c-c-ao,v-zh-üi:ü,b-b-in,n-n-iao,m-m-ian'

interface KeyElement {
  key: string;
  vs: string;
  ve: Array<string>;
}

let toKeyElement = (keyStr: string) : KeyElement => {
  let [key, vs, ve] = keyStr.split('-');
  return {
    key,
    vs,
    ve: ve.split(':')
  };
}

export let allKeys = data.split(',').map(toKeyElement);

export let keyBoardData = [
  allKeys.slice(0, 10),
  allKeys.slice(10, 19),
  allKeys.slice(19, 26),
]

export let vss = allKeys.map(key => key.vs);

export let ves = allKeys.map(key => key.ve).reduce((acc, cur) => acc.concat(cur), []);





