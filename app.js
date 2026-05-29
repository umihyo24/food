const TEXT = {
  appTitle: "食の地図帳",
  tagline: "残る食べものから、文明は芽吹く。",
  startLead:
    "村を置き、交易を結び、技術を選び、土地ごとの好みを満たしながら食文化を育てましょう。",
  begin: "地図帳をひらく",
  restart: "もう一度はじめる",
  atlasComplete: "食の地図帳 完成",
  victoryText:
    "図鑑の八割以上が埋まり、交易と研究がひとつの食文化圏を結びました。",
  technologies: "研究",
  encyclopedia: "食文化図鑑",
  villageInfo: "村の情報",
  tradeRoutes: "交易路",
  eventLog: "出来事",
  missions: "任務",
  buildVillages: "村を建てる",
  routeTools: "交易の道具",
  inspect: "調べる",
  createRoute: "交易路を作る",
  advanceDay: "一日進める",
  lore: "伝承点",
  day: "日目",
  year: "年",
  people: "人",
  happiness: "幸福度",
  population: "人口",
  culture: "文化",
  stores: "備蓄",
  empty: "空",
  demand: "欲しい食材",
  specialization: "専門化",
  chooseSpecialization: "専門化を選ぶ",
  trips: "往来",
  noRoutes: "交易路はまだありません。",
  researched: "研究済み",
  research: "研究する",
  unlocked: "解放済み",
  undiscovered: "未発見",
  discoveredOn: "発見日",
  close: "閉じる",
  newCulture: "新しい食文化",
  techUnlocked: "技術解放",
  missionDone: "任務達成",
  reward: "報酬",
  progress: "進捗",
  completed: "達成",
  lockedByChoice: "別系統を先に選択済み",
  seasons: { spring: "春", summer: "夏", autumn: "秋", winter: "冬" },
  terrain: { sea: "海", plains: "平野", mountain: "山地" },
  villageTypes: { fishing: "漁村", farming: "農村", herding: "牧畜村" },
  resources: {
    fish: "魚",
    grain: "穀物",
    vegetable: "野菜",
    meat: "肉",
    milk: "乳",
    salt: "塩",
    driedFish: "干し魚",
    smokedFish: "燻製魚",
    cheese: "チーズ",
    flour: "粉",
    vinegar: "酢",
    yogurt: "発酵乳",
  },
  tech: {
    drying: {
      name: "乾燥",
      description: "魚と塩を使い、長旅に耐える干し魚を作ります。",
    },
    smoking: {
      name: "燻製",
      description: "魚を煙で守り、山村まで届く香り高い保存食にします。",
    },
    milling: {
      name: "製粉",
      description: "余った穀物を日持ちする粉へ変えます。",
    },
    fermentation: {
      name: "発酵",
      description: "穀物と野菜から酢を作り、酸味の文化を開きます。",
    },
    cheesemaking: {
      name: "チーズ作り",
      description: "乳と塩をチーズに変え、牧畜の価値を高めます。",
    },
    culturedMilk: {
      name: "発酵乳",
      description: "乳を発酵させ、日々の食卓と交易に新しい酸味を加えます。",
    },
  },
  specializations: {
    coastFishing: {
      name: "沿岸漁業",
      description: "魚と塩を安定して増やします。",
    },
    deepSeaFishing: {
      name: "深海漁業",
      description: "魚が大きく増えますが、塩は控えめです。",
    },
    grainFarming: {
      name: "穀物農業",
      description: "穀物の収穫を大きく伸ばします。",
    },
    vegetableFarming: {
      name: "野菜農業",
      description: "野菜を増やし、発酵の材料を支えます。",
    },
    dairy: {
      name: "酪農",
      description: "乳を増やし、乳文化へ進みやすくします。",
    },
    beef: {
      name: "肉牛",
      description: "肉を増やし、祭りの料理を生みやすくします。",
    },
  },
  groups: {
    foundations: "基層文化",
    fish: "魚の文化",
    grain: "穀物の文化",
    milk: "乳の文化",
    synthesis: "融合文化",
  },
  hints: {
    tech: "研究",
    resources: "共有",
    entries: "前提文化を発見",
    routeTypes: "必要な村同士を接続",
    population: "人口到達",
    routes: "交易路を増やす",
    trade: "累積交易",
    fallback: "村々に試作の余地を与えましょう。",
    routePending: "範囲内の二つ目の村を選び、交易路を開きます。",
    routeStart: "交易路の始点にする村を選びます。",
    build: "適した土地をクリックして村を建てます。",
    inspect:
      "村を調べるか、建設や交易の道具を選びましょう。食材は保存しないと傷みます。",
  },
  log: {
    first: "最初の村々が地図帳に名を刻みました。",
    founded: (type) => `${type}が生まれました。`,
    badTerrain: (type, terrain) => `${type}は${terrain}では根づきません。`,
    needLore: (cost, type) => `${type}を開くには伝承点が${cost}必要です。`,
    routeLong: "いまの隊商には遠すぎる交易路です。",
    routeOpened: (a, b) => `交易路が開きました：${a} ⇄ ${b}`,
    spoiled: (resource, village) => `${village}で${resource}が傷みました。`,
    tech: (name) => `${name}の技術が解放されました。`,
    culture: (name) => `新しい食文化「${name}」を発見しました。`,
    mission: (name, reward) => `任務「${name}」達成。伝承点+${reward}。`,
    demandMet: (village, resource) =>
      `${village}に${resource}が届き、食卓がにぎわいました。`,
    demandMissed: (village, resource) =>
      `${village}では${resource}が足りず、不満が広がりました。`,
    spec: (village, spec) => `${village}は「${spec}」を選びました。`,
  },
  missionText: {
    fishCulture: {
      name: "魚文化を発見する",
      description: "漁村の魚を各地へ知らせる。",
    },
    threeRoutes: {
      name: "交易路を3本作る",
      description: "三つの道で村々を結ぶ。",
    },
    population500: {
      name: "人口500人達成",
      description: "安定した食料供給で人口を伸ばす。",
    },
    narezushi: {
      name: "なれずしを発見する",
      description: "魚飯と酢の交易から熟成食を生む。",
    },
    demand: {
      name: "好物供給を20回行う",
      description: "各村の食の好みに応える。",
    },
  },
  encyclopediaText: {
    fishCulture: ["魚食文化", "海辺で魚を食べ、分け合う暮らし。"],
    grainCulture: ["穀物文化", "畑、収穫暦、穀倉が支える食の基盤。"],
    milkCulture: ["乳文化", "牧草地から生まれる乳の食習慣。"],
    saltedFish: ["塩魚", "傷みやすい魚を塩で守る最初の知恵。"],
    himono: ["干物", "日差しと潮風が魚を旅できる食材に変える。"],
    smokedFishDish: ["燻製魚", "煙の香りで保存された山道向けの魚。"],
    fishRice: ["魚飯", "魚と穀物が同じ椀で出会う。"],
    narezushi: ["なれずし", "魚飯に酢と時間を重ねた熟成の味。"],
    sushi: ["寿司", "保存と祝祭が洗練された一口の文化。"],
    fishSoup: ["魚汁", "魚と野菜の出汁が村の鍋を温める。"],
    saltedGrilledFish: ["塩焼き魚", "塩と火だけで魚の旨みを引き出す浜の料理。"],
    seaFestival: ["浜祭り膳", "魚、塩、穀物を供える海辺の祭り料理。"],
    bread: ["パン", "粉と発酵が生むふくらむ主食。"],
    flatbread: ["平焼きパン", "粉を焼き石で薄く焼く携帯食。"],
    vegetableStew: ["野菜煮込み", "野菜と穀物が共同鍋で出会う。"],
    meatPie: ["肉パイ", "肉と粉を包み、遠出にも耐えるごちそう。"],
    grainPorridge: ["雑穀粥", "穀物を煮て誰もが食べやすくした朝の器。"],
    harvestNoodles: ["収穫麺", "粉を細く伸ばし、収穫祭で分け合う料理。"],
    cheese: ["チーズ", "乳を交易できる宝へ変えた牧畜の知恵。"],
    yogurt: ["発酵乳", "酸味ある乳が日々の食卓を支える。"],
    curds: ["乳凝り", "新鮮な乳と塩から生まれる素朴な乳食。"],
    cheeseBread: ["チーズパン", "製粉とチーズ作りが街道で出会う。"],
    milkSoup: ["乳汁", "乳と野菜を煮込む牧畜村の滋養食。"],
    pastoralFeast: ["牧場の宴", "肉、乳、チーズを並べる祝いの膳。"],
    atlasCuisine: ["地図帳料理", "海、畑、牧場がひとつの食卓になる共有文化。"],
  },
};

