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
  date_completed: null;
  date_paid: null;
  cart_hash: string;
  number: string;
  meta_data: OrderMetaDatum[];
  line_items: LineItem[];
  tax_lines: TaxLine[];
  shipping_lines: ShippingLine[];
  fee_lines: any[];
  coupon_lines: any[];
  refunds: any[];
  payment_url: string;
  is_editable: boolean;
  needs_payment: boolean;
  needs_processing: boolean;
  date_created_gmt: Date;
  date_modified_gmt: Date;
  date_completed_gmt: null;
  date_paid_gmt: null;
  currency_symbol: string;
  _links: Links;
}

export interface Links {
  self: Collection[];
  collection: Collection[];
  customer: Collection[];
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
  meta_data: LineItemMetaDatum[];
  sku: string;
  price: number;
  image: Image;
  parent_name: string;
}

export interface Image {
  id: number;
  src: string;
}

export interface LineItemMetaDatum {
  id: number;
  key: string;
  value: string;
  display_key: string;
  display_value: string;
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
  meta_data: LineItemMetaDatum[];
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
