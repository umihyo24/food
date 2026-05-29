const CONFIG = {
  gridSize: 50,
  initialVillages: 3,
  maxVillages: 12,
  daySeconds: 1.6,
  winCompletion: 0.8,
  routeRange: 20,
  tradeAmount: 9,
  researchPerVillage: 4,
  populationGrowth: 0.008,
  consumptionPerPerson: 0.018,
  buildCosts: { fishing: 70, farming: 80, herding: 85 },
  villageStartPopulation: 85,
  startingLore: 35,
  startingStore: { grain: 140, salt: 50 },
  terrain: {
    sea: { color: '#1d6474', accent: '#2e8394', label: 'Sea' },
    plains: { color: '#588f43', accent: '#7baa51', label: 'Plains' },
    mountain: { color: '#6e6c61', accent: '#9b9789', label: 'Mountain' }
  },
  villageTypes: {
    fishing: { name: 'Fishing Village', icon: '⚓', terrain: ['sea', 'plains'], produces: { fish: 22, salt: 4 }, consumes: ['grain', 'vegetable'] },
    farming: { name: 'Farming Village', icon: '🌾', terrain: ['plains'], produces: { grain: 18, vegetable: 13 }, consumes: ['fish', 'meat', 'milk'] },
    herding: { name: 'Herding Village', icon: '🐄', terrain: ['plains', 'mountain'], produces: { meat: 9, milk: 17 }, consumes: ['grain', 'vegetable', 'salt'] }
  },
  resources: {
    fish: { name: 'Fish', icon: '🐟', shelfLife: 3, kind: 'raw' },
    grain: { name: 'Grain', icon: '🌾', shelfLife: 18, kind: 'raw' },
    vegetable: { name: 'Vegetable', icon: '🍏', shelfLife: 6, kind: 'raw' },
    meat: { name: 'Meat', icon: '🥩', shelfLife: 4, kind: 'raw' },
    milk: { name: 'Milk', icon: '🥛', shelfLife: 2, kind: 'raw' },
    salt: { name: 'Salt', icon: '🧂', shelfLife: 999, kind: 'raw' },
    driedFish: { name: 'Dried Fish', icon: '🐠', shelfLife: 30, kind: 'processed' },
    cheese: { name: 'Cheese', icon: '🧀', shelfLife: 26, kind: 'processed' },
    flour: { name: 'Flour', icon: '🍚', shelfLife: 35, kind: 'processed' },
    vinegar: { name: 'Vinegar', icon: '🍶', shelfLife: 120, kind: 'processed' }
  },
  technologies: {
    drying: { name: 'Drying', icon: '☀️', cost: 40, description: 'Preserves fish as dried fish when fish and salt are available.', unlocks: ['driedFish'] },
    milling: { name: 'Milling', icon: '⚙️', cost: 55, description: 'Turns surplus grain into shelf-stable flour.', unlocks: ['flour'] },
    fermentation: { name: 'Fermentation', icon: '🫧', cost: 70, description: 'Creates vinegar from grain and vegetables.', unlocks: ['vinegar'] },
    cheesemaking: { name: 'Cheesemaking', icon: '🧀', cost: 75, description: 'Preserves milk as cheese.', unlocks: ['cheese'] }
  },
  encyclopedia: [
    { id: 'fishCulture', name: 'Fish Culture', icon: '🐟', group: 'Foundations', description: 'A coastal habit of eating and trading fish.', requires: { resources: ['fish'], villageTypes: ['fishing'] } },
    { id: 'grainCulture', name: 'Grain Culture', icon: '🌾', group: 'Foundations', description: 'Fields, harvest rhythms, and grain stores.', requires: { resources: ['grain'], villageTypes: ['farming'] } },
    { id: 'milkCulture', name: 'Milk Culture', icon: '🥛', group: 'Foundations', description: 'Pastoral foodways built around fresh milk.', requires: { resources: ['milk'], villageTypes: ['herding'] } },
    { id: 'saltedFish', name: 'Salted Fish', icon: '🐟', group: 'Fish Culture', description: 'Fish meets salt before spoilage wins.', requires: { resources: ['fish', 'salt'] } },
    { id: 'driedFishDish', name: 'Sun-Dried Fish', icon: '🐠', group: 'Fish Culture', description: 'Drying technology lets fish travel inland.', requires: { resources: ['driedFish'], tech: ['drying'] } },
    { id: 'fishRice', name: 'Fish Rice', icon: '🍚', group: 'Fish Culture', description: 'Fish culture and grain culture share one bowl.', requires: { entries: ['fishCulture', 'grainCulture'], routeTypes: ['fishing:farming'] } },
    { id: 'narezushi', name: 'Narezushi', icon: '🍣', group: 'Fish Culture', description: 'Fish rice sharpened by vinegar and patience.', requires: { entries: ['fishRice'], resources: ['vinegar'] } },
    { id: 'sushi', name: 'Sushi', icon: '🍱', group: 'Fish Culture', description: 'A refined urban expression of preserved fish and rice.', requires: { entries: ['narezushi'], population: 450 } },
    { id: 'flatbread', name: 'Flatbread', icon: '🫓', group: 'Grain Culture', description: 'Flour and heat become portable staple food.', requires: { resources: ['flour'], tech: ['milling'] } },
    { id: 'vegetableStew', name: 'Garden Stew', icon: '🍲', group: 'Grain Culture', description: 'Vegetables circulate into shared village pots.', requires: { resources: ['vegetable', 'grain'] } },
    { id: 'meatPie', name: 'Meat Pie', icon: '🥧', group: 'Grain Culture', description: 'Herders and farmers invent a durable feast.', requires: { resources: ['meat', 'flour'], routeTypes: ['farming:herding'] } },
    { id: 'cheese', name: 'Cheese', icon: '🧀', group: 'Milk Culture', description: 'Milk preserved into a tradeable treasure.', requires: { resources: ['cheese'], tech: ['cheesemaking'] } },
    { id: 'curds', name: 'Fresh Curds', icon: '🥣', group: 'Milk Culture', description: 'A simple dairy tradition for herding villages.', requires: { resources: ['milk', 'salt'] } },
    { id: 'cheeseBread', name: 'Cheese Bread', icon: '🥖', group: 'Milk Culture', description: 'Milling and cheesemaking meet on the trade road.', requires: { entries: ['cheese', 'flatbread'], resources: ['flour'] } },
    { id: 'atlasCuisine', name: 'Atlas Cuisine', icon: '🧭', group: 'Synthesis', description: 'A shared culinary identity spanning sea, field, and pasture.', requires: { entries: ['sushi', 'meatPie', 'cheeseBread'], routes: 4 } }
  ]
};

