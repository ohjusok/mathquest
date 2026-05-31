const quests = [
  {
    id: "2026-05-29",
    label: "그제",
    date: new Date("2026-05-29T00:00:00+09:00"),
    stages: [
      {
        title: "숲속 간식 가게",
        story: "토리는 모험을 시작하기 전에 친구들과 나눌 간식을 고르고 있어요.",
        problem: [
          "꿀빵은 한 봉지에 4개씩 들어 있습니다. 토리는 3봉지를 사고, 길에서 만난 친구에게 5개를 나누어 주었습니다.",
          "토리에게 남은 꿀빵은 몇 개일까요?"
        ],
        choices: ["7개", "8개", "6개", "9개"],
        answer: 0,
        clear: "토리가 간식을 알맞게 챙기고 길을 떠났어요.",
        scene: "snack",
        image: "stage-01-snack.png"
      },
      {
        title: "시계탑 약속",
        story: "토리는 시계탑 앞에서 약속 시간에 늦지 않으려고 해요.",
        problem: [
          "토리는 오후 2시 40분에 친구를 만나기로 했습니다. 집에서 시계탑까지 25분이 걸립니다.",
          "토리는 늦지 않으려면 늦어도 몇 시에 출발해야 할까요?"
        ],
        choices: ["오후 2시 5분", "오후 2시 20분", "오후 2시 25분", "오후 2시 15분"],
        answer: 3,
        clear: "토리가 약속 시간을 잘 계산했어요.",
        scene: "clock",
        image: "stage-02-clock.png"
      },
      {
        title: "나무다리 강",
        story: "토리는 강을 건너기 전에 다리의 길이를 비교하고 있어요.",
        problem: [
          "짧은 다리는 18m이고, 긴 다리는 짧은 다리보다 9m 더 깁니다.",
          "두 다리의 길이를 합하면 몇 m일까요?"
        ],
        choices: ["42m", "45m", "48m", "54m"],
        answer: 1,
        clear: "토리가 안전한 다리를 골라 건넜어요.",
        scene: "bridge",
        image: "stage-03-bridge.png"
      },
      {
        title: "숲의 숫자 규칙",
        story: "토리는 나무 표지판에 적힌 숫자 규칙을 발견했어요.",
        problem: [
          "표지판에는 3, 6, 12, 24, ? 순서로 숫자가 적혀 있습니다.",
          "물음표에 들어갈 수는 무엇일까요?"
        ],
        choices: ["48", "36", "42", "30"],
        answer: 0,
        clear: "토리가 숲의 규칙을 알아냈어요.",
        scene: "forest",
        image: "stage-04-forest.png"
      },
      {
        title: "보석 동굴",
        story: "토리는 동굴 속 보석 상자를 정리하고 있어요.",
        problem: [
          "빨간 보석은 6개씩 2줄, 파란 보석은 5개씩 3줄로 놓여 있습니다.",
          "보석은 모두 몇 개일까요?"
        ],
        choices: ["24개", "26개", "27개", "25개"],
        answer: 2,
        clear: "토리가 보석 수를 정확히 세었어요.",
        scene: "gem",
        image: "stage-05-gem.png"
      },
      {
        title: "지도 갈림길",
        story: "토리는 지도에서 가장 가까운 길을 고르려고 해요.",
        problem: [
          "동쪽 길은 720m, 서쪽 길은 1km 80m입니다.",
          "두 길의 차이는 몇 m일까요?"
        ],
        choices: ["260m", "300m", "420m", "360m"],
        answer: 3,
        clear: "토리가 지도 길이를 비교했어요.",
        scene: "map",
        image: "stage-06-map.png"
      },
      {
        title: "별빛 계단",
        story: "토리는 별빛 계단을 오르며 모양을 관찰하고 있어요.",
        problem: [
          "첫째 계단에는 별 2개, 둘째 계단에는 별 5개, 셋째 계단에는 별 8개가 있습니다.",
          "같은 규칙이면 다섯째 계단에는 별이 몇 개 있을까요?"
        ],
        choices: ["14개", "11개", "12개", "15개"],
        answer: 0,
        clear: "토리가 계단의 별빛 규칙을 찾았어요.",
        scene: "stairs",
        image: "stage-07-stairs.png"
      },
      {
        title: "축제 리본",
        story: "토리는 마을 축제에 쓸 리본을 나누고 있어요.",
        problem: [
          "리본 32m를 4명이 똑같이 나누어 쓰려고 합니다. 한 사람은 받은 리본에서 2m를 장식에 더 썼습니다.",
          "그 사람에게 남은 리본은 몇 m일까요?"
        ],
        choices: ["5m", "6m", "7m", "8m"],
        answer: 1,
        clear: "토리가 리본을 공평하게 나누었어요.",
        scene: "ribbon",
        image: "stage-08-ribbon.png"
      },
      {
        title: "마법 책장",
        story: "토리는 도서관에서 책장의 빈칸을 살펴보고 있어요.",
        problem: [
          "책장 한 칸에는 책이 9권씩 들어갑니다. 4칸 중 1칸은 비어 있습니다.",
          "책장에 꽂힌 책은 모두 몇 권일까요?"
        ],
        choices: ["18권", "30권", "36권", "27권"],
        answer: 3,
        clear: "토리가 책장을 깔끔하게 정리했어요.",
        scene: "book",
        image: "stage-09-book.png"
      },
      {
        title: "성문 수수께끼",
        story: "토리는 성문 앞에서 마지막 암호를 풀고 있어요.",
        problem: [
          "어떤 수는 40보다 크고 50보다 작습니다. 일의 자리 숫자는 십의 자리 숫자보다 3 큽니다.",
          "이 수는 무엇일까요?"
        ],
        choices: ["45", "46", "47", "48"],
        answer: 2,
        clear: "토리가 첫 번째 모험의 성문을 열었어요.",
        scene: "castle",
        image: "stage-10-castle.png"
      }
    ]
  },
  {
    id: "2026-05-30",
    label: "어제",
    date: new Date("2026-05-30T00:00:00+09:00"),
    stages: [
  {
    title: "하늘 과일 시장",
    story: "토리는 떠다니는 시장에서 친구들과 나눌 과일을 고르고 있어요.",
    problem: [
      "과일 한 바구니에는 과일이 7개씩 들어 있습니다. 토리는 바구니 2개를 사고, 가게 주인에게 과일 5개를 더 받았습니다. 그 뒤 친구에게 6개를 나누어 주었습니다.",
      "토리에게 남은 과일은 몇 개일까요?"
    ],
    choices: ["13개", "11개", "14개", "12개"],
    answer: 0,
    clear: "토리가 과일을 알맞게 나누고 다음 섬으로 이동했어요.",
    scene: "snack",
    image: "day2-stage-01-fruit.png"
  },
  {
    title: "여행 가방의 비밀",
    story: "토리는 다음 모험을 위해 가방 무게를 맞추고 있어요.",
    problem: [
      "토리는 연필 8자루씩 들어 있는 작은 상자 3개를 챙겼습니다. 그중 5자루는 여관 책상에 놓고 가기로 했습니다.",
      "토리가 가방에 넣은 연필은 몇 자루일까요?"
    ],
    choices: ["18자루", "20자루", "17자루", "19자루"],
    answer: 3,
    clear: "토리가 가방을 가볍게 정리했어요.",
    scene: "clock",
    image: "day2-stage-02-packing.png"
  },
  {
    title: "정원 타일 길",
    story: "토리는 마법 정원의 타일 길을 살펴보고 있어요.",
    problem: [
      "직사각형 모양의 작은 정원이 있습니다. 가로는 8m, 세로는 4m입니다.",
      "이 정원의 둘레는 몇 m일까요?"
    ],
    choices: ["32m", "24m", "20m", "22m"],
    answer: 1,
    clear: "토리가 정원 둘레를 알아내고 문을 열었어요.",
    scene: "bridge",
    image: "day2-stage-03-garden.png"
  },
  {
    title: "구름 관측소",
    story: "토리는 밤하늘의 별빛 규칙을 관찰하고 있어요.",
    problem: [
      "별빛 숫자는 4, 9, 14, 19, 24, ? 순서로 이어집니다.",
      "물음표에 들어갈 수는 무엇일까요?"
    ],
    choices: ["30", "27", "28", "29"],
    answer: 3,
    clear: "토리가 별빛 규칙을 찾았어요.",
    scene: "forest",
    image: "day2-stage-04-observatory.png"
  },
  {
    title: "장난감 공방",
    story: "토리는 마을 친구들과 장난감 블록을 나누려고 해요.",
    problem: [
      "블록 28개가 있었습니다. 망가진 블록 4개를 빼고, 남은 블록을 친구 3명에게 똑같이 나누어 주려고 합니다.",
      "친구 한 명이 받는 블록은 몇 개일까요?"
    ],
    choices: ["7개", "9개", "6개", "8개"],
    answer: 3,
    clear: "토리가 블록을 공평하게 나누었어요.",
    scene: "gem",
    image: "day2-stage-05-toy.png"
  },
  {
    title: "강가 나루터",
    story: "토리는 배를 타기 전에 두 길의 거리를 비교하고 있어요.",
    problem: [
      "나루터까지 가는 산길은 1km 500m이고, 강가 길은 850m입니다.",
      "두 길의 차이는 몇 m일까요?"
    ],
    choices: ["650m", "550m", "700m", "600m"],
    answer: 0,
    clear: "토리가 거리 차이를 비교했어요.",
    scene: "map",
    image: "day2-stage-06-ferry.png"
  },
  {
    title: "마법 온실",
    story: "토리는 물약 재료를 묶음으로 세어 보고 있어요.",
    problem: [
      "초록 잎은 4장씩 묶인 꾸러미가 3개 있고, 보라 꽃잎은 5장씩 묶인 꾸러미가 2개 있습니다.",
      "잎과 꽃잎은 모두 몇 장일까요?"
    ],
    choices: ["21장", "22장", "23장", "20장"],
    answer: 1,
    clear: "토리가 재료 수를 정확히 알아냈어요.",
    scene: "stairs",
    image: "day2-stage-07-potion.png"
  },
  {
    title: "마법 기차역",
    story: "토리는 기차 시간표를 보고 출발 시간을 계산하고 있어요.",
    problem: [
      "기차는 오전 9시 35분에 출발합니다. 토리는 기차역까지 30분, 표를 사는 데 15분이 걸립니다.",
      "토리는 늦지 않으려면 늦어도 몇 시에 출발해야 할까요?"
    ],
    choices: ["오전 9시", "오전 8시 40분", "오전 8시 50분", "오전 9시 5분"],
    answer: 2,
    clear: "토리가 알맞은 출발 시간을 정했어요.",
    scene: "ribbon",
    image: "day2-stage-08-station.png"
  },
  {
    title: "원형 사원",
    story: "토리는 조용한 사원의 바닥 무늬를 관찰하고 있어요.",
    problem: [
      "어떤 수에 7을 더했더니 23이 되었습니다.",
      "어떤 수는 무엇일까요?"
    ],
    choices: ["16", "14", "17", "15"],
    answer: 0,
    clear: "토리가 숨은 수를 찾아냈어요.",
    scene: "book",
    image: "day2-stage-09-temple.png"
  },
  {
    title: "수정의 문",
    story: "토리는 수정 문 앞에서 마지막 수수께끼를 풀어야 해요.",
    problem: [
      "어떤 수는 60보다 크고 70보다 작습니다. 십의 자리와 일의 자리 숫자를 더하면 14이고, 일의 자리 숫자는 8입니다.",
      "이 수는 무엇일까요?"
    ],
    choices: ["66", "78", "64", "68"],
    answer: 3,
    clear: "토리가 수정의 문을 열고 둘째 날 모험을 마쳤어요.",
    scene: "castle",
    image: "day2-stage-10-crystal.png"
  }
    ]
  },
  {
    id: "2026-05-31",
    label: "오늘",
    date: new Date("2026-05-31T00:00:00+09:00"),
    stages: [
      {
        title: "새벽 들판의 준비",
        story: "토리는 새 모험을 시작하기 전에 간단한 짐을 챙기고 있어요.",
        problem: [
          "토리는 작은 주머니에 구슬 9개를 넣고, 친구에게서 구슬 6개를 더 받았습니다. 그중 4개는 연습용 표식으로 사용했습니다.",
          "토리에게 남은 구슬은 몇 개일까요?"
        ],
        choices: ["12개", "10개", "11개", "13개"],
        answer: 2,
        clear: "토리가 출발 준비를 가볍게 마쳤어요.",
        scene: "snack",
        image: "day3-stage-01-meadow.png"
      },
      {
        title: "가방 속 연필 꾸러미",
        story: "토리는 연필이 든 가방을 정리하며 필요한 수를 맞추고 있어요.",
        problem: [
          "연필 5자루씩 들어 있는 꾸러미가 4개 있습니다. 토리는 여기에 낱개 연필 3자루를 더 넣었습니다.",
          "가방 안의 연필은 모두 몇 자루일까요?"
        ],
        choices: ["23자루", "20자루", "25자루", "22자루"],
        answer: 0,
        clear: "토리가 연필 꾸러미를 정확히 챙겼어요.",
        scene: "clock",
        image: "day3-stage-02-bag.png"
      },
      {
        title: "달빛 정원 울타리",
        story: "토리는 정원 둘레에 울타리를 세우는 일을 도와주고 있어요.",
        problem: [
          "직사각형 정원의 가로는 9m, 세로는 6m입니다. 울타리를 둘레에 세우되, 문이 들어갈 3m 부분은 비워 둡니다.",
          "울타리가 필요한 길이는 몇 m일까요?"
        ],
        choices: ["30m", "24m", "27m", "33m"],
        answer: 2,
        clear: "토리가 문이 들어갈 자리까지 생각했어요.",
        scene: "bridge",
        image: "day3-stage-03-garden.png"
      },
      {
        title: "별빛 두 배 규칙",
        story: "토리는 구름 관측소에서 별빛 숫자가 커지는 규칙을 살펴보고 있어요.",
        problem: [
          "별빛 숫자는 2, 5, 11, 23, 47, ? 순서로 이어집니다.",
          "물음표에 들어갈 수는 무엇일까요?"
        ],
        choices: ["93", "95", "96", "97"],
        answer: 1,
        clear: "토리가 별빛이 두 배씩 커지는 규칙을 찾았어요.",
        scene: "forest",
        image: "day3-stage-04-observatory.png"
      },
      {
        title: "장난감 공방의 상자",
        story: "토리는 장난감 공방에서 블록 상자를 공평하게 나누려고 해요.",
        problem: [
          "큰 상자 2개에는 블록이 각각 18개씩 들어 있고, 작은 상자 1개에는 블록이 12개 들어 있습니다. 이 블록을 6명에게 똑같이 나누어 주려고 합니다.",
          "한 명이 받는 블록은 몇 개일까요?"
        ],
        choices: ["6개", "9개", "10개", "8개"],
        answer: 3,
        clear: "토리가 블록을 모두에게 공평하게 나누었어요.",
        scene: "gem",
        image: "day3-stage-05-workshop.png"
      },
      {
        title: "나루터 왕복 거리",
        story: "토리는 강가 나루터에서 두 길의 거리를 비교하고 있어요.",
        problem: [
          "마을에서 나루터까지 가는 숲길은 760m입니다. 강가 길은 숲길보다 180m 더 깁니다.",
          "강가 길로 갔다가 같은 길로 돌아오면 모두 몇 m를 걷게 될까요?"
        ],
        choices: ["1,760m", "1,880m", "1,520m", "940m"],
        answer: 1,
        clear: "토리가 왕복 거리까지 놓치지 않았어요.",
        scene: "map",
        image: "day3-stage-06-ferry.png"
      },
      {
        title: "온실의 숨은 잎",
        story: "토리는 마법 온실에서 물약 재료 수를 추리하고 있어요.",
        problem: [
          "초록 잎과 보라 꽃잎이 모두 34장 있습니다. 초록 잎은 보라 꽃잎보다 8장 더 많습니다.",
          "초록 잎은 몇 장일까요?"
        ],
        choices: ["13장", "24장", "21장", "26장"],
        answer: 2,
        clear: "토리가 두 재료의 차이를 이용해 숨은 수를 찾았어요.",
        scene: "stairs",
        image: "day3-stage-07-greenhouse.png"
      },
      {
        title: "기차역 출발 계획",
        story: "토리는 마법 기차역에서 이동 시간을 거꾸로 계산하고 있어요.",
        problem: [
          "기차는 오전 10시 20분에 출발합니다. 토리는 표를 사는 데 12분, 승강장까지 가는 데 8분이 걸립니다. 또 출발 10분 전에는 승강장에 도착하고 싶습니다.",
          "토리는 늦어도 몇 시에 표 사는 곳에 도착해야 할까요?"
        ],
        choices: ["오전 10시", "오전 9시 58분", "오전 10시 2분", "오전 9시 50분"],
        answer: 3,
        clear: "토리가 시간을 거꾸로 계산해 여유 있게 도착했어요.",
        scene: "ribbon",
        image: "day3-stage-08-station.png"
      },
      {
        title: "원형 사원의 바닥 무늬",
        story: "토리는 원형 사원의 바닥 무늬에서 반복되는 색 규칙을 발견했어요.",
        problem: [
          "바닥 무늬는 빨강, 파랑, 노랑, 초록이 이 순서로 반복됩니다.",
          "왼쪽에서 37번째 무늬의 색은 무엇일까요?"
        ],
        choices: ["빨강", "파랑", "노랑", "초록"],
        answer: 0,
        clear: "토리가 반복 규칙의 나머지를 이용했어요.",
        scene: "book",
        image: "day3-stage-09-temple.png"
      },
      {
        title: "수정문 마지막 암호",
        story: "토리는 수정문 앞에서 가장 어려운 마지막 암호를 풀어야 해요.",
        problem: [
          "어떤 두 자리 수가 있습니다. 십의 자리 숫자는 일의 자리 숫자보다 3 작습니다. 두 숫자의 합은 11입니다.",
          "이 두 자리 수는 무엇일까요?"
        ],
        choices: ["58", "49", "74", "47"],
        answer: 3,
        clear: "토리가 마지막 암호를 풀고 새 레벨을 통과했어요.",
        scene: "castle",
        image: "day3-stage-10-crystal.png"
      }
    ]
  },
  ...makeJuneQuests()
];

