import { MenuInterface } from 'interfaces/menu';
import { OrderInterface } from 'interfaces/order';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  opening_hours?: string;
  closing_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  menu?: MenuInterface[];
  order?: OrderInterface[];

  _count?: {
    menu?: number;
    order?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  opening_hours?: string;
  closing_hours?: string;
  name?: string;
  tenant_id?: string;
}