const ASSETS = {
  terrain: { sea: 'assets/sea.png', plains: 'assets/plains.png', mountain: 'assets/mountain.png' },
  villages: { fishing: 'assets/fishing-village.png', farming: 'assets/farming-village.png', herding: 'assets/herding-village.png' },
  fallback: 'assets/fallback.png'
};

const assetCache = {};

const gameState = {
  phase: 'start',
  day: 1,
  season: 'Spring',
  lore: CONFIG.startingLore,
  selectedTool: 'inspect',
  selectedVillageId: null,
  pendingRouteVillageId: null,
  map: [],
  villages: [],
  routes: [],
  technologies: {},
  encyclopedia: {},
  eventLog: [],
  imagesReady: false,
  elapsedMs: 0,
  lastFrameTime: null
};

const elements = {};

function boot() {
  cacheElements();
  initGame();
  bindEvents();
  loadImages(ASSETS).then(() => {
    gameState.imagesReady = true;
    render();
  });
  render();
  requestAnimationFrame(gameLoop);
}

function gameLoop(timestamp) {
  if (gameState.lastFrameTime === null) gameState.lastFrameTime = timestamp;
  const delta = timestamp - gameState.lastFrameTime;
  gameState.lastFrameTime = timestamp;
  if (gameState.phase === 'playing') {
    gameState.elapsedMs += delta;
    if (gameState.elapsedMs >= CONFIG.daySeconds * 1000) {
      gameState.elapsedMs = 0;
      update();
    }
  }
  requestAnimationFrame(gameLoop);
}