const CONFIG = {
  gridSize: 50,
  maxVillages: 12,
  daySeconds: 1.6,
  winCompletion: 0.8,
  routeRange: 20,
  tradeAmount: 9,
  researchPerVillage: 2.2,
  populationGrowth: 0.006,
  consumptionPerPerson: 0.022,
  buildCosts: { fishing: 70, farming: 80, herding: 85 },
  villageStartPopulation: 85,
  startingLore: 120,
  startingStore: { grain: 120, salt: 45 },
  demandCheckDays: 5,
  terrain: {
    sea: { color: "#1d6474", accent: "#2e8394" },
    plains: { color: "#588f43", accent: "#7baa51" },
    mountain: { color: "#6e6c61", accent: "#9b9789" },
  },
  villageTypes: {
    fishing: {
      icon: "⚓",
      terrain: ["sea", "plains"],
      produces: { fish: 20, salt: 4 },
      consumes: ["grain", "vegetable"],
      demands: ["grain", "vegetable"],
    },
    farming: {
      icon: "🌾",
      terrain: ["plains"],
      produces: { grain: 17, vegetable: 12 },
      consumes: ["fish", "meat", "milk"],
      demands: ["fish", "meat", "milk"],
    },
    herding: {
      icon: "🐄",
      terrain: ["plains", "mountain"],
      produces: { meat: 8, milk: 16 },
      consumes: ["grain", "vegetable", "salt"],
      demands: ["grain", "vegetable", "salt"],
    },
  },
  specializations: {
    fishing: ["coastFishing", "deepSeaFishing"],
    farming: ["grainFarming", "vegetableFarming"],
    herding: ["dairy", "beef"],
  },
  specializationEffects: {
    coastFishing: { fish: 1.25, salt: 1.5 },
    deepSeaFishing: { fish: 1.7, salt: 0.75 },
    grainFarming: { grain: 1.65, vegetable: 0.8 },
    vegetableFarming: { vegetable: 1.65, grain: 0.85 },
    dairy: { milk: 1.65, meat: 0.8 },
    beef: { meat: 1.75, milk: 0.75 },
  },
  resources: {
    fish: { icon: "🐟", shelfLife: 3 },
    grain: { icon: "🌾", shelfLife: 18 },
    vegetable: { icon: "🍏", shelfLife: 6 },
    meat: { icon: "🥩", shelfLife: 4 },
    milk: { icon: "🥛", shelfLife: 2 },
    salt: { icon: "🧂", shelfLife: 999 },
    driedFish: { icon: "🐠", shelfLife: 30 },
    smokedFish: { icon: "🍖", shelfLife: 36 },
    cheese: { icon: "🧀", shelfLife: 26 },
    flour: { icon: "🍚", shelfLife: 35 },
    vinegar: { icon: "🍶", shelfLife: 120 },
    yogurt: { icon: "🥣", shelfLife: 12 },
  },
  technologies: {
    drying: {
      icon: "☀️",
      cost: 45,
      unlocks: ["driedFish"],
      choiceGroup: "fishPreserve",
    },
    smoking: {
      icon: "💨",
      cost: 45,
      unlocks: ["smokedFish"],
      choiceGroup: "fishPreserve",
    },
    milling: { icon: "⚙️", cost: 60, unlocks: ["flour"] },
    fermentation: { icon: "🫧", cost: 80, unlocks: ["vinegar"] },
    cheesemaking: { icon: "🧀", cost: 80, unlocks: ["cheese"] },
    culturedMilk: { icon: "🥛", cost: 65, unlocks: ["yogurt"] },
  },
  processRules: [
    { tech: "drying", inputs: { fish: 12, salt: 3 }, output: ["driedFish", 8] },
    { tech: "smoking", inputs: { fish: 13 }, output: ["smokedFish", 8] },
    { tech: "milling", inputs: { grain: 14 }, output: ["flour", 10] },
    {
      tech: "fermentation",
      inputs: { grain: 7, vegetable: 6 },
      output: ["vinegar", 5],
    },
    {
      tech: "cheesemaking",
      inputs: { milk: 12, salt: 2 },
      output: ["cheese", 8],
    },
    { tech: "culturedMilk", inputs: { milk: 10 }, output: ["yogurt", 7] },
  ],
  encyclopedia: [
    [
      "fishCulture",
      "foundations",
      "🐟",
      { resources: ["fish"], villageTypes: ["fishing"] },
    ],
    [
      "grainCulture",
      "foundations",
      "🌾",
      { resources: ["grain"], villageTypes: ["farming"] },
    ],
    [
      "milkCulture",
      "foundations",
      "🥛",
      { resources: ["milk"], villageTypes: ["herding"] },
    ],
    ["saltedFish", "fish", "🐟", { trade: { fish: 80, salt: 40 } }],
    [
      "himono",
      "fish",
      "🐠",
      { resources: ["driedFish"], tech: ["drying"], trade: { fish: 120 } },
    ],
    [
      "smokedFishDish",
      "fish",
      "🍖",
      { resources: ["smokedFish"], tech: ["smoking"], trade: { fish: 120 } },
    ],
    [
      "fishRice",
      "fish",
      "🍚",
      {
        entries: ["fishCulture", "grainCulture"],
        trade: { fish: 200, grain: 200 },
      },
    ],
    [
      "narezushi",
      "fish",
      "🍣",
      { entries: ["fishRice"], trade: { vinegar: 100, fish: 250 } },
    ],
    [
      "sushi",
      "fish",
      "🍱",
      {
        entries: ["narezushi"],
        population: 500,
        trade: { fish: 320, grain: 280 },
      },
    ],
    ["fishSoup", "fish", "🍲", { trade: { fish: 150, vegetable: 100 } }],
    ["saltedGrilledFish", "fish", "🔥", { trade: { fish: 120, salt: 90 } }],
    [
      "seaFestival",
      "fish",
      "🏮",
      { entries: ["saltedGrilledFish", "fishRice"], routes: 4 },
    ],
    [
      "bread",
      "grain",
      "🍞",
      { resources: ["flour"], tech: ["milling"], trade: { flour: 120 } },
    ],
    [
      "flatbread",
      "grain",
      "🫓",
      { resources: ["flour"], tech: ["milling"], trade: { grain: 180 } },
    ],
    ["vegetableStew", "grain", "🍲", { trade: { vegetable: 160, grain: 120 } }],
    [
      "meatPie",
      "grain",
      "🥧",
      { resources: ["meat", "flour"], trade: { meat: 150, flour: 150 } },
    ],
    ["grainPorridge", "grain", "🥣", { trade: { grain: 180, milk: 60 } }],
    [
      "harvestNoodles",
      "grain",
      "🍜",
      { entries: ["bread"], trade: { flour: 220, vegetable: 120 } },
    ],
    [
      "cheese",
      "milk",
      "🧀",
      { resources: ["cheese"], tech: ["cheesemaking"], trade: { milk: 140 } },
    ],
    [
      "yogurt",
      "milk",
      "🥣",
      { resources: ["yogurt"], tech: ["culturedMilk"], trade: { milk: 130 } },
    ],
    ["curds", "milk", "🥣", { trade: { milk: 120, salt: 45 } }],
    [
      "cheeseBread",
      "milk",
      "🥖",
      { entries: ["cheese", "bread"], trade: { cheese: 140, flour: 140 } },
    ],
    ["milkSoup", "milk", "🍵", { trade: { milk: 160, vegetable: 100 } }],
    [
      "pastoralFeast",
      "milk",
      "🍽️",
      { entries: ["cheese", "meatPie"], trade: { meat: 200, milk: 200 } },
    ],
    [
      "atlasCuisine",
      "synthesis",
      "🧭",
      {
        entries: ["sushi", "meatPie", "cheeseBread"],
        routes: 5,
        trade: { fish: 350, grain: 350, milk: 250 },
      },
    ],
  ].map(([id, group, icon, requires]) => ({
    id,
    group,
    icon,
    name: TEXT.encyclopediaText[id][0],
    description: TEXT.encyclopediaText[id][1],
    requires,
  })),
  missions: [
    {
      id: "fishCulture",
      reward: 45,
      isComplete: () => gameState.encyclopedia.fishCulture?.discovered,
    },
    {
      id: "threeRoutes",
      reward: 70,
      isComplete: () => gameState.routes.length >= 3,
    },
    {
      id: "population500",
      reward: 100,
      isComplete: () => getTotalPopulation() >= 500,
    },
    {
      id: "narezushi",
      reward: 120,
      isComplete: () => gameState.encyclopedia.narezushi?.discovered,
    },
    {
      id: "demand",
      reward: 90,
      isComplete: () => gameState.demandSatisfiedCount >= 20,
    },
  ],
};

