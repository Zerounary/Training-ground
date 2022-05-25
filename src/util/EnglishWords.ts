let words =
  'staff-员工,negative-消极的,consequences-结果,distorted-扭曲的,emphasize-强调,identify-确定,assess-评估,explain-解释,nearly-几乎,curiously-好奇,eagerly-热切的,inspected-检查,claim-宣称,prove-证明,recall-回忆起,jumping lights-闯红灯,threatened-受到威胁,mocked-嘲弄,blamed-指责,almost-几乎,cyclists-自行车运动员,punctuality-准时,hospitality-好客,competition-竞争,innovation-创造,infrequent-罕见,lanes-车道数,punished-处罚,according to-根据,hit-击中,rather-相当的,comfort-安慰,revenue-收入,efficiency-效率,security-安全,criterion-标准,quiet-轻声的,cautious-小心的,diligent-孜孜不倦的,expense-费用,policy-政策,prejudice-偏见,immensely-极大的,report-报道,revealed-透露,admitted-承认,noticed-注意到,simply-仅仅,departure-离开,transfer-转移,moral-道德,multidimensional-多维的,interpret-解释,criticize-批评,sacrifice-牺牲,tolerate-容许,unforeseen-不可预见,argument-论点,critical-关键,factor-因素,trick-把戏,objective-客观的,specify-具体说明,predict-预测,restore-修复';

export interface PracticeElement {
  display: string;
  keys: string;
  mean: string;
}

export let toPracticeElement = (word: WordElement): PracticeElement => {
  return {
    display: word.word,
    keys: word.word,
    mean: word.mean
  }
}

export function getRandomWords(repeatNum: number): Array<PracticeElement> {
  let result: PracticeElement[] = [];
  result = getRandomElements(allWords, repeatNum).map(toPracticeElement);
  return result;
}
function getRandomElements(arr: Array<any>, repeatNum: number) {
  return shuffle(repeat(arr, repeatNum));
}

interface WordElement {
  word: string;
  mean: string;
}

/**
 * 转化字符成WorkElement
 * @param wordStr
 * @returns
 */
export let toWordElement = (wordStr: string): WordElement => {
  let [word, mean] : string[] = wordStr.split('-');
  return {
    word,
    mean,
  };
};

export let allWords = words.split(',').map(toWordElement);


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