function cacheElements() {
  elements.canvas = document.getElementById('mapCanvas');
  elements.ctx = elements.canvas.getContext('2d');
  elements.resourceStrip = document.getElementById('resourceStrip');
  elements.technologyList = document.getElementById('technologyList');
  elements.encyclopediaList = document.getElementById('encyclopediaList');
  elements.villageInfo = document.getElementById('villageInfo');
  elements.tradeInfo = document.getElementById('tradeInfo');
  elements.eventLog = document.getElementById('eventLog');
  elements.researchPoints = document.getElementById('researchPoints');
  elements.completionLabel = document.getElementById('completionLabel');
  elements.completionBar = document.getElementById('completionBar');
  elements.dayLabel = document.getElementById('dayLabel');
  elements.seasonLabel = document.getElementById('seasonLabel');
  elements.startOverlay = document.getElementById('startOverlay');
  elements.gameoverOverlay = document.getElementById('gameoverOverlay');
  elements.gameoverText = document.getElementById('gameoverText');
  elements.mapHint = document.getElementById('mapHint');
}

function initGame() {
  gameState.phase = 'start';
  gameState.day = 1;
  gameState.season = 'Spring';
  gameState.lore = CONFIG.startingLore;
  gameState.selectedTool = 'inspect';
  gameState.selectedVillageId = null;
  gameState.pendingRouteVillageId = null;
  gameState.map = createMap();
  gameState.villages = [];
  gameState.routes = [];
  gameState.technologies = Object.fromEntries(Object.keys(CONFIG.technologies).map(id => [id, { unlocked: false, progress: 0 }]));
  gameState.encyclopedia = Object.fromEntries(CONFIG.encyclopedia.map(entry => [entry.id, { discovered: false, day: null }]));
  gameState.eventLog = [];
  gameState.elapsedMs = 0;
  gameState.lastFrameTime = null;
  seedVillages();
  addLog('The first villages mark the atlas.');
}

function bindEvents() {
  document.getElementById('startButton').addEventListener('click', () => {
    gameState.phase = 'playing';
    gameState.lastFrameTime = performance.now();
    elements.startOverlay.classList.add('hidden');
    render();
  });
  document.getElementById('restartButton').addEventListener('click', () => {
    initGame();
    elements.gameoverOverlay.classList.add('hidden');
    elements.startOverlay.classList.add('hidden');
    gameState.phase = 'playing';
    gameState.lastFrameTime = performance.now();
    render();
  });
  document.getElementById('advanceDayButton').addEventListener('click', () => {
    if (gameState.phase === 'playing') update();
  });
  document.querySelectorAll('[data-tool]').forEach(button => {
    button.addEventListener('click', () => {
      gameState.selectedTool = button.dataset.tool;
      gameState.pendingRouteVillageId = null;
      render();
    });
  });
  elements.canvas.addEventListener('click', handleMapClick);
  window.addEventListener('resize', render);
}

function loadImages(assetTree) {
  const paths = collectAssetPaths(assetTree);
  return Promise.all(paths.map(path => new Promise(resolve => {
    const img = new Image();
    img.onload = () => { assetCache[path] = { ok: true, img }; resolve(); };
    img.onerror = () => { assetCache[path] = { ok: false, img: null }; resolve(); };
    img.src = path;
  })));
}

function collectAssetPaths(value) {
  if (typeof value === 'string') return [value];
  return Object.values(value).flatMap(collectAssetPaths);
}

function createMap() {
  const center = CONFIG.gridSize / 2;
  return Array.from({ length: CONFIG.gridSize }, (_, y) => Array.from({ length: CONFIG.gridSize }, (_, x) => {
    const nx = x - center;
    const ny = y - center;
    const distance = Math.sqrt(nx * nx + ny * ny) / center;
    const wave = Math.sin(x * 0.34) + Math.cos(y * 0.27) + Math.sin((x + y) * 0.18);
    if (distance > 0.9 || (x < 9 && y > 28) || (y < 9 && x < 15)) return 'sea';
    if (wave > 1.55 || (x > 34 && y < 24) || (x > 37 && y > 34)) return 'mountain';
    return 'plains';
  }));
}

function seedVillages() {
  addVillage('fishing', 12, 37);
  addVillage('farming', 28, 25);
  addVillage('herding', 38, 33);
  createRoute(gameState.villages[0].id, gameState.villages[1].id);
  createRoute(gameState.villages[1].id, gameState.villages[2].id);
}

