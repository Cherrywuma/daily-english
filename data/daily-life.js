// Daily English - 姐弟+妈妈+爸爸 真实日常对话
// 姐姐 sister (9岁，四年级)，弟弟 brother (7岁，一年级)
// 妈妈 mom，爸爸 dad
//
// 设计原则：
// - 半截话、语气词、缩写、不完整句子
// - 中文翻译用最口语的"妈妈话/孩子话"
// - 姐弟吵架/告状/合伙/互相嘲笑 占大头
// - 没有 "How are you" "Let's go to the kitchen" 这种教科书句

window.DAILY_LIFE = {

  emotionMap: {
    // ——大人语气
    nag:        "Speak like a tired Chinese-American mom nagging her kids in the morning. Slightly exasperated, fast, real. Not angry, just over it.",
    momCheer:   "Warm, cheerful mom voice, smiling, gentle morning energy.",
    momFirm:    "Firm but not angry mom voice, setting a clear limit.",
    momSoft:    "Soft, gentle, comforting mom voice.",
    momCalling: "Mom calling from another room, louder, slightly raised voice.",
    momTired:   "Mom voice at the end of a long day, low energy, kind of done.",
    momTease:   "Mom teasing her kid playfully, smiling voice.",
    momWorry:   "Mom voice with a tiny edge of worry.",
    dadCalm:    "Calm, easy-going dad voice, low and warm.",
    dadStern:   "Dad voice when he's serious, low and steady, not yelling.",
    dadPlay:    "Playful dad voice, joking around with the kids.",

    // ——姐姐 9 岁（女生，带点小大人气）
    sisAnnoy:   "9-year-old girl, annoyed at her little brother. Slightly bossy, eye-rolling energy.",
    sisProud:   "9-year-old girl bragging a little, proud and a tiny bit smug.",
    sisBoss:    "9-year-old big-sister voice, ordering her little brother around.",
    sisWhine:   "9-year-old girl whining to her mom, drawn out.",
    sisTease:   "9-year-old girl teasing her little brother, playful mean.",
    sisCalm:    "9-year-old girl, calm and matter-of-fact, kind of grown up.",
    sisSweet:   "9-year-old girl being sweet, asking nicely.",

    // ——弟弟 7 岁（男生，爱告状、爱粘）
    broCry:     "7-year-old boy about to cry, voice cracking, sniffly.",
    broTell:    "7-year-old boy tattling to mom, loud, indignant.",
    broExcite:  "7-year-old boy super excited, loud and bouncy.",
    broWhine:   "7-year-old boy whining, drawn out, almost crying.",
    broScared:  "7-year-old boy a little scared, small voice.",
    broPout:    "7-year-old boy pouting, arms crossed energy.",
    broCute:    "7-year-old boy being cute on purpose, sweet little voice.",
    broLoud:    "7-year-old boy yelling across the room, full volume.",
    broCurious: "7-year-old boy asking a real curious question, wide-eyed.",
    broSilly:   "7-year-old boy being silly, giggly.",

    // ——通用
    casual:     "Talk casually, very natural, real-life pace.",
    rushed:     "Speak fast and a little breathless, in a hurry.",
    laugh:      "Light laughter in the voice, playful.",
    surprised:  "Genuinely surprised, small gasp.",
    cozy:       "Warm, cozy, dinner-table or bedtime voice.",
    whisper:    "Whisper softly, like secret-sharing.",
    yell:       "Calling from another room, loud."
  },

  defaultSpeakers: {
    mom:     "shimmer",
    dad:     "alloy",
    sister:  "nova",
    brother: "fable",
    teacher: "alloy",
    doctor:  "echo",
    grandma: "shimmer",
    grandpa: "echo"
  },

  days: [

    // ====================================================
    // Day 1: 早上叫起床的拉锯战
    // ====================================================
    {
      id: 1, theme: "早上叫起床", desc: "妈妈喊三遍，姐姐先起，弟弟赖床",
      sentences: [
        { en: "Wake up, you two!",              zh: "起床啦，你俩！",          type: "momCalling", speaker: "mom" },
        { en: "It's seven already.",            zh: "都七点了。",              type: "nag",        speaker: "mom" },
        { en: "Mom, five more minutes.",        zh: "妈，再睡五分钟。",        type: "broWhine",   speaker: "brother" },
        { en: "No, get up now.",                zh: "不行，赶紧起。",          type: "momFirm",    speaker: "mom" },
        { en: "I'm up, I'm up.",                zh: "起了起了。",              type: "sisCalm",    speaker: "sister" },
        { en: "He's still sleeping!",           zh: "他还在睡！",              type: "sisAnnoy",   speaker: "sister" },
        { en: "Shut up, I'm not.",              zh: "闭嘴，我没睡。",          type: "broPout",    speaker: "brother" },
        { en: "Don't tell your sister to shut up.", zh: "别让姐姐闭嘴。",      type: "momFirm",    speaker: "mom" },
        { en: "She started it!",                zh: "她先开始的！",            type: "broTell",    speaker: "brother" },
        { en: "I did not.",                     zh: "我才没有。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "Out of bed, both of you.",       zh: "都给我下床。",            type: "momFirm",    speaker: "mom" },
        { en: "It's cold!",                     zh: "好冷啊！",                type: "broWhine",   speaker: "brother" },
        { en: "Put on a sweater then.",         zh: "那穿件毛衣。",            type: "casual",     speaker: "mom" },
        { en: "Where's my sweater?",            zh: "我毛衣呢？",              type: "broCurious", speaker: "brother" },
        { en: "On the chair, dummy.",           zh: "椅子上，笨蛋。",          type: "sisTease",   speaker: "sister" },
        { en: "Don't call him dummy.",          zh: "别叫他笨蛋。",            type: "momFirm",    speaker: "mom" },
        { en: "He really is though.",           zh: "他就是嘛。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "Mom! She called me dummy!",      zh: "妈！她叫我笨蛋！",        type: "broTell",    speaker: "brother" },
        { en: "Enough, both of you.",           zh: "够了，你俩。",            type: "momTired",   speaker: "mom" },
        { en: "I can't find my socks.",         zh: "我袜子找不到了。",        type: "broWhine",   speaker: "brother" },
        { en: "Look under the bed.",            zh: "床底下找找。",            type: "casual",     speaker: "mom" },
        { en: "Found one!",                     zh: "找到一只！",              type: "broExcite",  speaker: "brother" },
        { en: "Where's the other one?",         zh: "另一只呢？",              type: "casual",     speaker: "mom" },
        { en: "Hurry up, we're late.",          zh: "快点，迟到了。",          type: "rushed",     speaker: "mom" },
        { en: "I'm hurrying!",                  zh: "我在快啊！",              type: "broWhine",   speaker: "brother" },
        { en: "Mom, he's still in pajamas.",    zh: "妈，他还穿着睡衣。",      type: "sisTell",    speaker: "sister" },
        { en: "Mind your own business.",        zh: "管好你自己。",            type: "broPout",    speaker: "brother" },
        { en: "Both of you, downstairs, now.",  zh: "都下楼，马上。",          type: "momFirm",    speaker: "mom" },
        { en: "Coming!",                        zh: "来了！",                  type: "sisCalm",    speaker: "sister" },
        { en: "Wait for me!",                   zh: "等等我！",                type: "broLoud",    speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 2: 抢卫生间 + 刷牙
    // ====================================================
    {
      id: 2, theme: "抢卫生间", desc: "一个卫生间两个孩子，必然打架",
      sentences: [
        { en: "I'm first!",                     zh: "我先！",                  type: "broLoud",    speaker: "brother" },
        { en: "No, I am.",                      zh: "不，我先。",              type: "sisCalm",    speaker: "sister" },
        { en: "I got here first!",              zh: "我先到的！",              type: "broTell",    speaker: "brother" },
        { en: "I'm older, I go first.",         zh: "我大，我先。",            type: "sisBoss",    speaker: "sister" },
        { en: "That's not fair!",               zh: "不公平！",                type: "broWhine",   speaker: "brother" },
        { en: "Life isn't fair.",               zh: "生活就是不公平。",        type: "sisTease",   speaker: "sister" },
        { en: "Mom! She won't let me in!",      zh: "妈！她不让我进！",        type: "broTell",    speaker: "brother" },
        { en: "Share, you two.",                zh: "你俩分着用。",            type: "momTired",   speaker: "mom" },
        { en: "Fine, get in here.",             zh: "行，进来吧。",            type: "sisAnnoy",   speaker: "sister" },
        { en: "Don't watch me!",                zh: "别看我！",                type: "broPout",    speaker: "brother" },
        { en: "Like I want to.",                zh: "我才不想看。",            type: "sisTease",   speaker: "sister" },
        { en: "Where's my toothbrush?",         zh: "我牙刷呢？",              type: "broCurious", speaker: "brother" },
        { en: "The blue one, dummy.",           zh: "蓝色那只，笨蛋。",        type: "sisTease",   speaker: "sister" },
        { en: "Mine is blue too!",              zh: "我的也是蓝的！",          type: "broWhine",   speaker: "brother" },
        { en: "Yours is the small one.",        zh: "你的是小的。",            type: "sisCalm",    speaker: "sister" },
        { en: "I squeezed too much.",           zh: "我挤多了。",              type: "broWhine",   speaker: "brother" },
        { en: "Now you waste it.",              zh: "你浪费了。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "Push it back!",                  zh: "塞回去！",                type: "broLoud",    speaker: "brother" },
        { en: "You can't push toothpaste back.", zh: "牙膏塞不回去的。",       type: "sisCalm",    speaker: "sister" },
        { en: "Says who?",                      zh: "谁说的？",                type: "broPout",    speaker: "brother" },
        { en: "Science.",                       zh: "科学。",                  type: "sisProud",   speaker: "sister" },
        { en: "Move, I need the sink.",         zh: "让开，我要用水池。",      type: "sisBoss",    speaker: "sister" },
        { en: "I'm using it!",                  zh: "我在用呢！",              type: "broPout",    speaker: "brother" },
        { en: "You're done. Move.",             zh: "你刷完了，让开。",        type: "sisBoss",    speaker: "sister" },
        { en: "Stop pushing me!",               zh: "别推我！",                type: "broTell",    speaker: "brother" },
        { en: "Then move.",                     zh: "那让开啊。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "Mom! She's pushing me!",         zh: "妈！她推我！",            type: "broTell",    speaker: "brother" },
        { en: "Stop touching each other.",      zh: "别互相碰。",              type: "momTired",   speaker: "mom" },
        { en: "Tell her, not me!",              zh: "说她，别说我！",          type: "broPout",    speaker: "brother" },
        { en: "Both of you. Out.",              zh: "你俩，出去。",            type: "momFirm",    speaker: "mom" }
      ]
    },

    // ====================================================
    // Day 3: 早餐桌
    // ====================================================
    {
      id: 3, theme: "早餐桌吐槽", desc: "今天吃啥？又是粥？我想吃肉",
      sentences: [
        { en: "What's for breakfast?",          zh: "今天早上吃啥？",          type: "broCurious", speaker: "brother" },
        { en: "Porridge and eggs.",             zh: "粥和鸡蛋。",              type: "casual",     speaker: "mom" },
        { en: "Again? Boring.",                 zh: "又是？无聊。",            type: "sisAnnoy",   speaker: "sister" },
        { en: "Then don't eat.",                zh: "那别吃。",                type: "momTired",   speaker: "mom" },
        { en: "I want meat.",                   zh: "我想吃肉。",              type: "broPout",    speaker: "brother" },
        { en: "Meat for breakfast?",            zh: "早上吃肉？",              type: "surprised",  speaker: "mom" },
        { en: "Yeah, like sausage.",            zh: "嗯，香肠那种。",          type: "broCute",    speaker: "brother" },
        { en: "Tomorrow, maybe.",               zh: "明天吧，可能。",          type: "casual",     speaker: "mom" },
        { en: "Can I have sugar?",              zh: "我能放糖吗？",            type: "broCute",    speaker: "brother" },
        { en: "A tiny bit.",                    zh: "就一点点。",              type: "momFirm",    speaker: "mom" },
        { en: "He put too much!",               zh: "他放太多了！",            type: "sisTell",    speaker: "sister" },
        { en: "Tattletale.",                    zh: "告状精。",                type: "broPout",    speaker: "brother" },
        { en: "Brat.",                          zh: "小屁孩。",                type: "sisTease",   speaker: "sister" },
        { en: "Eat. Both of you.",              zh: "吃。你俩。",              type: "momFirm",    speaker: "mom" },
        { en: "It's too hot.",                  zh: "太烫了。",                type: "broWhine",   speaker: "brother" },
        { en: "Blow on it.",                    zh: "吹一吹。",                type: "casual",     speaker: "mom" },
        { en: "I burned my tongue.",            zh: "舌头烫到了。",            type: "broWhine",   speaker: "brother" },
        { en: "I told you to blow.",            zh: "我让你吹了。",            type: "momTired",   speaker: "mom" },
        { en: "How do you peel this?",          zh: "这皮怎么剥？",            type: "broCurious", speaker: "brother" },
        { en: "Tap it, then roll it.",          zh: "敲一下，再滚一下。",      type: "casual",     speaker: "mom" },
        { en: "Like this?",                     zh: "这样吗？",                type: "broCurious", speaker: "brother" },
        { en: "Not that hard!",                 zh: "别那么用力！",            type: "sisAnnoy",   speaker: "sister" },
        { en: "Now it's smashed.",              zh: "现在烂了。",              type: "sisTease",   speaker: "sister" },
        { en: "Shut up.",                       zh: "闭嘴。",                  type: "broPout",    speaker: "brother" },
        { en: "Watch your mouth.",              zh: "嘴巴注意。",              type: "momFirm",    speaker: "mom" },
        { en: "This egg smells weird.",         zh: "这鸡蛋味怪。",            type: "broWhine",   speaker: "brother" },
        { en: "It's totally fine.",             zh: "好好的呢。",              type: "momTired",   speaker: "mom" },
        { en: "Can I just have milk?",          zh: "我能只喝奶吗？",          type: "broCute",    speaker: "brother" },
        { en: "Finish the egg first.",          zh: "先把蛋吃完。",            type: "momFirm",    speaker: "mom" },
        { en: "I'm done!",                      zh: "我吃完了！",              type: "sisProud",   speaker: "sister" }
      ]
    },

    // ====================================================
    // Day 4: 出门前找东西
    // ====================================================
    {
      id: 4, theme: "出门前找东西", desc: "鞋呢？书包呢？水壶呢？",
      sentences: [
        { en: "Where's my backpack?",           zh: "我书包呢？",              type: "broCurious", speaker: "brother" },
        { en: "Where you left it.",             zh: "你放哪它就在哪。",        type: "momTired",   speaker: "mom" },
        { en: "But I don't remember.",          zh: "可我不记得了。",          type: "broWhine",   speaker: "brother" },
        { en: "By the door, I think.",          zh: "门口吧，我猜。",          type: "casual",     speaker: "sister" },
        { en: "Got it!",                        zh: "找到了！",                type: "broExcite",  speaker: "brother" },
        { en: "Where's my water bottle?",       zh: "我水壶呢？",              type: "sisCalm",    speaker: "sister" },
        { en: "Did you wash it last night?",    zh: "昨晚洗了吗？",            type: "momCalling", speaker: "mom" },
        { en: "Oh no, I forgot.",               zh: "糟了，我忘了。",          type: "sisWhine",   speaker: "sister" },
        { en: "Wash it quick.",                 zh: "快洗。",                  type: "rushed",     speaker: "mom" },
        { en: "Where are my shoes?",            zh: "我鞋呢？",                type: "broCurious", speaker: "brother" },
        { en: "On your feet, hopefully.",       zh: "脚上，希望。",            type: "sisTease",   speaker: "sister" },
        { en: "The other pair!",                zh: "另一双！",                type: "broPout",    speaker: "brother" },
        { en: "Shoe rack, where else?",         zh: "鞋架，不然呢？",          type: "casual",     speaker: "mom" },
        { en: "They're not there.",             zh: "不在那。",                type: "broWhine",   speaker: "brother" },
        { en: "Look properly.",                 zh: "好好找。",                type: "momFirm",    speaker: "mom" },
        { en: "Found them under the couch.",    zh: "在沙发底下找到了。",      type: "broExcite",  speaker: "brother" },
        { en: "Why are they there?",            zh: "怎么在那？",              type: "surprised",  speaker: "mom" },
        { en: "I don't know.",                  zh: "我不知道。",              type: "broCute",    speaker: "brother" },
        { en: "Tie your laces.",                zh: "鞋带系上。",              type: "casual",     speaker: "mom" },
        { en: "I can't do it!",                 zh: "我系不来！",              type: "broWhine",   speaker: "brother" },
        { en: "You learned last week.",         zh: "你上周学过了。",          type: "momTired",   speaker: "mom" },
        { en: "I forgot how.",                  zh: "我忘了。",                type: "broWhine",   speaker: "brother" },
        { en: "Bunny ears, remember?",          zh: "兔耳朵，记得吗？",        type: "momSoft",    speaker: "mom" },
        { en: "Oh, right.",                     zh: "哦，对。",                type: "broCute",    speaker: "brother" },
        { en: "Did you grab your homework?",    zh: "作业拿了吗？",            type: "casual",     speaker: "mom" },
        { en: "Yes!",                           zh: "拿了！",                  type: "sisProud",   speaker: "sister" },
        { en: "Umm... I'll get it.",            zh: "呃……我去拿。",            type: "broPout",    speaker: "brother" },
        { en: "Hurry, the bus!",                zh: "快，公交车！",            type: "rushed",     speaker: "mom" },
        { en: "Coming, coming!",                zh: "来了来了！",              type: "rushed",     speaker: "brother" },
        { en: "Bye, Mom!",                      zh: "拜，妈！",                type: "sisCalm",    speaker: "sister" }
      ]
    },

    // ====================================================
    // Day 5: 放学回家路上
    // ====================================================
    {
      id: 5, theme: "放学回家路上", desc: "今天怎么样？我饿了。他打我了！",
      sentences: [
        { en: "How was school?",                zh: "学校咋样？",              type: "momCheer",   speaker: "mom" },
        { en: "Fine.",                          zh: "还行。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Just fine?",                     zh: "就还行？",                type: "momTease",   speaker: "mom" },
        { en: "Yeah, normal.",                  zh: "嗯，正常。",              type: "sisCalm",    speaker: "sister" },
        { en: "I had a great day!",             zh: "我今天超棒！",            type: "broExcite",  speaker: "brother" },
        { en: "Tell me!",                       zh: "说说看！",                type: "momCheer",   speaker: "mom" },
        { en: "We had pizza for lunch!",        zh: "中午吃披萨！",            type: "broExcite",  speaker: "brother" },
        { en: "Lucky you.",                     zh: "你真走运。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "Mom, I'm starving.",             zh: "妈，我饿死了。",          type: "broWhine",   speaker: "brother" },
        { en: "You just had lunch.",            zh: "你刚吃过午饭。",          type: "momTired",   speaker: "mom" },
        { en: "That was hours ago!",            zh: "那是几小时前了！",        type: "broWhine",   speaker: "brother" },
        { en: "Any snacks at home?",            zh: "家里有零食吗？",          type: "sisCalm",    speaker: "sister" },
        { en: "Some crackers.",                 zh: "有点饼干。",              type: "casual",     speaker: "mom" },
        { en: "Mom, he hit me today.",          zh: "妈，他今天打我了。",      type: "broTell",    speaker: "brother" },
        { en: "Who?",                           zh: "谁？",                    type: "momWorry",   speaker: "mom" },
        { en: "A boy in my class.",             zh: "我们班一个男生。",        type: "broPout",    speaker: "brother" },
        { en: "Did you tell the teacher?",      zh: "告诉老师了吗？",          type: "momCalm",    speaker: "mom" },
        { en: "Yeah, she yelled at him.",       zh: "说了，老师骂他了。",      type: "broCalm",    speaker: "brother" },
        { en: "Good.",                          zh: "好。",                    type: "momCalm",    speaker: "mom" },
        { en: "He's a crybaby.",                zh: "他是个爱哭鬼。",          type: "sisTease",   speaker: "sister" },
        { en: "Am not!",                        zh: "我不是！",                type: "broPout",    speaker: "brother" },
        { en: "Stop teasing him.",              zh: "别逗他。",                type: "momFirm",    speaker: "mom" },
        { en: "I got a star today.",            zh: "我今天得了星星。",        type: "sisProud",   speaker: "sister" },
        { en: "For what?",                      zh: "为啥？",                  type: "momCheer",   speaker: "mom" },
        { en: "Best handwriting.",              zh: "字写得最好。",            type: "sisProud",   speaker: "sister" },
        { en: "Wow, proud of you.",             zh: "哇，为你骄傲。",          type: "momCheer",   speaker: "mom" },
        { en: "I never get stars.",             zh: "我从来得不到星星。",      type: "broPout",    speaker: "brother" },
        { en: "You will.",                      zh: "你会的。",                type: "momSoft",    speaker: "mom" },
        { en: "Carry my bag, Mom?",             zh: "妈，帮我背包？",          type: "broCute",    speaker: "brother" },
        { en: "Carry your own bag.",            zh: "自己背。",                type: "momFirm",    speaker: "mom" }
      ]
    },

    // ====================================================
    // Day 6: 厨房帮忙
    // ====================================================
    {
      id: 6, theme: "厨房帮忙", desc: "妈这个皮怎么剥？小心烫！别碰刀",
      sentences: [
        { en: "Mom, can I help?",               zh: "妈，我能帮忙吗？",        type: "broCute",    speaker: "brother" },
        { en: "Sure, wash your hands first.",   zh: "好啊，先洗手。",          type: "momCheer",   speaker: "mom" },
        { en: "What are we making?",            zh: "我们做啥？",              type: "broCurious", speaker: "brother" },
        { en: "Tomato and eggs.",               zh: "西红柿炒蛋。",            type: "casual",     speaker: "mom" },
        { en: "Yum.",                           zh: "好吃。",                  type: "sisCalm",    speaker: "sister" },
        { en: "How do you peel this?",          zh: "这皮怎么剥？",            type: "broCurious", speaker: "brother" },
        { en: "Cut a small cross on top.",      zh: "顶上切个十字。",          type: "casual",     speaker: "mom" },
        { en: "Then boiling water.",            zh: "然后开水。",              type: "casual",     speaker: "mom" },
        { en: "Like this?",                     zh: "这样吗？",                type: "broCurious", speaker: "brother" },
        { en: "Careful, it's hot!",             zh: "小心，烫！",              type: "momWorry",   speaker: "mom" },
        { en: "Ow!",                            zh: "哎哟！",                  type: "broCry",     speaker: "brother" },
        { en: "I told you!",                    zh: "我说了的！",              type: "momWorry",   speaker: "mom" },
        { en: "Run it under cold water.",       zh: "用凉水冲。",              type: "momFirm",    speaker: "mom" },
        { en: "It hurts.",                      zh: "好疼。",                  type: "broWhine",   speaker: "brother" },
        { en: "Let me see.",                    zh: "我看看。",                type: "momWorry",   speaker: "mom" },
        { en: "It's just red.",                 zh: "就有点红。",              type: "momSoft",    speaker: "mom" },
        { en: "Can I cut something?",           zh: "我能切点啥吗？",          type: "sisSweet",   speaker: "sister" },
        { en: "Use this small knife.",          zh: "用这把小刀。",            type: "momCalm",    speaker: "mom" },
        { en: "Don't cut your fingers.",        zh: "别切到手。",              type: "momWorry",   speaker: "mom" },
        { en: "I know, Mom.",                   zh: "我知道，妈。",            type: "sisAnnoy",   speaker: "sister" },
        { en: "Curl your fingers in.",          zh: "手指弯进去。",            type: "momCalm",    speaker: "mom" },
        { en: "Got it.",                        zh: "懂了。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Can I try?",                     zh: "我能试吗？",              type: "broCute",    speaker: "brother" },
        { en: "No, you're too small.",          zh: "不行，你太小。",          type: "momFirm",    speaker: "mom" },
        { en: "That's not fair!",               zh: "不公平！",                type: "broPout",    speaker: "brother" },
        { en: "You can stir.",                  zh: "你可以搅。",              type: "momSoft",    speaker: "mom" },
        { en: "It's spitting at me!",           zh: "它溅我！",                type: "broScared",  speaker: "brother" },
        { en: "Stand back a little.",           zh: "退后点。",                type: "momCalm",    speaker: "mom" },
        { en: "Smells good already.",           zh: "已经好香了。",            type: "sisCalm",    speaker: "sister" },
        { en: "Taste this, salty enough?",      zh: "尝尝，咸味够吗？",        type: "momCheer",   speaker: "mom" }
      ]
    },

    // ====================================================
    // Day 7: 晚饭餐桌
    // ====================================================
    {
      id: 7, theme: "晚饭餐桌", desc: "这些都是什么菜？我想吃肉",
      sentences: [
        { en: "Dinner!",                        zh: "吃饭啦！",                type: "momCalling", speaker: "mom" },
        { en: "Coming!",                        zh: "来了！",                  type: "sisCalm",    speaker: "sister" },
        { en: "What's all this?",               zh: "这些都是啥？",            type: "broCurious", speaker: "brother" },
        { en: "Greens, tofu, and fish.",        zh: "青菜、豆腐、鱼。",        type: "casual",     speaker: "mom" },
        { en: "Where's the meat?",              zh: "肉呢？",                  type: "broPout",    speaker: "brother" },
        { en: "Fish is meat.",                  zh: "鱼就是肉。",              type: "momCalm",    speaker: "mom" },
        { en: "I mean real meat.",              zh: "我说真肉。",              type: "broPout",    speaker: "brother" },
        { en: "Fish is real meat.",             zh: "鱼就是真肉。",            type: "sisTease",   speaker: "sister" },
        { en: "I want pork.",                   zh: "我想吃猪肉。",            type: "broWhine",   speaker: "brother" },
        { en: "Tomorrow.",                      zh: "明天。",                  type: "momFirm",    speaker: "mom" },
        { en: "Pass the soy sauce.",            zh: "递酱油。",                type: "sisCalm",    speaker: "sister" },
        { en: "Here.",                          zh: "给。",                    type: "broCalm",    speaker: "brother" },
        { en: "Don't grab.",                    zh: "别抢。",                  type: "momFirm",    speaker: "mom" },
        { en: "Eat your vegetables.",           zh: "把菜吃了。",              type: "momFirm",    speaker: "mom" },
        { en: "I don't like the green one.",    zh: "我不喜欢绿的那个。",      type: "broWhine",   speaker: "brother" },
        { en: "It's called bok choy.",          zh: "那叫小白菜。",            type: "sisCalm",    speaker: "sister" },
        { en: "Smarty pants.",                  zh: "小聪明。",                type: "broTease",   speaker: "brother" },
        { en: "Three more bites.",              zh: "再吃三口。",              type: "momFirm",    speaker: "mom" },
        { en: "Two.",                           zh: "两口。",                  type: "broCute",    speaker: "brother" },
        { en: "Three.",                         zh: "三口。",                  type: "momFirm",    speaker: "mom" },
        { en: "Fine.",                          zh: "行吧。",                  type: "broPout",    speaker: "brother" },
        { en: "This fish is really good.",      zh: "这鱼真好吃。",            type: "sisCalm",    speaker: "sister" },
        { en: "Thanks, sweetie.",               zh: "谢谢，宝贝。",            type: "momSoft",    speaker: "mom" },
        { en: "Watch the bones.",               zh: "小心刺。",                type: "momWorry",   speaker: "mom" },
        { en: "There's one in my mouth!",       zh: "我嘴里一根！",            type: "broScared",  speaker: "brother" },
        { en: "Spit it out, slowly.",           zh: "慢慢吐出来。",            type: "momCalm",    speaker: "mom" },
        { en: "Got it.",                        zh: "出来了。",                type: "broCalm",    speaker: "brother" },
        { en: "Can I be excused?",              zh: "我能下桌吗？",            type: "sisSweet",   speaker: "sister" },
        { en: "Finish your rice first.",        zh: "先把饭吃完。",            type: "momFirm",    speaker: "mom" },
        { en: "Whose turn for dishes?",         zh: "今天谁洗碗？",            type: "casual",     speaker: "mom" }
      ]
    },

    // ====================================================
    // Day 8: 写作业拖延
    // ====================================================
    {
      id: 8, theme: "写作业拖延", desc: "不会、累了、我休息一下",
      sentences: [
        { en: "Homework time.",                 zh: "写作业时间。",            type: "momFirm",    speaker: "mom" },
        { en: "Five more minutes?",             zh: "再玩五分钟？",            type: "broWhine",   speaker: "brother" },
        { en: "Now.",                           zh: "现在。",                  type: "momFirm",    speaker: "mom" },
        { en: "I don't have any today.",        zh: "我今天没作业。",          type: "broCute",    speaker: "brother" },
        { en: "Show me your notebook.",         zh: "本子给我看看。",          type: "momCalm",    speaker: "mom" },
        { en: "Umm... let me find it.",         zh: "呃……我找找。",            type: "broPout",    speaker: "brother" },
        { en: "Caught you.",                    zh: "抓到你了。",              type: "momTease",   speaker: "mom" },
        { en: "How much do you have?",          zh: "你有多少？",              type: "sisCalm",    speaker: "sister" },
        { en: "Tons.",                          zh: "一堆。",                  type: "broWhine",   speaker: "brother" },
        { en: "I'm already done.",              zh: "我都写完了。",            type: "sisProud",   speaker: "sister" },
        { en: "Show-off.",                      zh: "炫耀狂。",                type: "broPout",    speaker: "brother" },
        { en: "Mom, what's eight times seven?", zh: "妈，八乘七多少？",        type: "broCurious", speaker: "brother" },
        { en: "Think first.",                   zh: "先自己想。",              type: "momFirm",    speaker: "mom" },
        { en: "Fifty... six?",                  zh: "五十……六？",              type: "broCute",    speaker: "brother" },
        { en: "Right.",                         zh: "对的。",                  type: "momCheer",   speaker: "mom" },
        { en: "I don't get this.",              zh: "我不懂这个。",            type: "broWhine",   speaker: "brother" },
        { en: "Read it again.",                 zh: "再读一遍。",              type: "momCalm",    speaker: "mom" },
        { en: "I read it three times!",         zh: "我读三遍了！",            type: "broWhine",   speaker: "brother" },
        { en: "Then read it slowly.",           zh: "那就慢慢读。",            type: "momTired",   speaker: "mom" },
        { en: "Need help?",                     zh: "要帮忙吗？",              type: "sisSweet",   speaker: "sister" },
        { en: "Yeah, please.",                  zh: "好，麻烦了。",            type: "broCute",    speaker: "brother" },
        { en: "It's actually easy.",            zh: "其实挺简单的。",          type: "sisCalm",    speaker: "sister" },
        { en: "Not for me.",                    zh: "对我来说不简单。",        type: "broPout",    speaker: "brother" },
        { en: "Look, like this.",               zh: "看，这样。",              type: "sisCalm",    speaker: "sister" },
        { en: "Ohhh, I see.",                   zh: "哦——我懂了。",            type: "broExcite",  speaker: "brother" },
        { en: "Can I rest now?",                zh: "我能休息了吗？",          type: "broCute",    speaker: "brother" },
        { en: "You did one problem.",           zh: "你才做一题。",            type: "momTired",   speaker: "mom" },
        { en: "My hand hurts.",                 zh: "手疼。",                  type: "broWhine",   speaker: "brother" },
        { en: "Keep going.",                    zh: "继续。",                  type: "momFirm",    speaker: "mom" },
        { en: "Finally done!",                  zh: "终于写完了！",            type: "broExcite",  speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 9: 抢电视抢遥控器
    // ====================================================
    {
      id: 9, theme: "抢电视遥控器", desc: "我先看的！换台！妈她欺负我！",
      sentences: [
        { en: "I want to watch cartoons.",      zh: "我要看动画。",            type: "broWhine",   speaker: "brother" },
        { en: "I'm watching this.",             zh: "我在看这个。",            type: "sisCalm",    speaker: "sister" },
        { en: "But it's boring!",               zh: "可这个无聊！",            type: "broPout",    speaker: "brother" },
        { en: "Then go play.",                  zh: "那你去玩。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "Give me the remote.",            zh: "把遥控器给我。",          type: "broLoud",    speaker: "brother" },
        { en: "No.",                            zh: "不给。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Pleeease.",                      zh: "求你啦——",                type: "broCute",    speaker: "brother" },
        { en: "I said no.",                     zh: "我说不给。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "You always pick.",               zh: "你总是你选。",            type: "broPout",    speaker: "brother" },
        { en: "Because I'm older.",             zh: "因为我大。",              type: "sisProud",   speaker: "sister" },
        { en: "Not fair!",                      zh: "不公平！",                type: "broWhine",   speaker: "brother" },
        { en: "Life isn't fair.",               zh: "人生本来就不公平。",      type: "sisTease",   speaker: "sister" },
        { en: "Mom! She won't share!",          zh: "妈！她不让我看！",        type: "broTell",    speaker: "brother" },
        { en: "Take turns.",                    zh: "轮流看。",                type: "momCalling", speaker: "mom" },
        { en: "Ten more minutes.",              zh: "再十分钟。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "Five.",                          zh: "五分钟。",                type: "broPout",    speaker: "brother" },
        { en: "Ten or nothing.",                zh: "十分钟，不然没得看。",    type: "sisBoss",    speaker: "sister" },
        { en: "Okay, ten.",                     zh: "好吧，十分钟。",          type: "broPout",    speaker: "brother" },
        { en: "Stop sitting on me.",            zh: "别坐我身上。",            type: "sisAnnoy",   speaker: "sister" },
        { en: "I'm next to you.",               zh: "我在你旁边。",            type: "broCalm",    speaker: "brother" },
        { en: "Your foot's on me.",             zh: "你脚踩我了。",            type: "sisAnnoy",   speaker: "sister" },
        { en: "Sorry.",                         zh: "抱歉。",                  type: "broCalm",    speaker: "brother" },
        { en: "Volume down.",                   zh: "声音小点。",              type: "momCalling", speaker: "mom" },
        { en: "It's not loud!",                 zh: "不大声啊！",              type: "broLoud",    speaker: "brother" },
        { en: "Yes, it is.",                    zh: "就是大声。",              type: "momFirm",    speaker: "mom" },
        { en: "My turn now.",                   zh: "轮到我了。",              type: "broCalm",    speaker: "brother" },
        { en: "One more minute.",               zh: "再一分钟。",              type: "sisSweet",   speaker: "sister" },
        { en: "You said that already.",         zh: "你刚说过了。",            type: "broPout",    speaker: "brother" },
        { en: "Fine, here.",                    zh: "行，给你。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "Thank you.",                     zh: "谢啦。",                  type: "broCute",    speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 10: 有人敲门
    // ====================================================
    {
      id: 10, theme: "有人敲门", desc: "谁啊？快藏起来！是收快递的",
      sentences: [
        { en: "Someone's knocking.",            zh: "有人敲门。",              type: "broCurious", speaker: "brother" },
        { en: "Go see who.",                    zh: "去看看是谁。",            type: "casual",     speaker: "mom" },
        { en: "You go.",                        zh: "你去。",                  type: "broPout",    speaker: "brother" },
        { en: "No, you go.",                    zh: "你去。",                  type: "sisAnnoy",   speaker: "sister" },
        { en: "I'm scared.",                    zh: "我怕。",                  type: "broScared",  speaker: "brother" },
        { en: "Of what?",                       zh: "怕啥？",                  type: "sisTease",   speaker: "sister" },
        { en: "Strangers.",                     zh: "陌生人。",                type: "broScared",  speaker: "brother" },
        { en: "I'll go.",                       zh: "我去。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Ask who first!",                 zh: "先问是谁！",              type: "momCalling", speaker: "mom" },
        { en: "Who is it?",                     zh: "谁啊？",                  type: "sisCalm",    speaker: "sister" },
        { en: "Delivery!",                      zh: "快递！",                  type: "casual",     speaker: "dad" },
        { en: "Hold on.",                       zh: "等一下。",                type: "casual",     speaker: "sister" },
        { en: "Mom, a package.",                zh: "妈，包裹。",              type: "broExcite",  speaker: "brother" },
        { en: "What's inside?",                 zh: "里面啥？",                type: "broCurious", speaker: "brother" },
        { en: "Don't know.",                    zh: "不知道。",                type: "casual",     speaker: "mom" },
        { en: "Can we open it?",                zh: "能打开吗？",              type: "broExcite",  speaker: "brother" },
        { en: "Wait for me.",                   zh: "等我一下。",              type: "casual",     speaker: "mom" },
        { en: "Hurry!",                         zh: "快点！",                  type: "broExcite",  speaker: "brother" },
        { en: "Where are the scissors?",        zh: "剪刀呢？",                type: "casual",     speaker: "mom" },
        { en: "Kitchen drawer.",                zh: "厨房抽屉。",              type: "sisCalm",    speaker: "sister" },
        { en: "I'll get them!",                 zh: "我去拿！",                type: "broExcite",  speaker: "brother" },
        { en: "Careful, sharp.",                zh: "小心，尖。",              type: "momWorry",   speaker: "mom" },
        { en: "Got 'em.",                       zh: "拿到了。",                type: "broCalm",    speaker: "brother" },
        { en: "Pass them properly.",            zh: "好好递。",                type: "momFirm",    speaker: "mom" },
        { en: "Cut here.",                      zh: "这里剪。",                type: "sisCalm",    speaker: "sister" },
        { en: "Don't push.",                    zh: "别挤。",                  type: "sisAnnoy",   speaker: "sister" },
        { en: "I want to see!",                 zh: "我要看！",                type: "broLoud",    speaker: "brother" },
        { en: "It's just diapers.",             zh: "就是尿不湿。",            type: "sisCalm",    speaker: "sister" },
        { en: "For who?",                       zh: "给谁的？",                type: "broCurious", speaker: "brother" },
        { en: "Auntie's baby.",                 zh: "阿姨的宝宝。",            type: "casual",     speaker: "mom" }
      ]
    },

    // ====================================================
    // Day 11: 周末赖床
    // ====================================================
    {
      id: 11, theme: "周末赖床", desc: "今天不上学！再睡半小时！",
      sentences: [
        { en: "It's Saturday!",                 zh: "周六啦！",                type: "broExcite",  speaker: "brother" },
        { en: "Let me sleep in.",               zh: "让我睡懒觉。",            type: "sisWhine",   speaker: "sister" },
        { en: "Wake up, lazy bones.",           zh: "起床，懒骨头。",          type: "momTease",   speaker: "mom" },
        { en: "It's the weekend!",              zh: "周末啊！",                type: "sisWhine",   speaker: "sister" },
        { en: "Half an hour more?",             zh: "再半小时？",              type: "sisSweet",   speaker: "sister" },
        { en: "Fine, half an hour.",            zh: "行，半小时。",            type: "momSoft",    speaker: "mom" },
        { en: "I'm already up!",                zh: "我起来了！",              type: "broExcite",  speaker: "brother" },
        { en: "Of course you are.",             zh: "你当然起来了。",          type: "sisAnnoy",   speaker: "sister" },
        { en: "Let's play!",                    zh: "我们玩吧！",              type: "broExcite",  speaker: "brother" },
        { en: "Too early.",                     zh: "太早了。",                type: "sisWhine",   speaker: "sister" },
        { en: "It's nine.",                     zh: "都九点了。",              type: "broCalm",    speaker: "brother" },
        { en: "Exactly. Too early.",            zh: "可不是，太早。",          type: "sisCalm",    speaker: "sister" },
        { en: "Mom, can we go out?",            zh: "妈，能出去玩吗？",        type: "broCute",    speaker: "brother" },
        { en: "Eat first.",                     zh: "先吃饭。",                type: "momFirm",    speaker: "mom" },
        { en: "I'm not hungry.",                zh: "我不饿。",                type: "broPout",    speaker: "brother" },
        { en: "Eat anyway.",                    zh: "也得吃。",                type: "momTired",   speaker: "mom" },
        { en: "Where's Dad?",                   zh: "爸爸呢？",                type: "broCurious", speaker: "brother" },
        { en: "Still sleeping.",                zh: "还在睡。",                type: "casual",     speaker: "mom" },
        { en: "Let's wake him!",                zh: "我们叫醒他！",            type: "broSilly",   speaker: "brother" },
        { en: "Don't you dare.",                zh: "你敢。",                  type: "momFirm",    speaker: "mom" },
        { en: "Awww.",                          zh: "哎呀。",                  type: "broPout",    speaker: "brother" },
        { en: "Let him sleep.",                 zh: "让他睡。",                type: "momSoft",    speaker: "mom" },
        { en: "He worked late.",                zh: "他昨天加班。",            type: "casual",     speaker: "mom" },
        { en: "Can we go to the park?",         zh: "我们能去公园吗？",        type: "broExcite",  speaker: "brother" },
        { en: "After lunch.",                   zh: "午饭后。",                type: "momCalm",    speaker: "mom" },
        { en: "That's so far!",                 zh: "那好远！",                type: "broWhine",   speaker: "brother" },
        { en: "It's three hours.",              zh: "就三小时。",              type: "sisTease",   speaker: "sister" },
        { en: "Three hours is forever.",        zh: "三小时跟一辈子似的。",    type: "broWhine",   speaker: "brother" },
        { en: "Drama queen.",                   zh: "戏精。",                  type: "sisTease",   speaker: "sister" },
        { en: "I'm a king.",                    zh: "我是国王。",              type: "broPout",    speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 12: 超市买东西
    // ====================================================
    {
      id: 12, theme: "超市买东西", desc: "妈我要这个！太贵了！偷偷放购物车",
      sentences: [
        { en: "Stay close, you two.",           zh: "你俩跟紧点。",            type: "momFirm",    speaker: "mom" },
        { en: "Can I push the cart?",           zh: "我能推车吗？",            type: "broExcite",  speaker: "brother" },
        { en: "Carefully.",                     zh: "小心点。",                type: "momCalm",    speaker: "mom" },
        { en: "Don't bump people.",             zh: "别撞到人。",              type: "sisBoss",    speaker: "sister" },
        { en: "I know!",                        zh: "我知道！",                type: "broPout",    speaker: "brother" },
        { en: "Mom, can I get this?",           zh: "妈，我能买这个吗？",      type: "sisSweet",   speaker: "sister" },
        { en: "What is it?",                    zh: "啥东西？",                type: "casual",     speaker: "mom" },
        { en: "Strawberry yogurt.",             zh: "草莓酸奶。",              type: "sisCalm",    speaker: "sister" },
        { en: "Sure, one.",                     zh: "行，一个。",              type: "momCalm",    speaker: "mom" },
        { en: "I want chips!",                  zh: "我要薯片！",              type: "broExcite",  speaker: "brother" },
        { en: "Not today.",                     zh: "今天不行。",              type: "momFirm",    speaker: "mom" },
        { en: "Whyyy?",                         zh: "为啥呀——",                type: "broWhine",   speaker: "brother" },
        { en: "Too much junk.",                 zh: "垃圾食品太多。",          type: "momTired",   speaker: "mom" },
        { en: "Just one bag!",                  zh: "就一袋！",                type: "broWhine",   speaker: "brother" },
        { en: "I said no.",                     zh: "我说不行。",              type: "momFirm",    speaker: "mom" },
        { en: "He put it in the cart!",         zh: "他放购物车了！",          type: "sisTell",    speaker: "sister" },
        { en: "Tattletale!",                    zh: "告状精！",                type: "broPout",    speaker: "brother" },
        { en: "Put it back.",                   zh: "放回去。",                type: "momFirm",    speaker: "mom" },
        { en: "Fine.",                          zh: "好吧。",                  type: "broPout",    speaker: "brother" },
        { en: "How much is this?",              zh: "这个多少钱？",            type: "broCurious", speaker: "brother" },
        { en: "Too expensive.",                 zh: "太贵了。",                type: "momCalm",    speaker: "mom" },
        { en: "But it's so cool.",              zh: "可是好酷啊。",            type: "broWhine",   speaker: "brother" },
        { en: "Maybe for your birthday.",       zh: "生日也许吧。",            type: "momSoft",    speaker: "mom" },
        { en: "My birthday is forever away.",   zh: "我生日还远着呢。",        type: "broPout",    speaker: "brother" },
        { en: "Don't touch everything.",        zh: "别啥都摸。",              type: "momFirm",    speaker: "mom" },
        { en: "Where are we now?",              zh: "我们到哪了？",            type: "broCurious", speaker: "brother" },
        { en: "Vegetables.",                    zh: "蔬菜区。",                type: "sisCalm",    speaker: "sister" },
        { en: "Pick a cucumber.",               zh: "挑根黄瓜。",              type: "casual",     speaker: "mom" },
        { en: "Which one's good?",              zh: "哪根好？",                type: "broCurious", speaker: "brother" },
        { en: "Firm and green.",                zh: "硬的、绿的。",            type: "momCalm",    speaker: "mom" }
      ]
    },

    // ====================================================
    // Day 13: 生病看医生
    // ====================================================
    {
      id: 13, theme: "生病看医生", desc: "头疼、不想吃药、能不能请假",
      sentences: [
        { en: "Mom, my head hurts.",            zh: "妈，我头疼。",            type: "broWhine",   speaker: "brother" },
        { en: "Let me feel.",                   zh: "我摸摸。",                type: "momWorry",   speaker: "mom" },
        { en: "You're warm.",                   zh: "你有点烫。",              type: "momWorry",   speaker: "mom" },
        { en: "Am I sick?",                     zh: "我生病了？",              type: "broScared",  speaker: "brother" },
        { en: "Maybe a fever.",                 zh: "可能发烧。",              type: "momCalm",    speaker: "mom" },
        { en: "Can I skip school?",             zh: "我能请假吗？",            type: "broCute",    speaker: "brother" },
        { en: "Let's see the doctor.",          zh: "去看医生。",              type: "momCalm",    speaker: "mom" },
        { en: "I don't want shots.",            zh: "我不想打针。",            type: "broScared",  speaker: "brother" },
        { en: "Maybe no shots.",                zh: "不一定打针。",            type: "momSoft",    speaker: "mom" },
        { en: "Where does it hurt?",            zh: "哪里疼？",                type: "casual",     speaker: "doctor" },
        { en: "Head and throat.",               zh: "头，还有喉咙。",          type: "broCalm",    speaker: "brother" },
        { en: "Open your mouth.",               zh: "张嘴。",                  type: "casual",     speaker: "doctor" },
        { en: "Aaah.",                          zh: "啊——",                    type: "broCalm",    speaker: "brother" },
        { en: "Wider.",                         zh: "再大点。",                type: "casual",     speaker: "doctor" },
        { en: "It's a little red.",             zh: "有点红。",                type: "casual",     speaker: "doctor" },
        { en: "Is it bad?",                     zh: "严重吗？",                type: "momWorry",   speaker: "mom" },
        { en: "Just a cold.",                   zh: "就是感冒。",              type: "casual",     speaker: "doctor" },
        { en: "Drink lots of water.",           zh: "多喝水。",                type: "casual",     speaker: "doctor" },
        { en: "And rest at home.",              zh: "在家休息。",              type: "casual",     speaker: "doctor" },
        { en: "No school?",                     zh: "不上学？",                type: "broExcite",  speaker: "brother" },
        { en: "Two days off.",                  zh: "休两天。",                type: "casual",     speaker: "doctor" },
        { en: "Yes!",                           zh: "耶！",                    type: "broExcite",  speaker: "brother" },
        { en: "You're sick, not winning.",      zh: "你生病了，又不是中奖。",  type: "momTired",   speaker: "mom" },
        { en: "Drink this medicine.",           zh: "把这药喝了。",            type: "momFirm",    speaker: "mom" },
        { en: "It's so bitter!",                zh: "好苦啊！",                type: "broWhine",   speaker: "brother" },
        { en: "Just gulp it.",                  zh: "一口喝下去。",            type: "momFirm",    speaker: "mom" },
        { en: "Water after?",                   zh: "喝完水？",                type: "broCute",    speaker: "brother" },
        { en: "Right after.",                   zh: "马上就能。",              type: "momSoft",    speaker: "mom" },
        { en: "Yuck.",                          zh: "呸。",                    type: "broWhine",   speaker: "brother" },
        { en: "Good boy.",                      zh: "乖。",                    type: "momSoft",    speaker: "mom" }
      ]
    },

    // ====================================================
    // Day 14: 洗澡磨蹭
    // ====================================================
    {
      id: 14, theme: "洗澡磨蹭", desc: "水太烫！没毛巾！头发湿的！",
      sentences: [
        { en: "Bath time!",                     zh: "洗澡啦！",                type: "momCalling", speaker: "mom" },
        { en: "Not yet.",                       zh: "还不要。",                type: "broWhine",   speaker: "brother" },
        { en: "Now.",                           zh: "现在。",                  type: "momFirm",    speaker: "mom" },
        { en: "I want to go first.",            zh: "我先洗。",                type: "sisCalm",    speaker: "sister" },
        { en: "No, me!",                        zh: "不，我！",                type: "broLoud",    speaker: "brother" },
        { en: "Ladies first.",                  zh: "女士优先。",              type: "sisTease",   speaker: "sister" },
        { en: "Mom, she always says that!",     zh: "妈，她总这么说！",        type: "broTell",    speaker: "brother" },
        { en: "Take turns.",                    zh: "轮流。",                  type: "momTired",   speaker: "mom" },
        { en: "Fine, you go.",                  zh: "行，你去。",              type: "broPout",    speaker: "brother" },
        { en: "Water's too cold.",              zh: "水太凉。",                type: "sisWhine",   speaker: "sister" },
        { en: "Turn up the hot.",               zh: "开热水。",                type: "momCalling", speaker: "mom" },
        { en: "Now too hot!",                   zh: "现在又太烫！",            type: "sisWhine",   speaker: "sister" },
        { en: "Mix them!",                      zh: "兑一下！",                type: "momTired",   speaker: "mom" },
        { en: "Did you wash your hair?",        zh: "头发洗了吗？",            type: "momCalling", speaker: "mom" },
        { en: "Doing it now!",                  zh: "正洗呢！",                type: "sisCalm",    speaker: "sister" },
        { en: "Soap in my eyes!",               zh: "肥皂进眼睛了！",          type: "sisWhine",   speaker: "sister" },
        { en: "Rinse with water!",              zh: "用水冲！",                type: "momCalling", speaker: "mom" },
        { en: "My turn yet?",                   zh: "轮到我了没？",            type: "broWhine",   speaker: "brother" },
        { en: "Almost.",                        zh: "马上。",                  type: "sisCalm",    speaker: "sister" },
        { en: "She's been forever!",            zh: "她洗超久了！",            type: "broTell",    speaker: "brother" },
        { en: "I'm coming out!",                zh: "我出来了！",              type: "sisCalm",    speaker: "sister" },
        { en: "Where's my towel?",              zh: "我毛巾呢？",              type: "sisCurious", speaker: "sister" },
        { en: "On the hook.",                   zh: "挂钩上。",                type: "casual",     speaker: "mom" },
        { en: "It's wet.",                      zh: "湿的。",                  type: "sisAnnoy",   speaker: "sister" },
        { en: "Use the other one.",             zh: "用另一条。",              type: "casual",     speaker: "mom" },
        { en: "My turn!",                       zh: "到我了！",                type: "broExcite",  speaker: "brother" },
        { en: "Don't slip!",                    zh: "别滑倒！",                type: "momWorry",   speaker: "mom" },
        { en: "Dry your hair properly.",        zh: "头发好好擦。",            type: "momCalling", speaker: "mom" },
        { en: "I did.",                         zh: "擦了。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Still dripping.",                zh: "还在滴水。",              type: "momTired",   speaker: "mom" }
      ]
    },

    // ====================================================
    // Day 15: 睡前一万个理由
    // ====================================================
    {
      id: 15, theme: "睡前一万个理由", desc: "还不困！再讲一个故事！我口渴！",
      sentences: [
        { en: "Bedtime.",                       zh: "睡觉时间。",              type: "momSoft",    speaker: "mom" },
        { en: "I'm not tired.",                 zh: "我不困。",                type: "broWhine",   speaker: "brother" },
        { en: "It's nine-thirty.",              zh: "都九点半了。",            type: "momCalm",    speaker: "mom" },
        { en: "I'm wide awake.",                zh: "我特精神。",              type: "broExcite",  speaker: "brother" },
        { en: "In bed. Now.",                   zh: "上床。现在。",            type: "momFirm",    speaker: "mom" },
        { en: "One more story?",                zh: "再讲一个故事？",          type: "broCute",    speaker: "brother" },
        { en: "I read you two.",                zh: "我读两个了。",            type: "momTired",   speaker: "mom" },
        { en: "A short one!",                   zh: "短的！",                  type: "broCute",    speaker: "brother" },
        { en: "Fine, short.",                   zh: "行，短的。",              type: "momSoft",    speaker: "mom" },
        { en: "I want one too.",                zh: "我也要一个。",            type: "sisSweet",   speaker: "sister" },
        { en: "You're nine!",                   zh: "你都九岁了！",            type: "momTease",   speaker: "mom" },
        { en: "So?",                            zh: "那又咋样？",              type: "sisSweet",   speaker: "sister" },
        { en: "Same one for both.",             zh: "一个你俩听。",            type: "momCalm",    speaker: "mom" },
        { en: "I'm thirsty.",                   zh: "我口渴。",                type: "broWhine",   speaker: "brother" },
        { en: "Drink. Then bed.",               zh: "喝。然后睡。",            type: "momFirm",    speaker: "mom" },
        { en: "I need to pee.",                 zh: "我要尿尿。",              type: "broCute",    speaker: "brother" },
        { en: "You just went.",                 zh: "你刚去过。",              type: "momTired",   speaker: "mom" },
        { en: "I have to go again.",            zh: "我又要去。",              type: "broWhine",   speaker: "brother" },
        { en: "Hurry.",                         zh: "快点。",                  type: "momTired",   speaker: "mom" },
        { en: "Lights off?",                    zh: "灯关吗？",                type: "casual",     speaker: "mom" },
        { en: "Leave a little on.",             zh: "留一点。",                type: "broScared",  speaker: "brother" },
        { en: "Night light?",                   zh: "小夜灯？",                type: "momSoft",    speaker: "mom" },
        { en: "Yeah.",                          zh: "嗯。",                    type: "broCalm",    speaker: "brother" },
        { en: "Stop kicking me.",               zh: "别踢我。",                type: "sisAnnoy",   speaker: "sister" },
        { en: "We're in different beds!",       zh: "我们又不睡一张床！",      type: "broPout",    speaker: "brother" },
        { en: "Tuck me in, Mom?",               zh: "妈，给我盖被？",          type: "broCute",    speaker: "brother" },
        { en: "Coming, baby.",                  zh: "来啦，宝贝。",            type: "momSoft",    speaker: "mom" },
        { en: "Good night, Mom.",               zh: "晚安，妈。",              type: "sisCalm",    speaker: "sister" },
        { en: "Sweet dreams.",                  zh: "好梦。",                  type: "momSoft",    speaker: "mom" },
        { en: "Love you.",                      zh: "爱你。",                  type: "broCute",    speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 16: 收拾房间
    // ====================================================
    {
      id: 16, theme: "收拾房间", desc: "你那边乱死了！这是你的还是我的？",
      sentences: [
        { en: "Clean your rooms.",              zh: "收拾房间。",              type: "momFirm",    speaker: "mom" },
        { en: "Mine is clean.",                 zh: "我的干净。",              type: "sisProud",   speaker: "sister" },
        { en: "Mine too!",                      zh: "我的也是！",              type: "broCute",    speaker: "brother" },
        { en: "Your floor's a mess.",           zh: "你地上一团糟。",          type: "momTired",   speaker: "mom" },
        { en: "Mess with what?",                zh: "啥乱啊？",                type: "broCurious", speaker: "brother" },
        { en: "Toys, socks, everything.",       zh: "玩具、袜子，啥都有。",    type: "momTired",   speaker: "mom" },
        { en: "Oh, that.",                      zh: "哦，那个啊。",            type: "broPout",    speaker: "brother" },
        { en: "Start now.",                     zh: "现在就开始。",            type: "momFirm",    speaker: "mom" },
        { en: "Where does this go?",            zh: "这个放哪？",              type: "broCurious", speaker: "brother" },
        { en: "Toy box.",                       zh: "玩具箱。",                type: "sisCalm",    speaker: "sister" },
        { en: "Is this yours or mine?",         zh: "这是你的还是我的？",      type: "broCurious", speaker: "brother" },
        { en: "Mine!",                          zh: "我的！",                  type: "sisCalm",    speaker: "sister" },
        { en: "It's in my room.",               zh: "在我房间。",              type: "broPout",    speaker: "brother" },
        { en: "You took it!",                   zh: "你拿走的！",              type: "sisAnnoy",   speaker: "sister" },
        { en: "Oh yeah.",                       zh: "哦对哦。",                type: "broCalm",    speaker: "brother" },
        { en: "Give it back.",                  zh: "还我。",                  type: "sisBoss",    speaker: "sister" },
        { en: "Fine.",                          zh: "好啦。",                  type: "broPout",    speaker: "brother" },
        { en: "I found a sock!",                zh: "我找到只袜子！",          type: "broExcite",  speaker: "brother" },
        { en: "Where's the other one?",         zh: "另一只呢？",              type: "casual",     speaker: "mom" },
        { en: "Don't know.",                    zh: "不知道。",                type: "broCalm",    speaker: "brother" },
        { en: "Look under the bed.",            zh: "床底下看看。",            type: "casual",     speaker: "mom" },
        { en: "So dusty under here!",           zh: "底下好多灰！",            type: "broWhine",   speaker: "brother" },
        { en: "Exactly, time to clean.",        zh: "就是啊，该扫了。",        type: "momTired",   speaker: "mom" },
        { en: "Throw out trash.",               zh: "垃圾扔了。",              type: "momFirm",    speaker: "mom" },
        { en: "This isn't trash!",              zh: "这不是垃圾！",            type: "broPout",    speaker: "brother" },
        { en: "It's a broken pencil.",          zh: "断的铅笔。",              type: "sisCalm",    speaker: "sister" },
        { en: "I still want it!",               zh: "我还想要！",              type: "broWhine",   speaker: "brother" },
        { en: "Out.",                           zh: "扔了。",                  type: "momFirm",    speaker: "mom" },
        { en: "Done!",                          zh: "搞定！",                  type: "broExcite",  speaker: "brother" },
        { en: "Let me check.",                  zh: "我看看。",                type: "momTired",   speaker: "mom" }
      ]
    },

    // ====================================================
    // Day 17: 吵架告状大爆发
    // ====================================================
    {
      id: 17, theme: "吵架告状", desc: "他先动手的！她骗我！妈你偏心！",
      sentences: [
        { en: "Mom! He hit me!",                zh: "妈！他打我！",            type: "broTell",    speaker: "brother" },
        { en: "I did not!",                     zh: "我没有！",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Yes you did!",                   zh: "你就有！",                type: "broLoud",    speaker: "brother" },
        { en: "What happened?",                 zh: "怎么回事？",              type: "momTired",   speaker: "mom" },
        { en: "He took my pen.",                zh: "他拿我笔。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "I just borrowed it!",            zh: "我就借一下！",            type: "broPout",    speaker: "brother" },
        { en: "Without asking!",                zh: "没问就拿！",              type: "sisAnnoy",   speaker: "sister" },
        { en: "I would've said yes!",           zh: "我会同意的！",            type: "broWhine",   speaker: "brother" },
        { en: "That's not the point.",          zh: "不是这个事。",            type: "sisCalm",    speaker: "sister" },
        { en: "Give it back.",                  zh: "还给她。",                type: "momFirm",    speaker: "mom" },
        { en: "Fine!",                          zh: "行！",                    type: "broPout",    speaker: "brother" },
        { en: "Don't throw it!",                zh: "别扔！",                  type: "sisAnnoy",   speaker: "sister" },
        { en: "I didn't.",                      zh: "我没有。",                type: "broCalm",    speaker: "brother" },
        { en: "On purpose!",                    zh: "故意的！",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Did not.",                       zh: "没有。",                  type: "broPout",    speaker: "brother" },
        { en: "Liar.",                          zh: "骗子。",                  type: "sisAnnoy",   speaker: "sister" },
        { en: "Don't call him that.",           zh: "别这么叫他。",            type: "momFirm",    speaker: "mom" },
        { en: "But he is!",                     zh: "他就是！",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Enough.",                        zh: "够了。",                  type: "momFirm",    speaker: "mom" },
        { en: "You always take her side.",      zh: "你总向着她。",            type: "broPout",    speaker: "brother" },
        { en: "I do not.",                      zh: "我没有。",                type: "momTired",   speaker: "mom" },
        { en: "Yes you do.",                    zh: "你就有。",                type: "broPout",    speaker: "brother" },
        { en: "You're unfair.",                 zh: "你不公平。",              type: "broWhine",   speaker: "brother" },
        { en: "Both of you stop.",              zh: "你俩都停。",              type: "momFirm",    speaker: "mom" },
        { en: "She started it.",                zh: "她先开始的。",            type: "broPout",    speaker: "brother" },
        { en: "I don't care who started.",      zh: "我不管谁先。",            type: "momTired",   speaker: "mom" },
        { en: "Apologize.",                     zh: "道歉。",                  type: "momFirm",    speaker: "mom" },
        { en: "Sorry.",                         zh: "对不起。",                type: "broPout",    speaker: "brother" },
        { en: "Sorry, I guess.",                zh: "对不起吧，应该。",        type: "sisAnnoy",   speaker: "sister" },
        { en: "Try again, nicely.",             zh: "重来，认真点。",          type: "momFirm",    speaker: "mom" }
      ]
    },

    // ====================================================
    // Day 18: 合伙搞事 / 偷吃零食
    // ====================================================
    {
      id: 18, theme: "合伙搞事", desc: "嘘别说！我们偷吃一点！妈妈来了！",
      sentences: [
        { en: "Don't tell Mom.",                zh: "别告诉妈。",              type: "whisper",    speaker: "sister" },
        { en: "Tell her what?",                 zh: "告诉她啥？",              type: "broCurious", speaker: "brother" },
        { en: "About the cookies.",             zh: "饼干的事。",              type: "whisper",    speaker: "sister" },
        { en: "What cookies?",                  zh: "啥饼干？",                type: "broCurious", speaker: "brother" },
        { en: "Shhh, come here.",               zh: "嘘，过来。",              type: "whisper",    speaker: "sister" },
        { en: "Are these for us?",              zh: "这是给我们的吗？",        type: "broCurious", speaker: "brother" },
        { en: "Just one each.",                 zh: "一人一块。",              type: "whisper",    speaker: "sister" },
        { en: "Mom will know!",                 zh: "妈会知道！",              type: "broScared",  speaker: "brother" },
        { en: "Only if you tell.",              zh: "你不说就不知道。",        type: "whisper",    speaker: "sister" },
        { en: "I won't!",                       zh: "我不说！",                type: "broExcite",  speaker: "brother" },
        { en: "Cross your heart?",              zh: "拉钩？",                  type: "whisper",    speaker: "sister" },
        { en: "Cross my heart.",                zh: "拉钩。",                  type: "broCalm",    speaker: "brother" },
        { en: "Quick, eat it!",                 zh: "快吃！",                  type: "whisper",    speaker: "sister" },
        { en: "So yummy!",                      zh: "好好吃！",                type: "broExcite",  speaker: "brother" },
        { en: "Quiet!",                         zh: "小声！",                  type: "whisper",    speaker: "sister" },
        { en: "Crumbs on the floor!",           zh: "地上有屑！",              type: "broScared",  speaker: "brother" },
        { en: "Pick them up!",                  zh: "捡起来！",                type: "whisper",    speaker: "sister" },
        { en: "Mom's coming!",                  zh: "妈来了！",                type: "broScared",  speaker: "brother" },
        { en: "Act normal!",                    zh: "装没事！",                type: "whisper",    speaker: "sister" },
        { en: "What are you two doing?",        zh: "你俩干啥呢？",            type: "momCalm",    speaker: "mom" },
        { en: "Nothing!",                       zh: "没干啥！",                type: "broLoud",    speaker: "brother" },
        { en: "Just playing.",                  zh: "玩呢。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Why are you giggling?",          zh: "你笑啥？",                type: "momCalm",    speaker: "mom" },
        { en: "He's funny.",                    zh: "他好笑。",                type: "sisCalm",    speaker: "sister" },
        { en: "Is that chocolate?",             zh: "嘴上是巧克力吗？",        type: "momCalm",    speaker: "mom" },
        { en: "Where?",                         zh: "哪儿？",                  type: "broScared",  speaker: "brother" },
        { en: "On your face.",                  zh: "你脸上。",                type: "momTease",   speaker: "mom" },
        { en: "Busted.",                        zh: "完蛋。",                  type: "sisCalm",    speaker: "sister" },
        { en: "I told you!",                    zh: "我说了的！",              type: "broWhine",   speaker: "brother" },
        { en: "You two are something.",         zh: "你俩真行。",              type: "momTease",   speaker: "mom" }
      ]
    },

    // ====================================================
    // Day 19: 姐姐照顾弟弟
    // ====================================================
    {
      id: 19, theme: "姐姐照顾弟弟", desc: "别哭了 我陪你 我教你",
      sentences: [
        { en: "Why are you crying?",            zh: "你哭啥？",                type: "sisSweet",   speaker: "sister" },
        { en: "I fell down.",                   zh: "我摔倒了。",              type: "broCry",     speaker: "brother" },
        { en: "Let me see.",                    zh: "我看看。",                type: "sisSweet",   speaker: "sister" },
        { en: "It hurts!",                      zh: "好疼！",                  type: "broCry",     speaker: "brother" },
        { en: "Just a scratch.",                zh: "就破点皮。",              type: "sisCalm",    speaker: "sister" },
        { en: "It's bleeding!",                 zh: "流血了！",                type: "broScared",  speaker: "brother" },
        { en: "Just a tiny bit.",               zh: "就一点点。",              type: "sisSweet",   speaker: "sister" },
        { en: "I want Mom.",                    zh: "我要妈妈。",              type: "broCry",     speaker: "brother" },
        { en: "She's outside.",                 zh: "她在外面。",              type: "sisCalm",    speaker: "sister" },
        { en: "I'll get a Band-Aid.",           zh: "我去拿创可贴。",          type: "sisSweet",   speaker: "sister" },
        { en: "Hurry!",                         zh: "快！",                    type: "broCry",     speaker: "brother" },
        { en: "Stop crying.",                   zh: "别哭了。",                type: "sisSweet",   speaker: "sister" },
        { en: "I can't help it.",               zh: "我忍不住。",              type: "broCry",     speaker: "brother" },
        { en: "Breathe.",                       zh: "深呼吸。",                type: "sisCalm",    speaker: "sister" },
        { en: "Like this?",                     zh: "这样吗？",                type: "broCalm",    speaker: "brother" },
        { en: "Yeah, slowly.",                  zh: "对，慢慢的。",            type: "sisSweet",   speaker: "sister" },
        { en: "Better now?",                    zh: "好点没？",                type: "sisSweet",   speaker: "sister" },
        { en: "A little.",                      zh: "好一点。",                type: "broCalm",    speaker: "brother" },
        { en: "Want a book?",                   zh: "听个故事？",              type: "sisSweet",   speaker: "sister" },
        { en: "The dinosaur one.",              zh: "恐龙那本。",              type: "broCute",    speaker: "brother" },
        { en: "Okay, sit here.",                zh: "好，坐这。",              type: "sisSweet",   speaker: "sister" },
        { en: "You're a good sister.",          zh: "你是好姐姐。",            type: "broCute",    speaker: "brother" },
        { en: "I know.",                        zh: "我知道。",                type: "sisProud",   speaker: "sister" },
        { en: "Don't get a big head.",          zh: "别得意。",                type: "broTease",   speaker: "brother" },
        { en: "Just read with me.",             zh: "好好听书。",              type: "sisCalm",    speaker: "sister" },
        { en: "What does this say?",            zh: "这写的啥？",              type: "broCurious", speaker: "brother" },
        { en: "T-Rex.",                         zh: "霸王龙。",                type: "sisCalm",    speaker: "sister" },
        { en: "Cool!",                          zh: "酷！",                    type: "broExcite",  speaker: "brother" },
        { en: "Lean on me.",                    zh: "靠着我。",                type: "sisSweet",   speaker: "sister" },
        { en: "Thanks, jiejie.",                zh: "谢谢姐姐。",              type: "broCute",    speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 20: 爸爸下班回家
    // ====================================================
    {
      id: 20, theme: "爸爸下班回家", desc: "爸你回来啦！抱抱！我们想你了",
      sentences: [
        { en: "Dad's home!",                    zh: "爸回来了！",              type: "broExcite",  speaker: "brother" },
        { en: "Hey, kids.",                     zh: "嗨，孩子们。",            type: "dadCalm",    speaker: "dad" },
        { en: "Daddy!",                         zh: "爸爸！",                  type: "broExcite",  speaker: "brother" },
        { en: "Easy, easy.",                    zh: "慢点慢点。",              type: "dadCalm",    speaker: "dad" },
        { en: "I missed you!",                  zh: "我想你了！",              type: "broCute",    speaker: "brother" },
        { en: "Missed you too.",                zh: "我也想你。",              type: "dadCalm",    speaker: "dad" },
        { en: "How was work?",                  zh: "上班咋样？",              type: "casual",     speaker: "mom" },
        { en: "Long day.",                      zh: "累一天。",                type: "dadCalm",    speaker: "dad" },
        { en: "Want some tea?",                 zh: "要茶吗？",                type: "casual",     speaker: "mom" },
        { en: "Please.",                        zh: "好。",                    type: "dadCalm",    speaker: "dad" },
        { en: "Dad, look what I drew!",         zh: "爸，看我画的！",          type: "broExcite",  speaker: "brother" },
        { en: "Wow, who's this?",               zh: "哇，这是谁？",            type: "dadPlay",    speaker: "dad" },
        { en: "It's you!",                      zh: "是你！",                  type: "broExcite",  speaker: "brother" },
        { en: "I look like that?",              zh: "我长这样？",              type: "dadPlay",    speaker: "dad" },
        { en: "Better in real life.",           zh: "真人比这好看。",          type: "sisTease",   speaker: "sister" },
        { en: "Thanks, kiddo.",                 zh: "谢了，丫头。",            type: "dadPlay",    speaker: "dad" },
        { en: "Dad, fix this?",                 zh: "爸，能修这个吗？",        type: "broCute",    speaker: "brother" },
        { en: "What's wrong?",                  zh: "怎么了？",                type: "dadCalm",    speaker: "dad" },
        { en: "It won't turn on.",              zh: "开不了机。",              type: "broWhine",   speaker: "brother" },
        { en: "Did you charge it?",             zh: "充电了吗？",              type: "dadCalm",    speaker: "dad" },
        { en: "Oh.",                            zh: "哦。",                    type: "broCalm",    speaker: "brother" },
        { en: "Try that first.",                zh: "先充电。",                type: "dadPlay",    speaker: "dad" },
        { en: "Dad, tell a joke.",              zh: "爸，讲个笑话。",          type: "broCute",    speaker: "brother" },
        { en: "I'm too tired.",                 zh: "我太累。",                type: "dadCalm",    speaker: "dad" },
        { en: "Please please please.",          zh: "求你求你求你。",          type: "broCute",    speaker: "brother" },
        { en: "Fine, one joke.",                zh: "行，一个。",              type: "dadPlay",    speaker: "dad" },
        { en: "That wasn't funny.",             zh: "不好笑。",                type: "sisCalm",    speaker: "sister" },
        { en: "Hey!",                           zh: "喂！",                    type: "dadPlay",    speaker: "dad" },
        { en: "Dinner's ready.",                zh: "吃饭啦。",                type: "casual",     speaker: "mom" },
        { en: "Coming!",                        zh: "来了！",                  type: "broExcite",  speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 21: 穿衣服小麻烦
    // ====================================================
    {
      id: 21, theme: "穿衣服小麻烦", desc: "拉链拉不上！扣子扣错！袖子反了！",
      sentences: [
        { en: "Get dressed.",                   zh: "穿衣服。",                type: "momFirm",    speaker: "mom" },
        { en: "Which sweater?",                 zh: "穿哪件？",                type: "broCurious", speaker: "brother" },
        { en: "The red one.",                   zh: "红的。",                  type: "casual",     speaker: "mom" },
        { en: "It's too small.",                zh: "太小了。",                type: "broWhine",   speaker: "brother" },
        { en: "Try the blue one.",              zh: "试蓝的。",                type: "casual",     speaker: "mom" },
        { en: "My head won't fit!",             zh: "头钻不出来！",            type: "broLoud",    speaker: "brother" },
        { en: "Pull harder.",                   zh: "用力拉。",                type: "casual",     speaker: "mom" },
        { en: "I'm stuck!",                     zh: "我卡住了！",              type: "broScared",  speaker: "brother" },
        { en: "Don't panic.",                   zh: "别慌。",                  type: "momCalm",    speaker: "mom" },
        { en: "Help me!",                       zh: "帮我！",                  type: "broCry",     speaker: "brother" },
        { en: "Hold still.",                    zh: "别动。",                  type: "momCalm",    speaker: "mom" },
        { en: "Free!",                          zh: "解放了！",                type: "broExcite",  speaker: "brother" },
        { en: "Zip it up.",                     zh: "拉拉链。",                type: "casual",     speaker: "mom" },
        { en: "It's stuck.",                    zh: "卡住了。",                type: "broWhine",   speaker: "brother" },
        { en: "Pull it down first.",            zh: "先拉下来。",              type: "momCalm",    speaker: "mom" },
        { en: "Now up.",                        zh: "再往上。",                type: "momCalm",    speaker: "mom" },
        { en: "Caught my shirt!",               zh: "夹到衣服了！",            type: "broCry",     speaker: "brother" },
        { en: "Slow down.",                     zh: "慢点。",                  type: "momCalm",    speaker: "mom" },
        { en: "Your buttons are wrong.",        zh: "你扣子错了。",            type: "sisCalm",    speaker: "sister" },
        { en: "Where?",                         zh: "哪？",                    type: "broCurious", speaker: "brother" },
        { en: "All of them.",                   zh: "全部。",                  type: "sisTease",   speaker: "sister" },
        { en: "Redo them.",                     zh: "重扣。",                  type: "momFirm",    speaker: "mom" },
        { en: "Ugh.",                           zh: "啊——",                    type: "broWhine",   speaker: "brother" },
        { en: "Your sleeve's inside out.",      zh: "袖子反了。",              type: "sisCalm",    speaker: "sister" },
        { en: "Flip it.",                       zh: "翻过来。",                type: "casual",     speaker: "mom" },
        { en: "How?",                           zh: "咋翻？",                  type: "broCurious", speaker: "brother" },
        { en: "Reach in and pull.",             zh: "伸手进去拉。",            type: "momCalm",    speaker: "mom" },
        { en: "Got it!",                        zh: "好了！",                  type: "broExcite",  speaker: "brother" },
        { en: "Socks?",                         zh: "袜子呢？",                type: "casual",     speaker: "mom" },
        { en: "Already on.",                    zh: "穿上了。",                type: "sisProud",   speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 22: 公园玩耍
    // ====================================================
    {
      id: 22, theme: "公园玩耍", desc: "我要荡秋千！别推那么高！等下我！",
      sentences: [
        { en: "Last one to the swing!",         zh: "最后一个到秋千的！",      type: "broExcite",  speaker: "brother" },
        { en: "Don't run!",                     zh: "别跑！",                  type: "momCalling", speaker: "mom" },
        { en: "I got here first!",              zh: "我先到的！",              type: "sisProud",   speaker: "brother" },
        { en: "Whatever.",                      zh: "随便。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Push me!",                       zh: "推我！",                  type: "broExcite",  speaker: "brother" },
        { en: "Hold on tight.",                 zh: "抓紧。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Higher!",                        zh: "再高！",                  type: "broExcite",  speaker: "brother" },
        { en: "Not too high!",                  zh: "别太高！",                type: "momWorry",   speaker: "mom" },
        { en: "I'm flying!",                    zh: "我飞起来了！",            type: "broExcite",  speaker: "brother" },
        { en: "My turn.",                       zh: "到我了。",                type: "sisCalm",    speaker: "sister" },
        { en: "Not yet!",                       zh: "还不行！",                type: "broPout",    speaker: "brother" },
        { en: "You've been on forever.",        zh: "你坐超久了。",            type: "sisAnnoy",   speaker: "sister" },
        { en: "Five more pushes!",              zh: "再推五次！",              type: "broCute",    speaker: "brother" },
        { en: "Two.",                           zh: "两次。",                  type: "sisBoss",    speaker: "sister" },
        { en: "Three.",                         zh: "三次。",                  type: "broCute",    speaker: "brother" },
        { en: "Fine, three.",                   zh: "行，三次。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "Let's slide.",                   zh: "去玩滑梯。",              type: "broExcite",  speaker: "brother" },
        { en: "It's hot!",                      zh: "好烫！",                  type: "broScared",  speaker: "brother" },
        { en: "From the sun.",                  zh: "晒的。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Watch your head.",               zh: "小心头。",                type: "momCalling", speaker: "mom" },
        { en: "Wait for me!",                   zh: "等我！",                  type: "broLoud",    speaker: "brother" },
        { en: "Catch up then!",                 zh: "那就跟上！",              type: "sisTease",   speaker: "sister" },
        { en: "Mom, ice cream?",                zh: "妈，冰淇淋？",            type: "broCute",    speaker: "brother" },
        { en: "It's too cold.",                 zh: "太凉了。",                type: "momCalm",    speaker: "mom" },
        { en: "Just a small one!",              zh: "就小的！",                type: "broWhine",   speaker: "brother" },
        { en: "After dinner.",                  zh: "晚饭后。",                type: "momFirm",    speaker: "mom" },
        { en: "My shoes are dirty.",            zh: "我鞋脏了。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "It's just dirt.",                zh: "就是泥。",                type: "broCalm",    speaker: "brother" },
        { en: "Time to go home.",               zh: "该回家了。",              type: "momCalling", speaker: "mom" },
        { en: "Five more minutes!",             zh: "再五分钟！",              type: "broWhine",   speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 23: 下雨天出门
    // ====================================================
    {
      id: 23, theme: "下雨天出门", desc: "下雨啦！雨伞呢？我没带！",
      sentences: [
        { en: "It's raining!",                  zh: "下雨了！",                type: "broExcite",  speaker: "brother" },
        { en: "Hard?",                          zh: "大吗？",                  type: "casual",     speaker: "mom" },
        { en: "Pretty hard.",                   zh: "挺大的。",                type: "sisCalm",    speaker: "sister" },
        { en: "Where's my umbrella?",           zh: "我雨伞呢？",              type: "broCurious", speaker: "brother" },
        { en: "Did you bring it home?",         zh: "带回家了吗？",            type: "casual",     speaker: "mom" },
        { en: "Uh... I forgot.",                zh: "呃……忘了。",              type: "broPout",    speaker: "brother" },
        { en: "Left at school.",                zh: "落学校了。",              type: "sisTease",   speaker: "sister" },
        { en: "Shut up.",                       zh: "闭嘴。",                  type: "broPout",    speaker: "brother" },
        { en: "Take mine.",                     zh: "用我的。",                type: "sisSweet",   speaker: "sister" },
        { en: "Really?",                        zh: "真的？",                  type: "broCurious", speaker: "brother" },
        { en: "Don't break it.",                zh: "别弄坏。",                type: "sisCalm",    speaker: "sister" },
        { en: "I won't!",                       zh: "不会的！",                type: "broExcite",  speaker: "brother" },
        { en: "Where's yours, Mom?",            zh: "妈你的呢？",              type: "broCurious", speaker: "brother" },
        { en: "I have a raincoat.",             zh: "我有雨衣。",              type: "casual",     speaker: "mom" },
        { en: "Cool.",                          zh: "酷。",                    type: "broCalm",    speaker: "brother" },
        { en: "Don't splash puddles!",          zh: "别踩水坑！",              type: "momCalling", speaker: "mom" },
        { en: "But it's fun!",                  zh: "可有意思！",              type: "broWhine",   speaker: "brother" },
        { en: "You'll soak your socks.",        zh: "袜子湿透。",              type: "sisCalm",    speaker: "sister" },
        { en: "Worth it.",                      zh: "值。",                    type: "broSilly",   speaker: "brother" },
        { en: "Don't complain later.",          zh: "别一会儿喊。",            type: "momTired",   speaker: "mom" },
        { en: "Hold the umbrella higher.",      zh: "伞举高点。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "It's heavy!",                    zh: "好重！",                  type: "broWhine",   speaker: "brother" },
        { en: "It's a kid umbrella.",           zh: "儿童伞而已。",            type: "sisTease",   speaker: "sister" },
        { en: "My arm hurts.",                  zh: "我胳膊酸。",              type: "broWhine",   speaker: "brother" },
        { en: "Switch hands.",                  zh: "换手。",                  type: "sisCalm",    speaker: "sister" },
        { en: "The wind!",                      zh: "风！",                    type: "broScared",  speaker: "brother" },
        { en: "Hold tight!",                    zh: "抓紧！",                  type: "momCalling", speaker: "mom" },
        { en: "It's blown inside out!",         zh: "伞翻了！",                type: "broLoud",    speaker: "brother" },
        { en: "Fix it quick.",                  zh: "快搞好。",                type: "sisCalm",    speaker: "sister" },
        { en: "Almost there.",                  zh: "快到了。",                type: "momCalm",    speaker: "mom" }
      ]
    },

    // ====================================================
    // Day 24: 周末早午餐 一家四口
    // ====================================================
    {
      id: 24, theme: "周末早午餐", desc: "全家慢吞吞吃饭，姐弟斗嘴爸爸看戏",
      sentences: [
        { en: "Breakfast or lunch?",            zh: "早饭还是午饭？",          type: "broCurious", speaker: "brother" },
        { en: "Both. Brunch.",                  zh: "都算，早午餐。",          type: "casual",     speaker: "mom" },
        { en: "Cool word.",                     zh: "这词酷。",                type: "broCalm",    speaker: "brother" },
        { en: "Pancakes?",                      zh: "煎饼？",                  type: "sisSweet",   speaker: "sister" },
        { en: "I'm making some.",               zh: "正做着。",                type: "casual",     speaker: "mom" },
        { en: "Yes!",                           zh: "耶！",                    type: "broExcite",  speaker: "brother" },
        { en: "Smells amazing.",                zh: "好香。",                  type: "dadCalm",    speaker: "dad" },
        { en: "Set the table?",                 zh: "摆桌子？",                type: "casual",     speaker: "mom" },
        { en: "On it.",                         zh: "我来。",                  type: "sisCalm",    speaker: "sister" },
        { en: "How many plates?",               zh: "几个盘子？",              type: "sisCurious", speaker: "sister" },
        { en: "Four.",                          zh: "四个。",                  type: "casual",     speaker: "mom" },
        { en: "I want the big one!",            zh: "我要大的！",              type: "broLoud",    speaker: "brother" },
        { en: "They're all the same.",          zh: "都一样大。",              type: "sisCalm",    speaker: "sister" },
        { en: "Not that one!",                  zh: "不是那个！",              type: "broPout",    speaker: "brother" },
        { en: "Just sit down.",                 zh: "坐下吧。",                type: "dadCalm",    speaker: "dad" },
        { en: "Syrup, please.",                 zh: "枫糖浆。",                type: "sisSweet",   speaker: "sister" },
        { en: "Don't drown it.",                zh: "别淹了。",                type: "momTease",   speaker: "mom" },
        { en: "He's hogging it!",               zh: "他独霸糖浆！",            type: "sisTell",    speaker: "sister" },
        { en: "I'm not done!",                  zh: "我还没倒完！",            type: "broPout",    speaker: "brother" },
        { en: "Share.",                         zh: "分享。",                  type: "dadStern",   speaker: "dad" },
        { en: "These pancakes are perfect.",    zh: "这煎饼绝了。",            type: "dadPlay",    speaker: "dad" },
        { en: "Thanks, hon.",                   zh: "谢啦，老公。",            type: "casual",     speaker: "mom" },
        { en: "Can I have another?",            zh: "我能再要一个吗？",        type: "broCute",    speaker: "brother" },
        { en: "Finish that first.",             zh: "先吃完。",                type: "momFirm",    speaker: "mom" },
        { en: "I'm full.",                      zh: "我饱了。",                type: "sisCalm",    speaker: "sister" },
        { en: "Already?",                       zh: "这就饱了？",              type: "surprised",  speaker: "mom" },
        { en: "I ate three.",                   zh: "我吃了三个。",            type: "sisProud",   speaker: "sister" },
        { en: "Three?!",                        zh: "三个？！",                type: "broLoud",    speaker: "brother" },
        { en: "What a peaceful morning.",       zh: "早上真舒服。",            type: "dadCalm",    speaker: "dad" },
        { en: "Until they start fighting.",     zh: "直到他俩开打。",          type: "momTease",   speaker: "mom" }
      ]
    },

    // ====================================================
    // Day 25: 厨房用具大盘点
    // ====================================================
    {
      id: 25, theme: "厨房用具", desc: "妈这个叫啥？锅铲？汤勺？",
      sentences: [
        { en: "Mom, what's this?",              zh: "妈，这是啥？",            type: "broCurious", speaker: "brother" },
        { en: "A spatula.",                     zh: "锅铲。",                  type: "casual",     speaker: "mom" },
        { en: "And this?",                      zh: "这个呢？",                type: "broCurious", speaker: "brother" },
        { en: "A ladle.",                       zh: "汤勺。",                  type: "casual",     speaker: "mom" },
        { en: "Easy, that's a knife.",          zh: "简单，这是刀。",          type: "sisProud",   speaker: "sister" },
        { en: "Don't touch it!",                zh: "别碰！",                  type: "momWorry",   speaker: "mom" },
        { en: "I wasn't.",                      zh: "我没碰。",                type: "sisAnnoy",   speaker: "sister" },
        { en: "What's the wood thing?",         zh: "那个木头的是啥？",        type: "broCurious", speaker: "brother" },
        { en: "Cutting board.",                 zh: "案板。",                  type: "casual",     speaker: "mom" },
        { en: "Pass me the tongs.",             zh: "夹子递我。",              type: "casual",     speaker: "mom" },
        { en: "Which one?",                     zh: "哪个？",                  type: "broCurious", speaker: "brother" },
        { en: "The metal one.",                 zh: "金属那个。",              type: "casual",     speaker: "mom" },
        { en: "This?",                          zh: "这个吗？",                type: "broCurious", speaker: "brother" },
        { en: "Yes, thanks.",                   zh: "对，谢谢。",              type: "momSoft",    speaker: "mom" },
        { en: "What's a colander?",             zh: "漏勺是啥？",              type: "broCurious", speaker: "brother" },
        { en: "Bowl with holes.",               zh: "带孔的碗。",              type: "sisCalm",    speaker: "sister" },
        { en: "Oh, that one.",                  zh: "哦，那个啊。",            type: "broCalm",    speaker: "brother" },
        { en: "Wrap it with this.",             zh: "用这个包。",              type: "casual",     speaker: "mom" },
        { en: "What is it?",                    zh: "啥东西？",                type: "broCurious", speaker: "brother" },
        { en: "Plastic wrap.",                  zh: "保鲜膜。",                type: "casual",     speaker: "mom" },
        { en: "It's sticky!",                   zh: "粘手！",                  type: "broWhine",   speaker: "brother" },
        { en: "Of course.",                     zh: "可不嘛。",                type: "sisTease",   speaker: "sister" },
        { en: "Where's the rolling pin?",       zh: "擀面杖呢？",              type: "casual",     speaker: "mom" },
        { en: "Top drawer.",                    zh: "上面抽屉。",              type: "sisCalm",    speaker: "sister" },
        { en: "Got it.",                        zh: "拿到了。",                type: "casual",     speaker: "mom" },
        { en: "Can I use it?",                  zh: "我能用吗？",              type: "broCute",    speaker: "brother" },
        { en: "Not for hitting!",               zh: "不许用来打人！",          type: "momFirm",    speaker: "mom" },
        { en: "I wasn't gonna.",                zh: "我没想啊。",              type: "broPout",    speaker: "brother" },
        { en: "Liar.",                          zh: "骗子。",                  type: "sisTease",   speaker: "sister" },
        { en: "Both of you, out.",              zh: "你俩出去。",              type: "momTired",   speaker: "mom" }
      ]
    },

    // ====================================================
    // Day 26: 蔬菜大集合
    // ====================================================
    {
      id: 26, theme: "认识蔬菜", desc: "妈让洗菜，姐弟一边洗一边吐槽",
      sentences: [
        { en: "Mom, what's for dinner?",        zh: "妈，晚饭吃啥？",          type: "broCurious", speaker: "brother" },
        { en: "Wash these veggies.",            zh: "把菜洗了。",              type: "casual",     speaker: "mom" },
        { en: "All of them?",                   zh: "全部？",                  type: "broWhine",   speaker: "brother" },
        { en: "All of them.",                   zh: "全部。",                  type: "momFirm",    speaker: "mom" },
        { en: "I'll do the easy ones.",         zh: "我洗简单的。",            type: "sisProud",   speaker: "sister" },
        { en: "No fair!",                       zh: "不公平！",                type: "broPout",    speaker: "brother" },
        { en: "I'm older.",                     zh: "我大。",                  type: "sisBoss",    speaker: "sister" },
        { en: "So?",                            zh: "那又咋了？",              type: "broPout",    speaker: "brother" },
        { en: "So I pick.",                     zh: "所以我先挑。",            type: "sisBoss",    speaker: "sister" },
        { en: "What's this purple thing?",      zh: "这紫的啥？",              type: "broCurious", speaker: "brother" },
        { en: "Eggplant, dummy.",               zh: "茄子，笨。",              type: "sisTease",   speaker: "sister" },
        { en: "Don't call me dummy.",           zh: "别叫我笨。",              type: "broPout",    speaker: "brother" },
        { en: "Then learn faster.",             zh: "那学快点。",              type: "sisTease",   speaker: "sister" },
        { en: "Mom! She said dummy!",           zh: "妈！她说我笨！",          type: "broTell",    speaker: "brother" },
        { en: "Stop tattling.",                 zh: "别告状。",                type: "momTired",   speaker: "mom" },
        { en: "What's a cabbage look like?",    zh: "白菜啥样？",              type: "broCurious", speaker: "brother" },
        { en: "Round green thing.",             zh: "圆圆绿绿的。",            type: "sisCalm",    speaker: "sister" },
        { en: "This one?",                      zh: "这个？",                  type: "broCurious", speaker: "brother" },
        { en: "That's spinach.",                zh: "那是菠菜。",              type: "sisCalm",    speaker: "sister" },
        { en: "They look the same!",            zh: "长得一样！",              type: "broWhine",   speaker: "brother" },
        { en: "Not even close.",                zh: "差远了。",                type: "sisTease",   speaker: "sister" },
        { en: "Tomatoes are easy.",             zh: "西红柿简单。",            type: "broExcite",  speaker: "brother" },
        { en: "Don't squeeze them.",            zh: "别捏。",                  type: "sisCalm",    speaker: "sister" },
        { en: "I won't.",                       zh: "不捏。",                  type: "broCalm",    speaker: "brother" },
        { en: "Carrots next.",                  zh: "再洗胡萝卜。",            type: "casual",     speaker: "mom" },
        { en: "Onions stink!",                  zh: "洋葱臭！",                type: "broWhine",   speaker: "brother" },
        { en: "Crybaby.",                       zh: "爱哭鬼。",                type: "sisTease",   speaker: "sister" },
        { en: "You'll cry too.",                zh: "你也会哭。",              type: "broPout",    speaker: "brother" },
        { en: "Bet I won't.",                   zh: "我打赌不哭。",            type: "sisProud",   speaker: "sister" },
        { en: "We'll see.",                     zh: "走着瞧。",                type: "broTease",   speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 27: 水果大集合
    // ====================================================
    {
      id: 27, theme: "认识水果", desc: "切水果拼盘，姐姐当老大，弟弟瞎挑",
      sentences: [
        { en: "Mom, snack?",                    zh: "妈，零食？",              type: "broCute",    speaker: "brother" },
        { en: "Cut some fruit.",                zh: "切点水果。",              type: "casual",     speaker: "mom" },
        { en: "I'll pick.",                     zh: "我挑。",                  type: "sisBoss",    speaker: "sister" },
        { en: "I want apples.",                 zh: "我要苹果。",              type: "broExcite",  speaker: "brother" },
        { en: "We have those.",                 zh: "有的。",                  type: "sisCalm",    speaker: "sister" },
        { en: "And bananas.",                   zh: "还要香蕉。",              type: "broExcite",  speaker: "brother" },
        { en: "Already got them.",              zh: "拿了。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Pears too?",                     zh: "梨也有？",                type: "broCurious", speaker: "brother" },
        { en: "Two left.",                      zh: "剩俩。",                  type: "sisCalm",    speaker: "sister" },
        { en: "One for me.",                    zh: "一个我的。",              type: "broExcite",  speaker: "brother" },
        { en: "Half.",                          zh: "一半。",                  type: "sisBoss",    speaker: "sister" },
        { en: "I asked first.",                 zh: "我先说的。",              type: "broPout",    speaker: "brother" },
        { en: "I'm older.",                     zh: "我大。",                  type: "sisBoss",    speaker: "sister" },
        { en: "So unfair.",                     zh: "太不公平。",              type: "broWhine",   speaker: "brother" },
        { en: "Life.",                          zh: "人生。",                  type: "sisTease",   speaker: "sister" },
        { en: "Oranges!",                       zh: "橙子！",                  type: "broExcite",  speaker: "brother" },
        { en: "You peel them.",                 zh: "你剥。",                  type: "sisBoss",    speaker: "sister" },
        { en: "They squirt.",                   zh: "汁喷。",                  type: "broWhine",   speaker: "brother" },
        { en: "Don't be a baby.",               zh: "别那么娇。",              type: "sisTease",   speaker: "sister" },
        { en: "Grapes?",                        zh: "葡萄？",                  type: "broCurious", speaker: "brother" },
        { en: "None left.",                     zh: "没了。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Who ate them?",                  zh: "谁吃了？",                type: "broTell",    speaker: "brother" },
        { en: "You did.",                       zh: "你呗。",                  type: "sisTease",   speaker: "sister" },
        { en: "Oh yeah.",                       zh: "哦对。",                  type: "broCalm",    speaker: "brother" },
        { en: "Mango is next.",                 zh: "下个芒果。",              type: "casual",     speaker: "mom" },
        { en: "It's slippery.",                 zh: "滑。",                    type: "broWhine",   speaker: "brother" },
        { en: "Use the board.",                 zh: "用案板。",                type: "sisCalm",    speaker: "sister" },
        { en: "Strawberries!",                  zh: "草莓！",                  type: "broExcite",  speaker: "brother" },
        { en: "Wash them.",                     zh: "洗一下。",                type: "sisCalm",    speaker: "sister" },
        { en: "Peach has fuzz, eww.",           zh: "桃子毛，恶心。",          type: "broSilly",   speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 28: 做面条
    // ====================================================
    {
      id: 28, theme: "做面条", desc: "妈妈和面孩子围观，姐姐当小老师",
      sentences: [
        { en: "What's that?",                   zh: "那是啥？",                type: "broCurious", speaker: "brother" },
        { en: "Dough.",                         zh: "面团。",                  type: "casual",     speaker: "mom" },
        { en: "Looks weird.",                   zh: "怪怪的。",                type: "broSilly",   speaker: "brother" },
        { en: "It's just flour.",               zh: "就是面粉。",              type: "sisCalm",    speaker: "sister" },
        { en: "Plus water.",                    zh: "加水。",                  type: "casual",     speaker: "mom" },
        { en: "Can I knead?",                   zh: "我能揉吗？",              type: "broCute",    speaker: "brother" },
        { en: "Wash hands first.",              zh: "先洗手。",                type: "momFirm",    speaker: "mom" },
        { en: "Already did.",                   zh: "洗了。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Show me how.",                   zh: "教我。",                  type: "broCute",    speaker: "brother" },
        { en: "Like this, push.",               zh: "这样推。",                type: "sisProud",   speaker: "sister" },
        { en: "Too sticky!",                    zh: "好粘！",                  type: "broWhine",   speaker: "brother" },
        { en: "Add flour.",                     zh: "加面粉。",                type: "sisCalm",    speaker: "sister" },
        { en: "How much?",                      zh: "多少？",                  type: "broCurious", speaker: "brother" },
        { en: "Just a little.",                 zh: "一点点。",                type: "sisCalm",    speaker: "sister" },
        { en: "Boiling water.",                 zh: "水开了。",                type: "casual",     speaker: "mom" },
        { en: "Toss noodles in.",               zh: "面下锅。",                type: "casual",     speaker: "mom" },
        { en: "They're long!",                  zh: "好长！",                  type: "broExcite",  speaker: "brother" },
        { en: "Stir them.",                     zh: "搅一下。",                type: "sisCalm",    speaker: "sister" },
        { en: "They stick!",                    zh: "粘成块！",                type: "broWhine",   speaker: "brother" },
        { en: "Use chopsticks.",                zh: "用筷子。",                type: "sisCalm",    speaker: "sister" },
        { en: "Like this?",                     zh: "这样？",                  type: "broCurious", speaker: "brother" },
        { en: "Gentler.",                       zh: "轻点。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Now?",                           zh: "这样？",                  type: "broCurious", speaker: "brother" },
        { en: "Yeah, good.",                    zh: "对，行。",                type: "sisCalm",    speaker: "sister" },
        { en: "Drain them.",                    zh: "捞出来。",                type: "casual",     speaker: "mom" },
        { en: "Cold water rinse?",              zh: "过凉水？",                type: "broCurious", speaker: "brother" },
        { en: "Quick one.",                     zh: "过一下。",                type: "casual",     speaker: "mom" },
        { en: "They're chewy!",                 zh: "好筋道！",                type: "broExcite",  speaker: "brother" },
        { en: "Best ones ever.",                zh: "最棒的。",                type: "sisProud",   speaker: "sister" },
        { en: "Hungry already.",                zh: "饿了。",                  type: "broWhine",   speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 29: 包饺子全家上阵
    // ====================================================
    {
      id: 29, theme: "包饺子", desc: "馅儿太多皮太薄，姐姐嫌弟弟丑",
      sentences: [
        { en: "Dumpling day!",                  zh: "包饺子！",                type: "broExcite",  speaker: "brother" },
        { en: "Wash hands, both.",              zh: "都洗手。",                type: "momFirm",    speaker: "mom" },
        { en: "What's the filling?",            zh: "啥馅？",                  type: "broCurious", speaker: "brother" },
        { en: "Pork and chive.",                zh: "猪肉韭菜。",              type: "casual",     speaker: "mom" },
        { en: "Yuck, chives.",                  zh: "韭菜，呕。",              type: "broWhine",   speaker: "brother" },
        { en: "Just eat it.",                   zh: "吃就完了。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "They stink.",                    zh: "臭。",                    type: "broPout",    speaker: "brother" },
        { en: "They taste good.",               zh: "好吃。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Watch me.",                      zh: "看我。",                  type: "sisProud",   speaker: "sister" },
        { en: "Like this?",                     zh: "这样？",                  type: "broCurious", speaker: "brother" },
        { en: "Less filling.",                  zh: "馅儿少点。",              type: "sisCalm",    speaker: "sister" },
        { en: "Mine looks weird.",              zh: "我的怪。",                type: "broWhine",   speaker: "brother" },
        { en: "Like a worm.",                   zh: "像虫子。",                type: "sisTease",   speaker: "sister" },
        { en: "Mom! Worm!",                     zh: "妈！她说虫子！",          type: "broTell",    speaker: "brother" },
        { en: "She's not wrong.",               zh: "她说得也对。",            type: "momTease",   speaker: "mom" },
        { en: "Hey!",                           zh: "喂！",                    type: "broPout",    speaker: "brother" },
        { en: "Pinch the edges.",               zh: "捏边。",                  type: "sisBoss",    speaker: "sister" },
        { en: "Like a little hat?",             zh: "像小帽子？",              type: "broCurious", speaker: "brother" },
        { en: "Yeah, a hat.",                   zh: "对，帽子。",              type: "sisCalm",    speaker: "sister" },
        { en: "Mine's prettier.",               zh: "我的更好看。",            type: "sisProud",   speaker: "sister" },
        { en: "No, mine.",                      zh: "不，我的。",              type: "broPout",    speaker: "brother" },
        { en: "Yours leaks.",                   zh: "你的漏馅。",              type: "sisTease",   speaker: "sister" },
        { en: "Does not.",                      zh: "没漏。",                  type: "broPout",    speaker: "brother" },
        { en: "Look, leaking.",                 zh: "看，漏了。",              type: "sisTease",   speaker: "sister" },
        { en: "Boil time!",                     zh: "下锅！",                  type: "casual",     speaker: "mom" },
        { en: "They're floating!",              zh: "浮起来了！",              type: "broExcite",  speaker: "brother" },
        { en: "Almost done.",                   zh: "快好了。",                type: "sisCalm",    speaker: "sister" },
        { en: "Dipping sauce.",                 zh: "蘸料。",                  type: "casual",     speaker: "mom" },
        { en: "Vinegar! Garlic!",               zh: "醋！蒜！",                type: "broLoud",    speaker: "brother" },
        { en: "Mine first.",                    zh: "我先吃。",                type: "sisBoss",    speaker: "sister" }
      ]
    },

    // ====================================================
    // Day 30: 炒菜手忙脚乱
    // ====================================================
    {
      id: 30, theme: "炒菜手忙脚乱", desc: "油烟好大，姐姐当小帮厨",
      sentences: [
        { en: "Hot oil!",                       zh: "油烫！",                  type: "momWorry",   speaker: "mom" },
        { en: "Stand back.",                    zh: "退后。",                  type: "momFirm",    speaker: "mom" },
        { en: "It's sizzling!",                 zh: "嗞嗞的！",                type: "broExcite",  speaker: "brother" },
        { en: "Don't touch.",                   zh: "别碰。",                  type: "sisBoss",    speaker: "sister" },
        { en: "I'm watching.",                  zh: "我就看。",                type: "broCalm",    speaker: "brother" },
        { en: "Onions in.",                     zh: "下葱。",                  type: "casual",     speaker: "mom" },
        { en: "It splatters!",                  zh: "油溅！",                  type: "broLoud",    speaker: "brother" },
        { en: "Step back.",                     zh: "退开。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Stinky?",                        zh: "臭吗？",                  type: "broCurious", speaker: "brother" },
        { en: "Fragrant.",                      zh: "是香。",                  type: "sisProud",   speaker: "sister" },
        { en: "Garlic too.",                    zh: "蒜也下。",                type: "casual",     speaker: "mom" },
        { en: "Smells strong.",                 zh: "味儿冲。",                type: "broWhine",   speaker: "brother" },
        { en: "That's good.",                   zh: "这样才好。",              type: "sisCalm",    speaker: "sister" },
        { en: "Meat in.",                       zh: "下肉。",                  type: "casual",     speaker: "mom" },
        { en: "Brown it.",                      zh: "煎一下。",                type: "sisCalm",    speaker: "sister" },
        { en: "How long?",                      zh: "多久？",                  type: "broCurious", speaker: "brother" },
        { en: "Two minutes.",                   zh: "两分钟。",                type: "sisCalm",    speaker: "sister" },
        { en: "Veggies next.",                  zh: "再下菜。",                type: "casual",     speaker: "mom" },
        { en: "Toss them.",                     zh: "翻一翻。",                type: "sisBoss",    speaker: "sister" },
        { en: "Like this?",                     zh: "这样？",                  type: "broCurious", speaker: "brother" },
        { en: "Stir, stir!",                    zh: "翻啊翻！",                type: "sisBoss",    speaker: "sister" },
        { en: "Salt time.",                     zh: "放盐。",                  type: "casual",     speaker: "mom" },
        { en: "How much?",                      zh: "多少？",                  type: "broCurious", speaker: "brother" },
        { en: "A pinch.",                       zh: "一撮。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Soy sauce.",                     zh: "酱油。",                  type: "casual",     speaker: "mom" },
        { en: "Smells amazing.",                zh: "香爆了。",                type: "broExcite",  speaker: "brother" },
        { en: "Plates ready?",                  zh: "盘子好了？",              type: "casual",     speaker: "mom" },
        { en: "On it.",                         zh: "我来。",                  type: "sisCalm",    speaker: "sister" },
        { en: "I'm starving.",                  zh: "饿死了。",                type: "broWhine",   speaker: "brother" },
        { en: "Smells like winning.",           zh: "闻着就赢了。",            type: "broSilly",   speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 31: 煮粥的清晨
    // ====================================================
    {
      id: 31, theme: "煮粥的清晨", desc: "冬天早上一锅热粥，姐弟边吃边赖",
      sentences: [
        { en: "What's cooking?",                zh: "煮啥呢？",                type: "broCurious", speaker: "brother" },
        { en: "Congee.",                        zh: "粥。",                    type: "casual",     speaker: "mom" },
        { en: "Rice porridge?",                 zh: "白粥？",                  type: "broCurious", speaker: "brother" },
        { en: "Yeah.",                          zh: "嗯。",                    type: "casual",     speaker: "mom" },
        { en: "Why so early?",                  zh: "咋这么早？",              type: "sisWhine",   speaker: "sister" },
        { en: "Cold morning.",                  zh: "早上冷。",                type: "momSoft",    speaker: "mom" },
        { en: "Smells like rice.",              zh: "米味儿。",                type: "broCalm",    speaker: "brother" },
        { en: "Plain.",                         zh: "淡淡的。",                type: "sisCalm",    speaker: "sister" },
        { en: "Add egg?",                       zh: "加蛋？",                  type: "broCute",    speaker: "brother" },
        { en: "Stirring one in.",               zh: "搅一个。",                type: "casual",     speaker: "mom" },
        { en: "Yellow swirls!",                 zh: "黄色花纹！",              type: "broExcite",  speaker: "brother" },
        { en: "Pretty.",                        zh: "好看。",                  type: "sisCalm",    speaker: "sister" },
        { en: "I want pickles.",                zh: "我要咸菜。",              type: "broCute",    speaker: "brother" },
        { en: "Me too.",                        zh: "我也要。",                type: "sisCalm",    speaker: "sister" },
        { en: "Get the jar.",                   zh: "拿罐子。",                type: "casual",     speaker: "mom" },
        { en: "Careful, hot!",                  zh: "烫啊！",                  type: "momWorry",   speaker: "mom" },
        { en: "Blow on it.",                    zh: "吹一下。",                type: "sisCalm",    speaker: "sister" },
        { en: "I am.",                          zh: "吹着呢。",                type: "broCalm",    speaker: "brother" },
        { en: "Still hot!",                     zh: "还烫！",                  type: "broWhine",   speaker: "brother" },
        { en: "Wait then.",                     zh: "那就等。",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Tastes nice.",                   zh: "好喝。",                  type: "broCalm",    speaker: "brother" },
        { en: "Told you.",                      zh: "我说了吧。",              type: "sisProud",   speaker: "sister" },
        { en: "Pickles crunchy.",               zh: "咸菜脆。",                type: "broExcite",  speaker: "brother" },
        { en: "Try the floss.",                 zh: "尝肉松。",                type: "sisSweet",   speaker: "sister" },
        { en: "Pork floss?",                    zh: "肉松？",                  type: "broCurious", speaker: "brother" },
        { en: "Yep.",                           zh: "嗯。",                    type: "sisCalm",    speaker: "sister" },
        { en: "Yummy!",                         zh: "好吃！",                  type: "broExcite",  speaker: "brother" },
        { en: "More?",                          zh: "再来点？",                type: "sisCalm",    speaker: "sister" },
        { en: "Just sip.",                      zh: "慢点喝。",                type: "momSoft",    speaker: "mom" },
        { en: "I'm warm now.",                  zh: "暖和了。",                type: "broCalm",    speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 32: 烤蛋糕
    // ====================================================
    {
      id: 32, theme: "烤蛋糕", desc: "巧克力蛋糕，弟弟想舔搅拌碗",
      sentences: [
        { en: "Baking cake!",                   zh: "烤蛋糕！",                type: "sisProud",   speaker: "sister" },
        { en: "What kind?",                     zh: "啥味的？",                type: "broCurious", speaker: "brother" },
        { en: "Chocolate.",                     zh: "巧克力。",                type: "sisCalm",    speaker: "sister" },
        { en: "Yessss!",                        zh: "耶！",                    type: "broExcite",  speaker: "brother" },
        { en: "Read the recipe.",               zh: "看食谱。",                type: "momFirm",    speaker: "mom" },
        { en: "Two eggs.",                      zh: "两个蛋。",                type: "sisCalm",    speaker: "sister" },
        { en: "I'll crack them.",               zh: "我来打。",                type: "broExcite",  speaker: "brother" },
        { en: "Careful.",                       zh: "小心。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Shell in it!",                   zh: "壳进去了！",              type: "broWhine",   speaker: "brother" },
        { en: "Fish it out.",                   zh: "捞出来。",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Yuck.",                          zh: "恶心。",                  type: "broSilly",   speaker: "brother" },
        { en: "Flour next.",                    zh: "加面粉。",                type: "casual",     speaker: "mom" },
        { en: "How much?",                      zh: "多少？",                  type: "broCurious", speaker: "brother" },
        { en: "Two cups.",                      zh: "两杯。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Sugar!",                         zh: "糖！",                    type: "broExcite",  speaker: "brother" },
        { en: "One cup.",                       zh: "一杯。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Stir.",                          zh: "搅。",                    type: "casual",     speaker: "mom" },
        { en: "My arm hurts.",                  zh: "胳膊酸。",                type: "broWhine",   speaker: "brother" },
        { en: "Wimp.",                          zh: "弱鸡。",                  type: "sisTease",   speaker: "sister" },
        { en: "Help me!",                       zh: "帮帮我！",                type: "broCute",    speaker: "brother" },
        { en: "Fine, move.",                    zh: "行，让开。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "Pour batter.",                   zh: "倒糊。",                  type: "casual",     speaker: "mom" },
        { en: "Smells already!",                zh: "已经香了！",              type: "broExcite",  speaker: "brother" },
        { en: "Lick the spoon?",                zh: "舔勺？",                  type: "broCute",    speaker: "brother" },
        { en: "After.",                         zh: "等会儿。",                type: "sisCalm",    speaker: "sister" },
        { en: "Into the oven.",                 zh: "进烤箱。",                type: "casual",     speaker: "mom" },
        { en: "How long?",                      zh: "多久？",                  type: "broCurious", speaker: "brother" },
        { en: "Thirty minutes.",                zh: "三十分钟。",              type: "sisCalm",    speaker: "sister" },
        { en: "Forever!",                       zh: "好久！",                  type: "broWhine",   speaker: "brother" },
        { en: "Smells so good.",                zh: "好香。",                  type: "sisCalm",    speaker: "sister" }
      ]
    },

    // ====================================================
    // Day 33: 厨房安全教育
    // ====================================================
    {
      id: 33, theme: "厨房安全", desc: "妈妈讲规矩：刀、火、水、电、烫",
      sentences: [
        { en: "Don't touch the stove.",         zh: "别碰炉子。",              type: "momFirm",    speaker: "mom" },
        { en: "It's off.",                      zh: "没开。",                  type: "broPout",    speaker: "brother" },
        { en: "Still hot.",                     zh: "还烫着。",                type: "momWorry",   speaker: "mom" },
        { en: "Oh.",                            zh: "哦。",                    type: "broCalm",    speaker: "brother" },
        { en: "Knives stay up.",                zh: "刀放高处。",              type: "momFirm",    speaker: "mom" },
        { en: "Even small ones?",               zh: "小的也？",                type: "sisCurious", speaker: "sister" },
        { en: "Even small.",                    zh: "小的也。",                type: "momFirm",    speaker: "mom" },
        { en: "Got it.",                        zh: "懂。",                    type: "sisCalm",    speaker: "sister" },
        { en: "He's near the fire!",            zh: "他靠近火！",              type: "sisTell",    speaker: "sister" },
        { en: "I'm not!",                       zh: "我没！",                  type: "broPout",    speaker: "brother" },
        { en: "Step back.",                     zh: "退一步。",                type: "momFirm",    speaker: "mom" },
        { en: "Three big steps.",               zh: "三大步。",                type: "broCalm",    speaker: "brother" },
        { en: "Good.",                          zh: "好。",                    type: "momSoft",    speaker: "mom" },
        { en: "Water and oil?",                 zh: "水跟油？",                type: "sisCurious", speaker: "sister" },
        { en: "Never mix.",                     zh: "千万别碰。",              type: "momFirm",    speaker: "mom" },
        { en: "Why not?",                       zh: "为啥？",                  type: "broCurious", speaker: "brother" },
        { en: "It splatters.",                  zh: "会炸开。",                type: "sisCalm",    speaker: "sister" },
        { en: "Like fireworks?",                zh: "像烟花？",                type: "broSilly",   speaker: "brother" },
        { en: "Bad fireworks.",                 zh: "烫人的烟花。",            type: "sisTease",   speaker: "sister" },
        { en: "Plug stays dry.",                zh: "插座别沾水。",            type: "momFirm",    speaker: "mom" },
        { en: "The kettle's hot.",              zh: "水壶烫。",                type: "sisCalm",    speaker: "sister" },
        { en: "Don't touch.",                   zh: "别碰。",                  type: "momFirm",    speaker: "mom" },
        { en: "I won't.",                       zh: "不碰。",                  type: "broCalm",    speaker: "brother" },
        { en: "Gloves for that.",               zh: "戴手套。",                type: "casual",     speaker: "mom" },
        { en: "Big mitts!",                     zh: "大手套！",                type: "broExcite",  speaker: "brother" },
        { en: "Put them on.",                   zh: "戴上。",                  type: "sisBoss",    speaker: "sister" },
        { en: "Like a robot.",                  zh: "像机器人。",              type: "broSilly",   speaker: "brother" },
        { en: "Lift slowly.",                   zh: "慢慢端。",                type: "sisCalm",    speaker: "sister" },
        { en: "Heavy!",                         zh: "好重！",                  type: "broWhine",   speaker: "brother" },
        { en: "Set it down.",                   zh: "放下。",                  type: "momFirm",    speaker: "mom" }
      ]
    },

    // ====================================================
    // Day 34: 妈妈教剥（蛋、橘、虾、蒜、玉米）
    // ====================================================
    {
      id: 34, theme: "妈妈教剥", desc: "鸡蛋橘子虾蒜玉米，弟弟手笨被姐姐损",
      sentences: [
        { en: "Peel this egg.",                 zh: "剥这鸡蛋。",              type: "casual",     speaker: "mom" },
        { en: "How?",                           zh: "咋剥？",                  type: "broCurious", speaker: "brother" },
        { en: "Tap and roll.",                  zh: "磕，搓。",                type: "sisCalm",    speaker: "sister" },
        { en: "Like this?",                     zh: "这样？",                  type: "broCurious", speaker: "brother" },
        { en: "Harder.",                        zh: "用力。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Shell stuck!",                   zh: "粘住了！",                type: "broWhine",   speaker: "brother" },
        { en: "Under water.",                   zh: "水里剥。",                type: "casual",     speaker: "mom" },
        { en: "Oh, easier!",                    zh: "哦容易！",                type: "broExcite",  speaker: "brother" },
        { en: "Orange next.",                   zh: "下个橘子。",              type: "casual",     speaker: "mom" },
        { en: "It's tight.",                    zh: "皮厚。",                  type: "broWhine",   speaker: "brother" },
        { en: "Use your nail.",                 zh: "用指甲。",                type: "sisCalm",    speaker: "sister" },
        { en: "Juice squirts.",                 zh: "汁喷。",                  type: "broWhine",   speaker: "brother" },
        { en: "Aim down.",                      zh: "朝下。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Got me!",                        zh: "喷我了！",                type: "broLoud",    speaker: "brother" },
        { en: "Sorry.",                         zh: "抱歉。",                  type: "broPout",    speaker: "brother" },
        { en: "Shrimp time.",                   zh: "剥虾。",                  type: "casual",     speaker: "mom" },
        { en: "Yuck, slimy.",                   zh: "黏糊糊。",                type: "broWhine",   speaker: "brother" },
        { en: "Pull the head.",                 zh: "揪头。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Gross!",                         zh: "恶心！",                  type: "broLoud",    speaker: "brother" },
        { en: "Don't be a baby.",               zh: "别那么娇。",              type: "sisTease",   speaker: "sister" },
        { en: "Pretty pink.",                   zh: "粉粉的。",                type: "broCalm",    speaker: "brother" },
        { en: "Garlic now.",                   zh: "剥蒜。",                  type: "casual",     speaker: "mom" },
        { en: "So small.",                      zh: "好小。",                  type: "broWhine",   speaker: "brother" },
        { en: "Smash first.",                   zh: "先拍扁。",                type: "sisCalm",    speaker: "sister" },
        { en: "With what?",                     zh: "用啥？",                  type: "broCurious", speaker: "brother" },
        { en: "Knife flat.",                    zh: "刀拍。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Pop!",                           zh: "啪！",                    type: "broExcite",  speaker: "brother" },
        { en: "Skin slips off.",                zh: "皮就掉。",                type: "sisProud",   speaker: "sister" },
        { en: "Corn last?",                     zh: "最后玉米？",              type: "broCurious", speaker: "brother" },
        { en: "Strip the husk.",                zh: "剥皮。",                  type: "casual",     speaker: "mom" }
      ]
    },

    // ====================================================
    // Day 35: 妈妈教切
    // ====================================================
    {
      id: 35, theme: "妈妈教切菜", desc: "黄瓜土豆西红柿香肠面包，姐姐示范",
      sentences: [
        { en: "Cut the cucumber.",              zh: "切黄瓜。",                type: "casual",     speaker: "mom" },
        { en: "Whole one?",                     zh: "整根？",                  type: "broCurious", speaker: "brother" },
        { en: "Half.",                          zh: "一半。",                  type: "casual",     speaker: "mom" },
        { en: "With what?",                     zh: "用啥切？",                type: "broCurious", speaker: "brother" },
        { en: "Small knife.",                   zh: "小刀。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Hold it firm.",                  zh: "按住。",                  type: "sisBoss",    speaker: "sister" },
        { en: "Like this?",                     zh: "这样？",                  type: "broCurious", speaker: "brother" },
        { en: "Curl your fingers.",             zh: "手指弯起来。",            type: "sisCalm",    speaker: "sister" },
        { en: "Why?",                           zh: "为啥？",                  type: "broCurious", speaker: "brother" },
        { en: "So you don't cut.",              zh: "免得切手。",              type: "sisCalm",    speaker: "sister" },
        { en: "Slow.",                          zh: "慢点。",                  type: "momFirm",    speaker: "mom" },
        { en: "Too thick!",                     zh: "太厚！",                  type: "broWhine",   speaker: "brother" },
        { en: "Thinner.",                       zh: "薄点。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Now?",                           zh: "这样？",                  type: "broCurious", speaker: "brother" },
        { en: "Better.",                        zh: "好多了。",                type: "sisCalm",    speaker: "sister" },
        { en: "Potato julienne?",               zh: "土豆切丝？",              type: "casual",     speaker: "mom" },
        { en: "What's that?",                   zh: "啥是丝？",                type: "broCurious", speaker: "brother" },
        { en: "Thin sticks.",                   zh: "细条。",                  type: "sisCalm",    speaker: "sister" },
        { en: "So thin!",                       zh: "好细！",                  type: "broExcite",  speaker: "brother" },
        { en: "Practice.",                      zh: "多练。",                  type: "momSoft",    speaker: "mom" },
        { en: "Tomato next.",                   zh: "下个西红柿。",            type: "casual",     speaker: "mom" },
        { en: "They squish.",                   zh: "软的。",                  type: "broWhine",   speaker: "brother" },
        { en: "Sharper knife.",                 zh: "换快刀。",                type: "sisCalm",    speaker: "sister" },
        { en: "Careful!",                       zh: "小心！",                  type: "momWorry",   speaker: "mom" },
        { en: "Sausage round?",                 zh: "香肠切圆？",              type: "broCurious", speaker: "brother" },
        { en: "Yes, slices.",                   zh: "对，片。",                type: "casual",     speaker: "mom" },
        { en: "Even pieces.",                   zh: "厚薄一样。",              type: "sisBoss",    speaker: "sister" },
        { en: "Bread last.",                    zh: "最后切面包。",            type: "casual",     speaker: "mom" },
        { en: "Saw it.",                        zh: "锯一下。",                type: "sisCalm",    speaker: "sister" },
        { en: "Like a saw?",                    zh: "像锯子？",                type: "broSilly",   speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 36: 调味料认知
    // ====================================================
    {
      id: 36, theme: "认识调味料", desc: "盐糖酱油醋辣椒花椒，弟弟乱舔被辣",
      sentences: [
        { en: "What's the white stuff?",        zh: "白的啥？",                type: "broCurious", speaker: "brother" },
        { en: "Salt.",                          zh: "盐。",                    type: "sisCalm",    speaker: "sister" },
        { en: "Sweet too?",                     zh: "也甜的？",                type: "broCurious", speaker: "brother" },
        { en: "That's sugar.",                  zh: "那是糖。",                type: "sisCalm",    speaker: "sister" },
        { en: "Same color!",                    zh: "颜色一样！",              type: "broLoud",    speaker: "brother" },
        { en: "Taste it.",                      zh: "尝尝。",                  type: "sisTease",   speaker: "sister" },
        { en: "Ack, salty!",                    zh: "啊，咸！",                type: "broWhine",   speaker: "brother" },
        { en: "Told you.",                      zh: "我说了吧。",              type: "sisProud",   speaker: "sister" },
        { en: "Soy sauce?",                     zh: "酱油？",                  type: "broCurious", speaker: "brother" },
        { en: "Dark bottle.",                   zh: "深色瓶子。",              type: "sisCalm",    speaker: "sister" },
        { en: "Smells strong.",                 zh: "味儿冲。",                type: "broCalm",    speaker: "brother" },
        { en: "Add a drop.",                    zh: "滴一滴。",                type: "casual",     speaker: "mom" },
        { en: "Vinegar where?",                 zh: "醋在哪？",                type: "sisCurious", speaker: "sister" },
        { en: "Top shelf.",                     zh: "上层。",                  type: "casual",     speaker: "mom" },
        { en: "Smells sour.",                   zh: "酸味。",                  type: "broCalm",    speaker: "brother" },
        { en: "Yep, sour.",                     zh: "嗯，酸。",                type: "sisCalm",    speaker: "sister" },
        { en: "Chili peppers!",                 zh: "辣椒！",                  type: "broExcite",  speaker: "brother" },
        { en: "Don't lick.",                    zh: "别舔。",                  type: "sisBoss",    speaker: "sister" },
        { en: "Why?",                           zh: "为啥？",                  type: "broCurious", speaker: "brother" },
        { en: "Burns.",                         zh: "辣死。",                  type: "sisCalm",    speaker: "sister" },
        { en: "I'll try.",                      zh: "我试试。",                type: "broSilly",   speaker: "brother" },
        { en: "Don't!",                         zh: "别！",                    type: "sisAnnoy",   speaker: "sister" },
        { en: "Ouch! Hot!",                     zh: "哎呦辣！",                type: "broLoud",    speaker: "brother" },
        { en: "Told you.",                      zh: "说了吧。",                type: "sisTease",   speaker: "sister" },
        { en: "Water!",                         zh: "水！",                    type: "broLoud",    speaker: "brother" },
        { en: "Drink milk.",                    zh: "喝牛奶。",                type: "sisCalm",    speaker: "sister" },
        { en: "Sichuan pepper?",                zh: "花椒？",                  type: "broCurious", speaker: "brother" },
        { en: "Numbs you.",                     zh: "麻嘴。",                  type: "sisCalm",    speaker: "sister" },
        { en: "MSG last.",                      zh: "最后味精。",              type: "casual",     speaker: "mom" },
        { en: "So many!",                       zh: "好多种！",                type: "broExcite",  speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 37: 吃饭餐具
    // ====================================================
    {
      id: 37, theme: "摆餐具", desc: "碗筷勺叉刀盘杯，姐弟分工",
      sentences: [
        { en: "Set the table.",                 zh: "摆桌子。",                type: "casual",     speaker: "mom" },
        { en: "How many?",                      zh: "几个人？",                type: "broCurious", speaker: "brother" },
        { en: "Four people.",                   zh: "四个。",                  type: "casual",     speaker: "mom" },
        { en: "Bowls?",                         zh: "碗？",                    type: "sisCurious", speaker: "sister" },
        { en: "Big ones.",                      zh: "大的。",                  type: "casual",     speaker: "mom" },
        { en: "Chopsticks too.",                zh: "筷子也拿。",              type: "broCalm",    speaker: "brother" },
        { en: "Match the pairs.",               zh: "成双。",                  type: "sisBoss",    speaker: "sister" },
        { en: "They all look same.",            zh: "都一样。",                type: "broWhine",   speaker: "brother" },
        { en: "Not really.",                    zh: "不一样。",                type: "sisCalm",    speaker: "sister" },
        { en: "Spoons!",                        zh: "勺！",                    type: "broExcite",  speaker: "brother" },
        { en: "Soup spoons.",                   zh: "汤勺。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Forks?",                         zh: "叉？",                    type: "broCurious", speaker: "brother" },
        { en: "Not tonight.",                   zh: "今晚不用。",              type: "casual",     speaker: "mom" },
        { en: "Why not?",                       zh: "为啥？",                  type: "broCurious", speaker: "brother" },
        { en: "Chinese food.",                  zh: "中餐。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Knife?",                         zh: "刀呢？",                  type: "broCurious", speaker: "brother" },
        { en: "Just for cutting.",              zh: "切菜用。",                type: "sisCalm",    speaker: "sister" },
        { en: "Where's mine?",                  zh: "我的呢？",                type: "broCurious", speaker: "brother" },
        { en: "In the drawer.",                 zh: "抽屉里。",                type: "sisCalm",    speaker: "sister" },
        { en: "Plates next.",                   zh: "再摆盘。",                type: "casual",     speaker: "mom" },
        { en: "Round or square?",               zh: "圆的方的？",              type: "broCurious", speaker: "brother" },
        { en: "Round.",                         zh: "圆的。",                  type: "casual",     speaker: "mom" },
        { en: "Cups too.",                      zh: "杯子。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Water cups?",                    zh: "水杯？",                  type: "broCurious", speaker: "brother" },
        { en: "Or tea.",                        zh: "或茶杯。",                type: "sisCalm",    speaker: "sister" },
        { en: "Pick one.",                      zh: "随便挑。",                type: "casual",     speaker: "mom" },
        { en: "Mine has flowers.",              zh: "我的有花。",              type: "broExcite",  speaker: "brother" },
        { en: "Mine's plain.",                  zh: "我的素的。",              type: "sisCalm",    speaker: "sister" },
        { en: "Trade?",                         zh: "换换？",                  type: "broCute",    speaker: "brother" },
        { en: "No way.",                        zh: "不换。",                  type: "sisAnnoy",   speaker: "sister" }
      ]
    },

    // ====================================================
    // Day 38: 餐桌礼仪
    // ====================================================
    {
      id: 38, theme: "餐桌礼仪", desc: "不挑食、不抢、嘴里别说话、等大人",
      sentences: [
        { en: "Don't pick.",                    zh: "别挑。",                  type: "momFirm",    speaker: "mom" },
        { en: "I'm picky.",                     zh: "我挑食。",                type: "broPout",    speaker: "brother" },
        { en: "Eat it.",                        zh: "吃掉。",                  type: "momFirm",    speaker: "mom" },
        { en: "Yuck.",                          zh: "恶心。",                  type: "broWhine",   speaker: "brother" },
        { en: "Don't reach.",                   zh: "别伸。",                  type: "sisAnnoy",   speaker: "sister" },
        { en: "I want carrots.",                zh: "我要胡萝卜。",            type: "broWhine",   speaker: "brother" },
        { en: "Ask.",                           zh: "说一声。",                type: "sisBoss",    speaker: "sister" },
        { en: "Pass them please.",              zh: "递我谢谢。",              type: "broCute",    speaker: "brother" },
        { en: "Better.",                        zh: "这才对。",                type: "sisCalm",    speaker: "sister" },
        { en: "Don't chew loud.",               zh: "别吧唧嘴。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "I don't!",                       zh: "我没！",                  type: "broPout",    speaker: "brother" },
        { en: "You do.",                        zh: "你就有。",                type: "sisTease",   speaker: "sister" },
        { en: "Mouth closed.",                  zh: "闭嘴嚼。",                type: "momFirm",    speaker: "mom" },
        { en: "He's gross.",                    zh: "他真脏。",                type: "sisTell",    speaker: "sister" },
        { en: "I'm not!",                       zh: "我没！",                  type: "broLoud",    speaker: "brother" },
        { en: "Mom, look!",                     zh: "妈你看！",                type: "sisTell",    speaker: "sister" },
        { en: "Enough.",                        zh: "够了。",                  type: "momTired",   speaker: "mom" },
        { en: "Wait for dad.",                  zh: "等爸。",                  type: "momFirm",    speaker: "mom" },
        { en: "He's slow.",                     zh: "他真慢。",                type: "broWhine",   speaker: "brother" },
        { en: "Be patient.",                    zh: "耐心点。",                type: "sisCalm",    speaker: "sister" },
        { en: "Dad! Hurry!",                    zh: "爸！快点！",              type: "broLoud",    speaker: "brother" },
        { en: "Coming.",                        zh: "来了。",                  type: "dadCalm",    speaker: "dad" },
        { en: "Elbows off.",                    zh: "胳膊放下。",              type: "momFirm",    speaker: "mom" },
        { en: "Sorry.",                         zh: "对不起。",                type: "broPout",    speaker: "brother" },
        { en: "No phones.",                     zh: "不许玩手机。",            type: "momFirm",    speaker: "mom" },
        { en: "Mine's away.",                   zh: "我没拿。",                type: "sisCalm",    speaker: "sister" },
        { en: "Sit straight.",                  zh: "坐直。",                  type: "momFirm",    speaker: "mom" },
        { en: "My back hurts.",                 zh: "背疼。",                  type: "broWhine",   speaker: "brother" },
        { en: "Just for dinner.",               zh: "吃饭这会儿。",            type: "momSoft",    speaker: "mom" },
        { en: "Fine.",                          zh: "行吧。",                  type: "broPout",    speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 39: 妈妈嫌弃菜难吃
    // ====================================================
    {
      id: 39, theme: "妈嫌菜难吃", desc: "咸了淡了糊了生了，自我吐槽",
      sentences: [
        { en: "Too salty!",                     zh: "太咸！",                  type: "momWorry",   speaker: "mom" },
        { en: "Is it?",                         zh: "真的？",                  type: "sisCurious", speaker: "sister" },
        { en: "Way too salty.",                 zh: "齁死了。",                type: "momWorry",   speaker: "mom" },
        { en: "Wasn't me.",                     zh: "不是我。",                type: "broPout",    speaker: "brother" },
        { en: "Only I cook!",                   zh: "就我做饭。",              type: "momTired",   speaker: "mom" },
        { en: "Sorry mom.",                     zh: "对不起妈。",              type: "sisSweet",   speaker: "sister" },
        { en: "Now too bland.",                 zh: "又没味。",                type: "momWorry",   speaker: "mom" },
        { en: "Add salt?",                      zh: "加盐？",                  type: "broCurious", speaker: "brother" },
        { en: "Or not?",                        zh: "不加？",                  type: "sisCurious", speaker: "sister" },
        { en: "I forgot.",                      zh: "我忘了。",                type: "momTired",   speaker: "mom" },
        { en: "Smells burnt!",                  zh: "焦了！",                  type: "broLoud",    speaker: "brother" },
        { en: "Oh no!",                         zh: "完了！",                  type: "momWorry",   speaker: "mom" },
        { en: "Rescue it!",                     zh: "救一下！",                type: "sisLoud",    speaker: "sister" },
        { en: "Too late.",                      zh: "晚了。",                  type: "momTired",   speaker: "mom" },
        { en: "Throw it out.",                  zh: "扔了。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Try again.",                     zh: "再做一次。",              type: "momTired",   speaker: "mom" },
        { en: "Raw inside!",                    zh: "里面生！",                type: "momWorry",   speaker: "mom" },
        { en: "Eww.",                           zh: "恶心。",                  type: "broWhine",   speaker: "brother" },
        { en: "Re-cook it.",                    zh: "再煮一下。",              type: "sisCalm",    speaker: "sister" },
        { en: "Spicy bites!",                   zh: "辣口！",                  type: "momWorry",   speaker: "mom" },
        { en: "He likes spice.",                zh: "他爱辣。",                type: "sisTease",   speaker: "sister" },
        { en: "Not THIS spicy.",                zh: "不是这种辣。",            type: "momWorry",   speaker: "mom" },
        { en: "My tongue!",                     zh: "舌头！",                  type: "broLoud",    speaker: "brother" },
        { en: "Drink milk.",                    zh: "喝牛奶。",                type: "sisCalm",    speaker: "sister" },
        { en: "Oily soup.",                     zh: "汤太油。",                type: "momWorry",   speaker: "mom" },
        { en: "Looks shiny.",                   zh: "亮晶晶。",                type: "broSilly",   speaker: "brother" },
        { en: "Too much oil.",                  zh: "油多。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Skim it.",                       zh: "撇一下。",                type: "momTired",   speaker: "mom" },
        { en: "With spoon.",                    zh: "用勺。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Cooking's hard.",                zh: "做饭真难。",              type: "broCalm",    speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 40: 姐弟分零食
    // ====================================================
    {
      id: 40, theme: "分零食", desc: "几块谁多谁少，藏了被发现",
      sentences: [
        { en: "Cookies!",                       zh: "饼干！",                  type: "broExcite",  speaker: "brother" },
        { en: "How many?",                      zh: "几个？",                  type: "sisCurious", speaker: "sister" },
        { en: "Six.",                           zh: "六个。",                  type: "broCalm",    speaker: "brother" },
        { en: "Three each.",                    zh: "一人三。",                type: "sisCalm",    speaker: "sister" },
        { en: "I want four.",                   zh: "我要四个。",              type: "broWhine",   speaker: "brother" },
        { en: "Then I get two?",                zh: "我两个？",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Three each!",                    zh: "三个！",                  type: "broPout",    speaker: "brother" },
        { en: "You said four.",                 zh: "你说四。",                type: "sisTease",   speaker: "sister" },
        { en: "Three then.",                    zh: "那三个。",                type: "broPout",    speaker: "brother" },
        { en: "Smart move.",                    zh: "聪明。",                  type: "sisTease",   speaker: "sister" },
        { en: "Hide yours.",                    zh: "藏起来。",                type: "broWhisper", speaker: "brother" },
        { en: "Why?",                           zh: "为啥？",                  type: "sisCurious", speaker: "sister" },
        { en: "Mom won't see.",                 zh: "妈看不见。",              type: "broWhisper", speaker: "brother" },
        { en: "Mom sees.",                      zh: "妈看见了。",              type: "sisCalm",    speaker: "sister" },
        { en: "Whose are those?",               zh: "谁的？",                  type: "momFirm",    speaker: "mom" },
        { en: "Hers!",                          zh: "她的！",                  type: "broTell",    speaker: "brother" },
        { en: "His!",                           zh: "他的！",                  type: "sisTell",    speaker: "sister" },
        { en: "Both yours.",                    zh: "你俩的。",                type: "momTease",   speaker: "mom" },
        { en: "Yes mom.",                       zh: "对妈。",                  type: "broPout",    speaker: "brother" },
        { en: "Sneaky.",                        zh: "鬼鬼祟祟。",              type: "momTease",   speaker: "mom" },
        { en: "Share with us.",                 zh: "分给我们。",              type: "momTease",   speaker: "mom" },
        { en: "No fair!",                       zh: "不公平！",                type: "broPout",    speaker: "brother" },
        { en: "Family rule.",                   zh: "家规。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Two for mom.",                   zh: "给妈两个。",              type: "broPout",    speaker: "brother" },
        { en: "One left.",                      zh: "剩一个。",                type: "sisCalm",    speaker: "sister" },
        { en: "Split?",                         zh: "分？",                    type: "broCute",    speaker: "brother" },
        { en: "Bite each.",                     zh: "一人咬一口。",            type: "sisCalm",    speaker: "sister" },
        { en: "Cool.",                          zh: "行。",                    type: "broCalm",    speaker: "brother" },
        { en: "Your half bigger!",              zh: "你那半大！",              type: "broLoud",    speaker: "brother" },
        { en: "Crybaby.",                       zh: "爱哭鬼。",                type: "sisTease",   speaker: "sister" }
      ]
    },

    // ====================================================
    // Day 41: 衣服分类
    // ====================================================
    {
      id: 41, theme: "衣服分类", desc: "毛衣外套T恤裤子裙子袜子，一堆要叠",
      sentences: [
        { en: "Pile of clothes.",               zh: "一堆衣服。",              type: "casual",     speaker: "mom" },
        { en: "Sort it.",                       zh: "分类。",                  type: "momFirm",    speaker: "mom" },
        { en: "Sweaters here.",                 zh: "毛衣这堆。",              type: "sisCalm",    speaker: "sister" },
        { en: "T-shirts too?",                  zh: "T 恤也这堆？",            type: "broCurious", speaker: "brother" },
        { en: "Wrong pile.",                    zh: "放错了。",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Same fabric!",                   zh: "一样的料！",              type: "broPout",    speaker: "brother" },
        { en: "Different thing.",               zh: "不一样。",                type: "sisCalm",    speaker: "sister" },
        { en: "Pants where?",                   zh: "裤子呢？",                type: "broCurious", speaker: "brother" },
        { en: "Bottom drawer.",                 zh: "下层抽屉。",              type: "sisCalm",    speaker: "sister" },
        { en: "Skirts?",                        zh: "裙子？",                  type: "broCurious", speaker: "brother" },
        { en: "Mine.",                          zh: "我的。",                  type: "sisProud",   speaker: "sister" },
        { en: "Boys don't wear.",               zh: "男生不穿。",              type: "broCalm",    speaker: "brother" },
        { en: "Some do.",                       zh: "有的穿。",                type: "sisCalm",    speaker: "sister" },
        { en: "Socks!",                         zh: "袜子！",                  type: "broExcite",  speaker: "brother" },
        { en: "Match them.",                    zh: "配对。",                  type: "sisBoss",    speaker: "sister" },
        { en: "So many!",                       zh: "好多！",                  type: "broWhine",   speaker: "brother" },
        { en: "By color.",                      zh: "按颜色。",                type: "sisCalm",    speaker: "sister" },
        { en: "Black ones.",                    zh: "黑的。",                  type: "broCalm",    speaker: "brother" },
        { en: "White too.",                     zh: "白的也是。",              type: "sisCalm",    speaker: "sister" },
        { en: "Underwear.",                     zh: "内衣。",                  type: "casual",     speaker: "mom" },
        { en: "Eww.",                           zh: "恶心。",                  type: "broWhine",   speaker: "brother" },
        { en: "Just fold.",                     zh: "叠就完了。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "Pajamas?",                       zh: "睡衣？",                  type: "broCurious", speaker: "brother" },
        { en: "Top shelf.",                     zh: "上层。",                  type: "sisCalm",    speaker: "sister" },
        { en: "My hoodie?",                     zh: "我连帽衫？",              type: "broCurious", speaker: "brother" },
        { en: "In wash.",                       zh: "洗着呢。",                type: "sisCalm",    speaker: "sister" },
        { en: "Aw man.",                        zh: "哎呀。",                  type: "broWhine",   speaker: "brother" },
        { en: "Tomorrow.",                      zh: "明天好。",                type: "sisCalm",    speaker: "sister" },
        { en: "Fast though?",                   zh: "快点行吗？",              type: "broCute",    speaker: "brother" },
        { en: "Maybe.",                         zh: "看吧。",                  type: "sisCalm",    speaker: "sister" }
      ]
    },

    // ====================================================
    // Day 42: 鞋袜
    // ====================================================
    {
      id: 42, theme: "鞋袜", desc: "运动鞋皮鞋靴子拖鞋凉鞋雨鞋，弟弟少一只",
      sentences: [
        { en: "Where's left shoe?",             zh: "左鞋呢？",                type: "broCurious", speaker: "brother" },
        { en: "By the door.",                   zh: "门口。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Only right one.",                zh: "就右脚。",                type: "broWhine",   speaker: "brother" },
        { en: "Look again.",                    zh: "再找找。",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Found it!",                      zh: "找到了！",                type: "broExcite",  speaker: "brother" },
        { en: "Sneakers tomorrow.",             zh: "明天穿运动鞋。",          type: "casual",     speaker: "mom" },
        { en: "Leather shoes?",                 zh: "皮鞋呢？",                type: "sisCurious", speaker: "sister" },
        { en: "For school.",                    zh: "上学穿。",                type: "casual",     speaker: "mom" },
        { en: "I hate them.",                   zh: "我讨厌。",                type: "broWhine",   speaker: "brother" },
        { en: "They pinch.",                    zh: "夹脚。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Boots day?",                     zh: "穿靴子？",                type: "broCurious", speaker: "brother" },
        { en: "Raining?",                       zh: "下雨？",                  type: "sisCurious", speaker: "sister" },
        { en: "Yeah.",                          zh: "嗯。",                    type: "broCalm",    speaker: "brother" },
        { en: "Then boots.",                    zh: "那穿靴子。",              type: "sisCalm",    speaker: "sister" },
        { en: "Slippers worn out.",             zh: "拖鞋穿烂了。",            type: "casual",     speaker: "mom" },
        { en: "Buy new.",                       zh: "买新的。",                type: "sisCalm",    speaker: "sister" },
        { en: "Mine fit.",                      zh: "我合脚。",                type: "broExcite",  speaker: "brother" },
        { en: "Yours too big.",                 zh: "你太大。",                type: "sisTease",   speaker: "sister" },
        { en: "Are not.",                       zh: "不大。",                  type: "broPout",    speaker: "brother" },
        { en: "Walk normal.",                   zh: "好好走。",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Sandals stink.",                 zh: "凉鞋臭。",                type: "broWhine",   speaker: "brother" },
        { en: "Wash them.",                     zh: "洗一下。",                type: "sisCalm",    speaker: "sister" },
        { en: "Mom's old ones?",                zh: "妈穿旧的？",              type: "broCurious", speaker: "brother" },
        { en: "Those are mine!",                zh: "那是我的！",              type: "sisAnnoy",   speaker: "sister" },
        { en: "Mom gave you?",                  zh: "妈给你的？",              type: "broCurious", speaker: "brother" },
        { en: "Yes.",                           zh: "对。",                    type: "sisProud",   speaker: "sister" },
        { en: "Rain shoes!",                    zh: "雨鞋！",                  type: "broExcite",  speaker: "brother" },
        { en: "Galoshes.",                      zh: "胶鞋。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Fancy word.",                    zh: "高级词。",                type: "broSilly",   speaker: "brother" },
        { en: "Whatever.",                      zh: "随便。",                  type: "sisAnnoy",   speaker: "sister" }
      ]
    },

    // ====================================================
    // Day 43: 配饰
    // ====================================================
    {
      id: 43, theme: "配饰", desc: "围巾帽子手套口罩书包水壶，姐弟翻箱倒柜",
      sentences: [
        { en: "Where's my scarf?",              zh: "围巾呢？",                type: "sisCurious", speaker: "sister" },
        { en: "Closet.",                        zh: "衣柜。",                  type: "casual",     speaker: "mom" },
        { en: "Found it.",                      zh: "找到了。",                type: "sisCalm",    speaker: "sister" },
        { en: "Mine's missing.",                zh: "我的丢了。",              type: "broWhine",   speaker: "brother" },
        { en: "Hat too?",                       zh: "帽子也？",                type: "sisCurious", speaker: "sister" },
        { en: "Yeah.",                          zh: "嗯。",                    type: "broCalm",    speaker: "brother" },
        { en: "Look harder.",                   zh: "好好找。",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Help me!",                       zh: "帮我！",                  type: "broCute",    speaker: "brother" },
        { en: "Fine, where last?",              zh: "行，最后在哪？",          type: "sisCalm",    speaker: "sister" },
        { en: "School.",                        zh: "学校。",                  type: "broCalm",    speaker: "brother" },
        { en: "Left it there?",                 zh: "落那了？",                type: "sisCurious", speaker: "sister" },
        { en: "Maybe.",                         zh: "也许。",                  type: "broPout",    speaker: "brother" },
        { en: "Gloves match?",                  zh: "手套对？",                type: "sisCurious", speaker: "sister" },
        { en: "Yes.",                           zh: "对。",                    type: "broCalm",    speaker: "brother" },
        { en: "Both pairs?",                    zh: "两副都有？",              type: "sisCurious", speaker: "sister" },
        { en: "Mine blue.",                     zh: "我蓝的。",                type: "broCalm",    speaker: "brother" },
        { en: "Mine pink.",                     zh: "我粉的。",                type: "sisProud",   speaker: "sister" },
        { en: "Masks too.",                     zh: "口罩也带。",              type: "casual",     speaker: "mom" },
        { en: "Plain or fun?",                  zh: "素的花的？",              type: "broCurious", speaker: "brother" },
        { en: "Plain.",                         zh: "素的。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Fun's cooler!",                  zh: "花的酷！",                type: "broExcite",  speaker: "brother" },
        { en: "Boring works.",                  zh: "素的也行。",              type: "sisCalm",    speaker: "sister" },
        { en: "Backpack ready?",                zh: "书包好了？",              type: "casual",     speaker: "mom" },
        { en: "Heavy.",                         zh: "重。",                    type: "broWhine",   speaker: "brother" },
        { en: "Too many books.",                zh: "书太多。",                type: "sisCalm",    speaker: "sister" },
        { en: "Pack less.",                     zh: "少装点。",                type: "casual",     speaker: "mom" },
        { en: "Water bottle.",                  zh: "水壶。",                  type: "broCalm",    speaker: "brother" },
        { en: "Fill it.",                       zh: "装满。",                  type: "sisBoss",    speaker: "sister" },
        { en: "Cap tight?",                     zh: "盖紧了？",                type: "broCurious", speaker: "brother" },
        { en: "Check.",                         zh: "检查一下。",              type: "sisCalm",    speaker: "sister" }
      ]
    },

    // ====================================================
    // Day 44: 颜色互怼
    // ====================================================
    {
      id: 44, theme: "颜色互怼", desc: "你眼瞎/我就喜欢/红的丑/灰的闷",
      sentences: [
        { en: "New shirt!",                     zh: "新衣服！",                type: "broExcite",  speaker: "brother" },
        { en: "Eww red.",                       zh: "红的丑。",                type: "sisAnnoy",   speaker: "sister" },
        { en: "I love red.",                    zh: "我喜欢红。",              type: "broPout",    speaker: "brother" },
        { en: "Too bright.",                    zh: "太鲜。",                  type: "sisAnnoy",   speaker: "sister" },
        { en: "Your shirt's gray.",             zh: "你的灰的。",              type: "broTease",   speaker: "brother" },
        { en: "Gray's classy.",                 zh: "灰的高级。",              type: "sisProud",   speaker: "sister" },
        { en: "Gray's boring.",                 zh: "灰的闷。",                type: "broTease",   speaker: "brother" },
        { en: "Red's loud.",                    zh: "红的吵。",                type: "sisAnnoy",   speaker: "sister" },
        { en: "I'm bright.",                    zh: "我亮。",                  type: "broProud",   speaker: "brother" },
        { en: "You're loud.",                   zh: "你吵。",                  type: "sisTease",   speaker: "sister" },
        { en: "So?",                            zh: "那又咋？",                type: "broPout",    speaker: "brother" },
        { en: "Whatever.",                      zh: "随便。",                  type: "sisAnnoy",   speaker: "sister" },
        { en: "My socks blue.",                 zh: "我袜子蓝的。",            type: "broCalm",    speaker: "brother" },
        { en: "Like the ocean?",                zh: "像海？",                  type: "sisCurious", speaker: "sister" },
        { en: "Like sky.",                      zh: "像天。",                  type: "broCalm",    speaker: "brother" },
        { en: "Pretty.",                        zh: "好看。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Yellow shoes!",                  zh: "黄鞋！",                  type: "sisExcite",  speaker: "sister" },
        { en: "Banana feet.",                   zh: "香蕉脚。",                type: "broTease",   speaker: "brother" },
        { en: "Banana what?",                   zh: "啥香蕉？",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Banana feet!",                   zh: "香蕉脚！",                type: "broLoud",    speaker: "brother" },
        { en: "Mom, look.",                     zh: "妈看他。",                type: "sisTell",    speaker: "sister" },
        { en: "He says banana.",                zh: "他叫我香蕉。",            type: "sisWhine",   speaker: "sister" },
        { en: "Stop it.",                       zh: "别闹。",                  type: "momFirm",    speaker: "mom" },
        { en: "Pink hates me.",                 zh: "粉色烦我。",              type: "broSilly",   speaker: "brother" },
        { en: "Pink's nice.",                   zh: "粉色挺好。",              type: "sisCalm",    speaker: "sister" },
        { en: "Girls' color.",                  zh: "女孩色。",                type: "broPout",    speaker: "brother" },
        { en: "Says who?",                      zh: "谁说的？",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Everyone.",                      zh: "都这么说。",              type: "broPout",    speaker: "brother" },
        { en: "Old thinking.",                  zh: "老观念。",                type: "sisCalm",    speaker: "sister" },
        { en: "Whatever.",                      zh: "随便。",                  type: "broPout",    speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 45: 春夏秋冬穿啥
    // ====================================================
    {
      id: 45, theme: "四季穿衣", desc: "春外套夏短袖秋毛衣冬羽绒",
      sentences: [
        { en: "Spring clothes today.",          zh: "穿春装。",                type: "casual",     speaker: "mom" },
        { en: "Light jacket?",                  zh: "薄外套？",                type: "sisCurious", speaker: "sister" },
        { en: "Yeah, breezy.",                  zh: "嗯，有风。",              type: "casual",     speaker: "mom" },
        { en: "T-shirt under?",                 zh: "里面 T 恤？",             type: "broCurious", speaker: "brother" },
        { en: "Sure.",                          zh: "可以。",                  type: "casual",     speaker: "mom" },
        { en: "Summer next month!",             zh: "下月就夏天！",            type: "broExcite",  speaker: "brother" },
        { en: "Tank tops.",                     zh: "背心。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Shorts!",                        zh: "短裤！",                  type: "broExcite",  speaker: "brother" },
        { en: "Cooler shoes.",                  zh: "凉鞋。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Fall is best.",                  zh: "秋天最好。",              type: "sisProud",   speaker: "sister" },
        { en: "Why?",                           zh: "为啥？",                  type: "broCurious", speaker: "brother" },
        { en: "Sweaters cozy.",                 zh: "毛衣舒服。",              type: "sisCalm",    speaker: "sister" },
        { en: "Layers?",                        zh: "穿好几层？",              type: "broCurious", speaker: "brother" },
        { en: "Yep, layers.",                   zh: "对，分层。",              type: "sisCalm",    speaker: "sister" },
        { en: "Winter scares me.",              zh: "冬天吓人。",              type: "broScared",  speaker: "brother" },
        { en: "So cold.",                       zh: "好冷。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Down coat.",                     zh: "羽绒服。",                type: "casual",     speaker: "mom" },
        { en: "Heavy!",                         zh: "好重！",                  type: "broWhine",   speaker: "brother" },
        { en: "Warm though.",                   zh: "但暖。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Hat needed?",                    zh: "戴帽？",                  type: "broCurious", speaker: "brother" },
        { en: "Always.",                        zh: "必须。",                  type: "sisBoss",    speaker: "sister" },
        { en: "Snow boots?",                    zh: "雪靴？",                  type: "broCurious", speaker: "brother" },
        { en: "If snowing.",                    zh: "下雪才穿。",              type: "sisCalm",    speaker: "sister" },
        { en: "Mittens or gloves?",             zh: "连指还是分指？",          type: "broCurious", speaker: "brother" },
        { en: "Mittens warmer.",                zh: "连指暖。",                type: "sisCalm",    speaker: "sister" },
        { en: "Gloves cooler.",                 zh: "分指帅。",                type: "broProud",   speaker: "brother" },
        { en: "Both work.",                     zh: "都行。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Long johns?",                    zh: "秋裤？",                  type: "broCurious", speaker: "brother" },
        { en: "Under pants.",                   zh: "里面穿。",                type: "sisCalm",    speaker: "sister" },
        { en: "Itchy!",                         zh: "扎人！",                  type: "broWhine",   speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 46: 弟弟不肯穿
    // ====================================================
    {
      id: 46, theme: "弟弟不穿", desc: "嫌丑嫌刺嫌怪，全家无奈",
      sentences: [
        { en: "Put it on.",                     zh: "穿上。",                  type: "momFirm",    speaker: "mom" },
        { en: "No!",                            zh: "不要！",                  type: "broPout",    speaker: "brother" },
        { en: "Why not?",                       zh: "为啥？",                  type: "momTired",   speaker: "mom" },
        { en: "It's ugly.",                     zh: "丑。",                    type: "broPout",    speaker: "brother" },
        { en: "It's fine.",                     zh: "挺好的。",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Hate the collar.",               zh: "讨厌领子。",              type: "broWhine",   speaker: "brother" },
        { en: "It's just collar.",              zh: "领子而已。",              type: "sisAnnoy",   speaker: "sister" },
        { en: "Scratches me.",                  zh: "扎我。",                  type: "broWhine",   speaker: "brother" },
        { en: "Push it down.",                  zh: "压下去。",                type: "sisCalm",    speaker: "sister" },
        { en: "Doesn't help.",                  zh: "没用。",                  type: "broWhine",   speaker: "brother" },
        { en: "Try this.",                      zh: "试这件。",                type: "casual",     speaker: "mom" },
        { en: "Itchy!",                         zh: "痒！",                    type: "broWhine",   speaker: "brother" },
        { en: "The fabric's fine.",             zh: "料子没事。",              type: "sisCalm",    speaker: "sister" },
        { en: "Not to me.",                     zh: "我不这样觉得。",          type: "broPout",    speaker: "brother" },
        { en: "Pick something.",                zh: "选一件吧。",              type: "momTired",   speaker: "mom" },
        { en: "Nothing!",                       zh: "都不行！",                type: "broLoud",    speaker: "brother" },
        { en: "We're late.",                    zh: "迟到了。",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Don't care.",                    zh: "不在乎。",                type: "broPout",    speaker: "brother" },
        { en: "Then naked?",                    zh: "光着？",                  type: "sisTease",   speaker: "sister" },
        { en: "Mom!",                           zh: "妈！",                    type: "broTell",    speaker: "brother" },
        { en: "Stop teasing.",                  zh: "别逗。",                  type: "momFirm",    speaker: "mom" },
        { en: "Wear this one.",                 zh: "穿这件。",                type: "momFirm",    speaker: "mom" },
        { en: "Looks weird.",                   zh: "怪怪的。",                type: "broWhine",   speaker: "brother" },
        { en: "It's fine.",                     zh: "没事。",                  type: "momTired",   speaker: "mom" },
        { en: "Like a girl.",                   zh: "像女生。",                type: "broPout",    speaker: "brother" },
        { en: "Stop.",                          zh: "别说了。",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Just pull it on.",               zh: "套上就行。",              type: "momFirm",    speaker: "mom" },
        { en: "Quick!",                         zh: "快！",                    type: "sisBoss",    speaker: "sister" },
        { en: "Fine.",                          zh: "行吧。",                  type: "broPout",    speaker: "brother" },
        { en: "Don't laugh.",                   zh: "别笑我。",                type: "broWhine",   speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 47: 妈妈检查仪容
    // ====================================================
    {
      id: 47, theme: "检查仪容", desc: "衣服反了头发乱扣子错位",
      sentences: [
        { en: "Stop here.",                     zh: "站住。",                  type: "momFirm",    speaker: "mom" },
        { en: "What?",                          zh: "啥？",                    type: "sisCurious", speaker: "sister" },
        { en: "Shirt inside out.",              zh: "衣服穿反了。",            type: "momWorry",   speaker: "mom" },
        { en: "Oops!",                          zh: "哎呀！",                  type: "sisAnnoy",   speaker: "sister" },
        { en: "Flip it.",                       zh: "翻过来。",                type: "momFirm",    speaker: "mom" },
        { en: "Cold!",                          zh: "冷！",                    type: "sisWhine",   speaker: "sister" },
        { en: "Brush your hair.",               zh: "梳头。",                  type: "momFirm",    speaker: "mom" },
        { en: "I did.",                         zh: "梳了。",                  type: "broPout",    speaker: "brother" },
        { en: "Looks messy.",                   zh: "看着乱。",                type: "momWorry",   speaker: "mom" },
        { en: "Cowlick!",                       zh: "翘毛！",                  type: "sisTease",   speaker: "sister" },
        { en: "Where?",                         zh: "哪？",                    type: "broCurious", speaker: "brother" },
        { en: "Back of head.",                  zh: "后脑勺。",                type: "sisCalm",    speaker: "sister" },
        { en: "Smash it down.",                 zh: "压下去。",                type: "broCalm",    speaker: "brother" },
        { en: "Doesn't work.",                  zh: "压不下。",                type: "sisCalm",    speaker: "sister" },
        { en: "Try water.",                     zh: "蘸水。",                  type: "casual",     speaker: "mom" },
        { en: "Wet hair?",                      zh: "湿头？",                  type: "broCurious", speaker: "brother" },
        { en: "Just a bit.",                    zh: "一点点。",                type: "momSoft",    speaker: "mom" },
        { en: "Buttons wrong!",                 zh: "扣错了！",                type: "sisTell",    speaker: "sister" },
        { en: "Where?",                         zh: "哪儿？",                  type: "broCurious", speaker: "brother" },
        { en: "Middle.",                        zh: "中间。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Skipped one.",                   zh: "跳了一个。",              type: "broPout",    speaker: "brother" },
        { en: "Redo them.",                     zh: "重扣。",                  type: "sisBoss",    speaker: "sister" },
        { en: "Fingers slow.",                  zh: "手慢。",                  type: "broWhine",   speaker: "brother" },
        { en: "Hurry up.",                      zh: "快点。",                  type: "sisAnnoy",   speaker: "sister" },
        { en: "Socks match?",                   zh: "袜子对吗？",              type: "momFirm",    speaker: "mom" },
        { en: "One blue, one black.",           zh: "一蓝一黑。",              type: "broCalm",    speaker: "brother" },
        { en: "Close enough.",                  zh: "差不多。",                type: "broSilly",   speaker: "brother" },
        { en: "Mom said match.",                zh: "妈说要一对。",            type: "sisAnnoy",   speaker: "sister" },
        { en: "Change one.",                    zh: "换一只。",                type: "momFirm",    speaker: "mom" },
        { en: "Fine.",                          zh: "行。",                    type: "broPout",    speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 48: 第一天穿新衣
    // ====================================================
    {
      id: 48, theme: "新衣炫耀", desc: "姐姐显摆，弟弟酸言酸语",
      sentences: [
        { en: "New jacket!",                    zh: "新外套！",                type: "sisProud",   speaker: "sister" },
        { en: "So cool.",                       zh: "酷。",                    type: "broCalm",    speaker: "brother" },
        { en: "Got it yesterday.",              zh: "昨天买的。",              type: "sisProud",   speaker: "sister" },
        { en: "Show me.",                       zh: "给我看。",                type: "broCurious", speaker: "brother" },
        { en: "Look, sparkles.",                zh: "看，亮片。",              type: "sisProud",   speaker: "sister" },
        { en: "Tacky.",                         zh: "土。",                    type: "broTease",   speaker: "brother" },
        { en: "Is not!",                        zh: "才不是！",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Bling overload.",                zh: "太闪。",                  type: "broTease",   speaker: "brother" },
        { en: "You're jealous.",                zh: "你嫉妒。",                type: "sisTease",   speaker: "sister" },
        { en: "Am not.",                        zh: "才不是。",                type: "broPout",    speaker: "brother" },
        { en: "Yours is plain.",                zh: "你的素。",                type: "sisTease",   speaker: "sister" },
        { en: "Plain's classic.",               zh: "素的经典。",              type: "broCalm",    speaker: "brother" },
        { en: "Boring.",                        zh: "闷。",                    type: "sisTease",   speaker: "sister" },
        { en: "Like dad's.",                    zh: "跟爸的一样。",            type: "broProud",   speaker: "brother" },
        { en: "Dad's stylish.",                 zh: "爸时髦。",                type: "sisProud",   speaker: "sister" },
        { en: "Says you.",                      zh: "你说的。",                type: "broTease",   speaker: "brother" },
        { en: "Says everyone.",                 zh: "大家都说。",              type: "sisProud",   speaker: "sister" },
        { en: "Sparkles fall off.",             zh: "亮片会掉。",              type: "broTease",   speaker: "brother" },
        { en: "They won't.",                    zh: "不会掉。",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Bet they will.",                 zh: "打赌会。",                type: "broTease",   speaker: "brother" },
        { en: "Mom!",                           zh: "妈！",                    type: "sisTell",    speaker: "sister" },
        { en: "He says they fall!",             zh: "他说亮片会掉！",          type: "sisWhine",   speaker: "sister" },
        { en: "They might.",                    zh: "可能会。",                type: "momTease",   speaker: "mom" },
        { en: "See?",                           zh: "看吧？",                  type: "broProud",   speaker: "brother" },
        { en: "Hmph.",                          zh: "哼。",                    type: "sisAnnoy",   speaker: "sister" },
        { en: "Still pretty.",                  zh: "还是好看。",              type: "momSoft",    speaker: "mom" },
        { en: "Thanks mom.",                    zh: "谢谢妈。",                type: "sisSweet",   speaker: "sister" },
        { en: "Be careful.",                    zh: "小心点。",                type: "momFirm",    speaker: "mom" },
        { en: "I will.",                        zh: "会的。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Don't ruin it.",                 zh: "别弄坏。",                type: "broTease",   speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 49: 衣服破了脏了
    // ====================================================
    {
      id: 49, theme: "衣服脏破", desc: "弟弟摔泥里，妈炸",
      sentences: [
        { en: "Look at you!",                   zh: "看你这样！",              type: "momWorry",   speaker: "mom" },
        { en: "I fell.",                        zh: "我摔了。",                type: "broCry",     speaker: "brother" },
        { en: "Mud everywhere!",                zh: "全是泥！",                type: "momWorry",   speaker: "mom" },
        { en: "Slipped on grass.",              zh: "草上滑。",                type: "broWhine",   speaker: "brother" },
        { en: "Pants ripped.",                  zh: "裤子破了。",              type: "sisTell",    speaker: "sister" },
        { en: "Knee too.",                      zh: "膝盖也破。",              type: "momWorry",   speaker: "mom" },
        { en: "Hurts.",                         zh: "疼。",                    type: "broCry",     speaker: "brother" },
        { en: "Take it off.",                   zh: "脱掉。",                  type: "momFirm",    speaker: "mom" },
        { en: "Cold floor.",                    zh: "地凉。",                  type: "broWhine",   speaker: "brother" },
        { en: "Dad's old shirt.",               zh: "穿爸旧 T。",              type: "casual",     speaker: "mom" },
        { en: "Too big.",                       zh: "大了。",                  type: "broWhine",   speaker: "brother" },
        { en: "For now.",                       zh: "先穿。",                  type: "momTired",   speaker: "mom" },
        { en: "Can mend?",                      zh: "能补吗？",                type: "sisCurious", speaker: "sister" },
        { en: "Maybe.",                         zh: "看吧。",                  type: "momTired",   speaker: "mom" },
        { en: "Patch it.",                      zh: "打补丁。",                type: "sisCalm",    speaker: "sister" },
        { en: "Iron-on.",                       zh: "熨贴。",                  type: "casual",     speaker: "mom" },
        { en: "Cool.",                          zh: "酷。",                    type: "sisCalm",    speaker: "sister" },
        { en: "Glue it?",                       zh: "用胶？",                  type: "broSilly",   speaker: "brother" },
        { en: "No!",                            zh: "不行！",                  type: "momFirm",    speaker: "mom" },
        { en: "Sew it.",                        zh: "缝。",                    type: "sisCalm",    speaker: "sister" },
        { en: "Mom can.",                       zh: "妈会。",                  type: "broCalm",    speaker: "brother" },
        { en: "Trash these.",                   zh: "扔了吧。",                type: "momTired",   speaker: "mom" },
        { en: "They're new!",                   zh: "新的！",                  type: "broWhine",   speaker: "brother" },
        { en: "Mud's a stain.",                 zh: "泥染上了。",              type: "sisCalm",    speaker: "sister" },
        { en: "Wash them.",                     zh: "洗洗。",                  type: "broCute",    speaker: "brother" },
        { en: "Won't come out.",                zh: "洗不掉。",                type: "momTired",   speaker: "mom" },
        { en: "Sad.",                           zh: "难过。",                  type: "broCry",     speaker: "brother" },
        { en: "Be careful next time.",          zh: "下次小心。",              type: "momFirm",    speaker: "mom" },
        { en: "I tried.",                       zh: "我尽力了。",              type: "broPout",    speaker: "brother" },
        { en: "Try harder.",                    zh: "再努力。",                type: "sisTease",   speaker: "sister" }
      ]
    },

    // ====================================================
    // Day 50: 收拾换季衣服
    // ====================================================
    {
      id: 50, theme: "换季衣服", desc: "翻箱子，捐衣服，留念旧物",
      sentences: [
        { en: "Pull out the bin.",              zh: "拉出箱子。",              type: "casual",     speaker: "mom" },
        { en: "Heavy!",                         zh: "重！",                    type: "broWhine",   speaker: "brother" },
        { en: "Pull together.",                 zh: "一起拉。",                type: "sisBoss",    speaker: "sister" },
        { en: "One two three!",                 zh: "一二三！",                type: "broExcite",  speaker: "brother" },
        { en: "Out!",                           zh: "出来了！",                type: "sisExcite",  speaker: "sister" },
        { en: "What's in here?",                zh: "里面啥？",                type: "broCurious", speaker: "brother" },
        { en: "Sweaters.",                      zh: "毛衣。",                  type: "casual",     speaker: "mom" },
        { en: "Smells like winter.",            zh: "冬天的味儿。",            type: "sisCalm",    speaker: "sister" },
        { en: "Cedar smell.",                   zh: "樟脑味。",                type: "casual",     speaker: "mom" },
        { en: "Whoa, my old hat.",              zh: "哇，我旧帽子。",          type: "broExcite",  speaker: "brother" },
        { en: "So tiny.",                       zh: "好小。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Was your size.",                 zh: "以前合你。",              type: "momSoft",    speaker: "mom" },
        { en: "Six years old?",                 zh: "六岁的？",                type: "broCurious", speaker: "brother" },
        { en: "Yep.",                           zh: "嗯。",                    type: "casual",     speaker: "mom" },
        { en: "Mine too!",                      zh: "我的也在！",              type: "sisExcite",  speaker: "sister" },
        { en: "Old uniform.",                   zh: "旧校服。",                type: "sisCalm",    speaker: "sister" },
        { en: "Donate this?",                   zh: "捐了？",                  type: "broCurious", speaker: "brother" },
        { en: "Sure.",                          zh: "好。",                    type: "casual",     speaker: "mom" },
        { en: "Keep this one.",                 zh: "这件留着。",              type: "sisSweet",   speaker: "sister" },
        { en: "Why?",                           zh: "为啥？",                  type: "broCurious", speaker: "brother" },
        { en: "First day shirt.",               zh: "上学第一天。",            type: "sisSoft",    speaker: "sister" },
        { en: "Awww.",                          zh: "哎呀。",                  type: "broSoft",    speaker: "brother" },
        { en: "Memory.",                        zh: "纪念。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Donate pile?",                   zh: "捐堆？",                  type: "broCurious", speaker: "brother" },
        { en: "Right side.",                    zh: "右边。",                  type: "casual",     speaker: "mom" },
        { en: "So many.",                       zh: "好多。",                  type: "broCalm",    speaker: "brother" },
        { en: "Someone needs.",                 zh: "有人需要。",              type: "momSoft",    speaker: "mom" },
        { en: "Nice.",                          zh: "好事。",                  type: "sisCalm",    speaker: "sister" },
        { en: "My turn?",                       zh: "我的？",                  type: "broCurious", speaker: "brother" },
        { en: "Bring summer stuff.",            zh: "拿夏装。",                type: "casual",     speaker: "mom" }
      ]
    },

    // ====================================================
    // Day 51: 出门前一万件事
    // ====================================================
    {
      id: 51, theme: "出门前清单", desc: "书包水壶作业红领巾口罩零钱",
      sentences: [
        { en: "Backpack!",                      zh: "书包！",                  type: "momCalling", speaker: "mom" },
        { en: "Got it.",                        zh: "拿了。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Water bottle?",                  zh: "水壶？",                  type: "momCalling", speaker: "mom" },
        { en: "Filled.",                        zh: "装满了。",                type: "sisCalm",    speaker: "sister" },
        { en: "Homework?",                      zh: "作业？",                  type: "momCalling", speaker: "mom" },
        { en: "Inside.",                        zh: "在里面。",                type: "broCalm",    speaker: "brother" },
        { en: "All of it?",                     zh: "全部？",                  type: "sisCurious", speaker: "sister" },
        { en: "Yes.",                           zh: "对。",                    type: "broCalm",    speaker: "brother" },
        { en: "Red scarf?",                     zh: "红领巾？",                type: "momCalling", speaker: "mom" },
        { en: "In bag.",                        zh: "在包。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Mask?",                          zh: "口罩？",                  type: "momCalling", speaker: "mom" },
        { en: "Pocket.",                        zh: "口袋。",                  type: "broCalm",    speaker: "brother" },
        { en: "Lunch money?",                   zh: "饭钱？",                  type: "momCalling", speaker: "mom" },
        { en: "Five yuan.",                     zh: "五块。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Same.",                          zh: "一样。",                  type: "broCalm",    speaker: "brother" },
        { en: "Phone?",                         zh: "手机？",                  type: "momCalling", speaker: "mom" },
        { en: "Off school days.",               zh: "上学日不带。",            type: "sisCalm",    speaker: "sister" },
        { en: "Right.",                         zh: "对。",                    type: "casual",     speaker: "mom" },
        { en: "Door key?",                      zh: "钥匙？",                  type: "momCalling", speaker: "mom" },
        { en: "Always neck.",                   zh: "挂脖子。",                type: "sisCalm",    speaker: "sister" },
        { en: "Shoelaces?",                     zh: "鞋带？",                  type: "momCalling", speaker: "mom" },
        { en: "Tied.",                          zh: "系了。",                  type: "broCalm",    speaker: "brother" },
        { en: "Tight?",                         zh: "紧吗？",                  type: "momCalling", speaker: "mom" },
        { en: "Tight.",                         zh: "紧。",                    type: "broCalm",    speaker: "brother" },
        { en: "Window closed?",                 zh: "窗关了？",                type: "momCalling", speaker: "mom" },
        { en: "Check.",                         zh: "查过。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Light off?",                     zh: "灯关了？",                type: "momCalling", speaker: "mom" },
        { en: "Off.",                           zh: "关了。",                  type: "broCalm",    speaker: "brother" },
        { en: "Move!",                          zh: "走！",                    type: "rushed",     speaker: "mom" },
        { en: "Going!",                         zh: "去了！",                  type: "broLoud",    speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 52: 上学路上聊
    // ====================================================
    {
      id: 52, theme: "上学路聊", desc: "动画测验同学八卦",
      sentences: [
        { en: "You watch it?",                  zh: "你看了？",                type: "sisCurious", speaker: "sister" },
        { en: "The cartoon?",                   zh: "动画片？",                type: "broCurious", speaker: "brother" },
        { en: "Yeah.",                          zh: "嗯。",                    type: "sisCalm",    speaker: "sister" },
        { en: "Best episode!",                  zh: "最棒一集！",              type: "broExcite",  speaker: "brother" },
        { en: "The dragon?",                    zh: "龙那集？",                type: "sisCurious", speaker: "sister" },
        { en: "Got beat.",                      zh: "被打败了。",              type: "broCalm",    speaker: "brother" },
        { en: "Sad!",                           zh: "难过！",                  type: "sisWhine",   speaker: "sister" },
        { en: "Cried?",                         zh: "哭了？",                  type: "broCurious", speaker: "brother" },
        { en: "Almost.",                        zh: "差点。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Wimp.",                          zh: "弱鸡。",                  type: "broTease",   speaker: "brother" },
        { en: "You did too.",                   zh: "你也哭了。",              type: "sisTease",   speaker: "sister" },
        { en: "Did not.",                       zh: "没有。",                  type: "broPout",    speaker: "brother" },
        { en: "Test today?",                    zh: "今天测验？",              type: "sisCurious", speaker: "sister" },
        { en: "Math.",                          zh: "数学。",                  type: "broCalm",    speaker: "brother" },
        { en: "Studied?",                       zh: "复习了？",                type: "sisCurious", speaker: "sister" },
        { en: "Kind of.",                       zh: "差不多。",                type: "broPout",    speaker: "brother" },
        { en: "Lying.",                         zh: "骗谁呢。",                type: "sisTease",   speaker: "sister" },
        { en: "Maybe.",                         zh: "也许。",                  type: "broSilly",   speaker: "brother" },
        { en: "Lily's coming back.",            zh: "莉莉要回来。",            type: "sisCalm",    speaker: "sister" },
        { en: "Who?",                           zh: "谁？",                    type: "broCurious", speaker: "brother" },
        { en: "My friend.",                     zh: "我朋友。",                type: "sisCalm",    speaker: "sister" },
        { en: "Oh.",                            zh: "哦。",                    type: "broCalm",    speaker: "brother" },
        { en: "Was sick.",                      zh: "她病了。",                type: "sisCalm",    speaker: "sister" },
        { en: "Better now?",                    zh: "好了吗？",                type: "broCurious", speaker: "brother" },
        { en: "Yeah.",                          zh: "嗯。",                    type: "sisCalm",    speaker: "sister" },
        { en: "Joe got punished.",              zh: "乔被罚了。",              type: "broCalm",    speaker: "brother" },
        { en: "Why?",                           zh: "为啥？",                  type: "sisCurious", speaker: "sister" },
        { en: "Fighting.",                      zh: "打架。",                  type: "broCalm",    speaker: "brother" },
        { en: "Dumb.",                          zh: "笨。",                    type: "sisAnnoy",   speaker: "sister" },
        { en: "Yeah.",                          zh: "嗯。",                    type: "broCalm",    speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 53: 校门口告别
    // ====================================================
    {
      id: 53, theme: "校门口告别", desc: "妈拥抱弟弟扭捏姐姐酷",
      sentences: [
        { en: "We're here.",                    zh: "到了。",                  type: "casual",     speaker: "mom" },
        { en: "Bye mom.",                       zh: "拜妈。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Hug?",                           zh: "抱一下？",                type: "momSoft",    speaker: "mom" },
        { en: "Quick!",                         zh: "快点！",                  type: "sisRushed",  speaker: "sister" },
        { en: "Aww.",                           zh: "哎呀。",                  type: "momSoft",    speaker: "mom" },
        { en: "Mom, stop.",                     zh: "妈，别。",                type: "broWhine",   speaker: "brother" },
        { en: "Just a hug.",                    zh: "抱一下嘛。",              type: "momSoft",    speaker: "mom" },
        { en: "Kids watching.",                 zh: "同学看着。",              type: "broWhisper", speaker: "brother" },
        { en: "So embarrassing.",               zh: "好丢人。",                type: "broPout",    speaker: "brother" },
        { en: "Whatever.",                      zh: "无所谓。",                type: "momTease",   speaker: "mom" },
        { en: "Bye-bye!",                       zh: "拜拜！",                  type: "sisSweet",   speaker: "sister" },
        { en: "See you.",                       zh: "回见。",                  type: "momSoft",    speaker: "mom" },
        { en: "Wait!",                          zh: "等等！",                  type: "broCalling", speaker: "brother" },
        { en: "What?",                          zh: "咋？",                    type: "momSoft",    speaker: "mom" },
        { en: "Kiss.",                          zh: "亲一下。",                type: "broCute",    speaker: "brother" },
        { en: "Quick one.",                     zh: "快的。",                  type: "momSoft",    speaker: "mom" },
        { en: "Bye!",                           zh: "拜！",                    type: "broExcite",  speaker: "brother" },
        { en: "Have fun!",                      zh: "开心点！",                type: "momSoft",    speaker: "mom" },
        { en: "Don't fight.",                   zh: "别吵架。",                type: "momFirm",    speaker: "mom" },
        { en: "We don't.",                      zh: "不吵。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Liar.",                          zh: "骗子。",                  type: "broTease",   speaker: "brother" },
        { en: "Hey!",                           zh: "喂！",                    type: "sisAnnoy",   speaker: "sister" },
        { en: "Behave.",                        zh: "乖。",                    type: "momFirm",    speaker: "mom" },
        { en: "Backpack tight?",                zh: "包背紧了？",              type: "momWorry",   speaker: "mom" },
        { en: "Mom!",                           zh: "妈！",                    type: "sisAnnoy",   speaker: "sister" },
        { en: "Stop fussing.",                  zh: "别唠叨。",                type: "sisAnnoy",   speaker: "sister" },
        { en: "Last check.",                    zh: "最后一遍。",              type: "momTired",   speaker: "mom" },
        { en: "Bye!",                           zh: "拜！",                    type: "broLoud",    speaker: "brother" },
        { en: "Run!",                           zh: "跑！",                    type: "sisRushed",  speaker: "sister" },
        { en: "Bell rings.",                    zh: "打铃了。",                type: "broLoud",    speaker: "brother" }
      ]
    },

    // ====================================================
    // Day 54: 早读课
    // ====================================================
    {
      id: 54, theme: "早读课", desc: "背单词读课文走神被老师叫",
      sentences: [
        { en: "Page 22.",                       zh: "翻到 22。",               type: "casual",     speaker: "teacher" },
        { en: "Read aloud.",                    zh: "大声读。",                type: "casual",     speaker: "teacher" },
        { en: "Where?",                         zh: "哪儿？",                  type: "broWhisper", speaker: "brother" },
        { en: "Second line.",                   zh: "第二行。",                type: "sisWhisper", speaker: "sister" },
        { en: "Loud!",                          zh: "好大声！",                type: "broLoud",    speaker: "brother" },
        { en: "Not yelling.",                   zh: "不是喊。",                type: "sisWhisper", speaker: "sister" },
        { en: "Quiet!",                         zh: "安静！",                  type: "casual",     speaker: "teacher" },
        { en: "Sorry.",                         zh: "对不起。",                type: "broPout",    speaker: "brother" },
        { en: "New words.",                     zh: "新单词。",                type: "casual",     speaker: "teacher" },
        { en: "Adventure.",                     zh: "冒险。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Hard one.",                      zh: "难。",                    type: "broWhine",   speaker: "brother" },
        { en: "Try.",                           zh: "试试。",                  type: "casual",     speaker: "teacher" },
        { en: "Adver... ad...",                 zh: "冒... 冒...",             type: "broWhine",   speaker: "brother" },
        { en: "Adventure.",                     zh: "冒险。",                  type: "sisWhisper", speaker: "sister" },
        { en: "Got it.",                        zh: "懂了。",                  type: "broCalm",    speaker: "brother" },
        { en: "Again.",                         zh: "再来。",                  type: "casual",     speaker: "teacher" },
        { en: "Adventure.",                     zh: "冒险。",                  type: "broCalm",    speaker: "brother" },
        { en: "Good.",                          zh: "好。",                    type: "casual",     speaker: "teacher" },
        { en: "Curious.",                       zh: "好奇。",                  type: "sisCalm",    speaker: "sister" },
        { en: "Curious.",                       zh: "好奇。",                  type: "broCalm",    speaker: "brother" },
        { en: "Means what?",                    zh: "啥意思？",                type: "broCurious", speaker: "brother" },
        { en: "Want to know.",                  zh: "想知道。",                type: "sisCalm",    speaker: "sister" },
        { en: "Cool.",                          zh: "酷。",                    type: "broCalm",    speaker: "brother" },
        { en: "Paragraph two.",                 zh: "第二段。",                type: "casual",     speaker: "teacher" },
        { en: "Daydreaming.",                   zh: "走神了。",                type: "broCalm",    speaker: "brother" },
        { en: "Pay attention.",                 zh: "认真点。",                type: "casual",     speaker: "teacher" },
        { en: "Sorry.",                         zh: "对不起。",                type: "broPout",    speaker: "brother" },
        { en: "Stay focused.",                  zh: "集中。",                  type: "casual",     speaker: "teacher" },
        { en: "Yes ma'am.",                     zh: "好的老师。",              type: "broCalm",    speaker: "brother" },
        { en: "Read on.",                       zh: "继续读。",                type: "casual",     speaker: "teacher" }
      ]
    }
  ]
};
