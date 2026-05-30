const quests = [
  {
    id: "2026-05-29",
    label: "어제",
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
    label: "오늘",
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
  }
];

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
let activeQuestIndex = 1;
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
    `<option value="${index}">${quest.label} · ${formatDateTitle(quest.date)}</option>`
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