function addVillage(type, x, y) {
  const villageConfig = CONFIG.villageTypes[type];
  const village = {
    id: `v${Date.now()}-${gameState.villages.length}`,
    type,
    name: generateVillageName(type),
    x,
    y,
    population: CONFIG.villageStartPopulation,
    happiness: 68,
    culture: 0,
    inventory: createInitialInventory(type),
    knownResources: new Set(Object.keys(villageConfig.produces))
  };
  gameState.villages.push(village);
  addLog(`${villageConfig.name} ${village.name} was founded.`);
  return village;
}

function generateVillageName(type) {
  const names = {
    fishing: ['Marina', 'Shiohama', 'Pearl Quay', 'Bluewake'],
    farming: ['Sorell', 'Mugi Field', 'Greenrow', 'Harveston'],
    herding: ['Belk', 'High Pasture', 'Milkvale', 'Goatrest']
  };
  return names[type][gameState.villages.filter(v => v.type === type).length % names[type].length];
}

function createInitialInventory(type) {
  const inventory = {};
  Object.entries(CONFIG.startingStore).forEach(([id, amount]) => addBatch(inventory, id, amount));
  Object.entries(CONFIG.villageTypes[type].produces).forEach(([id, amount]) => addBatch(inventory, id, amount * 3));
  return inventory;
}

function update() {
  if (gameState.phase !== 'playing') return;
  if (gameState.day === 1) checkInventions();
  gameState.day += 1;
  gameState.season = getSeason(gameState.day);
  produceResources();
  processGoods();
  consumeResources();
  spoilResources();
  runTradeRoutes();
  updateCultureAndResearch();
  checkInventions();
  checkGameover();
  render();
}

function produceResources() {
  gameState.villages.forEach(village => {
    const config = CONFIG.villageTypes[village.type];
    Object.entries(config.produces).forEach(([resource, amount]) => {
      addBatch(village.inventory, resource, Math.round(amount * (0.8 + village.happiness / 200)));
      village.knownResources.add(resource);
    });
  });
}

function processGoods() {
  gameState.villages.forEach(village => {
    if (isTechUnlocked('drying') && getAmount(village.inventory, 'fish') >= 12 && getAmount(village.inventory, 'salt') >= 3) {
      removeAmount(village.inventory, 'fish', 12); removeAmount(village.inventory, 'salt', 3); addBatch(village.inventory, 'driedFish', 8); village.knownResources.add('driedFish');
    }
    if (isTechUnlocked('milling') && getAmount(village.inventory, 'grain') >= 14) {
      removeAmount(village.inventory, 'grain', 14); addBatch(village.inventory, 'flour', 10); village.knownResources.add('flour');
    }
    if (isTechUnlocked('fermentation') && getAmount(village.inventory, 'grain') >= 7 && getAmount(village.inventory, 'vegetable') >= 6) {
      removeAmount(village.inventory, 'grain', 7); removeAmount(village.inventory, 'vegetable', 6); addBatch(village.inventory, 'vinegar', 5); village.knownResources.add('vinegar');
    }
    if (isTechUnlocked('cheesemaking') && getAmount(village.inventory, 'milk') >= 12 && getAmount(village.inventory, 'salt') >= 2) {
      removeAmount(village.inventory, 'milk', 12); removeAmount(village.inventory, 'salt', 2); addBatch(village.inventory, 'cheese', 8); village.knownResources.add('cheese');
    }
  });
}

function consumeResources() {
  gameState.villages.forEach(village => {
    const needed = Math.max(4, Math.round(village.population * CONFIG.consumptionPerPerson));
    let fed = 0;
    ['grain', 'vegetable', 'fish', 'meat', 'milk', 'driedFish', 'cheese', 'flour'].forEach(resource => {
      if (fed < needed) fed += removeAmount(village.inventory, resource, needed - fed);
    });
    const ratio = Math.min(1, fed / needed);
    village.happiness = clamp(village.happiness + (ratio >= 1 ? 1.8 : -5.5), 0, 100);
    village.population = Math.max(20, Math.round(village.population * (1 + CONFIG.populationGrowth * (village.happiness - 45) / 55)));
  });
}

function spoilResources() {
  gameState.villages.forEach(village => {
    Object.values(village.inventory).forEach(batches => batches.forEach(batch => { batch.age += 1; }));
    Object.keys(village.inventory).forEach(resource => {
      const shelfLife = CONFIG.resources[resource].shelfLife;
      const before = getAmount(village.inventory, resource);
      village.inventory[resource] = village.inventory[resource].filter(batch => batch.age <= shelfLife);
      if (before - getAmount(village.inventory, resource) > 0) addLog(`${CONFIG.resources[resource].name} spoiled in ${village.name}.`);
    });
  });
}

