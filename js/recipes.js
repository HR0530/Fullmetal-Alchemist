const ITEMS = [
  {
    id: "milk",
    name: "牛乳",
    image: "assets/items/milk.png"
  },
  {
    id: "wheat",
    name: "小麦",
    image: "assets/items/wheat.png"
  },
  {
    id: "egg",
    name: "卵",
    image: "assets/items/egg.png"
  },
  {
    id: "sugar",
    name: "砂糖",
    image: "assets/items/sugar.png"
  },
  {
    id: "strawberry",
    name: "イチゴ",
    image: "assets/items/strawberry.png"
  },

  {
    id: "water",
    name: "コップの水",
    image: "assets/items/water.png"
  },
  {
    id: "pencil",
    name: "えんぴつ",
    image: "assets/items/pencil.png"
  },
  {
    id: "detergent",
    name: "洗剤",
    image: "assets/items/detergent.png"
  },
  {
    id: "chalk",
    name: "チョーク",
    image: "assets/items/chalk.png"
  },
  {
    id: "match",
    name: "マッチ",
    image: "assets/items/match.png"
  },
  {
    id: "salt",
    name: "塩",
    image: "assets/items/salt.png"
  },
  {
    id: "firework",
    name: "花火",
    image: "assets/items/firework.png"
  },
  {
    id: "bath",
    name: "温泉の素",
    image: "assets/items/bath.png"
  },
  {
    id: "toothpaste",
    name: "歯磨き粉",
    image: "assets/items/toothpaste.png"
  },
  {
    id: "nail",
    name: "釘",
    image: "assets/items/nail.png"
  },
  {
    id: "cpu",
    name: "CPU",
    image: "assets/items/cpu.png"
  },
  {
    id: "elements",
    name: "少量元素",
    image: "assets/items/elements.png"
  },

  {
    id: "dog",
    name: "犬のぬいぐるみ",
    image: "assets/items/dog.png"
  },
  {
    id: "girl_photo",
    name: "少女の写真",
    image: "assets/items/girl_photo.png"
  },

  {
    id: "screw",
    name: "ネジ",
    image: "assets/items/screw.png"
  },
  {
    id: "gear",
    name: "歯車",
    image: "assets/items/gear.png"
  },
  {
    id: "metal",
    name: "金属板",
    image: "assets/items/metal.png"
  },

  {
    id: "redstone1",
    name: "赤い石",
    image: "assets/items/redstone.png"
  },
  {
    id: "redstone2",
    name: "赤い石",
    image: "assets/items/redstone.png"
  },
  {
    id: "redstone3",
    name: "赤い石",
    image: "assets/items/redstone.png"
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
