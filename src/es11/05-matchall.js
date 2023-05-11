const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Pineapple, Grape, Kiwi, Apple, Orange, Cherry, Strawberry';

for ( const match of fruit.matchAll(regex)){
    console.log(match);
}