function runTradeRoutes() {
  gameState.routes.forEach(route => {
    const a = getVillage(route.from);
    const b = getVillage(route.to);
    if (!a || !b) return;
    exchangeSurplus(a, b);
    exchangeSurplus(b, a);
    route.trips += 1;
  });
}

function exchangeSurplus(from, to) {
  Object.keys(CONFIG.resources).forEach(resource => {
    const amount = getAmount(from.inventory, resource);
    const targetAmount = getAmount(to.inventory, resource);
    if (amount > 45 && targetAmount < 24) {
      const moving = Math.min(CONFIG.tradeAmount, amount - 35);
      const taken = removeAmount(from.inventory, resource, moving);
      addBatch(to.inventory, resource, taken, 1);
      to.knownResources.add(resource);
    }
  });
}

function updateCultureAndResearch() {
  const totalPopulation = getTotalPopulation();
  gameState.lore += Math.round(gameState.villages.length * CONFIG.researchPerVillage + totalPopulation / 250);
  gameState.villages.forEach(village => {
    village.culture += 1 + village.happiness / 100 + connectedRoutes(village.id).length * 0.35;
  });
}

function checkInventions() {
  CONFIG.encyclopedia.forEach(entry => {
    if (!gameState.encyclopedia[entry.id].discovered && requirementsMet(entry.requires)) {
      gameState.encyclopedia[entry.id] = { discovered: true, day: gameState.day };
      addLog(`New food culture discovered: ${entry.name}!`);
      gameState.villages.forEach(v => { v.happiness = clamp(v.happiness + 3, 0, 100); });
    }
  });
}

function requirementsMet(requires = {}) {
  if (requires.resources && !requires.resources.every(hasWorldResource)) return false;
  if (requires.tech && !requires.tech.every(isTechUnlocked)) return false;
  if (requires.entries && !requires.entries.every(id => gameState.encyclopedia[id]?.discovered)) return false;
  if (requires.villageTypes && !requires.villageTypes.every(type => gameState.villages.some(v => v.type === type))) return false;
  if (requires.routeTypes && !requires.routeTypes.every(hasRouteType)) return false;
  if (requires.population && getTotalPopulation() < requires.population) return false;
  if (requires.routes && gameState.routes.length < requires.routes) return false;
  return true;
}

function checkGameover() {
  const completion = getCompletion();
  if (completion >= CONFIG.winCompletion) {
    gameState.phase = 'gameover';
    elements.gameoverText.textContent = `Encyclopedia completion reached ${Math.round(completion * 100)}%. Food cultures now connect the atlas.`;
    elements.gameoverOverlay.classList.remove('hidden');
  }
}

function render() {
  renderTopbar();
  renderTechnologies();
  renderEncyclopedia();
  renderMap();
  renderBottomPanel();
  renderToolButtons();
  elements.startOverlay.classList.toggle('hidden', gameState.phase !== 'start');
}

function renderTopbar() {
  const totals = getWorldTotals();
  elements.resourceStrip.innerHTML = Object.entries(CONFIG.resources).map(([id, resource]) => `
    <div class="resource-card"><span>${resource.icon} ${resource.name}</span><strong>${Math.floor(totals[id] || 0)}</strong></div>
  `).join('');
  elements.dayLabel.textContent = `Day ${gameState.day}`;
  elements.seasonLabel.textContent = `Year ${Math.floor((gameState.day - 1) / 120) + 1} · ${gameState.season}`;
}

function renderTechnologies() {
  elements.researchPoints.textContent = `${Math.floor(gameState.lore)} lore`;
  elements.technologyList.innerHTML = Object.entries(CONFIG.technologies).map(([id, tech]) => {
    const state = gameState.technologies[id];
    const canBuy = gameState.lore >= tech.cost && !state.unlocked;
    return `<article class="tech-card ${state.unlocked ? 'unlocked' : 'locked'}">
      <div class="tech-title"><span>${tech.icon} ${tech.name}</span><span class="status-pill">${state.unlocked ? 'Researched' : `${tech.cost} lore`}</span></div>
      <p>${tech.description}</p>
      <button ${state.unlocked || !canBuy ? 'disabled' : ''} data-tech="${id}">${state.unlocked ? 'Unlocked' : 'Research'}</button>
    </article>`;
  }).join('');
  elements.technologyList.querySelectorAll('[data-tech]').forEach(button => {
    button.addEventListener('click', () => researchTechnology(button.dataset.tech));
  });
}