const ASSETS = {
  terrain: {
    sea: "assets/sea.png",
    plains: "assets/plains.png",
    mountain: "assets/mountain.png",
  },
  villages: {
    fishing: "assets/fishing-village.png",
    farming: "assets/farming-village.png",
    herding: "assets/herding-village.png",
  },
  fallback: "assets/fallback.png",
};
const assetCache = {};
const gameState = {
  phase: "start",
  day: 1,
  season: "spring",
  lore: 0,
  selectedTool: "inspect",
  selectedVillageId: null,
  pendingRouteVillageId: null,
  map: [],
  villages: [],
  routes: [],
  technologies: {},
  encyclopedia: {},
  missions: {},
  tradeHistory: {},
  eventLog: [],
  notifications: [],
  demandSatisfiedCount: 0,
  imagesReady: false,
  elapsedMs: 0,
  lastFrameTime: null,
};
const elements = {};

function boot() {
  cacheElements();
  localizeStaticDom();
  initGame();
  bindEvents();
  loadImages(ASSETS).then(() => {
    gameState.imagesReady = true;
    render();
  });
  render();
  requestAnimationFrame(gameLoop);
}
function cacheElements() {
  [
    "mapCanvas",
    "resourceStrip",
    "technologyList",
    "encyclopediaList",
    "villageInfo",
    "tradeInfo",
    "eventLog",
    "researchPoints",
    "completionLabel",
    "completionBar",
    "dayLabel",
    "seasonLabel",
    "startOverlay",
    "gameoverOverlay",
    "gameoverTitle",
    "gameoverText",
    "mapHint",
    "missionList",
    "notificationOverlay",
    "notificationTitle",
    "notificationText",
    "notificationIcon",
  ].forEach((id) => {
    elements[id] = document.getElementById(id);
  });
  elements.canvas = elements.mapCanvas;
  elements.ctx = elements.canvas.getContext("2d");
}
function localizeStaticDom() {
  document.documentElement.lang = "ja";
  document.title = TEXT.appTitle;
  document.querySelectorAll("[data-text]").forEach((node) => {
    node.textContent = getTextPath(node.dataset.text);
  });
  document.querySelectorAll("[data-aria]").forEach((node) => {
    node.setAttribute("aria-label", getTextPath(node.dataset.aria));
  });
  document.querySelector("h1").textContent = TEXT.appTitle;
}
function getTextPath(path) {
  return path.split(".").reduce((obj, key) => obj?.[key], TEXT) || path;
}
function gameLoop(timestamp) {
  if (gameState.lastFrameTime === null) gameState.lastFrameTime = timestamp;
  const delta = timestamp - gameState.lastFrameTime;
  gameState.lastFrameTime = timestamp;
  if (gameState.phase === "playing") {
    gameState.elapsedMs += delta;
    if (gameState.elapsedMs >= CONFIG.daySeconds * 1000) {
      gameState.elapsedMs = 0;
      update();
    }
  }
  requestAnimationFrame(gameLoop);
}
function initGame() {
  Object.assign(gameState, {
    phase: "start",
    day: 1,
    season: "spring",
    lore: CONFIG.startingLore,
    selectedTool: "inspect",
    selectedVillageId: null,
    pendingRouteVillageId: null,
    map: createMap(),
    villages: [],
    routes: [],
    technologies: Object.fromEntries(
      Object.keys(CONFIG.technologies).map((id) => [id, { unlocked: false }]),
    ),
    encyclopedia: Object.fromEntries(
      CONFIG.encyclopedia.map((entry) => [
        entry.id,
        { discovered: false, day: null },
      ]),
    ),
    missions: Object.fromEntries(
      CONFIG.missions.map((m) => [m.id, { completed: false }]),
    ),
    tradeHistory: Object.fromEntries(
      Object.keys(CONFIG.resources).map((id) => [id, 0]),
    ),
    eventLog: [],
    notifications: [],
    demandSatisfiedCount: 0,
    elapsedMs: 0,
    lastFrameTime: null,
  });
  seedVillages();
  addLog(TEXT.log.first);
}
function bindEvents() {
  document
    .getElementById("startButton")
    .addEventListener("click", () => startPlaying());
  document.getElementById("restartButton").addEventListener("click", () => {
    initGame();
    elements.gameoverOverlay.classList.add("hidden");
    startPlaying();
  });
  document.getElementById("advanceDayButton").addEventListener("click", () => {
    if (gameState.phase === "playing") update();
  });
  document
    .getElementById("notificationClose")
    .addEventListener("click", dismissNotification);
  document.querySelectorAll("[data-tool]").forEach((button) =>
    button.addEventListener("click", () => {
      gameState.selectedTool = button.dataset.tool;
      gameState.pendingRouteVillageId = null;
      render();
    }),
  );
  elements.canvas.addEventListener("click", handleMapClick);
  window.addEventListener("resize", render);
}
function startPlaying() {
  gameState.phase = "playing";
  gameState.lastFrameTime = performance.now();
  elements.startOverlay.classList.add("hidden");
  checkInventions();
  render();
}
function loadImages(assetTree) {
  return Promise.all(
    collectAssetPaths(assetTree).map(
      (path) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            assetCache[path] = { ok: true, img };
            resolve();
          };
          img.onerror = () => {
            assetCache[path] = { ok: false, img: null };
            resolve();
          };
          img.src = path;
        }),
    ),
  );
}
function collectAssetPaths(value) {
  return typeof value === "string"
    ? [value]
    : Object.values(value).flatMap(collectAssetPaths);
}
function createMap() {
  const center = CONFIG.gridSize / 2;
  return Array.from({ length: CONFIG.gridSize }, (_, y) =>
    Array.from({ length: CONFIG.gridSize }, (_, x) => {
      const nx = x - center;
      const ny = y - center;
      const distance = Math.sqrt(nx * nx + ny * ny) / center;
      const wave =
        Math.sin(x * 0.34) + Math.cos(y * 0.27) + Math.sin((x + y) * 0.18);
      if (distance > 0.9 || (x < 9 && y > 28) || (y < 9 && x < 15))
        return "sea";
      if (wave > 1.55 || (x > 34 && y < 24) || (x > 37 && y > 34))
        return "mountain";
      return "plains";
    }),
  );
}
function seedVillages() {
  addVillage("fishing", 12, 37);
  addVillage("farming", 28, 25);
  addVillage("herding", 38, 33);
  createRoute(gameState.villages[0].id, gameState.villages[1].id, true);
  createRoute(gameState.villages[1].id, gameState.villages[2].id, true);
}
function addVillage(type, x, y) {
  const config = CONFIG.villageTypes[type];
  const village = {
    id: `v${Date.now()}-${gameState.villages.length}`,
    type,
    name: generateVillageName(type),
    x,
    y,
    population: CONFIG.villageStartPopulation,
    happiness: 68,
    culture: 0,
    demand: pickDemand(type),
    specialization: null,
    inventory: createInitialInventory(type),
    knownResources: new Set(Object.keys(config.produces)),
  };
  gameState.villages.push(village);
  addLog(`${village.name}：${TEXT.log.founded(TEXT.villageTypes[type])}`);
  return village;
}
function generateVillageName(type) {
  const names = {
    fishing: ["汐浜", "藍浦", "潮見", "小舟崎"],
    farming: ["麦里", "緑野", "稲穂原", "菜花郷"],
    herding: ["牧ヶ丘", "乳里", "白峰", "牛守"],
  };
  return names[type][
    gameState.villages.filter((v) => v.type === type).length %
      names[type].length
  ];
}
function pickDemand(type) {
  const list = CONFIG.villageTypes[type].demands;
  return list[gameState.villages.length % list.length];
}
function createInitialInventory(type) {
  const inventory = {};
  Object.entries(CONFIG.startingStore).forEach(([id, amount]) =>
    addBatch(inventory, id, amount),
  );
  Object.entries(CONFIG.villageTypes[type].produces).forEach(([id, amount]) =>
    addBatch(inventory, id, amount * 3),
  );
  return inventory;
}
function update() {
  if (gameState.phase !== "playing") return;
  gameState.day += 1;
  gameState.season = getSeason(gameState.day);
  produceResources();
  processGoods();
  consumeResources();
  spoilResources();
  runTradeRoutes();
  updateVillageDemand();
  updateCultureAndResearch();
  checkInventions();
  checkMissions();
  checkGameover();
  render();
}
function produceResources() {
  gameState.villages.forEach((village) => {
    Object.entries(CONFIG.villageTypes[village.type].produces).forEach(
      ([resource, amount]) => {
        const modifier = village.specialization
          ? CONFIG.specializationEffects[village.specialization][resource] || 1
          : 1;
        addBatch(
          village.inventory,
          resource,
          Math.round(amount * modifier * (0.75 + village.happiness / 220)),
        );
        village.knownResources.add(resource);
      },
    );
  });
}
function processGoods() {
  gameState.villages.forEach((village) =>
    CONFIG.processRules.forEach((rule) => {
      if (!isTechUnlocked(rule.tech)) return;
      if (
        !Object.entries(rule.inputs).every(
          ([id, amount]) => getAmount(village.inventory, id) >= amount,
        )
      )
        return;
      Object.entries(rule.inputs).forEach(([id, amount]) =>
        removeAmount(village.inventory, id, amount),
      );
      addBatch(village.inventory, rule.output[0], rule.output[1]);
      village.knownResources.add(rule.output[0]);
    }),
  );
}
function consumeResources() {
  const foods = [
    "grain",
    "vegetable",
    "fish",
    "meat",
    "milk",
    "driedFish",
    "smokedFish",
    "cheese",
    "flour",
    "yogurt",
  ];
  gameState.villages.forEach((village) => {
    const needed = Math.max(
      5,
      Math.round(village.population * CONFIG.consumptionPerPerson),
    );
    let fed = 0;
    foods.forEach((resource) => {
      if (fed < needed)
        fed += removeAmount(village.inventory, resource, needed - fed);
    });
    const ratio = Math.min(1, fed / needed);
    village.happiness = clamp(
      village.happiness + (ratio >= 1 ? 1.1 : -6),
      0,
      100,
    );
    village.population = Math.max(
      20,
      Math.round(
        village.population *
          (1 + (CONFIG.populationGrowth * (village.happiness - 48)) / 52),
      ),
    );
  });
}
function spoilResources() {
  gameState.villages.forEach((village) => {
    Object.values(village.inventory).forEach((batches) =>
      batches.forEach((batch) => {
        batch.age += 1;
      }),
    );
    Object.keys(village.inventory).forEach((resource) => {
      const before = getAmount(village.inventory, resource);
      village.inventory[resource] = village.inventory[resource].filter(
        (batch) => batch.age <= CONFIG.resources[resource].shelfLife,
      );
      if (before - getAmount(village.inventory, resource) > 5)
        addLog(TEXT.log.spoiled(resourceName(resource), village.name));
    });
  });
}
function runTradeRoutes() {
  gameState.routes.forEach((route) => {
    const a = getVillage(route.from);
    const b = getVillage(route.to);
    if (!a || !b) return;
    exchangeSurplus(a, b);
    exchangeSurplus(b, a);
    route.trips += 1;
  });
}
function exchangeSurplus(from, to) {
  Object.keys(CONFIG.resources).forEach((resource) => {
    const amount = getAmount(from.inventory, resource);
    const targetAmount = getAmount(to.inventory, resource);
    const targetNeeds = to.demand === resource ? 36 : 24;
    if (amount > 42 && targetAmount < targetNeeds) {
      const moving = Math.min(CONFIG.tradeAmount, amount - 34);
      const taken = removeAmount(from.inventory, resource, moving);
      addBatch(to.inventory, resource, taken, 1);
      to.knownResources.add(resource);
      gameState.tradeHistory[resource] += taken;
      if (to.demand === resource) {
        to.happiness = clamp(to.happiness + 1.6, 0, 100);
        to.culture += 1.1;
        gameState.demandSatisfiedCount += 1;
        addLog(TEXT.log.demandMet(to.name, resourceName(resource)));
      }
    }
  });
}
function updateVillageDemand() {
  if (gameState.day % CONFIG.demandCheckDays !== 0) return;
  gameState.villages.forEach((village) => {
    if (getAmount(village.inventory, village.demand) < 8) {
      village.happiness = clamp(village.happiness - 4, 0, 100);
      addLog(TEXT.log.demandMissed(village.name, resourceName(village.demand)));
    }
  });
}
function updateCultureAndResearch() {
  gameState.lore += Math.round(
    gameState.villages.length * CONFIG.researchPerVillage +
      getTotalPopulation() / 420 +
      gameState.routes.length * 0.8,
  );
  gameState.villages.forEach((village) => {
    village.culture +=
      0.7 + village.happiness / 130 + connectedRoutes(village.id).length * 0.25;
  });
}
function checkInventions() {
  CONFIG.encyclopedia.forEach((entry) => {
    if (
      !gameState.encyclopedia[entry.id].discovered &&
      requirementsMet(entry.requires)
    ) {
      gameState.encyclopedia[entry.id] = {
        discovered: true,
        day: gameState.day,
      };
      addLog(TEXT.log.culture(entry.name));
      pushNotification(
        TEXT.newCulture,
        `${entry.icon} ${entry.name}\n${entry.description}`,
        entry.icon,
      );
      gameState.villages.forEach((v) => {
        v.happiness = clamp(v.happiness + 2, 0, 100);
      });
    }
  });
}
function requirementsMet(requires = {}) {
  if (requires.resources && !requires.resources.every(hasWorldResource))
    return false;
  if (requires.tech && !requires.tech.every(isTechUnlocked)) return false;
  if (
    requires.entries &&
    !requires.entries.every((id) => gameState.encyclopedia[id]?.discovered)
  )
    return false;
  if (
    requires.villageTypes &&
    !requires.villageTypes.every((type) =>
      gameState.villages.some((v) => v.type === type),
    )
  )
    return false;
  if (requires.routeTypes && !requires.routeTypes.every(hasRouteType))
    return false;
  if (requires.population && getTotalPopulation() < requires.population)
    return false;
  if (requires.routes && gameState.routes.length < requires.routes)
    return false;
  if (
    requires.trade &&
    !Object.entries(requires.trade).every(
      ([id, amount]) => (gameState.tradeHistory[id] || 0) >= amount,
    )
  )
    return false;
  return true;
}
function checkMissions() {
  CONFIG.missions.forEach((mission) => {
    const state = gameState.missions[mission.id];
    if (!state.completed && mission.isComplete()) {
      state.completed = true;
      gameState.lore += mission.reward;
      const label = TEXT.missionText[mission.id].name;
      addLog(TEXT.log.mission(label, mission.reward));
      pushNotification(
        TEXT.missionDone,
        `${label}\n${TEXT.reward}：${mission.reward}${TEXT.lore}`,
        "🏆",
      );
    }
  });
}
function checkGameover() {
  const completion = getCompletion();
  if (completion >= CONFIG.winCompletion && gameState.phase === "playing") {
    gameState.phase = "gameover";
    elements.gameoverTitle.textContent = TEXT.atlasComplete;
    elements.gameoverText.textContent = `${TEXT.victoryText}\n${TEXT.progress}：${Math.round(completion * 100)}%`;
    elements.gameoverOverlay.classList.remove("hidden");
  }
}
function render() {
  renderTopbar();
  renderTechnologies();
  renderMissions();
  renderEncyclopedia();
  renderMap();
  renderBottomPanel();
  renderToolButtons();
  renderNotification();
  elements.startOverlay.classList.toggle("hidden", gameState.phase !== "start");
}
function renderTopbar() {
  const totals = getWorldTotals();
  elements.resourceStrip.innerHTML = Object.entries(CONFIG.resources)
    .map(
      ([id, resource]) =>
        `<div class="resource-card"><span>${resource.icon} ${resourceName(id)}</span><strong>${Math.floor(totals[id] || 0)}</strong></div>`,
    )
    .join("");
  elements.dayLabel.textContent = `${gameState.day}${TEXT.day}`;
  elements.seasonLabel.textContent = `${Math.floor((gameState.day - 1) / 120) + 1}${TEXT.year} · ${TEXT.seasons[gameState.season]}`;
}
function renderTechnologies() {
  elements.researchPoints.textContent = `${Math.floor(gameState.lore)} ${TEXT.lore}`;
  elements.technologyList.innerHTML = Object.entries(CONFIG.technologies)
    .map(([id, tech]) => {
      const state = gameState.technologies[id];
      const blocked = isChoiceBlocked(id);
      const canBuy = gameState.lore >= tech.cost && !state.unlocked && !blocked;
      const text = TEXT.tech[id];
      return `<article class="tech-card ${state.unlocked ? "unlocked" : "locked"}"><div class="tech-title"><span>${tech.icon} ${text.name}</span><span class="status-pill">${state.unlocked ? TEXT.researched : blocked ? TEXT.lockedByChoice : `${tech.cost} ${TEXT.lore}`}</span></div><p>${text.description}</p><button ${!canBuy ? "disabled" : ""} data-tech="${id}">${state.unlocked ? TEXT.unlocked : TEXT.research}</button></article>`;
    })
    .join("");
  elements.technologyList
    .querySelectorAll("[data-tech]")
    .forEach((button) =>
      button.addEventListener("click", () =>
        researchTechnology(button.dataset.tech),
      ),
    );
}
function researchTechnology(id) {
  const tech = CONFIG.technologies[id];
  if (
    !tech ||
    gameState.technologies[id].unlocked ||
    gameState.lore < tech.cost ||
    isChoiceBlocked(id)
  )
    return;
  gameState.lore -= tech.cost;
  gameState.technologies[id].unlocked = true;
  addLog(TEXT.log.tech(TEXT.tech[id].name));
  pushNotification(
    TEXT.techUnlocked,
    `${tech.icon} ${TEXT.tech[id].name}\n${TEXT.tech[id].description}`,
    tech.icon,
  );
  processGoods();
  checkInventions();
  checkMissions();
  render();
}
function isChoiceBlocked(id) {
  const group = CONFIG.technologies[id].choiceGroup;
  return Boolean(
    group &&
    Object.entries(CONFIG.technologies).some(
      ([otherId, tech]) =>
        otherId !== id && tech.choiceGroup === group && isTechUnlocked(otherId),
    ),
  );
}
function renderMissions() {
  elements.missionList.innerHTML = CONFIG.missions
    .map((mission) => {
      const state = gameState.missions[mission.id];
      const t = TEXT.missionText[mission.id];
      return `<article class="mission-card ${state.completed ? "completed" : ""}"><strong>${state.completed ? "✓" : "○"} ${t.name}</strong><p>${t.description}</p><div class="small-line"><span>${TEXT.reward}</span><strong>${mission.reward} ${TEXT.lore}</strong></div></article>`;
    })
    .join("");
}
function renderEncyclopedia() {
  const completion = getCompletion();
  elements.completionLabel.textContent = `${Math.round(completion * 100)}%`;
  elements.completionBar.style.width = `${completion * 100}%`;
  const byGroup = CONFIG.encyclopedia.reduce((groups, entry) => {
    groups[entry.group] = groups[entry.group] || [];
    groups[entry.group].push(entry);
    return groups;
  }, {});
  elements.encyclopediaList.innerHTML = Object.entries(byGroup)
    .map(
      ([group, entries]) =>
        `<section class="entry-group"><h3>${TEXT.groups[group]}</h3>${entries.map(renderEntry).join("")}</section>`,
    )
    .join("");
}
function renderEntry(entry) {
  const state = gameState.encyclopedia[entry.id];
  return `<article class="entry-card ${state.discovered ? "discovered" : "undiscovered"}"><div class="entry-title"><span><span class="sprite">${state.discovered ? entry.icon : "?"}</span>${state.discovered ? entry.name : TEXT.undiscovered}</span><span>${state.discovered ? `${state.day}${TEXT.day}` : "???"}</span></div><p>${state.discovered ? entry.description : describeHint(entry.requires)}</p></article>`;
}
function renderMap() {
  const canvas = elements.canvas;
  const rect = canvas.getBoundingClientRect();
  const size = Math.max(
    420,
    Math.floor(Math.min(rect.width || 900, rect.height || 900)),
  );
  if (canvas.width !== size || canvas.height !== size) {
    canvas.width = size;
    canvas.height = size;
  }
  const tile = canvas.width / CONFIG.gridSize;
  elements.ctx.clearRect(0, 0, canvas.width, canvas.height);
  gameState.map.forEach((row, y) =>
    row.forEach((terrain, x) => drawTile(elements.ctx, x, y, tile, terrain)),
  );
  gameState.routes.forEach((route) => drawRoute(elements.ctx, route, tile));
  gameState.villages.forEach((village) =>
    drawVillage(elements.ctx, village, tile),
  );
}
function drawTile(ctx, x, y, tile, terrain) {
  const config = CONFIG.terrain[terrain];
  ctx.fillStyle = config.color;
  ctx.fillRect(x * tile, y * tile, tile + 0.5, tile + 0.5);
  ctx.fillStyle = config.accent;
  if ((x * 13 + y * 7) % 11 === 0)
    ctx.fillRect(
      x * tile + tile * 0.25,
      y * tile + tile * 0.25,
      tile * 0.35,
      tile * 0.35,
    );
  if (!assetCache[ASSETS.terrain[terrain]]?.ok) {
    ctx.strokeStyle = "rgba(246, 216, 145, 0.08)";
    ctx.beginPath();
    ctx.moveTo(x * tile, y * tile + tile);
    ctx.lineTo(x * tile + tile, y * tile);
    ctx.stroke();
  }
}
function drawRoute(ctx, route, tile) {
  const from = getVillage(route.from);
  const to = getVillage(route.to);
  if (!from || !to) return;
  ctx.save();
  ctx.strokeStyle = "rgba(218, 238, 236, 0.86)";
  ctx.lineWidth = Math.max(2, tile * 0.18);
  ctx.setLineDash([tile * 0.8, tile * 0.45]);
  ctx.beginPath();
  ctx.moveTo((from.x + 0.5) * tile, (from.y + 0.5) * tile);
  ctx.lineTo((to.x + 0.5) * tile, (to.y + 0.5) * tile);
  ctx.stroke();
  ctx.restore();
}
function drawVillage(ctx, village, tile) {
  const x = (village.x + 0.5) * tile;
  const y = (village.y + 0.5) * tile;
  ctx.save();
  ctx.fillStyle =
    village.id === gameState.selectedVillageId ? "#f6d879" : "#1b1812";
  ctx.strokeStyle = "#fff4c8";
  ctx.lineWidth = Math.max(1, tile * 0.16);
  ctx.beginPath();
  ctx.arc(x, y, tile * 1.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  const imagePath = ASSETS.villages[village.type];
  if (assetCache[imagePath]?.ok)
    ctx.drawImage(
      assetCache[imagePath].img,
      x - tile,
      y - tile,
      tile * 2,
      tile * 2,
    );
  else
    drawImageFallback(
      ctx,
      x - tile * 0.78,
      y - tile * 0.78,
      tile * 1.56,
      CONFIG.villageTypes[village.type].icon,
    );
  ctx.fillStyle = "#fff4c8";
  ctx.font = `bold ${Math.max(10, tile * 0.9)}px serif`;
  ctx.textAlign = "center";
  ctx.fillText(village.name, x, y - tile * 1.45);
  ctx.restore();
}
function drawImageFallback(ctx, x, y, size, label) {
  ctx.fillStyle = "rgba(10, 12, 12, 0.5)";
  ctx.fillRect(x, y, size, size);
  ctx.strokeStyle = "rgba(246, 216, 145, 0.6)";
  ctx.strokeRect(x, y, size, size);
  ctx.fillStyle = "#f7e8b7";
  ctx.font = `${Math.max(9, size * 0.42)}px serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, x + size / 2, y + size / 2);
}
function renderBottomPanel() {
  const selected = getVillage(gameState.selectedVillageId);
  const villages = selected ? [selected] : gameState.villages;
  elements.villageInfo.innerHTML = villages.map(renderVillageCard).join("");
  elements.villageInfo
    .querySelectorAll("[data-specialization]")
    .forEach((button) =>
      button.addEventListener("click", () =>
        chooseSpecialization(
          button.dataset.village,
          button.dataset.specialization,
        ),
      ),
    );
  elements.tradeInfo.innerHTML =
    gameState.routes.map(renderRouteCard).join("") ||
    `<p class="small-line">${TEXT.noRoutes}</p>`;
  elements.eventLog.innerHTML = gameState.eventLog
    .slice(0, 8)
    .map((log) => `<li>${log}</li>`)
    .join("");
  elements.mapHint.textContent = getHintText();
}
function renderVillageCard(village) {
  const inventory = Object.keys(CONFIG.resources)
    .filter((id) => getAmount(village.inventory, id) > 0)
    .slice(0, 7)
    .map(
      (id) =>
        `${CONFIG.resources[id].icon} ${Math.floor(getAmount(village.inventory, id))}`,
    )
    .join(" · ");
  const specHtml = village.specialization
    ? `<div class="small-line"><span>${TEXT.specialization}</span><strong>${TEXT.specializations[village.specialization].name}</strong></div>`
    : `<div class="specialization-picker"><strong>${TEXT.chooseSpecialization}</strong>${CONFIG.specializations[village.type].map((id) => `<button data-village="${village.id}" data-specialization="${id}">${TEXT.specializations[id].name}</button>`).join("")}</div>`;
  return `<article class="village-card ${village.id === gameState.selectedVillageId ? "selected" : ""}"><strong>${CONFIG.villageTypes[village.type].icon} ${village.name}</strong><div class="small-line"><span>${TEXT.villageTypes[village.type]}</span><strong>${village.population}${TEXT.people}</strong></div><div class="small-line"><span>${TEXT.happiness}</span><strong>${Math.round(village.happiness)}%</strong></div><div class="small-line"><span>${TEXT.culture}</span><strong>${Math.round(village.culture)}</strong></div><div class="small-line"><span>${TEXT.demand}</span><strong>${resourceName(village.demand)}</strong></div>${specHtml}<div class="small-line"><span>${TEXT.stores}</span><strong>${inventory || TEXT.empty}</strong></div></article>`;
}
function chooseSpecialization(villageId, specializationId) {
  const village = getVillage(villageId);
  if (!village || village.specialization) return;
  village.specialization = specializationId;
  village.culture += 8;
  addLog(
    TEXT.log.spec(village.name, TEXT.specializations[specializationId].name),
  );
  render();
}
function renderRouteCard(route) {
  const from = getVillage(route.from);
  const to = getVillage(route.to);
  return `<article class="route-card"><strong>${from?.name || "?"} ⇄ ${to?.name || "?"}</strong><div class="small-line"><span>${TEXT.trips}</span><strong>${route.trips}</strong></div></article>`;
}
function renderToolButtons() {
  document
    .querySelectorAll("[data-tool]")
    .forEach((button) =>
      button.classList.toggle(
        "active",
        button.dataset.tool === gameState.selectedTool,
      ),
    );
}
function renderNotification() {
  const note = gameState.notifications[0];
  elements.notificationOverlay.classList.toggle("hidden", !note);
  if (!note) return;
  elements.notificationTitle.textContent = note.title;
  elements.notificationText.textContent = note.text;
  elements.notificationIcon.textContent = note.icon;
}
function pushNotification(title, text, icon) {
  gameState.notifications.push({ title, text, icon });
}
function dismissNotification() {
  gameState.notifications.shift();
  renderNotification();
}
function handleMapClick(event) {
  if (gameState.phase !== "playing") return;
  const { x, y } = getTileFromEvent(event);
  const village = villageAt(x, y);
  if (gameState.selectedTool === "inspect")
    gameState.selectedVillageId = village?.id || null;
  else if (gameState.selectedTool === "route") handleRouteClick(village);
  else tryPlaceVillage(gameState.selectedTool, x, y);
  render();
}
function handleRouteClick(village) {
  if (!village) return;
  if (!gameState.pendingRouteVillageId) {
    gameState.pendingRouteVillageId = village.id;
    gameState.selectedVillageId = village.id;
    return;
  }
  if (gameState.pendingRouteVillageId !== village.id)
    createRoute(gameState.pendingRouteVillageId, village.id);
  gameState.pendingRouteVillageId = null;
}
function tryPlaceVillage(type, x, y) {
  if (gameState.villages.length >= CONFIG.maxVillages || villageAt(x, y))
    return;
  const terrain = gameState.map[y][x];
  if (!CONFIG.villageTypes[type].terrain.includes(terrain)) {
    addLog(TEXT.log.badTerrain(TEXT.villageTypes[type], TEXT.terrain[terrain]));
    return;
  }
  const cost = CONFIG.buildCosts[type];
  if (gameState.lore < cost) {
    addLog(TEXT.log.needLore(cost, TEXT.villageTypes[type]));
    return;
  }
  gameState.lore -= cost;
  gameState.selectedVillageId = addVillage(type, x, y).id;
  checkInventions();
  checkMissions();
}
function createRoute(fromId, toId, silent = false) {
  if (gameState.routes.some((route) => sameRoute(route, fromId, toId)))
    return false;
  const from = getVillage(fromId);
  const to = getVillage(toId);
  if (!from || !to) return false;
  if (getDistance(from, to) > CONFIG.routeRange) {
    addLog(TEXT.log.routeLong);
    return false;
  }
  gameState.routes.push({
    id: `r${Date.now()}-${gameState.routes.length}`,
    from: fromId,
    to: toId,
    trips: 0,
  });
  if (!silent) {
    addLog(TEXT.log.routeOpened(from.name, to.name));
    checkMissions();
  }
  return true;
}
function addBatch(inventory, resource, amount, age = 0) {
  if (amount <= 0) return;
  inventory[resource] = inventory[resource] || [];
  inventory[resource].push({ amount, age });
}
function removeAmount(inventory, resource, amount) {
  const batches = inventory[resource] || [];
  let remaining = amount;
  let removed = 0;
  batches.sort((a, b) => b.age - a.age);
  for (const batch of batches) {
    if (remaining <= 0) break;
    const take = Math.min(batch.amount, remaining);
    batch.amount -= take;
    remaining -= take;
    removed += take;
  }
  inventory[resource] = batches.filter((batch) => batch.amount > 0.01);
  return removed;
}
function getAmount(inventory, resource) {
  return (inventory[resource] || []).reduce(
    (sum, batch) => sum + batch.amount,
    0,
  );
}
function getWorldTotals() {
  return gameState.villages.reduce((totals, village) => {
    Object.keys(CONFIG.resources).forEach((id) => {
      totals[id] = (totals[id] || 0) + getAmount(village.inventory, id);
    });
    return totals;
  }, {});
}
function hasWorldResource(resource) {
  return gameState.villages.some(
    (village) =>
      getAmount(village.inventory, resource) > 0 ||
      village.knownResources.has(resource),
  );
}
function hasRouteType(routeType) {
  const [a, b] = routeType.split(":");
  return gameState.routes.some((route) => {
    const from = getVillage(route.from);
    const to = getVillage(route.to);
    return (
      from &&
      to &&
      ((from.type === a && to.type === b) || (from.type === b && to.type === a))
    );
  });
}
function getCompletion() {
  return (
    Object.values(gameState.encyclopedia).filter((entry) => entry.discovered)
      .length / CONFIG.encyclopedia.length
  );
}
function getTotalPopulation() {
  return gameState.villages.reduce(
    (sum, village) => sum + village.population,
    0,
  );
}
function getVillage(id) {
  return gameState.villages.find((village) => village.id === id);
}
function connectedRoutes(id) {
  return gameState.routes.filter(
    (route) => route.from === id || route.to === id,
  );
}
function isTechUnlocked(id) {
  return Boolean(gameState.technologies[id]?.unlocked);
}
function sameRoute(route, a, b) {
  return (
    (route.from === a && route.to === b) || (route.from === b && route.to === a)
  );
}
function getDistance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function villageAt(x, y) {
  return gameState.villages.find(
    (village) => village.x === x && village.y === y,
  );
}
function getTileFromEvent(event) {
  const rect = elements.canvas.getBoundingClientRect();
  const scaleX = elements.canvas.width / rect.width;
  const scaleY = elements.canvas.height / rect.height;
  return {
    x: clamp(
      Math.floor(
        ((event.clientX - rect.left) * scaleX) /
          (elements.canvas.width / CONFIG.gridSize),
      ),
      0,
      CONFIG.gridSize - 1,
    ),
    y: clamp(
      Math.floor(
        ((event.clientY - rect.top) * scaleY) /
          (elements.canvas.height / CONFIG.gridSize),
      ),
      0,
      CONFIG.gridSize - 1,
    ),
  };
}
function getSeason(day) {
  return ["spring", "summer", "autumn", "winter"][
    Math.floor(((day - 1) % 120) / 30)
  ];
}
function addLog(message) {
  gameState.eventLog.unshift(`${gameState.day}${TEXT.day}：${message}`);
  gameState.eventLog = gameState.eventLog.slice(0, 30);
}
function resourceName(id) {
  return TEXT.resources[id] || id;
}
function describeHint(requires = {}) {
  const hints = [];
  if (requires.tech)
    hints.push(
      `${TEXT.hints.tech}：${requires.tech.map((id) => TEXT.tech[id].name).join("、")}`,
    );
  if (requires.resources)
    hints.push(
      `${TEXT.hints.resources}：${requires.resources.map(resourceName).join("＋")}`,
    );
  if (requires.trade)
    hints.push(
      `${TEXT.hints.trade}：${Object.entries(requires.trade)
        .map(([id, amount]) => `${resourceName(id)}${amount}`)
        .join("、")}`,
    );
  if (requires.entries) hints.push(TEXT.hints.entries);
  if (requires.routeTypes) hints.push(TEXT.hints.routeTypes);
  if (requires.population)
    hints.push(`${TEXT.population}${requires.population}${TEXT.people}`);
  if (requires.routes) hints.push(`${TEXT.tradeRoutes}${requires.routes}本`);
  return hints.join("。") || TEXT.hints.fallback;
}
function getHintText() {
  if (gameState.selectedTool === "route" && gameState.pendingRouteVillageId)
    return TEXT.hints.routePending;
  if (gameState.selectedTool === "route") return TEXT.hints.routeStart;
  if (gameState.selectedTool !== "inspect")
    return `${TEXT.villageTypes[gameState.selectedTool]}：${TEXT.hints.build}`;
  return TEXT.hints.inspect;
}
window.addEventListener("DOMContentLoaded", boot);
