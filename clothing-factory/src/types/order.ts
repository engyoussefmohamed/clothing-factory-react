export interface OrderItem {
  productId: number;
  quantity: number;
  size: string;
  color: string;
}

export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";
export type OrderType = "purchase" | "manufacture";

export interface Order {
  id: number;
  userId: number;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  orderType: OrderType;
  createdAt: string;
  notes?: string;
}
