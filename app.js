const recipes = [
  {
    id:"CM001", title:"Mediterranean Chicken Traybake", type:"Meat", difficulty:"Easy", servings:2,
    prep:"10 mins", cook:"30 mins", kcal:560, protein:"46g", carbs:"35g", fat:"24g", fibre:"8g",
    tags:["Meat","Chicken","Mediterranean","High Protein","One Tray","Weeknight Winner","Anti-inflammatory"],
    plantFoods:["peppers","courgette","cherry tomatoes","red onion","garlic","lemon","oregano","smoked paprika","black pepper","parsley","quinoa"],
    photo:"Search: Mediterranean chicken traybake with quinoa served in a white bowl",
    ingredients:["350g chicken breasts","2 peppers","1 courgette","250g cherry tomatoes","1 red onion","3 garlic cloves","100g reduced-fat feta","150g dry quinoa","2 tsp extra virgin olive oil","1 lemon","2 tsp dried oregano","1 tsp smoked paprika","Black pepper","Sea salt","Fresh parsley optional"],
    method:["Preheat oven to 200°C or 180°C fan.","Cook quinoa according to packet instructions.","Add peppers, courgette, tomatoes, onion and garlic to a roasting tray.","Toss with olive oil, lemon juice, oregano, paprika, salt and pepper.","Nestle chicken among the vegetables.","Roast for 25–30 minutes until chicken is cooked through.","Add feta for the final 2 minutes, then serve over quinoa."],
    freezer:"★★★★☆ Freeze without feta for up to 3 months.", leftovers:"★★★★★ Keeps in the fridge for 3 days.", cara:"☆☆☆☆☆", monique:"☆☆☆☆☆", juno:"☆☆☆☆☆"
  },
  {
    id:"CM002", title:"Lentil & Sweet Potato Curry", type:"Vegetarian", difficulty:"Easy", servings:4,
    prep:"10 mins", cook:"30 mins", kcal:540, protein:"18g", carbs:"72g", fat:"17g", fibre:"14g",
    tags:["Vegetarian","Curry","Batch Cook","High Fibre","Anti-inflammatory","Freezer Friendly"],
    plantFoods:["red lentils","sweet potato","spinach","onion","garlic","ginger","chopped tomatoes","turmeric","cumin","coriander","basmati rice"],
    photo:"Search: lentil sweet potato spinach curry with rice",
    ingredients:["200g red lentils","2 sweet potatoes","1 onion","3 garlic cloves","Fresh ginger","1 tin chopped tomatoes","200ml light coconut milk","150g spinach","1 tsp turmeric","1 tsp ground cumin","1 tsp ground coriander","150g dry basmati rice"],
    method:["Cook rice according to packet instructions.","Soften onion, garlic and ginger in a large pan.","Add turmeric, cumin and coriander and cook for 1 minute.","Add diced sweet potato, red lentils, chopped tomatoes and coconut milk.","Simmer for 25–30 minutes until the lentils are soft and sweet potato is tender.","Stir through spinach until wilted.","Serve with basmati rice."],
    freezer:"★★★★★ Freezes brilliantly for up to 3 months.", leftovers:"★★★★★ Excellent next day.", cara:"☆☆☆☆☆", monique:"☆☆☆☆☆", juno:"☆☆☆☆☆"
  },
  {
    id:"CM003", title:"Lemon & Dill Salmon with Sweet Potato", type:"Fish", difficulty:"Easy", servings:2,
    prep:"10 mins", cook:"25 mins", kcal:590, protein:"35g", carbs:"42g", fat:"27g", fibre:"8g",
    tags:["Fish","Omega-3","High Protein","Anti-inflammatory","Under 30 mins"],
    plantFoods:["sweet potato","broccoli","green beans","lemon","dill","black pepper"],
    photo:"Search: baked salmon sweet potato broccoli green beans lemon dill",
    ingredients:["2 salmon fillets","2 sweet potatoes","200g broccoli","200g green beans","1 lemon","Fresh dill","2 tsp olive oil","Black pepper","Sea salt"],
    method:["Preheat oven to 200°C or 180°C fan.","Cube sweet potatoes and roast with 1 tsp olive oil for 15 minutes.","Add salmon to the tray with lemon juice, dill, salt and pepper.","Roast for another 12–15 minutes.","Steam broccoli and green beans.","Serve salmon with sweet potato and greens."],
    freezer:"★★☆☆☆ Best fresh; salmon can dry out after freezing.", leftovers:"★★★☆☆ Fine next day cold or reheated gently.", cara:"☆☆☆☆☆", monique:"☆☆☆☆☆", juno:"☆☆☆☆☆"
  },
  {
    id:"CM004", title:"Mushroom & Spinach Risotto", type:"Vegetarian", difficulty:"Easy", servings:2,
    prep:"10 mins", cook:"30 mins", kcal:560, protein:"19g", carbs:"72g", fat:"18g", fibre:"8g",
    tags:["Vegetarian","Italian-inspired","Comfort Food","Weeknight Winner"],
    plantFoods:["mushrooms","spinach","peas","onion","garlic","lemon","parsley","arborio rice","black pepper"],
    photo:"Search: mushroom spinach pea risotto in a white bowl",
    ingredients:["200g mushrooms","150g spinach","100g frozen peas","1 onion","2 garlic cloves","150g arborio rice","600ml vegetable stock","40g parmesan","1 tsp olive oil","Juice of 1/2 lemon","Fresh parsley optional","Black pepper"],
    method:["Warm the vegetable stock in a small pan.","Soften onion and garlic in olive oil.","Add mushrooms and cook until browned.","Stir in arborio rice for 1 minute.","Add stock a ladle at a time, stirring often, until the rice is creamy and tender.","Stir through peas, spinach, parmesan, lemon juice and black pepper.","Serve with parsley if using."],
    freezer:"★★☆☆☆ Best fresh; texture softens after freezing.", leftovers:"★★★☆☆ Keeps for 2 days and reheats gently.", cara:"☆☆☆☆☆", monique:"☆☆☆☆☆", juno:"☆☆☆☆☆"
  },
  {
    id:"CM005", title:"Turkey Chilli", type:"Meat", difficulty:"Easy", servings:4,
    prep:"10 mins", cook:"30 mins", kcal:610, protein:"42g", carbs:"48g", fat:"17g", fibre:"10g",
    tags:["Meat","Turkey","Batch Cook","Freezer Friendly","High Protein","Comfort Food"],
    plantFoods:["onion","garlic","peppers","carrots","chopped tomatoes","kidney beans","tomato purée","cumin","smoked paprika","oregano","basmati rice"],
    photo:"Search: healthy turkey chilli with rice",
    ingredients:["500g 5% turkey mince","1 onion","3 garlic cloves","2 peppers","2 carrots","2 tins chopped tomatoes","1 tin kidney beans","2 tbsp tomato purée","2 tsp ground cumin","2 tsp smoked paprika","1 tsp dried oregano","300g cooked basmati rice to serve"],
    method:["Soften onion and garlic in a large pan.","Add turkey mince and cook until browned.","Add peppers and carrots and cook for 5 minutes.","Stir in tomato purée, cumin, paprika and oregano.","Add chopped tomatoes and kidney beans.","Simmer for 25–30 minutes.","Serve with basmati rice."],
    freezer:"★★★★★ Freezes brilliantly for up to 3 months.", leftovers:"★★★★★ Better the next day.", cara:"☆☆☆☆☆", monique:"☆☆☆☆☆", juno:"☆☆☆☆☆"
  }
];