const reusedStageArt = [
  { scene: "snack", image: "day3-stage-01-meadow.png" },
  { scene: "clock", image: "day3-stage-02-bag.png" },
  { scene: "bridge", image: "day3-stage-03-garden.png" },
  { scene: "forest", image: "day3-stage-04-observatory.png" },
  { scene: "gem", image: "day3-stage-05-workshop.png" },
  { scene: "map", image: "day3-stage-06-ferry.png" },
  { scene: "stairs", image: "day3-stage-07-greenhouse.png" },
  { scene: "ribbon", image: "day3-stage-08-station.png" },
  { scene: "book", image: "day3-stage-09-temple.png" },
  { scene: "castle", image: "day3-stage-10-crystal.png" }
];

function getReusedStageArt() {
  return [
    { scene: "snack", image: "day3-stage-01-meadow.png" },
    { scene: "clock", image: "day3-stage-02-bag.png" },
    { scene: "bridge", image: "day3-stage-03-garden.png" },
    { scene: "forest", image: "day3-stage-04-observatory.png" },
    { scene: "gem", image: "day3-stage-05-workshop.png" },
    { scene: "map", image: "day3-stage-06-ferry.png" },
    { scene: "stairs", image: "day3-stage-07-greenhouse.png" },
    { scene: "ribbon", image: "day3-stage-08-station.png" },
    { scene: "book", image: "day3-stage-09-temple.png" },
    { scene: "castle", image: "day3-stage-10-crystal.png" }
  ];
}

