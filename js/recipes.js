const ITEMS = [
  // =====================
  // 正解：ケーキ材料
  // =====================
  {
    id: "milk",
    name: "牛乳",
    emoji: "🥛",
    x: 72,
    y: 55
  },
  {
    id: "wheat",
    name: "小麦",
    emoji: "🌾",
    x: 50,
    y: 78
  },
  {
    id: "egg",
    name: "卵",
    emoji: "🥚",
    x: 82,
    y: 72
  },
  {
    id: "sugar",
    name: "砂糖",
    emoji: "🧂",
    x: 76,
    y: 35
  },
  {
    id: "strawberry",
    name: "イチゴ",
    emoji: "🍓",
    x: 84,
    y: 45
  },

  // =====================
  // 人体錬成ネタ
  // =====================
  {
    id: "water",
    name: "コップの水",
    emoji: "💧",
    x: 7,
    y: 35
  },
  {
    id: "pencil",
    name: "えんぴつ",
    emoji: "✏️",
    x: 25,
    y: 23
  },
  {
    id: "detergent",
    name: "洗剤",
    emoji: "🧴",
    x: 47,
    y: 25
  },
  {
    id: "chalk",
    name: "チョーク",
    emoji: "▭",
    x: 63,
    y: 25
  },
  {
    id: "match",
    name: "マッチ",
    emoji: "🔥",
    x: 80,
    y: 25
  },
  {
    id: "salt",
    name: "塩",
    emoji: "🧂",
    x: 90,
    y: 35
  },
  {
    id: "firework",
    name: "花火",
    emoji: "🎆",
    x: 8,
    y: 50
  },
  {
    id: "bath",
    name: "温泉の素",
    emoji: "♨️",
    x: 9,
    y: 63
  },
  {
    id: "toothpaste",
    name: "歯磨き粉",
    emoji: "🪥",
    x: 9,
    y: 74
  },
  {
    id: "nail",
    name: "釘",
    emoji: "🔩",
    x: 10,
    y: 84
  },
  {
    id: "cpu",
    name: "CPU",
    emoji: "💾",
    x: 88,
    y: 52
  },
  {
    id: "elements",
    name: "少量元素",
    emoji: "🪙",
    x: 88,
    y: 63
  },

  // =====================
  // 犬＋少女ネタ
  // =====================
  {
    id: "dog",
    name: "犬のぬいぐるみ",
    emoji: "🧸",
    x: 25,
    y: 68
  },
  {
    id: "girl_photo",
    name: "少女の写真",
    emoji: "🖼️",
    x: 43,
    y: 68
  },

  // =====================
  // オートメイル
  // =====================
  {
    id: "screw",
    name: "ネジ",
    emoji: "🔩",
    x: 57,
    y: 68
  },
  {
    id: "gear",
    name: "歯車",
    emoji: "⚙️",
    x: 68,
    y: 68
  },
  {
    id: "metal",
    name: "金属板",
    emoji: "◼️",
    x: 78,
    y: 68
  },

  // =====================
  // 賢者の石
  // =====================
  {
    id: "redstone1",
    name: "赤い石",
    emoji: "💎",
    x: 84,
    y: 82
  },
  {
    id: "redstone2",
    name: "赤い石",
    emoji: "💎",
    x: 91,
    y: 82
  },
  {
    id: "redstone3",
    name: "赤い石",
    emoji: "💎",
    x: 88,
    y: 75
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
    image: "assets/results/birthday_cake.png",
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
    image: "assets/results/truth_gate.png",
    text: "禁忌に触れました。真理の扉が現れた。",
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
    image: "assets/results/automail_arm.png",
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
    image: "assets/results/fake_stone.png",
    text: "鑑定結果：模造品。本物ではないようだ。",
    type: "normal"
  },

  {
    id: "chimera",
    title: "？？？",
    required: [
      "dog",
      "girl_photo"
    ],
    image: "assets/results/chimera.png",
    text: "何かが出来上がった。しかし、それは作るべきものではなかった。",
    type: "fail"
  }

];

  {
  id: "chimera",
  title: "？？？",
  required: [
    "dog",
    "girl_photo"
  ],
  image: "assets/results/chimera.png",
  text: "何かが出来上がった。しかし、それは作るべきものではなかった。",
  type: "fail"
}
];
