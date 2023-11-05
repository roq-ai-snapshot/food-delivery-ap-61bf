import { FoodItemInterface } from 'interfaces/food-item';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  name: string;
  description?: string;
  availability_start: any;
  availability_end: any;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  food_item?: FoodItemInterface[];
  restaurant?: RestaurantInterface;
  _count?: {
    food_item?: number;
  };
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  restaurant_id?: string;
}