let selected = new Set();
const recipesEl = document.getElementById('recipes');
const selectedEl = document.getElementById('selectedRecipes');
const shoppingEl = document.getElementById('shoppingList');

function selectedRecipes(){ return [...selected].map(id => recipes.find(r => r.id === id)).filter(Boolean); }
function uniquePlantFoods(list=selectedRecipes()){
  return [...new Set(list.flatMap(r => r.plantFoods || []))].sort((a,b)=>a.localeCompare(b));
}
function weeklyTypeSummary(list=selectedRecipes()){
  const counts = {Vegetarian:0, Fish:0, Meat:0};
  list.forEach(r => { counts[r.type] = (counts[r.type] || 0) + 1; });
  return `🥬 ${counts.Vegetarian || 0}/2 veggie · 🐟 ${counts.Fish || 0}/1 fish · 🥩 ${counts.Meat || 0}/2 meat`;
}
function render(list=recipes){
  recipesEl.innerHTML = list.map(r => `<article class="recipe"><h2>${r.title}</h2><div class="meta"><span class="pill">${r.id}</span><span class="pill">${r.type}</span><span class="pill">⭐ ${r.difficulty}</span><span class="pill">⏱ ${r.prep}</span><span class="pill">🔥 ${r.cook}</span><span class="pill">🍽 Serves ${r.servings}</span><span class="pill">${r.kcal} kcal</span><span class="pill">🌱 ${r.plantFoods.length} plant foods</span></div><p><b>📷 Suggested photo:</b> ${r.photo}</p><div class="tags">${r.tags.map(t=>`<span class="pill">${t}</span>`).join('')}</div><button onclick="toggle('${r.id}')">${selected.has(r.id)?'Remove from week':'Add to week'}</button><details><summary>Plant foods</summary><p>${r.plantFoods.join(', ')}</p></details><details><summary>Ingredients</summary><ul>${r.ingredients.map(i=>`<li>${i}</li>`).join('')}</ul></details><details><summary>Method</summary><ol>${r.method.map(s=>`<li>${s}</li>`).join('')}</ol></details><details><summary>Nutrition & ratings</summary><p>Protein ${r.protein} · Carbs ${r.carbs} · Fat ${r.fat} · Fibre ${r.fibre}</p><p>❄️ ${r.freezer}</p><p>🥡 ${r.leftovers}</p><p>❤️ Cara ${r.cara} · Monique ${r.monique} · 👧 Juno ${r.juno}</p></details></article>`).join('');
  const chosen = selectedRecipes();
  const plants = uniquePlantFoods(chosen);
  selectedEl.innerHTML = chosen.length ? `<p><b>${weeklyTypeSummary(chosen)}</b></p><p><b>🌱 Plant food variety:</b> ${plants.length} different plant foods this week</p><div class="plantList">${plants.map(p=>`<span class="pill">${p}</span>`).join('')}</div><hr>${chosen.map(r => r.title).join('<br>')}` : 'No recipes selected yet.';
}
function toggle(id){ selected.has(id) ? selected.delete(id) : selected.add(id); render(filterRecipes()); }
function filterRecipes(){ const q=document.getElementById('search').value.toLowerCase(); return recipes.filter(r => JSON.stringify(r).toLowerCase().includes(q)); }
document.getElementById('search').addEventListener('input',()=>render(filterRecipes()));
document.getElementById('shoppingBtn').addEventListener('click',()=>{
 const items=selectedRecipes().flatMap(r=>r.ingredients);
 shoppingEl.textContent = items.length ? [...new Set(items)].sort().join('\n') : 'Choose some recipes first.';
});
render();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
