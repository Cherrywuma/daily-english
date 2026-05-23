// data/scenes.js - 500 个真实生活场景
// 自动合并生成，包含 id 1-500

window.SCENES = {
  defaultSpeakers: {
    sister:  'cherry_sister_v1',
    brother: 'male-qn-badao',
    mom:     'female-yujie',
    dad:     'male-qn-jingying',
  },

  categories: {
    kitchen:   '厨房 · 做饭',
    eating:    '吃东西',
    clothing:  '穿衣 · 整理',
    school:    '上学 · 教室',
    outdoor:   '出门 · 玩',
    bathroom:  '洗漱 · 卫生',
    chores:    '家务 · 收拾',
    toys:      '玩具 · 游戏',
    pet:       '宠物',
    body:      '身体 · 健康',
    family:    '家庭日常',
  },

  scenes: [
  {
    id: 1, title: "电饭锅盛饭", category: "kitchen", tags: ["电饭锅","盛饭"], mode: "narrate",
    sentences: [
      { en: "Rice is done.", zh: "饭好了。", speaker: "sister", type: "casual" },
      { en: "Press the lid.", zh: "按盖子。", speaker: "sister", type: "casual" },
      { en: "Pops open.", zh: "弹开了。", speaker: "sister", type: "surprised" },
      { en: "Whoa, hot steam.", zh: "哇，热气。", speaker: "sister", type: "broScared" },
      { en: "Grab the paddle.", zh: "拿饭勺。", speaker: "sister", type: "casual" },
      { en: "Find a bowl.", zh: "找个碗。", speaker: "sister", type: "casual" },
      { en: "Scoop, scoop.", zh: "舀，舀。", speaker: "sister", type: "casual" },
      { en: "Pat it down.", zh: "拍平。", speaker: "sister", type: "casual" },
      { en: "Lid back on.", zh: "盖回去。", speaker: "sister", type: "casual" },
      { en: "Done.", zh: "好了。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 2, title: "煎鸡蛋", category: "kitchen", tags: ["煎蛋","早餐"], mode: "duo",
    sentences: [
      { en: "I'm making eggs.", zh: "我煎蛋。", speaker: "sister", type: "sisProud" },
      { en: "Can I help?", zh: "我帮忙？", speaker: "brother", type: "broCurious" },
      { en: "Just watch.", zh: "光看着。", speaker: "sister", type: "sisBoss" },
      { en: "Pan on.", zh: "锅放上。", speaker: "sister", type: "casual" },
      { en: "Drop of oil.", zh: "一点油。", speaker: "sister", type: "casual" },
      { en: "Crack it.", zh: "磕蛋。", speaker: "sister", type: "casual" },
      { en: "Yikes, shell!", zh: "壳掉了！", speaker: "sister", type: "broScared" },
      { en: "Fish it out.", zh: "捞出来。", speaker: "sister", type: "casual" },
      { en: "Sizzle sizzle.", zh: "滋滋响。", speaker: "brother", type: "broExcite" },
      { en: "Flip it.", zh: "翻面。", speaker: "sister", type: "casual" },
      { en: "Smells so good.", zh: "好香啊。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 3, title: "切西瓜", category: "kitchen", tags: ["西瓜","水果"], mode: "duo",
    sentences: [
      { en: "Big melon!", zh: "好大瓜！", speaker: "brother", type: "broExcite" },
      { en: "Wash first.", zh: "先洗。", speaker: "sister", type: "sisBoss" },
      { en: "Like this?", zh: "这样？", speaker: "brother", type: "broCurious" },
      { en: "Pat dry.", zh: "擦干。", speaker: "sister", type: "casual" },
      { en: "Now cut.", zh: "切。", speaker: "sister", type: "casual" },
      { en: "Whoa, red!", zh: "红的！", speaker: "brother", type: "broExcite" },
      { en: "See the seeds?", zh: "看见籽？", speaker: "sister", type: "casual" },
      { en: "Spit 'em out.", zh: "吐出来。", speaker: "sister", type: "sisBoss" },
      { en: "Cut slices.", zh: "切片。", speaker: "sister", type: "casual" },
      { en: "Yum.", zh: "好吃。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 4, title: "热牛奶", category: "kitchen", tags: ["微波炉","牛奶"], mode: "narrate",
    sentences: [
      { en: "Want warm milk.", zh: "想喝热牛奶。", speaker: "brother", type: "broCute" },
      { en: "Cup ready.", zh: "杯子拿好。", speaker: "brother", type: "casual" },
      { en: "Pour it in.", zh: "倒进去。", speaker: "brother", type: "casual" },
      { en: "Not too full.", zh: "别满。", speaker: "brother", type: "casual" },
      { en: "Pop in microwave.", zh: "放微波炉。", speaker: "brother", type: "casual" },
      { en: "One minute.", zh: "一分钟。", speaker: "brother", type: "casual" },
      { en: "Beep beep.", zh: "嘀嘀响。", speaker: "brother", type: "broExcite" },
      { en: "Careful, hot.", zh: "烫，小心。", speaker: "brother", type: "broScared" },
      { en: "Sip slow.", zh: "慢喝。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 5, title: "削苹果", category: "kitchen", tags: ["苹果","削皮"], mode: "duo",
    sentences: [
      { en: "Peel this for me?", zh: "帮我削？", speaker: "brother", type: "broCute" },
      { en: "Fine.", zh: "行。", speaker: "sister", type: "sisCalm" },
      { en: "Hold tight.", zh: "握紧。", speaker: "sister", type: "casual" },
      { en: "Down, away from you.", zh: "往外削。", speaker: "sister", type: "sisBoss" },
      { en: "Long curls!", zh: "好长的皮！", speaker: "brother", type: "broExcite" },
      { en: "Cool, right?", zh: "酷吧？", speaker: "sister", type: "sisProud" },
      { en: "Now cut.", zh: "切块。", speaker: "sister", type: "casual" },
      { en: "Watch fingers.", zh: "看手指。", speaker: "sister", type: "sisWorry" },
      { en: "Thanks sis.", zh: "谢谢姐。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 6, title: "煮面", category: "kitchen", tags: ["面条","煮"], mode: "narrate",
    sentences: [
      { en: "Water in pot.", zh: "锅里加水。", speaker: "sister", type: "casual" },
      { en: "Turn on stove.", zh: "开火。", speaker: "sister", type: "casual" },
      { en: "Wait to boil.", zh: "等开。", speaker: "sister", type: "casual" },
      { en: "Tiny bubbles.", zh: "冒小泡。", speaker: "sister", type: "casual" },
      { en: "Big bubbles!", zh: "大泡了！", speaker: "sister", type: "broExcite" },
      { en: "Drop noodles.", zh: "下面条。", speaker: "sister", type: "casual" },
      { en: "Stir a bit.", zh: "搅一下。", speaker: "sister", type: "casual" },
      { en: "Three minutes.", zh: "三分钟。", speaker: "sister", type: "casual" },
      { en: "Drain it.", zh: "捞出来。", speaker: "sister", type: "casual" },
      { en: "In the bowl.", zh: "盛碗里。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 7, title: "煎饺子", category: "kitchen", tags: ["饺子","早餐"], mode: "duo",
    sentences: [
      { en: "Frozen dumplings.", zh: "速冻饺子。", speaker: "mom", type: "casual" },
      { en: "How many?", zh: "几个？", speaker: "sister", type: "broCurious" },
      { en: "Ten each.", zh: "一人十个。", speaker: "mom", type: "casual" },
      { en: "Oil first.", zh: "先放油。", speaker: "mom", type: "casual" },
      { en: "In they go.", zh: "放进去。", speaker: "mom", type: "casual" },
      { en: "Splash water.", zh: "加点水。", speaker: "mom", type: "casual" },
      { en: "Cover up.", zh: "盖上。", speaker: "mom", type: "casual" },
      { en: "Five minutes.", zh: "五分钟。", speaker: "mom", type: "casual" },
      { en: "Bottoms golden.", zh: "底金黄。", speaker: "mom", type: "casual" },
      { en: "Crunchy!", zh: "脆脆的！", speaker: "sister", type: "broExcite" }
    ]
  },
  {
    id: 8, title: "炒青菜", category: "kitchen", tags: ["炒菜","青菜"], mode: "narrate",
    sentences: [
      { en: "Wash the greens.", zh: "洗菜。", speaker: "mom", type: "casual" },
      { en: "Shake dry.", zh: "甩干。", speaker: "mom", type: "casual" },
      { en: "Heat the pan.", zh: "烧锅。", speaker: "mom", type: "casual" },
      { en: "A bit of oil.", zh: "一点油。", speaker: "mom", type: "casual" },
      { en: "Garlic in.", zh: "蒜下锅。", speaker: "mom", type: "casual" },
      { en: "Smells good.", zh: "香了。", speaker: "mom", type: "casual" },
      { en: "Toss greens.", zh: "倒菜。", speaker: "mom", type: "casual" },
      { en: "Stir fast.", zh: "快炒。", speaker: "mom", type: "rushed" },
      { en: "Pinch of salt.", zh: "一点盐。", speaker: "mom", type: "casual" },
      { en: "Done.", zh: "好了。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 9, title: "蒸鸡蛋羹", category: "kitchen", tags: ["蒸蛋","早餐"], mode: "duo",
    sentences: [
      { en: "Crack two eggs.", zh: "打两个蛋。", speaker: "mom", type: "casual" },
      { en: "Watch the shell.", zh: "小心壳。", speaker: "mom", type: "momSoft" },
      { en: "Whisk it up.", zh: "搅散。", speaker: "mom", type: "casual" },
      { en: "Add warm water.", zh: "加温水。", speaker: "mom", type: "casual" },
      { en: "Same amount.", zh: "一样多。", speaker: "mom", type: "casual" },
      { en: "Pinch salt.", zh: "点盐。", speaker: "mom", type: "casual" },
      { en: "Skim bubbles.", zh: "撇沫。", speaker: "mom", type: "casual" },
      { en: "Cover with wrap.", zh: "盖保鲜膜。", speaker: "mom", type: "casual" },
      { en: "Steam ten.", zh: "蒸十分钟。", speaker: "mom", type: "casual" },
      { en: "Smooth!", zh: "嫩嫩的！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 10, title: "压蒜", category: "kitchen", tags: ["蒜","压蒜器"], mode: "duo",
    sentences: [
      { en: "Need garlic.", zh: "要蒜。", speaker: "mom", type: "casual" },
      { en: "How many?", zh: "几瓣？", speaker: "sister", type: "broCurious" },
      { en: "Three cloves.", zh: "三瓣。", speaker: "mom", type: "casual" },
      { en: "Peel them.", zh: "剥皮。", speaker: "mom", type: "casual" },
      { en: "Squish first.", zh: "先压一下。", speaker: "mom", type: "casual" },
      { en: "Skin pops off.", zh: "皮就掉。", speaker: "mom", type: "casual" },
      { en: "Into the press.", zh: "放进去。", speaker: "mom", type: "casual" },
      { en: "Squeeze hard.", zh: "用力压。", speaker: "mom", type: "casual" },
      { en: "Oof, strong.", zh: "辣眼。", speaker: "sister", type: "broScared" }
    ]
  },
  {
    id: 11, title: "切葱花", category: "kitchen", tags: ["葱","切"], mode: "narrate",
    sentences: [
      { en: "Green onion.", zh: "葱。", speaker: "mom", type: "casual" },
      { en: "Rinse it.", zh: "冲一下。", speaker: "mom", type: "casual" },
      { en: "Cut the root.", zh: "切根。", speaker: "mom", type: "casual" },
      { en: "Line up.", zh: "排齐。", speaker: "mom", type: "casual" },
      { en: "Chop chop chop.", zh: "切切切。", speaker: "mom", type: "rushed" },
      { en: "Tiny pieces.", zh: "切小碎。", speaker: "mom", type: "casual" },
      { en: "Into bowl.", zh: "放碗里。", speaker: "mom", type: "casual" },
      { en: "Sprinkle on top.", zh: "撒上面。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 12, title: "洗碗", category: "kitchen", tags: ["洗碗"], mode: "duo",
    sentences: [
      { en: "Dishes pile up.", zh: "碗堆了。", speaker: "mom", type: "momTired" },
      { en: "I'll do it.", zh: "我来。", speaker: "sister", type: "casual" },
      { en: "Hot water on.", zh: "开热水。", speaker: "sister", type: "casual" },
      { en: "Squirt of soap.", zh: "挤洗洁精。", speaker: "sister", type: "casual" },
      { en: "Sponge it.", zh: "海绵擦。", speaker: "sister", type: "casual" },
      { en: "Inside and out.", zh: "里外都擦。", speaker: "sister", type: "casual" },
      { en: "Rinse off.", zh: "冲干净。", speaker: "sister", type: "casual" },
      { en: "Stack to dry.", zh: "码上沥水。", speaker: "sister", type: "casual" },
      { en: "Thanks honey.", zh: "谢谢宝贝。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 13, title: "剥蒜", category: "kitchen", tags: ["蒜","剥"], mode: "narrate",
    sentences: [
      { en: "Bunch of garlic.", zh: "一堆蒜。", speaker: "sister", type: "casual" },
      { en: "Break apart.", zh: "掰开。", speaker: "sister", type: "casual" },
      { en: "Whack with knife.", zh: "刀拍一下。", speaker: "sister", type: "casual" },
      { en: "Skin loosens.", zh: "皮松了。", speaker: "sister", type: "casual" },
      { en: "Peel right off.", zh: "皮掉了。", speaker: "sister", type: "casual" },
      { en: "Smells strong.", zh: "好冲。", speaker: "sister", type: "broScared" },
      { en: "Hands stink.", zh: "手臭。", speaker: "sister", type: "broWhine" }
    ]
  },
  {
    id: 14, title: "用刨丝器", category: "kitchen", tags: ["刨丝器","萝卜"], mode: "duo",
    sentences: [
      { en: "Need carrot strips.", zh: "要胡萝卜丝。", speaker: "mom", type: "casual" },
      { en: "How?", zh: "怎么弄？", speaker: "brother", type: "broCurious" },
      { en: "Use the grater.", zh: "用刨丝器。", speaker: "mom", type: "casual" },
      { en: "Hold tight.", zh: "握紧。", speaker: "mom", type: "casual" },
      { en: "Swipe down.", zh: "往下刨。", speaker: "mom", type: "casual" },
      { en: "Mind your knuckles.", zh: "看手指。", speaker: "mom", type: "momWorry" },
      { en: "Fine strips.", zh: "细丝。", speaker: "brother", type: "broExcite" },
      { en: "Keep going.", zh: "继续。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 15, title: "和面", category: "kitchen", tags: ["面粉","和面"], mode: "narrate",
    sentences: [
      { en: "Flour in bowl.", zh: "面粉放盆。", speaker: "mom", type: "casual" },
      { en: "Make a well.", zh: "中间挖窝。", speaker: "mom", type: "casual" },
      { en: "Pour warm water.", zh: "倒温水。", speaker: "mom", type: "casual" },
      { en: "Mix slow.", zh: "慢搅。", speaker: "mom", type: "casual" },
      { en: "Gets sticky.", zh: "粘手。", speaker: "mom", type: "casual" },
      { en: "Knead knead.", zh: "揉揉。", speaker: "mom", type: "casual" },
      { en: "Push and fold.", zh: "推和叠。", speaker: "mom", type: "casual" },
      { en: "Smooth ball.", zh: "光滑面团。", speaker: "mom", type: "casual" },
      { en: "Rest twenty.", zh: "醒二十分钟。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 16, title: "包饺子", category: "kitchen", tags: ["饺子","包"], mode: "duo",
    sentences: [
      { en: "Flatten the skin.", zh: "皮压扁。", speaker: "mom", type: "casual" },
      { en: "Roll it round.", zh: "擀圆。", speaker: "mom", type: "casual" },
      { en: "Put filling in.", zh: "放馅。", speaker: "mom", type: "casual" },
      { en: "Not too much.", zh: "别多。", speaker: "mom", type: "momFirm" },
      { en: "Fold in half.", zh: "对折。", speaker: "mom", type: "casual" },
      { en: "Pinch the edge.", zh: "捏边。", speaker: "mom", type: "casual" },
      { en: "Like this?", zh: "这样？", speaker: "sister", type: "broCurious" },
      { en: "Closer to top.", zh: "靠上点。", speaker: "mom", type: "casual" },
      { en: "Got it.", zh: "懂了。", speaker: "sister", type: "casual" },
      { en: "Like ears.", zh: "像耳朵。", speaker: "brother", type: "broSilly" }
    ]
  },
  {
    id: 17, title: "煮粥", category: "kitchen", tags: ["粥","早餐"], mode: "narrate",
    sentences: [
      { en: "Rinse the rice.", zh: "淘米。", speaker: "mom", type: "casual" },
      { en: "Two cups.", zh: "两杯。", speaker: "mom", type: "casual" },
      { en: "Lots of water.", zh: "多加水。", speaker: "mom", type: "casual" },
      { en: "On the stove.", zh: "上灶。", speaker: "mom", type: "casual" },
      { en: "Bring to boil.", zh: "煮开。", speaker: "mom", type: "casual" },
      { en: "Turn low.", zh: "转小火。", speaker: "mom", type: "casual" },
      { en: "Stir now and then.", zh: "偶尔搅。", speaker: "mom", type: "casual" },
      { en: "Forty minutes.", zh: "四十分钟。", speaker: "mom", type: "casual" },
      { en: "Thick and creamy.", zh: "稠了。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 18, title: "打豆浆", category: "kitchen", tags: ["豆浆","早餐"], mode: "duo",
    sentences: [
      { en: "Soak the beans.", zh: "泡豆。", speaker: "mom", type: "casual" },
      { en: "Overnight.", zh: "一晚上。", speaker: "mom", type: "casual" },
      { en: "Now drain.", zh: "沥水。", speaker: "mom", type: "casual" },
      { en: "Into blender.", zh: "倒豆浆机。", speaker: "mom", type: "casual" },
      { en: "Add water.", zh: "加水。", speaker: "mom", type: "casual" },
      { en: "Press button.", zh: "按键。", speaker: "mom", type: "casual" },
      { en: "Loud!", zh: "好吵！", speaker: "brother", type: "broLoud" },
      { en: "Cover your ears.", zh: "捂耳朵。", speaker: "mom", type: "momSoft" },
      { en: "Twenty minutes.", zh: "二十分钟。", speaker: "mom", type: "casual" },
      { en: "Hot and fresh.", zh: "热乎的。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 19, title: "烤面包", category: "kitchen", tags: ["面包","烤"], mode: "narrate",
    sentences: [
      { en: "Two slices.", zh: "两片。", speaker: "sister", type: "casual" },
      { en: "Into toaster.", zh: "放烤面包机。", speaker: "sister", type: "casual" },
      { en: "Press down.", zh: "按下。", speaker: "sister", type: "casual" },
      { en: "Wait wait.", zh: "等。", speaker: "sister", type: "casual" },
      { en: "Smells warm.", zh: "香了。", speaker: "sister", type: "casual" },
      { en: "Pop!", zh: "弹！", speaker: "sister", type: "broExcite" },
      { en: "Golden brown.", zh: "金黄。", speaker: "sister", type: "casual" },
      { en: "Spread butter.", zh: "抹黄油。", speaker: "sister", type: "casual" },
      { en: "Crunchy.", zh: "嘎嘣脆。", speaker: "sister", type: "broCute" }
    ]
  },
  {
    id: 20, title: "做三明治", category: "kitchen", tags: ["三明治"], mode: "narrate",
    sentences: [
      { en: "Two bread slices.", zh: "两片面包。", speaker: "brother", type: "casual" },
      { en: "Spread mayo.", zh: "抹沙拉酱。", speaker: "brother", type: "casual" },
      { en: "Add lettuce.", zh: "放生菜。", speaker: "brother", type: "casual" },
      { en: "Slice of cheese.", zh: "一片奶酪。", speaker: "brother", type: "casual" },
      { en: "Ham next.", zh: "再火腿。", speaker: "brother", type: "casual" },
      { en: "Tomato slices.", zh: "番茄片。", speaker: "brother", type: "casual" },
      { en: "Top it.", zh: "盖上。", speaker: "brother", type: "casual" },
      { en: "Cut diagonal.", zh: "斜着切。", speaker: "brother", type: "casual" },
      { en: "Triangles!", zh: "三角形！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 21, title: "榨果汁", category: "kitchen", tags: ["果汁","橙子"], mode: "duo",
    sentences: [
      { en: "Pick five oranges.", zh: "拿五个橙子。", speaker: "mom", type: "casual" },
      { en: "Wash them.", zh: "洗了。", speaker: "sister", type: "casual" },
      { en: "Cut in half.", zh: "切两半。", speaker: "mom", type: "casual" },
      { en: "Press on juicer.", zh: "压榨汁器上。", speaker: "mom", type: "casual" },
      { en: "Twist twist.", zh: "拧拧。", speaker: "mom", type: "casual" },
      { en: "Juice everywhere!", zh: "汁到处溅！", speaker: "sister", type: "broLoud" },
      { en: "Mess.", zh: "乱糟糟。", speaker: "mom", type: "momTired" },
      { en: "Strain it.", zh: "过滤。", speaker: "mom", type: "casual" },
      { en: "Pour into cups.", zh: "倒杯里。", speaker: "mom", type: "casual" },
      { en: "Fresh!", zh: "新鲜！", speaker: "sister", type: "broExcite" }
    ]
  },
  {
    id: 22, title: "蒸馒头", category: "kitchen", tags: ["馒头","蒸"], mode: "narrate",
    sentences: [
      { en: "Dough is risen.", zh: "面发好了。", speaker: "mom", type: "casual" },
      { en: "Punch it down.", zh: "排气。", speaker: "mom", type: "casual" },
      { en: "Roll into log.", zh: "搓长条。", speaker: "mom", type: "casual" },
      { en: "Cut six pieces.", zh: "切六块。", speaker: "mom", type: "casual" },
      { en: "Shape them round.", zh: "搓圆。", speaker: "mom", type: "casual" },
      { en: "Rest ten more.", zh: "再醒十分钟。", speaker: "mom", type: "casual" },
      { en: "Into steamer.", zh: "放蒸锅。", speaker: "mom", type: "casual" },
      { en: "Steam twenty.", zh: "蒸二十分钟。", speaker: "mom", type: "casual" },
      { en: "Fluffy!", zh: "好松软！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 23, title: "解冻肉", category: "kitchen", tags: ["解冻","肉"], mode: "narrate",
    sentences: [
      { en: "Frozen hard.", zh: "冻得邦邦硬。", speaker: "mom", type: "casual" },
      { en: "Bowl of water.", zh: "盆里加水。", speaker: "mom", type: "casual" },
      { en: "Drop it in.", zh: "放进去。", speaker: "mom", type: "casual" },
      { en: "Wait an hour.", zh: "等一小时。", speaker: "mom", type: "casual" },
      { en: "Press to check.", zh: "按按看。", speaker: "mom", type: "casual" },
      { en: "Still hard.", zh: "还硬。", speaker: "mom", type: "casual" },
      { en: "Change water.", zh: "换水。", speaker: "mom", type: "casual" },
      { en: "Soft now.", zh: "软了。", speaker: "mom", type: "casual" },
      { en: "Ready.", zh: "可以做了。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 24, title: "调火候", category: "kitchen", tags: ["炒菜","火"], mode: "duo",
    sentences: [
      { en: "Too much smoke!", zh: "好多烟！", speaker: "brother", type: "broLoud" },
      { en: "Too high.", zh: "火太大。", speaker: "mom", type: "rushed" },
      { en: "Turn down.", zh: "调小。", speaker: "mom", type: "rushed" },
      { en: "Like this?", zh: "这样？", speaker: "brother", type: "broCurious" },
      { en: "Lower.", zh: "再小。", speaker: "mom", type: "casual" },
      { en: "There.", zh: "好了。", speaker: "mom", type: "casual" },
      { en: "Now stir.", zh: "现在炒。", speaker: "mom", type: "casual" },
      { en: "Almost burned!", zh: "差点糊！", speaker: "mom", type: "momTired" }
    ]
  },
  {
    id: 25, title: "试咸淡", category: "kitchen", tags: ["调味","盐"], mode: "duo",
    sentences: [
      { en: "Salty enough?", zh: "够咸吗？", speaker: "sister", type: "broCurious" },
      { en: "Tiny taste.", zh: "尝一点。", speaker: "mom", type: "casual" },
      { en: "Blow first.", zh: "先吹吹。", speaker: "mom", type: "momSoft" },
      { en: "Mmm.", zh: "嗯。", speaker: "sister", type: "casual" },
      { en: "Bland.", zh: "淡。", speaker: "sister", type: "casual" },
      { en: "Pinch of salt.", zh: "加点盐。", speaker: "mom", type: "casual" },
      { en: "Try again.", zh: "再尝。", speaker: "mom", type: "casual" },
      { en: "Perfect!", zh: "正好！", speaker: "sister", type: "broExcite" }
    ]
  },
  {
    id: 26, title: "盖锅盖", category: "kitchen", tags: ["盖盖","炖"], mode: "narrate",
    sentences: [
      { en: "Almost boiling.", zh: "快开了。", speaker: "mom", type: "casual" },
      { en: "Grab the lid.", zh: "拿盖子。", speaker: "mom", type: "casual" },
      { en: "Watch the steam.", zh: "小心蒸汽。", speaker: "mom", type: "momWorry" },
      { en: "Lower gently.", zh: "轻轻盖。", speaker: "mom", type: "casual" },
      { en: "Tight fit.", zh: "盖严。", speaker: "mom", type: "casual" },
      { en: "Now wait.", zh: "等着。", speaker: "mom", type: "casual" },
      { en: "Don't peek.", zh: "别开盖。", speaker: "mom", type: "momFirm" }
    ]
  },
  {
    id: 27, title: "撒盐", category: "kitchen", tags: ["盐"], mode: "narrate",
    sentences: [
      { en: "Need salt.", zh: "要盐。", speaker: "mom", type: "casual" },
      { en: "Three fingers.", zh: "三指捏。", speaker: "mom", type: "casual" },
      { en: "A pinch.", zh: "一撮。", speaker: "mom", type: "casual" },
      { en: "Over the food.", zh: "撒上面。", speaker: "mom", type: "casual" },
      { en: "Don't overdo.", zh: "别多。", speaker: "mom", type: "momFirm" },
      { en: "Stir it in.", zh: "拌一拌。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 28, title: "刷锅", category: "kitchen", tags: ["刷锅"], mode: "narrate",
    sentences: [
      { en: "Pan's greasy.", zh: "锅油了。", speaker: "sister", type: "casual" },
      { en: "Soak first.", zh: "先泡。", speaker: "sister", type: "casual" },
      { en: "Hot water.", zh: "热水。", speaker: "sister", type: "casual" },
      { en: "Squirt of soap.", zh: "挤洗洁精。", speaker: "sister", type: "casual" },
      { en: "Scrub hard.", zh: "用力刷。", speaker: "sister", type: "casual" },
      { en: "Stuck bits.", zh: "粘的。", speaker: "sister", type: "broWhine" },
      { en: "Steel scrubber.", zh: "钢丝球。", speaker: "sister", type: "casual" },
      { en: "Better.", zh: "好多了。", speaker: "sister", type: "casual" },
      { en: "Rinse and dry.", zh: "冲干擦干。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 29, title: "擦灶台", category: "kitchen", tags: ["灶台"], mode: "duo",
    sentences: [
      { en: "Look at this mess.", zh: "看这乱的。", speaker: "mom", type: "momTired" },
      { en: "Oil splatter.", zh: "油溅了。", speaker: "sister", type: "casual" },
      { en: "Spray cleaner.", zh: "喷清洁剂。", speaker: "mom", type: "casual" },
      { en: "Wipe with rag.", zh: "抹布擦。", speaker: "mom", type: "casual" },
      { en: "Push grease off.", zh: "把油推走。", speaker: "mom", type: "casual" },
      { en: "Around the burner.", zh: "灶头周围。", speaker: "mom", type: "casual" },
      { en: "Sparkles now.", zh: "亮了。", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 30, title: "倒油", category: "kitchen", tags: ["油"], mode: "narrate",
    sentences: [
      { en: "Need oil.", zh: "要油。", speaker: "mom", type: "casual" },
      { en: "Lift the bottle.", zh: "拿起瓶。", speaker: "mom", type: "casual" },
      { en: "Tilt slow.", zh: "慢慢倒。", speaker: "mom", type: "casual" },
      { en: "Glug glug.", zh: "咕咚咕咚。", speaker: "mom", type: "casual" },
      { en: "That's enough.", zh: "够了。", speaker: "mom", type: "casual" },
      { en: "Stop pouring.", zh: "别倒了。", speaker: "mom", type: "momFirm" },
      { en: "Spread around.", zh: "晃匀。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 31, title: "吃面条", category: "eating", tags: ["面条"], mode: "duo",
    sentences: [
      { en: "Noodles!", zh: "面条！", speaker: "brother", type: "broExcite" },
      { en: "Use chopsticks.", zh: "用筷子。", speaker: "sister", type: "sisBoss" },
      { en: "I can't.", zh: "不会。", speaker: "brother", type: "broWhine" },
      { en: "Like this.", zh: "这样。", speaker: "sister", type: "casual" },
      { en: "Twirl them.", zh: "卷起来。", speaker: "sister", type: "casual" },
      { en: "Slurp slurp!", zh: "吸溜吸溜！", speaker: "brother", type: "broSilly" },
      { en: "Not so loud.", zh: "别响。", speaker: "sister", type: "sisAnnoy" },
      { en: "Fun!", zh: "好玩！", speaker: "brother", type: "broWhine" },
      { en: "Wipe your face.", zh: "擦脸。", speaker: "sister", type: "sisBoss" }
    ]
  },
  {
    id: 32, title: "拆薯片", category: "eating", tags: ["薯片"], mode: "narrate",
    sentences: [
      { en: "Chips!", zh: "薯片！", speaker: "brother", type: "broExcite" },
      { en: "Won't open.", zh: "打不开。", speaker: "brother", type: "broWhine" },
      { en: "Pull both sides.", zh: "两边拉。", speaker: "brother", type: "casual" },
      { en: "Boom!", zh: "嘭！", speaker: "brother", type: "broSilly" },
      { en: "All over floor.", zh: "撒一地。", speaker: "brother", type: "broScared" },
      { en: "Mom's gonna kill me.", zh: "妈要骂死我。", speaker: "brother", type: "broScared" },
      { en: "Pick fast.", zh: "快捡。", speaker: "brother", type: "rushed" },
      { en: "Five-second rule.", zh: "五秒规则。", speaker: "brother", type: "broSilly" }
    ]
  },
  {
    id: 33, title: "喝汤", category: "eating", tags: ["汤"], mode: "duo",
    sentences: [
      { en: "Soup's ready.", zh: "汤好了。", speaker: "mom", type: "momCalling" },
      { en: "Smells nice.", zh: "好香。", speaker: "sister", type: "casual" },
      { en: "Grab a spoon.", zh: "拿勺。", speaker: "mom", type: "casual" },
      { en: "Watch, hot.", zh: "烫。", speaker: "mom", type: "momWorry" },
      { en: "Blow first.", zh: "吹一吹。", speaker: "mom", type: "momSoft" },
      { en: "Slurp.", zh: "嘬。", speaker: "brother", type: "casual" },
      { en: "Don't spill.", zh: "别洒。", speaker: "mom", type: "momFirm" },
      { en: "Tasty.", zh: "好喝。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 34, title: "嗦冰棍", category: "eating", tags: ["冰棍","夏天"], mode: "duo",
    sentences: [
      { en: "Popsicle!", zh: "冰棍！", speaker: "brother", type: "broExcite" },
      { en: "Tear the wrap.", zh: "撕开。", speaker: "brother", type: "casual" },
      { en: "Brain freeze!", zh: "冻脑子！", speaker: "brother", type: "broLoud" },
      { en: "Slow down.", zh: "慢点。", speaker: "sister", type: "sisBoss" },
      { en: "Melting!", zh: "化了！", speaker: "brother", type: "broScared" },
      { en: "Lick faster!", zh: "快舔！", speaker: "sister", type: "sisTease" },
      { en: "On my shirt.", zh: "滴衣服上。", speaker: "brother", type: "broWhine" },
      { en: "Told ya.", zh: "我说了吧。", speaker: "sister", type: "sisTease" }
    ]
  },
  {
    id: 35, title: "剥橘子", category: "eating", tags: ["橘子"], mode: "narrate",
    sentences: [
      { en: "An orange.", zh: "一个橘子。", speaker: "sister", type: "casual" },
      { en: "Find the top.", zh: "找顶。", speaker: "sister", type: "casual" },
      { en: "Press in.", zh: "按进去。", speaker: "sister", type: "casual" },
      { en: "Peel opens.", zh: "皮开了。", speaker: "sister", type: "casual" },
      { en: "Pull apart.", zh: "掰开。", speaker: "sister", type: "casual" },
      { en: "Pop one in.", zh: "塞一瓣。", speaker: "sister", type: "casual" },
      { en: "So sweet.", zh: "好甜。", speaker: "sister", type: "broCute" }
    ]
  },
  {
    id: 36, title: "吃饺子", category: "eating", tags: ["饺子"], mode: "duo",
    sentences: [
      { en: "Dumplings!", zh: "饺子！", speaker: "brother", type: "broExcite" },
      { en: "Dip in vinegar.", zh: "蘸醋。", speaker: "sister", type: "casual" },
      { en: "Hot inside.", zh: "里面烫。", speaker: "mom", type: "momWorry" },
      { en: "Bite small.", zh: "小口咬。", speaker: "mom", type: "momSoft" },
      { en: "Ouch hot!", zh: "烫嘴！", speaker: "brother", type: "broLoud" },
      { en: "Told you.", zh: "说了吧。", speaker: "mom", type: "momTired" },
      { en: "Suck cool air.", zh: "吸凉气。", speaker: "sister", type: "sisTease" },
      { en: "Yum.", zh: "真香。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 37, title: "吃西瓜", category: "eating", tags: ["西瓜"], mode: "duo",
    sentences: [
      { en: "Big slice.", zh: "大块。", speaker: "brother", type: "broExcite" },
      { en: "Spit the seeds.", zh: "吐籽。", speaker: "sister", type: "casual" },
      { en: "Into the bowl.", zh: "吐碗里。", speaker: "sister", type: "sisBoss" },
      { en: "I got one!", zh: "吐出来了！", speaker: "brother", type: "broProud" },
      { en: "On the floor.", zh: "掉地上了。", speaker: "sister", type: "sisAnnoy" },
      { en: "Oops.", zh: "哎呀。", speaker: "brother", type: "broScared" },
      { en: "Juice on chin.", zh: "下巴是汁。", speaker: "sister", type: "sisTease" },
      { en: "So good.", zh: "太爽。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 38, title: "啃玉米", category: "eating", tags: ["玉米"], mode: "narrate",
    sentences: [
      { en: "Steaming corn.", zh: "热玉米。", speaker: "brother", type: "casual" },
      { en: "Hot hot.", zh: "烫烫烫。", speaker: "brother", type: "broLoud" },
      { en: "Both hands.", zh: "两手拿。", speaker: "brother", type: "casual" },
      { en: "Start at end.", zh: "从头啃。", speaker: "brother", type: "casual" },
      { en: "Bite a row.", zh: "啃一排。", speaker: "brother", type: "casual" },
      { en: "Move along.", zh: "往下啃。", speaker: "brother", type: "casual" },
      { en: "Stuck in teeth.", zh: "塞牙了。", speaker: "brother", type: "broWhine" },
      { en: "Juicy!", zh: "好甜！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 39, title: "嗑瓜子", category: "eating", tags: ["瓜子"], mode: "duo",
    sentences: [
      { en: "Bag of seeds.", zh: "一袋瓜子。", speaker: "dad", type: "casual" },
      { en: "Show me how.", zh: "教我。", speaker: "brother", type: "broCurious" },
      { en: "Tip with teeth.", zh: "牙咬尖。", speaker: "dad", type: "casual" },
      { en: "Crack it.", zh: "咬开。", speaker: "dad", type: "casual" },
      { en: "Tongue gets meat.", zh: "舌头取仁。", speaker: "dad", type: "casual" },
      { en: "Spit the shell.", zh: "吐壳。", speaker: "dad", type: "casual" },
      { en: "I did it!", zh: "会了！", speaker: "brother", type: "broExcite" },
      { en: "Slow eater.", zh: "慢慢嗑。", speaker: "dad", type: "casual" },
      { en: "Hours of fun.", zh: "嗑半天。", speaker: "brother", type: "broSilly" }
    ]
  },
  {
    id: 40, title: "啃苹果", category: "eating", tags: ["苹果"], mode: "duo",
    sentences: [
      { en: "Big red apple.", zh: "大红苹果。", speaker: "brother", type: "broExcite" },
      { en: "Wash it first.", zh: "先洗。", speaker: "mom", type: "casual" },
      { en: "Wipe on shirt.", zh: "衣服擦擦。", speaker: "brother", type: "broSilly" },
      { en: "Use napkin!", zh: "用纸！", speaker: "mom", type: "momTired" },
      { en: "Big bite.", zh: "大口咬。", speaker: "brother", type: "casual" },
      { en: "Crunch!", zh: "咔嚓！", speaker: "brother", type: "broLoud" },
      { en: "Sweet.", zh: "甜。", speaker: "brother", type: "broCute" },
      { en: "Eat the core.", zh: "啃到芯。", speaker: "brother", type: "casual" },
      { en: "Save the seeds?", zh: "留籽？", speaker: "brother", type: "broCurious" },
      { en: "No, toss.", zh: "扔了。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 41, title: "吃巧克力", category: "eating", tags: ["巧克力"], mode: "duo",
    sentences: [
      { en: "One piece only.", zh: "就一块。", speaker: "mom", type: "momFirm" },
      { en: "Just one?", zh: "就一块？", speaker: "brother", type: "broWhine" },
      { en: "Sugar's bad.", zh: "糖不好。", speaker: "mom", type: "casual" },
      { en: "Aw...", zh: "唉...", speaker: "brother", type: "broPout" },
      { en: "Tear the wrap.", zh: "撕开。", speaker: "brother", type: "casual" },
      { en: "Smells amazing.", zh: "好香。", speaker: "brother", type: "broCute" },
      { en: "Slow bite.", zh: "慢咬。", speaker: "brother", type: "casual" },
      { en: "Melts in mouth.", zh: "化嘴里。", speaker: "brother", type: "broCute" },
      { en: "Heaven.", zh: "天堂。", speaker: "brother", type: "broSilly" }
    ]
  },
  {
    id: 42, title: "喝牛奶", category: "eating", tags: ["牛奶"], mode: "duo",
    sentences: [
      { en: "Glass of milk.", zh: "一杯奶。", speaker: "mom", type: "casual" },
      { en: "Cold or warm?", zh: "凉的热的？", speaker: "brother", type: "broCurious" },
      { en: "Warm please.", zh: "热的。", speaker: "brother", type: "broCute" },
      { en: "Microwave it.", zh: "微波炉热。", speaker: "mom", type: "casual" },
      { en: "Stir first.", zh: "先搅。", speaker: "mom", type: "casual" },
      { en: "Sip slow.", zh: "慢喝。", speaker: "mom", type: "momSoft" },
      { en: "Milk mustache!", zh: "牛奶胡子！", speaker: "sister", type: "sisTease" },
      { en: "Where?", zh: "在哪？", speaker: "brother", type: "broCurious" },
      { en: "Look mirror.", zh: "照镜子。", speaker: "sister", type: "sisSweet" }
    ]
  },
  {
    id: 43, title: "啃排骨", category: "eating", tags: ["排骨"], mode: "duo",
    sentences: [
      { en: "Ribs!", zh: "排骨！", speaker: "brother", type: "broExcite" },
      { en: "Pick up with hands.", zh: "手拿。", speaker: "mom", type: "casual" },
      { en: "Use napkin.", zh: "用纸。", speaker: "mom", type: "momSoft" },
      { en: "Bite the meat.", zh: "咬肉。", speaker: "brother", type: "casual" },
      { en: "Suck the bone.", zh: "嗦骨头。", speaker: "brother", type: "broSilly" },
      { en: "Greasy hands!", zh: "手油了！", speaker: "brother", type: "broLoud" },
      { en: "Wipe wipe.", zh: "擦擦。", speaker: "mom", type: "casual" },
      { en: "Don't lick fingers.", zh: "别舔手。", speaker: "mom", type: "momFirm" },
      { en: "But it's good!", zh: "可是好吃！", speaker: "brother", type: "broWhine" }
    ]
  },
  {
    id: 44, title: "吃米饭", category: "eating", tags: ["米饭"], mode: "duo",
    sentences: [
      { en: "Rice and veggies.", zh: "米饭青菜。", speaker: "mom", type: "casual" },
      { en: "Hold the bowl.", zh: "端碗。", speaker: "mom", type: "momFirm" },
      { en: "Both hands.", zh: "两手。", speaker: "mom", type: "casual" },
      { en: "Chopsticks up.", zh: "拿筷子。", speaker: "mom", type: "casual" },
      { en: "Push it in.", zh: "扒一口。", speaker: "brother", type: "casual" },
      { en: "Chew well.", zh: "嚼一嚼。", speaker: "mom", type: "momSoft" },
      { en: "Don't talk.", zh: "别说话。", speaker: "mom", type: "momFirm" },
      { en: "Finish it.", zh: "吃完。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 45, title: "舔棒棒糖", category: "eating", tags: ["糖"], mode: "narrate",
    sentences: [
      { en: "Lollipop!", zh: "棒棒糖！", speaker: "brother", type: "broExcite" },
      { en: "Unwrap it.", zh: "拆开。", speaker: "brother", type: "casual" },
      { en: "Save the paper.", zh: "纸留着。", speaker: "brother", type: "casual" },
      { en: "First lick.", zh: "舔一下。", speaker: "brother", type: "broCute" },
      { en: "Round and round.", zh: "转着舔。", speaker: "brother", type: "casual" },
      { en: "Sweet sweet.", zh: "甜甜的。", speaker: "brother", type: "broCute" },
      { en: "Lasts forever.", zh: "舔半天。", speaker: "brother", type: "broSilly" },
      { en: "Tongue's blue!", zh: "舌头蓝了！", speaker: "brother", type: "broLoud" }
    ]
  },
  {
    id: 46, title: "夹菜", category: "eating", tags: ["筷子"], mode: "duo",
    sentences: [
      { en: "I want that.", zh: "我要那个。", speaker: "brother", type: "broWhine" },
      { en: "Use chopsticks.", zh: "用筷子。", speaker: "mom", type: "casual" },
      { en: "Can't reach.", zh: "够不着。", speaker: "brother", type: "broWhine" },
      { en: "Stand up.", zh: "站起来。", speaker: "mom", type: "casual" },
      { en: "Slips out!", zh: "夹掉了！", speaker: "brother", type: "broLoud" },
      { en: "Try again.", zh: "再来。", speaker: "mom", type: "momSoft" },
      { en: "Got it!", zh: "夹到了！", speaker: "brother", type: "broExcite" },
      { en: "Mouth open.", zh: "张嘴。", speaker: "brother", type: "casual" },
      { en: "Nice.", zh: "好棒。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 47, title: "倒水喝", category: "eating", tags: ["水"], mode: "narrate",
    sentences: [
      { en: "Thirsty.", zh: "渴。", speaker: "brother", type: "casual" },
      { en: "Find a cup.", zh: "找杯子。", speaker: "brother", type: "casual" },
      { en: "Press dispenser.", zh: "按饮水机。", speaker: "brother", type: "casual" },
      { en: "Cold or warm?", zh: "凉的热的？", speaker: "brother", type: "casual" },
      { en: "Warm.", zh: "温的。", speaker: "brother", type: "casual" },
      { en: "Gulp gulp.", zh: "咕咚咕咚。", speaker: "brother", type: "casual" },
      { en: "Better.", zh: "舒服了。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 48, title: "用吸管", category: "eating", tags: ["吸管","奶茶"], mode: "duo",
    sentences: [
      { en: "Bubble tea!", zh: "奶茶！", speaker: "sister", type: "broExcite" },
      { en: "Stab the lid.", zh: "插盖子。", speaker: "sister", type: "casual" },
      { en: "Hard!", zh: "好难！", speaker: "brother", type: "broWhine" },
      { en: "Twist and push.", zh: "拧着插。", speaker: "sister", type: "casual" },
      { en: "Pop!", zh: "通了！", speaker: "brother", type: "broExcite" },
      { en: "Suck the pearls.", zh: "吸珍珠。", speaker: "sister", type: "casual" },
      { en: "Chewy.", zh: "Q弹。", speaker: "brother", type: "broCute" },
      { en: "So good.", zh: "太好喝。", speaker: "sister", type: "broCute" }
    ]
  },
  {
    id: 49, title: "吃太饱", category: "eating", tags: ["撑"], mode: "duo",
    sentences: [
      { en: "Stuffed.", zh: "撑死了。", speaker: "brother", type: "casual" },
      { en: "More?", zh: "再来点？", speaker: "mom", type: "momTease" },
      { en: "Can't.", zh: "吃不下。", speaker: "brother", type: "broWhine" },
      { en: "Pat your belly.", zh: "拍肚子。", speaker: "sister", type: "sisTease" },
      { en: "Round like a ball.", zh: "圆滚滚。", speaker: "sister", type: "sisTease" },
      { en: "Ugh, full.", zh: "唉，撑。", speaker: "brother", type: "broWhine" },
      { en: "Don't move.", zh: "别动。", speaker: "mom", type: "momSoft" },
      { en: "Just digest.", zh: "消化一下。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 50, title: "挑食", category: "eating", tags: ["挑食"], mode: "duo",
    sentences: [
      { en: "Don't want it.", zh: "不吃。", speaker: "brother", type: "broPout" },
      { en: "Try one bite.", zh: "尝一口。", speaker: "mom", type: "momSoft" },
      { en: "Yucky.", zh: "恶心。", speaker: "brother", type: "broScared" },
      { en: "Just try.", zh: "就一口。", speaker: "mom", type: "momFirm" },
      { en: "Eww.", zh: "咦。", speaker: "brother", type: "broWhine" },
      { en: "See? Not bad.", zh: "还行吧？", speaker: "mom", type: "momTease" },
      { en: "Hmm.", zh: "嗯...", speaker: "brother", type: "broCurious" },
      { en: "One more bite.", zh: "再一口。", speaker: "mom", type: "casual" },
      { en: "Okay.", zh: "好吧。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 51, title: "穿羽绒服", category: "clothing", tags: ["羽绒服","冬天"], mode: "duo",
    sentences: [
      { en: "Cold out there.", zh: "外面冷。", speaker: "mom", type: "casual" },
      { en: "Big coat on.", zh: "穿大衣。", speaker: "mom", type: "momCalling" },
      { en: "Arms in.", zh: "胳膊伸。", speaker: "mom", type: "casual" },
      { en: "Stuck!", zh: "卡住！", speaker: "brother", type: "broLoud" },
      { en: "Wiggle them.", zh: "扭扭。", speaker: "mom", type: "momSoft" },
      { en: "Zip up.", zh: "拉拉链。", speaker: "mom", type: "casual" },
      { en: "Up to chin.", zh: "拉到下巴。", speaker: "mom", type: "casual" },
      { en: "Hood too.", zh: "戴帽。", speaker: "mom", type: "momFirm" },
      { en: "Like a bear.", zh: "像只熊。", speaker: "sister", type: "sisTease" }
    ]
  },
  {
    id: 52, title: "系鞋带", category: "clothing", tags: ["鞋带"], mode: "duo",
    sentences: [
      { en: "Teach me.", zh: "教我。", speaker: "brother", type: "broCute" },
      { en: "Watch close.", zh: "看仔细。", speaker: "sister", type: "sisBoss" },
      { en: "Cross 'em.", zh: "交叉。", speaker: "sister", type: "casual" },
      { en: "One under.", zh: "一根穿。", speaker: "sister", type: "casual" },
      { en: "Pull tight.", zh: "拉紧。", speaker: "sister", type: "casual" },
      { en: "Make a loop.", zh: "做个圈。", speaker: "sister", type: "casual" },
      { en: "Around and through.", zh: "绕一圈。", speaker: "sister", type: "casual" },
      { en: "Pull pull.", zh: "拉拉。", speaker: "sister", type: "casual" },
      { en: "Bunny ears!", zh: "兔耳朵！", speaker: "brother", type: "broExcite" },
      { en: "Got it!", zh: "学会了！", speaker: "brother", type: "broProud" }
    ]
  },
  {
    id: 53, title: "叠衣服", category: "clothing", tags: ["叠衣"], mode: "narrate",
    sentences: [
      { en: "Pile of laundry.", zh: "一堆衣服。", speaker: "sister", type: "casual" },
      { en: "T-shirt first.", zh: "先 T 恤。", speaker: "sister", type: "casual" },
      { en: "Lay it flat.", zh: "铺平。", speaker: "sister", type: "casual" },
      { en: "Smooth out.", zh: "抹平。", speaker: "sister", type: "casual" },
      { en: "Fold sleeves in.", zh: "袖子折进。", speaker: "sister", type: "casual" },
      { en: "Bottom up.", zh: "下往上。", speaker: "sister", type: "casual" },
      { en: "Half again.", zh: "再对折。", speaker: "sister", type: "casual" },
      { en: "Neat stack.", zh: "码整齐。", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 54, title: "穿袜子", category: "clothing", tags: ["袜子"], mode: "duo",
    sentences: [
      { en: "Where's the other?", zh: "另一只呢？", speaker: "brother", type: "broCurious" },
      { en: "Under bed?", zh: "床底下？", speaker: "mom", type: "momTease" },
      { en: "Found it!", zh: "找到了！", speaker: "brother", type: "broExcite" },
      { en: "Bunch it up.", zh: "卷起来。", speaker: "mom", type: "casual" },
      { en: "Toe in first.", zh: "脚尖先。", speaker: "mom", type: "casual" },
      { en: "Pull up.", zh: "往上拉。", speaker: "mom", type: "casual" },
      { en: "Heel right?", zh: "脚跟对？", speaker: "mom", type: "casual" },
      { en: "Inside out!", zh: "穿反了！", speaker: "sister", type: "sisTease" },
      { en: "Aw man.", zh: "唉。", speaker: "brother", type: "broWhine" }
    ]
  },
  {
    id: 55, title: "扣扣子", category: "clothing", tags: ["扣子"], mode: "duo",
    sentences: [
      { en: "Hard buttons.", zh: "扣子难。", speaker: "brother", type: "broWhine" },
      { en: "Start from bottom.", zh: "从下往上。", speaker: "mom", type: "casual" },
      { en: "Match them up.", zh: "对齐。", speaker: "mom", type: "casual" },
      { en: "Push through.", zh: "推进去。", speaker: "mom", type: "casual" },
      { en: "Pinch and pull.", zh: "捏住拉。", speaker: "mom", type: "casual" },
      { en: "Next one.", zh: "下一颗。", speaker: "mom", type: "casual" },
      { en: "All done.", zh: "扣完了。", speaker: "mom", type: "casual" },
      { en: "Off by one!", zh: "错了一颗！", speaker: "sister", type: "sisTease" },
      { en: "Ugh.", zh: "唉。", speaker: "brother", type: "broAnnoy" }
    ]
  },
  {
    id: 56, title: "拉拉链", category: "clothing", tags: ["拉链"], mode: "duo",
    sentences: [
      { en: "Zip stuck.", zh: "拉链卡了。", speaker: "brother", type: "broWhine" },
      { en: "Lemme see.", zh: "我看看。", speaker: "sister", type: "sisCalm" },
      { en: "Cloth caught.", zh: "夹布了。", speaker: "sister", type: "casual" },
      { en: "Pull down.", zh: "往下拉。", speaker: "sister", type: "casual" },
      { en: "Wiggle it.", zh: "晃一晃。", speaker: "sister", type: "casual" },
      { en: "Pull out cloth.", zh: "把布拉出。", speaker: "sister", type: "casual" },
      { en: "Try again.", zh: "再拉。", speaker: "sister", type: "casual" },
      { en: "Smooth!", zh: "顺了！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 57, title: "戴围巾", category: "clothing", tags: ["围巾"], mode: "duo",
    sentences: [
      { en: "Scarf time.", zh: "戴围巾。", speaker: "mom", type: "casual" },
      { en: "Around the neck.", zh: "绕脖子。", speaker: "mom", type: "casual" },
      { en: "Once around.", zh: "绕一圈。", speaker: "mom", type: "casual" },
      { en: "Tuck the ends.", zh: "把头塞进。", speaker: "mom", type: "casual" },
      { en: "Too tight!", zh: "太紧！", speaker: "brother", type: "broWhine" },
      { en: "Loosen.", zh: "松点。", speaker: "mom", type: "casual" },
      { en: "Better?", zh: "好点？", speaker: "mom", type: "momSoft" },
      { en: "Cozy.", zh: "暖和。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 58, title: "戴口罩", category: "clothing", tags: ["口罩"], mode: "narrate",
    sentences: [
      { en: "Grab a mask.", zh: "拿口罩。", speaker: "sister", type: "casual" },
      { en: "Metal strip up.", zh: "金属条朝上。", speaker: "sister", type: "casual" },
      { en: "Hook ears.", zh: "挂耳朵。", speaker: "sister", type: "casual" },
      { en: "Both sides.", zh: "两边都挂。", speaker: "sister", type: "casual" },
      { en: "Pinch the nose.", zh: "捏鼻子。", speaker: "sister", type: "casual" },
      { en: "Pull down chin.", zh: "拉到下巴。", speaker: "sister", type: "casual" },
      { en: "Cover everything.", zh: "都遮住。", speaker: "sister", type: "casual" },
      { en: "Ready out.", zh: "可以出门。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 59, title: "穿校服", category: "clothing", tags: ["校服"], mode: "duo",
    sentences: [
      { en: "School uniform.", zh: "校服。", speaker: "mom", type: "casual" },
      { en: "Boring.", zh: "无聊。", speaker: "sister", type: "sisAnnoy" },
      { en: "Have to wear it.", zh: "得穿。", speaker: "mom", type: "casual" },
      { en: "White shirt first.", zh: "先白衬衫。", speaker: "mom", type: "casual" },
      { en: "Tuck it in.", zh: "塞进去。", speaker: "mom", type: "momFirm" },
      { en: "Pants up.", zh: "提裤子。", speaker: "mom", type: "casual" },
      { en: "Red scarf.", zh: "红领巾。", speaker: "mom", type: "casual" },
      { en: "Where's mine?", zh: "我的呢？", speaker: "brother", type: "broCurious" },
      { en: "Backpack pouch.", zh: "书包侧袋。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 60, title: "换睡衣", category: "clothing", tags: ["睡衣"], mode: "duo",
    sentences: [
      { en: "Bedtime.", zh: "睡觉了。", speaker: "mom", type: "momCalling" },
      { en: "Change clothes.", zh: "换睡衣。", speaker: "mom", type: "casual" },
      { en: "Pull shirt off.", zh: "脱上衣。", speaker: "brother", type: "casual" },
      { en: "Pants down.", zh: "裤子脱了。", speaker: "brother", type: "casual" },
      { en: "Pajama top.", zh: "睡衣上衣。", speaker: "brother", type: "casual" },
      { en: "Pajama bottoms.", zh: "睡裤。", speaker: "brother", type: "casual" },
      { en: "Hair up too.", zh: "头发扎起。", speaker: "mom", type: "casual" },
      { en: "Cozy.", zh: "舒服。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 61, title: "找鞋", category: "clothing", tags: ["鞋"], mode: "duo",
    sentences: [
      { en: "Where's my shoe?", zh: "我鞋呢？", speaker: "brother", type: "broWhine" },
      { en: "Under bed?", zh: "床底？", speaker: "mom", type: "casual" },
      { en: "Nope.", zh: "没有。", speaker: "brother", type: "casual" },
      { en: "Behind sofa?", zh: "沙发后？", speaker: "mom", type: "casual" },
      { en: "Looking.", zh: "找着。", speaker: "brother", type: "casual" },
      { en: "Found one!", zh: "找到一只！", speaker: "brother", type: "broExcite" },
      { en: "Where's other?", zh: "另一只？", speaker: "brother", type: "broWhine" },
      { en: "Look harder.", zh: "好好找。", speaker: "mom", type: "momTired" },
      { en: "By the door!", zh: "门口！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 62, title: "穿裙子", category: "clothing", tags: ["裙子"], mode: "narrate",
    sentences: [
      { en: "Pretty dress.", zh: "漂亮裙子。", speaker: "sister", type: "broExcite" },
      { en: "Step in.", zh: "踩进去。", speaker: "sister", type: "casual" },
      { en: "Pull up.", zh: "提起来。", speaker: "sister", type: "casual" },
      { en: "Zip in back.", zh: "后面拉链。", speaker: "sister", type: "casual" },
      { en: "Twirl!", zh: "转一圈！", speaker: "sister", type: "broExcite" },
      { en: "Spinning!", zh: "转转转！", speaker: "sister", type: "broSilly" },
      { en: "Like a princess.", zh: "像公主。", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 63, title: "戴帽子", category: "clothing", tags: ["帽子"], mode: "narrate",
    sentences: [
      { en: "Sunny day.", zh: "太阳大。", speaker: "brother", type: "casual" },
      { en: "Need a hat.", zh: "戴帽子。", speaker: "brother", type: "casual" },
      { en: "Pull it on.", zh: "扣上。", speaker: "brother", type: "casual" },
      { en: "Brim forward.", zh: "帽檐朝前。", speaker: "brother", type: "casual" },
      { en: "Hair in eyes.", zh: "头发挡眼。", speaker: "brother", type: "broWhine" },
      { en: "Push it back.", zh: "拨回去。", speaker: "brother", type: "casual" },
      { en: "Looks cool.", zh: "酷酷的。", speaker: "brother", type: "broProud" }
    ]
  },
  {
    id: 64, title: "卷袖子", category: "clothing", tags: ["袖子"], mode: "narrate",
    sentences: [
      { en: "Long sleeves.", zh: "袖子长。", speaker: "sister", type: "casual" },
      { en: "Roll up.", zh: "卷起来。", speaker: "sister", type: "casual" },
      { en: "Once, twice.", zh: "一卷两卷。", speaker: "sister", type: "casual" },
      { en: "To the elbow.", zh: "到手肘。", speaker: "sister", type: "casual" },
      { en: "Neat fold.", zh: "卷整齐。", speaker: "sister", type: "casual" },
      { en: "Same on other.", zh: "另一只也卷。", speaker: "sister", type: "casual" },
      { en: "Ready to work.", zh: "可以干活。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 65, title: "戴手套", category: "clothing", tags: ["手套"], mode: "duo",
    sentences: [
      { en: "Hands freezing.", zh: "手冻僵。", speaker: "brother", type: "broWhine" },
      { en: "Gloves on.", zh: "戴手套。", speaker: "mom", type: "casual" },
      { en: "Where?", zh: "在哪？", speaker: "brother", type: "broCurious" },
      { en: "Coat pocket.", zh: "外套口袋。", speaker: "mom", type: "casual" },
      { en: "Five fingers.", zh: "五个手指。", speaker: "mom", type: "casual" },
      { en: "Thumb here.", zh: "拇指这里。", speaker: "mom", type: "casual" },
      { en: "Pull tight.", zh: "拉紧。", speaker: "mom", type: "casual" },
      { en: "Warm now.", zh: "暖和了。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 66, title: "穿雨衣", category: "clothing", tags: ["雨衣"], mode: "narrate",
    sentences: [
      { en: "Rainy day.", zh: "下雨。", speaker: "sister", type: "casual" },
      { en: "Get raincoat.", zh: "拿雨衣。", speaker: "sister", type: "casual" },
      { en: "Slip arms in.", zh: "胳膊穿。", speaker: "sister", type: "casual" },
      { en: "Snap buttons.", zh: "按扣子。", speaker: "sister", type: "casual" },
      { en: "Hood up.", zh: "戴帽。", speaker: "sister", type: "casual" },
      { en: "Tie under chin.", zh: "下巴系紧。", speaker: "sister", type: "casual" },
      { en: "Bright yellow!", zh: "亮黄色！", speaker: "sister", type: "broExcite" },
      { en: "Splash time.", zh: "踩水去。", speaker: "sister", type: "broSilly" }
    ]
  },
  {
    id: 67, title: "穿雪地靴", category: "clothing", tags: ["雪地靴"], mode: "narrate",
    sentences: [
      { en: "Big boots.", zh: "大靴子。", speaker: "brother", type: "casual" },
      { en: "Sit on floor.", zh: "坐地上。", speaker: "brother", type: "casual" },
      { en: "Foot in.", zh: "脚伸进。", speaker: "brother", type: "casual" },
      { en: "Push, push.", zh: "塞塞。", speaker: "brother", type: "casual" },
      { en: "Heel down.", zh: "脚跟到底。", speaker: "brother", type: "casual" },
      { en: "Pull velcro.", zh: "拉魔术贴。", speaker: "brother", type: "casual" },
      { en: "Press tight.", zh: "按紧。", speaker: "brother", type: "casual" },
      { en: "Stomp!", zh: "踏一脚！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 68, title: "解领带", category: "clothing", tags: ["领带"], mode: "duo",
    sentences: [
      { en: "Tie's too tight.", zh: "领带紧。", speaker: "brother", type: "broWhine" },
      { en: "Pull the knot.", zh: "拉结。", speaker: "sister", type: "casual" },
      { en: "Loosen down.", zh: "松一下。", speaker: "sister", type: "casual" },
      { en: "Up over head.", zh: "套头上。", speaker: "sister", type: "casual" },
      { en: "Off!", zh: "脱掉！", speaker: "brother", type: "broExcite" },
      { en: "Hang it up.", zh: "挂起来。", speaker: "sister", type: "sisBoss" },
      { en: "Don't lose it.", zh: "别弄丢。", speaker: "sister", type: "sisBoss" }
    ]
  },
  {
    id: 69, title: "整理书包", category: "clothing", tags: ["书包"], mode: "duo",
    sentences: [
      { en: "Pack tomorrow's.", zh: "收明天的。", speaker: "mom", type: "casual" },
      { en: "Math book.", zh: "数学书。", speaker: "sister", type: "casual" },
      { en: "Check.", zh: "有了。", speaker: "sister", type: "casual" },
      { en: "Pencil case.", zh: "笔袋。", speaker: "sister", type: "casual" },
      { en: "Check.", zh: "有了。", speaker: "sister", type: "casual" },
      { en: "Notebook.", zh: "本子。", speaker: "sister", type: "casual" },
      { en: "Hmm, where?", zh: "嗯，在哪？", speaker: "sister", type: "broCurious" },
      { en: "On the desk.", zh: "桌上。", speaker: "mom", type: "casual" },
      { en: "All set.", zh: "齐了。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 70, title: "翻箱找衣", category: "clothing", tags: ["衣柜"], mode: "duo",
    sentences: [
      { en: "What to wear?", zh: "穿啥？", speaker: "sister", type: "broCurious" },
      { en: "Open the closet.", zh: "开衣柜。", speaker: "sister", type: "casual" },
      { en: "So many clothes!", zh: "好多衣服！", speaker: "sister", type: "broExcite" },
      { en: "Nothing fits!", zh: "都不合适！", speaker: "sister", type: "sisWhine" },
      { en: "Liar.", zh: "撒谎。", speaker: "brother", type: "broSilly" },
      { en: "This one?", zh: "这件？", speaker: "sister", type: "broCurious" },
      { en: "Too dressy.", zh: "太正式。", speaker: "sister", type: "casual" },
      { en: "T-shirt then.", zh: "T 恤好了。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 71, title: "梳头", category: "clothing", tags: ["头发"], mode: "duo",
    sentences: [
      { en: "Hair's a mess.", zh: "头发乱。", speaker: "mom", type: "casual" },
      { en: "Sit still.", zh: "坐好。", speaker: "mom", type: "momFirm" },
      { en: "Spray water.", zh: "喷点水。", speaker: "mom", type: "casual" },
      { en: "Comb gently.", zh: "轻轻梳。", speaker: "mom", type: "momSoft" },
      { en: "Ow, knot!", zh: "哎，结！", speaker: "sister", type: "broCry" },
      { en: "Hold the top.", zh: "压发根。", speaker: "mom", type: "momSoft" },
      { en: "Comb down.", zh: "往下梳。", speaker: "mom", type: "casual" },
      { en: "Smooth now.", zh: "顺了。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 72, title: "扎辫子", category: "clothing", tags: ["辫子"], mode: "duo",
    sentences: [
      { en: "Make a braid.", zh: "扎辫子。", speaker: "sister", type: "broCute" },
      { en: "Comb back.", zh: "梳后面。", speaker: "mom", type: "casual" },
      { en: "Split three parts.", zh: "分三股。", speaker: "mom", type: "casual" },
      { en: "Left over middle.", zh: "左过中间。", speaker: "mom", type: "casual" },
      { en: "Right over middle.", zh: "右过中间。", speaker: "mom", type: "casual" },
      { en: "Keep going.", zh: "一直编。", speaker: "mom", type: "casual" },
      { en: "Tight!", zh: "紧！", speaker: "sister", type: "broWhine" },
      { en: "Tie it off.", zh: "扎起来。", speaker: "mom", type: "casual" },
      { en: "Pretty.", zh: "好看。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 73, title: "剪指甲", category: "clothing", tags: ["指甲"], mode: "duo",
    sentences: [
      { en: "Nails too long.", zh: "指甲长。", speaker: "mom", type: "casual" },
      { en: "Sit still.", zh: "坐好。", speaker: "mom", type: "momFirm" },
      { en: "Don't move!", zh: "别动！", speaker: "mom", type: "momWorry" },
      { en: "Will it hurt?", zh: "疼吗？", speaker: "brother", type: "broScared" },
      { en: "No, just nails.", zh: "不疼。", speaker: "mom", type: "momSoft" },
      { en: "Snip.", zh: "咔嚓。", speaker: "mom", type: "casual" },
      { en: "Another finger.", zh: "下一个。", speaker: "mom", type: "casual" },
      { en: "Almost done.", zh: "快好。", speaker: "mom", type: "casual" },
      { en: "All clean.", zh: "干净了。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 74, title: "戴眼镜", category: "clothing", tags: ["眼镜"], mode: "narrate",
    sentences: [
      { en: "Where're my glasses?", zh: "眼镜呢？", speaker: "sister", type: "broCurious" },
      { en: "On the table.", zh: "桌上。", speaker: "sister", type: "casual" },
      { en: "Wipe lens first.", zh: "先擦镜片。", speaker: "sister", type: "casual" },
      { en: "Cloth corner.", zh: "用布角。", speaker: "sister", type: "casual" },
      { en: "Open temples.", zh: "打开腿。", speaker: "sister", type: "casual" },
      { en: "Slide on ears.", zh: "挂耳朵。", speaker: "sister", type: "casual" },
      { en: "Push up nose.", zh: "推鼻梁。", speaker: "sister", type: "casual" },
      { en: "Clear now.", zh: "清楚了。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 75, title: "脱外套", category: "clothing", tags: ["外套"], mode: "narrate",
    sentences: [
      { en: "Inside, warm.", zh: "屋里暖。", speaker: "brother", type: "casual" },
      { en: "Coat off.", zh: "脱外套。", speaker: "brother", type: "casual" },
      { en: "Unzip first.", zh: "先拉开。", speaker: "brother", type: "casual" },
      { en: "Shrug it off.", zh: "甩下来。", speaker: "brother", type: "casual" },
      { en: "Sleeves out.", zh: "袖子出来。", speaker: "brother", type: "casual" },
      { en: "Hang on hook.", zh: "挂钩上。", speaker: "brother", type: "casual" },
      { en: "Don't drop it.", zh: "别掉地上。", speaker: "mom", type: "momFirm" }
    ]
  },
  {
    id: 76, title: "刷牙", category: "bathroom", tags: ["刷牙"], mode: "narrate",
    sentences: [
      { en: "Brush time.", zh: "刷牙啦。", speaker: "brother", type: "casual" },
      { en: "Grab the brush.", zh: "拿牙刷。", speaker: "brother", type: "casual" },
      { en: "Wet it.", zh: "弄湿。", speaker: "brother", type: "casual" },
      { en: "Pea-size paste.", zh: "豆子大牙膏。", speaker: "brother", type: "casual" },
      { en: "Front teeth.", zh: "前牙。", speaker: "brother", type: "casual" },
      { en: "Back teeth.", zh: "后牙。", speaker: "brother", type: "casual" },
      { en: "Tongue too.", zh: "舌头也刷。", speaker: "brother", type: "casual" },
      { en: "Spit it.", zh: "吐掉。", speaker: "brother", type: "casual" },
      { en: "Rinse.", zh: "漱口。", speaker: "brother", type: "casual" },
      { en: "Big smile!", zh: "笑一个！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 77, title: "洗手", category: "bathroom", tags: ["洗手"], mode: "duo",
    sentences: [
      { en: "Wash hands.", zh: "洗手。", speaker: "mom", type: "momCalling" },
      { en: "I did!", zh: "洗了！", speaker: "brother", type: "broWhine" },
      { en: "Really now.", zh: "去洗。", speaker: "mom", type: "momFirm" },
      { en: "Water on.", zh: "开水。", speaker: "brother", type: "casual" },
      { en: "Soap up.", zh: "打肥皂。", speaker: "brother", type: "casual" },
      { en: "Front and back.", zh: "手心手背。", speaker: "brother", type: "casual" },
      { en: "Between fingers.", zh: "指缝。", speaker: "brother", type: "casual" },
      { en: "Twenty seconds.", zh: "二十秒。", speaker: "brother", type: "casual" },
      { en: "Rinse off.", zh: "冲干净。", speaker: "brother", type: "casual" },
      { en: "Dry on towel.", zh: "毛巾擦。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 78, title: "洗脸", category: "bathroom", tags: ["洗脸"], mode: "narrate",
    sentences: [
      { en: "Splash water.", zh: "撩水。", speaker: "sister", type: "casual" },
      { en: "Wet the face.", zh: "脸打湿。", speaker: "sister", type: "casual" },
      { en: "Some cleanser.", zh: "挤洗面奶。", speaker: "sister", type: "casual" },
      { en: "Rub in circles.", zh: "画圈洗。", speaker: "sister", type: "casual" },
      { en: "Eyes closed.", zh: "闭眼。", speaker: "sister", type: "casual" },
      { en: "Rinse thoroughly.", zh: "冲干净。", speaker: "sister", type: "casual" },
      { en: "Pat dry.", zh: "拍干。", speaker: "sister", type: "casual" },
      { en: "Fresh.", zh: "清爽。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 79, title: "上厕所", category: "bathroom", tags: ["厕所"], mode: "narrate",
    sentences: [
      { en: "Gotta go.", zh: "要嘘嘘。", speaker: "brother", type: "broWhine" },
      { en: "Run!", zh: "快跑！", speaker: "brother", type: "rushed" },
      { en: "Pants down.", zh: "裤子拉。", speaker: "brother", type: "casual" },
      { en: "Sit down.", zh: "坐下。", speaker: "brother", type: "casual" },
      { en: "Phew, made it.", zh: "赶上了。", speaker: "brother", type: "casual" },
      { en: "Wipe.", zh: "擦。", speaker: "brother", type: "casual" },
      { en: "Flush.", zh: "冲水。", speaker: "brother", type: "casual" },
      { en: "Wash hands.", zh: "洗手。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 80, title: "洗澡", category: "bathroom", tags: ["洗澡"], mode: "duo",
    sentences: [
      { en: "Shower time.", zh: "洗澡。", speaker: "mom", type: "momCalling" },
      { en: "Don't wanna.", zh: "不想洗。", speaker: "brother", type: "broPout" },
      { en: "You stink.", zh: "你臭。", speaker: "sister", type: "sisTease" },
      { en: "Test water.", zh: "试水温。", speaker: "mom", type: "casual" },
      { en: "Too cold!", zh: "太凉！", speaker: "brother", type: "broLoud" },
      { en: "Warmer.", zh: "调热点。", speaker: "mom", type: "casual" },
      { en: "Just right.", zh: "刚好。", speaker: "brother", type: "casual" },
      { en: "Step in.", zh: "进去。", speaker: "mom", type: "casual" },
      { en: "Wash hair.", zh: "洗头。", speaker: "mom", type: "casual" },
      { en: "Five minutes only.", zh: "就五分钟。", speaker: "mom", type: "momFirm" }
    ]
  },
  {
    id: 81, title: "洗头", category: "bathroom", tags: ["洗头"], mode: "narrate",
    sentences: [
      { en: "Wet the hair.", zh: "湿头发。", speaker: "sister", type: "casual" },
      { en: "Shampoo blob.", zh: "挤洗发水。", speaker: "sister", type: "casual" },
      { en: "Lather up.", zh: "搓泡沫。", speaker: "sister", type: "casual" },
      { en: "Rub scalp.", zh: "搓头皮。", speaker: "sister", type: "casual" },
      { en: "Bubbles everywhere.", zh: "全是泡。", speaker: "sister", type: "broSilly" },
      { en: "Rinse out.", zh: "冲干净。", speaker: "sister", type: "casual" },
      { en: "Conditioner.", zh: "护发素。", speaker: "sister", type: "casual" },
      { en: "Wait one minute.", zh: "等一分钟。", speaker: "sister", type: "casual" },
      { en: "Rinse again.", zh: "再冲。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 82, title: "吹头发", category: "bathroom", tags: ["吹风机"], mode: "duo",
    sentences: [
      { en: "Wet hair.", zh: "湿头发。", speaker: "mom", type: "casual" },
      { en: "Towel dry first.", zh: "先擦干。", speaker: "mom", type: "casual" },
      { en: "Plug in dryer.", zh: "插吹风机。", speaker: "mom", type: "casual" },
      { en: "Loud!", zh: "好吵！", speaker: "brother", type: "broLoud" },
      { en: "Don't move.", zh: "别动。", speaker: "mom", type: "momFirm" },
      { en: "Warm wind.", zh: "暖风。", speaker: "sister", type: "broCute" },
      { en: "Other side.", zh: "另一边。", speaker: "mom", type: "casual" },
      { en: "All dry.", zh: "都干了。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 83, title: "擦身体", category: "bathroom", tags: ["擦干"], mode: "narrate",
    sentences: [
      { en: "Wrap in towel.", zh: "裹毛巾。", speaker: "sister", type: "casual" },
      { en: "Pat dry.", zh: "拍干。", speaker: "sister", type: "casual" },
      { en: "Don't rub.", zh: "别使劲擦。", speaker: "sister", type: "casual" },
      { en: "Between toes.", zh: "脚趾缝。", speaker: "sister", type: "casual" },
      { en: "Under arms.", zh: "腋窝。", speaker: "sister", type: "casual" },
      { en: "Behind neck.", zh: "脖子后。", speaker: "sister", type: "casual" },
      { en: "All dry.", zh: "都干了。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 84, title: "用棉签", category: "bathroom", tags: ["棉签"], mode: "duo",
    sentences: [
      { en: "Ear feels weird.", zh: "耳朵难受。", speaker: "brother", type: "broWhine" },
      { en: "Q-tip time.", zh: "用棉签。", speaker: "mom", type: "casual" },
      { en: "Tilt your head.", zh: "侧头。", speaker: "mom", type: "casual" },
      { en: "Gentle now.", zh: "轻轻的。", speaker: "mom", type: "momSoft" },
      { en: "Twist slow.", zh: "慢转。", speaker: "mom", type: "casual" },
      { en: "Other ear.", zh: "另一只。", speaker: "mom", type: "casual" },
      { en: "All clean.", zh: "干净了。", speaker: "mom", type: "casual" },
      { en: "Throw it out.", zh: "扔掉。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 85, title: "用马桶", category: "bathroom", tags: ["马桶"], mode: "duo",
    sentences: [
      { en: "Lift the lid.", zh: "掀盖。", speaker: "brother", type: "casual" },
      { en: "Seat up too.", zh: "圈也起。", speaker: "brother", type: "casual" },
      { en: "Aim well.", zh: "瞄准。", speaker: "brother", type: "casual" },
      { en: "Don't splash.", zh: "别溅。", speaker: "mom", type: "momFirm" },
      { en: "Shake it off.", zh: "甩两下。", speaker: "brother", type: "broSilly" },
      { en: "Put seat down.", zh: "放下圈。", speaker: "mom", type: "momFirm" },
      { en: "Flush!", zh: "冲水！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 86, title: "擦眼泪", category: "bathroom", tags: ["眼泪"], mode: "duo",
    sentences: [
      { en: "Don't cry.", zh: "别哭。", speaker: "mom", type: "momSoft" },
      { en: "Get a tissue.", zh: "拿纸。", speaker: "mom", type: "casual" },
      { en: "Wipe eyes.", zh: "擦眼睛。", speaker: "mom", type: "momSoft" },
      { en: "Blow your nose.", zh: "擤鼻涕。", speaker: "mom", type: "casual" },
      { en: "Hard blow.", zh: "用力擤。", speaker: "mom", type: "casual" },
      { en: "Toss the tissue.", zh: "扔纸。", speaker: "mom", type: "casual" },
      { en: "Feel better?", zh: "好点？", speaker: "mom", type: "momSoft" },
      { en: "Hmm.", zh: "嗯。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 87, title: "用花露水", category: "bathroom", tags: ["花露水"], mode: "duo",
    sentences: [
      { en: "Mosquito bite!", zh: "蚊子咬！", speaker: "brother", type: "broWhine" },
      { en: "Itchy!", zh: "好痒！", speaker: "brother", type: "broLoud" },
      { en: "Don't scratch.", zh: "别抓。", speaker: "mom", type: "momFirm" },
      { en: "Spray here.", zh: "喷点这。", speaker: "mom", type: "casual" },
      { en: "Cold!", zh: "凉的！", speaker: "brother", type: "broScared" },
      { en: "Rub it in.", zh: "搓一搓。", speaker: "mom", type: "casual" },
      { en: "Less itchy.", zh: "不痒了。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 88, title: "抹乳液", category: "bathroom", tags: ["乳液"], mode: "narrate",
    sentences: [
      { en: "Skin's dry.", zh: "皮肤干。", speaker: "sister", type: "casual" },
      { en: "Pump lotion.", zh: "按乳液。", speaker: "sister", type: "casual" },
      { en: "Two pumps.", zh: "两下。", speaker: "sister", type: "casual" },
      { en: "Warm in hands.", zh: "搓热。", speaker: "sister", type: "casual" },
      { en: "Face first.", zh: "先脸。", speaker: "sister", type: "casual" },
      { en: "Then arms.", zh: "再胳膊。", speaker: "sister", type: "casual" },
      { en: "Don't forget hands.", zh: "别忘手。", speaker: "sister", type: "casual" },
      { en: "Smooth.", zh: "滑滑的。", speaker: "sister", type: "broCute" }
    ]
  },
  {
    id: 89, title: "刷牙线", category: "bathroom", tags: ["牙线"], mode: "duo",
    sentences: [
      { en: "Food stuck.", zh: "塞牙了。", speaker: "brother", type: "broWhine" },
      { en: "Use floss.", zh: "用牙线。", speaker: "mom", type: "casual" },
      { en: "Pull a piece.", zh: "拉一段。", speaker: "mom", type: "casual" },
      { en: "Wrap fingers.", zh: "绕手指。", speaker: "mom", type: "casual" },
      { en: "Slide between.", zh: "穿过去。", speaker: "mom", type: "casual" },
      { en: "Gentle.", zh: "轻点。", speaker: "mom", type: "momSoft" },
      { en: "Got it out!", zh: "弄出来了！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 90, title: "扎马尾", category: "bathroom", tags: ["马尾"], mode: "narrate",
    sentences: [
      { en: "Hair down.", zh: "头发散着。", speaker: "sister", type: "casual" },
      { en: "Brush smooth.", zh: "梳顺。", speaker: "sister", type: "casual" },
      { en: "Gather all.", zh: "都拢上。", speaker: "sister", type: "casual" },
      { en: "Hold high.", zh: "举高。", speaker: "sister", type: "casual" },
      { en: "Wrap with band.", zh: "用皮筋。", speaker: "sister", type: "casual" },
      { en: "Loop twice.", zh: "绕两圈。", speaker: "sister", type: "casual" },
      { en: "Pull through.", zh: "穿过。", speaker: "sister", type: "casual" },
      { en: "Tight!", zh: "扎紧了！", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 91, title: "扫地", category: "chores", tags: ["扫地"], mode: "narrate",
    sentences: [
      { en: "Floor's dirty.", zh: "地脏。", speaker: "sister", type: "casual" },
      { en: "Grab broom.", zh: "拿扫帚。", speaker: "sister", type: "casual" },
      { en: "Sweep this way.", zh: "往这扫。", speaker: "sister", type: "casual" },
      { en: "Pile it up.", zh: "堆一堆。", speaker: "sister", type: "casual" },
      { en: "Dustpan ready.", zh: "簸箕准备。", speaker: "sister", type: "casual" },
      { en: "Sweep in.", zh: "扫进去。", speaker: "sister", type: "casual" },
      { en: "Dump in trash.", zh: "倒垃圾桶。", speaker: "sister", type: "casual" },
      { en: "Done.", zh: "好了。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 92, title: "倒垃圾", category: "chores", tags: ["垃圾"], mode: "narrate",
    sentences: [
      { en: "Trash full.", zh: "垃圾满了。", speaker: "brother", type: "casual" },
      { en: "Tie the bag.", zh: "打结。", speaker: "brother", type: "casual" },
      { en: "Pull it out.", zh: "拎出来。", speaker: "brother", type: "casual" },
      { en: "Stinky!", zh: "好臭！", speaker: "brother", type: "broScared" },
      { en: "Hold breath.", zh: "屏气。", speaker: "brother", type: "casual" },
      { en: "Out the door.", zh: "出门。", speaker: "brother", type: "casual" },
      { en: "Toss in bin.", zh: "扔桶里。", speaker: "brother", type: "casual" },
      { en: "Run back!", zh: "跑回家！", speaker: "brother", type: "rushed" }
    ]
  },
  {
    id: 93, title: "擦桌子", category: "chores", tags: ["擦桌"], mode: "duo",
    sentences: [
      { en: "Table's sticky.", zh: "桌粘。", speaker: "sister", type: "casual" },
      { en: "Yuck.", zh: "恶心。", speaker: "brother", type: "broScared" },
      { en: "Grab rag.", zh: "拿抹布。", speaker: "sister", type: "casual" },
      { en: "Wet it.", zh: "弄湿。", speaker: "sister", type: "casual" },
      { en: "Wring out.", zh: "拧干。", speaker: "sister", type: "casual" },
      { en: "Wipe circles.", zh: "画圈擦。", speaker: "sister", type: "casual" },
      { en: "Corners too.", zh: "角落也擦。", speaker: "sister", type: "casual" },
      { en: "Shiny now.", zh: "亮了。", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 94, title: "拖地", category: "chores", tags: ["拖地"], mode: "narrate",
    sentences: [
      { en: "Need to mop.", zh: "得拖地。", speaker: "mom", type: "casual" },
      { en: "Fill bucket.", zh: "接水。", speaker: "mom", type: "casual" },
      { en: "Add cleaner.", zh: "加清洁剂。", speaker: "mom", type: "casual" },
      { en: "Dip the mop.", zh: "拖把蘸水。", speaker: "mom", type: "casual" },
      { en: "Wring it.", zh: "拧干。", speaker: "mom", type: "casual" },
      { en: "Back and forth.", zh: "来回拖。", speaker: "mom", type: "casual" },
      { en: "Edges too.", zh: "边也拖。", speaker: "mom", type: "casual" },
      { en: "Don't slip.", zh: "别滑倒。", speaker: "mom", type: "momWorry" }
    ]
  },
  {
    id: 95, title: "晾衣服", category: "chores", tags: ["晾衣"], mode: "duo",
    sentences: [
      { en: "Wash done.", zh: "洗好了。", speaker: "mom", type: "casual" },
      { en: "Hang them up.", zh: "晾起来。", speaker: "mom", type: "casual" },
      { en: "Shake it out.", zh: "抖一下。", speaker: "mom", type: "casual" },
      { en: "Less wrinkles.", zh: "少褶。", speaker: "mom", type: "casual" },
      { en: "Hanger inside.", zh: "套衣架。", speaker: "mom", type: "casual" },
      { en: "Buttons closed.", zh: "扣子扣上。", speaker: "mom", type: "casual" },
      { en: "Onto the rod.", zh: "挂杆上。", speaker: "mom", type: "casual" },
      { en: "Space them out.", zh: "拉开点。", speaker: "mom", type: "casual" },
      { en: "Dry in sun.", zh: "晒太阳。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 96, title: "铺床", category: "chores", tags: ["床"], mode: "narrate",
    sentences: [
      { en: "Bed's messy.", zh: "床乱。", speaker: "sister", type: "casual" },
      { en: "Pull up sheet.", zh: "拉床单。", speaker: "sister", type: "casual" },
      { en: "Smooth out.", zh: "抹平。", speaker: "sister", type: "casual" },
      { en: "Fluff pillow.", zh: "拍枕头。", speaker: "sister", type: "casual" },
      { en: "Spread comforter.", zh: "盖被子。", speaker: "sister", type: "casual" },
      { en: "Tuck corners.", zh: "塞角。", speaker: "sister", type: "casual" },
      { en: "Pillow on top.", zh: "枕头放上。", speaker: "sister", type: "casual" },
      { en: "Neat!", zh: "整齐！", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 97, title: "整理玩具", category: "chores", tags: ["玩具"], mode: "duo",
    sentences: [
      { en: "Toys everywhere.", zh: "玩具撒一地。", speaker: "mom", type: "momTired" },
      { en: "Pick them up.", zh: "捡起来。", speaker: "mom", type: "momFirm" },
      { en: "Don't wanna.", zh: "不想捡。", speaker: "brother", type: "broPout" },
      { en: "Now.", zh: "现在。", speaker: "mom", type: "momFirm" },
      { en: "Fine.", zh: "好吧。", speaker: "brother", type: "broAnnoy" },
      { en: "Cars in box.", zh: "车放盒子。", speaker: "mom", type: "casual" },
      { en: "Blocks in basket.", zh: "积木篮子。", speaker: "mom", type: "casual" },
      { en: "Lego there.", zh: "乐高那边。", speaker: "mom", type: "casual" },
      { en: "Floor clean.", zh: "地干净。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 98, title: "擦窗户", category: "chores", tags: ["窗户"], mode: "duo",
    sentences: [
      { en: "Windows dusty.", zh: "窗户脏。", speaker: "mom", type: "casual" },
      { en: "Spray cleaner.", zh: "喷玻璃水。", speaker: "mom", type: "casual" },
      { en: "Top first.", zh: "先上面。", speaker: "mom", type: "casual" },
      { en: "Wipe down.", zh: "往下擦。", speaker: "mom", type: "casual" },
      { en: "Streaks!", zh: "有印！", speaker: "sister", type: "sisAnnoy" },
      { en: "Use newspaper.", zh: "用报纸。", speaker: "mom", type: "casual" },
      { en: "Polish until shiny.", zh: "擦到亮。", speaker: "mom", type: "casual" },
      { en: "Clear view.", zh: "通透了。", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 99, title: "整理书桌", category: "chores", tags: ["书桌"], mode: "narrate",
    sentences: [
      { en: "Desk's chaos.", zh: "桌乱。", speaker: "sister", type: "casual" },
      { en: "Books in pile.", zh: "书码起来。", speaker: "sister", type: "casual" },
      { en: "Tallest first.", zh: "高的先。", speaker: "sister", type: "casual" },
      { en: "Pens in cup.", zh: "笔放杯。", speaker: "sister", type: "casual" },
      { en: "Trash out.", zh: "废纸扔。", speaker: "sister", type: "casual" },
      { en: "Wipe surface.", zh: "擦桌面。", speaker: "sister", type: "casual" },
      { en: "Lamp on.", zh: "开灯。", speaker: "sister", type: "casual" },
      { en: "Ready to study.", zh: "可以学习。", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 100, title: "拆快递", category: "chores", tags: ["快递"], mode: "duo",
    sentences: [
      { en: "Package came!", zh: "快递到了！", speaker: "brother", type: "broExcite" },
      { en: "Get scissors.", zh: "拿剪刀。", speaker: "sister", type: "casual" },
      { en: "Cut the tape.", zh: "剪胶带。", speaker: "sister", type: "casual" },
      { en: "Slowly.", zh: "慢点。", speaker: "sister", type: "sisBoss" },
      { en: "Flaps open.", zh: "翻开盖。", speaker: "sister", type: "casual" },
      { en: "Pull out the stuff.", zh: "拿东西。", speaker: "brother", type: "casual" },
      { en: "Bubble wrap!", zh: "气泡膜！", speaker: "brother", type: "broExcite" },
      { en: "Pop pop pop!", zh: "啵啵啵！", speaker: "brother", type: "broSilly" },
      { en: "Toss the box.", zh: "盒子扔了。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 101, title: "起床上学", category: "school", tags: ["起床","早晨"], mode: "duo",
    sentences: [
      { en: "Wake up!", zh: "起床！", speaker: "mom", type: "momCalling" },
      { en: "Five more minutes.", zh: "再睡五分钟。", speaker: "brother", type: "broWhine" },
      { en: "No way.", zh: "不行。", speaker: "mom", type: "momFirm" },
      { en: "Late again.", zh: "又要迟到。", speaker: "mom", type: "momTired" },
      { en: "Up now.", zh: "马上起。", speaker: "mom", type: "momFirm" },
      { en: "Fine.", zh: "行行行。", speaker: "brother", type: "broAnnoy" },
      { en: "Sit up.", zh: "坐起来。", speaker: "mom", type: "casual" },
      { en: "Stretch.", zh: "伸懒腰。", speaker: "brother", type: "casual" },
      { en: "Yawn.", zh: "打哈欠。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 102, title: "吃早饭", category: "school", tags: ["早饭","上学"], mode: "duo",
    sentences: [
      { en: "Breakfast ready.", zh: "早饭好了。", speaker: "mom", type: "momCalling" },
      { en: "What's there?", zh: "有啥？", speaker: "brother", type: "broCurious" },
      { en: "Eggs and bread.", zh: "鸡蛋面包。", speaker: "mom", type: "casual" },
      { en: "Milk too.", zh: "还有奶。", speaker: "mom", type: "casual" },
      { en: "Eat fast.", zh: "快吃。", speaker: "mom", type: "rushed" },
      { en: "Bus soon.", zh: "校车快来。", speaker: "mom", type: "rushed" },
      { en: "Hot!", zh: "烫！", speaker: "brother", type: "broLoud" },
      { en: "Blow first.", zh: "吹一吹。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 103, title: "出门赶时间", category: "school", tags: ["出门","迟到"], mode: "duo",
    sentences: [
      { en: "Hurry up!", zh: "快点！", speaker: "mom", type: "rushed" },
      { en: "Shoes on.", zh: "穿鞋。", speaker: "mom", type: "rushed" },
      { en: "Where's my backpack?", zh: "我书包呢？", speaker: "sister", type: "broWhine" },
      { en: "Hall closet!", zh: "门厅柜里！", speaker: "mom", type: "rushed" },
      { en: "Got it.", zh: "拿到了。", speaker: "sister", type: "casual" },
      { en: "Water bottle?", zh: "水壶？", speaker: "mom", type: "casual" },
      { en: "Oops, forgot.", zh: "忘了。", speaker: "sister", type: "broScared" },
      { en: "Run grab it.", zh: "跑去拿。", speaker: "mom", type: "rushed" },
      { en: "Out the door!", zh: "出门！", speaker: "mom", type: "rushed" }
    ]
  },
  {
    id: 104, title: "坐校车", category: "school", tags: ["校车"], mode: "duo",
    sentences: [
      { en: "Bus is here.", zh: "校车来了。", speaker: "sister", type: "casual" },
      { en: "Line up.", zh: "排队。", speaker: "sister", type: "casual" },
      { en: "Show pass.", zh: "出示卡。", speaker: "sister", type: "casual" },
      { en: "Find a seat.", zh: "找座。", speaker: "brother", type: "casual" },
      { en: "By the window!", zh: "靠窗！", speaker: "brother", type: "broExcite" },
      { en: "Buckle up.", zh: "系安全带。", speaker: "sister", type: "sisBoss" },
      { en: "Don't stand.", zh: "别站着。", speaker: "sister", type: "sisBoss" },
      { en: "See ya, mom!", zh: "再见妈！", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 105, title: "过马路上学", category: "school", tags: ["马路","红绿灯"], mode: "duo",
    sentences: [
      { en: "Stop at corner.", zh: "拐角停。", speaker: "mom", type: "momFirm" },
      { en: "Red light.", zh: "红灯。", speaker: "mom", type: "casual" },
      { en: "Wait wait.", zh: "等等。", speaker: "mom", type: "casual" },
      { en: "Look left.", zh: "看左边。", speaker: "mom", type: "casual" },
      { en: "Look right.", zh: "看右边。", speaker: "mom", type: "casual" },
      { en: "Green!", zh: "绿灯！", speaker: "brother", type: "broExcite" },
      { en: "Hold my hand.", zh: "拉我手。", speaker: "mom", type: "momSoft" },
      { en: "Walk fast.", zh: "快走。", speaker: "mom", type: "rushed" },
      { en: "We made it.", zh: "过来啦。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 106, title: "进校门", category: "school", tags: ["校门"], mode: "duo",
    sentences: [
      { en: "Almost there.", zh: "快到了。", speaker: "sister", type: "casual" },
      { en: "Show ID.", zh: "出示卡。", speaker: "sister", type: "casual" },
      { en: "Beep.", zh: "嘀。", speaker: "sister", type: "casual" },
      { en: "Good morning.", zh: "早上好。", speaker: "teacher", type: "momSoft" },
      { en: "Morning!", zh: "老师好！", speaker: "brother", type: "casual" },
      { en: "Walk, don't run.", zh: "慢走别跑。", speaker: "teacher", type: "momFirm" },
      { en: "Class is upstairs.", zh: "教室在楼上。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 107, title: "早读", category: "school", tags: ["早读","课堂"], mode: "narrate",
    sentences: [
      { en: "Open the book.", zh: "翻开书。", speaker: "teacher", type: "casual" },
      { en: "Page ten.", zh: "第十页。", speaker: "teacher", type: "casual" },
      { en: "Read aloud.", zh: "大声读。", speaker: "teacher", type: "casual" },
      { en: "All together.", zh: "一起读。", speaker: "teacher", type: "casual" },
      { en: "Sit straight.", zh: "坐直。", speaker: "teacher", type: "momFirm" },
      { en: "Hold book up.", zh: "举高点。", speaker: "teacher", type: "casual" },
      { en: "Clear voice.", zh: "声音洪亮。", speaker: "teacher", type: "casual" },
      { en: "Good job.", zh: "真棒。", speaker: "teacher", type: "momSoft" }
    ]
  },
  {
    id: 108, title: "上数学课", category: "school", tags: ["数学"], mode: "duo",
    sentences: [
      { en: "Math class.", zh: "数学课。", speaker: "teacher", type: "casual" },
      { en: "Take out books.", zh: "拿出书。", speaker: "teacher", type: "casual" },
      { en: "Page twelve.", zh: "第十二页。", speaker: "teacher", type: "casual" },
      { en: "Five plus three?", zh: "五加三？", speaker: "teacher", type: "casual" },
      { en: "Eight!", zh: "八！", speaker: "brother", type: "broExcite" },
      { en: "Correct.", zh: "对了。", speaker: "teacher", type: "casual" },
      { en: "Next problem.", zh: "下一题。", speaker: "teacher", type: "casual" },
      { en: "Write it down.", zh: "写下来。", speaker: "teacher", type: "casual" },
      { en: "Hmm, hard.", zh: "嗯，难。", speaker: "brother", type: "broWhine" }
    ]
  },
  {
    id: 109, title: "上英语课", category: "school", tags: ["英语"], mode: "narrate",
    sentences: [
      { en: "English class.", zh: "英语课。", speaker: "teacher", type: "casual" },
      { en: "Good morning.", zh: "早上好。", speaker: "teacher", type: "casual" },
      { en: "Morning!", zh: "老师好！", speaker: "sister", type: "casual" },
      { en: "New words today.", zh: "今天新单词。", speaker: "teacher", type: "casual" },
      { en: "Repeat after me.", zh: "跟我读。", speaker: "teacher", type: "casual" },
      { en: "Apple.", zh: "苹果。", speaker: "teacher", type: "casual" },
      { en: "Apple!", zh: "Apple！", speaker: "sister", type: "broExcite" },
      { en: "Spell it.", zh: "拼一拼。", speaker: "teacher", type: "casual" }
    ]
  },
  {
    id: 110, title: "上体育课", category: "school", tags: ["体育"], mode: "duo",
    sentences: [
      { en: "Line up outside.", zh: "外面排队。", speaker: "teacher", type: "casual" },
      { en: "Run two laps.", zh: "跑两圈。", speaker: "teacher", type: "casual" },
      { en: "Tired!", zh: "累！", speaker: "brother", type: "broTired" },
      { en: "Keep going.", zh: "继续。", speaker: "teacher", type: "casual" },
      { en: "Stretch arms.", zh: "拉胳膊。", speaker: "teacher", type: "casual" },
      { en: "Touch toes.", zh: "摸脚趾。", speaker: "teacher", type: "casual" },
      { en: "Jump rope.", zh: "跳绳。", speaker: "teacher", type: "casual" },
      { en: "Fun!", zh: "好玩！", speaker: "sister", type: "broExcite" }
    ]
  },
  {
    id: 111, title: "上音乐课", category: "school", tags: ["音乐"], mode: "narrate",
    sentences: [
      { en: "Music class.", zh: "音乐课。", speaker: "teacher", type: "casual" },
      { en: "Sing along.", zh: "一起唱。", speaker: "teacher", type: "casual" },
      { en: "Do re mi.", zh: "哆来咪。", speaker: "teacher", type: "casual" },
      { en: "Higher!", zh: "再高！", speaker: "teacher", type: "casual" },
      { en: "Together now.", zh: "现在一起。", speaker: "teacher", type: "casual" },
      { en: "Clap to beat.", zh: "拍节奏。", speaker: "teacher", type: "casual" },
      { en: "Fun song!", zh: "好听！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 112, title: "上美术课", category: "school", tags: ["美术","画画"], mode: "duo",
    sentences: [
      { en: "Art time.", zh: "美术课。", speaker: "teacher", type: "casual" },
      { en: "Draw a flower.", zh: "画朵花。", speaker: "teacher", type: "casual" },
      { en: "What color?", zh: "什么色？", speaker: "sister", type: "broCurious" },
      { en: "Your choice.", zh: "随便。", speaker: "teacher", type: "momSoft" },
      { en: "Pink!", zh: "粉色！", speaker: "sister", type: "broExcite" },
      { en: "Draw stem.", zh: "画茎。", speaker: "teacher", type: "casual" },
      { en: "Add leaves.", zh: "加叶子。", speaker: "teacher", type: "casual" },
      { en: "Pretty.", zh: "真好看。", speaker: "teacher", type: "momSoft" }
    ]
  },
  {
    id: 113, title: "上科学课", category: "school", tags: ["科学","实验"], mode: "duo",
    sentences: [
      { en: "Science today.", zh: "今天科学。", speaker: "teacher", type: "casual" },
      { en: "Look at this.", zh: "看这个。", speaker: "teacher", type: "casual" },
      { en: "A magnet.", zh: "磁铁。", speaker: "teacher", type: "casual" },
      { en: "Stick to metal.", zh: "吸金属。", speaker: "teacher", type: "casual" },
      { en: "Whoa!", zh: "哇！", speaker: "brother", type: "broExcite" },
      { en: "Try paper.", zh: "试纸。", speaker: "teacher", type: "casual" },
      { en: "Nothing.", zh: "不吸。", speaker: "brother", type: "casual" },
      { en: "Why?", zh: "为啥？", speaker: "brother", type: "broCurious" },
      { en: "Good question.", zh: "好问题。", speaker: "teacher", type: "momSoft" }
    ]
  },
  {
    id: 114, title: "课间十分钟", category: "school", tags: ["课间","休息"], mode: "duo",
    sentences: [
      { en: "Bell rings!", zh: "下课了！", speaker: "brother", type: "broExcite" },
      { en: "Stretch.", zh: "伸懒腰。", speaker: "sister", type: "casual" },
      { en: "Pee first.", zh: "先嘘嘘。", speaker: "brother", type: "casual" },
      { en: "Water too.", zh: "再喝水。", speaker: "sister", type: "casual" },
      { en: "Hallway, no running!", zh: "走廊别跑！", speaker: "teacher", type: "momFirm" },
      { en: "Oops.", zh: "哎呀。", speaker: "brother", type: "broScared" },
      { en: "Slow down.", zh: "慢点。", speaker: "sister", type: "casual" },
      { en: "Back to class.", zh: "回教室。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 115, title: "做眼保健操", category: "school", tags: ["眼保健操"], mode: "narrate",
    sentences: [
      { en: "Eye exercise.", zh: "眼保健操。", speaker: "teacher", type: "casual" },
      { en: "Close eyes.", zh: "闭眼。", speaker: "teacher", type: "casual" },
      { en: "Press here.", zh: "按这里。", speaker: "teacher", type: "casual" },
      { en: "Soft, soft.", zh: "轻一点。", speaker: "teacher", type: "momSoft" },
      { en: "Eight times.", zh: "八下。", speaker: "teacher", type: "casual" },
      { en: "Switch spot.", zh: "换位置。", speaker: "teacher", type: "casual" },
      { en: "All done.", zh: "完了。", speaker: "teacher", type: "casual" },
      { en: "Open up.", zh: "睁眼。", speaker: "teacher", type: "casual" }
    ]
  },
  {
    id: 116, title: "举手回答", category: "school", tags: ["举手"], mode: "mixed",
    sentences: [
      { en: "Who knows?", zh: "谁知道？", speaker: "teacher", type: "casual" },
      { en: "Hand up!", zh: "举手！", speaker: "brother", type: "broExcite" },
      { en: "Pick me!", zh: "叫我！", speaker: "brother", type: "broWhine" },
      { en: "Yes, you.", zh: "好，你来。", speaker: "teacher", type: "casual" },
      { en: "Stand up.", zh: "起立。", speaker: "brother", type: "casual" },
      { en: "Um...", zh: "呃...", speaker: "brother", type: "broScared" },
      { en: "Take your time.", zh: "慢慢来。", speaker: "teacher", type: "momSoft" },
      { en: "Forty-two!", zh: "四十二！", speaker: "brother", type: "broLoud" },
      { en: "Correct!", zh: "对！", speaker: "teacher", type: "casual" },
      { en: "Yes!", zh: "耶！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 117, title: "写字", category: "school", tags: ["写字"], mode: "duo",
    sentences: [
      { en: "Take out pencil.", zh: "拿铅笔。", speaker: "teacher", type: "casual" },
      { en: "Open notebook.", zh: "翻本子。", speaker: "teacher", type: "casual" },
      { en: "Copy this word.", zh: "抄这个字。", speaker: "teacher", type: "casual" },
      { en: "Hold pencil right.", zh: "握笔姿势。", speaker: "teacher", type: "momFirm" },
      { en: "Stroke by stroke.", zh: "一笔一画。", speaker: "teacher", type: "casual" },
      { en: "Neat letters.", zh: "工工整整。", speaker: "teacher", type: "casual" },
      { en: "Done!", zh: "写完！", speaker: "sister", type: "broExcite" }
    ]
  },
  {
    id: 118, title: "做作业", category: "school", tags: ["作业"], mode: "duo",
    sentences: [
      { en: "Homework time.", zh: "做作业。", speaker: "mom", type: "casual" },
      { en: "Ugh.", zh: "唉。", speaker: "sister", type: "sisAnnoy" },
      { en: "Sit down.", zh: "坐下。", speaker: "mom", type: "momFirm" },
      { en: "Math first.", zh: "先数学。", speaker: "mom", type: "casual" },
      { en: "Hard!", zh: "难！", speaker: "sister", type: "sisWhine" },
      { en: "Try one.", zh: "试一题。", speaker: "mom", type: "momSoft" },
      { en: "Hmm.", zh: "嗯...", speaker: "sister", type: "broCurious" },
      { en: "Got it!", zh: "懂了！", speaker: "sister", type: "broExcite" },
      { en: "Keep going.", zh: "继续。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 119, title: "抄黑板", category: "school", tags: ["抄笔记"], mode: "narrate",
    sentences: [
      { en: "Copy this down.", zh: "抄下来。", speaker: "teacher", type: "casual" },
      { en: "From the board.", zh: "黑板上的。", speaker: "teacher", type: "casual" },
      { en: "Hurry, erasing.", zh: "快，要擦了。", speaker: "teacher", type: "rushed" },
      { en: "Page one, top.", zh: "第一页顶上。", speaker: "teacher", type: "casual" },
      { en: "Neat handwriting.", zh: "字工整。", speaker: "teacher", type: "casual" },
      { en: "Hmm, missed one.", zh: "啊，漏了。", speaker: "sister", type: "broScared" },
      { en: "Ask neighbor.", zh: "问同桌。", speaker: "teacher", type: "casual" }
    ]
  },
  {
    id: 120, title: "改错题", category: "school", tags: ["改错"], mode: "duo",
    sentences: [
      { en: "Got it wrong.", zh: "错了。", speaker: "sister", type: "broScared" },
      { en: "Red pen.", zh: "红笔。", speaker: "mom", type: "casual" },
      { en: "Cross out wrong.", zh: "划掉。", speaker: "mom", type: "casual" },
      { en: "Why's it wrong?", zh: "为啥错？", speaker: "mom", type: "broCurious" },
      { en: "Read again.", zh: "再读题。", speaker: "mom", type: "casual" },
      { en: "Oh!", zh: "哦！", speaker: "sister", type: "broExcite" },
      { en: "I see now.", zh: "懂了。", speaker: "sister", type: "casual" },
      { en: "Try fresh.", zh: "重做。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 121, title: "考试发卷", category: "school", tags: ["考试"], mode: "duo",
    sentences: [
      { en: "Test today.", zh: "今天考试。", speaker: "teacher", type: "casual" },
      { en: "Pass papers back.", zh: "传卷子。", speaker: "teacher", type: "casual" },
      { en: "Name on top.", zh: "写名字。", speaker: "teacher", type: "momFirm" },
      { en: "Nervous!", zh: "紧张！", speaker: "sister", type: "broScared" },
      { en: "Deep breath.", zh: "深呼吸。", speaker: "teacher", type: "momSoft" },
      { en: "You got this.", zh: "可以的。", speaker: "teacher", type: "momSoft" },
      { en: "Start now.", zh: "现在开始。", speaker: "teacher", type: "casual" },
      { en: "Forty minutes.", zh: "四十分钟。", speaker: "teacher", type: "casual" }
    ]
  },
  {
    id: 122, title: "考砸了", category: "school", tags: ["考试","难过"], mode: "duo",
    sentences: [
      { en: "Got my score.", zh: "拿到分了。", speaker: "brother", type: "broTired" },
      { en: "How much?", zh: "多少分？", speaker: "mom", type: "broCurious" },
      { en: "Sixty.", zh: "六十。", speaker: "brother", type: "broCry" },
      { en: "Oh.", zh: "哦。", speaker: "mom", type: "momTired" },
      { en: "I'm sorry.", zh: "对不起。", speaker: "brother", type: "broCry" },
      { en: "It's okay.", zh: "没事。", speaker: "mom", type: "momSoft" },
      { en: "Next time.", zh: "下次努力。", speaker: "mom", type: "momSoft" },
      { en: "I'll study more.", zh: "我多学。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 123, title: "考好了", category: "school", tags: ["考试","开心"], mode: "duo",
    sentences: [
      { en: "I got an A!", zh: "我得 A！", speaker: "sister", type: "broExcite" },
      { en: "No way!", zh: "真的？", speaker: "mom", type: "surprised" },
      { en: "Look look.", zh: "看看看。", speaker: "sister", type: "broExcite" },
      { en: "Wow!", zh: "哇！", speaker: "mom", type: "momCheer" },
      { en: "So proud!", zh: "真骄傲！", speaker: "mom", type: "momCheer" },
      { en: "Hard work paid off.", zh: "努力没白费。", speaker: "mom", type: "casual" },
      { en: "Treat tonight?", zh: "今晚奖励？", speaker: "sister", type: "broCute" },
      { en: "Sure!", zh: "好！", speaker: "mom", type: "momCheer" }
    ]
  },
  {
    id: 124, title: "问老师", category: "school", tags: ["提问"], mode: "duo",
    sentences: [
      { en: "Teacher.", zh: "老师。", speaker: "brother", type: "casual" },
      { en: "Yes?", zh: "什么事？", speaker: "teacher", type: "momSoft" },
      { en: "I don't get this.", zh: "我不会。", speaker: "brother", type: "broCurious" },
      { en: "Which part?", zh: "哪部分？", speaker: "teacher", type: "momSoft" },
      { en: "Number five.", zh: "第五题。", speaker: "brother", type: "casual" },
      { en: "Let me see.", zh: "我看看。", speaker: "teacher", type: "casual" },
      { en: "Ah, easy.", zh: "啊，简单。", speaker: "teacher", type: "casual" },
      { en: "Try again.", zh: "再试。", speaker: "teacher", type: "momSoft" }
    ]
  },
  {
    id: 125, title: "找同桌帮", category: "school", tags: ["同桌"], mode: "duo",
    sentences: [
      { en: "Hey.", zh: "诶。", speaker: "brother", type: "casual" },
      { en: "What?", zh: "啥？", speaker: "classmate", type: "casual" },
      { en: "Help me.", zh: "帮我。", speaker: "brother", type: "broCute" },
      { en: "What's up?", zh: "咋了？", speaker: "classmate", type: "broCurious" },
      { en: "This problem.", zh: "这题。", speaker: "brother", type: "casual" },
      { en: "Easy.", zh: "简单。", speaker: "classmate", type: "casual" },
      { en: "Look here.", zh: "看这。", speaker: "classmate", type: "casual" },
      { en: "Thanks!", zh: "谢谢！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 126, title: "传纸条", category: "school", tags: ["纸条"], mode: "duo",
    sentences: [
      { en: "Psst.", zh: "嘘。", speaker: "brother", type: "whisper" },
      { en: "What?", zh: "啥？", speaker: "classmate", type: "whisper" },
      { en: "Pass this.", zh: "传过去。", speaker: "brother", type: "whisper" },
      { en: "To who?", zh: "给谁？", speaker: "classmate", type: "whisper" },
      { en: "Behind you.", zh: "你后面。", speaker: "brother", type: "whisper" },
      { en: "Got it.", zh: "好。", speaker: "classmate", type: "casual" },
      { en: "Quiet!", zh: "安静！", speaker: "teacher", type: "momFirm" },
      { en: "Uh oh.", zh: "完了。", speaker: "brother", type: "broScared" }
    ]
  },
  {
    id: 127, title: "被罚站", category: "school", tags: ["罚站"], mode: "duo",
    sentences: [
      { en: "Stand up.", zh: "站起来。", speaker: "teacher", type: "momFirm" },
      { en: "Me?", zh: "我？", speaker: "brother", type: "broScared" },
      { en: "Yes, you.", zh: "对，你。", speaker: "teacher", type: "momFirm" },
      { en: "Out the door.", zh: "出去。", speaker: "teacher", type: "momFirm" },
      { en: "I'm sorry.", zh: "对不起。", speaker: "brother", type: "broCry" },
      { en: "Think about it.", zh: "想想。", speaker: "teacher", type: "casual" },
      { en: "Five minutes.", zh: "五分钟。", speaker: "teacher", type: "casual" },
      { en: "Won't again.", zh: "下次不敢了。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 128, title: "被表扬", category: "school", tags: ["表扬"], mode: "duo",
    sentences: [
      { en: "Class, look.", zh: "同学们看。", speaker: "teacher", type: "casual" },
      { en: "Great work!", zh: "做得好！", speaker: "teacher", type: "momCheer" },
      { en: "Hers is perfect.", zh: "她的完美。", speaker: "teacher", type: "casual" },
      { en: "Aww.", zh: "嘿嘿。", speaker: "sister", type: "broCute" },
      { en: "Stand up.", zh: "站起来。", speaker: "teacher", type: "casual" },
      { en: "Show class.", zh: "给大家看。", speaker: "teacher", type: "casual" },
      { en: "Proud.", zh: "骄傲。", speaker: "sister", type: "sisProud" },
      { en: "Keep it up.", zh: "继续努力。", speaker: "teacher", type: "momSoft" }
    ]
  },
  {
    id: 129, title: "和同学打架", category: "school", tags: ["打架","冲突"], mode: "duo",
    sentences: [
      { en: "Hey!", zh: "嘿！", speaker: "brother", type: "broLoud" },
      { en: "What?!", zh: "干嘛！", speaker: "classmate", type: "yell" },
      { en: "Don't push!", zh: "别推！", speaker: "brother", type: "broLoud" },
      { en: "You started.", zh: "你先的。", speaker: "classmate", type: "yell" },
      { en: "Did not!", zh: "没有！", speaker: "brother", type: "broLoud" },
      { en: "Stop it!", zh: "停！", speaker: "teacher", type: "momFirm" },
      { en: "Both of you.", zh: "你俩。", speaker: "teacher", type: "momFirm" },
      { en: "Apologize.", zh: "道歉。", speaker: "teacher", type: "momFirm" }
    ]
  },
  {
    id: 130, title: "和好", category: "school", tags: ["和好"], mode: "duo",
    sentences: [
      { en: "Hey.", zh: "嘿。", speaker: "brother", type: "casual" },
      { en: "What.", zh: "啥。", speaker: "classmate", type: "broAnnoy" },
      { en: "Sorry, okay?", zh: "对不起。", speaker: "brother", type: "broCute" },
      { en: "Me too.", zh: "我也是。", speaker: "classmate", type: "casual" },
      { en: "Friends again?", zh: "还是朋友？", speaker: "brother", type: "broCute" },
      { en: "Yeah.", zh: "嗯。", speaker: "classmate", type: "casual" },
      { en: "Wanna play?", zh: "玩吗？", speaker: "brother", type: "broExcite" },
      { en: "Sure.", zh: "好。", speaker: "classmate", type: "casual" }
    ]
  },
  {
    id: 131, title: "扫地值日", category: "school", tags: ["值日","扫地"], mode: "duo",
    sentences: [
      { en: "Your turn.", zh: "你值日。", speaker: "classmate", type: "casual" },
      { en: "Right.", zh: "对哦。", speaker: "sister", type: "casual" },
      { en: "Grab broom.", zh: "拿扫帚。", speaker: "sister", type: "casual" },
      { en: "Sweep rows.", zh: "排排扫。", speaker: "sister", type: "casual" },
      { en: "Move chairs.", zh: "挪椅子。", speaker: "sister", type: "casual" },
      { en: "Behind table.", zh: "桌后面。", speaker: "sister", type: "casual" },
      { en: "Trash up.", zh: "收垃圾。", speaker: "sister", type: "casual" },
      { en: "Done.", zh: "完了。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 132, title: "擦黑板", category: "school", tags: ["黑板","值日"], mode: "narrate",
    sentences: [
      { en: "Board's full.", zh: "黑板满了。", speaker: "sister", type: "casual" },
      { en: "Wet rag.", zh: "湿抹布。", speaker: "sister", type: "casual" },
      { en: "Wring out.", zh: "拧干。", speaker: "sister", type: "casual" },
      { en: "Wipe top first.", zh: "先擦上面。", speaker: "sister", type: "casual" },
      { en: "Down to bottom.", zh: "擦到下面。", speaker: "sister", type: "casual" },
      { en: "Dust everywhere.", zh: "全是粉。", speaker: "sister", type: "broScared" },
      { en: "Cough cough.", zh: "咳咳。", speaker: "sister", type: "casual" },
      { en: "Clean now.", zh: "干净了。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 133, title: "整理书桌", category: "school", tags: ["书桌"], mode: "narrate",
    sentences: [
      { en: "Messy desk.", zh: "桌乱。", speaker: "brother", type: "casual" },
      { en: "Books in row.", zh: "书排好。", speaker: "brother", type: "casual" },
      { en: "Pencil in case.", zh: "笔进盒。", speaker: "brother", type: "casual" },
      { en: "Trash in bin.", zh: "废纸扔。", speaker: "brother", type: "casual" },
      { en: "Wipe top.", zh: "擦桌面。", speaker: "brother", type: "casual" },
      { en: "Push chair in.", zh: "椅子推进。", speaker: "brother", type: "casual" },
      { en: "Tidy!", zh: "齐了！", speaker: "brother", type: "broProud" }
    ]
  },
  {
    id: 134, title: "收书包回家", category: "school", tags: ["放学"], mode: "narrate",
    sentences: [
      { en: "Last bell.", zh: "放学铃。", speaker: "brother", type: "broExcite" },
      { en: "Pack books.", zh: "装书。", speaker: "brother", type: "casual" },
      { en: "Homework folder.", zh: "作业夹。", speaker: "brother", type: "casual" },
      { en: "Water bottle.", zh: "水壶。", speaker: "brother", type: "casual" },
      { en: "Zip up bag.", zh: "拉书包。", speaker: "brother", type: "casual" },
      { en: "Push chair in.", zh: "推椅子。", speaker: "brother", type: "casual" },
      { en: "Bye teacher!", zh: "老师再见！", speaker: "brother", type: "casual" },
      { en: "See you tomorrow.", zh: "明天见。", speaker: "teacher", type: "momSoft" }
    ]
  },
  {
    id: 135, title: "放学排队", category: "school", tags: ["排队","放学"], mode: "duo",
    sentences: [
      { en: "Line up.", zh: "排队。", speaker: "teacher", type: "casual" },
      { en: "Two by two.", zh: "两人一对。", speaker: "teacher", type: "casual" },
      { en: "Quiet line.", zh: "安静排好。", speaker: "teacher", type: "momFirm" },
      { en: "Hold hands.", zh: "拉手。", speaker: "teacher", type: "casual" },
      { en: "Walk slow.", zh: "慢慢走。", speaker: "teacher", type: "casual" },
      { en: "Down stairs.", zh: "下楼。", speaker: "teacher", type: "casual" },
      { en: "Out the door.", zh: "出门。", speaker: "teacher", type: "casual" },
      { en: "Find parents.", zh: "找家长。", speaker: "teacher", type: "casual" }
    ]
  },
  {
    id: 136, title: "校门口接", category: "school", tags: ["接孩子"], mode: "duo",
    sentences: [
      { en: "Mama!", zh: "妈妈！", speaker: "brother", type: "broExcite" },
      { en: "Here!", zh: "这里！", speaker: "mom", type: "momCalling" },
      { en: "How was today?", zh: "今天怎样？", speaker: "mom", type: "momSoft" },
      { en: "Fun!", zh: "好玩！", speaker: "brother", type: "broExcite" },
      { en: "What did you learn?", zh: "学了啥？", speaker: "mom", type: "broCurious" },
      { en: "About magnets.", zh: "磁铁。", speaker: "brother", type: "casual" },
      { en: "Cool.", zh: "酷。", speaker: "mom", type: "momSoft" },
      { en: "Snack?", zh: "吃点心？", speaker: "mom", type: "casual" },
      { en: "Yes!", zh: "好！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 137, title: "和好朋友", category: "school", tags: ["好朋友"], mode: "duo",
    sentences: [
      { en: "Best friends?", zh: "好朋友？", speaker: "brother", type: "broCute" },
      { en: "Forever!", zh: "永远！", speaker: "classmate", type: "broExcite" },
      { en: "Pinky promise.", zh: "拉钩。", speaker: "brother", type: "broCute" },
      { en: "Pinky pinky.", zh: "拉钩拉钩。", speaker: "classmate", type: "broCute" },
      { en: "Cross heart.", zh: "心口起誓。", speaker: "brother", type: "casual" },
      { en: "Stick together.", zh: "永远一起。", speaker: "classmate", type: "casual" },
      { en: "Yay!", zh: "耶！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 138, title: "邀请生日", category: "school", tags: ["生日","邀请"], mode: "duo",
    sentences: [
      { en: "Hey, guess what.", zh: "嘿，你猜。", speaker: "classmate", type: "broExcite" },
      { en: "What?", zh: "啥？", speaker: "sister", type: "broCurious" },
      { en: "My birthday!", zh: "我生日！", speaker: "classmate", type: "broExcite" },
      { en: "Saturday party.", zh: "周六派对。", speaker: "classmate", type: "casual" },
      { en: "Come?", zh: "来吗？", speaker: "classmate", type: "broCute" },
      { en: "Yes please!", zh: "去！", speaker: "sister", type: "broExcite" },
      { en: "Bring gift?", zh: "带礼物？", speaker: "sister", type: "broCurious" },
      { en: "Anything small.", zh: "随便。", speaker: "classmate", type: "casual" }
    ]
  },
  {
    id: 139, title: "分零食", category: "school", tags: ["零食","分享"], mode: "duo",
    sentences: [
      { en: "Got candy.", zh: "有糖。", speaker: "sister", type: "casual" },
      { en: "Share?", zh: "分我？", speaker: "classmate", type: "broCute" },
      { en: "Sure.", zh: "好。", speaker: "sister", type: "casual" },
      { en: "Which one?", zh: "哪个？", speaker: "classmate", type: "broCurious" },
      { en: "Pick.", zh: "选。", speaker: "sister", type: "casual" },
      { en: "Red please.", zh: "红的。", speaker: "classmate", type: "casual" },
      { en: "Thanks!", zh: "谢谢！", speaker: "classmate", type: "broExcite" },
      { en: "No prob.", zh: "没事。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 140, title: "玩石头剪刀", category: "school", tags: ["游戏","石头剪刀布"], mode: "duo",
    sentences: [
      { en: "Rock paper scissors.", zh: "石头剪刀布。", speaker: "brother", type: "broExcite" },
      { en: "Best of three.", zh: "三局两胜。", speaker: "classmate", type: "casual" },
      { en: "Ready?", zh: "准备好？", speaker: "brother", type: "casual" },
      { en: "Go!", zh: "开始！", speaker: "classmate", type: "broLoud" },
      { en: "Tie!", zh: "平！", speaker: "brother", type: "casual" },
      { en: "Again.", zh: "再来。", speaker: "classmate", type: "casual" },
      { en: "I win!", zh: "我赢！", speaker: "brother", type: "broExcite" },
      { en: "One more.", zh: "再来。", speaker: "classmate", type: "broWhine" }
    ]
  },
  {
    id: 141, title: "玩躲猫猫", category: "school", tags: ["游戏","躲猫猫"], mode: "duo",
    sentences: [
      { en: "Hide and seek!", zh: "躲猫猫！", speaker: "sister", type: "broExcite" },
      { en: "I count.", zh: "我数。", speaker: "brother", type: "casual" },
      { en: "Count to twenty.", zh: "数到二十。", speaker: "sister", type: "sisBoss" },
      { en: "One, two, three...", zh: "一二三...", speaker: "brother", type: "casual" },
      { en: "Hide hide hide.", zh: "躲躲躲。", speaker: "sister", type: "rushed" },
      { en: "Behind the chair.", zh: "椅子后。", speaker: "sister", type: "whisper" },
      { en: "Ready or not!", zh: "来啦！", speaker: "brother", type: "broExcite" },
      { en: "Found you!", zh: "找到了！", speaker: "brother", type: "broLoud" }
    ]
  },
  {
    id: 142, title: "抓人游戏", category: "school", tags: ["抓人"], mode: "duo",
    sentences: [
      { en: "Tag, you're it.", zh: "你抓我！", speaker: "brother", type: "broExcite" },
      { en: "Hey!", zh: "嘿！", speaker: "classmate", type: "broLoud" },
      { en: "Run!", zh: "跑！", speaker: "brother", type: "rushed" },
      { en: "Coming!", zh: "来啦！", speaker: "classmate", type: "broLoud" },
      { en: "Catch me!", zh: "抓我！", speaker: "brother", type: "broSilly" },
      { en: "Almost!", zh: "差点！", speaker: "classmate", type: "broLoud" },
      { en: "Got ya!", zh: "抓到！", speaker: "classmate", type: "broExcite" },
      { en: "Your turn.", zh: "你来抓。", speaker: "classmate", type: "casual" }
    ]
  },
  {
    id: 143, title: "跳皮筋", category: "school", tags: ["跳皮筋"], mode: "duo",
    sentences: [
      { en: "Wanna jump?", zh: "跳吗？", speaker: "sister", type: "casual" },
      { en: "Sure.", zh: "好。", speaker: "classmate", type: "casual" },
      { en: "Hold the band.", zh: "撑皮筋。", speaker: "sister", type: "casual" },
      { en: "Knee high.", zh: "膝盖高。", speaker: "sister", type: "casual" },
      { en: "Jump in!", zh: "跳进去！", speaker: "sister", type: "casual" },
      { en: "Out and in.", zh: "进进出出。", speaker: "sister", type: "casual" },
      { en: "Got tangled.", zh: "绊住了。", speaker: "classmate", type: "broScared" },
      { en: "My turn.", zh: "换我。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 144, title: "跳绳", category: "school", tags: ["跳绳"], mode: "duo",
    sentences: [
      { en: "Jump rope time.", zh: "跳绳。", speaker: "brother", type: "casual" },
      { en: "Hold both ends.", zh: "握两头。", speaker: "brother", type: "casual" },
      { en: "Swing over.", zh: "甩过去。", speaker: "brother", type: "casual" },
      { en: "Jump now.", zh: "跳。", speaker: "brother", type: "casual" },
      { en: "Again, again.", zh: "再来再来。", speaker: "brother", type: "casual" },
      { en: "Count!", zh: "数！", speaker: "brother", type: "broExcite" },
      { en: "Twenty already!", zh: "二十了！", speaker: "brother", type: "broProud" },
      { en: "Out of breath.", zh: "喘不过气。", speaker: "brother", type: "broTired" }
    ]
  },
  {
    id: 145, title: "聊老师八卦", category: "school", tags: ["八卦","老师"], mode: "duo",
    sentences: [
      { en: "Pssst.", zh: "嘘。", speaker: "classmate", type: "whisper" },
      { en: "Heard?", zh: "听说没？", speaker: "classmate", type: "whisper" },
      { en: "What?", zh: "啥？", speaker: "sister", type: "broCurious" },
      { en: "Mr. Lee got a haircut.", zh: "李老师剪头了。", speaker: "classmate", type: "whisper" },
      { en: "Whoa, really?", zh: "真的？", speaker: "sister", type: "surprised" },
      { en: "Saw this morning.", zh: "早上看到。", speaker: "classmate", type: "casual" },
      { en: "Looks weird?", zh: "怪不？", speaker: "sister", type: "broCurious" },
      { en: "A little.", zh: "有点。", speaker: "classmate", type: "broSilly" }
    ]
  },
  {
    id: 146, title: "夸同学衣服", category: "school", tags: ["夸赞"], mode: "duo",
    sentences: [
      { en: "Cute shirt!", zh: "上衣好看！", speaker: "sister", type: "broExcite" },
      { en: "Thanks!", zh: "谢谢！", speaker: "classmate", type: "broCute" },
      { en: "Where from?", zh: "哪买的？", speaker: "sister", type: "broCurious" },
      { en: "Mom got it.", zh: "妈买的。", speaker: "classmate", type: "casual" },
      { en: "So pretty.", zh: "好看死了。", speaker: "sister", type: "casual" },
      { en: "Yours too.", zh: "你的也好。", speaker: "classmate", type: "broCute" },
      { en: "Aww.", zh: "嘿嘿。", speaker: "sister", type: "broCute" }
    ]
  },
  {
    id: 147, title: "组队做项目", category: "school", tags: ["小组","合作"], mode: "duo",
    sentences: [
      { en: "Group project.", zh: "小组作业。", speaker: "teacher", type: "casual" },
      { en: "Pick a partner.", zh: "找搭档。", speaker: "teacher", type: "casual" },
      { en: "Wanna pair?", zh: "组队？", speaker: "sister", type: "broCute" },
      { en: "Yes!", zh: "好！", speaker: "classmate", type: "broExcite" },
      { en: "What topic?", zh: "啥题目？", speaker: "sister", type: "broCurious" },
      { en: "Animals?", zh: "动物？", speaker: "classmate", type: "casual" },
      { en: "Deal.", zh: "成交。", speaker: "sister", type: "casual" },
      { en: "Tomorrow start.", zh: "明天开始。", speaker: "classmate", type: "casual" }
    ]
  },
  {
    id: 148, title: "找老师告状", category: "school", tags: ["告状"], mode: "duo",
    sentences: [
      { en: "Teacher!", zh: "老师！", speaker: "brother", type: "broWhine" },
      { en: "What is it?", zh: "怎么了？", speaker: "teacher", type: "casual" },
      { en: "He hit me!", zh: "他打我！", speaker: "brother", type: "broCry" },
      { en: "Where?", zh: "哪里？", speaker: "teacher", type: "momWorry" },
      { en: "On the arm.", zh: "胳膊上。", speaker: "brother", type: "broCry" },
      { en: "Show me.", zh: "给我看。", speaker: "teacher", type: "momSoft" },
      { en: "Hurts.", zh: "疼。", speaker: "brother", type: "broCry" },
      { en: "I'll talk to him.", zh: "我说他。", speaker: "teacher", type: "momFirm" }
    ]
  },
  {
    id: 149, title: "请同学来家", category: "school", tags: ["家","邀请"], mode: "duo",
    sentences: [
      { en: "Come over today?", zh: "今天来我家？", speaker: "sister", type: "broCute" },
      { en: "Sure!", zh: "好！", speaker: "classmate", type: "broExcite" },
      { en: "After school.", zh: "放学后。", speaker: "sister", type: "casual" },
      { en: "What do?", zh: "干嘛？", speaker: "classmate", type: "broCurious" },
      { en: "Play games.", zh: "玩游戏。", speaker: "sister", type: "casual" },
      { en: "Eat snacks.", zh: "吃零食。", speaker: "sister", type: "casual" },
      { en: "Sounds fun!", zh: "好玩！", speaker: "classmate", type: "broExcite" },
      { en: "Ask your mom.", zh: "问你妈。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 150, title: "请假", category: "school", tags: ["请假","生病"], mode: "duo",
    sentences: [
      { en: "Feeling sick.", zh: "不舒服。", speaker: "brother", type: "broWhine" },
      { en: "What hurts?", zh: "哪疼？", speaker: "mom", type: "momWorry" },
      { en: "Head.", zh: "头。", speaker: "brother", type: "broCry" },
      { en: "Forehead's hot.", zh: "额头烫。", speaker: "mom", type: "momWorry" },
      { en: "Fever.", zh: "发烧了。", speaker: "mom", type: "casual" },
      { en: "Stay home today.", zh: "今天在家。", speaker: "mom", type: "momFirm" },
      { en: "Call teacher.", zh: "跟老师说。", speaker: "mom", type: "casual" },
      { en: "Rest in bed.", zh: "床上歇。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 151, title: "坐公交", category: "outdoor", tags: ["公交"], mode: "duo",
    sentences: [
      { en: "Bus is here.", zh: "公交来了。", speaker: "mom", type: "casual" },
      { en: "Hold on tight.", zh: "抓紧。", speaker: "mom", type: "momFirm" },
      { en: "Find seat.", zh: "找座。", speaker: "mom", type: "casual" },
      { en: "By the window?", zh: "靠窗？", speaker: "brother", type: "broCurious" },
      { en: "Sure.", zh: "可以。", speaker: "mom", type: "momSoft" },
      { en: "Press the bell.", zh: "按铃。", speaker: "mom", type: "casual" },
      { en: "Next stop.", zh: "下一站。", speaker: "mom", type: "casual" },
      { en: "Off we go.", zh: "下车。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 152, title: "坐地铁", category: "outdoor", tags: ["地铁"], mode: "duo",
    sentences: [
      { en: "Tap your card.", zh: "刷卡。", speaker: "mom", type: "casual" },
      { en: "Beep.", zh: "嘀。", speaker: "brother", type: "casual" },
      { en: "Mind the gap.", zh: "小心缝。", speaker: "mom", type: "momWorry" },
      { en: "Hold the pole.", zh: "扶杆。", speaker: "mom", type: "momFirm" },
      { en: "So crowded.", zh: "好挤。", speaker: "brother", type: "broWhine" },
      { en: "Next stop ours.", zh: "下站咱的。", speaker: "mom", type: "casual" },
      { en: "Stand by door.", zh: "门口站。", speaker: "mom", type: "casual" },
      { en: "Out!", zh: "下！", speaker: "mom", type: "rushed" }
    ]
  },
  {
    id: 153, title: "打车", category: "outdoor", tags: ["打车"], mode: "duo",
    sentences: [
      { en: "Tired, taxi?", zh: "累了，打车？", speaker: "mom", type: "momTired" },
      { en: "Yes please.", zh: "好。", speaker: "sister", type: "casual" },
      { en: "Raise hand.", zh: "招手。", speaker: "mom", type: "casual" },
      { en: "One coming.", zh: "来了一辆。", speaker: "mom", type: "casual" },
      { en: "Get in.", zh: "上车。", speaker: "mom", type: "casual" },
      { en: "Buckle up.", zh: "系安全带。", speaker: "mom", type: "momFirm" },
      { en: "Home please.", zh: "回家，谢谢。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 154, title: "过马路", category: "outdoor", tags: ["马路","红绿灯"], mode: "duo",
    sentences: [
      { en: "Stop here.", zh: "停这。", speaker: "mom", type: "momFirm" },
      { en: "Red light.", zh: "红灯。", speaker: "mom", type: "casual" },
      { en: "Look left.", zh: "看左。", speaker: "mom", type: "casual" },
      { en: "Look right.", zh: "看右。", speaker: "mom", type: "casual" },
      { en: "Green!", zh: "绿灯！", speaker: "brother", type: "broExcite" },
      { en: "Hand in hand.", zh: "拉手。", speaker: "mom", type: "momSoft" },
      { en: "Walk fast.", zh: "快走。", speaker: "mom", type: "rushed" },
      { en: "We made it.", zh: "过来了。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 155, title: "走路上学", category: "outdoor", tags: ["走路"], mode: "duo",
    sentences: [
      { en: "Beautiful morning.", zh: "好天气。", speaker: "mom", type: "casual" },
      { en: "Crisp air.", zh: "空气好。", speaker: "mom", type: "casual" },
      { en: "Look, bird!", zh: "看，鸟！", speaker: "brother", type: "broExcite" },
      { en: "Where?", zh: "哪？", speaker: "mom", type: "broCurious" },
      { en: "Tree top.", zh: "树顶。", speaker: "brother", type: "casual" },
      { en: "Pretty.", zh: "真好看。", speaker: "mom", type: "momSoft" },
      { en: "Don't lag.", zh: "别落后。", speaker: "mom", type: "casual" },
      { en: "Coming.", zh: "来啦。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 156, title: "骑自行车", category: "outdoor", tags: ["自行车"], mode: "duo",
    sentences: [
      { en: "Bike time!", zh: "骑车！", speaker: "brother", type: "broExcite" },
      { en: "Helmet on.", zh: "戴头盔。", speaker: "mom", type: "momFirm" },
      { en: "Strap tight.", zh: "扣紧。", speaker: "mom", type: "casual" },
      { en: "Hop on.", zh: "上车。", speaker: "brother", type: "casual" },
      { en: "Pedal pedal.", zh: "蹬蹬。", speaker: "brother", type: "casual" },
      { en: "Don't speed.", zh: "别飙。", speaker: "mom", type: "momWorry" },
      { en: "Whee!", zh: "哇——！", speaker: "brother", type: "broExcite" },
      { en: "Brake!", zh: "刹车！", speaker: "mom", type: "momWorry" },
      { en: "Easy turn.", zh: "慢拐弯。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 157, title: "骑滑板车", category: "outdoor", tags: ["滑板车"], mode: "narrate",
    sentences: [
      { en: "Scooter!", zh: "滑板车！", speaker: "brother", type: "broExcite" },
      { en: "One foot on.", zh: "一脚踩上。", speaker: "brother", type: "casual" },
      { en: "Push off.", zh: "蹬地。", speaker: "brother", type: "casual" },
      { en: "Glide!", zh: "滑！", speaker: "brother", type: "broExcite" },
      { en: "Hold handles.", zh: "握把手。", speaker: "brother", type: "casual" },
      { en: "Lean to turn.", zh: "身体倾斜。", speaker: "brother", type: "casual" },
      { en: "Brake foot down.", zh: "脚刹车。", speaker: "brother", type: "casual" },
      { en: "Stop.", zh: "停。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 158, title: "玩滑板", category: "outdoor", tags: ["滑板"], mode: "duo",
    sentences: [
      { en: "Skateboard!", zh: "滑板！", speaker: "brother", type: "broExcite" },
      { en: "Helmet first.", zh: "先戴头盔。", speaker: "mom", type: "momFirm" },
      { en: "And pads.", zh: "护具。", speaker: "mom", type: "casual" },
      { en: "Step on.", zh: "踩上。", speaker: "brother", type: "casual" },
      { en: "Wobble!", zh: "晃！", speaker: "brother", type: "broScared" },
      { en: "Bend knees.", zh: "弯膝盖。", speaker: "mom", type: "casual" },
      { en: "Push off.", zh: "蹬地。", speaker: "brother", type: "casual" },
      { en: "Whoosh!", zh: "呼——！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 159, title: "玩轮滑", category: "outdoor", tags: ["轮滑"], mode: "duo",
    sentences: [
      { en: "Skates on.", zh: "穿轮滑。", speaker: "brother", type: "casual" },
      { en: "Sit to buckle.", zh: "坐着扣。", speaker: "mom", type: "casual" },
      { en: "Stand up slow.", zh: "慢站。", speaker: "mom", type: "casual" },
      { en: "Whoa wobbly!", zh: "哇晃！", speaker: "brother", type: "broScared" },
      { en: "Hold the wall.", zh: "扶墙。", speaker: "mom", type: "momSoft" },
      { en: "Tiny steps.", zh: "小步走。", speaker: "mom", type: "casual" },
      { en: "Push glide.", zh: "蹬一下。", speaker: "mom", type: "casual" },
      { en: "Getting it!", zh: "会了！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 160, title: "排队", category: "outdoor", tags: ["排队"], mode: "duo",
    sentences: [
      { en: "Long line.", zh: "队真长。", speaker: "mom", type: "momTired" },
      { en: "Patience.", zh: "耐心点。", speaker: "mom", type: "casual" },
      { en: "How long?", zh: "多久？", speaker: "brother", type: "broWhine" },
      { en: "Twenty minutes.", zh: "二十分。", speaker: "mom", type: "casual" },
      { en: "Aw man.", zh: "唉。", speaker: "brother", type: "broPout" },
      { en: "Play I spy.", zh: "玩猜东西。", speaker: "mom", type: "casual" },
      { en: "I spy red.", zh: "我猜红色。", speaker: "mom", type: "casual" },
      { en: "That sign!", zh: "那牌子！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 161, title: "上公园", category: "outdoor", tags: ["公园"], mode: "duo",
    sentences: [
      { en: "Park time!", zh: "去公园！", speaker: "brother", type: "broExcite" },
      { en: "Pack snacks.", zh: "带零食。", speaker: "mom", type: "casual" },
      { en: "Water bottle.", zh: "水壶。", speaker: "mom", type: "casual" },
      { en: "Sunscreen?", zh: "防晒？", speaker: "mom", type: "broCurious" },
      { en: "On already.", zh: "抹了。", speaker: "sister", type: "casual" },
      { en: "Let's go!", zh: "走！", speaker: "brother", type: "broExcite" },
      { en: "Don't run off.", zh: "别乱跑。", speaker: "mom", type: "momFirm" },
      { en: "Stay close.", zh: "别走远。", speaker: "mom", type: "momWorry" }
    ]
  },
  {
    id: 162, title: "荡秋千", category: "outdoor", tags: ["秋千"], mode: "duo",
    sentences: [
      { en: "My turn!", zh: "我来！", speaker: "brother", type: "broExcite" },
      { en: "Hop on.", zh: "上来。", speaker: "sister", type: "casual" },
      { en: "Hold tight.", zh: "抓紧。", speaker: "sister", type: "sisBoss" },
      { en: "Push me!", zh: "推我！", speaker: "brother", type: "broWhine" },
      { en: "Here we go.", zh: "推啦。", speaker: "sister", type: "casual" },
      { en: "Higher!", zh: "再高！", speaker: "brother", type: "broLoud" },
      { en: "Not too high.", zh: "别太高。", speaker: "sister", type: "sisWorry" },
      { en: "Wheee!", zh: "哇——！", speaker: "brother", type: "broExcite" },
      { en: "Slow down.", zh: "慢点。", speaker: "sister", type: "sisBoss" },
      { en: "One more!", zh: "再来！", speaker: "brother", type: "broWhine" }
    ]
  },
  {
    id: 163, title: "玩滑梯", category: "outdoor", tags: ["滑梯"], mode: "narrate",
    sentences: [
      { en: "Big slide!", zh: "大滑梯！", speaker: "brother", type: "broExcite" },
      { en: "Climb up.", zh: "爬上去。", speaker: "brother", type: "casual" },
      { en: "Hand over hand.", zh: "一手一手。", speaker: "brother", type: "casual" },
      { en: "Top!", zh: "到顶！", speaker: "brother", type: "broProud" },
      { en: "Sit on edge.", zh: "坐边上。", speaker: "brother", type: "casual" },
      { en: "Push off!", zh: "滑下去！", speaker: "brother", type: "broLoud" },
      { en: "Zoom!", zh: "嗖——！", speaker: "brother", type: "broExcite" },
      { en: "Land!", zh: "落地！", speaker: "brother", type: "casual" },
      { en: "Again!", zh: "再来！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 164, title: "玩跷跷板", category: "outdoor", tags: ["跷跷板"], mode: "duo",
    sentences: [
      { en: "Seesaw!", zh: "跷跷板！", speaker: "brother", type: "broExcite" },
      { en: "I'm heavier.", zh: "我重。", speaker: "sister", type: "casual" },
      { en: "Sit down.", zh: "坐好。", speaker: "sister", type: "casual" },
      { en: "Push off!", zh: "蹬！", speaker: "brother", type: "broExcite" },
      { en: "Up I go!", zh: "上去！", speaker: "brother", type: "broExcite" },
      { en: "Down now.", zh: "下来。", speaker: "sister", type: "casual" },
      { en: "Bounce!", zh: "蹦！", speaker: "brother", type: "broSilly" },
      { en: "Not too fast.", zh: "别太快。", speaker: "sister", type: "sisWorry" }
    ]
  },
  {
    id: 165, title: "玩沙子", category: "outdoor", tags: ["沙子"], mode: "duo",
    sentences: [
      { en: "Sandbox!", zh: "沙坑！", speaker: "brother", type: "broExcite" },
      { en: "Shoes off.", zh: "脱鞋。", speaker: "sister", type: "casual" },
      { en: "Build castle?", zh: "建城堡？", speaker: "brother", type: "broCute" },
      { en: "Get a bucket.", zh: "拿桶。", speaker: "sister", type: "casual" },
      { en: "Pack sand in.", zh: "塞沙子。", speaker: "sister", type: "casual" },
      { en: "Flip it.", zh: "倒扣。", speaker: "sister", type: "casual" },
      { en: "Tower!", zh: "塔！", speaker: "brother", type: "broExcite" },
      { en: "Dig moat.", zh: "挖护城河。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 166, title: "踩水坑", category: "outdoor", tags: ["水坑","雨后"], mode: "duo",
    sentences: [
      { en: "Puddle!", zh: "水坑！", speaker: "brother", type: "broExcite" },
      { en: "Don't!", zh: "别！", speaker: "mom", type: "momFirm" },
      { en: "Please?", zh: "求求啦？", speaker: "brother", type: "broCute" },
      { en: "Boots on at least.", zh: "穿雨鞋。", speaker: "mom", type: "casual" },
      { en: "Yes!", zh: "好！", speaker: "brother", type: "broExcite" },
      { en: "Splash!", zh: "啪叽！", speaker: "brother", type: "broLoud" },
      { en: "Stomp stomp!", zh: "踩踩！", speaker: "brother", type: "broSilly" },
      { en: "Pants wet now.", zh: "裤子湿。", speaker: "mom", type: "momTired" }
    ]
  },
  {
    id: 167, title: "捡石头", category: "outdoor", tags: ["石头"], mode: "duo",
    sentences: [
      { en: "Pretty rock!", zh: "好看的石头！", speaker: "brother", type: "broExcite" },
      { en: "Show me.", zh: "给我看。", speaker: "sister", type: "casual" },
      { en: "Sparkly.", zh: "闪闪的。", speaker: "brother", type: "broExcite" },
      { en: "Cool.", zh: "酷。", speaker: "sister", type: "casual" },
      { en: "Keeping it.", zh: "留着。", speaker: "brother", type: "broCute" },
      { en: "Pocket full.", zh: "口袋满。", speaker: "mom", type: "momTired" },
      { en: "One more!", zh: "再一个！", speaker: "brother", type: "broWhine" },
      { en: "Just one.", zh: "就一个。", speaker: "mom", type: "momFirm" }
    ]
  },
  {
    id: 168, title: "追蝴蝶", category: "outdoor", tags: ["蝴蝶"], mode: "narrate",
    sentences: [
      { en: "Butterfly!", zh: "蝴蝶！", speaker: "brother", type: "broExcite" },
      { en: "So pretty.", zh: "真漂亮。", speaker: "brother", type: "broCute" },
      { en: "Yellow wings.", zh: "黄翅膀。", speaker: "brother", type: "casual" },
      { en: "Chase chase!", zh: "追追！", speaker: "brother", type: "rushed" },
      { en: "Almost got it.", zh: "差点抓到。", speaker: "brother", type: "broWhine" },
      { en: "Flew away.", zh: "飞走了。", speaker: "brother", type: "broPout" },
      { en: "Come back.", zh: "回来啊。", speaker: "brother", type: "broWhine" }
    ]
  },
  {
    id: 169, title: "喂鸽子", category: "outdoor", tags: ["鸽子"], mode: "duo",
    sentences: [
      { en: "So many doves!", zh: "好多鸽子！", speaker: "brother", type: "broExcite" },
      { en: "Got bread.", zh: "有面包。", speaker: "sister", type: "casual" },
      { en: "Toss it.", zh: "扔。", speaker: "sister", type: "casual" },
      { en: "They flock!", zh: "都来了！", speaker: "brother", type: "broLoud" },
      { en: "Stay still.", zh: "别动。", speaker: "sister", type: "sisBoss" },
      { en: "Hand out.", zh: "伸手。", speaker: "sister", type: "casual" },
      { en: "On my hand!", zh: "在我手上！", speaker: "brother", type: "broExcite" },
      { en: "Don't grab.", zh: "别抓。", speaker: "sister", type: "sisWorry" }
    ]
  },
  {
    id: 170, title: "捡树叶", category: "outdoor", tags: ["树叶","秋天"], mode: "duo",
    sentences: [
      { en: "Red leaves!", zh: "红叶！", speaker: "sister", type: "broExcite" },
      { en: "So many colors.", zh: "好多颜色。", speaker: "sister", type: "casual" },
      { en: "Pick big ones.", zh: "挑大的。", speaker: "sister", type: "casual" },
      { en: "This one?", zh: "这个？", speaker: "brother", type: "broCurious" },
      { en: "Perfect.", zh: "完美。", speaker: "sister", type: "casual" },
      { en: "Press in book.", zh: "夹书里。", speaker: "sister", type: "casual" },
      { en: "Save forever.", zh: "永远保留。", speaker: "brother", type: "broCute" },
      { en: "Pretty.", zh: "真美。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 171, title: "去动物园", category: "outdoor", tags: ["动物园"], mode: "duo",
    sentences: [
      { en: "Zoo today!", zh: "去动物园！", speaker: "brother", type: "broExcite" },
      { en: "Buy tickets.", zh: "买票。", speaker: "mom", type: "casual" },
      { en: "What first?", zh: "先看啥？", speaker: "brother", type: "broCurious" },
      { en: "Tigers?", zh: "老虎？", speaker: "sister", type: "casual" },
      { en: "Yes!", zh: "好！", speaker: "brother", type: "broExcite" },
      { en: "Map check.", zh: "看地图。", speaker: "mom", type: "casual" },
      { en: "This way.", zh: "这边。", speaker: "mom", type: "casual" },
      { en: "Hurry!", zh: "快！", speaker: "brother", type: "rushed" }
    ]
  },
  {
    id: 172, title: "看大象", category: "outdoor", tags: ["大象"], mode: "duo",
    sentences: [
      { en: "Huge elephant!", zh: "大象好大！", speaker: "brother", type: "broExcite" },
      { en: "Long trunk.", zh: "长鼻子。", speaker: "sister", type: "casual" },
      { en: "Picks up food.", zh: "卷食物。", speaker: "sister", type: "casual" },
      { en: "Whoa!", zh: "哇！", speaker: "brother", type: "surprised" },
      { en: "Big ears.", zh: "大耳朵。", speaker: "sister", type: "casual" },
      { en: "Flapping!", zh: "扇啊扇！", speaker: "brother", type: "broExcite" },
      { en: "Don't get close.", zh: "别太近。", speaker: "mom", type: "momWorry" },
      { en: "Sprays water!", zh: "喷水！", speaker: "brother", type: "broLoud" }
    ]
  },
  {
    id: 173, title: "看猴子", category: "outdoor", tags: ["猴子"], mode: "duo",
    sentences: [
      { en: "Look, monkeys!", zh: "猴子！", speaker: "brother", type: "broExcite" },
      { en: "Swinging.", zh: "荡来荡去。", speaker: "sister", type: "casual" },
      { en: "Eating banana.", zh: "吃香蕉。", speaker: "sister", type: "casual" },
      { en: "So funny.", zh: "好搞笑。", speaker: "brother", type: "broSilly" },
      { en: "That one stares.", zh: "那只盯我。", speaker: "brother", type: "broScared" },
      { en: "Make face.", zh: "做鬼脸。", speaker: "sister", type: "sisTease" },
      { en: "It copies!", zh: "它学我！", speaker: "brother", type: "broLoud" }
    ]
  },
  {
    id: 174, title: "海洋馆", category: "outdoor", tags: ["海洋馆"], mode: "duo",
    sentences: [
      { en: "Underwater tunnel!", zh: "海底隧道！", speaker: "sister", type: "broExcite" },
      { en: "Shark!", zh: "鲨鱼！", speaker: "brother", type: "broLoud" },
      { en: "Big one.", zh: "好大。", speaker: "sister", type: "surprised" },
      { en: "Scary?", zh: "怕？", speaker: "mom", type: "broCurious" },
      { en: "Behind glass.", zh: "玻璃后面。", speaker: "sister", type: "casual" },
      { en: "Jellyfish!", zh: "水母！", speaker: "brother", type: "broExcite" },
      { en: "Glowing.", zh: "发光。", speaker: "sister", type: "casual" },
      { en: "Cool.", zh: "好酷。", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 175, title: "游乐场", category: "outdoor", tags: ["游乐场"], mode: "duo",
    sentences: [
      { en: "Theme park!", zh: "游乐场！", speaker: "brother", type: "broExcite" },
      { en: "Long lines.", zh: "队真长。", speaker: "mom", type: "momTired" },
      { en: "Roller coaster?", zh: "过山车？", speaker: "sister", type: "broCute" },
      { en: "Too scary.", zh: "太吓。", speaker: "brother", type: "broScared" },
      { en: "Merry-go-round?", zh: "旋转木马？", speaker: "brother", type: "broCute" },
      { en: "Yes please.", zh: "好。", speaker: "sister", type: "casual" },
      { en: "Get tokens.", zh: "买代币。", speaker: "mom", type: "casual" },
      { en: "Line up!", zh: "排队！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 176, title: "过山车", category: "outdoor", tags: ["过山车"], mode: "duo",
    sentences: [
      { en: "Buckle in.", zh: "扣安全带。", speaker: "mom", type: "momFirm" },
      { en: "Scared!", zh: "怕！", speaker: "brother", type: "broScared" },
      { en: "Hold on tight.", zh: "抓紧。", speaker: "sister", type: "sisBoss" },
      { en: "Climbing up.", zh: "往上爬。", speaker: "sister", type: "casual" },
      { en: "Top!", zh: "到顶！", speaker: "brother", type: "broScared" },
      { en: "Aaahhh!", zh: "啊——！", speaker: "brother", type: "broLoud" },
      { en: "Loop coming!", zh: "翻圈了！", speaker: "sister", type: "broLoud" },
      { en: "Stomach drop!", zh: "肚子飞了！", speaker: "brother", type: "broLoud" },
      { en: "Again?", zh: "再来？", speaker: "sister", type: "broExcite" },
      { en: "Nope.", zh: "不要。", speaker: "brother", type: "broScared" }
    ]
  },
  {
    id: 177, title: "旋转木马", category: "outdoor", tags: ["旋转木马"], mode: "narrate",
    sentences: [
      { en: "Pretty horses.", zh: "马好看。", speaker: "sister", type: "broCute" },
      { en: "Pick one.", zh: "选一匹。", speaker: "sister", type: "casual" },
      { en: "White one!", zh: "白马！", speaker: "sister", type: "broExcite" },
      { en: "Climb on.", zh: "爬上去。", speaker: "sister", type: "casual" },
      { en: "Hold the pole.", zh: "抓杆。", speaker: "sister", type: "casual" },
      { en: "Round and round.", zh: "转啊转。", speaker: "sister", type: "broSilly" },
      { en: "Up and down.", zh: "上下颠。", speaker: "sister", type: "casual" },
      { en: "Wave at mom.", zh: "和妈挥手。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 178, title: "套圈赢奖", category: "outdoor", tags: ["套圈"], mode: "duo",
    sentences: [
      { en: "Ring toss!", zh: "套圈！", speaker: "brother", type: "broExcite" },
      { en: "How much?", zh: "多少钱？", speaker: "mom", type: "broCurious" },
      { en: "Five tries.", zh: "五次。", speaker: "brother", type: "casual" },
      { en: "Aim careful.", zh: "瞄准。", speaker: "mom", type: "casual" },
      { en: "Toss!", zh: "扔！", speaker: "brother", type: "broLoud" },
      { en: "Miss.", zh: "没中。", speaker: "brother", type: "broWhine" },
      { en: "Try again.", zh: "再来。", speaker: "mom", type: "momSoft" },
      { en: "Got one!", zh: "中了！", speaker: "brother", type: "broExcite" },
      { en: "Pick a prize.", zh: "选奖品。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 179, title: "打气球", category: "outdoor", tags: ["打气球","游戏"], mode: "duo",
    sentences: [
      { en: "Pop balloons!", zh: "打气球！", speaker: "brother", type: "broExcite" },
      { en: "How?", zh: "咋玩？", speaker: "sister", type: "broCurious" },
      { en: "Dart, aim, throw.", zh: "镖瞄准扔。", speaker: "brother", type: "casual" },
      { en: "Try.", zh: "试试。", speaker: "brother", type: "casual" },
      { en: "Pop!", zh: "啵！", speaker: "brother", type: "broLoud" },
      { en: "Got one!", zh: "打中！", speaker: "brother", type: "broExcite" },
      { en: "Three more.", zh: "再三个。", speaker: "brother", type: "casual" },
      { en: "Win the bear!", zh: "赢熊！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 180, title: "捉迷藏", category: "outdoor", tags: ["捉迷藏"], mode: "duo",
    sentences: [
      { en: "Hide and seek.", zh: "捉迷藏。", speaker: "brother", type: "broExcite" },
      { en: "You count.", zh: "你数。", speaker: "sister", type: "casual" },
      { en: "One, two, three...", zh: "一二三...", speaker: "brother", type: "casual" },
      { en: "Run!", zh: "跑！", speaker: "sister", type: "rushed" },
      { en: "Behind bush.", zh: "灌木后。", speaker: "sister", type: "whisper" },
      { en: "Twenty!", zh: "二十！", speaker: "brother", type: "broLoud" },
      { en: "Ready or not!", zh: "来啦！", speaker: "brother", type: "broExcite" },
      { en: "Found you!", zh: "找到了！", speaker: "brother", type: "broLoud" }
    ]
  },
  {
    id: 181, title: "踢足球", category: "outdoor", tags: ["足球"], mode: "duo",
    sentences: [
      { en: "Wanna play ball?", zh: "踢球？", speaker: "brother", type: "broCute" },
      { en: "Sure.", zh: "好。", speaker: "sister", type: "casual" },
      { en: "Pass to me.", zh: "传给我。", speaker: "sister", type: "casual" },
      { en: "Kick!", zh: "踢！", speaker: "brother", type: "broLoud" },
      { en: "Got it.", zh: "接到。", speaker: "sister", type: "casual" },
      { en: "Goal!", zh: "进了！", speaker: "brother", type: "broExcite" },
      { en: "One zero.", zh: "一比零。", speaker: "sister", type: "casual" },
      { en: "Again!", zh: "再来！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 182, title: "打篮球", category: "outdoor", tags: ["篮球"], mode: "duo",
    sentences: [
      { en: "Hoops!", zh: "投篮！", speaker: "brother", type: "broExcite" },
      { en: "Dribble.", zh: "运球。", speaker: "sister", type: "casual" },
      { en: "Bend low.", zh: "弯腰。", speaker: "sister", type: "casual" },
      { en: "Aim high.", zh: "瞄高。", speaker: "sister", type: "casual" },
      { en: "Shoot.", zh: "投。", speaker: "brother", type: "casual" },
      { en: "Swish!", zh: "刷！", speaker: "sister", type: "broExcite" },
      { en: "Nothing but net.", zh: "空心球！", speaker: "sister", type: "sisProud" },
      { en: "My turn.", zh: "换我。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 183, title: "打乒乓球", category: "outdoor", tags: ["乒乓"], mode: "duo",
    sentences: [
      { en: "Ping pong!", zh: "乒乓！", speaker: "brother", type: "broExcite" },
      { en: "Paddle, ball.", zh: "拍子球。", speaker: "sister", type: "casual" },
      { en: "Serve.", zh: "发球。", speaker: "sister", type: "casual" },
      { en: "Pock!", zh: "啪！", speaker: "brother", type: "casual" },
      { en: "Back!", zh: "回！", speaker: "sister", type: "casual" },
      { en: "Spin!", zh: "旋转！", speaker: "brother", type: "broExcite" },
      { en: "Missed.", zh: "没接到。", speaker: "sister", type: "broWhine" },
      { en: "Five to four.", zh: "五比四。", speaker: "brother", type: "broProud" }
    ]
  },
  {
    id: 184, title: "打羽毛球", category: "outdoor", tags: ["羽毛球"], mode: "duo",
    sentences: [
      { en: "Badminton.", zh: "羽毛球。", speaker: "sister", type: "casual" },
      { en: "Hit it high.", zh: "打高点。", speaker: "sister", type: "casual" },
      { en: "Whack!", zh: "啪！", speaker: "brother", type: "broLoud" },
      { en: "Up it goes.", zh: "上去了。", speaker: "sister", type: "casual" },
      { en: "Run back.", zh: "退后。", speaker: "sister", type: "casual" },
      { en: "Got it!", zh: "接到！", speaker: "brother", type: "broExcite" },
      { en: "Falls down.", zh: "落地了。", speaker: "sister", type: "casual" },
      { en: "Wind too strong.", zh: "风大。", speaker: "brother", type: "broWhine" }
    ]
  },
  {
    id: 185, title: "踩单车环路", category: "outdoor", tags: ["骑行","环路"], mode: "duo",
    sentences: [
      { en: "Bike trail.", zh: "骑行道。", speaker: "dad", type: "casual" },
      { en: "Helmets all.", zh: "都戴盔。", speaker: "dad", type: "momFirm" },
      { en: "Single file.", zh: "一列。", speaker: "dad", type: "casual" },
      { en: "Watch turns.", zh: "看拐弯。", speaker: "dad", type: "casual" },
      { en: "Down hill!", zh: "下坡！", speaker: "brother", type: "broExcite" },
      { en: "Brake easy.", zh: "轻刹。", speaker: "dad", type: "momWorry" },
      { en: "Wheee!", zh: "哇——！", speaker: "brother", type: "broExcite" },
      { en: "Rest at bench.", zh: "椅子歇。", speaker: "dad", type: "casual" }
    ]
  },
  {
    id: 186, title: "去博物馆", category: "outdoor", tags: ["博物馆"], mode: "duo",
    sentences: [
      { en: "Museum visit.", zh: "去博物馆。", speaker: "mom", type: "casual" },
      { en: "Quiet inside.", zh: "里面安静。", speaker: "mom", type: "momFirm" },
      { en: "Dinosaur!", zh: "恐龙！", speaker: "brother", type: "broExcite" },
      { en: "Whisper, please.", zh: "小声。", speaker: "mom", type: "momSoft" },
      { en: "Sorry.", zh: "对不起。", speaker: "brother", type: "whisper" },
      { en: "Big bones.", zh: "大骨头。", speaker: "brother", type: "whisper" },
      { en: "Don't touch.", zh: "别摸。", speaker: "mom", type: "momFirm" },
      { en: "Just look.", zh: "光看。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 187, title: "看电影", category: "outdoor", tags: ["电影院"], mode: "duo",
    sentences: [
      { en: "Movie time.", zh: "看电影。", speaker: "dad", type: "casual" },
      { en: "Popcorn?", zh: "爆米花？", speaker: "brother", type: "broCute" },
      { en: "One bucket.", zh: "一桶。", speaker: "dad", type: "casual" },
      { en: "Find seats.", zh: "找座。", speaker: "dad", type: "casual" },
      { en: "Lights off.", zh: "关灯了。", speaker: "sister", type: "casual" },
      { en: "Hush.", zh: "嘘。", speaker: "dad", type: "momFirm" },
      { en: "It's starting.", zh: "开始了。", speaker: "sister", type: "broExcite" },
      { en: "Shh.", zh: "嘘。", speaker: "dad", type: "whisper" }
    ]
  },
  {
    id: 188, title: "吃冰激凌", category: "outdoor", tags: ["冰激凌"], mode: "duo",
    sentences: [
      { en: "Ice cream!", zh: "冰激凌！", speaker: "brother", type: "broExcite" },
      { en: "What flavor?", zh: "什么味？", speaker: "mom", type: "broCurious" },
      { en: "Chocolate.", zh: "巧克力。", speaker: "brother", type: "casual" },
      { en: "Strawberry.", zh: "草莓。", speaker: "sister", type: "casual" },
      { en: "One scoop each.", zh: "一人一勺。", speaker: "mom", type: "casual" },
      { en: "Lick fast.", zh: "快舔。", speaker: "sister", type: "casual" },
      { en: "Melting!", zh: "化了！", speaker: "brother", type: "broScared" },
      { en: "On the cone.", zh: "蛋筒上。", speaker: "sister", type: "casual" },
      { en: "Yummy.", zh: "好吃。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 189, title: "野餐", category: "outdoor", tags: ["野餐"], mode: "duo",
    sentences: [
      { en: "Spread the blanket.", zh: "铺垫子。", speaker: "mom", type: "casual" },
      { en: "Open basket.", zh: "开篮子。", speaker: "sister", type: "casual" },
      { en: "Sandwiches!", zh: "三明治！", speaker: "brother", type: "broExcite" },
      { en: "Juice boxes.", zh: "果汁盒。", speaker: "sister", type: "casual" },
      { en: "Sun's warm.", zh: "晒得暖。", speaker: "mom", type: "casual" },
      { en: "Ants!", zh: "蚂蚁！", speaker: "brother", type: "broScared" },
      { en: "Lift the food.", zh: "举食物。", speaker: "sister", type: "casual" },
      { en: "Tastes great.", zh: "真好吃。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 190, title: "放风筝", category: "outdoor", tags: ["风筝"], mode: "duo",
    sentences: [
      { en: "Windy day.", zh: "风大。", speaker: "dad", type: "casual" },
      { en: "Fly the kite.", zh: "放风筝。", speaker: "dad", type: "casual" },
      { en: "Hold the string.", zh: "握线。", speaker: "dad", type: "casual" },
      { en: "Run!", zh: "跑！", speaker: "dad", type: "rushed" },
      { en: "Up it goes!", zh: "飞起来！", speaker: "brother", type: "broExcite" },
      { en: "Higher!", zh: "再高！", speaker: "brother", type: "broLoud" },
      { en: "Let out string.", zh: "放线。", speaker: "dad", type: "casual" },
      { en: "Don't let go!", zh: "别松手！", speaker: "dad", type: "momFirm" }
    ]
  },
  {
    id: 191, title: "捉迷藏数数", category: "outdoor", tags: ["数数"], mode: "narrate",
    sentences: [
      { en: "Close your eyes.", zh: "闭眼。", speaker: "sister", type: "casual" },
      { en: "Cover face.", zh: "捂脸。", speaker: "sister", type: "casual" },
      { en: "One...", zh: "一...", speaker: "sister", type: "casual" },
      { en: "Two, three...", zh: "二，三...", speaker: "sister", type: "casual" },
      { en: "Ten, eleven...", zh: "十，十一...", speaker: "sister", type: "casual" },
      { en: "Twenty!", zh: "二十！", speaker: "sister", type: "broLoud" },
      { en: "Ready or not!", zh: "我来啦！", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 192, title: "买棉花糖", category: "outdoor", tags: ["棉花糖"], mode: "duo",
    sentences: [
      { en: "Cotton candy!", zh: "棉花糖！", speaker: "brother", type: "broExcite" },
      { en: "Pink one.", zh: "粉的。", speaker: "sister", type: "casual" },
      { en: "Spinning sugar.", zh: "转糖。", speaker: "brother", type: "broExcite" },
      { en: "Fluffy.", zh: "好软。", speaker: "sister", type: "broCute" },
      { en: "Take one.", zh: "拿一个。", speaker: "mom", type: "casual" },
      { en: "Bite!", zh: "咬！", speaker: "brother", type: "casual" },
      { en: "Melts away.", zh: "化了。", speaker: "brother", type: "surprised" },
      { en: "Sticky fingers.", zh: "手粘。", speaker: "sister", type: "broWhine" }
    ]
  },
  {
    id: 193, title: "看烟火", category: "outdoor", tags: ["烟火","节日"], mode: "duo",
    sentences: [
      { en: "Fireworks!", zh: "烟火！", speaker: "brother", type: "broExcite" },
      { en: "Look up.", zh: "看天。", speaker: "mom", type: "casual" },
      { en: "Boom!", zh: "嘭！", speaker: "brother", type: "broLoud" },
      { en: "So pretty.", zh: "真美。", speaker: "sister", type: "broCute" },
      { en: "Red one.", zh: "红的。", speaker: "brother", type: "casual" },
      { en: "Like flowers.", zh: "像花。", speaker: "sister", type: "casual" },
      { en: "Whoa!", zh: "哇！", speaker: "brother", type: "surprised" },
      { en: "Last one bigger.", zh: "最后大的。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 194, title: "看灯会", category: "outdoor", tags: ["灯会"], mode: "duo",
    sentences: [
      { en: "Lantern festival.", zh: "灯会。", speaker: "mom", type: "casual" },
      { en: "So bright!", zh: "好亮！", speaker: "brother", type: "broExcite" },
      { en: "Dragon lantern!", zh: "龙灯！", speaker: "sister", type: "broExcite" },
      { en: "Huge.", zh: "好大。", speaker: "brother", type: "surprised" },
      { en: "Take a photo.", zh: "拍张照。", speaker: "mom", type: "casual" },
      { en: "Smile!", zh: "笑！", speaker: "mom", type: "casual" },
      { en: "Cheese!", zh: "茄子！", speaker: "sister", type: "broSilly" },
      { en: "Walk slow.", zh: "慢走。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 195, title: "走累要抱", category: "outdoor", tags: ["走累","抱"], mode: "duo",
    sentences: [
      { en: "Tired feet.", zh: "脚酸。", speaker: "brother", type: "broTired" },
      { en: "Just a bit more.", zh: "再走点。", speaker: "mom", type: "momSoft" },
      { en: "Can't!", zh: "走不动！", speaker: "brother", type: "broWhine" },
      { en: "Carry me?", zh: "抱我？", speaker: "brother", type: "broCute" },
      { en: "Oof, heavy.", zh: "唉，重。", speaker: "mom", type: "momTired" },
      { en: "Please mom.", zh: "求妈妈。", speaker: "brother", type: "broCute" },
      { en: "Fine, hop up.", zh: "好，上来。", speaker: "mom", type: "casual" },
      { en: "Yay!", zh: "耶！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 196, title: "迷路了", category: "outdoor", tags: ["迷路"], mode: "duo",
    sentences: [
      { en: "Mom?", zh: "妈？", speaker: "brother", type: "broScared" },
      { en: "Where is she?", zh: "妈呢？", speaker: "brother", type: "broScared" },
      { en: "Don't move.", zh: "别动。", speaker: "sister", type: "sisCalm" },
      { en: "Stay put.", zh: "原地等。", speaker: "sister", type: "sisCalm" },
      { en: "She'll find us.", zh: "她会找。", speaker: "sister", type: "sisSweet" },
      { en: "Mom!", zh: "妈！", speaker: "brother", type: "broLoud" },
      { en: "Here!", zh: "这里！", speaker: "mom", type: "rushed" },
      { en: "Scared me.", zh: "吓死了。", speaker: "mom", type: "momWorry" },
      { en: "Sorry.", zh: "对不起。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 197, title: "公园喂鱼", category: "outdoor", tags: ["喂鱼"], mode: "duo",
    sentences: [
      { en: "Fish in pond!", zh: "池子里鱼！", speaker: "brother", type: "broExcite" },
      { en: "Get bread crumbs.", zh: "拿面包屑。", speaker: "sister", type: "casual" },
      { en: "Toss small.", zh: "扔小块。", speaker: "sister", type: "casual" },
      { en: "Look, they come!", zh: "来了！", speaker: "brother", type: "broExcite" },
      { en: "So many!", zh: "好多！", speaker: "sister", type: "surprised" },
      { en: "Big one!", zh: "大鱼！", speaker: "brother", type: "broLoud" },
      { en: "Splash!", zh: "啪！", speaker: "brother", type: "broSilly" },
      { en: "Wet me.", zh: "溅我了。", speaker: "sister", type: "sisAnnoy" }
    ]
  },
  {
    id: 198, title: "玩弹珠", category: "outdoor", tags: ["弹珠"], mode: "duo",
    sentences: [
      { en: "Marbles.", zh: "弹珠。", speaker: "brother", type: "casual" },
      { en: "Draw a circle.", zh: "画个圈。", speaker: "brother", type: "casual" },
      { en: "Put marbles in.", zh: "放珠子。", speaker: "brother", type: "casual" },
      { en: "Flick.", zh: "弹。", speaker: "brother", type: "casual" },
      { en: "Knock out one!", zh: "弹出一个！", speaker: "brother", type: "broExcite" },
      { en: "It's mine now.", zh: "归我了。", speaker: "brother", type: "broProud" },
      { en: "Hey!", zh: "诶！", speaker: "classmate", type: "broAnnoy" },
      { en: "Fair game.", zh: "规则。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 199, title: "玩水枪", category: "outdoor", tags: ["水枪","夏天"], mode: "duo",
    sentences: [
      { en: "Water gun fight!", zh: "水枪大战！", speaker: "brother", type: "broExcite" },
      { en: "Fill it up.", zh: "装满。", speaker: "sister", type: "casual" },
      { en: "Pump pump.", zh: "压几下。", speaker: "brother", type: "casual" },
      { en: "Watch out!", zh: "小心！", speaker: "sister", type: "broLoud" },
      { en: "Got you!", zh: "射中！", speaker: "brother", type: "broExcite" },
      { en: "Hey!", zh: "嘿！", speaker: "sister", type: "sisAnnoy" },
      { en: "Soaked.", zh: "湿透了。", speaker: "sister", type: "broTired" },
      { en: "Run!", zh: "跑！", speaker: "brother", type: "rushed" }
    ]
  },
  {
    id: 200, title: "打雪仗", category: "outdoor", tags: ["打雪仗","冬天"], mode: "duo",
    sentences: [
      { en: "Snow fight!", zh: "打雪仗！", speaker: "brother", type: "broExcite" },
      { en: "Pack a ball.", zh: "捏雪球。", speaker: "sister", type: "casual" },
      { en: "Squeeze tight.", zh: "捏紧。", speaker: "sister", type: "casual" },
      { en: "Throw!", zh: "扔！", speaker: "brother", type: "broLoud" },
      { en: "Splat!", zh: "啪！", speaker: "sister", type: "broLoud" },
      { en: "Behind tree!", zh: "躲树后！", speaker: "brother", type: "rushed" },
      { en: "Find me!", zh: "找我啊！", speaker: "brother", type: "broSilly" },
      { en: "Got you!", zh: "打中！", speaker: "sister", type: "broExcite" }
    ]
  },
  {
    id: 201, title: "搭积木", category: "toys", tags: ["积木"], mode: "duo",
    sentences: [
      { en: "Build a tower.", zh: "搭塔。", speaker: "brother", type: "broExcite" },
      { en: "Big base first.", zh: "底要大。", speaker: "sister", type: "sisBoss" },
      { en: "Stack 'em up.", zh: "一块块摞。", speaker: "sister", type: "casual" },
      { en: "Higher higher!", zh: "再高再高！", speaker: "brother", type: "broExcite" },
      { en: "Wobbling.", zh: "晃了。", speaker: "sister", type: "casual" },
      { en: "Crash!", zh: "倒啦！", speaker: "brother", type: "broLoud" },
      { en: "Try again.", zh: "再来。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 202, title: "拼乐高", category: "toys", tags: ["乐高"], mode: "duo",
    sentences: [
      { en: "Lego set.", zh: "乐高。", speaker: "brother", type: "broExcite" },
      { en: "Open manual.", zh: "翻说明书。", speaker: "sister", type: "casual" },
      { en: "Page one.", zh: "第一页。", speaker: "sister", type: "casual" },
      { en: "Find piece.", zh: "找块。", speaker: "sister", type: "casual" },
      { en: "Snap on.", zh: "扣上。", speaker: "brother", type: "casual" },
      { en: "Click!", zh: "咔！", speaker: "brother", type: "broExcite" },
      { en: "Next page.", zh: "下页。", speaker: "sister", type: "casual" },
      { en: "Looks cool.", zh: "酷死了。", speaker: "brother", type: "broProud" }
    ]
  },
  {
    id: 203, title: "玩拼图", category: "toys", tags: ["拼图"], mode: "duo",
    sentences: [
      { en: "Hundred pieces.", zh: "一百片。", speaker: "sister", type: "casual" },
      { en: "Whoa.", zh: "哇。", speaker: "brother", type: "surprised" },
      { en: "Find edges.", zh: "找边边。", speaker: "sister", type: "casual" },
      { en: "Got one!", zh: "一块！", speaker: "brother", type: "broExcite" },
      { en: "Match color.", zh: "对颜色。", speaker: "sister", type: "casual" },
      { en: "Try this.", zh: "试这块。", speaker: "brother", type: "casual" },
      { en: "Nope.", zh: "不对。", speaker: "sister", type: "casual" },
      { en: "Click!", zh: "咔哒！", speaker: "brother", type: "broExcite" },
      { en: "Finished!", zh: "拼完了！", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 204, title: "玩磁力片", category: "toys", tags: ["磁力片"], mode: "duo",
    sentences: [
      { en: "Magnetic tiles.", zh: "磁力片。", speaker: "brother", type: "casual" },
      { en: "Snap together.", zh: "吸一起。", speaker: "sister", type: "casual" },
      { en: "Build a square.", zh: "搭方块。", speaker: "sister", type: "casual" },
      { en: "Now a cube.", zh: "再立体。", speaker: "sister", type: "casual" },
      { en: "Wow!", zh: "哇！", speaker: "brother", type: "surprised" },
      { en: "Add a roof.", zh: "加房顶。", speaker: "brother", type: "casual" },
      { en: "It's a house!", zh: "是房子！", speaker: "brother", type: "broExcite" },
      { en: "Cute.", zh: "可爱。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 205, title: "玩黏土", category: "toys", tags: ["黏土"], mode: "duo",
    sentences: [
      { en: "Open the clay.", zh: "开黏土。", speaker: "brother", type: "casual" },
      { en: "Soft and squishy.", zh: "软软的。", speaker: "brother", type: "broCute" },
      { en: "Roll a ball.", zh: "搓圆球。", speaker: "sister", type: "casual" },
      { en: "Squish it!", zh: "压扁！", speaker: "brother", type: "broSilly" },
      { en: "Make a snake.", zh: "搓条蛇。", speaker: "sister", type: "casual" },
      { en: "Long long.", zh: "好长。", speaker: "brother", type: "casual" },
      { en: "Make a face.", zh: "捏个脸。", speaker: "sister", type: "casual" },
      { en: "Eyes, nose.", zh: "眼鼻子。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 206, title: "折纸", category: "toys", tags: ["折纸"], mode: "duo",
    sentences: [
      { en: "Make a crane.", zh: "折千纸鹤。", speaker: "sister", type: "casual" },
      { en: "Hard!", zh: "难！", speaker: "brother", type: "broWhine" },
      { en: "Watch me.", zh: "看我。", speaker: "sister", type: "casual" },
      { en: "Fold in half.", zh: "对折。", speaker: "sister", type: "casual" },
      { en: "Now triangle.", zh: "三角。", speaker: "sister", type: "casual" },
      { en: "Crease tight.", zh: "压紧。", speaker: "sister", type: "casual" },
      { en: "Pull wings.", zh: "拉翅膀。", speaker: "sister", type: "casual" },
      { en: "It flies!", zh: "会飞！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 207, title: "做纸飞机", category: "toys", tags: ["纸飞机"], mode: "narrate",
    sentences: [
      { en: "Plain paper.", zh: "白纸。", speaker: "brother", type: "casual" },
      { en: "Fold long.", zh: "对折长边。", speaker: "brother", type: "casual" },
      { en: "Crease center.", zh: "中线压。", speaker: "brother", type: "casual" },
      { en: "Corners in.", zh: "角折进。", speaker: "brother", type: "casual" },
      { en: "Sharp tip.", zh: "尖头。", speaker: "brother", type: "casual" },
      { en: "Wings out.", zh: "翅膀展。", speaker: "brother", type: "casual" },
      { en: "Throw!", zh: "扔！", speaker: "brother", type: "broLoud" },
      { en: "Soars!", zh: "飞远了！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 208, title: "剪纸", category: "toys", tags: ["剪纸"], mode: "duo",
    sentences: [
      { en: "Get scissors.", zh: "拿剪刀。", speaker: "sister", type: "casual" },
      { en: "Careful!", zh: "小心！", speaker: "mom", type: "momWorry" },
      { en: "Fold paper.", zh: "折纸。", speaker: "sister", type: "casual" },
      { en: "Cut snowflake.", zh: "剪雪花。", speaker: "sister", type: "casual" },
      { en: "Snip snip.", zh: "嚓嚓。", speaker: "sister", type: "casual" },
      { en: "Open it!", zh: "打开！", speaker: "brother", type: "broExcite" },
      { en: "Beautiful.", zh: "好看。", speaker: "sister", type: "sisProud" },
      { en: "Make more.", zh: "多剪几个。", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 209, title: "玩遥控车", category: "toys", tags: ["遥控车"], mode: "duo",
    sentences: [
      { en: "RC car!", zh: "遥控车！", speaker: "brother", type: "broExcite" },
      { en: "Insert battery.", zh: "装电池。", speaker: "brother", type: "casual" },
      { en: "Turn it on.", zh: "开开关。", speaker: "brother", type: "casual" },
      { en: "Push forward.", zh: "推前。", speaker: "brother", type: "casual" },
      { en: "Zoom!", zh: "嗖！", speaker: "brother", type: "broExcite" },
      { en: "Turn left.", zh: "左拐。", speaker: "brother", type: "casual" },
      { en: "Almost hit chair!", zh: "差点撞椅子！", speaker: "sister", type: "broLoud" },
      { en: "Brake!", zh: "刹车！", speaker: "brother", type: "rushed" }
    ]
  },
  {
    id: 210, title: "玩遥控飞机", category: "toys", tags: ["遥控飞机"], mode: "duo",
    sentences: [
      { en: "Drone time.", zh: "飞机时间。", speaker: "brother", type: "broExcite" },
      { en: "Outside please.", zh: "去外面。", speaker: "mom", type: "casual" },
      { en: "Open space.", zh: "开阔地。", speaker: "dad", type: "casual" },
      { en: "Push up.", zh: "推杆。", speaker: "brother", type: "casual" },
      { en: "Whirr!", zh: "嗡嗡！", speaker: "brother", type: "broExcite" },
      { en: "Higher.", zh: "再高。", speaker: "sister", type: "casual" },
      { en: "Wind blew it!", zh: "风吹偏了！", speaker: "brother", type: "broScared" },
      { en: "Come back!", zh: "回来！", speaker: "brother", type: "broLoud" }
    ]
  },
  {
    id: 211, title: "玩魔方", category: "toys", tags: ["魔方"], mode: "duo",
    sentences: [
      { en: "Rubik's cube.", zh: "魔方。", speaker: "sister", type: "casual" },
      { en: "All mixed up.", zh: "都乱了。", speaker: "sister", type: "casual" },
      { en: "Solve it!", zh: "还原！", speaker: "brother", type: "broExcite" },
      { en: "White first.", zh: "先白色。", speaker: "sister", type: "casual" },
      { en: "Twist twist.", zh: "拧拧。", speaker: "sister", type: "casual" },
      { en: "How?!", zh: "怎么弄？", speaker: "brother", type: "broCurious" },
      { en: "Watch video.", zh: "看视频。", speaker: "sister", type: "casual" },
      { en: "Did one side!", zh: "弄好一面！", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 212, title: "玩弹簧床", category: "toys", tags: ["蹦床"], mode: "duo",
    sentences: [
      { en: "Trampoline!", zh: "蹦床！", speaker: "brother", type: "broExcite" },
      { en: "Take off shoes.", zh: "脱鞋。", speaker: "mom", type: "casual" },
      { en: "Climb up.", zh: "爬上。", speaker: "brother", type: "casual" },
      { en: "Boing!", zh: "蹦！", speaker: "brother", type: "broLoud" },
      { en: "Higher!", zh: "再高！", speaker: "brother", type: "broExcite" },
      { en: "Careful.", zh: "小心。", speaker: "mom", type: "momWorry" },
      { en: "Bounce bounce!", zh: "蹦蹦！", speaker: "brother", type: "broSilly" },
      { en: "Out of breath.", zh: "喘不过气。", speaker: "brother", type: "broTired" }
    ]
  },
  {
    id: 213, title: "玩泡泡", category: "toys", tags: ["泡泡"], mode: "duo",
    sentences: [
      { en: "Bubbles!", zh: "泡泡！", speaker: "brother", type: "broExcite" },
      { en: "Dip the wand.", zh: "蘸一下。", speaker: "sister", type: "casual" },
      { en: "Blow slow.", zh: "慢吹。", speaker: "sister", type: "casual" },
      { en: "Big one!", zh: "好大！", speaker: "brother", type: "broExcite" },
      { en: "Catch it!", zh: "抓！", speaker: "brother", type: "rushed" },
      { en: "Pop.", zh: "破了。", speaker: "sister", type: "casual" },
      { en: "Aw.", zh: "唉。", speaker: "brother", type: "broPout" },
      { en: "Make more.", zh: "再吹。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 214, title: "玩 slime", category: "toys", tags: ["slime","史莱姆"], mode: "duo",
    sentences: [
      { en: "Slime!", zh: "史莱姆！", speaker: "brother", type: "broExcite" },
      { en: "Squish it.", zh: "捏捏。", speaker: "sister", type: "casual" },
      { en: "Soooo stretchy.", zh: "好弹。", speaker: "brother", type: "broCute" },
      { en: "Slap it.", zh: "拍一拍。", speaker: "brother", type: "broSilly" },
      { en: "Crackle!", zh: "啵啵响！", speaker: "brother", type: "broLoud" },
      { en: "Don't drop.", zh: "别掉。", speaker: "sister", type: "sisWorry" },
      { en: "Sticky.", zh: "粘。", speaker: "brother", type: "broWhine" },
      { en: "Wash hands.", zh: "洗手。", speaker: "mom", type: "momFirm" }
    ]
  },
  {
    id: 215, title: "玩气球", category: "toys", tags: ["气球"], mode: "duo",
    sentences: [
      { en: "Balloon!", zh: "气球！", speaker: "brother", type: "broExcite" },
      { en: "Blow it up.", zh: "吹气。", speaker: "sister", type: "casual" },
      { en: "Big breath.", zh: "深呼吸。", speaker: "sister", type: "casual" },
      { en: "Hold it!", zh: "捏住！", speaker: "sister", type: "casual" },
      { en: "Tie a knot.", zh: "打结。", speaker: "sister", type: "casual" },
      { en: "Hit it up!", zh: "拍上去！", speaker: "brother", type: "broSilly" },
      { en: "Don't pop!", zh: "别破！", speaker: "sister", type: "sisWorry" },
      { en: "Pop!", zh: "啵！", speaker: "brother", type: "broLoud" }
    ]
  },
  {
    id: 216, title: "过家家", category: "toys", tags: ["过家家"], mode: "duo",
    sentences: [
      { en: "House time.", zh: "过家家。", speaker: "sister", type: "casual" },
      { en: "I'm mom.", zh: "我当妈。", speaker: "sister", type: "sisBoss" },
      { en: "I'm baby.", zh: "我当宝宝。", speaker: "brother", type: "broCute" },
      { en: "Eat your food.", zh: "吃饭。", speaker: "sister", type: "momFirm" },
      { en: "Don't wanna.", zh: "不想吃。", speaker: "brother", type: "broWhine" },
      { en: "One bite.", zh: "一口。", speaker: "sister", type: "momSoft" },
      { en: "Ok mommy.", zh: "好妈妈。", speaker: "brother", type: "broCute" },
      { en: "Good baby.", zh: "乖宝宝。", speaker: "sister", type: "momSoft" }
    ]
  },
  {
    id: 217, title: "扮医生", category: "toys", tags: ["医生","扮演"], mode: "duo",
    sentences: [
      { en: "I'm doctor.", zh: "我当医生。", speaker: "sister", type: "casual" },
      { en: "What hurts?", zh: "哪不舒服？", speaker: "sister", type: "casual" },
      { en: "My tummy.", zh: "肚子。", speaker: "brother", type: "broWhine" },
      { en: "Lie down.", zh: "躺下。", speaker: "sister", type: "casual" },
      { en: "Check fever.", zh: "量体温。", speaker: "sister", type: "casual" },
      { en: "Listen heart.", zh: "听心跳。", speaker: "sister", type: "casual" },
      { en: "Take pill.", zh: "吃药。", speaker: "sister", type: "casual" },
      { en: "Feel better.", zh: "好点了。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 218, title: "扮厨师", category: "toys", tags: ["厨师","扮演"], mode: "duo",
    sentences: [
      { en: "Chef hat on.", zh: "厨师帽。", speaker: "brother", type: "casual" },
      { en: "Welcome!", zh: "欢迎！", speaker: "brother", type: "broExcite" },
      { en: "Whatcha want?", zh: "要啥？", speaker: "brother", type: "broCute" },
      { en: "Spaghetti.", zh: "意面。", speaker: "sister", type: "casual" },
      { en: "Coming up!", zh: "马上来！", speaker: "brother", type: "broExcite" },
      { en: "Cook cook.", zh: "煮煮。", speaker: "brother", type: "casual" },
      { en: "Order ready.", zh: "做好啦。", speaker: "brother", type: "casual" },
      { en: "Yummy!", zh: "好吃！", speaker: "sister", type: "broCute" }
    ]
  },
  {
    id: 219, title: "扮警察", category: "toys", tags: ["警察","扮演"], mode: "duo",
    sentences: [
      { en: "Police!", zh: "警察！", speaker: "brother", type: "broLoud" },
      { en: "Freeze!", zh: "不许动！", speaker: "brother", type: "yell" },
      { en: "Hands up.", zh: "举手。", speaker: "brother", type: "momFirm" },
      { en: "I'm innocent!", zh: "我冤枉！", speaker: "sister", type: "sisWhine" },
      { en: "Tell story.", zh: "说清楚。", speaker: "brother", type: "casual" },
      { en: "Wasn't me.", zh: "不是我。", speaker: "sister", type: "casual" },
      { en: "Hmm okay.", zh: "嗯好吧。", speaker: "brother", type: "casual" },
      { en: "Be free.", zh: "走吧。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 220, title: "扮老师", category: "toys", tags: ["老师","扮演"], mode: "duo",
    sentences: [
      { en: "Class begin.", zh: "上课。", speaker: "sister", type: "casual" },
      { en: "Stand up.", zh: "起立。", speaker: "sister", type: "casual" },
      { en: "Teacher good.", zh: "老师好。", speaker: "brother", type: "casual" },
      { en: "Sit down.", zh: "坐下。", speaker: "sister", type: "casual" },
      { en: "Open book.", zh: "翻书。", speaker: "sister", type: "casual" },
      { en: "Read aloud.", zh: "大声读。", speaker: "sister", type: "casual" },
      { en: "Cat, dog, pig.", zh: "猫狗猪。", speaker: "brother", type: "casual" },
      { en: "Very good.", zh: "很棒。", speaker: "sister", type: "momSoft" }
    ]
  },
  {
    id: 221, title: "玩娃娃", category: "toys", tags: ["娃娃"], mode: "narrate",
    sentences: [
      { en: "My doll.", zh: "我娃娃。", speaker: "sister", type: "broCute" },
      { en: "Brush hair.", zh: "梳头。", speaker: "sister", type: "casual" },
      { en: "Change clothes.", zh: "换衣服。", speaker: "sister", type: "casual" },
      { en: "Pretty dress.", zh: "漂亮裙。", speaker: "sister", type: "casual" },
      { en: "Time to nap.", zh: "睡午觉。", speaker: "sister", type: "casual" },
      { en: "Tuck in.", zh: "盖被子。", speaker: "sister", type: "casual" },
      { en: "Sweet dreams.", zh: "做好梦。", speaker: "sister", type: "sisSweet" }
    ]
  },
  {
    id: 222, title: "玩奥特曼", category: "toys", tags: ["奥特曼"], mode: "duo",
    sentences: [
      { en: "Ultraman!", zh: "奥特曼！", speaker: "brother", type: "broExcite" },
      { en: "Fight monster!", zh: "打怪兽！", speaker: "brother", type: "broLoud" },
      { en: "Punch!", zh: "出拳！", speaker: "brother", type: "broLoud" },
      { en: "Kick!", zh: "踢！", speaker: "brother", type: "broLoud" },
      { en: "Sword out!", zh: "光剑！", speaker: "brother", type: "broExcite" },
      { en: "I'm monster.", zh: "我怪兽。", speaker: "sister", type: "sisTease" },
      { en: "Roar!", zh: "吼！", speaker: "sister", type: "yell" },
      { en: "Defeated!", zh: "败了！", speaker: "sister", type: "broSilly" }
    ]
  },
  {
    id: 223, title: "玩公主", category: "toys", tags: ["公主"], mode: "duo",
    sentences: [
      { en: "Princess time.", zh: "公主时间。", speaker: "sister", type: "broCute" },
      { en: "Crown on.", zh: "戴皇冠。", speaker: "sister", type: "casual" },
      { en: "Wave hand.", zh: "挥手。", speaker: "sister", type: "sisSweet" },
      { en: "Hello kingdom.", zh: "国民们好。", speaker: "sister", type: "sisProud" },
      { en: "I'm king.", zh: "我国王。", speaker: "brother", type: "broExcite" },
      { en: "Bow to me.", zh: "向我鞠躬。", speaker: "sister", type: "sisBoss" },
      { en: "No way.", zh: "不要。", speaker: "brother", type: "broPout" },
      { en: "Royal command!", zh: "皇命！", speaker: "sister", type: "sisBoss" }
    ]
  },
  {
    id: 224, title: "玩小熊", category: "toys", tags: ["小熊"], mode: "narrate",
    sentences: [
      { en: "Teddy bear.", zh: "小熊。", speaker: "brother", type: "broCute" },
      { en: "Hug tight.", zh: "抱紧。", speaker: "brother", type: "casual" },
      { en: "Soft fur.", zh: "毛软软。", speaker: "brother", type: "broCute" },
      { en: "Sleep with me.", zh: "陪睡。", speaker: "brother", type: "casual" },
      { en: "Tell secrets.", zh: "讲秘密。", speaker: "brother", type: "whisper" },
      { en: "Won't tell.", zh: "不说出去。", speaker: "brother", type: "casual" },
      { en: "Best friend.", zh: "好朋友。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 225, title: "玩超人", category: "toys", tags: ["超人"], mode: "narrate",
    sentences: [
      { en: "Cape on!", zh: "披斗篷！", speaker: "brother", type: "casual" },
      { en: "I can fly!", zh: "我能飞！", speaker: "brother", type: "broExcite" },
      { en: "Arms out.", zh: "伸胳膊。", speaker: "brother", type: "casual" },
      { en: "Whoosh!", zh: "嗖——！", speaker: "brother", type: "broLoud" },
      { en: "Save the world!", zh: "拯救世界！", speaker: "brother", type: "yell" },
      { en: "Stop, bad guy!", zh: "停住坏蛋！", speaker: "brother", type: "broLoud" },
      { en: "Got 'em!", zh: "抓住了！", speaker: "brother", type: "broProud" }
    ]
  },
  {
    id: 226, title: "玩芭比", category: "toys", tags: ["芭比"], mode: "narrate",
    sentences: [
      { en: "Barbie!", zh: "芭比！", speaker: "sister", type: "broExcite" },
      { en: "Pick a dress.", zh: "选裙子。", speaker: "sister", type: "casual" },
      { en: "Pink one!", zh: "粉的！", speaker: "sister", type: "broExcite" },
      { en: "Brush hair.", zh: "梳头。", speaker: "sister", type: "casual" },
      { en: "Add shoes.", zh: "穿鞋。", speaker: "sister", type: "casual" },
      { en: "She's beautiful.", zh: "好美。", speaker: "sister", type: "broCute" },
      { en: "Going to ball.", zh: "去舞会。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 227, title: "玩沙包", category: "toys", tags: ["沙包"], mode: "duo",
    sentences: [
      { en: "Beanbag.", zh: "沙包。", speaker: "brother", type: "casual" },
      { en: "Toss to me.", zh: "扔给我。", speaker: "sister", type: "casual" },
      { en: "Catch!", zh: "接！", speaker: "brother", type: "casual" },
      { en: "Got it.", zh: "接到。", speaker: "sister", type: "casual" },
      { en: "Throw back.", zh: "扔回来。", speaker: "brother", type: "casual" },
      { en: "Higher!", zh: "高点！", speaker: "brother", type: "broLoud" },
      { en: "Drop.", zh: "掉了。", speaker: "sister", type: "broWhine" },
      { en: "Again.", zh: "再来。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 228, title: "扮新娘", category: "toys", tags: ["扮演","新娘"], mode: "duo",
    sentences: [
      { en: "Wedding day.", zh: "结婚日。", speaker: "sister", type: "broExcite" },
      { en: "White dress on.", zh: "穿婚纱。", speaker: "sister", type: "casual" },
      { en: "Veil too.", zh: "头纱。", speaker: "sister", type: "casual" },
      { en: "Carry flowers.", zh: "捧花。", speaker: "sister", type: "casual" },
      { en: "Walk slow.", zh: "慢走。", speaker: "sister", type: "casual" },
      { en: "I do!", zh: "我愿意！", speaker: "sister", type: "broCute" },
      { en: "Kiss the doll!", zh: "亲娃娃！", speaker: "brother", type: "broSilly" },
      { en: "Eww no.", zh: "才不。", speaker: "sister", type: "sisAnnoy" }
    ]
  },
  {
    id: 229, title: "玩餐厅", category: "toys", tags: ["扮演","餐厅"], mode: "duo",
    sentences: [
      { en: "Welcome!", zh: "欢迎！", speaker: "sister", type: "broCute" },
      { en: "Table for one?", zh: "一位？", speaker: "sister", type: "casual" },
      { en: "Yes please.", zh: "对。", speaker: "brother", type: "casual" },
      { en: "Menu here.", zh: "菜单。", speaker: "sister", type: "casual" },
      { en: "Hmm, pizza.", zh: "嗯，披萨。", speaker: "brother", type: "broCurious" },
      { en: "Drink?", zh: "喝什么？", speaker: "sister", type: "casual" },
      { en: "Water.", zh: "水。", speaker: "brother", type: "casual" },
      { en: "Coming right up.", zh: "马上。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 230, title: "玩商店", category: "toys", tags: ["扮演","商店"], mode: "duo",
    sentences: [
      { en: "Welcome shop.", zh: "欢迎来店。", speaker: "sister", type: "broCute" },
      { en: "Need a toy.", zh: "要玩具。", speaker: "brother", type: "casual" },
      { en: "Pick one.", zh: "选。", speaker: "sister", type: "casual" },
      { en: "This car.", zh: "这车。", speaker: "brother", type: "casual" },
      { en: "Five dollars.", zh: "五块。", speaker: "sister", type: "casual" },
      { en: "Here ya go.", zh: "给。", speaker: "brother", type: "casual" },
      { en: "Thank you.", zh: "谢谢。", speaker: "sister", type: "casual" },
      { en: "Come again.", zh: "下次再来。", speaker: "sister", type: "sisSweet" }
    ]
  },
  {
    id: 231, title: "玩跳棋", category: "toys", tags: ["跳棋"], mode: "duo",
    sentences: [
      { en: "Chinese checkers.", zh: "跳棋。", speaker: "sister", type: "casual" },
      { en: "Pick color.", zh: "选色。", speaker: "sister", type: "casual" },
      { en: "Red.", zh: "红色。", speaker: "brother", type: "casual" },
      { en: "Move one.", zh: "走一步。", speaker: "sister", type: "casual" },
      { en: "Jump over!", zh: "跳过去！", speaker: "brother", type: "broExcite" },
      { en: "Chain jump!", zh: "连跳！", speaker: "brother", type: "broLoud" },
      { en: "Nice move.", zh: "好棋。", speaker: "sister", type: "casual" },
      { en: "I'm winning!", zh: "我赢了！", speaker: "brother", type: "broProud" }
    ]
  },
  {
    id: 232, title: "玩象棋", category: "toys", tags: ["象棋"], mode: "duo",
    sentences: [
      { en: "Chess time.", zh: "下象棋。", speaker: "dad", type: "casual" },
      { en: "Red or black?", zh: "红还黑？", speaker: "dad", type: "broCurious" },
      { en: "Red please.", zh: "红的。", speaker: "brother", type: "casual" },
      { en: "Move pawn.", zh: "走兵。", speaker: "dad", type: "casual" },
      { en: "My horse.", zh: "走马。", speaker: "brother", type: "casual" },
      { en: "Check!", zh: "将！", speaker: "dad", type: "casual" },
      { en: "Oh no.", zh: "啊不。", speaker: "brother", type: "broScared" },
      { en: "Think hard.", zh: "好好想。", speaker: "dad", type: "casual" }
    ]
  },
  {
    id: 233, title: "玩五子棋", category: "toys", tags: ["五子棋"], mode: "duo",
    sentences: [
      { en: "Gomoku.", zh: "五子棋。", speaker: "sister", type: "casual" },
      { en: "I'm white.", zh: "我白。", speaker: "brother", type: "casual" },
      { en: "Place stone.", zh: "落子。", speaker: "sister", type: "casual" },
      { en: "Three in row.", zh: "三连。", speaker: "brother", type: "broExcite" },
      { en: "Block!", zh: "挡！", speaker: "sister", type: "casual" },
      { en: "Four in row.", zh: "四连。", speaker: "brother", type: "broLoud" },
      { en: "Block!", zh: "挡！", speaker: "sister", type: "rushed" },
      { en: "Five! Win!", zh: "五连赢！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 234, title: "玩扑克", category: "toys", tags: ["扑克"], mode: "duo",
    sentences: [
      { en: "Deal cards.", zh: "发牌。", speaker: "sister", type: "casual" },
      { en: "How many?", zh: "几张？", speaker: "brother", type: "broCurious" },
      { en: "Five each.", zh: "一人五张。", speaker: "sister", type: "casual" },
      { en: "I got pair!", zh: "我有对子！", speaker: "brother", type: "broExcite" },
      { en: "Shh, secret.", zh: "嘘，秘密。", speaker: "sister", type: "sisTease" },
      { en: "Your turn.", zh: "你出。", speaker: "sister", type: "casual" },
      { en: "Two threes.", zh: "对三。", speaker: "brother", type: "casual" },
      { en: "Pass.", zh: "过。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 235, title: "玩 UNO", category: "toys", tags: ["UNO"], mode: "duo",
    sentences: [
      { en: "UNO time!", zh: "UNO！", speaker: "brother", type: "broExcite" },
      { en: "Shuffle.", zh: "洗牌。", speaker: "sister", type: "casual" },
      { en: "Seven each.", zh: "每人七张。", speaker: "sister", type: "casual" },
      { en: "Red five.", zh: "红五。", speaker: "brother", type: "casual" },
      { en: "Skip you!", zh: "跳过你！", speaker: "sister", type: "sisTease" },
      { en: "Hey!", zh: "诶！", speaker: "brother", type: "sisAnnoy" },
      { en: "Plus four!", zh: "加四张！", speaker: "sister", type: "broLoud" },
      { en: "Ugh!", zh: "啊！", speaker: "brother", type: "broAnnoy" },
      { en: "UNO!", zh: "UNO！", speaker: "sister", type: "broLoud" },
      { en: "I win!", zh: "我赢了！", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 236, title: "玩飞行棋", category: "toys", tags: ["飞行棋"], mode: "duo",
    sentences: [
      { en: "Aero chess.", zh: "飞行棋。", speaker: "brother", type: "casual" },
      { en: "Roll the die.", zh: "扔骰子。", speaker: "sister", type: "casual" },
      { en: "Six!", zh: "六！", speaker: "brother", type: "broExcite" },
      { en: "Take off!", zh: "起飞！", speaker: "brother", type: "broLoud" },
      { en: "My turn.", zh: "我了。", speaker: "sister", type: "casual" },
      { en: "Three.", zh: "三。", speaker: "sister", type: "casual" },
      { en: "Same square!", zh: "同格！", speaker: "brother", type: "broLoud" },
      { en: "Got eaten!", zh: "被吃了！", speaker: "sister", type: "broWhine" },
      { en: "Back to start.", zh: "回起点。", speaker: "sister", type: "broPout" }
    ]
  },
  {
    id: 237, title: "玩大富翁", category: "toys", tags: ["大富翁"], mode: "duo",
    sentences: [
      { en: "Monopoly!", zh: "大富翁！", speaker: "brother", type: "broExcite" },
      { en: "Pick a piece.", zh: "选棋子。", speaker: "sister", type: "casual" },
      { en: "I'm the dog.", zh: "我狗狗。", speaker: "brother", type: "broCute" },
      { en: "I'm the hat.", zh: "我帽子。", speaker: "sister", type: "casual" },
      { en: "Roll!", zh: "扔骰子！", speaker: "brother", type: "casual" },
      { en: "Buy that?", zh: "买吗？", speaker: "sister", type: "broCurious" },
      { en: "Sure.", zh: "买。", speaker: "brother", type: "casual" },
      { en: "Pay me rent!", zh: "交租！", speaker: "sister", type: "sisProud" },
      { en: "No fair.", zh: "不公平。", speaker: "brother", type: "broWhine" }
    ]
  },
  {
    id: 238, title: "玩骰子", category: "toys", tags: ["骰子"], mode: "duo",
    sentences: [
      { en: "Dice game.", zh: "骰子。", speaker: "brother", type: "casual" },
      { en: "Shake and roll.", zh: "摇和扔。", speaker: "brother", type: "casual" },
      { en: "Six!", zh: "六！", speaker: "brother", type: "broExcite" },
      { en: "My turn.", zh: "我。", speaker: "sister", type: "casual" },
      { en: "Two.", zh: "二。", speaker: "sister", type: "broWhine" },
      { en: "Roll again!", zh: "再扔！", speaker: "brother", type: "casual" },
      { en: "Five.", zh: "五。", speaker: "sister", type: "casual" },
      { en: "I add up!", zh: "我加起来！", speaker: "brother", type: "broProud" }
    ]
  },
  {
    id: 239, title: "玩积木桥", category: "toys", tags: ["桥","积木"], mode: "duo",
    sentences: [
      { en: "Build a bridge.", zh: "搭桥。", speaker: "sister", type: "casual" },
      { en: "Two towers.", zh: "两个塔。", speaker: "sister", type: "casual" },
      { en: "Connect them.", zh: "连一起。", speaker: "sister", type: "casual" },
      { en: "Hmm, fall.", zh: "倒了。", speaker: "brother", type: "broWhine" },
      { en: "More support.", zh: "加支撑。", speaker: "sister", type: "casual" },
      { en: "Try again.", zh: "再来。", speaker: "brother", type: "casual" },
      { en: "It holds!", zh: "撑住了！", speaker: "brother", type: "broExcite" },
      { en: "Cars drive on!", zh: "车开过！", speaker: "brother", type: "broSilly" }
    ]
  },
  {
    id: 240, title: "玩太空船", category: "toys", tags: ["太空"], mode: "narrate",
    sentences: [
      { en: "Spaceship!", zh: "宇宙飞船！", speaker: "brother", type: "broExcite" },
      { en: "Buckle in.", zh: "扣安全带。", speaker: "brother", type: "casual" },
      { en: "Count down.", zh: "倒数。", speaker: "brother", type: "casual" },
      { en: "Three two one!", zh: "三二一！", speaker: "brother", type: "broLoud" },
      { en: "Blast off!", zh: "起飞！", speaker: "brother", type: "broLoud" },
      { en: "Past clouds.", zh: "穿过云。", speaker: "brother", type: "casual" },
      { en: "To Mars!", zh: "去火星！", speaker: "brother", type: "broExcite" },
      { en: "Touch down.", zh: "着陆。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 241, title: "玩沙画", category: "toys", tags: ["沙画"], mode: "narrate",
    sentences: [
      { en: "Sand art.", zh: "沙画。", speaker: "sister", type: "casual" },
      { en: "Peel sticker.", zh: "撕贴纸。", speaker: "sister", type: "casual" },
      { en: "Sprinkle sand.", zh: "撒沙。", speaker: "sister", type: "casual" },
      { en: "Yellow first.", zh: "先黄色。", speaker: "sister", type: "casual" },
      { en: "Shake off.", zh: "抖掉。", speaker: "sister", type: "casual" },
      { en: "Pink next.", zh: "再粉色。", speaker: "sister", type: "casual" },
      { en: "Pretty picture.", zh: "好看。", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 242, title: "玩水彩", category: "toys", tags: ["水彩"], mode: "narrate",
    sentences: [
      { en: "Watercolor.", zh: "水彩。", speaker: "sister", type: "casual" },
      { en: "Cup of water.", zh: "杯水。", speaker: "sister", type: "casual" },
      { en: "Wet the brush.", zh: "蘸水。", speaker: "sister", type: "casual" },
      { en: "Dip color.", zh: "蘸色。", speaker: "sister", type: "casual" },
      { en: "Stroke softly.", zh: "轻轻画。", speaker: "sister", type: "casual" },
      { en: "Mix on paper.", zh: "纸上混色。", speaker: "sister", type: "casual" },
      { en: "Pretty.", zh: "美。", speaker: "sister", type: "broCute" }
    ]
  },
  {
    id: 243, title: "画画", category: "toys", tags: ["画画"], mode: "duo",
    sentences: [
      { en: "Drawing time.", zh: "画画。", speaker: "sister", type: "casual" },
      { en: "What to draw?", zh: "画啥？", speaker: "brother", type: "broCurious" },
      { en: "A house.", zh: "房子。", speaker: "sister", type: "casual" },
      { en: "Square shape.", zh: "方的。", speaker: "sister", type: "casual" },
      { en: "Triangle roof.", zh: "三角顶。", speaker: "sister", type: "casual" },
      { en: "Door.", zh: "门。", speaker: "sister", type: "casual" },
      { en: "Two windows.", zh: "两窗户。", speaker: "sister", type: "casual" },
      { en: "Smoke from chimney.", zh: "烟囱冒烟。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 244, title: "涂色", category: "toys", tags: ["涂色"], mode: "narrate",
    sentences: [
      { en: "Coloring book.", zh: "涂色书。", speaker: "brother", type: "casual" },
      { en: "Pick a page.", zh: "选页。", speaker: "brother", type: "casual" },
      { en: "Dinosaur.", zh: "恐龙。", speaker: "brother", type: "broExcite" },
      { en: "Crayons out.", zh: "拿蜡笔。", speaker: "brother", type: "casual" },
      { en: "Green body.", zh: "绿身体。", speaker: "brother", type: "casual" },
      { en: "Stay in lines.", zh: "别出线。", speaker: "brother", type: "casual" },
      { en: "Brown teeth.", zh: "棕牙。", speaker: "brother", type: "casual" },
      { en: "Done!", zh: "好啦！", speaker: "brother", type: "broProud" }
    ]
  },
  {
    id: 245, title: "用贴纸", category: "toys", tags: ["贴纸"], mode: "duo",
    sentences: [
      { en: "Sticker book.", zh: "贴纸书。", speaker: "brother", type: "broExcite" },
      { en: "Peel slow.", zh: "慢撕。", speaker: "sister", type: "casual" },
      { en: "Stick here?", zh: "贴这？", speaker: "brother", type: "broCurious" },
      { en: "Match shape.", zh: "对形状。", speaker: "sister", type: "casual" },
      { en: "Press flat.", zh: "压平。", speaker: "sister", type: "casual" },
      { en: "Looks neat!", zh: "好整齐！", speaker: "brother", type: "broExcite" },
      { en: "More more.", zh: "再贴。", speaker: "brother", type: "broWhine" },
      { en: "Save some.", zh: "留点。", speaker: "sister", type: "sisBoss" }
    ]
  },
  {
    id: 246, title: "玩 iPad", category: "toys", tags: ["平板","游戏"], mode: "duo",
    sentences: [
      { en: "Can I play?", zh: "能玩吗？", speaker: "brother", type: "broCute" },
      { en: "Twenty minutes.", zh: "二十分钟。", speaker: "mom", type: "momFirm" },
      { en: "Yes!", zh: "好！", speaker: "brother", type: "broExcite" },
      { en: "Pick game.", zh: "选游戏。", speaker: "brother", type: "casual" },
      { en: "Tap tap tap.", zh: "点点点。", speaker: "brother", type: "casual" },
      { en: "Almost done?", zh: "好了没？", speaker: "mom", type: "broCurious" },
      { en: "Five more!", zh: "再五分钟！", speaker: "brother", type: "broWhine" },
      { en: "Time's up.", zh: "时间到。", speaker: "mom", type: "momFirm" }
    ]
  },
  {
    id: 247, title: "看动画片", category: "toys", tags: ["动画"], mode: "duo",
    sentences: [
      { en: "Cartoon time.", zh: "看动画。", speaker: "brother", type: "broExcite" },
      { en: "Sit close, no.", zh: "别太近。", speaker: "mom", type: "momFirm" },
      { en: "Back up.", zh: "退后。", speaker: "mom", type: "casual" },
      { en: "Press play.", zh: "按播放。", speaker: "brother", type: "casual" },
      { en: "Funny!", zh: "好笑！", speaker: "brother", type: "broSilly" },
      { en: "Haha!", zh: "哈哈！", speaker: "brother", type: "broLoud" },
      { en: "Volume down.", zh: "声小点。", speaker: "mom", type: "momFirm" },
      { en: "One more episode.", zh: "再一集。", speaker: "brother", type: "broWhine" }
    ]
  },
  {
    id: 248, title: "唱卡拉OK", category: "toys", tags: ["唱歌"], mode: "duo",
    sentences: [
      { en: "Sing along!", zh: "一起唱！", speaker: "sister", type: "broExcite" },
      { en: "Mic on.", zh: "开麦。", speaker: "sister", type: "casual" },
      { en: "Pick song.", zh: "选歌。", speaker: "brother", type: "broCurious" },
      { en: "This one!", zh: "这首！", speaker: "sister", type: "broExcite" },
      { en: "Music start.", zh: "音乐开。", speaker: "sister", type: "casual" },
      { en: "La la la!", zh: "啦啦啦！", speaker: "brother", type: "broSilly" },
      { en: "Off key!", zh: "跑调！", speaker: "sister", type: "sisTease" },
      { en: "Hey!", zh: "诶！", speaker: "brother", type: "broAnnoy" }
    ]
  },
  {
    id: 249, title: "玩故事书", category: "toys", tags: ["故事书"], mode: "duo",
    sentences: [
      { en: "Story please.", zh: "讲故事。", speaker: "brother", type: "broCute" },
      { en: "Which one?", zh: "哪本？", speaker: "mom", type: "momSoft" },
      { en: "The dragon.", zh: "龙那本。", speaker: "brother", type: "casual" },
      { en: "Snuggle in.", zh: "靠过来。", speaker: "mom", type: "momSoft" },
      { en: "Once upon a time.", zh: "从前。", speaker: "mom", type: "casual" },
      { en: "And then?", zh: "然后？", speaker: "brother", type: "broCurious" },
      { en: "Listen.", zh: "听着。", speaker: "mom", type: "momSoft" },
      { en: "The end.", zh: "完了。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 250, title: "玩相机", category: "toys", tags: ["相机","拍照"], mode: "duo",
    sentences: [
      { en: "Toy camera.", zh: "玩具相机。", speaker: "brother", type: "casual" },
      { en: "Smile sis!", zh: "笑啊姐！", speaker: "brother", type: "broExcite" },
      { en: "Cheese!", zh: "茄子！", speaker: "sister", type: "broSilly" },
      { en: "Click!", zh: "咔嚓！", speaker: "brother", type: "casual" },
      { en: "Show me.", zh: "给我看。", speaker: "sister", type: "broCurious" },
      { en: "Hmm, blurry.", zh: "嗯，糊。", speaker: "sister", type: "sisAnnoy" },
      { en: "Take again.", zh: "再拍。", speaker: "brother", type: "casual" },
      { en: "Pose!", zh: "摆个姿势！", speaker: "brother", type: "broSilly" }
    ]
  },
  {
    id: 251, title: "喂猫", category: "pet", tags: ["猫","喂食"], mode: "narrate",
    sentences: [
      { en: "Kitty's hungry.", zh: "猫饿了。", speaker: "sister", type: "casual" },
      { en: "Get the food.", zh: "拿猫粮。", speaker: "sister", type: "casual" },
      { en: "One scoop.", zh: "一勺。", speaker: "sister", type: "casual" },
      { en: "Into bowl.", zh: "倒碗里。", speaker: "sister", type: "casual" },
      { en: "Fresh water too.", zh: "也换水。", speaker: "sister", type: "casual" },
      { en: "Here kitty.", zh: "来，猫咪。", speaker: "sister", type: "sisSweet" },
      { en: "Munch munch.", zh: "嚓嚓嚓。", speaker: "sister", type: "casual" },
      { en: "Good boy.", zh: "乖。", speaker: "sister", type: "sisSweet" }
    ]
  },
  {
    id: 252, title: "撸猫", category: "pet", tags: ["猫","撸"], mode: "narrate",
    sentences: [
      { en: "Hey kitty.", zh: "嘿猫咪。", speaker: "brother", type: "broCute" },
      { en: "Come here.", zh: "过来。", speaker: "brother", type: "broCute" },
      { en: "Soft fur.", zh: "毛软软。", speaker: "brother", type: "broCute" },
      { en: "Pet pet.", zh: "摸摸。", speaker: "brother", type: "casual" },
      { en: "Purring!", zh: "呼噜呼噜！", speaker: "brother", type: "broExcite" },
      { en: "She likes it.", zh: "它喜欢。", speaker: "brother", type: "casual" },
      { en: "Chin rub.", zh: "挠下巴。", speaker: "brother", type: "casual" },
      { en: "Closes eyes.", zh: "闭眼了。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 253, title: "给猫梳毛", category: "pet", tags: ["猫","梳毛"], mode: "duo",
    sentences: [
      { en: "Fur shedding.", zh: "掉毛。", speaker: "mom", type: "casual" },
      { en: "Brush her.", zh: "给她梳。", speaker: "mom", type: "casual" },
      { en: "Sit kitty.", zh: "坐好猫。", speaker: "sister", type: "sisSweet" },
      { en: "Gentle strokes.", zh: "轻梳。", speaker: "mom", type: "momSoft" },
      { en: "So much fur!", zh: "好多毛！", speaker: "sister", type: "broLoud" },
      { en: "Keep going.", zh: "继续。", speaker: "mom", type: "casual" },
      { en: "She loves it.", zh: "她舒服。", speaker: "sister", type: "broCute" },
      { en: "Shiny coat.", zh: "毛亮了。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 254, title: "给猫剪指甲", category: "pet", tags: ["猫","剪指甲"], mode: "duo",
    sentences: [
      { en: "Nail time.", zh: "剪指甲。", speaker: "mom", type: "casual" },
      { en: "She'll fight.", zh: "她会挣扎。", speaker: "sister", type: "broScared" },
      { en: "Hold her tight.", zh: "抱紧。", speaker: "mom", type: "momFirm" },
      { en: "Push out claw.", zh: "推出爪。", speaker: "mom", type: "casual" },
      { en: "Just the tip.", zh: "只剪尖。", speaker: "mom", type: "momWorry" },
      { en: "Snip.", zh: "咔嚓。", speaker: "mom", type: "casual" },
      { en: "Meow!", zh: "喵！", speaker: "sister", type: "broLoud" },
      { en: "Almost done.", zh: "快好了。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 255, title: "清猫砂", category: "pet", tags: ["猫砂"], mode: "narrate",
    sentences: [
      { en: "Litter box stinks.", zh: "猫砂臭。", speaker: "sister", type: "broScared" },
      { en: "Grab scoop.", zh: "拿铲。", speaker: "sister", type: "casual" },
      { en: "Sift out clumps.", zh: "筛结块。", speaker: "sister", type: "casual" },
      { en: "Into bag.", zh: "扔袋里。", speaker: "sister", type: "casual" },
      { en: "Hold breath.", zh: "屏气。", speaker: "sister", type: "broTired" },
      { en: "Add fresh.", zh: "加新砂。", speaker: "sister", type: "casual" },
      { en: "Smooth top.", zh: "拍平。", speaker: "sister", type: "casual" },
      { en: "Wash hands!", zh: "洗手！", speaker: "sister", type: "rushed" }
    ]
  },
  {
    id: 256, title: "给猫洗澡", category: "pet", tags: ["猫","洗澡"], mode: "duo",
    sentences: [
      { en: "Bath day.", zh: "洗澡日。", speaker: "mom", type: "casual" },
      { en: "She hates this.", zh: "她讨厌。", speaker: "sister", type: "broScared" },
      { en: "Warm water.", zh: "温水。", speaker: "mom", type: "casual" },
      { en: "Slowly slowly.", zh: "慢慢。", speaker: "mom", type: "momSoft" },
      { en: "Cat shampoo.", zh: "猫专用沐浴。", speaker: "mom", type: "casual" },
      { en: "Rub gently.", zh: "轻搓。", speaker: "mom", type: "momSoft" },
      { en: "Rinse off.", zh: "冲干净。", speaker: "mom", type: "casual" },
      { en: "Towel dry.", zh: "毛巾擦。", speaker: "mom", type: "casual" },
      { en: "She's mad.", zh: "她生气了。", speaker: "sister", type: "broScared" }
    ]
  },
  {
    id: 257, title: "找猫", category: "pet", tags: ["找猫"], mode: "duo",
    sentences: [
      { en: "Where's kitty?", zh: "猫呢？", speaker: "brother", type: "broCurious" },
      { en: "Check under bed.", zh: "床底下看。", speaker: "sister", type: "casual" },
      { en: "Not there.", zh: "没有。", speaker: "brother", type: "casual" },
      { en: "Closet?", zh: "柜子？", speaker: "sister", type: "broCurious" },
      { en: "Looking!", zh: "找呢！", speaker: "brother", type: "casual" },
      { en: "Heard meow.", zh: "听到喵。", speaker: "brother", type: "broExcite" },
      { en: "On top shelf!", zh: "在书架上！", speaker: "sister", type: "broExcite" },
      { en: "Come down.", zh: "下来吧。", speaker: "sister", type: "sisSweet" }
    ]
  },
  {
    id: 258, title: "猫打哈欠", category: "pet", tags: ["猫","哈欠"], mode: "narrate",
    sentences: [
      { en: "Look at kitty.", zh: "看猫。", speaker: "brother", type: "casual" },
      { en: "Big yawn!", zh: "打大哈欠！", speaker: "brother", type: "broSilly" },
      { en: "Mouth wide.", zh: "嘴张老大。", speaker: "brother", type: "casual" },
      { en: "Tiny teeth.", zh: "小牙。", speaker: "brother", type: "broCute" },
      { en: "Pink tongue.", zh: "粉舌头。", speaker: "brother", type: "casual" },
      { en: "Stretching too.", zh: "也伸懒腰。", speaker: "brother", type: "casual" },
      { en: "Sleepy kitty.", zh: "困猫。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 259, title: "逗猫", category: "pet", tags: ["猫","逗"], mode: "duo",
    sentences: [
      { en: "Cat toy.", zh: "猫玩具。", speaker: "brother", type: "casual" },
      { en: "Feather stick.", zh: "羽毛棒。", speaker: "brother", type: "casual" },
      { en: "Wave it.", zh: "晃一晃。", speaker: "brother", type: "casual" },
      { en: "She watches!", zh: "她看着！", speaker: "sister", type: "broExcite" },
      { en: "Pounce!", zh: "扑！", speaker: "brother", type: "broLoud" },
      { en: "Pull away.", zh: "拉走。", speaker: "brother", type: "casual" },
      { en: "Got it!", zh: "抓到了！", speaker: "sister", type: "broLoud" },
      { en: "Run kitty run!", zh: "跑啊跑！", speaker: "brother", type: "broSilly" }
    ]
  },
  {
    id: 260, title: "猫抓老鼠", category: "pet", tags: ["猫","老鼠"], mode: "duo",
    sentences: [
      { en: "Eek, mouse!", zh: "啊，老鼠！", speaker: "sister", type: "broScared" },
      { en: "Where?!", zh: "哪？", speaker: "brother", type: "broLoud" },
      { en: "Behind sofa!", zh: "沙发后！", speaker: "sister", type: "broLoud" },
      { en: "Kitty hunts.", zh: "猫去抓。", speaker: "brother", type: "broExcite" },
      { en: "Sneak sneak.", zh: "潜行。", speaker: "brother", type: "whisper" },
      { en: "Pounce!", zh: "扑！", speaker: "sister", type: "broLoud" },
      { en: "Got it!", zh: "抓到！", speaker: "brother", type: "broExcite" },
      { en: "Yuck.", zh: "恶心。", speaker: "sister", type: "broScared" }
    ]
  },
  {
    id: 261, title: "喂狗", category: "pet", tags: ["狗","喂食"], mode: "duo",
    sentences: [
      { en: "Dinner, boy.", zh: "吃饭，狗子。", speaker: "brother", type: "casual" },
      { en: "Tail wags.", zh: "摇尾巴。", speaker: "brother", type: "broExcite" },
      { en: "Sit!", zh: "坐！", speaker: "brother", type: "momFirm" },
      { en: "Good boy.", zh: "乖。", speaker: "brother", type: "sisSweet" },
      { en: "Pour kibble.", zh: "倒狗粮。", speaker: "brother", type: "casual" },
      { en: "Wait wait.", zh: "等等。", speaker: "brother", type: "momFirm" },
      { en: "Okay, eat!", zh: "好，吃！", speaker: "brother", type: "casual" },
      { en: "Wolfs it down.", zh: "狼吞虎咽。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 262, title: "遛狗", category: "pet", tags: ["狗","遛狗"], mode: "duo",
    sentences: [
      { en: "Walk time!", zh: "遛狗时间！", speaker: "brother", type: "broExcite" },
      { en: "Leash on.", zh: "栓绳。", speaker: "sister", type: "casual" },
      { en: "Don't pull.", zh: "别拽。", speaker: "sister", type: "sisBoss" },
      { en: "He's pulling me!", zh: "它拽我！", speaker: "brother", type: "broWhine" },
      { en: "Hold tight.", zh: "拉紧。", speaker: "sister", type: "casual" },
      { en: "He's sniffing.", zh: "它闻地。", speaker: "brother", type: "casual" },
      { en: "Let him.", zh: "让它闻。", speaker: "sister", type: "casual" },
      { en: "He pooped!", zh: "拉粑粑了！", speaker: "brother", type: "broLoud" },
      { en: "Bag it.", zh: "装袋。", speaker: "sister", type: "sisBoss" }
    ]
  },
  {
    id: 263, title: "给狗洗澡", category: "pet", tags: ["狗","洗澡"], mode: "duo",
    sentences: [
      { en: "Dirty pup.", zh: "脏狗。", speaker: "sister", type: "casual" },
      { en: "Bath time.", zh: "洗澡。", speaker: "sister", type: "casual" },
      { en: "He runs.", zh: "他跑。", speaker: "brother", type: "broLoud" },
      { en: "Catch him!", zh: "抓住！", speaker: "sister", type: "rushed" },
      { en: "In the tub.", zh: "进澡盆。", speaker: "sister", type: "casual" },
      { en: "Wet him.", zh: "弄湿。", speaker: "sister", type: "casual" },
      { en: "Shake!", zh: "甩水！", speaker: "brother", type: "broLoud" },
      { en: "I'm soaked!", zh: "我湿了！", speaker: "sister", type: "sisAnnoy" }
    ]
  },
  {
    id: 264, title: "训狗坐下", category: "pet", tags: ["狗","训练"], mode: "duo",
    sentences: [
      { en: "Buddy, sit!", zh: "狗子，坐！", speaker: "brother", type: "momFirm" },
      { en: "He stands.", zh: "他站着。", speaker: "sister", type: "casual" },
      { en: "Show treat.", zh: "拿零食。", speaker: "sister", type: "casual" },
      { en: "Up high, then.", zh: "举高再说。", speaker: "sister", type: "casual" },
      { en: "Butt down!", zh: "屁股坐下！", speaker: "brother", type: "broLoud" },
      { en: "Sat!", zh: "坐了！", speaker: "brother", type: "broExcite" },
      { en: "Good boy.", zh: "乖狗。", speaker: "sister", type: "sisSweet" },
      { en: "Treat for him.", zh: "给奖励。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 265, title: "训狗握手", category: "pet", tags: ["狗","握手"], mode: "duo",
    sentences: [
      { en: "Paw!", zh: "握手！", speaker: "brother", type: "momFirm" },
      { en: "Lift his paw.", zh: "抬他爪。", speaker: "sister", type: "casual" },
      { en: "Hold it.", zh: "握住。", speaker: "sister", type: "casual" },
      { en: "Say paw!", zh: "说握手！", speaker: "sister", type: "casual" },
      { en: "Treat!", zh: "奖励！", speaker: "sister", type: "casual" },
      { en: "Try again.", zh: "再来。", speaker: "brother", type: "casual" },
      { en: "He lifted!", zh: "他抬了！", speaker: "brother", type: "broExcite" },
      { en: "Smart pup.", zh: "聪明狗。", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 266, title: "捡屎", category: "pet", tags: ["狗","捡屎"], mode: "narrate",
    sentences: [
      { en: "He pooped.", zh: "他拉了。", speaker: "brother", type: "casual" },
      { en: "Ugh.", zh: "唉。", speaker: "brother", type: "broAnnoy" },
      { en: "Bag inside out.", zh: "袋子反过来。", speaker: "brother", type: "casual" },
      { en: "Hand inside.", zh: "手伸进。", speaker: "brother", type: "casual" },
      { en: "Pick it up.", zh: "捡起来。", speaker: "brother", type: "casual" },
      { en: "Flip bag.", zh: "翻袋子。", speaker: "brother", type: "casual" },
      { en: "Tie tight.", zh: "扎紧。", speaker: "brother", type: "casual" },
      { en: "Toss in bin.", zh: "扔垃圾桶。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 267, title: "狗追球", category: "pet", tags: ["狗","球"], mode: "duo",
    sentences: [
      { en: "Fetch?", zh: "捡球？", speaker: "brother", type: "casual" },
      { en: "Tail wags.", zh: "尾巴摇。", speaker: "sister", type: "casual" },
      { en: "Toss far!", zh: "扔远！", speaker: "brother", type: "broLoud" },
      { en: "He bolts.", zh: "他冲过去。", speaker: "sister", type: "casual" },
      { en: "Got it!", zh: "捡到了！", speaker: "brother", type: "broExcite" },
      { en: "Bring back.", zh: "拿回来。", speaker: "brother", type: "casual" },
      { en: "Drop it.", zh: "放下。", speaker: "brother", type: "momFirm" },
      { en: "Again!", zh: "再扔！", speaker: "sister", type: "broExcite" }
    ]
  },
  {
    id: 268, title: "狗叫", category: "pet", tags: ["狗","吠"], mode: "duo",
    sentences: [
      { en: "Why barking?", zh: "为啥吠？", speaker: "sister", type: "broCurious" },
      { en: "Someone outside.", zh: "外面有人。", speaker: "brother", type: "casual" },
      { en: "Bark bark!", zh: "汪汪！", speaker: "brother", type: "broLoud" },
      { en: "Shh, quiet.", zh: "嘘，安静。", speaker: "sister", type: "sisBoss" },
      { en: "Just delivery.", zh: "快递。", speaker: "sister", type: "casual" },
      { en: "Calm down boy.", zh: "冷静狗子。", speaker: "brother", type: "momSoft" },
      { en: "He's protective.", zh: "他护家。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 269, title: "喂鱼", category: "pet", tags: ["金鱼"], mode: "narrate",
    sentences: [
      { en: "Fish flakes.", zh: "鱼食。", speaker: "brother", type: "casual" },
      { en: "Tiny pinch.", zh: "捏一点。", speaker: "brother", type: "casual" },
      { en: "Sprinkle on top.", zh: "撒水面。", speaker: "brother", type: "casual" },
      { en: "They swim up.", zh: "都游上来。", speaker: "brother", type: "broExcite" },
      { en: "Eat fast.", zh: "吃得快。", speaker: "brother", type: "broSilly" },
      { en: "Bubble bubble.", zh: "咕嘟咕嘟。", speaker: "brother", type: "broCute" },
      { en: "Don't overfeed.", zh: "别喂多。", speaker: "mom", type: "momFirm" }
    ]
  },
  {
    id: 270, title: "喂兔子", category: "pet", tags: ["兔子"], mode: "duo",
    sentences: [
      { en: "Bunny's hungry.", zh: "兔子饿。", speaker: "sister", type: "casual" },
      { en: "Get carrots.", zh: "拿胡萝卜。", speaker: "sister", type: "casual" },
      { en: "Chop small.", zh: "切小块。", speaker: "sister", type: "casual" },
      { en: "Open cage.", zh: "开笼。", speaker: "sister", type: "casual" },
      { en: "Hold flat.", zh: "平掌伸。", speaker: "sister", type: "casual" },
      { en: "Nibble nibble.", zh: "啃啃啃。", speaker: "brother", type: "broCute" },
      { en: "Soft nose.", zh: "鼻子软。", speaker: "brother", type: "broCute" },
      { en: "So cute.", zh: "好可爱。", speaker: "sister", type: "broCute" }
    ]
  },
  {
    id: 271, title: "喂仓鼠", category: "pet", tags: ["仓鼠"], mode: "narrate",
    sentences: [
      { en: "Tiny hamster.", zh: "小仓鼠。", speaker: "brother", type: "broCute" },
      { en: "Seeds time.", zh: "喂瓜子。", speaker: "brother", type: "casual" },
      { en: "Drop in bowl.", zh: "倒小碗。", speaker: "brother", type: "casual" },
      { en: "He runs out.", zh: "跑出来。", speaker: "brother", type: "broExcite" },
      { en: "Stuffs cheeks.", zh: "塞腮帮。", speaker: "brother", type: "broSilly" },
      { en: "Round face!", zh: "脸圆圆！", speaker: "brother", type: "broLoud" },
      { en: "Stores food.", zh: "存粮。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 272, title: "看乌龟", category: "pet", tags: ["乌龟"], mode: "duo",
    sentences: [
      { en: "Turtle's slow.", zh: "乌龟好慢。", speaker: "brother", type: "casual" },
      { en: "He's chill.", zh: "它佛系。", speaker: "sister", type: "broSilly" },
      { en: "Tap his shell.", zh: "敲壳。", speaker: "brother", type: "casual" },
      { en: "Don't!", zh: "别！", speaker: "sister", type: "sisFirm" },
      { en: "Pulls head in.", zh: "缩头。", speaker: "brother", type: "casual" },
      { en: "Wait.", zh: "等等。", speaker: "sister", type: "casual" },
      { en: "Out again.", zh: "又伸出。", speaker: "brother", type: "broExcite" },
      { en: "Cute.", zh: "可爱。", speaker: "sister", type: "broCute" }
    ]
  },
  {
    id: 273, title: "喂鸟", category: "pet", tags: ["鸟"], mode: "narrate",
    sentences: [
      { en: "Birdie chirp.", zh: "鸟叫。", speaker: "sister", type: "casual" },
      { en: "Open cage door.", zh: "开笼门。", speaker: "sister", type: "casual" },
      { en: "Refill seeds.", zh: "添瓜子。", speaker: "sister", type: "casual" },
      { en: "Fresh water.", zh: "新水。", speaker: "sister", type: "casual" },
      { en: "He hops over.", zh: "跳过来。", speaker: "sister", type: "broCute" },
      { en: "Pecks fast.", zh: "啄得快。", speaker: "sister", type: "casual" },
      { en: "Chirp!", zh: "叽喳！", speaker: "sister", type: "broExcite" }
    ]
  },
  {
    id: 274, title: "宠物生病", category: "pet", tags: ["生病"], mode: "duo",
    sentences: [
      { en: "He's not eating.", zh: "他不吃。", speaker: "sister", type: "broWorry" },
      { en: "Strange.", zh: "怪。", speaker: "mom", type: "casual" },
      { en: "Looks sad.", zh: "看着蔫。", speaker: "sister", type: "broScared" },
      { en: "Call the vet.", zh: "找兽医。", speaker: "mom", type: "casual" },
      { en: "Hello, sick pet.", zh: "宠物生病。", speaker: "mom", type: "casual" },
      { en: "Come right now?", zh: "现在能来？", speaker: "mom", type: "broCurious" },
      { en: "I'm worried.", zh: "我担心。", speaker: "sister", type: "broWorry" },
      { en: "He'll be fine.", zh: "会好的。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 275, title: "宠物老去", category: "pet", tags: ["宠物","老"], mode: "duo",
    sentences: [
      { en: "He sleeps lots.", zh: "他老睡。", speaker: "sister", type: "broTired" },
      { en: "He's old now.", zh: "老了。", speaker: "mom", type: "momSoft" },
      { en: "Walks slow.", zh: "走得慢。", speaker: "sister", type: "casual" },
      { en: "Be gentle.", zh: "温柔点。", speaker: "mom", type: "momSoft" },
      { en: "Hug him.", zh: "抱抱他。", speaker: "mom", type: "momSoft" },
      { en: "Love you boy.", zh: "爱你狗子。", speaker: "sister", type: "broCry" },
      { en: "We're here.", zh: "我们在。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 276, title: "量体温", category: "body", tags: ["体温","量"], mode: "duo",
    sentences: [
      { en: "Forehead's hot.", zh: "额头烫。", speaker: "mom", type: "momWorry" },
      { en: "Get thermometer.", zh: "拿体温计。", speaker: "mom", type: "casual" },
      { en: "Under tongue.", zh: "舌下。", speaker: "mom", type: "casual" },
      { en: "Close mouth.", zh: "闭嘴。", speaker: "mom", type: "casual" },
      { en: "Don't talk.", zh: "别说话。", speaker: "mom", type: "momFirm" },
      { en: "Beep!", zh: "嘀！", speaker: "brother", type: "casual" },
      { en: "Hundred point three.", zh: "三十八度三。", speaker: "mom", type: "momWorry" },
      { en: "Fever.", zh: "发烧了。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 277, title: "吃药", category: "body", tags: ["吃药"], mode: "duo",
    sentences: [
      { en: "Medicine time.", zh: "吃药了。", speaker: "mom", type: "casual" },
      { en: "Bitter!", zh: "苦！", speaker: "brother", type: "broWhine" },
      { en: "Just one sip.", zh: "就一口。", speaker: "mom", type: "momSoft" },
      { en: "Open up.", zh: "张嘴。", speaker: "mom", type: "casual" },
      { en: "Eww.", zh: "咦。", speaker: "brother", type: "broScared" },
      { en: "Swallow fast.", zh: "快咽。", speaker: "mom", type: "rushed" },
      { en: "Water now.", zh: "喝水。", speaker: "mom", type: "casual" },
      { en: "Candy after?", zh: "之后糖？", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 278, title: "感冒", category: "body", tags: ["感冒"], mode: "duo",
    sentences: [
      { en: "Sneezing.", zh: "打喷嚏。", speaker: "brother", type: "casual" },
      { en: "Bless you.", zh: "祝你健康。", speaker: "mom", type: "momSoft" },
      { en: "Stuffy nose.", zh: "鼻塞。", speaker: "brother", type: "broWhine" },
      { en: "Get a tissue.", zh: "拿纸。", speaker: "mom", type: "casual" },
      { en: "Blow hard.", zh: "用力擤。", speaker: "mom", type: "casual" },
      { en: "Drink water.", zh: "多喝水。", speaker: "mom", type: "casual" },
      { en: "Rest in bed.", zh: "在床休息。", speaker: "mom", type: "momSoft" },
      { en: "Feel better.", zh: "好点了。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 279, title: "咳嗽", category: "body", tags: ["咳嗽"], mode: "duo",
    sentences: [
      { en: "Cough cough.", zh: "咳咳。", speaker: "sister", type: "broTired" },
      { en: "Cover mouth.", zh: "捂嘴。", speaker: "mom", type: "momFirm" },
      { en: "Throat hurts.", zh: "嗓子疼。", speaker: "sister", type: "broWhine" },
      { en: "Warm water.", zh: "喝热水。", speaker: "mom", type: "casual" },
      { en: "Honey too.", zh: "加蜂蜜。", speaker: "mom", type: "casual" },
      { en: "Sip slow.", zh: "慢喝。", speaker: "mom", type: "momSoft" },
      { en: "Lots of rest.", zh: "多休息。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 280, title: "贴创可贴", category: "body", tags: ["创可贴"], mode: "duo",
    sentences: [
      { en: "Cut my finger.", zh: "手指破了。", speaker: "brother", type: "broCry" },
      { en: "Show me.", zh: "给我看。", speaker: "mom", type: "momWorry" },
      { en: "Just a scrape.", zh: "就擦破。", speaker: "mom", type: "momSoft" },
      { en: "Hurts!", zh: "疼！", speaker: "brother", type: "broWhine" },
      { en: "Wash first.", zh: "先洗。", speaker: "mom", type: "casual" },
      { en: "Stings!", zh: "蜇得慌！", speaker: "brother", type: "broLoud" },
      { en: "Dry it.", zh: "擦干。", speaker: "mom", type: "casual" },
      { en: "Bandage on.", zh: "贴上。", speaker: "mom", type: "casual" },
      { en: "Better?", zh: "好点了？", speaker: "mom", type: "momSoft" },
      { en: "Yeah.", zh: "嗯。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 281, title: "肚子疼", category: "body", tags: ["肚子疼"], mode: "duo",
    sentences: [
      { en: "Tummy hurts.", zh: "肚子疼。", speaker: "brother", type: "broCry" },
      { en: "Where?", zh: "哪里？", speaker: "mom", type: "momWorry" },
      { en: "Here.", zh: "这里。", speaker: "brother", type: "broWhine" },
      { en: "Bad poop?", zh: "拉肚？", speaker: "mom", type: "broCurious" },
      { en: "Nope.", zh: "没。", speaker: "brother", type: "casual" },
      { en: "Lay down.", zh: "躺下。", speaker: "mom", type: "momSoft" },
      { en: "Rub belly.", zh: "揉肚子。", speaker: "mom", type: "momSoft" },
      { en: "Warm pad.", zh: "暖宝宝。", speaker: "mom", type: "casual" },
      { en: "Better.", zh: "好点。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 282, title: "头疼", category: "body", tags: ["头疼"], mode: "duo",
    sentences: [
      { en: "Head hurts.", zh: "头疼。", speaker: "sister", type: "broTired" },
      { en: "Bad?", zh: "厉害？", speaker: "mom", type: "momWorry" },
      { en: "Throbbing.", zh: "一抽一抽。", speaker: "sister", type: "broWhine" },
      { en: "Sit down.", zh: "坐下。", speaker: "mom", type: "casual" },
      { en: "Close eyes.", zh: "闭眼。", speaker: "mom", type: "momSoft" },
      { en: "Rub temples.", zh: "揉太阳穴。", speaker: "mom", type: "casual" },
      { en: "Drink water.", zh: "喝水。", speaker: "mom", type: "casual" },
      { en: "Lay in dark.", zh: "躺暗处。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 283, title: "牙疼", category: "body", tags: ["牙疼"], mode: "duo",
    sentences: [
      { en: "Tooth aches.", zh: "牙疼。", speaker: "sister", type: "broCry" },
      { en: "Which one?", zh: "哪颗？", speaker: "mom", type: "broCurious" },
      { en: "Back left.", zh: "左后。", speaker: "sister", type: "broWhine" },
      { en: "Open wide.", zh: "张大。", speaker: "mom", type: "casual" },
      { en: "Hmm, cavity.", zh: "嗯，蛀牙。", speaker: "mom", type: "casual" },
      { en: "Dentist call.", zh: "约牙医。", speaker: "mom", type: "casual" },
      { en: "Scared!", zh: "怕！", speaker: "sister", type: "broScared" },
      { en: "It'll be fine.", zh: "没事的。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 284, title: "流鼻血", category: "body", tags: ["鼻血"], mode: "duo",
    sentences: [
      { en: "Mom, blood!", zh: "妈，流血！", speaker: "brother", type: "broScared" },
      { en: "From nose.", zh: "鼻子。", speaker: "brother", type: "broCry" },
      { en: "Pinch nose.", zh: "捏鼻子。", speaker: "mom", type: "momFirm" },
      { en: "Lean forward.", zh: "前倾。", speaker: "mom", type: "momFirm" },
      { en: "Not back.", zh: "别仰头。", speaker: "mom", type: "casual" },
      { en: "Breathe mouth.", zh: "嘴呼吸。", speaker: "mom", type: "casual" },
      { en: "Five minutes.", zh: "五分钟。", speaker: "mom", type: "casual" },
      { en: "Stopped.", zh: "止住了。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 285, title: "起红包", category: "body", tags: ["疹子","蚊子"], mode: "duo",
    sentences: [
      { en: "Big bump!", zh: "好大包！", speaker: "brother", type: "broLoud" },
      { en: "Itchy!", zh: "好痒！", speaker: "brother", type: "broWhine" },
      { en: "Don't scratch.", zh: "别抓。", speaker: "mom", type: "momFirm" },
      { en: "Mosquito.", zh: "蚊子咬。", speaker: "mom", type: "casual" },
      { en: "Spray something.", zh: "喷点东西。", speaker: "mom", type: "casual" },
      { en: "Cold!", zh: "凉！", speaker: "brother", type: "broScared" },
      { en: "Less itchy soon.", zh: "马上不痒。", speaker: "mom", type: "momSoft" },
      { en: "Already better.", zh: "好点了。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 286, title: "打喷嚏", category: "body", tags: ["喷嚏"], mode: "narrate",
    sentences: [
      { en: "Nose tickle.", zh: "鼻子痒。", speaker: "brother", type: "casual" },
      { en: "Big breath.", zh: "深吸。", speaker: "brother", type: "casual" },
      { en: "Ah ah...", zh: "啊啊...", speaker: "brother", type: "casual" },
      { en: "Achoo!", zh: "阿嚏！", speaker: "brother", type: "broLoud" },
      { en: "Cover mouth.", zh: "捂嘴。", speaker: "brother", type: "casual" },
      { en: "Bless you.", zh: "祝你健康。", speaker: "mom", type: "momSoft" },
      { en: "Thanks.", zh: "谢谢。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 287, title: "打嗝", category: "body", tags: ["打嗝"], mode: "duo",
    sentences: [
      { en: "Hic.", zh: "嗝。", speaker: "brother", type: "casual" },
      { en: "Hiccups!", zh: "打嗝！", speaker: "sister", type: "sisTease" },
      { en: "Hic.", zh: "嗝。", speaker: "brother", type: "broWhine" },
      { en: "Hold breath.", zh: "屏气。", speaker: "sister", type: "casual" },
      { en: "Drink water.", zh: "喝水。", speaker: "sister", type: "casual" },
      { en: "Backwards.", zh: "倒着喝。", speaker: "sister", type: "broSilly" },
      { en: "Boo!", zh: "嘘！", speaker: "sister", type: "broLoud" },
      { en: "Stopped!", zh: "停了！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 288, title: "放屁", category: "body", tags: ["放屁"], mode: "duo",
    sentences: [
      { en: "Pfft!", zh: "噗！", speaker: "brother", type: "casual" },
      { en: "Eww!", zh: "啊！", speaker: "sister", type: "broScared" },
      { en: "Sorry.", zh: "不好意思。", speaker: "brother", type: "broSilly" },
      { en: "Stinky!", zh: "好臭！", speaker: "sister", type: "broLoud" },
      { en: "It was me.", zh: "我放的。", speaker: "brother", type: "broSilly" },
      { en: "Cover your mouth.", zh: "捂嘴。", speaker: "sister", type: "sisAnnoy" },
      { en: "Haha!", zh: "哈哈！", speaker: "brother", type: "broSilly" }
    ]
  },
  {
    id: 289, title: "打哈欠", category: "body", tags: ["哈欠","困"], mode: "narrate",
    sentences: [
      { en: "Sleepy.", zh: "困。", speaker: "sister", type: "broTired" },
      { en: "Big yawn.", zh: "打大哈欠。", speaker: "sister", type: "casual" },
      { en: "Mouth wide.", zh: "嘴张大。", speaker: "sister", type: "casual" },
      { en: "Cover mouth.", zh: "捂嘴。", speaker: "sister", type: "casual" },
      { en: "Tears come.", zh: "流眼泪。", speaker: "sister", type: "casual" },
      { en: "Wipe them.", zh: "擦掉。", speaker: "sister", type: "casual" },
      { en: "Bedtime.", zh: "该睡了。", speaker: "sister", type: "broTired" }
    ]
  },
  {
    id: 290, title: "伸懒腰", category: "body", tags: ["懒腰"], mode: "narrate",
    sentences: [
      { en: "Stiff back.", zh: "腰僵。", speaker: "sister", type: "casual" },
      { en: "Arms up.", zh: "举手。", speaker: "sister", type: "casual" },
      { en: "Higher.", zh: "再高。", speaker: "sister", type: "casual" },
      { en: "Stretch out.", zh: "拉伸。", speaker: "sister", type: "casual" },
      { en: "Crack!", zh: "咔！", speaker: "sister", type: "casual" },
      { en: "Bend over.", zh: "弯腰。", speaker: "sister", type: "casual" },
      { en: "Touch toes.", zh: "摸脚趾。", speaker: "sister", type: "casual" },
      { en: "Feels great.", zh: "舒服。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 291, title: "看医生", category: "body", tags: ["医生"], mode: "duo",
    sentences: [
      { en: "What's wrong?", zh: "怎么了？", speaker: "doctor", type: "casual" },
      { en: "Cough lots.", zh: "总咳嗽。", speaker: "brother", type: "broWhine" },
      { en: "How long?", zh: "多久了？", speaker: "doctor", type: "broCurious" },
      { en: "Three days.", zh: "三天。", speaker: "brother", type: "casual" },
      { en: "Open mouth.", zh: "张嘴。", speaker: "doctor", type: "casual" },
      { en: "Ahhh.", zh: "啊。", speaker: "brother", type: "casual" },
      { en: "Red throat.", zh: "嗓子红。", speaker: "doctor", type: "casual" },
      { en: "Take this.", zh: "吃这个。", speaker: "doctor", type: "casual" }
    ]
  },
  {
    id: 292, title: "打针", category: "body", tags: ["打针"], mode: "duo",
    sentences: [
      { en: "Roll up sleeve.", zh: "卷袖。", speaker: "doctor", type: "casual" },
      { en: "Scared!", zh: "怕！", speaker: "brother", type: "broScared" },
      { en: "Look away.", zh: "看别处。", speaker: "doctor", type: "momSoft" },
      { en: "Cold wipe.", zh: "凉的。", speaker: "brother", type: "broScared" },
      { en: "Tiny pinch.", zh: "扎一下。", speaker: "doctor", type: "casual" },
      { en: "Ow!", zh: "哎！", speaker: "brother", type: "broLoud" },
      { en: "Done!", zh: "好了！", speaker: "doctor", type: "casual" },
      { en: "Sticker reward.", zh: "贴纸奖励。", speaker: "doctor", type: "momSoft" }
    ]
  },
  {
    id: 293, title: "体检身高", category: "body", tags: ["身高","量"], mode: "duo",
    sentences: [
      { en: "Stand tall.", zh: "站直。", speaker: "doctor", type: "casual" },
      { en: "Heels to wall.", zh: "脚跟靠墙。", speaker: "doctor", type: "casual" },
      { en: "Look straight.", zh: "目视前。", speaker: "doctor", type: "casual" },
      { en: "Mark this.", zh: "做标记。", speaker: "doctor", type: "casual" },
      { en: "How tall?", zh: "多高？", speaker: "brother", type: "broCurious" },
      { en: "One twenty.", zh: "一米二。", speaker: "doctor", type: "casual" },
      { en: "Grew two inches!", zh: "长两寸！", speaker: "mom", type: "broExcite" },
      { en: "Big boy.", zh: "大男孩。", speaker: "doctor", type: "momSoft" }
    ]
  },
  {
    id: 294, title: "称体重", category: "body", tags: ["体重"], mode: "duo",
    sentences: [
      { en: "Step on scale.", zh: "上称。", speaker: "doctor", type: "casual" },
      { en: "Shoes off.", zh: "脱鞋。", speaker: "doctor", type: "casual" },
      { en: "Stand still.", zh: "站好。", speaker: "doctor", type: "casual" },
      { en: "Look down.", zh: "看下面。", speaker: "doctor", type: "casual" },
      { en: "Beep.", zh: "嘀。", speaker: "brother", type: "casual" },
      { en: "Forty pounds.", zh: "四十磅。", speaker: "doctor", type: "casual" },
      { en: "Healthy weight.", zh: "正常。", speaker: "doctor", type: "momSoft" }
    ]
  },
  {
    id: 295, title: "测视力", category: "body", tags: ["视力"], mode: "duo",
    sentences: [
      { en: "Eye chart.", zh: "视力表。", speaker: "doctor", type: "casual" },
      { en: "Cover left.", zh: "遮左眼。", speaker: "doctor", type: "casual" },
      { en: "Read row five.", zh: "读第五行。", speaker: "doctor", type: "casual" },
      { en: "E, F, P, T.", zh: "E F P T。", speaker: "sister", type: "casual" },
      { en: "Smaller now.", zh: "再小的。", speaker: "doctor", type: "casual" },
      { en: "Blurry!", zh: "看不清！", speaker: "sister", type: "broScared" },
      { en: "Glasses time.", zh: "该戴眼镜。", speaker: "doctor", type: "casual" }
    ]
  },
  {
    id: 296, title: "做操", category: "body", tags: ["体操"], mode: "narrate",
    sentences: [
      { en: "Music starts.", zh: "音乐响。", speaker: "teacher", type: "casual" },
      { en: "Arms swing.", zh: "甩手。", speaker: "teacher", type: "casual" },
      { en: "Jump in place.", zh: "原地跳。", speaker: "teacher", type: "casual" },
      { en: "Touch toes.", zh: "摸脚。", speaker: "teacher", type: "casual" },
      { en: "Twist waist.", zh: "扭腰。", speaker: "teacher", type: "casual" },
      { en: "Raise knees.", zh: "抬腿。", speaker: "teacher", type: "casual" },
      { en: "Cool down.", zh: "放松。", speaker: "teacher", type: "casual" },
      { en: "Done!", zh: "完了！", speaker: "teacher", type: "casual" }
    ]
  },
  {
    id: 297, title: "跑步", category: "body", tags: ["跑步"], mode: "narrate",
    sentences: [
      { en: "Stretch first.", zh: "先拉伸。", speaker: "brother", type: "casual" },
      { en: "Tie laces.", zh: "系鞋带。", speaker: "brother", type: "casual" },
      { en: "Slow start.", zh: "慢起步。", speaker: "brother", type: "casual" },
      { en: "Pick up pace.", zh: "加速。", speaker: "brother", type: "casual" },
      { en: "Faster!", zh: "再快！", speaker: "brother", type: "rushed" },
      { en: "Out of breath.", zh: "气喘。", speaker: "brother", type: "broTired" },
      { en: "Slow down.", zh: "慢下来。", speaker: "brother", type: "casual" },
      { en: "Cool walk.", zh: "走着。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 298, title: "深呼吸", category: "body", tags: ["呼吸"], mode: "narrate",
    sentences: [
      { en: "Calm down.", zh: "冷静。", speaker: "mom", type: "momSoft" },
      { en: "Deep breath.", zh: "深呼吸。", speaker: "mom", type: "momSoft" },
      { en: "In through nose.", zh: "鼻吸气。", speaker: "mom", type: "momSoft" },
      { en: "Hold.", zh: "屏住。", speaker: "mom", type: "casual" },
      { en: "Out through mouth.", zh: "嘴呼气。", speaker: "mom", type: "momSoft" },
      { en: "Again.", zh: "再来。", speaker: "mom", type: "momSoft" },
      { en: "Better?", zh: "好点？", speaker: "mom", type: "momSoft" },
      { en: "Yes.", zh: "嗯。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 299, title: "抠鼻屎", category: "body", tags: ["鼻子"], mode: "duo",
    sentences: [
      { en: "Nose itches.", zh: "鼻子痒。", speaker: "brother", type: "casual" },
      { en: "Don't dig!", zh: "别抠！", speaker: "mom", type: "momFirm" },
      { en: "Use tissue.", zh: "用纸。", speaker: "mom", type: "casual" },
      { en: "But...", zh: "可是...", speaker: "brother", type: "broWhine" },
      { en: "Blow gently.", zh: "轻擤。", speaker: "mom", type: "momSoft" },
      { en: "Better?", zh: "好点？", speaker: "mom", type: "momSoft" },
      { en: "Hmm.", zh: "嗯。", speaker: "brother", type: "casual" },
      { en: "Wash hands.", zh: "洗手。", speaker: "mom", type: "momFirm" }
    ]
  },
  {
    id: 300, title: "摔倒了", category: "body", tags: ["摔倒"], mode: "duo",
    sentences: [
      { en: "Ouch!", zh: "哎哟！", speaker: "brother", type: "broCry" },
      { en: "What happened?", zh: "咋了？", speaker: "mom", type: "momWorry" },
      { en: "Tripped.", zh: "绊倒了。", speaker: "brother", type: "broCry" },
      { en: "Where hurts?", zh: "哪疼？", speaker: "mom", type: "momWorry" },
      { en: "My knee.", zh: "膝盖。", speaker: "brother", type: "broWhine" },
      { en: "Scraped.", zh: "擦破了。", speaker: "mom", type: "casual" },
      { en: "Wash and bandage.", zh: "洗了贴。", speaker: "mom", type: "casual" },
      { en: "Be careful.", zh: "小心点。", speaker: "mom", type: "momFirm" },
      { en: "I will.", zh: "我会。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 301, title: "早上叫起", category: "family", tags: ["早起","叫醒"], mode: "duo",
    sentences: [
      { en: "Morning sleepy.", zh: "早，小懒虫。", speaker: "mom", type: "momSoft" },
      { en: "Mmm.", zh: "嗯...", speaker: "brother", type: "broTired" },
      { en: "Open curtains.", zh: "拉窗帘。", speaker: "mom", type: "casual" },
      { en: "Bright!", zh: "刺眼！", speaker: "brother", type: "broWhine" },
      { en: "Sit up.", zh: "坐起来。", speaker: "mom", type: "casual" },
      { en: "Five more.", zh: "再五分钟。", speaker: "brother", type: "broWhine" },
      { en: "No more.", zh: "不行了。", speaker: "mom", type: "momFirm" },
      { en: "Out of bed.", zh: "下床。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 302, title: "赖床", category: "family", tags: ["赖床"], mode: "duo",
    sentences: [
      { en: "Up up up.", zh: "起起起。", speaker: "mom", type: "momCalling" },
      { en: "Pull covers.", zh: "拉被子。", speaker: "mom", type: "casual" },
      { en: "Nooo!", zh: "不要！", speaker: "brother", type: "broWhine" },
      { en: "It's seven.", zh: "七点了。", speaker: "mom", type: "momFirm" },
      { en: "Too early.", zh: "太早。", speaker: "brother", type: "broTired" },
      { en: "Late for school.", zh: "上学迟到。", speaker: "mom", type: "momFirm" },
      { en: "Fine.", zh: "行行。", speaker: "brother", type: "broAnnoy" },
      { en: "Yawn.", zh: "打哈欠。", speaker: "brother", type: "broTired" }
    ]
  },
  {
    id: 303, title: "爸出门上班", category: "family", tags: ["上班"], mode: "duo",
    sentences: [
      { en: "Off to work.", zh: "去上班。", speaker: "dad", type: "casual" },
      { en: "Bye dad!", zh: "爸爸再见！", speaker: "brother", type: "broExcite" },
      { en: "Bye buddy.", zh: "再见儿子。", speaker: "dad", type: "dadCalm" },
      { en: "Tie straight?", zh: "领带正吗？", speaker: "dad", type: "broCurious" },
      { en: "Crooked.", zh: "歪了。", speaker: "mom", type: "casual" },
      { en: "Fix it.", zh: "整一下。", speaker: "mom", type: "casual" },
      { en: "Drive safe.", zh: "开慢点。", speaker: "mom", type: "momSoft" },
      { en: "Love you.", zh: "爱你。", speaker: "dad", type: "dadCalm" }
    ]
  },
  {
    id: 304, title: "妈出门上班", category: "family", tags: ["上班"], mode: "duo",
    sentences: [
      { en: "Mom going.", zh: "妈走了。", speaker: "mom", type: "casual" },
      { en: "Already?", zh: "这么早？", speaker: "sister", type: "broWhine" },
      { en: "Meeting at nine.", zh: "九点开会。", speaker: "mom", type: "casual" },
      { en: "Lunch in fridge.", zh: "午饭在冰箱。", speaker: "mom", type: "casual" },
      { en: "Heat it up.", zh: "热一下。", speaker: "mom", type: "casual" },
      { en: "Okay mom.", zh: "好妈妈。", speaker: "sister", type: "casual" },
      { en: "Be good.", zh: "听话。", speaker: "mom", type: "momSoft" },
      { en: "Will do.", zh: "会的。", speaker: "sister", type: "broCute" }
    ]
  },
  {
    id: 305, title: "放学接到", category: "family", tags: ["放学"], mode: "duo",
    sentences: [
      { en: "Mommy!", zh: "妈妈！", speaker: "brother", type: "broExcite" },
      { en: "Here!", zh: "这里！", speaker: "mom", type: "momCalling" },
      { en: "How was today?", zh: "今天怎样？", speaker: "mom", type: "momSoft" },
      { en: "Great!", zh: "好！", speaker: "brother", type: "broExcite" },
      { en: "Hungry?", zh: "饿吗？", speaker: "mom", type: "broCurious" },
      { en: "So hungry.", zh: "饿死了。", speaker: "brother", type: "broWhine" },
      { en: "Snack at home.", zh: "回家吃。", speaker: "mom", type: "casual" },
      { en: "Yay!", zh: "耶！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 306, title: "回家进门", category: "family", tags: ["进门"], mode: "duo",
    sentences: [
      { en: "I'm home!", zh: "我回来了！", speaker: "sister", type: "broExcite" },
      { en: "Welcome back!", zh: "欢迎回家！", speaker: "mom", type: "momCheer" },
      { en: "Shoes off.", zh: "脱鞋。", speaker: "mom", type: "casual" },
      { en: "Wash hands.", zh: "洗手。", speaker: "mom", type: "momFirm" },
      { en: "Hang bag.", zh: "挂书包。", speaker: "mom", type: "casual" },
      { en: "Snack ready?", zh: "点心好了？", speaker: "sister", type: "broCute" },
      { en: "On the table.", zh: "桌上。", speaker: "mom", type: "casual" },
      { en: "Thanks!", zh: "谢谢！", speaker: "sister", type: "broExcite" }
    ]
  },
  {
    id: 307, title: "看动画片", category: "family", tags: ["动画","客厅"], mode: "duo",
    sentences: [
      { en: "TV time?", zh: "看电视？", speaker: "brother", type: "broCute" },
      { en: "Homework first.", zh: "先作业。", speaker: "mom", type: "momFirm" },
      { en: "Done already!", zh: "做完了！", speaker: "brother", type: "broExcite" },
      { en: "Really?", zh: "真的？", speaker: "mom", type: "broCurious" },
      { en: "Yes really.", zh: "真的真的。", speaker: "brother", type: "broCute" },
      { en: "Thirty minutes.", zh: "三十分钟。", speaker: "mom", type: "momFirm" },
      { en: "Yes!", zh: "耶！", speaker: "brother", type: "broExcite" },
      { en: "Volume low.", zh: "声小点。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 308, title: "和爸聊天", category: "family", tags: ["聊天"], mode: "duo",
    sentences: [
      { en: "Hey dad.", zh: "嘿爸。", speaker: "sister", type: "casual" },
      { en: "What's up?", zh: "咋了？", speaker: "dad", type: "dadCalm" },
      { en: "Bored.", zh: "无聊。", speaker: "sister", type: "broWhine" },
      { en: "Read a book?", zh: "看书？", speaker: "dad", type: "broCurious" },
      { en: "Read 'em all.", zh: "都看过。", speaker: "sister", type: "casual" },
      { en: "Draw something?", zh: "画画？", speaker: "dad", type: "casual" },
      { en: "Hmm, okay.", zh: "好吧。", speaker: "sister", type: "casual" },
      { en: "I'll watch.", zh: "我看着。", speaker: "dad", type: "dadCalm" }
    ]
  },
  {
    id: 309, title: "和妈聊天", category: "family", tags: ["聊天"], mode: "duo",
    sentences: [
      { en: "Mom?", zh: "妈？", speaker: "brother", type: "casual" },
      { en: "Yeah?", zh: "嗯？", speaker: "mom", type: "momSoft" },
      { en: "Can I ask?", zh: "能问吗？", speaker: "brother", type: "broCurious" },
      { en: "Sure.", zh: "问。", speaker: "mom", type: "momSoft" },
      { en: "Why is sky blue?", zh: "天为啥蓝？", speaker: "brother", type: "broCurious" },
      { en: "Good question.", zh: "好问题。", speaker: "mom", type: "casual" },
      { en: "Light scatters.", zh: "光散射。", speaker: "mom", type: "casual" },
      { en: "Cool.", zh: "酷。", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 310, title: "和奶奶视频", category: "family", tags: ["视频","奶奶"], mode: "duo",
    sentences: [
      { en: "Call grandma.", zh: "打奶奶。", speaker: "mom", type: "casual" },
      { en: "Ringing.", zh: "响着。", speaker: "sister", type: "casual" },
      { en: "Hi sweetie!", zh: "宝贝好！", speaker: "grandma", type: "momSoft" },
      { en: "Hi grandma!", zh: "奶奶好！", speaker: "sister", type: "broExcite" },
      { en: "Show me your face.", zh: "给我看脸。", speaker: "grandma", type: "momSoft" },
      { en: "Here!", zh: "看！", speaker: "sister", type: "broCute" },
      { en: "Miss you.", zh: "想你。", speaker: "grandma", type: "momSoft" },
      { en: "Miss you too.", zh: "我也想。", speaker: "sister", type: "broCute" }
    ]
  },
  {
    id: 311, title: "和爷爷打电话", category: "family", tags: ["电话","爷爷"], mode: "duo",
    sentences: [
      { en: "Hello, grandpa.", zh: "爷爷好。", speaker: "brother", type: "casual" },
      { en: "My boy!", zh: "我大孙子！", speaker: "grandpa", type: "casual" },
      { en: "How are you?", zh: "你咋样？", speaker: "brother", type: "casual" },
      { en: "Healthy strong.", zh: "硬朗。", speaker: "grandpa", type: "casual" },
      { en: "When visit?", zh: "啥时来？", speaker: "brother", type: "broCute" },
      { en: "Soon, kiddo.", zh: "快了。", speaker: "grandpa", type: "casual" },
      { en: "Yay!", zh: "好！", speaker: "brother", type: "broExcite" },
      { en: "Be good.", zh: "听话。", speaker: "grandpa", type: "casual" }
    ]
  },
  {
    id: 312, title: "周末懒早晨", category: "family", tags: ["周末"], mode: "duo",
    sentences: [
      { en: "Saturday!", zh: "周六！", speaker: "brother", type: "broExcite" },
      { en: "Sleep in.", zh: "睡懒觉。", speaker: "mom", type: "momTired" },
      { en: "Pancakes?", zh: "做煎饼？", speaker: "brother", type: "broCute" },
      { en: "Sure.", zh: "好。", speaker: "mom", type: "momSoft" },
      { en: "Whip cream too?", zh: "也要奶油？", speaker: "brother", type: "broCute" },
      { en: "Why not.", zh: "可以。", speaker: "mom", type: "casual" },
      { en: "Best mom!", zh: "好妈妈！", speaker: "brother", type: "broExcite" },
      { en: "Hug.", zh: "抱抱。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 313, title: "晚饭前", category: "family", tags: ["晚饭"], mode: "duo",
    sentences: [
      { en: "Dinner ready.", zh: "晚饭好了。", speaker: "mom", type: "momCalling" },
      { en: "Smells amazing.", zh: "好香。", speaker: "dad", type: "casual" },
      { en: "What's tonight?", zh: "今晚啥？", speaker: "sister", type: "broCurious" },
      { en: "Chicken curry.", zh: "咖喱鸡。", speaker: "mom", type: "casual" },
      { en: "Yum!", zh: "好吃！", speaker: "brother", type: "broExcite" },
      { en: "Wash hands.", zh: "洗手。", speaker: "mom", type: "momFirm" },
      { en: "Sit at table.", zh: "上桌。", speaker: "dad", type: "casual" },
      { en: "Pass plates.", zh: "传盘子。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 314, title: "吃晚饭", category: "family", tags: ["吃饭","晚饭"], mode: "duo",
    sentences: [
      { en: "Pass salt please.", zh: "盐请给我。", speaker: "dad", type: "casual" },
      { en: "Here.", zh: "给。", speaker: "sister", type: "casual" },
      { en: "How was work?", zh: "上班咋样？", speaker: "mom", type: "broCurious" },
      { en: "Busy.", zh: "忙。", speaker: "dad", type: "dadTired" },
      { en: "And school?", zh: "学校呢？", speaker: "mom", type: "broCurious" },
      { en: "Math test.", zh: "数学考试。", speaker: "sister", type: "casual" },
      { en: "Did good?", zh: "考好了？", speaker: "dad", type: "broCurious" },
      { en: "Ninety!", zh: "九十！", speaker: "sister", type: "broProud" },
      { en: "Proud.", zh: "骄傲。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 315, title: "饭后洗碗", category: "family", tags: ["洗碗","饭后"], mode: "duo",
    sentences: [
      { en: "I'll wash.", zh: "我洗。", speaker: "sister", type: "casual" },
      { en: "I'll dry.", zh: "我擦。", speaker: "brother", type: "casual" },
      { en: "Stack here.", zh: "码这。", speaker: "sister", type: "casual" },
      { en: "Don't break!", zh: "别打了！", speaker: "mom", type: "momFirm" },
      { en: "Slippery!", zh: "滑！", speaker: "brother", type: "broLoud" },
      { en: "Careful.", zh: "小心。", speaker: "sister", type: "sisWorry" },
      { en: "All clean.", zh: "都干净了。", speaker: "sister", type: "sisProud" },
      { en: "Good team.", zh: "好搭档。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 316, title: "求买玩具", category: "family", tags: ["求买","玩具"], mode: "duo",
    sentences: [
      { en: "Mom please!", zh: "妈求求！", speaker: "brother", type: "broCute" },
      { en: "What?", zh: "啥？", speaker: "mom", type: "casual" },
      { en: "This toy!", zh: "这玩具！", speaker: "brother", type: "broWhine" },
      { en: "Too expensive.", zh: "太贵。", speaker: "mom", type: "momFirm" },
      { en: "Pleeease.", zh: "求求啦。", speaker: "brother", type: "broWhine" },
      { en: "I said no.", zh: "说不行。", speaker: "mom", type: "momFirm" },
      { en: "Birthday gift?", zh: "生日礼？", speaker: "brother", type: "broCute" },
      { en: "Maybe.", zh: "再说。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 317, title: "求看电视", category: "family", tags: ["求看电视"], mode: "duo",
    sentences: [
      { en: "Can I watch?", zh: "能看吗？", speaker: "sister", type: "broCute" },
      { en: "Homework?", zh: "作业？", speaker: "mom", type: "broCurious" },
      { en: "Done.", zh: "做完。", speaker: "sister", type: "casual" },
      { en: "Room clean?", zh: "屋干净？", speaker: "mom", type: "broCurious" },
      { en: "Yes.", zh: "嗯。", speaker: "sister", type: "casual" },
      { en: "Twenty minutes.", zh: "二十分钟。", speaker: "mom", type: "casual" },
      { en: "Thirty?", zh: "三十？", speaker: "sister", type: "broCute" },
      { en: "Twenty-five.", zh: "二十五。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 318, title: "求吃零食", category: "family", tags: ["求吃","零食"], mode: "duo",
    sentences: [
      { en: "Snack please?", zh: "吃零食？", speaker: "brother", type: "broCute" },
      { en: "Dinner soon.", zh: "快吃饭。", speaker: "mom", type: "casual" },
      { en: "Tiny piece?", zh: "一小块？", speaker: "brother", type: "broCute" },
      { en: "No no.", zh: "不行。", speaker: "mom", type: "momFirm" },
      { en: "I'm starving!", zh: "饿死了！", speaker: "brother", type: "broWhine" },
      { en: "Drink water.", zh: "喝水。", speaker: "mom", type: "casual" },
      { en: "Aw.", zh: "唉。", speaker: "brother", type: "broPout" },
      { en: "After dinner.", zh: "饭后吃。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 319, title: "被拒绝", category: "family", tags: ["拒绝"], mode: "duo",
    sentences: [
      { en: "Can I go?", zh: "能去吗？", speaker: "sister", type: "broCute" },
      { en: "Where?", zh: "哪？", speaker: "mom", type: "broCurious" },
      { en: "Friend's house.", zh: "朋友家。", speaker: "sister", type: "casual" },
      { en: "Not today.", zh: "今天不行。", speaker: "mom", type: "momFirm" },
      { en: "Why?", zh: "为啥？", speaker: "sister", type: "sisWhine" },
      { en: "Homework still.", zh: "作业还没。", speaker: "mom", type: "momFirm" },
      { en: "But mom!", zh: "可是妈！", speaker: "sister", type: "sisWhine" },
      { en: "No buts.", zh: "没可是。", speaker: "mom", type: "momFirm" }
    ]
  },
  {
    id: 320, title: "被批准", category: "family", tags: ["同意"], mode: "duo",
    sentences: [
      { en: "Can I please?", zh: "求求行吗？", speaker: "brother", type: "broCute" },
      { en: "Did chores?", zh: "做家务？", speaker: "mom", type: "broCurious" },
      { en: "Cleaned room.", zh: "扫了房间。", speaker: "brother", type: "casual" },
      { en: "Trash out?", zh: "倒垃圾？", speaker: "mom", type: "broCurious" },
      { en: "Done.", zh: "倒了。", speaker: "brother", type: "casual" },
      { en: "Okay, go.", zh: "行，去吧。", speaker: "mom", type: "momSoft" },
      { en: "Yes!", zh: "耶！", speaker: "brother", type: "broExcite" },
      { en: "Be back six.", zh: "六点回。", speaker: "mom", type: "momFirm" }
    ]
  },
  {
    id: 321, title: "生气甩门", category: "family", tags: ["生气","甩门"], mode: "duo",
    sentences: [
      { en: "I hate this!", zh: "我讨厌！", speaker: "sister", type: "yell" },
      { en: "Don't yell.", zh: "别吼。", speaker: "mom", type: "momFirm" },
      { en: "So unfair!", zh: "不公平！", speaker: "sister", type: "sisAnnoy" },
      { en: "Calm down.", zh: "冷静。", speaker: "mom", type: "momSoft" },
      { en: "Whatever!", zh: "随便！", speaker: "sister", type: "sisAnnoy" },
      { en: "Bang!", zh: "砰！", speaker: "sister", type: "yell" },
      { en: "Door slam.", zh: "甩门。", speaker: "mom", type: "momTired" },
      { en: "Sigh.", zh: "唉。", speaker: "mom", type: "momTired" }
    ]
  },
  {
    id: 322, title: "和好抱抱", category: "family", tags: ["和好"], mode: "duo",
    sentences: [
      { en: "Sorry mom.", zh: "对不起妈。", speaker: "sister", type: "broCry" },
      { en: "I know.", zh: "我知道。", speaker: "mom", type: "momSoft" },
      { en: "I was mean.", zh: "我凶了。", speaker: "sister", type: "broCry" },
      { en: "Come here.", zh: "过来。", speaker: "mom", type: "momSoft" },
      { en: "Hug.", zh: "抱抱。", speaker: "mom", type: "momSoft" },
      { en: "Love you.", zh: "爱你。", speaker: "sister", type: "broCute" },
      { en: "Love you too.", zh: "我也爱。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 323, title: "妈妈累了", category: "family", tags: ["累","妈妈"], mode: "duo",
    sentences: [
      { en: "Mom looks tired.", zh: "妈累了。", speaker: "sister", type: "casual" },
      { en: "Long day.", zh: "一天累。", speaker: "mom", type: "momTired" },
      { en: "Tea, mom?", zh: "茶，妈？", speaker: "sister", type: "broCute" },
      { en: "Sweetie.", zh: "宝贝。", speaker: "mom", type: "momSoft" },
      { en: "I'll make.", zh: "我泡。", speaker: "sister", type: "casual" },
      { en: "Hot, careful.", zh: "烫，小心。", speaker: "mom", type: "momWorry" },
      { en: "Here.", zh: "给。", speaker: "sister", type: "broCute" },
      { en: "Thank you.", zh: "谢谢。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 324, title: "爸爸下班", category: "family", tags: ["爸爸","下班"], mode: "duo",
    sentences: [
      { en: "Daddy!", zh: "爸爸！", speaker: "brother", type: "broExcite" },
      { en: "Hi buddy.", zh: "嘿儿子。", speaker: "dad", type: "dadCalm" },
      { en: "How was work?", zh: "上班咋样？", speaker: "brother", type: "broCurious" },
      { en: "Long.", zh: "长。", speaker: "dad", type: "dadTired" },
      { en: "I missed you.", zh: "我想你了。", speaker: "brother", type: "broCute" },
      { en: "Me too.", zh: "我也是。", speaker: "dad", type: "dadCalm" },
      { en: "Big hug?", zh: "抱抱？", speaker: "brother", type: "broCute" },
      { en: "Come here.", zh: "过来。", speaker: "dad", type: "dadCalm" }
    ]
  },
  {
    id: 325, title: "讲笑话", category: "family", tags: ["笑话"], mode: "duo",
    sentences: [
      { en: "Hear a joke?", zh: "听笑话？", speaker: "brother", type: "broSilly" },
      { en: "Tell me.", zh: "讲。", speaker: "dad", type: "broCurious" },
      { en: "Why chicken cross?", zh: "鸡为啥过路？", speaker: "brother", type: "broCute" },
      { en: "Why?", zh: "为啥？", speaker: "dad", type: "broCurious" },
      { en: "Other side!", zh: "去对面！", speaker: "brother", type: "broLoud" },
      { en: "Ha!", zh: "哈！", speaker: "dad", type: "laugh" },
      { en: "Good one.", zh: "好笑话。", speaker: "dad", type: "dadCalm" },
      { en: "One more!", zh: "再来！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 326, title: "看电影一起", category: "family", tags: ["电影","家庭"], mode: "duo",
    sentences: [
      { en: "Movie night.", zh: "电影夜。", speaker: "mom", type: "casual" },
      { en: "Popcorn!", zh: "爆米花！", speaker: "brother", type: "broExcite" },
      { en: "Make some?", zh: "做点？", speaker: "mom", type: "broCurious" },
      { en: "On it.", zh: "马上。", speaker: "sister", type: "casual" },
      { en: "What we watch?", zh: "看啥？", speaker: "dad", type: "broCurious" },
      { en: "Cartoons!", zh: "动画！", speaker: "brother", type: "broExcite" },
      { en: "Comedy?", zh: "喜剧？", speaker: "sister", type: "casual" },
      { en: "You pick.", zh: "你定。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 327, title: "卧室聊天", category: "family", tags: ["睡前","聊天"], mode: "duo",
    sentences: [
      { en: "Mom, in bed.", zh: "妈，在床上。", speaker: "sister", type: "casual" },
      { en: "Coming.", zh: "来了。", speaker: "mom", type: "momSoft" },
      { en: "Tell me story.", zh: "讲故事。", speaker: "sister", type: "broCute" },
      { en: "Which one?", zh: "哪个？", speaker: "mom", type: "broCurious" },
      { en: "Frog and princess.", zh: "青蛙公主。", speaker: "sister", type: "casual" },
      { en: "Once upon a time.", zh: "从前。", speaker: "mom", type: "casual" },
      { en: "Then?", zh: "然后？", speaker: "sister", type: "broCurious" },
      { en: "Listen.", zh: "听着。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 328, title: "亲亲晚安", category: "family", tags: ["晚安","亲亲"], mode: "duo",
    sentences: [
      { en: "Night night.", zh: "晚安。", speaker: "mom", type: "momSoft" },
      { en: "Tucked in?", zh: "盖好了？", speaker: "mom", type: "broCurious" },
      { en: "Yes.", zh: "嗯。", speaker: "brother", type: "broCute" },
      { en: "Kiss kiss.", zh: "亲亲。", speaker: "mom", type: "momSoft" },
      { en: "Love you mom.", zh: "爱你妈。", speaker: "brother", type: "broCute" },
      { en: "Love you more.", zh: "更爱你。", speaker: "mom", type: "momSoft" },
      { en: "Sweet dreams.", zh: "做好梦。", speaker: "mom", type: "momSoft" },
      { en: "Lights off.", zh: "关灯。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 329, title: "做噩梦", category: "family", tags: ["噩梦","害怕"], mode: "duo",
    sentences: [
      { en: "Mom!", zh: "妈！", speaker: "brother", type: "broScared" },
      { en: "What's wrong?", zh: "怎么了？", speaker: "mom", type: "momWorry" },
      { en: "Scary dream.", zh: "可怕梦。", speaker: "brother", type: "broCry" },
      { en: "Aww.", zh: "唉。", speaker: "mom", type: "momSoft" },
      { en: "It's not real.", zh: "不是真的。", speaker: "mom", type: "momSoft" },
      { en: "Come closer.", zh: "靠过来。", speaker: "mom", type: "momSoft" },
      { en: "Safe now.", zh: "安全了。", speaker: "mom", type: "momSoft" },
      { en: "Sleep again.", zh: "再睡。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 330, title: "尿床", category: "family", tags: ["尿床"], mode: "duo",
    sentences: [
      { en: "Mom...", zh: "妈...", speaker: "brother", type: "broCry" },
      { en: "What?", zh: "啥？", speaker: "mom", type: "momSoft" },
      { en: "Bed wet.", zh: "床湿了。", speaker: "brother", type: "broCry" },
      { en: "Oh no.", zh: "唉哟。", speaker: "mom", type: "momTired" },
      { en: "Don't cry.", zh: "别哭。", speaker: "mom", type: "momSoft" },
      { en: "Sorry mom.", zh: "对不起。", speaker: "brother", type: "broCry" },
      { en: "Happens.", zh: "正常。", speaker: "mom", type: "momSoft" },
      { en: "Change sheets.", zh: "换床单。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 331, title: "姐姐吓弟弟", category: "family", tags: ["姐弟","吓"], mode: "duo",
    sentences: [
      { en: "Boo!", zh: "哇！", speaker: "sister", type: "broLoud" },
      { en: "Ahh!", zh: "啊！", speaker: "brother", type: "broScared" },
      { en: "Haha got ya.", zh: "哈哈吓到了。", speaker: "sister", type: "sisTease" },
      { en: "Not funny!", zh: "不好玩！", speaker: "brother", type: "broAnnoy" },
      { en: "Was too.", zh: "好玩。", speaker: "sister", type: "sisTease" },
      { en: "Mom!", zh: "妈！", speaker: "brother", type: "broTell" },
      { en: "Tattletale.", zh: "告状精。", speaker: "sister", type: "sisAnnoy" },
      { en: "Hmph!", zh: "哼！", speaker: "brother", type: "broPout" }
    ]
  },
  {
    id: 332, title: "抢玩具", category: "family", tags: ["抢","玩具"], mode: "duo",
    sentences: [
      { en: "Mine!", zh: "我的！", speaker: "brother", type: "broLoud" },
      { en: "I had it!", zh: "我先拿！", speaker: "sister", type: "sisAnnoy" },
      { en: "No, mine!", zh: "不，我的！", speaker: "brother", type: "broLoud" },
      { en: "Let go!", zh: "放手！", speaker: "sister", type: "sisAnnoy" },
      { en: "Stop fighting!", zh: "别吵！", speaker: "mom", type: "momFirm" },
      { en: "He took!", zh: "他抢的！", speaker: "sister", type: "sisWhine" },
      { en: "Share it.", zh: "分着玩。", speaker: "mom", type: "momFirm" },
      { en: "Fine.", zh: "好吧。", speaker: "sister", type: "sisAnnoy" }
    ]
  },
  {
    id: 333, title: "姐弟和好", category: "family", tags: ["姐弟","和好"], mode: "duo",
    sentences: [
      { en: "Sorry sis.", zh: "对不起姐。", speaker: "brother", type: "broCute" },
      { en: "Sorry too.", zh: "我也是。", speaker: "sister", type: "sisSweet" },
      { en: "Play together?", zh: "一起玩？", speaker: "brother", type: "broCute" },
      { en: "Sure.", zh: "好。", speaker: "sister", type: "sisSweet" },
      { en: "Hug?", zh: "抱？", speaker: "brother", type: "broCute" },
      { en: "Aww.", zh: "嘿嘿。", speaker: "sister", type: "sisSweet" },
      { en: "Best siblings.", zh: "最好姐弟。", speaker: "brother", type: "broCute" },
      { en: "Always.", zh: "永远。", speaker: "sister", type: "sisSweet" }
    ]
  },
  {
    id: 334, title: "教弟弟", category: "family", tags: ["姐姐教"], mode: "duo",
    sentences: [
      { en: "Watch this.", zh: "看着。", speaker: "sister", type: "sisBoss" },
      { en: "How?", zh: "怎么弄？", speaker: "brother", type: "broCurious" },
      { en: "Like this.", zh: "这样。", speaker: "sister", type: "casual" },
      { en: "Try.", zh: "试试。", speaker: "sister", type: "casual" },
      { en: "Wrong!", zh: "错了！", speaker: "sister", type: "sisAnnoy" },
      { en: "Show again.", zh: "再演。", speaker: "brother", type: "broCute" },
      { en: "Slow this time.", zh: "这次慢。", speaker: "sister", type: "sisCalm" },
      { en: "Got it!", zh: "懂了！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 335, title: "弟弟告状", category: "family", tags: ["告状"], mode: "duo",
    sentences: [
      { en: "Mommm!", zh: "妈！", speaker: "brother", type: "broTell" },
      { en: "What now?", zh: "又咋了？", speaker: "mom", type: "momTired" },
      { en: "Sis hit me!", zh: "姐打我！", speaker: "brother", type: "broCry" },
      { en: "Did not!", zh: "没有！", speaker: "sister", type: "sisAnnoy" },
      { en: "Show me.", zh: "给我看。", speaker: "mom", type: "broCurious" },
      { en: "Right here.", zh: "这里。", speaker: "brother", type: "broWhine" },
      { en: "Nothing there.", zh: "啥都没。", speaker: "mom", type: "momTired" },
      { en: "Liar.", zh: "撒谎。", speaker: "sister", type: "sisAnnoy" }
    ]
  },
  {
    id: 336, title: "找妈撒娇", category: "family", tags: ["撒娇"], mode: "duo",
    sentences: [
      { en: "Mommy.", zh: "妈咪。", speaker: "brother", type: "broCute" },
      { en: "Hmm?", zh: "嗯？", speaker: "mom", type: "momSoft" },
      { en: "Cuddle?", zh: "抱抱？", speaker: "brother", type: "broCute" },
      { en: "Come up.", zh: "上来。", speaker: "mom", type: "momSoft" },
      { en: "Soft mama.", zh: "软妈妈。", speaker: "brother", type: "broCute" },
      { en: "Silly.", zh: "傻孩子。", speaker: "mom", type: "momSoft" },
      { en: "Love mommy.", zh: "爱妈妈。", speaker: "brother", type: "broCute" },
      { en: "Love you.", zh: "爱你。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 337, title: "全家拍照", category: "family", tags: ["拍照"], mode: "duo",
    sentences: [
      { en: "Family photo!", zh: "全家福！", speaker: "mom", type: "casual" },
      { en: "Set timer.", zh: "定时。", speaker: "dad", type: "casual" },
      { en: "Squeeze in.", zh: "挤一挤。", speaker: "mom", type: "casual" },
      { en: "Smile big!", zh: "笑！", speaker: "dad", type: "casual" },
      { en: "Cheese!", zh: "茄子！", speaker: "brother", type: "broSilly" },
      { en: "Beep beep!", zh: "嘀嘀！", speaker: "sister", type: "broSilly" },
      { en: "Click!", zh: "咔嚓！", speaker: "dad", type: "casual" },
      { en: "Show me!", zh: "给看！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 338, title: "扫除全家", category: "family", tags: ["扫除"], mode: "duo",
    sentences: [
      { en: "Cleaning day.", zh: "扫除日。", speaker: "mom", type: "casual" },
      { en: "Awww.", zh: "唉。", speaker: "brother", type: "broWhine" },
      { en: "Everyone helps.", zh: "都帮忙。", speaker: "mom", type: "momFirm" },
      { en: "I sweep.", zh: "我扫地。", speaker: "sister", type: "casual" },
      { en: "I dust.", zh: "我擦灰。", speaker: "brother", type: "casual" },
      { en: "Dad mops.", zh: "爸拖地。", speaker: "mom", type: "casual" },
      { en: "Music?", zh: "放音乐？", speaker: "sister", type: "broCurious" },
      { en: "Good idea.", zh: "好主意。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 339, title: "去看奶奶", category: "family", tags: ["奶奶"], mode: "duo",
    sentences: [
      { en: "Visit grandma.", zh: "看奶奶。", speaker: "mom", type: "casual" },
      { en: "Yes!", zh: "好！", speaker: "brother", type: "broExcite" },
      { en: "Bring fruit.", zh: "带水果。", speaker: "mom", type: "casual" },
      { en: "Apples?", zh: "苹果？", speaker: "sister", type: "broCurious" },
      { en: "And oranges.", zh: "还有橙子。", speaker: "mom", type: "casual" },
      { en: "Long drive?", zh: "开很久？", speaker: "brother", type: "broCurious" },
      { en: "An hour.", zh: "一小时。", speaker: "mom", type: "casual" },
      { en: "Books to read.", zh: "带书看。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 340, title: "见亲戚", category: "family", tags: ["亲戚"], mode: "duo",
    sentences: [
      { en: "Hi auntie!", zh: "阿姨好！", speaker: "sister", type: "casual" },
      { en: "Hello dear!", zh: "好乖乖！", speaker: "grandma", type: "momSoft" },
      { en: "Big hug.", zh: "大抱抱。", speaker: "grandma", type: "momSoft" },
      { en: "Grown so much.", zh: "长高了。", speaker: "grandma", type: "casual" },
      { en: "Thanks auntie.", zh: "谢谢阿姨。", speaker: "sister", type: "broCute" },
      { en: "Come inside.", zh: "进来。", speaker: "grandma", type: "casual" },
      { en: "Cookies ready.", zh: "饼干做好。", speaker: "grandma", type: "momSoft" },
      { en: "Yay!", zh: "耶！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 341, title: "做家务分工", category: "family", tags: ["分工","家务"], mode: "duo",
    sentences: [
      { en: "Family meeting.", zh: "家庭会议。", speaker: "dad", type: "casual" },
      { en: "About?", zh: "关于？", speaker: "sister", type: "broCurious" },
      { en: "Chores list.", zh: "家务清单。", speaker: "dad", type: "casual" },
      { en: "Ugh.", zh: "唉。", speaker: "brother", type: "broWhine" },
      { en: "Pick one each.", zh: "一人选一个。", speaker: "mom", type: "casual" },
      { en: "I'll wash dishes.", zh: "我洗碗。", speaker: "sister", type: "casual" },
      { en: "I'll feed pet.", zh: "我喂宠物。", speaker: "brother", type: "casual" },
      { en: "Fair.", zh: "公平。", speaker: "dad", type: "dadCalm" }
    ]
  },
  {
    id: 342, title: "周末计划", category: "family", tags: ["周末","计划"], mode: "duo",
    sentences: [
      { en: "What this weekend?", zh: "周末干啥？", speaker: "dad", type: "broCurious" },
      { en: "Park?", zh: "公园？", speaker: "brother", type: "broCute" },
      { en: "Movie?", zh: "电影？", speaker: "sister", type: "casual" },
      { en: "Both?", zh: "都去？", speaker: "mom", type: "broCurious" },
      { en: "Yes!", zh: "好！", speaker: "brother", type: "broExcite" },
      { en: "Park Saturday.", zh: "周六公园。", speaker: "dad", type: "casual" },
      { en: "Movie Sunday.", zh: "周日电影。", speaker: "mom", type: "casual" },
      { en: "Best weekend!", zh: "最棒周末！", speaker: "sister", type: "broExcite" }
    ]
  },
  {
    id: 343, title: "生日早晨", category: "family", tags: ["生日"], mode: "duo",
    sentences: [
      { en: "Happy birthday!", zh: "生日快乐！", speaker: "mom", type: "momCheer" },
      { en: "Thank you!", zh: "谢谢！", speaker: "brother", type: "broExcite" },
      { en: "Eight now.", zh: "八岁了。", speaker: "brother", type: "broProud" },
      { en: "Big boy.", zh: "大男孩。", speaker: "mom", type: "momSoft" },
      { en: "Cake later.", zh: "蛋糕等会。", speaker: "mom", type: "casual" },
      { en: "Presents?", zh: "礼物？", speaker: "brother", type: "broCurious" },
      { en: "After dinner.", zh: "晚饭后。", speaker: "mom", type: "casual" },
      { en: "Can't wait.", zh: "等不及。", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 344, title: "吹蜡烛", category: "family", tags: ["蜡烛","生日"], mode: "duo",
    sentences: [
      { en: "Lights off.", zh: "关灯。", speaker: "mom", type: "casual" },
      { en: "Cake out!", zh: "蛋糕来！", speaker: "dad", type: "casual" },
      { en: "Eight candles.", zh: "八根蜡烛。", speaker: "mom", type: "casual" },
      { en: "Make a wish.", zh: "许愿。", speaker: "sister", type: "sisSweet" },
      { en: "Eyes closed.", zh: "闭眼。", speaker: "mom", type: "momSoft" },
      { en: "Wished.", zh: "许了。", speaker: "brother", type: "broCute" },
      { en: "Blow!", zh: "吹！", speaker: "sister", type: "broExcite" },
      { en: "All out!", zh: "全灭！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 345, title: "拆生日礼", category: "family", tags: ["礼物","生日"], mode: "duo",
    sentences: [
      { en: "Open mine first!", zh: "先拆我的！", speaker: "sister", type: "broExcite" },
      { en: "What is it?", zh: "啥啊？", speaker: "brother", type: "broCurious" },
      { en: "Tear paper.", zh: "撕纸。", speaker: "brother", type: "casual" },
      { en: "Whoa, Lego!", zh: "哇，乐高！", speaker: "brother", type: "broExcite" },
      { en: "Like it?", zh: "喜欢？", speaker: "sister", type: "broCute" },
      { en: "Love it!", zh: "爱死了！", speaker: "brother", type: "broExcite" },
      { en: "Mom dad's now.", zh: "爸妈的。", speaker: "sister", type: "casual" },
      { en: "Bigger box!", zh: "更大盒子！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 346, title: "和爸踢球", category: "family", tags: ["爸爸","踢球"], mode: "duo",
    sentences: [
      { en: "Dad, play ball?", zh: "爸，踢球？", speaker: "brother", type: "broCute" },
      { en: "Sure!", zh: "好！", speaker: "dad", type: "dadCalm" },
      { en: "Outside.", zh: "去外面。", speaker: "dad", type: "casual" },
      { en: "Pass to me.", zh: "传我。", speaker: "brother", type: "casual" },
      { en: "Catch!", zh: "接！", speaker: "dad", type: "casual" },
      { en: "Got it!", zh: "接到！", speaker: "brother", type: "broExcite" },
      { en: "Goal!", zh: "进！", speaker: "dad", type: "casual" },
      { en: "Yes!", zh: "耶！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 347, title: "和妈逛街", category: "family", tags: ["逛街","妈妈"], mode: "duo",
    sentences: [
      { en: "Shopping mall.", zh: "去商场。", speaker: "mom", type: "casual" },
      { en: "Buying what?", zh: "买啥？", speaker: "sister", type: "broCurious" },
      { en: "New shoes.", zh: "新鞋。", speaker: "mom", type: "casual" },
      { en: "For me?", zh: "我的？", speaker: "sister", type: "broExcite" },
      { en: "Yes.", zh: "对。", speaker: "mom", type: "momSoft" },
      { en: "What color?", zh: "啥色？", speaker: "sister", type: "broCurious" },
      { en: "You pick.", zh: "你选。", speaker: "mom", type: "momSoft" },
      { en: "Pink!", zh: "粉的！", speaker: "sister", type: "broExcite" }
    ]
  },
  {
    id: 348, title: "送爸礼物", category: "family", tags: ["礼物","爸爸"], mode: "duo",
    sentences: [
      { en: "Daddy day.", zh: "父亲节。", speaker: "sister", type: "casual" },
      { en: "Made you this.", zh: "给你做的。", speaker: "sister", type: "broCute" },
      { en: "For me?", zh: "给我？", speaker: "dad", type: "surprised" },
      { en: "Open it.", zh: "拆开。", speaker: "sister", type: "casual" },
      { en: "A card.", zh: "卡片。", speaker: "dad", type: "casual" },
      { en: "Read inside.", zh: "里面读。", speaker: "sister", type: "broCute" },
      { en: "Love you dad.", zh: "爱你爸。", speaker: "dad", type: "casual" },
      { en: "Sweet girl.", zh: "乖女儿。", speaker: "dad", type: "dadCalm" }
    ]
  },
  {
    id: 349, title: "说我爱你", category: "family", tags: ["爱"], mode: "duo",
    sentences: [
      { en: "Mom.", zh: "妈。", speaker: "brother", type: "broCute" },
      { en: "Hmm?", zh: "嗯？", speaker: "mom", type: "momSoft" },
      { en: "I love you.", zh: "我爱你。", speaker: "brother", type: "broCute" },
      { en: "Aww.", zh: "嘿嘿。", speaker: "mom", type: "momSoft" },
      { en: "Love you more.", zh: "更爱你。", speaker: "mom", type: "momSoft" },
      { en: "Hug.", zh: "抱抱。", speaker: "brother", type: "broCute" },
      { en: "Forever.", zh: "永远。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 350, title: "深夜聊心事", category: "family", tags: ["谈心"], mode: "duo",
    sentences: [
      { en: "Can't sleep.", zh: "睡不着。", speaker: "sister", type: "broTired" },
      { en: "What's up?", zh: "咋了？", speaker: "mom", type: "momSoft" },
      { en: "School worry.", zh: "学校烦心。", speaker: "sister", type: "broCry" },
      { en: "Tell me.", zh: "说。", speaker: "mom", type: "momSoft" },
      { en: "Friends fight.", zh: "朋友吵架。", speaker: "sister", type: "broCry" },
      { en: "Hard, huh.", zh: "难受吧。", speaker: "mom", type: "momSoft" },
      { en: "Yeah.", zh: "嗯。", speaker: "sister", type: "broCry" },
      { en: "Talk tomorrow.", zh: "明天聊。", speaker: "mom", type: "momSoft" },
      { en: "Sleep now.", zh: "现在睡。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 351, title: "洗衣服", category: "chores", tags: ["洗衣机","衣服"], mode: "narrate",
    sentences: [
      { en: "Pile of clothes.", zh: "一堆衣服。", speaker: "mom", type: "casual" },
      { en: "Sort colors.", zh: "分颜色。", speaker: "mom", type: "casual" },
      { en: "Whites here.", zh: "白色这。", speaker: "mom", type: "casual" },
      { en: "Darks there.", zh: "深色那。", speaker: "mom", type: "casual" },
      { en: "Into machine.", zh: "放洗衣机。", speaker: "mom", type: "casual" },
      { en: "Detergent in.", zh: "加洗衣液。", speaker: "mom", type: "casual" },
      { en: "Press start.", zh: "按开始。", speaker: "mom", type: "casual" },
      { en: "Wait an hour.", zh: "等一小时。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 352, title: "晒被子", category: "chores", tags: ["被子","晒"], mode: "duo",
    sentences: [
      { en: "Sunny day.", zh: "天好。", speaker: "mom", type: "casual" },
      { en: "Air the quilt.", zh: "晒被子。", speaker: "mom", type: "casual" },
      { en: "Carry outside.", zh: "搬外面。", speaker: "sister", type: "casual" },
      { en: "Heavy!", zh: "重！", speaker: "sister", type: "broWhine" },
      { en: "Drape over rod.", zh: "搭杆上。", speaker: "mom", type: "casual" },
      { en: "Smooth flat.", zh: "铺平。", speaker: "mom", type: "casual" },
      { en: "Smells fresh.", zh: "晒香了。", speaker: "sister", type: "broCute" },
      { en: "Bring in later.", zh: "晚点收。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 353, title: "换床单", category: "chores", tags: ["床单"], mode: "duo",
    sentences: [
      { en: "Change sheets.", zh: "换床单。", speaker: "mom", type: "casual" },
      { en: "Strip old.", zh: "扒下来。", speaker: "mom", type: "casual" },
      { en: "Throw to wash.", zh: "丢去洗。", speaker: "mom", type: "casual" },
      { en: "New one here.", zh: "新的来了。", speaker: "mom", type: "casual" },
      { en: "Lay over bed.", zh: "铺床上。", speaker: "mom", type: "casual" },
      { en: "Tuck corners.", zh: "塞角。", speaker: "sister", type: "casual" },
      { en: "Pull tight.", zh: "拉紧。", speaker: "mom", type: "casual" },
      { en: "Pillow case too.", zh: "枕套也换。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 354, title: "刷鞋", category: "chores", tags: ["刷鞋"], mode: "narrate",
    sentences: [
      { en: "Dirty sneakers.", zh: "鞋脏。", speaker: "sister", type: "casual" },
      { en: "Soak in water.", zh: "泡水里。", speaker: "sister", type: "casual" },
      { en: "Squirt soap.", zh: "挤皂液。", speaker: "sister", type: "casual" },
      { en: "Scrub bristles.", zh: "刷子刷。", speaker: "sister", type: "casual" },
      { en: "Stubborn stains.", zh: "顽固污渍。", speaker: "sister", type: "broWhine" },
      { en: "Scrub harder.", zh: "用力。", speaker: "sister", type: "casual" },
      { en: "Rinse clean.", zh: "冲干净。", speaker: "sister", type: "casual" },
      { en: "Dry in sun.", zh: "晒干。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 355, title: "擦镜子", category: "chores", tags: ["镜子"], mode: "narrate",
    sentences: [
      { en: "Mirror's smudgy.", zh: "镜子花。", speaker: "brother", type: "casual" },
      { en: "Spray glass cleaner.", zh: "喷玻璃水。", speaker: "brother", type: "casual" },
      { en: "Wipe in circles.", zh: "画圈擦。", speaker: "brother", type: "casual" },
      { en: "Streaks!", zh: "印！", speaker: "brother", type: "broWhine" },
      { en: "Use newspaper.", zh: "用报纸。", speaker: "brother", type: "casual" },
      { en: "Buff bright.", zh: "擦亮。", speaker: "brother", type: "casual" },
      { en: "Sparkle!", zh: "闪亮！", speaker: "brother", type: "sisProud" }
    ]
  },
  {
    id: 356, title: "扫床", category: "chores", tags: ["床","扫"], mode: "narrate",
    sentences: [
      { en: "Bed's dusty.", zh: "床有灰。", speaker: "mom", type: "casual" },
      { en: "Roll up sheets.", zh: "卷床单。", speaker: "mom", type: "casual" },
      { en: "Shake outside.", zh: "外面抖。", speaker: "mom", type: "casual" },
      { en: "Sweep mattress.", zh: "扫床垫。", speaker: "mom", type: "casual" },
      { en: "Dust pillows.", zh: "拍枕头。", speaker: "mom", type: "casual" },
      { en: "Spread sheet back.", zh: "铺回去。", speaker: "mom", type: "casual" },
      { en: "Smooth.", zh: "抹平。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 357, title: "整理衣柜", category: "chores", tags: ["衣柜"], mode: "duo",
    sentences: [
      { en: "Closet's chaos.", zh: "衣柜乱。", speaker: "sister", type: "casual" },
      { en: "Take all out.", zh: "全拿出。", speaker: "sister", type: "casual" },
      { en: "Whoa, lots.", zh: "好多。", speaker: "brother", type: "surprised" },
      { en: "Sort by type.", zh: "按类分。", speaker: "sister", type: "casual" },
      { en: "Pants here.", zh: "裤子这。", speaker: "sister", type: "casual" },
      { en: "Shirts there.", zh: "衣服那。", speaker: "sister", type: "casual" },
      { en: "Old clothes out.", zh: "旧的扔。", speaker: "sister", type: "casual" },
      { en: "Donate?", zh: "捐？", speaker: "brother", type: "broCurious" },
      { en: "Yes good idea.", zh: "好主意。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 358, title: "丢过期食物", category: "chores", tags: ["冰箱","丢"], mode: "duo",
    sentences: [
      { en: "Clean fridge.", zh: "清冰箱。", speaker: "mom", type: "casual" },
      { en: "Check dates.", zh: "看日期。", speaker: "mom", type: "casual" },
      { en: "This expired.", zh: "过期了。", speaker: "sister", type: "casual" },
      { en: "Toss it.", zh: "扔。", speaker: "mom", type: "casual" },
      { en: "Moldy bread!", zh: "面包发霉！", speaker: "sister", type: "broScared" },
      { en: "Eww.", zh: "恶心。", speaker: "brother", type: "broScared" },
      { en: "Throw quick.", zh: "快扔。", speaker: "mom", type: "casual" },
      { en: "Wipe shelves.", zh: "擦架子。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 359, title: "整理鞋柜", category: "chores", tags: ["鞋柜"], mode: "narrate",
    sentences: [
      { en: "Shoes everywhere.", zh: "鞋乱。", speaker: "sister", type: "casual" },
      { en: "Pair them up.", zh: "成对配。", speaker: "sister", type: "casual" },
      { en: "Dust off bottoms.", zh: "擦鞋底。", speaker: "sister", type: "casual" },
      { en: "Line up neat.", zh: "排整齐。", speaker: "sister", type: "casual" },
      { en: "Tall in back.", zh: "高的后。", speaker: "sister", type: "casual" },
      { en: "Sneakers front.", zh: "运动鞋前。", speaker: "sister", type: "casual" },
      { en: "Looks great.", zh: "好看。", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 360, title: "收快递", category: "chores", tags: ["快递","收"], mode: "duo",
    sentences: [
      { en: "Package box!", zh: "快递！", speaker: "brother", type: "broExcite" },
      { en: "Big or small?", zh: "大小？", speaker: "sister", type: "broCurious" },
      { en: "Pretty big.", zh: "挺大。", speaker: "brother", type: "casual" },
      { en: "Sign here.", zh: "签字。", speaker: "brother", type: "casual" },
      { en: "Mom's name.", zh: "妈名字。", speaker: "sister", type: "casual" },
      { en: "Thanks!", zh: "谢谢！", speaker: "brother", type: "casual" },
      { en: "Bring inside.", zh: "搬进来。", speaker: "brother", type: "casual" },
      { en: "Wait for mom.", zh: "等妈。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 361, title: "回收瓶子", category: "chores", tags: ["回收"], mode: "narrate",
    sentences: [
      { en: "Empty bottles.", zh: "空瓶子。", speaker: "sister", type: "casual" },
      { en: "Rinse out.", zh: "冲一下。", speaker: "sister", type: "casual" },
      { en: "Crush flat.", zh: "压扁。", speaker: "sister", type: "casual" },
      { en: "Save the caps.", zh: "瓶盖留。", speaker: "sister", type: "casual" },
      { en: "Into recycle bin.", zh: "放回收桶。", speaker: "sister", type: "casual" },
      { en: "Saves earth.", zh: "护地球。", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 362, title: "分类垃圾", category: "chores", tags: ["垃圾","分类"], mode: "duo",
    sentences: [
      { en: "Sort trash.", zh: "分垃圾。", speaker: "mom", type: "casual" },
      { en: "Paper here.", zh: "纸这。", speaker: "mom", type: "casual" },
      { en: "Plastic there.", zh: "塑料那。", speaker: "mom", type: "casual" },
      { en: "Food waste?", zh: "厨余？", speaker: "brother", type: "broCurious" },
      { en: "Green bin.", zh: "绿桶。", speaker: "mom", type: "casual" },
      { en: "Glass?", zh: "玻璃？", speaker: "sister", type: "broCurious" },
      { en: "Blue bin.", zh: "蓝桶。", speaker: "mom", type: "casual" },
      { en: "Good helpers.", zh: "好帮手。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 363, title: "换灯泡", category: "chores", tags: ["灯泡"], mode: "duo",
    sentences: [
      { en: "Bulb's out.", zh: "灯坏了。", speaker: "dad", type: "casual" },
      { en: "Get ladder.", zh: "拿梯子。", speaker: "dad", type: "casual" },
      { en: "Hold steady.", zh: "扶稳。", speaker: "dad", type: "momFirm" },
      { en: "Unscrew old.", zh: "拧下旧的。", speaker: "dad", type: "casual" },
      { en: "Twist twist.", zh: "拧拧。", speaker: "dad", type: "casual" },
      { en: "Got it.", zh: "下来了。", speaker: "dad", type: "casual" },
      { en: "Screw new in.", zh: "拧新的。", speaker: "dad", type: "casual" },
      { en: "Flip switch.", zh: "开开关。", speaker: "brother", type: "casual" },
      { en: "Light!", zh: "亮了！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 364, title: "修水龙头", category: "chores", tags: ["水龙头","修"], mode: "duo",
    sentences: [
      { en: "Tap drips.", zh: "水龙头漏。", speaker: "dad", type: "casual" },
      { en: "Drip drip.", zh: "滴滴。", speaker: "brother", type: "casual" },
      { en: "Tools out.", zh: "拿工具。", speaker: "dad", type: "casual" },
      { en: "Turn off water.", zh: "关水阀。", speaker: "dad", type: "casual" },
      { en: "Wrench.", zh: "扳手。", speaker: "dad", type: "casual" },
      { en: "Loosen nut.", zh: "拧松螺母。", speaker: "dad", type: "casual" },
      { en: "New washer in.", zh: "换垫圈。", speaker: "dad", type: "casual" },
      { en: "Tighten back.", zh: "拧回去。", speaker: "dad", type: "casual" },
      { en: "Fixed!", zh: "好了！", speaker: "dad", type: "dadCalm" }
    ]
  },
  {
    id: 365, title: "打扫卫生间", category: "chores", tags: ["卫生间"], mode: "narrate",
    sentences: [
      { en: "Bathroom day.", zh: "扫卫生间。", speaker: "mom", type: "casual" },
      { en: "Gloves on.", zh: "戴手套。", speaker: "mom", type: "casual" },
      { en: "Spray toilet.", zh: "喷马桶。", speaker: "mom", type: "casual" },
      { en: "Scrub bowl.", zh: "刷碗。", speaker: "mom", type: "casual" },
      { en: "Wipe seat.", zh: "擦座圈。", speaker: "mom", type: "casual" },
      { en: "Clean sink.", zh: "擦水池。", speaker: "mom", type: "casual" },
      { en: "Mop floor.", zh: "拖地。", speaker: "mom", type: "casual" },
      { en: "Sparkly!", zh: "亮了！", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 366, title: "倒猫砂", category: "chores", tags: ["猫砂","倒"], mode: "narrate",
    sentences: [
      { en: "Box overflows.", zh: "砂盆满。", speaker: "sister", type: "casual" },
      { en: "Carry to trash.", zh: "搬垃圾桶。", speaker: "sister", type: "casual" },
      { en: "Pour into bag.", zh: "倒袋子。", speaker: "sister", type: "casual" },
      { en: "Heavy.", zh: "好重。", speaker: "sister", type: "casual" },
      { en: "Tie tight.", zh: "扎紧。", speaker: "sister", type: "casual" },
      { en: "Rinse box.", zh: "冲砂盆。", speaker: "sister", type: "casual" },
      { en: "Dry it.", zh: "擦干。", speaker: "sister", type: "casual" },
      { en: "New sand.", zh: "新砂。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 367, title: "浇花", category: "chores", tags: ["花","浇水"], mode: "duo",
    sentences: [
      { en: "Plants thirsty.", zh: "花渴了。", speaker: "mom", type: "casual" },
      { en: "Fill watering can.", zh: "装水壶。", speaker: "sister", type: "casual" },
      { en: "Pour slow.", zh: "慢倒。", speaker: "mom", type: "casual" },
      { en: "Soil first.", zh: "先土。", speaker: "mom", type: "casual" },
      { en: "Not on leaves.", zh: "别浇叶。", speaker: "mom", type: "momFirm" },
      { en: "Until water drips.", zh: "渗水了停。", speaker: "mom", type: "casual" },
      { en: "Done.", zh: "好了。", speaker: "sister", type: "casual" },
      { en: "Once a week.", zh: "一周一次。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 368, title: "种小盆栽", category: "chores", tags: ["盆栽","种"], mode: "duo",
    sentences: [
      { en: "Empty pot.", zh: "空盆。", speaker: "mom", type: "casual" },
      { en: "Add soil.", zh: "加土。", speaker: "mom", type: "casual" },
      { en: "Dig hole.", zh: "挖坑。", speaker: "brother", type: "casual" },
      { en: "Place seed.", zh: "放种子。", speaker: "brother", type: "casual" },
      { en: "Cover up.", zh: "盖土。", speaker: "brother", type: "casual" },
      { en: "Water gently.", zh: "轻浇。", speaker: "mom", type: "casual" },
      { en: "Sunny spot.", zh: "晒太阳。", speaker: "mom", type: "casual" },
      { en: "Wait to grow.", zh: "等发芽。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 369, title: "钉钉子", category: "chores", tags: ["钉子","锤"], mode: "duo",
    sentences: [
      { en: "Hang picture.", zh: "挂画。", speaker: "dad", type: "casual" },
      { en: "Mark the spot.", zh: "做记号。", speaker: "dad", type: "casual" },
      { en: "Get hammer.", zh: "拿锤子。", speaker: "dad", type: "casual" },
      { en: "Hold nail.", zh: "扶钉。", speaker: "dad", type: "casual" },
      { en: "Step back!", zh: "退后！", speaker: "dad", type: "momFirm" },
      { en: "Tap tap.", zh: "敲敲。", speaker: "dad", type: "casual" },
      { en: "Harder.", zh: "再重。", speaker: "dad", type: "casual" },
      { en: "In!", zh: "进了！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 370, title: "贴墙纸", category: "chores", tags: ["墙纸"], mode: "narrate",
    sentences: [
      { en: "New wallpaper.", zh: "新墙纸。", speaker: "mom", type: "casual" },
      { en: "Cut to size.", zh: "剪合适。", speaker: "mom", type: "casual" },
      { en: "Spread glue.", zh: "抹胶。", speaker: "mom", type: "casual" },
      { en: "Press to wall.", zh: "贴墙上。", speaker: "mom", type: "casual" },
      { en: "Smooth out.", zh: "抹平。", speaker: "mom", type: "casual" },
      { en: "No bubbles.", zh: "没气泡。", speaker: "mom", type: "casual" },
      { en: "Trim edges.", zh: "修边。", speaker: "mom", type: "casual" },
      { en: "Pretty.", zh: "好看。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 371, title: "搬重物", category: "chores", tags: ["搬","重"], mode: "duo",
    sentences: [
      { en: "Heavy box.", zh: "重盒子。", speaker: "dad", type: "casual" },
      { en: "I help!", zh: "我帮！", speaker: "brother", type: "broExcite" },
      { en: "Bend knees.", zh: "弯腿。", speaker: "dad", type: "momFirm" },
      { en: "Not back.", zh: "别弯腰。", speaker: "dad", type: "casual" },
      { en: "Lift slow.", zh: "慢抬。", speaker: "dad", type: "casual" },
      { en: "Oof, heavy!", zh: "唉，重！", speaker: "brother", type: "broLoud" },
      { en: "Both sides.", zh: "两边一起。", speaker: "dad", type: "casual" },
      { en: "Walk slow.", zh: "慢走。", speaker: "dad", type: "casual" }
    ]
  },
  {
    id: 372, title: "组装家具", category: "chores", tags: ["家具","组装"], mode: "duo",
    sentences: [
      { en: "New shelf.", zh: "新书架。", speaker: "dad", type: "casual" },
      { en: "Read manual.", zh: "看说明。", speaker: "dad", type: "casual" },
      { en: "So many parts.", zh: "好多件。", speaker: "brother", type: "surprised" },
      { en: "Sort screws.", zh: "分螺丝。", speaker: "dad", type: "casual" },
      { en: "Step one.", zh: "第一步。", speaker: "dad", type: "casual" },
      { en: "Hold this.", zh: "扶这。", speaker: "dad", type: "casual" },
      { en: "Tight screw.", zh: "拧紧。", speaker: "dad", type: "casual" },
      { en: "Looks great!", zh: "好看！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 373, title: "清空抽屉", category: "chores", tags: ["抽屉"], mode: "narrate",
    sentences: [
      { en: "Drawer crammed.", zh: "抽屉爆。", speaker: "sister", type: "casual" },
      { en: "Pull out all.", zh: "全倒出。", speaker: "sister", type: "casual" },
      { en: "Whoa, treasures!", zh: "哇，宝藏！", speaker: "brother", type: "broExcite" },
      { en: "Throw old.", zh: "扔旧的。", speaker: "sister", type: "casual" },
      { en: "Keep useful.", zh: "留有用。", speaker: "sister", type: "casual" },
      { en: "Sort small ones.", zh: "分小件。", speaker: "sister", type: "casual" },
      { en: "Put back neat.", zh: "整齐放。", speaker: "sister", type: "casual" },
      { en: "Done!", zh: "完了！", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 374, title: "擦风扇", category: "chores", tags: ["风扇"], mode: "narrate",
    sentences: [
      { en: "Fan's dusty.", zh: "扇页脏。", speaker: "mom", type: "casual" },
      { en: "Unplug first.", zh: "先拔插。", speaker: "mom", type: "momFirm" },
      { en: "Remove cover.", zh: "拆罩。", speaker: "mom", type: "casual" },
      { en: "Wipe each blade.", zh: "每片擦。", speaker: "mom", type: "casual" },
      { en: "Dust falls.", zh: "灰掉。", speaker: "mom", type: "casual" },
      { en: "Sneeze!", zh: "喷嚏！", speaker: "mom", type: "casual" },
      { en: "Put cover back.", zh: "装罩。", speaker: "mom", type: "casual" },
      { en: "Plug in.", zh: "插上。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 375, title: "晒袜子", category: "chores", tags: ["晒","袜子"], mode: "narrate",
    sentences: [
      { en: "Wet socks.", zh: "湿袜子。", speaker: "sister", type: "casual" },
      { en: "Pair them up.", zh: "配对。", speaker: "sister", type: "casual" },
      { en: "Pin to clip.", zh: "夹夹子。", speaker: "sister", type: "casual" },
      { en: "Hang on line.", zh: "挂绳上。", speaker: "sister", type: "casual" },
      { en: "Space them.", zh: "拉开。", speaker: "sister", type: "casual" },
      { en: "Wind blows them.", zh: "风吹。", speaker: "sister", type: "casual" },
      { en: "Dry by night.", zh: "晚上干。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 376, title: "收快递盒", category: "chores", tags: ["纸盒","回收"], mode: "narrate",
    sentences: [
      { en: "Empty box pile.", zh: "空盒一堆。", speaker: "brother", type: "casual" },
      { en: "Open them.", zh: "拆开。", speaker: "brother", type: "casual" },
      { en: "Flatten.", zh: "压扁。", speaker: "brother", type: "casual" },
      { en: "Stack flat.", zh: "码平。", speaker: "brother", type: "casual" },
      { en: "Tie with string.", zh: "绳子绑。", speaker: "brother", type: "casual" },
      { en: "Take out.", zh: "拎出去。", speaker: "brother", type: "casual" },
      { en: "Recycle bin.", zh: "回收桶。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 377, title: "理书架", category: "chores", tags: ["书架"], mode: "narrate",
    sentences: [
      { en: "Books messy.", zh: "书乱。", speaker: "sister", type: "casual" },
      { en: "Take all out.", zh: "全拿出。", speaker: "sister", type: "casual" },
      { en: "Wipe shelf.", zh: "擦架。", speaker: "sister", type: "casual" },
      { en: "By size?", zh: "按大小？", speaker: "sister", type: "casual" },
      { en: "Or by type.", zh: "或按类。", speaker: "sister", type: "casual" },
      { en: "Tall books left.", zh: "高的左。", speaker: "sister", type: "casual" },
      { en: "Short right.", zh: "矮的右。", speaker: "sister", type: "casual" },
      { en: "Looks neat!", zh: "整齐了！", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 378, title: "丢旧玩具", category: "chores", tags: ["丢玩具"], mode: "duo",
    sentences: [
      { en: "Old toys.", zh: "旧玩具。", speaker: "mom", type: "casual" },
      { en: "Donate?", zh: "捐？", speaker: "sister", type: "broCurious" },
      { en: "Broken ones go.", zh: "坏的扔。", speaker: "mom", type: "casual" },
      { en: "But my doll!", zh: "我娃娃！", speaker: "sister", type: "broWhine" },
      { en: "It's broken.", zh: "都破了。", speaker: "mom", type: "momFirm" },
      { en: "Just one more month.", zh: "再留一月。", speaker: "sister", type: "broWhine" },
      { en: "Choose three.", zh: "选三个。", speaker: "mom", type: "casual" },
      { en: "Okay.", zh: "好吧。", speaker: "sister", type: "broAnnoy" }
    ]
  },
  {
    id: 379, title: "擦地板缝", category: "chores", tags: ["地板缝"], mode: "narrate",
    sentences: [
      { en: "Cracks dirty.", zh: "缝脏。", speaker: "mom", type: "casual" },
      { en: "Old toothbrush.", zh: "旧牙刷。", speaker: "mom", type: "casual" },
      { en: "Scrub down.", zh: "刷。", speaker: "mom", type: "casual" },
      { en: "Black stuff out.", zh: "刷出黑的。", speaker: "mom", type: "broScared" },
      { en: "Wipe clean.", zh: "擦干净。", speaker: "mom", type: "casual" },
      { en: "Look shiny.", zh: "亮了。", speaker: "mom", type: "sisProud" }
    ]
  },
  {
    id: 380, title: "通马桶", category: "chores", tags: ["马桶","堵"], mode: "duo",
    sentences: [
      { en: "Toilet clogged!", zh: "堵了！", speaker: "brother", type: "broLoud" },
      { en: "Don't flush!", zh: "别冲！", speaker: "mom", type: "momFirm" },
      { en: "Get plunger.", zh: "拿拔子。", speaker: "mom", type: "casual" },
      { en: "Press down.", zh: "按下去。", speaker: "mom", type: "casual" },
      { en: "Pull up fast.", zh: "快拉。", speaker: "mom", type: "casual" },
      { en: "Again.", zh: "再来。", speaker: "mom", type: "casual" },
      { en: "Whoosh!", zh: "通了！", speaker: "brother", type: "broExcite" },
      { en: "Flush test.", zh: "试冲。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 381, title: "腌肉", category: "kitchen", tags: ["腌肉"], mode: "narrate",
    sentences: [
      { en: "Cut the meat.", zh: "切肉。", speaker: "mom", type: "casual" },
      { en: "Add soy sauce.", zh: "加酱油。", speaker: "mom", type: "casual" },
      { en: "Splash wine.", zh: "倒料酒。", speaker: "mom", type: "casual" },
      { en: "Ginger slices.", zh: "姜片。", speaker: "mom", type: "casual" },
      { en: "Mix well.", zh: "拌匀。", speaker: "mom", type: "casual" },
      { en: "Cover up.", zh: "盖好。", speaker: "mom", type: "casual" },
      { en: "Fridge thirty.", zh: "冰半小时。", speaker: "mom", type: "casual" },
      { en: "More flavor.", zh: "更入味。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 382, title: "做泡菜", category: "kitchen", tags: ["泡菜"], mode: "narrate",
    sentences: [
      { en: "Cut cabbage.", zh: "切白菜。", speaker: "mom", type: "casual" },
      { en: "Salt heavily.", zh: "多放盐。", speaker: "mom", type: "casual" },
      { en: "Mix.", zh: "拌。", speaker: "mom", type: "casual" },
      { en: "Wait two hours.", zh: "等两小时。", speaker: "mom", type: "casual" },
      { en: "Water comes out.", zh: "出水了。", speaker: "mom", type: "casual" },
      { en: "Squeeze dry.", zh: "挤干。", speaker: "mom", type: "casual" },
      { en: "Add chili paste.", zh: "加辣酱。", speaker: "mom", type: "casual" },
      { en: "Mix again.", zh: "再拌。", speaker: "mom", type: "casual" },
      { en: "Ferment days.", zh: "发酵几天。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 383, title: "压土豆泥", category: "kitchen", tags: ["土豆泥"], mode: "narrate",
    sentences: [
      { en: "Boil potatoes.", zh: "煮土豆。", speaker: "mom", type: "casual" },
      { en: "Fork pokes through?", zh: "叉子能进？", speaker: "mom", type: "broCurious" },
      { en: "Done.", zh: "好了。", speaker: "mom", type: "casual" },
      { en: "Drain.", zh: "倒水。", speaker: "mom", type: "casual" },
      { en: "Add butter.", zh: "加黄油。", speaker: "mom", type: "casual" },
      { en: "Splash milk.", zh: "倒点奶。", speaker: "mom", type: "casual" },
      { en: "Mash mash.", zh: "压压。", speaker: "mom", type: "casual" },
      { en: "Smooth.", zh: "细腻。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 384, title: "解冻虾", category: "kitchen", tags: ["虾","解冻"], mode: "narrate",
    sentences: [
      { en: "Frozen shrimp.", zh: "冻虾。", speaker: "mom", type: "casual" },
      { en: "Cold water bowl.", zh: "凉水盆。", speaker: "mom", type: "casual" },
      { en: "Pour shrimp in.", zh: "倒进去。", speaker: "mom", type: "casual" },
      { en: "Stir.", zh: "搅。", speaker: "mom", type: "casual" },
      { en: "Wait fifteen.", zh: "等十五。", speaker: "mom", type: "casual" },
      { en: "Soft now.", zh: "软了。", speaker: "mom", type: "casual" },
      { en: "Rinse clean.", zh: "冲干净。", speaker: "mom", type: "casual" },
      { en: "Ready to cook.", zh: "可以煮。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 385, title: "剥虾", category: "kitchen", tags: ["虾","剥"], mode: "duo",
    sentences: [
      { en: "Peel shrimp.", zh: "剥虾。", speaker: "mom", type: "casual" },
      { en: "Pinch head off.", zh: "捏头。", speaker: "mom", type: "casual" },
      { en: "Pull shell.", zh: "扒壳。", speaker: "mom", type: "casual" },
      { en: "Comes right off.", zh: "好剥。", speaker: "brother", type: "broExcite" },
      { en: "Save tail?", zh: "留尾？", speaker: "brother", type: "broCurious" },
      { en: "If you want.", zh: "随你。", speaker: "mom", type: "casual" },
      { en: "Black line out.", zh: "去黑线。", speaker: "mom", type: "casual" },
      { en: "All clean.", zh: "都干净。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 386, title: "煎培根", category: "kitchen", tags: ["培根"], mode: "narrate",
    sentences: [
      { en: "Bacon time.", zh: "煎培根。", speaker: "dad", type: "casual" },
      { en: "Cold pan.", zh: "凉锅。", speaker: "dad", type: "casual" },
      { en: "Lay strips.", zh: "铺条。", speaker: "dad", type: "casual" },
      { en: "Low heat.", zh: "小火。", speaker: "dad", type: "casual" },
      { en: "Sizzle pop.", zh: "滋滋。", speaker: "dad", type: "casual" },
      { en: "Flip with tongs.", zh: "夹翻。", speaker: "dad", type: "casual" },
      { en: "Crispy edges.", zh: "脆边。", speaker: "dad", type: "casual" },
      { en: "On paper towel.", zh: "纸吸油。", speaker: "dad", type: "casual" }
    ]
  },
  {
    id: 387, title: "热剩饭", category: "kitchen", tags: ["剩饭","热"], mode: "narrate",
    sentences: [
      { en: "Leftover rice.", zh: "剩饭。", speaker: "sister", type: "casual" },
      { en: "Sprinkle water.", zh: "撒水。", speaker: "sister", type: "casual" },
      { en: "Cover with wrap.", zh: "盖保鲜膜。", speaker: "sister", type: "casual" },
      { en: "Microwave two.", zh: "微波两分。", speaker: "sister", type: "casual" },
      { en: "Beep.", zh: "嘀。", speaker: "sister", type: "casual" },
      { en: "Steamy.", zh: "冒气了。", speaker: "sister", type: "casual" },
      { en: "Fluff with fork.", zh: "叉松。", speaker: "sister", type: "casual" },
      { en: "Like fresh.", zh: "像新的。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 388, title: "做沙拉", category: "kitchen", tags: ["沙拉"], mode: "narrate",
    sentences: [
      { en: "Wash lettuce.", zh: "洗生菜。", speaker: "mom", type: "casual" },
      { en: "Tear into bowl.", zh: "撕碎。", speaker: "mom", type: "casual" },
      { en: "Slice tomato.", zh: "切番茄。", speaker: "mom", type: "casual" },
      { en: "Cucumber too.", zh: "黄瓜。", speaker: "mom", type: "casual" },
      { en: "Crumble cheese.", zh: "撒奶酪。", speaker: "mom", type: "casual" },
      { en: "Drizzle dressing.", zh: "淋酱。", speaker: "mom", type: "casual" },
      { en: "Toss.", zh: "拌。", speaker: "mom", type: "casual" },
      { en: "Fresh!", zh: "新鲜！", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 389, title: "卷寿司", category: "kitchen", tags: ["寿司"], mode: "duo",
    sentences: [
      { en: "Sushi night.", zh: "寿司夜。", speaker: "mom", type: "casual" },
      { en: "Lay nori.", zh: "铺紫菜。", speaker: "mom", type: "casual" },
      { en: "Spread rice.", zh: "铺米。", speaker: "mom", type: "casual" },
      { en: "Add fillings.", zh: "加馅。", speaker: "mom", type: "casual" },
      { en: "Cucumber, fish.", zh: "黄瓜鱼。", speaker: "mom", type: "casual" },
      { en: "Roll tight.", zh: "卷紧。", speaker: "mom", type: "casual" },
      { en: "Wet knife.", zh: "湿刀。", speaker: "mom", type: "casual" },
      { en: "Slice rounds.", zh: "切片。", speaker: "mom", type: "casual" },
      { en: "Yum!", zh: "好吃！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 390, title: "煎汉堡肉", category: "kitchen", tags: ["汉堡"], mode: "narrate",
    sentences: [
      { en: "Form patties.", zh: "捏饼。", speaker: "dad", type: "casual" },
      { en: "Press flat.", zh: "压扁。", speaker: "dad", type: "casual" },
      { en: "Salt and pepper.", zh: "盐胡椒。", speaker: "dad", type: "casual" },
      { en: "Hot pan.", zh: "热锅。", speaker: "dad", type: "casual" },
      { en: "Drop in.", zh: "放下。", speaker: "dad", type: "casual" },
      { en: "Sizzle.", zh: "滋。", speaker: "dad", type: "casual" },
      { en: "Don't press!", zh: "别压！", speaker: "dad", type: "casual" },
      { en: "Flip once.", zh: "翻一次。", speaker: "dad", type: "casual" },
      { en: "Juicy.", zh: "多汁。", speaker: "dad", type: "casual" }
    ]
  },
  {
    id: 391, title: "做奶昔", category: "kitchen", tags: ["奶昔"], mode: "duo",
    sentences: [
      { en: "Banana split.", zh: "切香蕉。", speaker: "sister", type: "casual" },
      { en: "Strawberries in.", zh: "草莓放。", speaker: "sister", type: "casual" },
      { en: "Pour milk.", zh: "倒奶。", speaker: "sister", type: "casual" },
      { en: "Add ice.", zh: "加冰。", speaker: "sister", type: "casual" },
      { en: "Lid on tight.", zh: "盖紧。", speaker: "sister", type: "momFirm" },
      { en: "Blend!", zh: "搅！", speaker: "sister", type: "broExcite" },
      { en: "Whirr!", zh: "嗡！", speaker: "brother", type: "broLoud" },
      { en: "Pour glass.", zh: "倒杯里。", speaker: "sister", type: "casual" },
      { en: "Smoothie!", zh: "奶昔好！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 392, title: "做布丁", category: "kitchen", tags: ["布丁"], mode: "narrate",
    sentences: [
      { en: "Pudding mix.", zh: "布丁粉。", speaker: "mom", type: "casual" },
      { en: "Add cold milk.", zh: "加凉奶。", speaker: "mom", type: "casual" },
      { en: "Whisk fast.", zh: "快搅。", speaker: "mom", type: "casual" },
      { en: "Pour into cups.", zh: "倒杯。", speaker: "mom", type: "casual" },
      { en: "Fridge to set.", zh: "冰凝固。", speaker: "mom", type: "casual" },
      { en: "Two hours.", zh: "两小时。", speaker: "mom", type: "casual" },
      { en: "Wiggle test.", zh: "晃一下。", speaker: "mom", type: "casual" },
      { en: "Ready!", zh: "好了！", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 393, title: "搅蛋液", category: "kitchen", tags: ["搅蛋"], mode: "narrate",
    sentences: [
      { en: "Three eggs.", zh: "三个蛋。", speaker: "mom", type: "casual" },
      { en: "Crack into bowl.", zh: "磕碗。", speaker: "mom", type: "casual" },
      { en: "Whisk fast.", zh: "快搅。", speaker: "mom", type: "casual" },
      { en: "Round round.", zh: "画圈。", speaker: "mom", type: "casual" },
      { en: "Yolks broken.", zh: "蛋黄散。", speaker: "mom", type: "casual" },
      { en: "Mix smooth.", zh: "搅匀。", speaker: "mom", type: "casual" },
      { en: "Frothy top.", zh: "起泡了。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 394, title: "撒胡椒", category: "kitchen", tags: ["胡椒"], mode: "narrate",
    sentences: [
      { en: "Pepper mill.", zh: "胡椒磨。", speaker: "dad", type: "casual" },
      { en: "Hold over food.", zh: "举食物上。", speaker: "dad", type: "casual" },
      { en: "Twist top.", zh: "拧顶。", speaker: "dad", type: "casual" },
      { en: "Grind grind.", zh: "磨磨。", speaker: "dad", type: "casual" },
      { en: "Few cranks.", zh: "几下。", speaker: "dad", type: "casual" },
      { en: "Smell strong.", zh: "好香。", speaker: "dad", type: "casual" },
      { en: "Stir in.", zh: "拌入。", speaker: "dad", type: "casual" }
    ]
  },
  {
    id: 395, title: "尝菜", category: "kitchen", tags: ["尝","菜"], mode: "duo",
    sentences: [
      { en: "Tiny taste.", zh: "尝点。", speaker: "mom", type: "casual" },
      { en: "Clean spoon.", zh: "干净勺。", speaker: "mom", type: "casual" },
      { en: "Mmm.", zh: "嗯。", speaker: "mom", type: "casual" },
      { en: "Needs salt?", zh: "缺盐？", speaker: "sister", type: "broCurious" },
      { en: "Pinch more.", zh: "再加点。", speaker: "mom", type: "casual" },
      { en: "Try again.", zh: "再尝。", speaker: "mom", type: "casual" },
      { en: "Perfect.", zh: "完美。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 396, title: "做面包", category: "kitchen", tags: ["面包","烤"], mode: "narrate",
    sentences: [
      { en: "Mix flour, yeast.", zh: "混粉酵母。", speaker: "mom", type: "casual" },
      { en: "Warm water in.", zh: "加温水。", speaker: "mom", type: "casual" },
      { en: "Knead dough.", zh: "揉面团。", speaker: "mom", type: "casual" },
      { en: "Sticky.", zh: "粘。", speaker: "mom", type: "casual" },
      { en: "Cover rest.", zh: "盖醒。", speaker: "mom", type: "casual" },
      { en: "Doubles up.", zh: "涨双倍。", speaker: "mom", type: "casual" },
      { en: "Shape it.", zh: "塑形。", speaker: "mom", type: "casual" },
      { en: "Into oven.", zh: "入烤箱。", speaker: "mom", type: "casual" },
      { en: "Golden brown!", zh: "金黄了！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 397, title: "切番茄", category: "kitchen", tags: ["番茄","切"], mode: "narrate",
    sentences: [
      { en: "Wash tomato.", zh: "洗番茄。", speaker: "mom", type: "casual" },
      { en: "Sharp knife.", zh: "快刀。", speaker: "mom", type: "casual" },
      { en: "Stem out.", zh: "去蒂。", speaker: "mom", type: "casual" },
      { en: "Slice in half.", zh: "切两半。", speaker: "mom", type: "casual" },
      { en: "Then quarters.", zh: "再切四。", speaker: "mom", type: "casual" },
      { en: "Or wedges.", zh: "或瓣。", speaker: "mom", type: "casual" },
      { en: "Juicy!", zh: "好多汁！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 398, title: "切洋葱", category: "kitchen", tags: ["洋葱","切"], mode: "duo",
    sentences: [
      { en: "Onion time.", zh: "切葱头。", speaker: "mom", type: "casual" },
      { en: "Eyes water!", zh: "辣眼睛！", speaker: "mom", type: "broWhine" },
      { en: "Peel skin.", zh: "剥皮。", speaker: "mom", type: "casual" },
      { en: "Cut in half.", zh: "切两半。", speaker: "mom", type: "casual" },
      { en: "Tears flowing.", zh: "眼泪流。", speaker: "sister", type: "broSilly" },
      { en: "Chop fast!", zh: "快切！", speaker: "mom", type: "rushed" },
      { en: "Run away!", zh: "跑！", speaker: "sister", type: "broLoud" },
      { en: "Done finally.", zh: "终于完。", speaker: "mom", type: "momTired" }
    ]
  },
  {
    id: 399, title: "热水煮蛋", category: "kitchen", tags: ["煮蛋"], mode: "narrate",
    sentences: [
      { en: "Eggs in pot.", zh: "蛋放锅。", speaker: "mom", type: "casual" },
      { en: "Cover with water.", zh: "加水盖过。", speaker: "mom", type: "casual" },
      { en: "Bring to boil.", zh: "煮开。", speaker: "mom", type: "casual" },
      { en: "Eight minutes.", zh: "八分钟。", speaker: "mom", type: "casual" },
      { en: "Off heat.", zh: "关火。", speaker: "mom", type: "casual" },
      { en: "Cold water bath.", zh: "凉水浸。", speaker: "mom", type: "casual" },
      { en: "Crack and peel.", zh: "敲剥。", speaker: "mom", type: "casual" },
      { en: "Done.", zh: "好了。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 400, title: "用烤箱", category: "kitchen", tags: ["烤箱"], mode: "duo",
    sentences: [
      { en: "Preheat oven.", zh: "预热。", speaker: "mom", type: "casual" },
      { en: "Set three fifty.", zh: "三百五十度。", speaker: "mom", type: "casual" },
      { en: "Wait beep.", zh: "等响。", speaker: "mom", type: "casual" },
      { en: "Slide tray in.", zh: "推盘进。", speaker: "mom", type: "casual" },
      { en: "Mitts on!", zh: "戴手套！", speaker: "mom", type: "momFirm" },
      { en: "Close door.", zh: "关门。", speaker: "mom", type: "casual" },
      { en: "Twenty minutes.", zh: "二十分钟。", speaker: "mom", type: "casual" },
      { en: "Smells great!", zh: "好香！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 401, title: "春天到了", category: "family", tags: ["春天"], mode: "duo",
    sentences: [
      { en: "Spring's here!", zh: "春天到了！", speaker: "mom", type: "broExcite" },
      { en: "Look, buds!", zh: "看，花苞！", speaker: "brother", type: "broExcite" },
      { en: "Trees waking.", zh: "树醒了。", speaker: "sister", type: "casual" },
      { en: "Coats off.", zh: "脱外套。", speaker: "mom", type: "casual" },
      { en: "Lighter clothes.", zh: "穿薄点。", speaker: "mom", type: "casual" },
      { en: "Sun feels nice.", zh: "晒着舒服。", speaker: "sister", type: "broCute" },
      { en: "Birds singing.", zh: "鸟在叫。", speaker: "brother", type: "casual" },
      { en: "Love spring.", zh: "爱春天。", speaker: "sister", type: "broCute" }
    ]
  },
  {
    id: 402, title: "种花", category: "outdoor", tags: ["春天","种花"], mode: "duo",
    sentences: [
      { en: "Plant flowers.", zh: "种花。", speaker: "mom", type: "casual" },
      { en: "Dig small holes.", zh: "挖小坑。", speaker: "mom", type: "casual" },
      { en: "Tulip bulbs.", zh: "郁金香球。", speaker: "mom", type: "casual" },
      { en: "Points up?", zh: "尖朝上？", speaker: "sister", type: "broCurious" },
      { en: "Yes.", zh: "对。", speaker: "mom", type: "momSoft" },
      { en: "Cover with dirt.", zh: "盖土。", speaker: "mom", type: "casual" },
      { en: "Pat down.", zh: "拍平。", speaker: "mom", type: "casual" },
      { en: "Water well.", zh: "浇透水。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 403, title: "看樱花", category: "outdoor", tags: ["樱花"], mode: "duo",
    sentences: [
      { en: "Cherry blossoms!", zh: "樱花开了！", speaker: "sister", type: "broExcite" },
      { en: "So pink.", zh: "好粉。", speaker: "brother", type: "broCute" },
      { en: "Petals fall.", zh: "花瓣落。", speaker: "sister", type: "casual" },
      { en: "Like snow!", zh: "像雪！", speaker: "brother", type: "broExcite" },
      { en: "Take photos.", zh: "拍照。", speaker: "mom", type: "casual" },
      { en: "Pose by tree.", zh: "树边站。", speaker: "sister", type: "casual" },
      { en: "Smile!", zh: "笑！", speaker: "mom", type: "casual" },
      { en: "Click!", zh: "咔！", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 404, title: "春雨", category: "outdoor", tags: ["春雨"], mode: "duo",
    sentences: [
      { en: "Drizzling.", zh: "下小雨。", speaker: "sister", type: "casual" },
      { en: "Soft rain.", zh: "细雨。", speaker: "mom", type: "casual" },
      { en: "Umbrella?", zh: "伞？", speaker: "brother", type: "broCurious" },
      { en: "Just hood.", zh: "戴帽就行。", speaker: "mom", type: "casual" },
      { en: "Smells fresh.", zh: "好清新。", speaker: "sister", type: "broCute" },
      { en: "Wet leaves.", zh: "叶子湿。", speaker: "brother", type: "casual" },
      { en: "Be careful.", zh: "小心滑。", speaker: "mom", type: "momWorry" },
      { en: "Inside soon.", zh: "快进门。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 405, title: "放风筝春", category: "outdoor", tags: ["风筝","春"], mode: "duo",
    sentences: [
      { en: "Windy spring.", zh: "春风大。", speaker: "dad", type: "casual" },
      { en: "Fly kite!", zh: "放风筝！", speaker: "brother", type: "broExcite" },
      { en: "Hold string.", zh: "握线。", speaker: "dad", type: "casual" },
      { en: "Run fast.", zh: "快跑。", speaker: "dad", type: "casual" },
      { en: "Up up up!", zh: "上上上！", speaker: "brother", type: "broLoud" },
      { en: "Higher!", zh: "更高！", speaker: "brother", type: "broExcite" },
      { en: "Let out string.", zh: "放线。", speaker: "dad", type: "casual" },
      { en: "Dragon kite!", zh: "龙风筝！", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 406, title: "去踏青", category: "outdoor", tags: ["踏青"], mode: "duo",
    sentences: [
      { en: "Picnic in park.", zh: "公园野餐。", speaker: "mom", type: "casual" },
      { en: "Green everywhere.", zh: "到处绿。", speaker: "sister", type: "broExcite" },
      { en: "Spread blanket.", zh: "铺垫子。", speaker: "mom", type: "casual" },
      { en: "Sandwiches!", zh: "三明治！", speaker: "brother", type: "broExcite" },
      { en: "Watch ants!", zh: "看蚂蚁！", speaker: "brother", type: "broExcite" },
      { en: "Don't sit on them.", zh: "别坐它们。", speaker: "sister", type: "casual" },
      { en: "Lots of bees.", zh: "好多蜂。", speaker: "mom", type: "momWorry" },
      { en: "Don't run.", zh: "别跑。", speaker: "mom", type: "momFirm" }
    ]
  },
  {
    id: 407, title: "找小蝌蚪", category: "outdoor", tags: ["蝌蚪"], mode: "duo",
    sentences: [
      { en: "By the pond.", zh: "池塘边。", speaker: "brother", type: "casual" },
      { en: "Tadpoles!", zh: "蝌蚪！", speaker: "brother", type: "broExcite" },
      { en: "Tiny black.", zh: "小黑的。", speaker: "sister", type: "casual" },
      { en: "Catch some?", zh: "抓几只？", speaker: "brother", type: "broCute" },
      { en: "Don't.", zh: "不要。", speaker: "sister", type: "sisFirm" },
      { en: "Watch only.", zh: "只看。", speaker: "sister", type: "casual" },
      { en: "Swim fast.", zh: "游得快。", speaker: "brother", type: "casual" },
      { en: "Will be frogs.", zh: "变青蛙。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 408, title: "打喷嚏花粉", category: "outdoor", tags: ["花粉过敏"], mode: "duo",
    sentences: [
      { en: "Achoo!", zh: "阿嚏！", speaker: "sister", type: "broLoud" },
      { en: "Bless you.", zh: "祝健康。", speaker: "mom", type: "momSoft" },
      { en: "Itchy nose.", zh: "鼻子痒。", speaker: "sister", type: "broWhine" },
      { en: "Pollen.", zh: "花粉。", speaker: "mom", type: "casual" },
      { en: "Take pill.", zh: "吃片。", speaker: "mom", type: "casual" },
      { en: "Mask up.", zh: "戴口罩。", speaker: "mom", type: "casual" },
      { en: "Eyes red?", zh: "眼红？", speaker: "mom", type: "broCurious" },
      { en: "Yeah.", zh: "嗯。", speaker: "sister", type: "broTired" }
    ]
  },
  {
    id: 409, title: "看燕子", category: "outdoor", tags: ["燕子"], mode: "narrate",
    sentences: [
      { en: "Swallows back!", zh: "燕子回来了！", speaker: "brother", type: "broExcite" },
      { en: "On the wire.", zh: "线上停。", speaker: "brother", type: "casual" },
      { en: "Black and white.", zh: "黑白的。", speaker: "brother", type: "casual" },
      { en: "Fork tails.", zh: "剪尾。", speaker: "brother", type: "casual" },
      { en: "Build nests.", zh: "搭窝。", speaker: "brother", type: "casual" },
      { en: "Twigs and mud.", zh: "枝和泥。", speaker: "brother", type: "casual" },
      { en: "Babies soon.", zh: "快有宝宝。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 410, title: "春装", category: "clothing", tags: ["春装"], mode: "duo",
    sentences: [
      { en: "Warmer today.", zh: "今儿暖。", speaker: "mom", type: "casual" },
      { en: "No more puffer.", zh: "不羽绒了。", speaker: "mom", type: "casual" },
      { en: "Light jacket.", zh: "薄外套。", speaker: "mom", type: "casual" },
      { en: "What color?", zh: "啥色？", speaker: "sister", type: "broCurious" },
      { en: "Yellow one.", zh: "黄色。", speaker: "mom", type: "casual" },
      { en: "Pretty!", zh: "好看！", speaker: "sister", type: "broExcite" },
      { en: "Spring shoes too.", zh: "春鞋也换。", speaker: "mom", type: "casual" },
      { en: "Sneakers!", zh: "运动鞋！", speaker: "sister", type: "broExcite" }
    ]
  },
  {
    id: 411, title: "夏天热", category: "family", tags: ["夏天","热"], mode: "duo",
    sentences: [
      { en: "Soooo hot!", zh: "好热！", speaker: "brother", type: "broTired" },
      { en: "AC on.", zh: "开空调。", speaker: "mom", type: "casual" },
      { en: "Cool!", zh: "凉快！", speaker: "brother", type: "broExcite" },
      { en: "Don't go out.", zh: "别出门。", speaker: "mom", type: "casual" },
      { en: "Drink water.", zh: "多喝水。", speaker: "mom", type: "momFirm" },
      { en: "Ice cream?", zh: "冰激凌？", speaker: "brother", type: "broCute" },
      { en: "One.", zh: "一根。", speaker: "mom", type: "casual" },
      { en: "Yes!", zh: "耶！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 412, title: "游泳", category: "outdoor", tags: ["游泳","夏天"], mode: "duo",
    sentences: [
      { en: "Pool day!", zh: "泳池日！", speaker: "brother", type: "broExcite" },
      { en: "Sunscreen first.", zh: "先防晒。", speaker: "mom", type: "momFirm" },
      { en: "Swim cap on.", zh: "戴泳帽。", speaker: "mom", type: "casual" },
      { en: "Goggles too.", zh: "泳镜。", speaker: "mom", type: "casual" },
      { en: "Cold water!", zh: "水凉！", speaker: "brother", type: "broLoud" },
      { en: "Get in slow.", zh: "慢进去。", speaker: "mom", type: "momSoft" },
      { en: "Kick legs!", zh: "蹬腿！", speaker: "sister", type: "casual" },
      { en: "I float!", zh: "我浮起来！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 413, title: "蚊子", category: "body", tags: ["蚊子","夏天"], mode: "duo",
    sentences: [
      { en: "Mosquito buzz.", zh: "蚊子叫。", speaker: "brother", type: "broAnnoy" },
      { en: "Slap it!", zh: "打！", speaker: "brother", type: "broLoud" },
      { en: "Missed.", zh: "没中。", speaker: "brother", type: "broWhine" },
      { en: "Spray repellent.", zh: "喷驱蚊。", speaker: "mom", type: "casual" },
      { en: "On arms.", zh: "胳膊。", speaker: "mom", type: "casual" },
      { en: "On legs.", zh: "腿。", speaker: "mom", type: "casual" },
      { en: "Smells weird.", zh: "怪味。", speaker: "brother", type: "broScared" },
      { en: "Keeps bugs away.", zh: "驱蚊。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 414, title: "西瓜冰", category: "eating", tags: ["西瓜","夏天"], mode: "duo",
    sentences: [
      { en: "Fridge watermelon.", zh: "冰西瓜。", speaker: "brother", type: "broExcite" },
      { en: "Cold and sweet.", zh: "凉又甜。", speaker: "sister", type: "broCute" },
      { en: "Big slice.", zh: "大块。", speaker: "brother", type: "casual" },
      { en: "Brain freeze!", zh: "冻脑子！", speaker: "brother", type: "broLoud" },
      { en: "Slow down.", zh: "慢点。", speaker: "sister", type: "sisBoss" },
      { en: "So good.", zh: "好爽。", speaker: "brother", type: "broCute" },
      { en: "Sticky chin.", zh: "下巴粘。", speaker: "sister", type: "sisTease" },
      { en: "Don't care.", zh: "管它。", speaker: "brother", type: "broSilly" }
    ]
  },
  {
    id: 415, title: "吹空调", category: "family", tags: ["空调"], mode: "duo",
    sentences: [
      { en: "AC cold!", zh: "空调凉！", speaker: "brother", type: "broCute" },
      { en: "Twenty-six.", zh: "二十六度。", speaker: "mom", type: "casual" },
      { en: "Too cold?", zh: "太凉？", speaker: "mom", type: "broCurious" },
      { en: "Just right.", zh: "刚好。", speaker: "sister", type: "casual" },
      { en: "Don't get sick.", zh: "别感冒。", speaker: "mom", type: "momWorry" },
      { en: "Wear sleeves.", zh: "穿袖子。", speaker: "mom", type: "casual" },
      { en: "Cozy.", zh: "舒服。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 416, title: "捉知了", category: "outdoor", tags: ["知了","夏天"], mode: "duo",
    sentences: [
      { en: "Cicada song!", zh: "知了叫！", speaker: "brother", type: "broExcite" },
      { en: "Where?", zh: "哪？", speaker: "sister", type: "broCurious" },
      { en: "On tree.", zh: "树上。", speaker: "brother", type: "casual" },
      { en: "Climb up?", zh: "爬上？", speaker: "brother", type: "broCute" },
      { en: "Not safe.", zh: "不安全。", speaker: "sister", type: "sisFirm" },
      { en: "Use net.", zh: "用网。", speaker: "brother", type: "casual" },
      { en: "Caught one!", zh: "抓到一只！", speaker: "brother", type: "broExcite" },
      { en: "Let it go.", zh: "放了。", speaker: "sister", type: "sisSweet" }
    ]
  },
  {
    id: 417, title: "出汗", category: "body", tags: ["出汗"], mode: "duo",
    sentences: [
      { en: "So sweaty.", zh: "好出汗。", speaker: "brother", type: "broTired" },
      { en: "Wipe forehead.", zh: "擦额。", speaker: "mom", type: "momSoft" },
      { en: "Change shirt.", zh: "换衣服。", speaker: "mom", type: "casual" },
      { en: "Shower needed.", zh: "得洗澡。", speaker: "brother", type: "casual" },
      { en: "Cool water.", zh: "凉水。", speaker: "mom", type: "casual" },
      { en: "Feels better.", zh: "好多了。", speaker: "brother", type: "broCute" },
      { en: "Drink more.", zh: "多喝水。", speaker: "mom", type: "momFirm" }
    ]
  },
  {
    id: 418, title: "看海", category: "outdoor", tags: ["海","夏天"], mode: "duo",
    sentences: [
      { en: "The sea!", zh: "看海！", speaker: "sister", type: "broExcite" },
      { en: "So blue!", zh: "好蓝！", speaker: "brother", type: "broExcite" },
      { en: "Waves crash.", zh: "浪打。", speaker: "sister", type: "casual" },
      { en: "Shoes off.", zh: "脱鞋。", speaker: "mom", type: "casual" },
      { en: "Sand warm.", zh: "沙暖。", speaker: "brother", type: "broCute" },
      { en: "Run to water!", zh: "跑下水！", speaker: "brother", type: "broExcite" },
      { en: "Splash!", zh: "啪叽！", speaker: "sister", type: "broLoud" },
      { en: "Salty!", zh: "好咸！", speaker: "brother", type: "surprised" }
    ]
  },
  {
    id: 419, title: "捡贝壳", category: "outdoor", tags: ["贝壳","海"], mode: "duo",
    sentences: [
      { en: "Look, shell!", zh: "贝壳！", speaker: "brother", type: "broExcite" },
      { en: "Pretty pink.", zh: "粉漂亮。", speaker: "sister", type: "broCute" },
      { en: "Another one!", zh: "又一个！", speaker: "brother", type: "broExcite" },
      { en: "Spiral shape.", zh: "螺旋的。", speaker: "sister", type: "casual" },
      { en: "Big collection.", zh: "好大堆。", speaker: "brother", type: "broProud" },
      { en: "Take home.", zh: "带回家。", speaker: "brother", type: "casual" },
      { en: "Wash in fresh.", zh: "淡水洗。", speaker: "sister", type: "casual" },
      { en: "Make crafts.", zh: "做手工。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 420, title: "晒太阳累", category: "family", tags: ["晒","夏"], mode: "duo",
    sentences: [
      { en: "Skin pink.", zh: "皮肤红。", speaker: "mom", type: "momWorry" },
      { en: "Sunburn?", zh: "晒伤？", speaker: "sister", type: "broScared" },
      { en: "Probably.", zh: "可能。", speaker: "mom", type: "casual" },
      { en: "Stings!", zh: "刺痛！", speaker: "sister", type: "broWhine" },
      { en: "Aloe gel.", zh: "芦荟胶。", speaker: "mom", type: "casual" },
      { en: "Cold cold.", zh: "凉凉。", speaker: "sister", type: "broScared" },
      { en: "Feels better.", zh: "好点。", speaker: "sister", type: "broCute" },
      { en: "Stay inside.", zh: "在屋里。", speaker: "mom", type: "momFirm" }
    ]
  },
  {
    id: 421, title: "落叶", category: "outdoor", tags: ["落叶","秋"], mode: "duo",
    sentences: [
      { en: "Leaves falling.", zh: "落叶。", speaker: "brother", type: "casual" },
      { en: "Red and yellow.", zh: "红黄的。", speaker: "sister", type: "casual" },
      { en: "Crunch crunch!", zh: "嘎吱嘎吱！", speaker: "brother", type: "broSilly" },
      { en: "Pile them up!", zh: "堆起来！", speaker: "brother", type: "broExcite" },
      { en: "Big pile!", zh: "大堆！", speaker: "sister", type: "broExcite" },
      { en: "Jump in!", zh: "跳进去！", speaker: "brother", type: "broLoud" },
      { en: "Whee!", zh: "哇——！", speaker: "brother", type: "broExcite" },
      { en: "Throw 'em up!", zh: "扔上去！", speaker: "sister", type: "broSilly" }
    ]
  },
  {
    id: 422, title: "秋衣秋裤", category: "clothing", tags: ["秋装"], mode: "duo",
    sentences: [
      { en: "Cool morning.", zh: "早上凉。", speaker: "mom", type: "casual" },
      { en: "Long johns.", zh: "秋裤。", speaker: "mom", type: "casual" },
      { en: "Eww!", zh: "不要！", speaker: "brother", type: "broWhine" },
      { en: "Cold tonight.", zh: "晚上凉。", speaker: "mom", type: "momFirm" },
      { en: "Just thin.", zh: "薄的。", speaker: "mom", type: "casual" },
      { en: "Long sleeves.", zh: "长袖。", speaker: "mom", type: "casual" },
      { en: "Jacket too?", zh: "外套？", speaker: "sister", type: "broCurious" },
      { en: "In the morning.", zh: "早上穿。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 423, title: "中秋赏月", category: "family", tags: ["中秋"], mode: "duo",
    sentences: [
      { en: "Mid-Autumn night.", zh: "中秋夜。", speaker: "mom", type: "casual" },
      { en: "Full moon!", zh: "圆月！", speaker: "brother", type: "broExcite" },
      { en: "So bright.", zh: "好亮。", speaker: "sister", type: "broCute" },
      { en: "Mooncakes!", zh: "月饼！", speaker: "brother", type: "broExcite" },
      { en: "Sweet inside.", zh: "里面甜。", speaker: "sister", type: "casual" },
      { en: "Bean paste?", zh: "豆沙？", speaker: "brother", type: "broCurious" },
      { en: "And lotus.", zh: "莲蓉。", speaker: "mom", type: "casual" },
      { en: "Happy holiday.", zh: "节日快乐。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 424, title: "捡板栗", category: "outdoor", tags: ["板栗","秋"], mode: "duo",
    sentences: [
      { en: "Chestnuts!", zh: "板栗！", speaker: "brother", type: "broExcite" },
      { en: "On the ground.", zh: "地上有。", speaker: "sister", type: "casual" },
      { en: "Spiky shells.", zh: "扎人壳。", speaker: "brother", type: "broScared" },
      { en: "Use stick.", zh: "用棍。", speaker: "sister", type: "casual" },
      { en: "Open them.", zh: "打开。", speaker: "sister", type: "casual" },
      { en: "Shiny brown!", zh: "亮棕色！", speaker: "brother", type: "broExcite" },
      { en: "Roast at home.", zh: "回家烤。", speaker: "sister", type: "casual" },
      { en: "Yum!", zh: "好吃！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 425, title: "秋天凉", category: "family", tags: ["秋天","凉"], mode: "duo",
    sentences: [
      { en: "Wind picks up.", zh: "风起。", speaker: "mom", type: "casual" },
      { en: "Brrr.", zh: "好冷。", speaker: "brother", type: "broTired" },
      { en: "Need scarf?", zh: "戴围巾？", speaker: "mom", type: "broCurious" },
      { en: "Yes please.", zh: "好。", speaker: "brother", type: "casual" },
      { en: "Hot tea?", zh: "热茶？", speaker: "mom", type: "casual" },
      { en: "Yes!", zh: "要！", speaker: "sister", type: "broExcite" },
      { en: "Warms up.", zh: "暖和。", speaker: "brother", type: "broCute" },
      { en: "Indoor day.", zh: "屋内日。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 426, title: "国庆节", category: "family", tags: ["国庆"], mode: "duo",
    sentences: [
      { en: "Holiday week!", zh: "假期一周！", speaker: "brother", type: "broExcite" },
      { en: "No school!", zh: "不上学！", speaker: "sister", type: "broExcite" },
      { en: "Travel plans?", zh: "出去玩？", speaker: "brother", type: "broCurious" },
      { en: "Yes, mountain.", zh: "去山里。", speaker: "mom", type: "casual" },
      { en: "Pack bags!", zh: "收行李！", speaker: "brother", type: "broExcite" },
      { en: "Three days.", zh: "三天。", speaker: "mom", type: "casual" },
      { en: "Fun!", zh: "好玩！", speaker: "sister", type: "broExcite" }
    ]
  },
  {
    id: 427, title: "登山秋", category: "outdoor", tags: ["登山","秋"], mode: "duo",
    sentences: [
      { en: "Trail starts.", zh: "登山道。", speaker: "dad", type: "casual" },
      { en: "Steep!", zh: "陡！", speaker: "brother", type: "broTired" },
      { en: "One step at a time.", zh: "一步一步。", speaker: "dad", type: "casual" },
      { en: "Pretty trees.", zh: "树好看。", speaker: "sister", type: "casual" },
      { en: "Almost top?", zh: "快到顶？", speaker: "brother", type: "broWhine" },
      { en: "Halfway.", zh: "一半。", speaker: "dad", type: "casual" },
      { en: "View amazing!", zh: "风景美！", speaker: "sister", type: "broExcite" },
      { en: "Worth it.", zh: "值了。", speaker: "dad", type: "casual" }
    ]
  },
  {
    id: 428, title: "看红叶", category: "outdoor", tags: ["红叶"], mode: "duo",
    sentences: [
      { en: "Mountain red!", zh: "山红了！", speaker: "sister", type: "broExcite" },
      { en: "Maple leaves.", zh: "枫叶。", speaker: "mom", type: "casual" },
      { en: "Like fire.", zh: "像火。", speaker: "brother", type: "casual" },
      { en: "Pick one.", zh: "捡片。", speaker: "sister", type: "casual" },
      { en: "Press in book.", zh: "夹书里。", speaker: "sister", type: "casual" },
      { en: "Forever pretty.", zh: "永远美。", speaker: "sister", type: "broCute" },
      { en: "Photo time!", zh: "拍照！", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 429, title: "万圣节", category: "family", tags: ["万圣节"], mode: "duo",
    sentences: [
      { en: "Halloween!", zh: "万圣节！", speaker: "brother", type: "broExcite" },
      { en: "Costume?", zh: "装扮？", speaker: "mom", type: "broCurious" },
      { en: "Ghost!", zh: "鬼！", speaker: "brother", type: "broLoud" },
      { en: "I'm witch.", zh: "我女巫。", speaker: "sister", type: "casual" },
      { en: "Trick or treat!", zh: "不给糖就捣蛋！", speaker: "brother", type: "broExcite" },
      { en: "Bucket ready.", zh: "桶拿好。", speaker: "mom", type: "casual" },
      { en: "Knock knock.", zh: "敲门。", speaker: "sister", type: "casual" },
      { en: "Candy!", zh: "糖！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 430, title: "万圣装扮", category: "family", tags: ["万圣节","装扮"], mode: "duo",
    sentences: [
      { en: "Try costume.", zh: "试装。", speaker: "mom", type: "casual" },
      { en: "Witch hat.", zh: "巫女帽。", speaker: "sister", type: "casual" },
      { en: "Black dress.", zh: "黑裙。", speaker: "sister", type: "casual" },
      { en: "Face paint.", zh: "画脸。", speaker: "mom", type: "casual" },
      { en: "Spider web!", zh: "蜘蛛网！", speaker: "brother", type: "broExcite" },
      { en: "Scary!", zh: "吓人！", speaker: "sister", type: "broSilly" },
      { en: "Mirror look.", zh: "照镜子。", speaker: "sister", type: "casual" },
      { en: "Cackle!", zh: "嘎嘎！", speaker: "sister", type: "broSilly" }
    ]
  },
  {
    id: 431, title: "下雪了", category: "outdoor", tags: ["下雪","冬"], mode: "duo",
    sentences: [
      { en: "Snow!", zh: "下雪！", speaker: "brother", type: "broLoud" },
      { en: "Big flakes!", zh: "大雪花！", speaker: "sister", type: "broExcite" },
      { en: "Cold!", zh: "冷！", speaker: "brother", type: "broScared" },
      { en: "Bundle up.", zh: "穿厚。", speaker: "mom", type: "momFirm" },
      { en: "Hat, scarf.", zh: "帽围巾。", speaker: "mom", type: "casual" },
      { en: "Gloves on.", zh: "戴手套。", speaker: "mom", type: "casual" },
      { en: "Boots.", zh: "雪靴。", speaker: "mom", type: "casual" },
      { en: "Go play!", zh: "玩去！", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 432, title: "堆雪人", category: "outdoor", tags: ["雪人"], mode: "duo",
    sentences: [
      { en: "Build snowman!", zh: "堆雪人！", speaker: "brother", type: "broExcite" },
      { en: "Roll a ball.", zh: "滚雪球。", speaker: "sister", type: "casual" },
      { en: "Bigger!", zh: "再大！", speaker: "brother", type: "broLoud" },
      { en: "Body done.", zh: "身体好了。", speaker: "sister", type: "casual" },
      { en: "Now head.", zh: "再头。", speaker: "sister", type: "casual" },
      { en: "Stack up.", zh: "摞上。", speaker: "brother", type: "casual" },
      { en: "Carrot nose.", zh: "胡萝卜鼻。", speaker: "sister", type: "casual" },
      { en: "Buttons eyes.", zh: "扣子眼。", speaker: "brother", type: "casual" },
      { en: "Cute!", zh: "可爱！", speaker: "sister", type: "broExcite" }
    ]
  },
  {
    id: 433, title: "打雪仗冬", category: "outdoor", tags: ["雪仗"], mode: "duo",
    sentences: [
      { en: "Snow ball war!", zh: "雪仗！", speaker: "brother", type: "broLoud" },
      { en: "Make balls.", zh: "捏球。", speaker: "sister", type: "casual" },
      { en: "Pack tight.", zh: "捏紧。", speaker: "sister", type: "casual" },
      { en: "Hide behind tree.", zh: "躲树后。", speaker: "brother", type: "casual" },
      { en: "Throw!", zh: "扔！", speaker: "brother", type: "broLoud" },
      { en: "Splat!", zh: "啪！", speaker: "sister", type: "broLoud" },
      { en: "Got me!", zh: "打中我！", speaker: "sister", type: "broWhine" },
      { en: "Truce?", zh: "休战？", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 434, title: "暖气", category: "family", tags: ["暖气"], mode: "duo",
    sentences: [
      { en: "Heater on.", zh: "开暖气。", speaker: "mom", type: "casual" },
      { en: "Cozy warm.", zh: "暖和。", speaker: "sister", type: "broCute" },
      { en: "Curl on couch.", zh: "窝沙发。", speaker: "brother", type: "broCute" },
      { en: "Blanket too.", zh: "毯子。", speaker: "mom", type: "casual" },
      { en: "Hot chocolate?", zh: "热可可？", speaker: "brother", type: "broCute" },
      { en: "Sure.", zh: "好。", speaker: "mom", type: "momSoft" },
      { en: "Marshmallows!", zh: "棉花糖！", speaker: "brother", type: "broExcite" },
      { en: "Heaven.", zh: "天堂。", speaker: "sister", type: "broCute" }
    ]
  },
  {
    id: 435, title: "穿羽绒冬", category: "clothing", tags: ["羽绒","冬"], mode: "duo",
    sentences: [
      { en: "Bitter cold.", zh: "冷死。", speaker: "mom", type: "casual" },
      { en: "Down jacket.", zh: "羽绒服。", speaker: "mom", type: "casual" },
      { en: "Fluffy!", zh: "蓬蓬的！", speaker: "brother", type: "broCute" },
      { en: "Zip up.", zh: "拉拉链。", speaker: "mom", type: "casual" },
      { en: "Hood up.", zh: "戴帽。", speaker: "mom", type: "casual" },
      { en: "Mask too.", zh: "口罩。", speaker: "mom", type: "casual" },
      { en: "Just eyes show.", zh: "只露眼。", speaker: "brother", type: "broSilly" },
      { en: "Brrr.", zh: "好冷。", speaker: "sister", type: "broTired" }
    ]
  },
  {
    id: 436, title: "新年大扫除", category: "chores", tags: ["新年","扫除"], mode: "duo",
    sentences: [
      { en: "Spring clean!", zh: "大扫除！", speaker: "mom", type: "casual" },
      { en: "Why?", zh: "为啥？", speaker: "brother", type: "broCurious" },
      { en: "New Year clean.", zh: "迎新年。", speaker: "mom", type: "casual" },
      { en: "Sweep dust away.", zh: "扫晦气。", speaker: "mom", type: "casual" },
      { en: "Top to bottom.", zh: "从上到下。", speaker: "mom", type: "casual" },
      { en: "Cabinets too.", zh: "柜子。", speaker: "mom", type: "casual" },
      { en: "Lots of work.", zh: "活多。", speaker: "sister", type: "broTired" },
      { en: "Everyone helps.", zh: "都帮忙。", speaker: "mom", type: "momFirm" }
    ]
  },
  {
    id: 437, title: "贴春联", category: "family", tags: ["春联"], mode: "duo",
    sentences: [
      { en: "New year couplet.", zh: "贴春联。", speaker: "dad", type: "casual" },
      { en: "Red paper!", zh: "红纸！", speaker: "brother", type: "broExcite" },
      { en: "Tape on door.", zh: "贴门上。", speaker: "dad", type: "casual" },
      { en: "Left side first.", zh: "先左。", speaker: "dad", type: "casual" },
      { en: "Then right.", zh: "再右。", speaker: "dad", type: "casual" },
      { en: "Top piece.", zh: "横批。", speaker: "dad", type: "casual" },
      { en: "Reads up high.", zh: "贴高处。", speaker: "dad", type: "casual" },
      { en: "Looks festive!", zh: "热闹！", speaker: "sister", type: "broExcite" }
    ]
  },
  {
    id: 438, title: "包饺子年", category: "family", tags: ["饺子","新年"], mode: "duo",
    sentences: [
      { en: "New year dumplings.", zh: "年夜饺子。", speaker: "mom", type: "casual" },
      { en: "Everyone helps!", zh: "都来包！", speaker: "mom", type: "momCheer" },
      { en: "Flatten dough.", zh: "压面。", speaker: "sister", type: "casual" },
      { en: "Add filling.", zh: "加馅。", speaker: "brother", type: "casual" },
      { en: "Mom's so good.", zh: "妈好厉害。", speaker: "brother", type: "broCute" },
      { en: "Practice helps.", zh: "熟能生巧。", speaker: "mom", type: "momSoft" },
      { en: "Mine looks weird.", zh: "我的怪。", speaker: "brother", type: "broSilly" },
      { en: "Still cute.", zh: "也可爱。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 439, title: "年夜饭", category: "family", tags: ["年夜饭"], mode: "duo",
    sentences: [
      { en: "Big feast!", zh: "大餐！", speaker: "brother", type: "broExcite" },
      { en: "Whole family.", zh: "全家。", speaker: "mom", type: "casual" },
      { en: "Grandma here.", zh: "奶奶来了。", speaker: "sister", type: "broCute" },
      { en: "Hug hug.", zh: "抱抱。", speaker: "brother", type: "broCute" },
      { en: "Sit at table.", zh: "上桌。", speaker: "dad", type: "casual" },
      { en: "Toast!", zh: "干杯！", speaker: "dad", type: "casual" },
      { en: "Happy new year!", zh: "新年快乐！", speaker: "family", type: "broCheer" },
      { en: "Cheers!", zh: "干杯！", speaker: "brother", type: "broLoud" }
    ]
  },
  {
    id: 440, title: "拿红包", category: "family", tags: ["红包"], mode: "duo",
    sentences: [
      { en: "Red envelope!", zh: "红包！", speaker: "brother", type: "broExcite" },
      { en: "Greet grandma.", zh: "拜奶奶。", speaker: "mom", type: "casual" },
      { en: "Happy new year!", zh: "新年好！", speaker: "brother", type: "broCute" },
      { en: "Grow tall.", zh: "快长高。", speaker: "grandma", type: "momSoft" },
      { en: "Thank you!", zh: "谢谢！", speaker: "brother", type: "broExcite" },
      { en: "Heavy!", zh: "好重！", speaker: "brother", type: "broExcite" },
      { en: "Don't open now.", zh: "别拆。", speaker: "mom", type: "momSoft" },
      { en: "Save it.", zh: "存起来。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 441, title: "放鞭炮", category: "outdoor", tags: ["鞭炮","新年"], mode: "duo",
    sentences: [
      { en: "Firework time!", zh: "放鞭炮！", speaker: "brother", type: "broExcite" },
      { en: "Outside only.", zh: "去外面。", speaker: "dad", type: "momFirm" },
      { en: "Stand back.", zh: "退后。", speaker: "dad", type: "momFirm" },
      { en: "Light fuse.", zh: "点引线。", speaker: "dad", type: "casual" },
      { en: "Run!", zh: "跑！", speaker: "dad", type: "rushed" },
      { en: "Boom boom!", zh: "嘭嘭！", speaker: "brother", type: "broLoud" },
      { en: "Cover ears!", zh: "捂耳！", speaker: "sister", type: "broLoud" },
      { en: "So loud!", zh: "好响！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 442, title: "看春晚", category: "family", tags: ["春晚"], mode: "duo",
    sentences: [
      { en: "Gala starts!", zh: "春晚开始！", speaker: "mom", type: "casual" },
      { en: "Snacks ready?", zh: "零食好？", speaker: "brother", type: "broCurious" },
      { en: "On table.", zh: "桌上。", speaker: "mom", type: "casual" },
      { en: "Singer first.", zh: "先唱歌。", speaker: "sister", type: "casual" },
      { en: "Pretty dress.", zh: "好看的衣服。", speaker: "sister", type: "broCute" },
      { en: "Funny skit!", zh: "小品好笑！", speaker: "brother", type: "broSilly" },
      { en: "Almost twelve.", zh: "快十二点。", speaker: "mom", type: "casual" },
      { en: "Countdown!", zh: "倒数！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 443, title: "拜年", category: "family", tags: ["拜年"], mode: "duo",
    sentences: [
      { en: "Visit grandparents.", zh: "看爷奶。", speaker: "mom", type: "casual" },
      { en: "Wear new clothes.", zh: "穿新衣。", speaker: "mom", type: "casual" },
      { en: "Knock knock.", zh: "敲门。", speaker: "brother", type: "casual" },
      { en: "Happy new year!", zh: "新年好！", speaker: "brother", type: "broExcite" },
      { en: "Grandkids!", zh: "孙子们！", speaker: "grandma", type: "momCheer" },
      { en: "Bow low.", zh: "鞠躬。", speaker: "mom", type: "casual" },
      { en: "Good health.", zh: "身体好。", speaker: "sister", type: "broCute" },
      { en: "Bless you.", zh: "祝福你。", speaker: "grandma", type: "momSoft" }
    ]
  },
  {
    id: 444, title: "汤圆元宵", category: "eating", tags: ["汤圆","元宵"], mode: "duo",
    sentences: [
      { en: "Lantern festival!", zh: "元宵节！", speaker: "mom", type: "casual" },
      { en: "Tang yuan!", zh: "汤圆！", speaker: "brother", type: "broExcite" },
      { en: "Black sesame.", zh: "黑芝麻。", speaker: "sister", type: "casual" },
      { en: "Soft chewy.", zh: "软糯。", speaker: "brother", type: "broCute" },
      { en: "Sweet inside.", zh: "里面甜。", speaker: "sister", type: "casual" },
      { en: "Family together.", zh: "团团圆圆。", speaker: "mom", type: "momSoft" },
      { en: "Happy meal.", zh: "幸福饭。", speaker: "sister", type: "broCute" }
    ]
  },
  {
    id: 445, title: "看灯笼", category: "outdoor", tags: ["灯笼"], mode: "duo",
    sentences: [
      { en: "Lanterns lit up!", zh: "灯笼亮！", speaker: "brother", type: "broExcite" },
      { en: "So many colors.", zh: "好多色。", speaker: "sister", type: "broCute" },
      { en: "Red is luck.", zh: "红是吉祥。", speaker: "mom", type: "casual" },
      { en: "Dragon lantern!", zh: "龙灯！", speaker: "brother", type: "broExcite" },
      { en: "Huge!", zh: "好大！", speaker: "sister", type: "surprised" },
      { en: "Lights moving.", zh: "灯会动。", speaker: "brother", type: "casual" },
      { en: "Magical.", zh: "梦幻。", speaker: "sister", type: "broCute" },
      { en: "Take a photo.", zh: "拍照。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 446, title: "猜灯谜", category: "family", tags: ["灯谜"], mode: "duo",
    sentences: [
      { en: "Riddle game.", zh: "猜灯谜。", speaker: "sister", type: "casual" },
      { en: "Read it.", zh: "念。", speaker: "brother", type: "broCurious" },
      { en: "What flies no wings?", zh: "啥飞没翅？", speaker: "sister", type: "casual" },
      { en: "Um... cloud?", zh: "云？", speaker: "brother", type: "broCurious" },
      { en: "Try again.", zh: "再想。", speaker: "sister", type: "sisTease" },
      { en: "Snow?", zh: "雪？", speaker: "brother", type: "broCurious" },
      { en: "Time!", zh: "时间！", speaker: "sister", type: "broExcite" },
      { en: "Oh!", zh: "哦！", speaker: "brother", type: "surprised" }
    ]
  },
  {
    id: 447, title: "圣诞树", category: "family", tags: ["圣诞树"], mode: "duo",
    sentences: [
      { en: "Christmas tree!", zh: "圣诞树！", speaker: "brother", type: "broExcite" },
      { en: "Unpack lights.", zh: "拿灯串。", speaker: "mom", type: "casual" },
      { en: "Wrap around.", zh: "绕树。", speaker: "sister", type: "casual" },
      { en: "Add ornaments.", zh: "挂饰品。", speaker: "sister", type: "casual" },
      { en: "Star on top.", zh: "顶上星。", speaker: "brother", type: "casual" },
      { en: "Lift me!", zh: "举我！", speaker: "brother", type: "broCute" },
      { en: "Light up!", zh: "亮灯！", speaker: "sister", type: "broExcite" },
      { en: "Magical!", zh: "梦幻！", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 448, title: "圣诞节早晨", category: "family", tags: ["圣诞节"], mode: "duo",
    sentences: [
      { en: "Christmas morning!", zh: "圣诞早！", speaker: "brother", type: "broExcite" },
      { en: "Santa came!", zh: "圣诞老人来了！", speaker: "sister", type: "broExcite" },
      { en: "Gifts under tree!", zh: "树下礼物！", speaker: "brother", type: "broLoud" },
      { en: "Mine first?", zh: "先拆我的？", speaker: "brother", type: "broCute" },
      { en: "Take turns.", zh: "轮流。", speaker: "mom", type: "casual" },
      { en: "Tear paper!", zh: "撕纸！", speaker: "brother", type: "broExcite" },
      { en: "Wow!", zh: "哇！", speaker: "sister", type: "surprised" },
      { en: "Thanks Santa!", zh: "谢圣诞老人！", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 449, title: "下雪滑冰", category: "outdoor", tags: ["滑冰","冬"], mode: "duo",
    sentences: [
      { en: "Ice rink!", zh: "冰场！", speaker: "sister", type: "broExcite" },
      { en: "Skates on.", zh: "穿冰鞋。", speaker: "mom", type: "casual" },
      { en: "Wobble!", zh: "晃！", speaker: "brother", type: "broScared" },
      { en: "Hold rail.", zh: "扶栏。", speaker: "mom", type: "momSoft" },
      { en: "Glide forward.", zh: "向前滑。", speaker: "sister", type: "casual" },
      { en: "Falling!", zh: "摔了！", speaker: "brother", type: "broLoud" },
      { en: "Get up.", zh: "起来。", speaker: "sister", type: "casual" },
      { en: "Try again.", zh: "再试。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 450, title: "压岁钱存", category: "family", tags: ["压岁钱"], mode: "duo",
    sentences: [
      { en: "Counting money.", zh: "数钱。", speaker: "brother", type: "broExcite" },
      { en: "Wow, lots!", zh: "好多！", speaker: "sister", type: "broExcite" },
      { en: "Save half?", zh: "存一半？", speaker: "mom", type: "broCurious" },
      { en: "Yes!", zh: "好！", speaker: "brother", type: "casual" },
      { en: "Bank account.", zh: "银行存。", speaker: "mom", type: "casual" },
      { en: "Spend on?", zh: "花啥？", speaker: "brother", type: "broCurious" },
      { en: "Books, toys.", zh: "书玩具。", speaker: "mom", type: "casual" },
      { en: "Save smart.", zh: "聪明存。", speaker: "sister", type: "sisProud" }
    ]
  },
  {
    id: 451, title: "开心大笑", category: "family", tags: ["开心","笑"], mode: "duo",
    sentences: [
      { en: "Hahaha!", zh: "哈哈哈！", speaker: "brother", type: "laugh" },
      { en: "What's funny?", zh: "啥好笑？", speaker: "sister", type: "broCurious" },
      { en: "Watch this clip!", zh: "看这段！", speaker: "brother", type: "broLoud" },
      { en: "Oh my!", zh: "哎呀！", speaker: "sister", type: "laugh" },
      { en: "So silly!", zh: "好傻！", speaker: "brother", type: "broSilly" },
      { en: "Belly hurts!", zh: "肚子笑疼！", speaker: "sister", type: "broLoud" },
      { en: "Can't breathe!", zh: "笑岔气！", speaker: "brother", type: "laugh" },
      { en: "Stop, stop!", zh: "停停！", speaker: "sister", type: "laugh" }
    ]
  },
  {
    id: 452, title: "伤心哭", category: "family", tags: ["伤心","哭"], mode: "duo",
    sentences: [
      { en: "Sob sob.", zh: "呜呜。", speaker: "brother", type: "broCry" },
      { en: "What happened?", zh: "怎么了？", speaker: "mom", type: "momWorry" },
      { en: "Toy broke.", zh: "玩具坏了。", speaker: "brother", type: "broCry" },
      { en: "Aww honey.", zh: "宝贝。", speaker: "mom", type: "momSoft" },
      { en: "Loved that one.", zh: "最爱的。", speaker: "brother", type: "broCry" },
      { en: "I know.", zh: "我懂。", speaker: "mom", type: "momSoft" },
      { en: "Big hug.", zh: "抱抱。", speaker: "mom", type: "momSoft" },
      { en: "Fix it?", zh: "能修吗？", speaker: "brother", type: "broCute" },
      { en: "Maybe.", zh: "试试。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 453, title: "生气大喊", category: "family", tags: ["生气"], mode: "duo",
    sentences: [
      { en: "Not fair!", zh: "不公平！", speaker: "brother", type: "yell" },
      { en: "Calm down.", zh: "冷静。", speaker: "mom", type: "momFirm" },
      { en: "Sis took it!", zh: "姐姐抢的！", speaker: "brother", type: "broLoud" },
      { en: "Use words.", zh: "好好说。", speaker: "mom", type: "momSoft" },
      { en: "Hmph!", zh: "哼！", speaker: "brother", type: "broPout" },
      { en: "Cross arms.", zh: "抱胸。", speaker: "brother", type: "broAnnoy" },
      { en: "Deep breath.", zh: "深呼吸。", speaker: "mom", type: "momSoft" },
      { en: "Better?", zh: "好点？", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 454, title: "害怕躲", category: "family", tags: ["害怕"], mode: "duo",
    sentences: [
      { en: "Loud noise!", zh: "好响！", speaker: "brother", type: "broScared" },
      { en: "Run to mom.", zh: "跑找妈。", speaker: "brother", type: "rushed" },
      { en: "Hide behind.", zh: "躲后面。", speaker: "brother", type: "broScared" },
      { en: "What scared?", zh: "怕啥？", speaker: "mom", type: "momWorry" },
      { en: "Thunder!", zh: "打雷！", speaker: "brother", type: "broCry" },
      { en: "Just sky.", zh: "天而已。", speaker: "mom", type: "momSoft" },
      { en: "Safe inside.", zh: "屋里安全。", speaker: "mom", type: "momSoft" },
      { en: "Hold me.", zh: "抱我。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 455, title: "兴奋蹦跳", category: "family", tags: ["兴奋"], mode: "duo",
    sentences: [
      { en: "Best day ever!", zh: "最棒一天！", speaker: "sister", type: "broExcite" },
      { en: "Jump jump!", zh: "蹦蹦！", speaker: "sister", type: "broLoud" },
      { en: "What?!", zh: "啥事？", speaker: "brother", type: "broCurious" },
      { en: "Got A plus!", zh: "得A+！", speaker: "sister", type: "broLoud" },
      { en: "Whoa!", zh: "哇！", speaker: "brother", type: "surprised" },
      { en: "Spinning!", zh: "转圈！", speaker: "sister", type: "broSilly" },
      { en: "So proud!", zh: "骄傲死！", speaker: "sister", type: "sisProud" },
      { en: "Yay sis!", zh: "好棒姐！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 456, title: "委屈", category: "family", tags: ["委屈"], mode: "duo",
    sentences: [
      { en: "Tears coming.", zh: "想哭。", speaker: "brother", type: "broCry" },
      { en: "Hold them.", zh: "忍着。", speaker: "brother", type: "broTired" },
      { en: "What's wrong?", zh: "咋了？", speaker: "mom", type: "momWorry" },
      { en: "Teacher yelled.", zh: "老师吼我。", speaker: "brother", type: "broCry" },
      { en: "Wasn't fair.", zh: "不是我。", speaker: "brother", type: "broCry" },
      { en: "Tell me.", zh: "说说。", speaker: "mom", type: "momSoft" },
      { en: "Felt small.", zh: "好难受。", speaker: "brother", type: "broCry" },
      { en: "Aww.", zh: "唉。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 457, title: "嫉妒", category: "family", tags: ["嫉妒"], mode: "duo",
    sentences: [
      { en: "She got more.", zh: "她拿多了。", speaker: "brother", type: "broPout" },
      { en: "Equal pieces.", zh: "一样多。", speaker: "mom", type: "momFirm" },
      { en: "Hers bigger!", zh: "她的大！", speaker: "brother", type: "broWhine" },
      { en: "Same size.", zh: "一样大。", speaker: "mom", type: "casual" },
      { en: "Not fair!", zh: "不公平！", speaker: "brother", type: "broAnnoy" },
      { en: "Measure them.", zh: "量量。", speaker: "mom", type: "casual" },
      { en: "Oh.", zh: "哦。", speaker: "brother", type: "broScared" },
      { en: "See?", zh: "看吧？", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 458, title: "得意", category: "family", tags: ["得意"], mode: "duo",
    sentences: [
      { en: "Look at me.", zh: "看我。", speaker: "brother", type: "broProud" },
      { en: "What?", zh: "啥？", speaker: "sister", type: "broCurious" },
      { en: "Beat the level!", zh: "通关了！", speaker: "brother", type: "broExcite" },
      { en: "Yeah right.", zh: "切。", speaker: "sister", type: "sisAnnoy" },
      { en: "Look proof!", zh: "看证据！", speaker: "brother", type: "broLoud" },
      { en: "Hmm.", zh: "嗯。", speaker: "sister", type: "casual" },
      { en: "Best!", zh: "最强！", speaker: "brother", type: "sisProud" },
      { en: "Show-off.", zh: "炫耀鬼。", speaker: "sister", type: "sisTease" }
    ]
  },
  {
    id: 459, title: "失望", category: "family", tags: ["失望"], mode: "duo",
    sentences: [
      { en: "Park's closed.", zh: "公园关了。", speaker: "mom", type: "casual" },
      { en: "No way!", zh: "不会吧！", speaker: "brother", type: "broWhine" },
      { en: "Rain.", zh: "下雨。", speaker: "mom", type: "casual" },
      { en: "But promised!", zh: "答应了！", speaker: "brother", type: "broCry" },
      { en: "Sorry buddy.", zh: "对不起。", speaker: "mom", type: "momSoft" },
      { en: "Aw man.", zh: "唉。", speaker: "brother", type: "broPout" },
      { en: "Tomorrow?", zh: "明天？", speaker: "brother", type: "broCute" },
      { en: "If sunny.", zh: "晴天就去。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 460, title: "害羞", category: "family", tags: ["害羞"], mode: "duo",
    sentences: [
      { en: "Say hello.", zh: "打招呼。", speaker: "mom", type: "momSoft" },
      { en: "Shy...", zh: "不好意思...", speaker: "brother", type: "whisper" },
      { en: "Hide face.", zh: "藏脸。", speaker: "brother", type: "broScared" },
      { en: "Just hi.", zh: "就 hi。", speaker: "mom", type: "momSoft" },
      { en: "Hi.", zh: "嗨。", speaker: "brother", type: "whisper" },
      { en: "Louder?", zh: "大点声？", speaker: "mom", type: "momSoft" },
      { en: "Hi!", zh: "嗨！", speaker: "brother", type: "broCute" },
      { en: "Good job.", zh: "真棒。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 461, title: "紧张", category: "family", tags: ["紧张"], mode: "duo",
    sentences: [
      { en: "Stomach knots.", zh: "肚子紧。", speaker: "sister", type: "broWorry" },
      { en: "Why?", zh: "为啥？", speaker: "mom", type: "broCurious" },
      { en: "Stage today.", zh: "今天上台。", speaker: "sister", type: "broScared" },
      { en: "You practiced.", zh: "你练了。", speaker: "mom", type: "momSoft" },
      { en: "What if fail?", zh: "搞砸咋办？", speaker: "sister", type: "broWorry" },
      { en: "You won't.", zh: "不会的。", speaker: "mom", type: "momSoft" },
      { en: "Deep breath.", zh: "深呼吸。", speaker: "mom", type: "momSoft" },
      { en: "I can.", zh: "我可以。", speaker: "sister", type: "broCute" }
    ]
  },
  {
    id: 462, title: "自豪", category: "family", tags: ["自豪"], mode: "duo",
    sentences: [
      { en: "Made it myself.", zh: "我自己做的。", speaker: "brother", type: "broProud" },
      { en: "Really?", zh: "真的？", speaker: "mom", type: "surprised" },
      { en: "Yep, alone.", zh: "嗯，自己。", speaker: "brother", type: "broExcite" },
      { en: "Amazing.", zh: "厉害。", speaker: "mom", type: "momCheer" },
      { en: "Took hours.", zh: "花了好久。", speaker: "brother", type: "broProud" },
      { en: "Hard work.", zh: "辛苦了。", speaker: "mom", type: "momSoft" },
      { en: "So proud.", zh: "自豪。", speaker: "brother", type: "broCute" },
      { en: "Me too.", zh: "我也是。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 463, title: "无聊", category: "family", tags: ["无聊"], mode: "duo",
    sentences: [
      { en: "Soooo bored.", zh: "无聊死。", speaker: "brother", type: "broWhine" },
      { en: "Read book.", zh: "看书。", speaker: "mom", type: "casual" },
      { en: "Read 'em all.", zh: "都看过。", speaker: "brother", type: "broWhine" },
      { en: "Draw?", zh: "画画？", speaker: "mom", type: "broCurious" },
      { en: "Nah.", zh: "不要。", speaker: "brother", type: "broPout" },
      { en: "Outside?", zh: "出去？", speaker: "mom", type: "casual" },
      { en: "Raining.", zh: "下雨。", speaker: "brother", type: "broTired" },
      { en: "Help me cook?", zh: "帮我做饭？", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 464, title: "好奇", category: "family", tags: ["好奇"], mode: "duo",
    sentences: [
      { en: "What's that?", zh: "啥东西？", speaker: "brother", type: "broCurious" },
      { en: "A pinwheel.", zh: "风车。", speaker: "mom", type: "casual" },
      { en: "Why spins?", zh: "为啥转？", speaker: "brother", type: "broCurious" },
      { en: "Wind pushes.", zh: "风吹的。", speaker: "mom", type: "casual" },
      { en: "Why wind?", zh: "为啥有风？", speaker: "brother", type: "broCurious" },
      { en: "Air moves.", zh: "空气动。", speaker: "mom", type: "casual" },
      { en: "Why?", zh: "为啥？", speaker: "brother", type: "broCurious" },
      { en: "Lots of questions.", zh: "好多问。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 465, title: "想念", category: "family", tags: ["想念"], mode: "duo",
    sentences: [
      { en: "Miss grandpa.", zh: "想爷爷。", speaker: "sister", type: "broTired" },
      { en: "Me too.", zh: "我也。", speaker: "mom", type: "momSoft" },
      { en: "When visit?", zh: "啥时去？", speaker: "sister", type: "broCurious" },
      { en: "This weekend.", zh: "周末。", speaker: "mom", type: "casual" },
      { en: "Call him?", zh: "打电话？", speaker: "sister", type: "broCute" },
      { en: "Sure.", zh: "好。", speaker: "mom", type: "momSoft" },
      { en: "Hi grandpa!", zh: "爷爷好！", speaker: "sister", type: "broExcite" },
      { en: "Missed you.", zh: "想你。", speaker: "sister", type: "broCute" }
    ]
  },
  {
    id: 466, title: "心情低落", category: "family", tags: ["低落"], mode: "duo",
    sentences: [
      { en: "Feel down.", zh: "心情差。", speaker: "sister", type: "broTired" },
      { en: "Why?", zh: "为啥？", speaker: "mom", type: "momWorry" },
      { en: "Just am.", zh: "就是。", speaker: "sister", type: "casual" },
      { en: "Wanna talk?", zh: "聊聊？", speaker: "mom", type: "momSoft" },
      { en: "Not now.", zh: "现在不。", speaker: "sister", type: "broTired" },
      { en: "Hug?", zh: "抱抱？", speaker: "mom", type: "momSoft" },
      { en: "Okay.", zh: "嗯。", speaker: "sister", type: "broCute" },
      { en: "I'm here.", zh: "我在。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 467, title: "感动", category: "family", tags: ["感动"], mode: "duo",
    sentences: [
      { en: "Wow.", zh: "哇。", speaker: "mom", type: "surprised" },
      { en: "You made me?", zh: "给我做的？", speaker: "mom", type: "momSoft" },
      { en: "For you.", zh: "给你。", speaker: "brother", type: "broCute" },
      { en: "So touched.", zh: "好感动。", speaker: "mom", type: "momSoft" },
      { en: "Like it?", zh: "喜欢？", speaker: "brother", type: "broCute" },
      { en: "Love it.", zh: "爱死了。", speaker: "mom", type: "momCheer" },
      { en: "Aww.", zh: "嘿嘿。", speaker: "brother", type: "broCute" },
      { en: "Sweetie.", zh: "宝贝。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 468, title: "尴尬", category: "family", tags: ["尴尬"], mode: "duo",
    sentences: [
      { en: "Tripped in class.", zh: "课上摔跤。", speaker: "sister", type: "broTired" },
      { en: "Everyone laughed.", zh: "都笑我。", speaker: "sister", type: "broCry" },
      { en: "Awkward.", zh: "尴尬。", speaker: "sister", type: "broWhine" },
      { en: "Hurts ego.", zh: "伤面子。", speaker: "sister", type: "broTired" },
      { en: "They forget.", zh: "他们会忘。", speaker: "mom", type: "momSoft" },
      { en: "Hope so.", zh: "希望吧。", speaker: "sister", type: "broWhine" },
      { en: "Laugh too.", zh: "你也笑。", speaker: "mom", type: "casual" },
      { en: "Try.", zh: "试试。", speaker: "sister", type: "casual" }
    ]
  },
  {
    id: 469, title: "感激", category: "family", tags: ["感激"], mode: "duo",
    sentences: [
      { en: "Mom?", zh: "妈？", speaker: "brother", type: "broCute" },
      { en: "Hmm?", zh: "嗯？", speaker: "mom", type: "momSoft" },
      { en: "Thank you.", zh: "谢谢你。", speaker: "brother", type: "broCute" },
      { en: "For what?", zh: "谢啥？", speaker: "mom", type: "broCurious" },
      { en: "Everything.", zh: "一切。", speaker: "brother", type: "broCute" },
      { en: "Awww.", zh: "嘿嘿。", speaker: "mom", type: "momSoft" },
      { en: "Love you.", zh: "爱你。", speaker: "brother", type: "broCute" },
      { en: "Forever.", zh: "永远。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 470, title: "心情好", category: "family", tags: ["开心"], mode: "duo",
    sentences: [
      { en: "Such good mood.", zh: "心情真好。", speaker: "sister", type: "broCheer" },
      { en: "Why?", zh: "为啥？", speaker: "brother", type: "broCurious" },
      { en: "Sun shining.", zh: "出太阳。", speaker: "sister", type: "casual" },
      { en: "Tests done.", zh: "考完试。", speaker: "sister", type: "casual" },
      { en: "Free time!", zh: "自由时间！", speaker: "sister", type: "broExcite" },
      { en: "Sing along?", zh: "一起唱？", speaker: "brother", type: "broCute" },
      { en: "La la la!", zh: "啦啦啦！", speaker: "sister", type: "broSilly" },
      { en: "Dance!", zh: "跳舞！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 471, title: "说谢谢", category: "family", tags: ["礼貌","谢谢"], mode: "duo",
    sentences: [
      { en: "Here you go.", zh: "给。", speaker: "classmate", type: "casual" },
      { en: "Thanks!", zh: "谢谢！", speaker: "brother", type: "broCute" },
      { en: "Welcome.", zh: "不用。", speaker: "classmate", type: "casual" },
      { en: "Real nice.", zh: "你真好。", speaker: "brother", type: "casual" },
      { en: "Always.", zh: "应该的。", speaker: "classmate", type: "casual" },
      { en: "Owe you one.", zh: "欠你一个。", speaker: "brother", type: "casual" },
      { en: "Nah.", zh: "没事。", speaker: "classmate", type: "casual" }
    ]
  },
  {
    id: 472, title: "说对不起", category: "family", tags: ["对不起"], mode: "duo",
    sentences: [
      { en: "I'm sorry.", zh: "对不起。", speaker: "brother", type: "broCute" },
      { en: "For what?", zh: "为啥？", speaker: "sister", type: "broCurious" },
      { en: "Broke it.", zh: "弄坏了。", speaker: "brother", type: "broCry" },
      { en: "My toy?", zh: "我玩具？", speaker: "sister", type: "sisAnnoy" },
      { en: "Yes.", zh: "嗯。", speaker: "brother", type: "broCry" },
      { en: "Did try?", zh: "试着补？", speaker: "sister", type: "broCurious" },
      { en: "Couldn't.", zh: "补不了。", speaker: "brother", type: "broCry" },
      { en: "Okay.", zh: "算了。", speaker: "sister", type: "sisSweet" }
    ]
  },
  {
    id: 473, title: "请别人帮", category: "family", tags: ["请求帮助"], mode: "duo",
    sentences: [
      { en: "Excuse me.", zh: "打扰下。", speaker: "brother", type: "broCute" },
      { en: "Yes?", zh: "嗯？", speaker: "classmate", type: "casual" },
      { en: "Help me?", zh: "帮我？", speaker: "brother", type: "broCute" },
      { en: "What?", zh: "啥？", speaker: "classmate", type: "broCurious" },
      { en: "Stuck on this.", zh: "卡这了。", speaker: "brother", type: "casual" },
      { en: "Lemme see.", zh: "我看。", speaker: "classmate", type: "casual" },
      { en: "Thanks lots.", zh: "多谢。", speaker: "brother", type: "broCute" },
      { en: "No problem.", zh: "没事。", speaker: "classmate", type: "casual" }
    ]
  },
  {
    id: 474, title: "夸朋友", category: "family", tags: ["夸"], mode: "duo",
    sentences: [
      { en: "Cool drawing!", zh: "画得棒！", speaker: "sister", type: "broExcite" },
      { en: "Really?", zh: "真的？", speaker: "classmate", type: "broCute" },
      { en: "So good.", zh: "好厉害。", speaker: "sister", type: "casual" },
      { en: "Aw thanks.", zh: "谢啦。", speaker: "classmate", type: "broCute" },
      { en: "Teach me?", zh: "教我？", speaker: "sister", type: "broCute" },
      { en: "Sure.", zh: "好。", speaker: "classmate", type: "casual" },
      { en: "Yay.", zh: "耶。", speaker: "sister", type: "broExcite" }
    ]
  },
  {
    id: 475, title: "拒绝别人", category: "family", tags: ["拒绝"], mode: "duo",
    sentences: [
      { en: "Wanna come?", zh: "来吗？", speaker: "classmate", type: "broCute" },
      { en: "Where?", zh: "去哪？", speaker: "brother", type: "broCurious" },
      { en: "Park today.", zh: "今天公园。", speaker: "classmate", type: "casual" },
      { en: "Hmm.", zh: "嗯。", speaker: "brother", type: "broCurious" },
      { en: "Can't sorry.", zh: "不行抱歉。", speaker: "brother", type: "casual" },
      { en: "Why?", zh: "为啥？", speaker: "classmate", type: "broCurious" },
      { en: "Family thing.", zh: "家里事。", speaker: "brother", type: "casual" },
      { en: "Ok next time.", zh: "下次。", speaker: "classmate", type: "casual" }
    ]
  },
  {
    id: 476, title: "分享零食", category: "family", tags: ["分享"], mode: "duo",
    sentences: [
      { en: "Got candies.", zh: "有糖。", speaker: "sister", type: "casual" },
      { en: "Share?", zh: "分？", speaker: "classmate", type: "broCute" },
      { en: "Sure pick.", zh: "好选。", speaker: "sister", type: "casual" },
      { en: "This one?", zh: "这个？", speaker: "classmate", type: "broCurious" },
      { en: "Take it.", zh: "拿吧。", speaker: "sister", type: "sisSweet" },
      { en: "Thanks!", zh: "谢！", speaker: "classmate", type: "broExcite" },
      { en: "Another?", zh: "再一个？", speaker: "sister", type: "broCute" },
      { en: "One enough.", zh: "一个够。", speaker: "classmate", type: "casual" }
    ]
  },
  {
    id: 477, title: "排队等待", category: "family", tags: ["排队"], mode: "duo",
    sentences: [
      { en: "Long line.", zh: "队长。", speaker: "brother", type: "broTired" },
      { en: "Be patient.", zh: "有耐心。", speaker: "mom", type: "momSoft" },
      { en: "How long?", zh: "多久？", speaker: "brother", type: "broWhine" },
      { en: "Ten minutes.", zh: "十分钟。", speaker: "mom", type: "casual" },
      { en: "Ages!", zh: "好久！", speaker: "brother", type: "broWhine" },
      { en: "Wait turn.", zh: "等轮到。", speaker: "mom", type: "momFirm" },
      { en: "Fine.", zh: "好吧。", speaker: "brother", type: "broAnnoy" },
      { en: "Our turn!", zh: "到了！", speaker: "brother", type: "broExcite" }
    ]
  },
  {
    id: 478, title: "让座", category: "family", tags: ["让座"], mode: "duo",
    sentences: [
      { en: "Old lady.", zh: "老奶奶。", speaker: "sister", type: "whisper" },
      { en: "Stand up.", zh: "站起来。", speaker: "mom", type: "momSoft" },
      { en: "Take seat.", zh: "请坐。", speaker: "sister", type: "broCute" },
      { en: "Sweet girl.", zh: "好孩子。", speaker: "old", type: "momSoft" },
      { en: "You're welcome.", zh: "不用谢。", speaker: "sister", type: "broCute" },
      { en: "Thank you.", zh: "谢谢你。", speaker: "old", type: "momSoft" },
      { en: "Proud of you.", zh: "你真棒。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 479, title: "捡东西还", category: "family", tags: ["拾金"], mode: "duo",
    sentences: [
      { en: "Found wallet!", zh: "捡到钱包！", speaker: "brother", type: "broExcite" },
      { en: "Whose?", zh: "谁的？", speaker: "sister", type: "broCurious" },
      { en: "Don't know.", zh: "不知道。", speaker: "brother", type: "casual" },
      { en: "Look inside.", zh: "看看里。", speaker: "sister", type: "casual" },
      { en: "Has ID.", zh: "有卡。", speaker: "brother", type: "casual" },
      { en: "Find owner.", zh: "找主人。", speaker: "sister", type: "casual" },
      { en: "Ask staff.", zh: "找工作人员。", speaker: "sister", type: "casual" },
      { en: "Good kid.", zh: "好孩子。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 480, title: "见到老师", category: "family", tags: ["问候"], mode: "duo",
    sentences: [
      { en: "Look, teacher!", zh: "看，老师！", speaker: "brother", type: "whisper" },
      { en: "Good morning!", zh: "老师好！", speaker: "brother", type: "casual" },
      { en: "Hi kids!", zh: "你们好！", speaker: "teacher", type: "momSoft" },
      { en: "How are you?", zh: "您好吗？", speaker: "sister", type: "casual" },
      { en: "Great thanks.", zh: "好谢谢。", speaker: "teacher", type: "momSoft" },
      { en: "Bye teacher.", zh: "老师再见。", speaker: "brother", type: "broCute" },
      { en: "Bye dear.", zh: "再见乖。", speaker: "teacher", type: "momSoft" }
    ]
  },
  {
    id: 481, title: "和邻居打招呼", category: "family", tags: ["邻居"], mode: "duo",
    sentences: [
      { en: "Hi neighbor!", zh: "邻居好！", speaker: "mom", type: "casual" },
      { en: "Morning!", zh: "早上好！", speaker: "neighbor", type: "casual" },
      { en: "Nice day.", zh: "天好。", speaker: "mom", type: "casual" },
      { en: "Sure is.", zh: "是啊。", speaker: "neighbor", type: "casual" },
      { en: "Kids growing.", zh: "孩长大了。", speaker: "neighbor", type: "momSoft" },
      { en: "Fast!", zh: "好快！", speaker: "mom", type: "casual" },
      { en: "Take care.", zh: "保重。", speaker: "neighbor", type: "casual" },
      { en: "You too.", zh: "你也是。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 482, title: "说我可以", category: "family", tags: ["自信"], mode: "duo",
    sentences: [
      { en: "Too hard!", zh: "太难！", speaker: "brother", type: "broWhine" },
      { en: "Try.", zh: "试。", speaker: "mom", type: "momSoft" },
      { en: "Can't.", zh: "不行。", speaker: "brother", type: "broTired" },
      { en: "Say I can.", zh: "说我可以。", speaker: "mom", type: "momSoft" },
      { en: "I can.", zh: "我可以。", speaker: "brother", type: "broCute" },
      { en: "Again louder.", zh: "再大声。", speaker: "mom", type: "momSoft" },
      { en: "I can!", zh: "我可以！", speaker: "brother", type: "broLoud" },
      { en: "Now do it!", zh: "做去！", speaker: "mom", type: "momCheer" }
    ]
  },
  {
    id: 483, title: "鼓励朋友", category: "family", tags: ["鼓励"], mode: "duo",
    sentences: [
      { en: "I'll fail.", zh: "考砸了。", speaker: "classmate", type: "broTired" },
      { en: "No way!", zh: "才不！", speaker: "brother", type: "casual" },
      { en: "Studied lots.", zh: "学了好多。", speaker: "brother", type: "casual" },
      { en: "Really?", zh: "真的？", speaker: "classmate", type: "broCurious" },
      { en: "You can!", zh: "你可以！", speaker: "brother", type: "broCheer" },
      { en: "Believe me?", zh: "信我？", speaker: "brother", type: "broCute" },
      { en: "I try.", zh: "我试。", speaker: "classmate", type: "broCute" },
      { en: "Go go go!", zh: "加油加油！", speaker: "brother", type: "broCheer" }
    ]
  },
  {
    id: 484, title: "倾听朋友", category: "family", tags: ["倾听"], mode: "duo",
    sentences: [
      { en: "Bad day.", zh: "糟一天。", speaker: "classmate", type: "broTired" },
      { en: "Tell me.", zh: "说说。", speaker: "sister", type: "sisSweet" },
      { en: "Mom yelled.", zh: "妈吼我。", speaker: "classmate", type: "broCry" },
      { en: "Aw.", zh: "唉。", speaker: "sister", type: "sisSweet" },
      { en: "I felt sad.", zh: "我难过。", speaker: "classmate", type: "broCry" },
      { en: "I get it.", zh: "我懂。", speaker: "sister", type: "sisSweet" },
      { en: "Thanks listening.", zh: "谢你听。", speaker: "classmate", type: "broCute" },
      { en: "Always here.", zh: "永远在。", speaker: "sister", type: "sisSweet" }
    ]
  },
  {
    id: 485, title: "见生人", category: "family", tags: ["陌生人"], mode: "duo",
    sentences: [
      { en: "Hi sweetie.", zh: "嗨小朋友。", speaker: "stranger", type: "casual" },
      { en: "Hi.", zh: "嗨。", speaker: "brother", type: "whisper" },
      { en: "Cute kid.", zh: "可爱。", speaker: "stranger", type: "momSoft" },
      { en: "Stay close.", zh: "靠近我。", speaker: "mom", type: "whisper" },
      { en: "Don't talk.", zh: "别说话。", speaker: "mom", type: "momFirm" },
      { en: "Okay.", zh: "好。", speaker: "brother", type: "broCute" },
      { en: "Walk away.", zh: "走开。", speaker: "mom", type: "casual" }
    ]
  },
  {
    id: 486, title: "守约定", category: "family", tags: ["约定"], mode: "duo",
    sentences: [
      { en: "Said you'd come.", zh: "说要来。", speaker: "classmate", type: "broWhine" },
      { en: "I'm here!", zh: "我来啦！", speaker: "brother", type: "broExcite" },
      { en: "Late.", zh: "晚了。", speaker: "classmate", type: "sisAnnoy" },
      { en: "Sorry.", zh: "对不起。", speaker: "brother", type: "broCute" },
      { en: "Promise next time?", zh: "下次准时？", speaker: "classmate", type: "broCurious" },
      { en: "Promise.", zh: "答应。", speaker: "brother", type: "casual" },
      { en: "Pinky?", zh: "拉钩？", speaker: "classmate", type: "broCute" },
      { en: "Pinky.", zh: "拉钩。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 487, title: "诚实承认", category: "family", tags: ["诚实"], mode: "duo",
    sentences: [
      { en: "Who broke this?", zh: "谁打的？", speaker: "mom", type: "momWorry" },
      { en: "Um...", zh: "呃...", speaker: "brother", type: "broScared" },
      { en: "Tell truth.", zh: "说实话。", speaker: "mom", type: "momFirm" },
      { en: "I did.", zh: "我打的。", speaker: "brother", type: "broCry" },
      { en: "Thanks honesty.", zh: "谢你诚实。", speaker: "mom", type: "momSoft" },
      { en: "Sorry.", zh: "对不起。", speaker: "brother", type: "broCry" },
      { en: "Not mad.", zh: "不生气。", speaker: "mom", type: "momSoft" },
      { en: "Careful next.", zh: "下次小心。", speaker: "mom", type: "momFirm" }
    ]
  },
  {
    id: 488, title: "排队规则", category: "family", tags: ["规则"], mode: "duo",
    sentences: [
      { en: "Cutting line!", zh: "插队！", speaker: "sister", type: "sisAnnoy" },
      { en: "Hey!", zh: "诶！", speaker: "brother", type: "broLoud" },
      { en: "Back of line.", zh: "去后面。", speaker: "sister", type: "sisFirm" },
      { en: "But I'm late.", zh: "我晚了。", speaker: "classmate", type: "broWhine" },
      { en: "So is everyone.", zh: "都一样。", speaker: "sister", type: "sisCalm" },
      { en: "Fine.", zh: "好吧。", speaker: "classmate", type: "broAnnoy" },
      { en: "Wait turn.", zh: "等轮到。", speaker: "sister", type: "sisCalm" }
    ]
  },
  {
    id: 489, title: "不准乱扔", category: "family", tags: ["环保"], mode: "duo",
    sentences: [
      { en: "Hey, paper!", zh: "诶，纸！", speaker: "sister", type: "sisAnnoy" },
      { en: "What?", zh: "啥？", speaker: "brother", type: "broCurious" },
      { en: "You dropped.", zh: "你扔的。", speaker: "sister", type: "sisFirm" },
      { en: "Oops.", zh: "哎呀。", speaker: "brother", type: "broScared" },
      { en: "Pick up.", zh: "捡起来。", speaker: "sister", type: "sisFirm" },
      { en: "Trash bin.", zh: "扔桶里。", speaker: "sister", type: "casual" },
      { en: "Got it.", zh: "好。", speaker: "brother", type: "casual" },
      { en: "Earth thanks.", zh: "地球感谢。", speaker: "sister", type: "sisSweet" }
    ]
  },
  {
    id: 490, title: "公平分", category: "family", tags: ["公平"], mode: "duo",
    sentences: [
      { en: "One cake.", zh: "一个蛋糕。", speaker: "mom", type: "casual" },
      { en: "Cut even?", zh: "切均匀？", speaker: "sister", type: "broCurious" },
      { en: "Three pieces.", zh: "三块。", speaker: "mom", type: "casual" },
      { en: "Yours bigger!", zh: "你块大！", speaker: "brother", type: "broWhine" },
      { en: "Same size.", zh: "一样大。", speaker: "sister", type: "casual" },
      { en: "Measure.", zh: "量量。", speaker: "mom", type: "casual" },
      { en: "Identical.", zh: "一样。", speaker: "mom", type: "casual" },
      { en: "Oh, okay.", zh: "哦好。", speaker: "brother", type: "broScared" }
    ]
  },
  {
    id: 491, title: "认错改正", category: "family", tags: ["改正"], mode: "duo",
    sentences: [
      { en: "You hit her.", zh: "你打她了。", speaker: "mom", type: "momFirm" },
      { en: "She started!", zh: "她先的！", speaker: "brother", type: "broWhine" },
      { en: "Doesn't matter.", zh: "不重要。", speaker: "mom", type: "momFirm" },
      { en: "Apologize.", zh: "道歉。", speaker: "mom", type: "momFirm" },
      { en: "Sorry sis.", zh: "对不起姐。", speaker: "brother", type: "broCute" },
      { en: "Mean it?", zh: "真的？", speaker: "sister", type: "broCurious" },
      { en: "Yes.", zh: "嗯。", speaker: "brother", type: "broCute" },
      { en: "Forgive.", zh: "原谅你。", speaker: "sister", type: "sisSweet" }
    ]
  },
  {
    id: 492, title: "守时", category: "family", tags: ["守时"], mode: "duo",
    sentences: [
      { en: "What time?", zh: "几点？", speaker: "brother", type: "broCurious" },
      { en: "Six already.", zh: "六点了。", speaker: "mom", type: "casual" },
      { en: "Late!", zh: "迟了！", speaker: "brother", type: "broScared" },
      { en: "Said six.", zh: "约六点。", speaker: "mom", type: "casual" },
      { en: "Run!", zh: "跑！", speaker: "brother", type: "rushed" },
      { en: "Slow down!", zh: "慢点！", speaker: "mom", type: "momWorry" },
      { en: "Always early.", zh: "提前到。", speaker: "mom", type: "momFirm" },
      { en: "Will do.", zh: "会的。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 493, title: "保护小的", category: "family", tags: ["保护"], mode: "duo",
    sentences: [
      { en: "Kid crying.", zh: "小孩哭。", speaker: "brother", type: "broCurious" },
      { en: "What's wrong?", zh: "咋了？", speaker: "brother", type: "broCute" },
      { en: "Lost mom.", zh: "找不到妈。", speaker: "kid", type: "broCry" },
      { en: "Don't worry.", zh: "别怕。", speaker: "brother", type: "casual" },
      { en: "Find her.", zh: "找她。", speaker: "brother", type: "sisSweet" },
      { en: "Stay with me.", zh: "跟我。", speaker: "brother", type: "casual" },
      { en: "Tell guard.", zh: "找保安。", speaker: "brother", type: "casual" },
      { en: "Brave boy.", zh: "勇敢。", speaker: "mom", type: "momSoft" }
    ]
  },
  {
    id: 494, title: "勇敢面对", category: "family", tags: ["勇敢"], mode: "duo",
    sentences: [
      { en: "Scared dark.", zh: "怕黑。", speaker: "brother", type: "broScared" },
      { en: "Why?", zh: "为啥？", speaker: "mom", type: "momWorry" },
      { en: "Monsters maybe.", zh: "有怪兽。", speaker: "brother", type: "whisper" },
      { en: "Not real.", zh: "不是真的。", speaker: "mom", type: "momSoft" },
      { en: "Brave you.", zh: "你勇敢。", speaker: "mom", type: "momCheer" },
      { en: "Try?", zh: "试试？", speaker: "brother", type: "broCute" },
      { en: "I can.", zh: "我可以。", speaker: "brother", type: "casual" },
      { en: "Lights off.", zh: "关灯。", speaker: "brother", type: "broCute" }
    ]
  },
  {
    id: 495, title: "和好如初", category: "family", tags: ["和好"], mode: "duo",
    sentences: [
      { en: "Still mad?", zh: "还气？", speaker: "brother", type: "broCute" },
      { en: "A little.", zh: "有点。", speaker: "sister", type: "sisAnnoy" },
      { en: "Sorry truly.", zh: "真对不起。", speaker: "brother", type: "broCry" },
      { en: "I know.", zh: "我懂。", speaker: "sister", type: "sisCalm" },
      { en: "Hug?", zh: "抱？", speaker: "brother", type: "broCute" },
      { en: "Come here.", zh: "过来。", speaker: "sister", type: "sisSweet" },
      { en: "Love sis.", zh: "爱姐姐。", speaker: "brother", type: "broCute" },
      { en: "Love you too.", zh: "也爱你。", speaker: "sister", type: "sisSweet" }
    ]
  },
  {
    id: 496, title: "庆祝赢了", category: "family", tags: ["赢","庆祝"], mode: "duo",
    sentences: [
      { en: "We won!", zh: "赢了！", speaker: "brother", type: "broLoud" },
      { en: "No way!", zh: "真的？", speaker: "sister", type: "broExcite" },
      { en: "Trophy ours!", zh: "奖杯我们的！", speaker: "brother", type: "broProud" },
      { en: "Yes!", zh: "耶！", speaker: "sister", type: "broCheer" },
      { en: "High five!", zh: "击掌！", speaker: "brother", type: "broExcite" },
      { en: "Smack!", zh: "啪！", speaker: "sister", type: "casual" },
      { en: "Best team!", zh: "最棒队！", speaker: "brother", type: "broCheer" },
      { en: "Pizza party!", zh: "披萨庆祝！", speaker: "sister", type: "broExcite" }
    ]
  },
  {
    id: 497, title: "输了不哭", category: "family", tags: ["输","坚强"], mode: "duo",
    sentences: [
      { en: "We lost.", zh: "输了。", speaker: "brother", type: "broTired" },
      { en: "Yeah.", zh: "嗯。", speaker: "sister", type: "casual" },
      { en: "Sad.", zh: "难过。", speaker: "brother", type: "broCry" },
      { en: "It's okay.", zh: "没事。", speaker: "sister", type: "sisSweet" },
      { en: "Next time.", zh: "下次。", speaker: "sister", type: "casual" },
      { en: "Train more?", zh: "再练？", speaker: "brother", type: "broCurious" },
      { en: "Sure.", zh: "好。", speaker: "sister", type: "casual" },
      { en: "Won't quit.", zh: "不放弃。", speaker: "brother", type: "casual" }
    ]
  },
  {
    id: 498, title: "祝福朋友", category: "family", tags: ["祝福"], mode: "duo",
    sentences: [
      { en: "Moving away.", zh: "要搬走。", speaker: "classmate", type: "broTired" },
      { en: "Aw, when?", zh: "啥时？", speaker: "sister", type: "broWorry" },
      { en: "Next week.", zh: "下周。", speaker: "classmate", type: "broCry" },
      { en: "Miss you.", zh: "想你。", speaker: "sister", type: "broCry" },
      { en: "Stay friends?", zh: "还朋友？", speaker: "classmate", type: "broCute" },
      { en: "Forever.", zh: "永远。", speaker: "sister", type: "sisSweet" },
      { en: "Good luck.", zh: "祝好。", speaker: "sister", type: "sisSweet" },
      { en: "You too.", zh: "你也。", speaker: "classmate", type: "broCute" }
    ]
  },
  {
    id: 499, title: "感恩家人", category: "family", tags: ["感恩"], mode: "duo",
    sentences: [
      { en: "Mom dad.", zh: "妈爸。", speaker: "sister", type: "broCute" },
      { en: "Yes?", zh: "嗯？", speaker: "mom", type: "momSoft" },
      { en: "Thank you.", zh: "谢谢你们。", speaker: "sister", type: "broCute" },
      { en: "For what?", zh: "谢啥？", speaker: "dad", type: "broCurious" },
      { en: "Loving me.", zh: "爱我。", speaker: "sister", type: "broCute" },
      { en: "Forever, baby.", zh: "永远，宝贝。", speaker: "mom", type: "momSoft" },
      { en: "Group hug?", zh: "全家抱？", speaker: "brother", type: "broCute" },
      { en: "Yes!", zh: "来！", speaker: "dad", type: "dadCalm" }
    ]
  },
  {
    id: 500, title: "再见说晚安", category: "family", tags: ["晚安","再见"], mode: "duo",
    sentences: [
      { en: "Day ending.", zh: "一天结束。", speaker: "mom", type: "momSoft" },
      { en: "Already?", zh: "这么快？", speaker: "brother", type: "surprised" },
      { en: "Time flies.", zh: "时间过得快。", speaker: "mom", type: "casual" },
      { en: "Brush teeth.", zh: "刷牙。", speaker: "mom", type: "casual" },
      { en: "Pajamas.", zh: "穿睡衣。", speaker: "mom", type: "casual" },
      { en: "In bed.", zh: "上床。", speaker: "mom", type: "casual" },
      { en: "Good night.", zh: "晚安。", speaker: "mom", type: "momSoft" },
      { en: "Sweet dreams.", zh: "好梦。", speaker: "mom", type: "momSoft" },
      { en: "Love you.", zh: "爱你。", speaker: "brother", type: "broCute" },
      { en: "Love you more.", zh: "更爱你。", speaker: "mom", type: "momSoft" }
    ]
  }
  ]
};