function formatDateId(date) {
  return seoulDateId(date);
}

function seoulDateId(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${value.year}-${value.month}-${value.day}`;
}

function getInitialQuestIndex() {
  const today = seoulDateId();
  const exact = quests.findIndex((quest) => quest.id === today);
  if (exact >= 0) return exact;

  const pastIndex = quests.reduce((latest, quest, index) => (
    quest.id <= today && (!quests[latest] || quest.id > quests[latest].id) ? index : latest
  ), -1);
  return pastIndex >= 0 ? pastIndex : quests.length - 1;
}

function questDisplayLabel(quest) {
  const today = seoulDateId();
  const oneDay = 24 * 60 * 60 * 1000;
  const todayDate = new Date(`${today}T00:00:00+09:00`);
  const diff = Math.round((quest.date - todayDate) / oneDay);
  if (diff === 0) return "오늘";
  if (diff === -1) return "어제";
  if (diff === -2) return "그제";
  if (diff > 0) return "예정";
  return "지난 퀘스트";
}

function arrangeChoices(answerText, wrongTexts, seed) {
  const answerSlot = [2, 0, 3, 1][seed % 4];
  const ordered = [];
  let wrongIndex = 0;
  for (let index = 0; index < 4; index += 1) {
    if (index === answerSlot) {
      ordered[index] = answerText;
    } else {
      ordered[index] = wrongTexts[wrongIndex];
      wrongIndex += 1;
    }
  }
  return { choices: ordered, answer: answerSlot };
}

function makeNumberStage({ title, story, problem, answer, offsets, unit = "", clear, artIndex, seed }) {
  const answerText = `${answer.toLocaleString("ko-KR")}${unit}`;
  const wrongValues = [];
  offsets.forEach((offset) => {
    const value = answer + offset;
    if (Number.isFinite(value) && value > 0 && value !== answer && !wrongValues.includes(value)) {
      wrongValues.push(value);
    }
  });
  let fallback = 1;
  while (wrongValues.length < 3) {
    const value = answer + fallback * ((seed % 5) + 2);
    if (value > 0 && value !== answer && !wrongValues.includes(value)) {
      wrongValues.push(value);
    }
    fallback += 1;
  }
  const wrongTexts = wrongValues.slice(0, 3).map((value) => `${value.toLocaleString("ko-KR")}${unit}`);
  const arranged = arrangeChoices(answerText, wrongTexts, seed);
  const artList = getReusedStageArt();
  const art = artList[artIndex % artList.length];
  return {
    title,
    story,
    problem,
    choices: arranged.choices,
    answer: arranged.answer,
    clear,
    scene: art.scene,
    image: art.image
  };
}

function makeTextStage({ title, story, problem, answerText, wrongTexts, clear, artIndex, seed }) {
  const arranged = arrangeChoices(answerText, wrongTexts, seed);
  const artList = getReusedStageArt();
  const art = artList[artIndex % artList.length];
  return {
    title,
    story,
    problem,
    choices: arranged.choices,
    answer: arranged.answer,
    clear,
    scene: art.scene,
    image: art.image
  };
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function makeJuneWeekOne(day, stage) {
  const seed = day * 10 + stage;
  const makers = [
    () => {
      const pack = 6 + (day % 3);
      const count = 3 + (stage % 2);
      const extra = 4 + (day % 4);
      const used = 5 + (stage % 3);
      return makeNumberStage({
        title: "숲길 간식 배낭",
        story: "토리는 숲길에서 친구들과 나눌 간식을 정리하고 있어요.",
        problem: [`간식 한 묶음에는 ${pack}개씩 들어 있습니다. 토리는 ${count}묶음을 챙기고, 마을에서 ${extra}개를 더 받았습니다. 그중 ${used}개를 나누어 주었습니다.`, "토리에게 남은 간식은 몇 개일까요?"],
        answer: pack * count + extra - used,
        offsets: [-2, 3, 5],
        unit: "개",
        clear: "토리가 간식 수를 차근차근 정리했어요.",
        artIndex: 0,
        seed
      });
    },
    () => {
      const hour = 2 + (day % 3);
      const minute = 20 + stage * 3;
      const travel = 18 + day + stage;
      const start = hour * 60 + minute - travel;
      const h = Math.floor(start / 60);
      const m = String(start % 60).padStart(2, "0");
      const timeText = (offset) => {
        const total = start + offset;
        return `오후 ${Math.floor(total / 60)}시 ${String(total % 60).padStart(2, "0")}분`;
      };
      return makeTextStage({
        title: "시계탑 약속",
        story: "토리는 시계탑 앞 약속 시간에 늦지 않으려고 해요.",
        problem: [`토리는 오후 ${hour}시 ${minute}분에 친구를 만나기로 했습니다. 집에서 시계탑까지 ${travel}분이 걸립니다.`, "늦지 않으려면 늦어도 몇 시에 출발해야 할까요?"],
        answerText: `오후 ${h}시 ${m}분`,
        wrongTexts: [timeText(5), timeText(10), timeText(-5)],
        clear: "토리가 시간을 거꾸로 계산했어요.",
        artIndex: 1,
        seed
      });
    },
    () => {
      const width = 7 + day;
      const height = 4 + (stage % 4);
      return makeNumberStage({
        title: "정원 울타리",
        story: "토리는 작은 정원에 울타리를 세우는 일을 도와주고 있어요.",
        problem: [`직사각형 정원의 가로는 ${width}m, 세로는 ${height}m입니다.`, "정원의 둘레는 몇 m일까요?"],
        answer: (width + height) * 2,
        offsets: [-4, 4, 8],
        unit: "m",
        clear: "토리가 둘레를 정확히 구했어요.",
        artIndex: 2,
        seed
      });
    },
    () => {
      const first = 2 + (day % 4);
      const diff = 3 + (stage % 3);
      return makeNumberStage({
        title: "별빛 규칙",
        story: "토리는 관측소에서 별빛 숫자의 규칙을 찾고 있어요.",
        problem: [`별빛 숫자는 ${first}, ${first + diff}, ${first + diff * 2}, ${first + diff * 3}, ? 순서로 이어집니다.`, "물음표에 들어갈 수는 무엇일까요?"],
        answer: first + diff * 4,
        offsets: [-diff, diff, diff + 2],
        clear: "토리가 일정하게 커지는 규칙을 찾았어요.",
        artIndex: 3,
        seed
      });
    },
    () => {
      const total = 36 + day + stage;
      const broken = 4 + (day % 3);
      const friends = 4;
      return makeNumberStage({
        title: "공방 나눔 상자",
        story: "토리는 장난감 공방에서 블록을 공평하게 나누려고 해요.",
        problem: [`블록 ${total}개 중 망가진 ${broken}개를 빼고, 남은 블록을 친구 ${friends}명에게 똑같이 나누어 줍니다.`, "친구 한 명이 받는 블록은 몇 개일까요?"],
        answer: Math.floor((total - broken) / friends),
        offsets: [-1, 1, 2],
        unit: "개",
        clear: "토리가 공평하게 나누었어요.",
        artIndex: 4,
        seed
      });
    }
  ];
  return makers[(stage - 1) % makers.length]();
}

function makeJuneWeekTwo(day, stage) {
  const seed = day * 10 + stage;
  const makers = [
    () => {
      const total = 60 + (day % 7) * 6;
      const denominator = [3, 4, 5][stage % 3];
      const numerator = denominator - 2;
      return makeNumberStage({
        title: "마법 리본의 일부",
        story: "토리는 축제 리본 중 일부를 장식에 쓰려고 해요.",
        problem: [`리본이 모두 ${total}m 있습니다. 그중 ${denominator}분의 ${numerator}을 장식에 사용했습니다.`, "장식에 사용한 리본은 몇 m일까요?"],
        answer: total / denominator * numerator,
        offsets: [-3, 3, 6],
        unit: "m",
        clear: "토리가 분수만큼의 길이를 구했어요.",
        artIndex: 7,
        seed
      });
    },
    () => {
      const rows = 5 + (day % 3);
      const cols = 8 + (stage % 4);
      const empty = 6 + (day % 4);
      return makeNumberStage({
        title: "온실 화분 배열",
        story: "토리는 온실의 화분 자리를 살펴보고 있어요.",
        problem: [`화분 자리가 ${rows}줄, 한 줄에 ${cols}개씩 있습니다. 그중 ${empty}자리는 비어 있습니다.`, "화분이 놓인 자리는 몇 곳일까요?"],
        answer: rows * cols - empty,
        offsets: [-3, 3, 6],
        unit: "곳",
        clear: "토리가 전체에서 빈자리를 뺐어요.",
        artIndex: 6,
        seed
      });
    },
    () => {
      const price = 320 + day * 10;
      const count = 3 + (stage % 3);
      const paid = price * count + 500;
      return makeNumberStage({
        title: "시장 거스름돈",
        story: "토리는 시장에서 필요한 물건을 사고 있어요.",
        problem: [`한 개에 ${price}원인 물건을 ${count}개 사고 ${paid.toLocaleString("ko-KR")}원을 냈습니다.`, "거스름돈은 얼마일까요?"],
        answer: paid - price * count,
        offsets: [-100, 100, 200],
        unit: "원",
        clear: "토리가 물건값과 거스름돈을 비교했어요.",
        artIndex: 0,
        seed
      });
    },
    () => {
      const start = 4 + (day % 5);
      const add = stage % 2 === 0 ? 1 : 3;
      const seq = [start];
      for (let index = 0; index < 4; index += 1) seq.push(seq.at(-1) * 2 + add);
      return makeNumberStage({
        title: "두 단계 숫자 규칙",
        story: "토리는 별빛 장치가 만든 숫자 규칙을 살펴보고 있어요.",
        problem: [`숫자는 ${seq[0]}, ${seq[1]}, ${seq[2]}, ${seq[3]}, ? 순서입니다. 앞의 수에 2를 곱한 뒤 ${add}을 더하는 규칙입니다.`, "물음표에 들어갈 수는 무엇일까요?"],
        answer: seq[4],
        offsets: [-add, add, add + 4],
        clear: "토리가 곱하고 더하는 규칙을 찾았어요.",
        artIndex: 3,
        seed
      });
    },
    () => {
      const side = 6 + (day % 5);
      const cut = 2 + (stage % 3);
      return makeNumberStage({
        title: "타일 바닥 넓이",
        story: "토리는 사원의 바닥에 놓을 타일 넓이를 계산해요.",
        problem: [`가로 ${side + 3}m, 세로 ${side}m인 바닥에서 작은 장식 자리 ${cut}m²를 비웁니다.`, "타일이 필요한 넓이는 몇 m²일까요?"],
        answer: (side + 3) * side - cut,
        offsets: [-side, side, cut + 4],
        unit: "m²",
        clear: "토리가 전체 넓이에서 빈자리를 뺐어요.",
        artIndex: 8,
        seed
      });
    }
  ];
  return makers[(stage - 1) % makers.length]();
}

function makeJuneWeekThree(day, stage) {
  const seed = day * 10 + stage;
  const makers = [
    () => {
      const a = 2 + (day % 4);
      const b = a + 3;
      const total = (a + b) * (5 + (stage % 4));
      return makeNumberStage({
        title: "물약 재료 비",
        story: "토리는 물약 재료를 정해진 비율로 섞으려고 해요.",
        problem: [`초록 잎과 보라 꽃잎의 비는 ${a}:${b}입니다. 두 재료가 모두 ${total}장일 때, 보라 꽃잎은 몇 장일까요?`],
        answer: total / (a + b) * b,
        offsets: [-b, b, a],
        unit: "장",
        clear: "토리가 전체를 비의 합으로 나누었어요.",
        artIndex: 6,
        seed
      });
    },
    () => {
      const avg = 18 + (day % 5);
      const first = avg - 3;
      const second = avg + 2;
      const third = avg * 3 - first - second;
      return makeNumberStage({
        title: "세 번의 훈련 점수",
        story: "토리는 훈련 점수의 평균을 맞추려고 해요.",
        problem: [`세 번의 훈련 점수 평균은 ${avg}점입니다. 첫째 점수는 ${first}점, 둘째 점수는 ${second}점입니다.`, "셋째 점수는 몇 점일까요?"],
        answer: third,
        offsets: [-2, 2, 4],
        unit: "점",
        clear: "토리가 평균에서 전체 점수를 생각했어요.",
        artIndex: 8,
        seed
      });
    },
    () => {
      const everyA = 4 + (day % 3);
      const everyB = 6 + (stage % 3) * 2;
      const lcm = everyA * everyB / gcd(everyA, everyB);
      return makeNumberStage({
        title: "두 종소리의 만남",
        story: "토리는 두 시계탑 종이 다시 함께 울리는 때를 찾고 있어요.",
        problem: [`파란 종은 ${everyA}분마다, 금빛 종은 ${everyB}분마다 울립니다. 지금 동시에 울렸다면, 다시 동시에 울리는 것은 몇 분 뒤일까요?`],
        answer: lcm,
        offsets: [-2, 2, 4],
        unit: "분",
        clear: "토리가 두 수의 공통되는 시간을 찾았어요.",
        artIndex: 1,
        seed
      });
    },
    () => {
      const length = 8 + (day % 5);
      const width = 5 + (stage % 4);
      const height = 3 + (day % 3);
      return makeNumberStage({
        title: "수정 상자의 부피",
        story: "토리는 수정 상자가 차지하는 공간을 계산하고 있어요.",
        problem: [`직육면체 상자의 가로는 ${length}cm, 세로는 ${width}cm, 높이는 ${height}cm입니다.`, "상자의 부피는 몇 cm³일까요?"],
        answer: length * width * height,
        offsets: [-width * height, width * height, length],
        unit: "cm³",
        clear: "토리가 세 방향의 길이를 모두 곱했어요.",
        artIndex: 9,
        seed
      });
    },
    () => {
      const speed = 70 + day;
      const time = 3 + (stage % 3);
      const rest = 25 + (day % 4) * 5;
      return makeNumberStage({
        title: "나루터 이동 계획",
        story: "토리는 일정한 속도로 이동한 거리를 계산하고 있어요.",
        problem: [`토리는 1분에 ${speed}m씩 ${time}분 동안 걷고, 이어서 ${rest}m를 더 걸었습니다.`, "토리가 걸은 거리는 모두 몇 m일까요?"],
        answer: speed * time + rest,
        offsets: [-speed, speed, rest],
        unit: "m",
        clear: "토리가 속도와 시간을 이용했어요.",
        artIndex: 5,
        seed
      });
    }
  ];
  return makers[(stage - 1) % makers.length]();
}

function makeJuneWeekFour(day, stage) {
  const seed = day * 10 + stage;
  const makers = [
    () => {
      const price = 1200 + day * 30;
      const discount = 10 + (stage % 3) * 5;
      return makeNumberStage({
        title: "축제 할인 계산",
        story: "토리는 축제 가게의 할인 가격을 따져 보고 있어요.",
        problem: [`정가가 ${price.toLocaleString("ko-KR")}원인 물건을 ${discount}% 할인해 줍니다.`, "할인받는 금액은 얼마일까요?"],
        answer: price * discount / 100,
        offsets: [-60, 60, 120],
        unit: "원",
        clear: "토리가 퍼센트를 금액으로 바꾸었어요.",
        artIndex: 0,
        seed
      });
    },
    () => {
      const hidden = 6 + (day % 8) + Math.floor(stage / 6);
      const result = hidden * 3 + 4;
      return makeNumberStage({
        title: "문지기의 숨은 수",
        story: "토리는 문지기가 낸 식에서 숨은 수를 찾아야 해요.",
        problem: [`어떤 수에 3을 곱하고 4를 더했더니 ${result}가 되었습니다.`, "어떤 수는 무엇일까요?"],
        answer: hidden,
        offsets: [-2, 2, 3],
        clear: "토리가 거꾸로 계산해 숨은 수를 찾았어요.",
        artIndex: 9,
        seed
      });
    },
    () => {
      const red = 3 + (day % 3);
      const blue = 4 + (stage % 4);
      const total = red + blue;
      return makeTextStage({
        title: "보석 주머니 확률",
        story: "토리는 보석 주머니에서 색을 뽑을 가능성을 생각하고 있어요.",
        problem: [`주머니에는 빨간 보석 ${red}개와 파란 보석 ${blue}개가 있습니다. 눈을 감고 하나를 뽑습니다.`, "파란 보석을 뽑을 가능성은 어느 것일까요?"],
        answerText: `${blue}/${total}`,
        wrongTexts: [`${red}/${total + 1}`, `${blue + 1}/${total}`, `${total}/${blue}`],
        clear: "토리가 원하는 경우와 전체 경우를 비교했어요.",
        artIndex: 4,
        seed
      });
    },
    () => {
      const base = 5 + (day % 4) + Math.floor(stage / 6);
      const seq = [base, base + 2, base + 6, base + 12, base + 20];
      return makeNumberStage({
        title: "차이가 커지는 규칙",
        story: "토리는 숫자 사이의 차이가 변하는 규칙을 발견했어요.",
        problem: [`숫자는 ${seq[0]}, ${seq[1]}, ${seq[2]}, ${seq[3]}, ${seq[4]}, ? 순서입니다. 늘어나는 차이는 2, 4, 6, 8처럼 커집니다.`, "다음 수는 무엇일까요?"],
        answer: seq[4] + 10,
        offsets: [-4, 2, 6],
        clear: "토리가 차이의 차이를 살폈어요.",
        artIndex: 3,
        seed
      });
    },
    () => {
      const small = 4 + (day % 5) + Math.floor(stage / 6);
      const large = small + 5;
      return makeNumberStage({
        title: "두 상자의 무게",
        story: "토리는 상자 무게를 비교해 전체 무게를 구하고 있어요.",
        problem: [`작은 상자 한 개는 ${small}kg이고, 큰 상자 한 개는 ${large}kg입니다. 작은 상자 2개와 큰 상자 3개의 무게는 모두 몇 kg일까요?`],
        answer: small * 2 + large * 3,
        offsets: [-large, small, large],
        unit: "kg",
        clear: "토리가 두 종류의 상자를 따로 계산했어요.",
        artIndex: 2,
        seed
      });
    }
  ];
  return makers[(stage - 1) % makers.length]();
}

function makeJuneQuest(day) {
  const date = new Date(`2026-06-${String(day).padStart(2, "0")}T00:00:00+09:00`);
  const week = day <= 7 ? 1 : day <= 14 ? 2 : day <= 21 ? 3 : 4;
  const makers = [makeJuneWeekOne, makeJuneWeekTwo, makeJuneWeekThree, makeJuneWeekFour];
  const stages = Array.from({ length: 10 }, (_, index) => {
    const stage = makers[week - 1](day, index + 1);
    return index < 5 ? stage : { ...stage, title: `${stage.title} 심화` };
  });
  return {
    id: formatDateId(date),
    label: `${week}주차 레벨 ${week + 2}`,
    date,
    stages
  };
}

function makeJuneQuests() {
  return Array.from({ length: 30 }, (_, index) => makeJuneQuest(index + 1));
}

const slides = document.getElementById("slides");
const progress = document.getElementById("progress");
const score = document.getElementById("score");
const questTitle = document.getElementById("questTitle");
const soundToggle = document.getElementById("soundToggle");
const questDateTitle = document.getElementById("questDateTitle");
const questSelect = document.getElementById("questSelect");
const achievementText = document.getElementById("achievementText");
const achievementFill = document.getElementById("achievementFill");
const attemptText = document.getElementById("attemptText");
const stageList = document.getElementById("stageList");

let currentStage = 0;
let locked = false;
let activeQuestIndex = getInitialQuestIndex();
let stages = quests[activeQuestIndex].stages;
const questProgress = quests.map((quest) => ({
  attemptsLeft: quest.stages.map(() => 3),
  wrongCounts: quest.stages.map(() => 0),
  solvedAttempts: quest.stages.map(() => null)
}));
let attemptsLeft = questProgress[activeQuestIndex].attemptsLeft;
let wrongCounts = questProgress[activeQuestIndex].wrongCounts;
let solvedAttempts = questProgress[activeQuestIndex].solvedAttempts;

function readSoundPreference() {
  try {
    return localStorage.getItem("mathQuestSound") !== "off";
  } catch {
    return true;
  }
}

function writeSoundPreference() {
  try {
    localStorage.setItem("mathQuestSound", soundEnabled ? "on" : "off");
  } catch {}
}

let soundEnabled = readSoundPreference();

const sounds = {
  click: "sounds/click2.ogg",
  hover: "sounds/rollover2.ogg",
  correct: "sounds/confirmation_001.ogg",
  wrong: "sounds/error_003.ogg",
  retry: "sounds/error_008.ogg",
  transition: "sounds/switch33.ogg",
  progress: "sounds/drop_004.ogg",
  complete: "sounds/confirmation_002.ogg",
  popup: "sounds/open_001.ogg",
  start: "sounds/bong_001.ogg"
};

const audioPool = Object.fromEntries(
  Object.entries(sounds).map(([key, src]) => [key, new Audio(src)])
);

function playSound(name, volume = 0.72) {
  if (!soundEnabled) return;

  const audio = audioPool[name];
  if (!audio) return;

  audio.pause();
  audio.currentTime = 0;
  audio.volume = volume;
  audio.play().catch(() => {});
}

function updateSoundToggle() {
  soundToggle.setAttribute("aria-pressed", String(!soundEnabled));
  soundToggle.setAttribute("aria-label", soundEnabled ? "소리 끄기" : "소리 켜기");
  soundToggle.classList.toggle("muted", !soundEnabled);
  soundToggle.querySelector("span").textContent = soundEnabled ? "♪" : "×";
}

function optionLabel(index) {
  return ["①", "②", "③", "④"][index];
}

function currentQuest() {
  return quests[activeQuestIndex];
}

function syncQuestState() {
  stages = currentQuest().stages;
  attemptsLeft = questProgress[activeQuestIndex].attemptsLeft;
  wrongCounts = questProgress[activeQuestIndex].wrongCounts;
  solvedAttempts = questProgress[activeQuestIndex].solvedAttempts;
}

function formatDateTitle(date = currentQuest().date) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  }).format(date);
}

function makeQuestSelect() {
  questSelect.innerHTML = quests.map((quest, index) => (
    `<option value="${index}">${questDisplayLabel(quest)} · ${formatDateTitle(quest.date)}</option>`
  )).join("");
  questSelect.value = String(activeQuestIndex);
}

function updateStageList() {
  stageList.innerHTML = stages.map((stage, index) => {
    const attempts = solvedAttempts[index];
    const status = attempts === null ? "대기" : `${attempts}번 만에 성공`;
    const statusClass = attempts === null ? "pending" : attempts === 1 ? "perfect" : "done";

    return `
      <button class="stage-pill ${statusClass}${index === currentStage ? " current" : ""}" type="button" data-jump-stage="${index}">
        <strong>${index + 1}. ${stage.title}</strong>
        <span>${status}</span>
      </button>
    `;
  }).join("");
}

function updateAchievement() {
  const solved = solvedAttempts.filter((item) => item !== null).length;
  const totalTries = solvedAttempts.reduce((sum, item) => sum + (item || 0), 0);
  const bestPossible = solved || 1;
  const successRate = solved === 0 ? 0 : Math.round((bestPossible / totalTries) * 100);
  const progressRate = Math.round((solved / stages.length) * 100);

  achievementText.textContent = `성취도 ${successRate}% · ${solved}/${stages.length} 완료`;
  achievementFill.style.width = `${successRate}%`;
  attemptText.textContent = solved === 0
    ? "아직 푼 문제가 없습니다."
    : `총 ${solved}문제를 ${totalTries}번 만에 풀었습니다.`;
  achievementFill.parentElement.setAttribute("aria-label", `성취도 ${successRate}%, 진행률 ${progressRate}%`);
}

function makeHeroSprite(extraClass = "") {
  return `<div class="tori-sprite ${extraClass}" aria-hidden="true"></div>`;
}

function makeScene(stage) {
  return `
    <section class="scene-card scene-${stage.scene}">
      <img src="${stage.image}" alt="도트용사 토리가 ${stage.title}에서 달려가는 도트 삽화" loading="lazy" decoding="async" />
      <div class="scene-overlay">
        <span>${stage.title}</span>
      </div>
    </section>
  `;
}

function makeVisual(type) {
  if (type !== "shape") return "";

  return `
    <div class="visual-box" aria-label="삼각형 두 개와 사각형 한 개">
      <svg viewBox="0 0 360 130" role="img">
        <polygon points="45,105 95,25 145,105" />
        <polygon points="155,105 205,25 255,105" />
        <rect x="270" y="38" width="72" height="72" />
      </svg>
    </div>
  `;
}

function makeQuestionSlide(stage, index) {
  return `
    <article class="slide stage-question" aria-label="스테이지 ${index + 1} 문제">
      ${makeScene(stage)}
      <section class="question-card">
        <div class="stage-label">Stage ${index + 1}</div>
        <h2>${stage.title}</h2>
        <p class="story">${stage.story}</p>
        ${makeVisual(stage.visual)}
        <div class="problem">
          ${stage.problem.map((line) => `<p>${line}</p>`).join("")}
        </div>
        <div class="choices">
          ${stage.choices
            .map(
              (choice, choiceIndex) =>
                `<button type="button" data-stage="${index}" data-choice="${choiceIndex}">${optionLabel(choiceIndex)} ${choice}</button>`
            )
            .join("")}
        </div>
        <p class="feedback">정답을 고르면 다음 스테이지로 이동합니다.</p>
      </section>
    </article>
  `;
}

function makeFinalSlide() {
  return `
    <article class="slide stage-clear final-clear" aria-label="전체 클리어">
      <section class="clear-panel">
        <div class="badge">Quest Clear</div>
        <h2>${currentQuest().label}의 10스테이지 완료!</h2>
        <p>토리가 모든 문제를 통과했어요. 내일은 정답률에 맞춰 난이도를 조절할 수 있습니다.</p>
        <div class="next-preview">
          <span>Result</span>
          <strong>10문제 모두 도전 완료</strong>
        </div>
        <button type="button" id="again">처음부터 다시</button>
      </section>
    </article>
  `;
}

function render() {
  questDateTitle.textContent = formatDateTitle();
  makeQuestSelect();
  progress.innerHTML = `
    <div class="journey-line"></div>
    ${makeHeroSprite("journey-hero")}
    ${stages.map((_, index) => `<span class="dot${index === 0 ? " active" : ""}"></span>`).join("")}
  `;
  slides.innerHTML = stages.map(makeQuestionSlide).join("") + makeFinalSlide();
  slides.style.setProperty("--slide-count", stages.length + 1);
  updateHeader();
  updateStageList();
  updateAchievement();
}

function switchQuest(index) {
  activeQuestIndex = index;
  currentStage = 0;
  locked = false;
  syncQuestState();
  render();
  goToStage(0);
}

function updateHeader() {
  const isFinished = currentStage >= stages.length;
  score.textContent = isFinished ? "Quest Clear" : `Stage ${currentStage + 1} / ${stages.length}`;
  questTitle.textContent = isFinished ? `도트용사 토리의 ${currentQuest().label} 모험 완료` : `도트용사 토리의 ${stages[currentStage].title}`;

  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === Math.min(currentStage, stages.length - 1));
    dot.classList.toggle("done", index < currentStage);
  });

  const journeyHero = document.querySelector(".journey-hero");
  if (journeyHero) {
    const percent = isFinished ? 1 : currentStage / (stages.length - 1);
    const trackWidth = progress.clientWidth || 270;
    journeyHero.style.left = `${24 + percent * (trackWidth - 48)}px`;
  }

  updateStageList();
}

function goToStage(index) {
  currentStage = index;
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateHeader();
}

slides.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.id === "again") {
    playSound("start", 0.6);
    locked = false;
    questProgress[activeQuestIndex] = {
      attemptsLeft: stages.map(() => 3),
      wrongCounts: stages.map(() => 0),
      solvedAttempts: stages.map(() => null)
    };
    syncQuestState();
    slides.querySelectorAll("button").forEach((choice) => {
      choice.disabled = false;
      choice.classList.remove("correct", "wrong");
    });
    slides.querySelectorAll(".feedback").forEach((item) => {
      item.textContent = "정답을 고르면 다음 스테이지로 이동합니다.";
      item.className = "feedback";
    });
    goToStage(0);
    updateAchievement();
    return;
  }

  if (locked) return;

  playSound("click", 0.55);

  const stageIndex = Number(button.dataset.stage);
  const choiceIndex = Number(button.dataset.choice);
  if (stageIndex !== currentStage) return;

  const stage = stages[stageIndex];
  const card = button.closest(".question-card");
  const feedback = card.querySelector(".feedback");
  const isCorrect = choiceIndex === stage.answer;

  if (!isCorrect) {
    wrongCounts[stageIndex] += 1;
    attemptsLeft[stageIndex] -= 1;
    button.classList.add("wrong");
    const left = attemptsLeft[stageIndex];
    feedback.textContent = left > 0
      ? `아직 아니에요. 기회가 총 3번 중에 ${left}번 남았습니다.`
      : "기회를 모두 사용했어요. 이 스테이지를 다시 도전해요.";
    feedback.className = "feedback bad";
    playSound(left > 0 ? "wrong" : "retry", 0.68);
    showPopup(left > 0 ? "다시 생각해 보기" : "다시 도전!", feedback.textContent, "bad");
    window.setTimeout(() => button.classList.remove("wrong"), 520);

    if (left === 0) {
      card.querySelectorAll(".choices button").forEach((choice) => {
        choice.disabled = true;
      });
      window.setTimeout(() => resetStage(stageIndex), 1100);
    }
    return;
  }

  locked = true;
  solvedAttempts[stageIndex] = wrongCounts[stageIndex] + 1;
  updateAchievement();
  updateStageList();
  playSound(stageIndex === stages.length - 1 ? "complete" : "correct", 0.72);
  button.classList.add("correct");
  feedback.textContent = stageIndex === stages.length - 1
    ? `정답! 잠시 후 ${currentQuest().label}의 결과로 이동합니다.`
    : "정답! 잠시 후 다음 스테이지로 이동합니다.";
  feedback.className = "feedback good";
  showPopup("정답!", stage.clear, "good");

  card.querySelectorAll("button").forEach((choice) => {
    choice.disabled = true;
  });

  window.setTimeout(() => {
    playSound(stageIndex === stages.length - 1 ? "complete" : "transition", 0.58);
    locked = false;
    goToStage(stageIndex + 1);
  }, 760);
});

slides.addEventListener("pointerover", (event) => {
  const button = event.target.closest("button");
  if (!button || button.disabled) return;
  playSound("hover", 0.18);
});

soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  writeSoundPreference();
  if (!soundEnabled) {
    Object.values(audioPool).forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
  }
  updateSoundToggle();
  playSound("click", 0.45);
});

questSelect.addEventListener("change", () => {
  const index = Number(questSelect.value);
  if (!Number.isInteger(index) || !quests[index]) return;
  playSound("transition", 0.45);
  switchQuest(index);
});

stageList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-jump-stage]");
  if (!button || locked) return;

  const index = Number(button.dataset.jumpStage);
  if (!Number.isInteger(index)) return;
  playSound("click", 0.42);
  goToStage(index);
});

function resetStage(stageIndex) {
  attemptsLeft[stageIndex] = 3;
  wrongCounts[stageIndex] = 0;
  const slide = slides.querySelectorAll(".stage-question")[stageIndex];
  if (!slide) return;

  slide.querySelectorAll(".choices button").forEach((choice) => {
    choice.disabled = false;
    choice.classList.remove("correct", "wrong");
  });

  const feedback = slide.querySelector(".feedback");
  feedback.textContent = "정답을 고르면 다음 스테이지로 이동합니다.";
  feedback.className = "feedback";
}

function showPopup(title, message, type) {
  const oldPopup = document.querySelector(".answer-popup");
  if (oldPopup) oldPopup.remove();

  const popup = document.createElement("div");
  playSound("popup", 0.34);
  popup.className = `answer-popup ${type}`;
  popup.innerHTML = `
    <div class="popup-card">
      <div class="popup-icon">${type === "good" ? "✓" : "!"}</div>
      <h3>${title}</h3>
      <p>${message}</p>
    </div>
  `;
  document.body.appendChild(popup);
  window.setTimeout(() => popup.classList.add("show"), 20);
  window.setTimeout(() => {
    popup.classList.remove("show");
    window.setTimeout(() => popup.remove(), 220);
  }, type === "good" ? 930 : 1120);
}

render();
updateSoundToggle();
