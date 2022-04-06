export type TAvatar = {
  original: string;
};

export type TDisplayName = {
  display_name: string;
};

export type TCard = {
  created_by: TDisplayName;
  initial_price: number;
  avatar: TAvatar;
  product_id: number;
  quantity: number;
  quantity_available: number;
  type: string;
  name: string;
};
