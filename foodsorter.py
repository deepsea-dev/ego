foodList = "strawberry,orange,lemon,fig,pineapple,ananas,banana,jackfruit,jak,jack,custard apple,pomegranate,acorn,rapeseed,corn,buckeye,horse chestnut,conker,ocarina,sweet potato,goose,eel,triceratops,honeycomb,mashed potato,bell pepper,head cabbage,broccoli,cauliflower,zucchini,courgette,spaghetti squash,acorn squash,butternut squash,cucumber,cuke,artichoke,globe artichoke,cardoon,mushroom,hot pot,hotpot,trifle,red wine,drumstick,meat loaf,meatloaf,guacamole,hay,water jug,soup bowl,eggnog,wine bottle,shoji,dough,French loaf,milk can,hotdog,hot dog,red hot,coral fungus,burrito,pill bottle,nipple,overskirt,espresso,pizza,pizza pie,chocolate sauce,chocolate syrup,water bottle,ice lolly,lolly,lollipop,popsicle,ice cream,icecream,pretzel,cheeseburger,coffee mug"

goodFoods = []
badFoods = []


for food in foodList.split(","):
  good = input(food)
  if (good == 'y'):
    goodFoods.append(food)
  else:
    badFoods.append(food)



print(goodFoods)
print(badFoods)