export const recipes = [
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