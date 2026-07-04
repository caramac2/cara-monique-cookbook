import { recipes } from "./data/recipes.js";

const STORAGE_KEYS = {
  selected: 'cmCookbook.selectedRecipeIds.v020',
  checkedShopping: 'cmCookbook.checkedShopping.v020'
};

let selected = new Set(loadJson(STORAGE_KEYS.selected, []));
let checkedShopping = new Set(loadJson(STORAGE_KEYS.checkedShopping, []));

const recipesEl = document.getElementById('recipes');
const selectedEl = document.getElementById('selectedRecipes');
const shoppingEl = document.getElementById('shoppingList');
const weeklySummaryEl = document.getElementById('weeklySummary');
const weeklyPlantScoreEl = document.getElementById('weeklyPlantScore');

function loadJson(key, fallback){
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}
function saveJson(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
function persistSelected(){ saveJson(STORAGE_KEYS.selected, [...selected]); }
function persistChecked(){ saveJson(STORAGE_KEYS.checkedShopping, [...checkedShopping]); }

function selectedRecipes(){ return [...selected].map(id => recipes.find(r => r.id === id)).filter(Boolean); }
function uniquePlantFoods(list = selectedRecipes()){
  return [...new Set(list.flatMap(r => r.plantFoods || []))].sort((a,b)=>a.localeCompare(b));
}
function typeCounts(list = selectedRecipes()){
  return list.reduce((acc, r) => { acc[r.type] = (acc[r.type] || 0) + 1; return acc; }, {Meat:0, Fish:0, Vegetarian:0});
}
function targetCard(label, count, target, icon){
  const ok = count === target;
  const cls = ok ? 'ok' : 'warn';
  return `<div class="summaryCard ${cls}"><span>${icon} ${label}</span><strong>${count} / ${target}</strong></div>`;
}
function totalCalories(recipe){ return recipe.kcal * recipe.servings; }
function nutritionBlock(r){
  return `<div class="nutrition">
    <p><strong>Serves: ${r.servings}</strong></p>
    <p><strong>Nutrition (per serving)</strong></p>
    <p>🔥 Calories: ${r.kcal} kcal</p>
    <p>💪 Protein: ${r.protein}</p>
    <p>🌾 Carbohydrates: ${r.carbs}</p>
    <p>🥑 Fat: ${r.fat}</p>
    <p>🌱 Fibre: ${r.fibre}</p>
    <p><strong>Total recipe: ${totalCalories(r).toLocaleString('en-GB')} kcal</strong></p>
  </div>`;
}
function difficultyStars(level){ return level === 'Easy' ? '⭐⭐☆☆☆' : '⭐⭐⭐☆☆'; }
function render(list = recipes){
  recipesEl.innerHTML = list.map(r => `
    <article class="recipe">
      <div class="photo">📷<br>${r.photo}</div>
      <div class="recipeBody">
        <div>
          <div class="meta"><span class="pill">${r.id}</span><span class="pill ${r.type === 'Vegetarian' ? 'good' : ''}">${r.type}</span></div>
          <h3>${r.title}</h3>
          <p class="small">${r.description}</p>
        </div>
        <div class="meta">
          <span class="pill">⭐ ${difficultyStars(r.difficulty)}</span>
          <span class="pill">⏱ ${r.prep}</span>
          <span class="pill">🔥 ${r.cook}</span>
          <span class="pill">🌱 ${r.plantFoods.length} plants</span>
          <span class="pill">${r.kcal} kcal</span>
        </div>
        <div class="buttonRow"><button class="full" onclick="toggleRecipe('${r.id}')">${selected.has(r.id) ? 'Remove from week' : 'Add to week'}</button></div>
        <details><summary>Nutrition</summary>${nutritionBlock(r)}</details>
        <details><summary>Plant foods</summary><div class="plantList">${r.plantFoods.map(p=>`<span class="pill">${p}</span>`).join('')}</div></details>
        <details><summary>Ingredients</summary><ul>${r.ingredients.map(i=>`<li>${i.item}</li>`).join('')}</ul></details>
        <details><summary>Method</summary><ol>${r.method.map(s=>`<li>${s}</li>`).join('')}</ol></details>
        <details><summary>Recipe notes</summary><p>❄️ ${r.freezer}</p><p>🥡 ${r.leftovers}</p><p>💰 Approx. ${r.cost} per serving</p><p>❤️ Cara ☆☆☆☆☆ · Monique ☆☆☆☆☆ · 👧 Juno ☆☆☆☆☆</p></details>
      </div>
    </article>`).join('');

  renderWeeklySummary();
}

function renderWeeklySummary(){
  const chosen = selectedRecipes();
  const plants = uniquePlantFoods(chosen);
  const counts = typeCounts(chosen);
  weeklySummaryEl.innerHTML = [
    targetCard('Meat', counts.Meat || 0, 2, '🥩'),
    targetCard('Fish', counts.Fish || 0, 1, '🐟'),
    targetCard('Veggie', counts.Vegetarian || 0, 2, '🥬')
  ].join('');

  const plantCount = plants.length;
  const pct = Math.min(100, Math.round((plantCount / 30) * 100));
  const scoreLabel = plantCount >= 30 ? 'Target hit 🎉' : `${30 - plantCount} to go`;
  weeklyPlantScoreEl.className = `plantScore ${plantCount >= 30 ? 'complete' : chosen.length ? '' : 'empty'}`;
  weeklyPlantScoreEl.innerHTML = `<div class="scoreTop"><strong>🌱 ${plantCount} / 30 unique plant foods</strong><span>${scoreLabel}</span></div><div class="progress"><div style="width:${pct}%"></div></div>`;

  selectedEl.innerHTML = chosen.length ? `
    <p><strong>Chosen recipes:</strong><br>${chosen.map(r => `${r.type === 'Vegetarian' ? '🥬' : r.type === 'Fish' ? '🐟' : '🥩'} ${r.title}`).join('<br>')}</p>
    <details open><summary><strong>Plant foods counted this week</strong></summary><div class="plantList">${plants.map(p=>`<span class="pill">${p}</span>`).join('')}</div></details>
  ` : '<div class="emptyState">No recipes selected yet. Add meals from the recipe cards below.</div>';
}

function toggleRecipe(id){
  selected.has(id) ? selected.delete(id) : selected.add(id);
  persistSelected();
  checkedShopping = new Set();
  persistChecked();
  render(filterRecipes());
  renderShoppingList(false);
}

window.toggleRecipe = toggleRecipe;

function filterRecipes(){
  const q = document.getElementById('search').value.toLowerCase().trim();
  if(!q) return recipes;
  return recipes.filter(r => JSON.stringify(r).toLowerCase().includes(q));
}

document.getElementById('search').addEventListener('input', () => render(filterRecipes()));
document.getElementById('clearWeekBtn').addEventListener('click', () => {
  selected = new Set();
  checkedShopping = new Set();
  persistSelected();
  persistChecked();
  render(filterRecipes());
  renderShoppingList(false);
});
document.getElementById('shoppingBtn').addEventListener('click', () => renderShoppingList(true));

function normaliseItem(item){ return item.toLowerCase().replace(/\s+/g,' ').trim(); }
function groupedShoppingItems(){
  const groups = {};
  selectedRecipes().forEach(recipe => {
    recipe.ingredients.forEach(({item, aisle}) => {
      const key = normaliseItem(item);
      if(!groups[aisle]) groups[aisle] = new Map();
      if(!groups[aisle].has(key)) groups[aisle].set(key, item);
    });
  });
  return groups;
}
function aisleIcon(aisle){
  return {'Fruit & Veg':'🥬','Meat & Fish':'🥩','Dairy':'🥛','Pantry':'🥫','Tins & Jars':'🥫','Herbs & Spices':'🌿','Frozen':'❄️'}[aisle] || '🛒';
}
function renderShoppingList(forceOpen = false){
  const groups = groupedShoppingItems();
  const aisles = Object.keys(groups).sort();
  if(!selectedRecipes().length){
    shoppingEl.innerHTML = '<div class="emptyState">Choose recipes, then generate a shopping list.</div>';
    return;
  }
  if(!forceOpen && !shoppingEl.dataset.generated){
    shoppingEl.innerHTML = '<div class="emptyState">Shopping list ready. Press “Generate shopping list”.</div>';
    return;
  }
  shoppingEl.dataset.generated = 'true';
  shoppingEl.innerHTML = aisles.map(aisle => {
    const items = [...groups[aisle].entries()].sort((a,b)=>a[1].localeCompare(b[1]));
    return `<div class="shoppingGroup"><h3>${aisleIcon(aisle)} ${aisle}</h3>${items.map(([key,item]) => {
      const checked = checkedShopping.has(key);
      return `<label class="shopItem ${checked ? 'done' : ''}"><input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleShoppingItem('${escapeAttr(key)}')"><span>${item}</span></label>`;
    }).join('')}</div>`;
  }).join('');
}
function escapeAttr(str){ return str.replace(/'/g, '&#39;'); }
function toggleShoppingItem(key){
  checkedShopping.has(key) ? checkedShopping.delete(key) : checkedShopping.add(key);
  persistChecked();
  renderShoppingList(true);
}

render();
renderShoppingList(false);
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
