import type { Prisma } from "@prisma/client";

export interface DbProduct extends Prisma.GunCreateInput {}

export interface ImagePaths {
  small: string;
  medium: string;
  large: string;
  original: string;
}

export interface ImageData {
  gunId: string;
  identifier: string;
  paths: ImagePaths;
  is_primary: boolean;
}

interface Attribute {
  attribute: string;
  value: string;
}

export interface GunTraderProduct {
  id: string;
  buy_price: number | null;
  calibre: string;
  certification_type: string;
  created_at: string; // Date in ISO string format
  country_of_origin: string | null;
  description: string;
  description_html: string;
  images: ImageData[]; // Array of GunImage objects
  images_count: number;
  is_new: boolean;
  make: string;
  mechanism: string;
  model: string;
  model_2: string | null;
  name: string;
  product_number: string | null;
  sell_price: string; // This should be converted to a number later
  stock_number: string;
  stockNumberOld: string;
  serial_number: string;
  type: string;
  year_of_manufacture: number | null;
  url: string;
  attributes: Attribute[];
}

export interface TriggerTradersProduct {
  client_external_system_id: string;
  client_email: string;
  product_external_system_id: string;
  advert_type: string;
  advert_status_id: string;
  product_details: string;
  mechanism: string;
  manufacturer: string;
  model: string;
  calibre: string;
  condition: string;
  orientation: string;
  stock_length: string;
  barrel_length: string;
  trigger_type: string;
  choke_type: string;
  price: string;
  img: string[];
}
