import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {}

  getFoodById(id:number):Food{
    return this.getAll().find(food=> food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
   return this.getAll().filter(food=>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[]{
    return [
      { name: 'All', count: 15 },
      {name: 'Breakfast', count:6},
      { name: 'FastFood', count: 5 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 5 },
      { name: 'SlowFood', count: 4},
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 2 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    if(tag=="All")
    return this.getAll();
    else 
    return this.getAll().filter(food=> food.tags?.includes(tag))
  }

  getAll():Food[]{
    return[

      {
        id: 1,
        name: 'South Indian Meals',
        price: 100,
        cookTime: '20-30',
        favorite: true,
        origins: ['India'],
        stars: 4.5,
        imageUrl: '/assets/images/Foods/full meal.jpg',
        tags: ['SlowFood', 'Lunch'],
      },

      {
        id: 2,
        name: 'Gobi Manchurian',
        price: 100,
        cookTime: '10-15',
        favorite: false,
        origins: ['China'],
        stars: 4.5,
        imageUrl: '/assets/images/Foods/gobi-manchurian.jpg',
        tags: ['FastFood', 'Fry'],
      },

      {
        id: 15,
        name: 'Masala Dose',
        price: 80,
        cookTime: '20-30',
        favorite: false,
        origins: ['India'],
        stars: 4.5,
        imageUrl: '/assets/images/Foods/food-8.jpg',
        tags: ['Dose', 'Breakfast'],
      },

      {
        id: 3,
        name: 'Chapathi',
        price: 60,
        cookTime: '15-20',
        favorite: false,
        origins: ['India'],
        stars: 4.5,
        imageUrl: '/assets/images/Foods/chapathi.jpg',
        tags: [ 'Breakfast'],
      },

      {
        id: 4,
        name: 'Idli Vade',
        price: 100,
        cookTime: '20-30',
        favorite: false,
        origins: ['India'],
        stars: 4.5,
        imageUrl: '/assets/images/Foods/idli vade.jpeg',
        tags: [ 'Breakfast'],
      },

      {
        id: 5,
        name: 'Set Dose',
        price: 60,
        cookTime: '20-30',
        favorite: false,
        origins: ['India'],
        stars: 4.5,
        imageUrl: '/assets/images/Foods/set dose.jpg',
        tags: [ 'Dose', 'Breakfast'],
      },

      {
        id: 6,
        name: 'Idli',
        price: 50,
        cookTime: '20-30',
        favorite: false,
        origins: ['India'],
        stars: 4.5,
        imageUrl: '/assets/images/Foods/idli.jpg',
        tags: [  'Breakfast'],
      },

      {
        id: 7,
        name: 'Vade',
        price: 50,
        cookTime: '20-30',
        favorite: false,
        origins: ['India'],
        stars: 4.5,
        imageUrl: '/assets/images/Foods/vade.jpg',
        tags: [ 'Breakfast'],
      },

      {
        id: 14,
        name: 'Chicken biryani',
        price: 240,
        cookTime: '50-60',
        favorite: false,
        origins: ['India'],
        stars: 4.3,
        imageUrl: '/assets/images/Foods/food-7.jpg',
        tags: ['SlowFood', 'Biryani', 'Lunch'],
      },
      {
        id: 8,
        name: 'Pizza Pepperoni',
        cookTime: '30-40',
        price:   300,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: '/assets/images/Foods/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 9,
        name: 'Meatball',
        price: 350,
        cookTime: '20-30',
        favorite: true,
        origins: ['Persia'],
        stars: 4.7,
        imageUrl: '/assets/images/Foods/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 10,
        name: 'Hamburger',
        price: 200,
        cookTime: '10-15',
        favorite: false,
        origins: ['Germany'],
        stars: 3.5,
        imageUrl: '/assets/images/Foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 11,
        name: 'French Fries',
        price: 150,
        cookTime: '15-20',
        favorite: true,
        origins: [ 'France'],
        stars: 3.3,
        imageUrl: '/assets/images/Foods/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 12,
        name: 'Chicken Soup',
        price: 200,
        cookTime: '40-50',
        favorite: false,
        origins: ['India'],
        stars: 3.0,
        imageUrl: '/assets/images/Foods/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 13,
        name: 'Vegetables Pizza',
        price: 220,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italy'],
        stars: 4.0,
        imageUrl: '/assets/images/Foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
     
      

      

      

     
    ]
  }
}