function researchTechnology(id) {
  const tech = CONFIG.technologies[id];
  const state = gameState.technologies[id];
  if (state.unlocked || gameState.lore < tech.cost) return;
  gameState.lore -= tech.cost;
  state.unlocked = true;
  addLog(`${tech.name} technology was unlocked.`);
  processGoods();
  checkInventions();
  render();
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
  elements.encyclopediaList.innerHTML = Object.entries(byGroup).map(([group, entries]) => `
    <section class="entry-group"><h3>${group}</h3>${entries.map(entry => renderEntry(entry)).join('')}</section>
  `).join('');
}

function renderEntry(entry) {
  const state = gameState.encyclopedia[entry.id];
  return `<article class="entry-card ${state.discovered ? 'discovered' : 'undiscovered'}">
    <div class="entry-title"><span><span class="sprite">${state.discovered ? entry.icon : '?'}</span>${state.discovered ? entry.name : 'Undiscovered'}</span><span>${state.discovered ? `Day ${state.day}` : '???'}</span></div>
    <p>${state.discovered ? entry.description : describeHint(entry.requires)}</p>
  </article>`;
}

function renderMap() {
  const canvas = elements.canvas;
  const rect = canvas.getBoundingClientRect();
  const size = Math.max(420, Math.floor(Math.min(rect.width || 900, rect.height || 900)));
  if (canvas.width !== size || canvas.height !== size) { canvas.width = size; canvas.height = size; }
  const ctx = elements.ctx;
  const tile = canvas.width / CONFIG.gridSize;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  gameState.map.forEach((row, y) => row.forEach((terrain, x) => drawTile(ctx, x, y, tile, terrain)));
  gameState.routes.forEach(route => drawRoute(ctx, route, tile));
  gameState.villages.forEach(village => drawVillage(ctx, village, tile));
}

function drawTile(ctx, x, y, tile, terrain) {
  const config = CONFIG.terrain[terrain];
  ctx.fillStyle = config.color;
  ctx.fillRect(x * tile, y * tile, tile + 0.5, tile + 0.5);
  ctx.fillStyle = config.accent;
  if ((x * 13 + y * 7) % 11 === 0) ctx.fillRect(x * tile + tile * 0.25, y * tile + tile * 0.25, tile * 0.35, tile * 0.35);
  if (!assetCache[ASSETS.terrain[terrain]]?.ok) drawTerrainFallback(ctx, x * tile, y * tile, tile);
}

function drawTerrainFallback(ctx, x, y, tile) {
  ctx.save();
  ctx.strokeStyle = 'rgba(246, 216, 145, 0.08)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x, y + tile);
  ctx.lineTo(x + tile, y);
  ctx.stroke();
  ctx.restore();
}


