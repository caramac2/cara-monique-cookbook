const STORAGE_KEYS = {
  selected: 'cmCookbook.selectedRecipeIds.v020',
  checkedShopping: 'cmCookbook.checkedShopping.v020'
};

const recipes = [
  {
    id:'CM001', title:'Mediterranean Chicken Traybake', type:'Meat', difficulty:'Easy', servings:2,
    prep:'10 mins', cook:'30 mins', kcal:560, protein:'46g', carbs:'35g', fat:'24g', fibre:'8g', cost:'£3.80',
    description:'A colourful one-tray Mediterranean dinner with chicken, roasted vegetables, feta and quinoa.',
    tags:['Meat','Chicken','Mediterranean','High Protein','One Tray','Weeknight Winner','Anti-inflammatory'],
    plantFoods:['peppers','courgette','cherry tomatoes','red onion','garlic','lemon','oregano','smoked paprika','black pepper','parsley','quinoa'],
    photo:'Mediterranean chicken traybake with quinoa',
    ingredients:[
      {item:'350g chicken breasts', aisle:'Meat & Fish'}, {item:'2 peppers', aisle:'Fruit & Veg'}, {item:'1 courgette', aisle:'Fruit & Veg'},
      {item:'250g cherry tomatoes', aisle:'Fruit & Veg'}, {item:'1 red onion', aisle:'Fruit & Veg'}, {item:'3 garlic cloves', aisle:'Fruit & Veg'},
      {item:'100g reduced-fat feta', aisle:'Dairy'}, {item:'150g dry quinoa', aisle:'Pantry'}, {item:'2 tsp extra virgin olive oil', aisle:'Pantry'},
      {item:'1 lemon', aisle:'Fruit & Veg'}, {item:'2 tsp dried oregano', aisle:'Herbs & Spices'}, {item:'1 tsp smoked paprika', aisle:'Herbs & Spices'},
      {item:'Black pepper', aisle:'Herbs & Spices'}, {item:'Sea salt', aisle:'Herbs & Spices'}, {item:'Fresh parsley optional', aisle:'Fruit & Veg'}
    ],
    method:['Preheat oven to 200°C or 180°C fan.','Cook quinoa according to packet instructions.','Add peppers, courgette, tomatoes, onion and garlic to a roasting tray.','Toss with olive oil, lemon juice, oregano, paprika, salt and pepper.','Nestle chicken among the vegetables.','Roast for 25–30 minutes until chicken is cooked through.','Add feta for the final 2 minutes, then serve over quinoa.'],
    freezer:'★★★★☆ Freeze without feta for up to 3 months.', leftovers:'★★★★★ Keeps in the fridge for 3 days.'
  },
  {
    id:'CM002', title:'Lentil & Sweet Potato Curry', type:'Vegetarian', difficulty:'Easy', servings:4,
    prep:'10 mins', cook:'30 mins', kcal:540, protein:'18g', carbs:'72g', fat:'17g', fibre:'14g', cost:'£1.70',
    description:'A warming vegetarian curry with lentils, sweet potato, spinach, ginger and turmeric.',
    tags:['Vegetarian','Curry','Batch Cook','High Fibre','Anti-inflammatory','Freezer Friendly'],
    plantFoods:['red lentils','sweet potato','spinach','onion','garlic','ginger','chopped tomatoes','turmeric','cumin','coriander','basmati rice'],
    photo:'Lentil sweet potato spinach curry with rice',
    ingredients:[
      {item:'200g red lentils', aisle:'Pantry'}, {item:'2 sweet potatoes', aisle:'Fruit & Veg'}, {item:'1 onion', aisle:'Fruit & Veg'},
      {item:'3 garlic cloves', aisle:'Fruit & Veg'}, {item:'Fresh ginger', aisle:'Fruit & Veg'}, {item:'1 tin chopped tomatoes', aisle:'Tins & Jars'},
      {item:'200ml light coconut milk', aisle:'Tins & Jars'}, {item:'150g spinach', aisle:'Fruit & Veg'}, {item:'1 tsp turmeric', aisle:'Herbs & Spices'},
      {item:'1 tsp ground cumin', aisle:'Herbs & Spices'}, {item:'1 tsp ground coriander', aisle:'Herbs & Spices'}, {item:'150g dry basmati rice', aisle:'Pantry'}
    ],
    method:['Cook rice according to packet instructions.','Soften onion, garlic and ginger in a large pan.','Add turmeric, cumin and coriander and cook for 1 minute.','Add diced sweet potato, red lentils, chopped tomatoes and coconut milk.','Simmer for 25–30 minutes until the lentils are soft and sweet potato is tender.','Stir through spinach until wilted.','Serve with basmati rice.'],
    freezer:'★★★★★ Freezes brilliantly for up to 3 months.', leftovers:'★★★★★ Excellent next day.'
  },
  {
    id:'CM003', title:'Lemon & Dill Salmon with Sweet Potato', type:'Fish', difficulty:'Easy', servings:2,
    prep:'10 mins', cook:'25 mins', kcal:590, protein:'35g', carbs:'42g', fat:'27g', fibre:'8g', cost:'£4.80',
    description:'A simple oily-fish dinner with salmon, sweet potato, greens, lemon and dill.',
    tags:['Fish','Omega-3','High Protein','Anti-inflammatory','Under 30 mins'],
    plantFoods:['sweet potato','broccoli','green beans','lemon','dill','black pepper'],
    photo:'Baked salmon sweet potato broccoli green beans lemon dill',
    ingredients:[
      {item:'2 salmon fillets', aisle:'Meat & Fish'}, {item:'2 sweet potatoes', aisle:'Fruit & Veg'}, {item:'200g broccoli', aisle:'Fruit & Veg'},
      {item:'200g green beans', aisle:'Fruit & Veg'}, {item:'1 lemon', aisle:'Fruit & Veg'}, {item:'Fresh dill', aisle:'Fruit & Veg'},
      {item:'2 tsp olive oil', aisle:'Pantry'}, {item:'Black pepper', aisle:'Herbs & Spices'}, {item:'Sea salt', aisle:'Herbs & Spices'}
    ],
    method:['Preheat oven to 200°C or 180°C fan.','Cube sweet potatoes and roast with 1 tsp olive oil for 15 minutes.','Add salmon to the tray with lemon juice, dill, salt and pepper.','Roast for another 12–15 minutes.','Steam broccoli and green beans.','Serve salmon with sweet potato and greens.'],
    freezer:'★★☆☆☆ Best fresh; salmon can dry out after freezing.', leftovers:'★★★☆☆ Fine next day cold or reheated gently.'
  },
  {
    id:'CM004', title:'Mushroom & Spinach Risotto', type:'Vegetarian', difficulty:'Easy', servings:2,
    prep:'10 mins', cook:'30 mins', kcal:560, protein:'19g', carbs:'72g', fat:'18g', fibre:'8g', cost:'£2.40',
    description:'A lighter weeknight risotto with mushrooms, spinach, peas, parmesan and lemon.',
    tags:['Vegetarian','Italian-inspired','Comfort Food','Weeknight Winner'],
    plantFoods:['mushrooms','spinach','peas','onion','garlic','lemon','parsley','arborio rice','black pepper'],
    photo:'Mushroom spinach pea risotto in a white bowl',
    ingredients:[
      {item:'200g mushrooms', aisle:'Fruit & Veg'}, {item:'150g spinach', aisle:'Fruit & Veg'}, {item:'100g frozen peas', aisle:'Frozen'},
      {item:'1 onion', aisle:'Fruit & Veg'}, {item:'2 garlic cloves', aisle:'Fruit & Veg'}, {item:'150g arborio rice', aisle:'Pantry'},
      {item:'600ml vegetable stock', aisle:'Pantry'}, {item:'40g parmesan', aisle:'Dairy'}, {item:'1 tsp olive oil', aisle:'Pantry'},
      {item:'Juice of 1/2 lemon', aisle:'Fruit & Veg'}, {item:'Fresh parsley optional', aisle:'Fruit & Veg'}, {item:'Black pepper', aisle:'Herbs & Spices'}
    ],
    method:['Warm the vegetable stock in a small pan.','Soften onion and garlic in olive oil.','Add mushrooms and cook until browned.','Stir in arborio rice for 1 minute.','Add stock a ladle at a time, stirring often, until the rice is creamy and tender.','Stir through peas, spinach, parmesan, lemon juice and black pepper.','Serve with parsley if using.'],
    freezer:'★★☆☆☆ Best fresh; texture softens after freezing.', leftovers:'★★★☆☆ Keeps for 2 days and reheats gently.'
  },
  {
    id:'CM005', title:'Turkey Chilli', type:'Meat', difficulty:'Easy', servings:4,
    prep:'10 mins', cook:'30 mins', kcal:610, protein:'42g', carbs:'48g', fat:'17g', fibre:'10g', cost:'£2.30',
    description:'A high-protein batch-cook chilli with turkey mince, beans, vegetables and spices.',
    tags:['Meat','Turkey','Batch Cook','Freezer Friendly','High Protein','Comfort Food'],
    plantFoods:['onion','garlic','peppers','carrots','chopped tomatoes','kidney beans','tomato purée','cumin','smoked paprika','oregano','basmati rice'],
    photo:'Healthy turkey chilli with rice',
    ingredients:[
      {item:'500g 5% turkey mince', aisle:'Meat & Fish'}, {item:'1 onion', aisle:'Fruit & Veg'}, {item:'3 garlic cloves', aisle:'Fruit & Veg'},
      {item:'2 peppers', aisle:'Fruit & Veg'}, {item:'2 carrots', aisle:'Fruit & Veg'}, {item:'2 tins chopped tomatoes', aisle:'Tins & Jars'},
      {item:'1 tin kidney beans', aisle:'Tins & Jars'}, {item:'2 tbsp tomato purée', aisle:'Tins & Jars'}, {item:'2 tsp ground cumin', aisle:'Herbs & Spices'},
      {item:'2 tsp smoked paprika', aisle:'Herbs & Spices'}, {item:'1 tsp dried oregano', aisle:'Herbs & Spices'}, {item:'300g cooked basmati rice to serve', aisle:'Pantry'}
    ],
    method:['Soften onion and garlic in a large pan.','Add turkey mince and cook until browned.','Add peppers and carrots and cook for 5 minutes.','Stir in tomato purée, cumin, paprika and oregano.','Add chopped tomatoes and kidney beans.','Simmer for 25–30 minutes.','Serve with basmati rice.'],
    freezer:'★★★★★ Freezes brilliantly for up to 3 months.', leftovers:'★★★★★ Better the next day.'
  }
];

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
