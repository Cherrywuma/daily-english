// 数据校验：检查每天恰好 30 句，且 id 连续
const fs = require('fs');
const code = fs.readFileSync(__dirname + '/data/daily-life.js', 'utf8');
// 把 window.DAILY_LIFE = {...} 转成可 eval 的对象
const wrapped = code.replace('window.DAILY_LIFE', 'var DL');
eval(wrapped);

const counts = DL.days.map(d => d.sentences.length);
const total = counts.reduce((a, b) => a + b, 0);
console.log('天数:', DL.days.length);
console.log('总句:', total);

const bad = DL.days.filter(d => d.sentences.length !== 30);
if (bad.length) {
  console.log('XXX 不是 30 句的天:', bad.map(d => `Day${d.id}(${d.sentences.length}句)`));
  process.exit(1);
}

// 检查 id 连续
const ids = DL.days.map(d => d.id).sort((a, b) => a - b);
for (let i = 1; i < ids.length; i++) {
  if (ids[i] !== ids[i - 1] + 1) {
    console.log('XXX id 不连续:', ids[i - 1], '->', ids[i]);
    process.exit(1);
  }
}

console.log('OK 全部 30 句, id 连续:', ids[0], '~', ids[ids.length - 1]);
