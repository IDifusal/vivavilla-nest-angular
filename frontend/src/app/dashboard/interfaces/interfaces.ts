export interface ListOrdersResponse {
  todayProducts: Order[];
  yesterdayProducts: Order[];
}
export interface Order {
  id: number;
  parent_id: number;
  status: string;
  currency: string;
  version: string;
  prices_include_tax: boolean;
  date_created: Date;
  date_modified: Date;
  discount_total: string;
  discount_tax: string;
  shipping_total: string;
  shipping_tax: string;
  cart_tax: string;
  total: string;
  total_tax: string;
  customer_id: number;
  order_key: string;
  billing: Ing;
  shipping: Ing;
  payment_method: string;
  payment_method_title: string;
  transaction_id: string;
  customer_ip_address: string;
  customer_user_agent: string;
  created_via: string;
  customer_note: string;
  date_completed: Date;
  date_paid: Date;
  cart_hash: string;
  number: string;
  meta_data: OrderMetaDatum[];
  line_items: LineItem[];
  tax_lines: TaxLine[];
  shipping_lines: ShippingLine[];
  fee_lines: any[];
  coupon_lines: any[];
  refunds: any[];
  date_created_gmt: Date;
  date_modified_gmt: Date;
  date_completed_gmt: Date;
  date_paid_gmt: Date;
  currency_symbol: string;
  _links: Links;
}

export interface Links {
  self: Collection[];
  collection: Collection[];
}

export interface Collection {
  href: string;
}

export interface Ing {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email?: string;
  phone: string;
}

export interface LineItem {
  id: number;
  name: string;
  product_id: number;
  variation_id: number;
  quantity: number;
  tax_class: string;
  subtotal: string;
  subtotal_tax: string;
  total: string;
  total_tax: string;
  taxes: Tax[];
  meta_data: any[];
  sku: string;
  price: number;
  parent_name: null;
}

export interface Tax {
  id: number;
  total: string;
  subtotal: string;
}

export interface OrderMetaDatum {
  id: number;
  key: string;
  value: string;
}

export interface ShippingLine {
  id: number;
  method_title: string;
  method_id: string;
  instance_id: string;
  total: string;
  total_tax: string;
  taxes: any[];
  meta_data: ShippingLineMetaDatum[];
}

export interface ShippingLineMetaDatum {
  id: number;
  key: string;
  value: string;
  display_key: string;
  display_value: string;
}

export interface TaxLine {
  id: number;
  rate_code: string;
  rate_id: number;
  label: string;
  compound: boolean;
  tax_total: string;
  shipping_tax_total: string;
  rate_percent: number;
  meta_data: any[];
}