function drawRoute(ctx, route, tile) {
  const from = getVillage(route.from);
  const to = getVillage(route.to);
  if (!from || !to) return;
  ctx.save();
  ctx.strokeStyle = 'rgba(218, 238, 236, 0.86)';
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
  const selected = village.id === gameState.selectedVillageId || village.id === gameState.pendingRouteVillageId;
  ctx.save();
  ctx.fillStyle = selected ? '#f2d179' : '#27170d';
  ctx.strokeStyle = selected ? '#ffffff' : '#e6be63';
  ctx.lineWidth = selected ? 4 : 2;
  ctx.beginPath();
  ctx.arc(x, y, tile * 1.15, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  const imagePath = ASSETS.villages[village.type];
  if (assetCache[imagePath]?.ok) {
    ctx.drawImage(assetCache[imagePath].img, x - tile, y - tile, tile * 2, tile * 2);
  } else {
    drawImageFallback(ctx, x - tile * 0.78, y - tile * 0.78, tile * 1.56, CONFIG.villageTypes[village.type].icon);
  }
  ctx.fillStyle = '#fff4c8';
  ctx.font = `bold ${Math.max(10, tile * 0.9)}px Georgia`;
  ctx.textAlign = 'center';
  ctx.fillText(village.name, x, y - tile * 1.45);
  ctx.restore();
}

function drawImageFallback(ctx, x, y, size, label) {
  ctx.save();
  ctx.fillStyle = 'rgba(10, 12, 12, 0.5)';
  ctx.fillRect(x, y, size, size);
  ctx.strokeStyle = 'rgba(246, 216, 145, 0.6)';
  ctx.strokeRect(x, y, size, size);
  ctx.fillStyle = '#f7e8b7';
  ctx.font = `${Math.max(9, size * 0.42)}px serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(label, x + size / 2, y + size / 2);
  ctx.restore();
}

function renderBottomPanel() {
  const selected = getVillage(gameState.selectedVillageId);
  const villages = selected ? [selected] : gameState.villages;
  elements.villageInfo.innerHTML = villages.map(renderVillageCard).join('');
  elements.tradeInfo.innerHTML = gameState.routes.map(renderRouteCard).join('') || '<p class="small-line">No trade routes yet.</p>';
  elements.eventLog.innerHTML = gameState.eventLog.slice(0, 8).map(log => `<li>${log}</li>`).join('');
  elements.mapHint.textContent = getHintText();
}

function renderVillageCard(village) {
  const inventory = Object.keys(CONFIG.resources).filter(id => getAmount(village.inventory, id) > 0).slice(0, 6)
    .map(id => `${CONFIG.resources[id].icon} ${Math.floor(getAmount(village.inventory, id))}`).join(' · ');
  return `<article class="village-card ${village.id === gameState.selectedVillageId ? 'selected' : ''}">
    <strong>${CONFIG.villageTypes[village.type].icon} ${village.name}</strong>
    <div class="small-line"><span>${CONFIG.villageTypes[village.type].name}</span><strong>${village.population} people</strong></div>
    <div class="small-line"><span>Happiness</span><strong>${Math.round(village.happiness)}%</strong></div>
    <div class="small-line"><span>Culture</span><strong>${Math.round(village.culture)}</strong></div>
    <div class="small-line"><span>Stores</span><strong>${inventory || 'empty'}</strong></div>
  </article>`;
}

function renderRouteCard(route) {
  const from = getVillage(route.from);
  const to = getVillage(route.to);
  return `<article class="route-card"><strong>${from?.name || '?'} ⇄ ${to?.name || '?'}</strong><div class="small-line"><span>Trips</span><strong>${route.trips}</strong></div></article>`;
}

function renderToolButtons() {
  document.querySelectorAll('[data-tool]').forEach(button => button.classList.toggle('active', button.dataset.tool === gameState.selectedTool));
}

function handleMapClick(event) {
  if (gameState.phase !== 'playing') return;
  const { x, y } = getTileFromEvent(event);
  const village = villageAt(x, y);
  if (gameState.selectedTool === 'inspect') {
    gameState.selectedVillageId = village?.id || null;
  } else if (gameState.selectedTool === 'route') {
    handleRouteClick(village);
  } else {
    tryPlaceVillage(gameState.selectedTool, x, y);
  }
  render();
}

function handleRouteClick(village) {
  if (!village) return;
  if (!gameState.pendingRouteVillageId) {
    gameState.pendingRouteVillageId = village.id;
    gameState.selectedVillageId = village.id;
    return;
  }
  if (gameState.pendingRouteVillageId !== village.id) createRoute(gameState.pendingRouteVillageId, village.id);
  gameState.pendingRouteVillageId = null;
}

function tryPlaceVillage(type, x, y) {
  if (gameState.villages.length >= CONFIG.maxVillages || villageAt(x, y)) return;
  const terrain = gameState.map[y][x];
  if (!CONFIG.villageTypes[type].terrain.includes(terrain)) {
    addLog(`${CONFIG.villageTypes[type].name} cannot thrive on ${CONFIG.terrain[terrain].label}.`);
    return;
  }
  const cost = CONFIG.buildCosts[type];
  if (gameState.lore < cost) {
    addLog(`Need ${cost} lore to found a ${CONFIG.villageTypes[type].name}.`);
    return;
  }
  gameState.lore -= cost;
  gameState.selectedVillageId = addVillage(type, x, y).id;
  checkInventions();
}

function createRoute(fromId, toId) {
  if (gameState.routes.some(route => sameRoute(route, fromId, toId))) return false;
  const from = getVillage(fromId);
  const to = getVillage(toId);
  if (!from || !to) return false;
  const distance = getDistance(from, to);
  if (distance > CONFIG.routeRange) {
    addLog('That route is too long for current caravans.');
    return false;
  }
  gameState.routes.push({ id: `r${Date.now()}-${gameState.routes.length}`, from: fromId, to: toId, trips: 0 });
  addLog(`Trade route opened: ${from.name} ⇄ ${to.name}.`);
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
  inventory[resource] = batches.filter(batch => batch.amount > 0.01);
  return removed;
}

function getAmount(inventory, resource) {
  return (inventory[resource] || []).reduce((sum, batch) => sum + batch.amount, 0);
}

function getWorldTotals() {
  return gameState.villages.reduce((totals, village) => {
    Object.keys(CONFIG.resources).forEach(id => { totals[id] = (totals[id] || 0) + getAmount(village.inventory, id); });
    return totals;
  }, {});
}

function hasWorldResource(resource) {
  return gameState.villages.some(village => getAmount(village.inventory, resource) > 0 || village.knownResources.has(resource));
}

function hasRouteType(routeType) {
  const [a, b] = routeType.split(':');
  return gameState.routes.some(route => {
    const from = getVillage(route.from);
    const to = getVillage(route.to);
    return from && to && ((from.type === a && to.type === b) || (from.type === b && to.type === a));
  });
}

function getCompletion() {
  return Object.values(gameState.encyclopedia).filter(entry => entry.discovered).length / CONFIG.encyclopedia.length;
}

function getTotalPopulation() {
  return gameState.villages.reduce((sum, village) => sum + village.population, 0);
}

function getVillage(id) { return gameState.villages.find(village => village.id === id); }
function connectedRoutes(id) { return gameState.routes.filter(route => route.from === id || route.to === id); }
function isTechUnlocked(id) { return Boolean(gameState.technologies[id]?.unlocked); }
function sameRoute(route, a, b) { return (route.from === a && route.to === b) || (route.from === b && route.to === a); }
function getDistance(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
function villageAt(x, y) { return gameState.villages.find(village => village.x === x && village.y === y); }

function getTileFromEvent(event) {
  const rect = elements.canvas.getBoundingClientRect();
  const scaleX = elements.canvas.width / rect.width;
  const scaleY = elements.canvas.height / rect.height;
  return {
    x: clamp(Math.floor((event.clientX - rect.left) * scaleX / (elements.canvas.width / CONFIG.gridSize)), 0, CONFIG.gridSize - 1),
    y: clamp(Math.floor((event.clientY - rect.top) * scaleY / (elements.canvas.height / CONFIG.gridSize)), 0, CONFIG.gridSize - 1)
  };
}

function getSeason(day) {
  return ['Spring', 'Summer', 'Autumn', 'Winter'][Math.floor(((day - 1) % 120) / 30)];
}

function addLog(message) {
  gameState.eventLog.unshift(`Day ${gameState.day}: ${message}`);
  gameState.eventLog = gameState.eventLog.slice(0, 30);
}

function describeHint(requires = {}) {
  const hints = [];
  if (requires.tech) hints.push(`Research ${requires.tech.map(id => CONFIG.technologies[id].name).join(', ')}`);
  if (requires.resources) hints.push(`Share ${requires.resources.map(id => CONFIG.resources[id].name).join(' + ')}`);
  if (requires.entries) hints.push('Discover prerequisite cultures');
  if (requires.routeTypes) hints.push('Connect the right village types');
  if (requires.population) hints.push(`Reach ${requires.population} population`);
  return hints.join('. ') || 'Let villages experiment.';
}

function getHintText() {
  if (gameState.selectedTool === 'route' && gameState.pendingRouteVillageId) return 'Select a second village within route range to open automatic exchange.';
  if (gameState.selectedTool === 'route') return 'Select the first village for a trade route.';
  if (gameState.selectedTool !== 'inspect') return `Click valid terrain to found a ${CONFIG.villageTypes[gameState.selectedTool].name}.`;
  return 'Inspect villages or choose a build tool. Resources spoil by shelf life unless preserved.';
}

window.addEventListener('DOMContentLoaded', boot);
