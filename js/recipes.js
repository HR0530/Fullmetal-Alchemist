const ITEMS = [
  {
    id: "milk",
    name: "牛乳",
    emoji: "🥛"
  },
  {
    id: "wheat",
    name: "小麦",
    emoji: "🌾"
  },
  {
    id: "egg",
    name: "卵",
    emoji: "🥚"
  },
  {
    id: "sugar",
    name: "砂糖",
    emoji: "🧂"
  },
  {
    id: "strawberry",
    name: "イチゴ",
    emoji: "🍓"
  },

  {
    id: "water",
    name: "コップの水",
    emoji: "💧"
  },
  {
    id: "pencil",
    name: "えんぴつ",
    emoji: "✏️"
  },
  {
    id: "detergent",
    name: "洗剤",
    emoji: "🧴"
  },
  {
    id: "chalk",
    name: "チョーク",
    emoji: "▭"
  },
  {
    id: "match",
    name: "マッチ",
    emoji: "🔥"
  },
  {
    id: "salt",
    name: "塩",
    emoji: "🧂"
  },
  {
    id: "firework",
    name: "花火",
    emoji: "🎆"
  },
  {
    id: "bath",
    name: "温泉の素",
    emoji: "♨️"
  },
  {
    id: "toothpaste",
    name: "歯磨き粉",
    emoji: "🪥"
  },
  {
    id: "nail",
    name: "釘",
    emoji: "🔩"
  },
  {
    id: "cpu",
    name: "CPU",
    emoji: "💾"
  },
  {
    id: "elements",
    name: "少量元素",
    emoji: "🪙"
  },

  {
    id: "dog",
    name: "犬のぬいぐるみ",
    emoji: "🧸"
  },
  {
    id: "girl_photo",
    name: "少女の写真",
    emoji: "🖼️"
  },

  {
    id: "screw",
    name: "ネジ",
    emoji: "🔩"
  },
  {
    id: "gear",
    name: "歯車",
    emoji: "⚙️"
  },
  {
    id: "metal",
    name: "金属板",
    emoji: "◼️"
  },

  {
    id: "redstone1",
    name: "赤い石",
    emoji: "💎"
  },
  {
    id: "redstone2",
    name: "赤い石",
    emoji: "💎"
  },
  {
    id: "redstone3",
    name: "赤い石",
    emoji: "💎"
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
