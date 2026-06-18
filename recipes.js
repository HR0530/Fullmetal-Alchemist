const ITEMS = [
  {
    id: "milk",
    name: "牛乳",
    emoji: "🥛",
    x: 73,
    y: 58
  },
  {
    id: "wheat",
    name: "小麦",
    emoji: "🌾",
    x: 55,
    y: 82
  },
  {
    id: "egg",
    name: "卵",
    emoji: "🥚",
    x: 82,
    y: 73
  },
  {
    id: "sugar",
    name: "砂糖",
    emoji: "🧂",
    x: 78,
    y: 30
  },
  {
    id: "strawberry",
    name: "イチゴ",
    emoji: "🍓",
    x: 82,
    y: 42
  },

  {
    id: "water",
    name: "コップの水",
    emoji: "💧",
    x: 7,
    y: 30
  },
  {
    id: "pencil",
    name: "えんぴつ",
    emoji: "✏️",
    x: 22,
    y: 18
  },
  {
    id: "detergent",
    name: "洗剤",
    emoji: "🧴",
    x: 43,
    y: 16
  },
  {
    id: "chalk",
    name: "チョーク",
    emoji: "▭",
    x: 62,
    y: 17
  },
  {
    id: "match",
    name: "マッチ",
    emoji: "🔥",
    x: 78,
    y: 18
  },
  {
    id: "salt",
    name: "塩",
    emoji: "🧂",
    x: 90,
    y: 25
  },
  {
    id: "firework",
    name: "花火",
    emoji: "🎆",
    x: 10,
    y: 45
  },
  {
    id: "bath",
    name: "温泉の素",
    emoji: "♨️",
    x: 11,
    y: 58
  },
  {
    id: "toothpaste",
    name: "歯磨き粉",
    emoji: "🪥",
    x: 12,
    y: 70
  },
  {
    id: "nail",
    name: "釘",
    emoji: "🔩",
    x: 11,
    y: 82
  },
  {
    id: "cpu",
    name: "CPU",
    emoji: "💾",
    x: 87,
    y: 48
  },
  {
    id: "elements",
    name: "少量元素",
    emoji: "🪙",
    x: 87,
    y: 60
  },

  {
    id: "dog",
    name: "犬のぬいぐるみ",
    emoji: "🧸",
    x: 24,
    y: 75
  },
  {
    id: "girl_photo",
    name: "少女の写真",
    emoji: "🖼️",
    x: 40,
    y: 75
  },

  {
    id: "screw",
    name: "ネジ",
    emoji: "🔩",
    x: 55,
    y: 72
  },
  {
    id: "gear",
    name: "歯車",
    emoji: "⚙️",
    x: 66,
    y: 72
  },
  {
    id: "metal",
    name: "金属板",
    emoji: "◼️",
    x: 77,
    y: 72
  },

  {
    id: "redstone1",
    name: "赤い石",
    emoji: "💎",
    x: 82,
    y: 85
  },
  {
    id: "redstone2",
    name: "赤い石",
    emoji: "💎",
    x: 90,
    y: 85
  },
  {
    id: "redstone3",
    name: "赤い石",
    emoji: "💎",
    x: 86,
    y: 78
  }
];

const RECIPES = [
  {
    id: "birthday_cake",
    title: "誕生日ケーキ",
    required: [
      "milk",
      "wheat",
      "egg",
      "sugar",
      "strawberry"
    ],
    visual: "🎂",
    text: "錬成成功。ろうそくに火が灯り、文字が浮かび上がる……",
    type: "cake"
  },

  {
    id: "human_fail",
    title: "人体錬成失敗",
    required: [
      "water",
      "pencil",
      "detergent",
      "chalk",
      "match",
      "salt",
      "firework",
      "bath",
      "toothpaste",
      "nail",
      "cpu",
      "elements"
    ],
    visual: "🚪",
    text: "禁忌に触れました。新しいレシピ「真理の扉」が追加されました。",
    type: "fail"
  },

  {
    id: "automail",
    title: "オートメイルの腕",
    required: [
      "screw",
      "gear",
      "metal"
    ],
    visual: "🦾",
    text: "金属音とともに、機械鎧の腕が錬成された。",
    type: "normal"
  },

  {
    id: "fake_stone",
    title: "賢者の石（模造品）",
    required: [
      "redstone1",
      "redstone2",
      "redstone3"
    ],
    visual: "💎",
    text: "鑑定結果：模造品。本物ではないようだ。",
    type: "normal"
  },

  {
    id: "ethics_stop",
    title: "錬成中止",
    required: [
      "dog",
      "girl_photo"
    ],
    visual: "⚠️",
    text: "倫理審査により中止されました。",
    type: "fail"
  }
];
