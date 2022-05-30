let words =
  'staff-员工,negative-消极的,consequences-结果,distorted-扭曲的,emphasize-强调,identify-确定,assess-评估,explain-解释,nearly-几乎,curiously-好奇,eagerly-热切的,inspected-检查,claim-宣称,prove-证明,recall-回忆起,jumping lights-闯红灯,threatened-受到威胁,mocked-嘲弄,blamed-指责,almost-几乎,cyclists-自行车运动员,punctuality-准时,hospitality-好客,competition-竞争,innovation-创造,infrequent-罕见,lanes-车道数,punished-处罚,according to-根据,hit-击中,rather-相当的,comfort-安慰,revenue-收入,efficiency-效率,security-安全,criterion-标准,quiet-轻声的,cautious-小心的,diligent-孜孜不倦的,expense-费用,policy-政策,prejudice-偏见,immensely-极大的,report-报道,revealed-透露,admitted-承认,noticed-注意到,simply-仅仅,departure-离开,transfer-转移,moral-道德,multidimensional-多维的,interpret-解释,criticize-批评,sacrifice-牺牲,tolerate-容许,unforeseen-不可预见,argument-论点,critical-关键,factor-因素,trick-把戏,objective-客观的,specify-具体说明,predict-预测,restore-修复,reskilling-学习新技能,buzzword-流行语,get left behind-落在后面,rapidly-迅速的,demand-需求,remain-保持,as will-同样,forum-论坛,per cent-百分比,thorny-棘手的,temptation-诱惑,massive-大量的,fire-解雇,hire-雇佣,strategy-战略,pledged-保证,broader-广泛的,efforts-努力,arguably-按理,languid-懒散,at best-顶多,beg-乞求,employer-雇员,pandemic-流行病,indeed-确实,generational lows-低点,shortage-缺少,spiked up-增加,although-虽然,obvious-明显,personnel-全体员工,concerned-担心,it is not like-这并不是说,furlough-休假,cabin staff-机组人员,laid-off-下岗职工,urgent-紧急的,steady-稳定的,opportunities-机会,controversy-争议,is cited to-被引用为,alternative-可替代的,appraisal-评估,characteristic-特征,driven up-提升了,inconsistent-不一致,fierce-激烈的,opposition-反对,insufficient-不足,a call for-要求';

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
