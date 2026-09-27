export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: "admin" | "customer";
  phone: string;
  address: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  size: string[];
  colors: string[];
  image: string;
  stock: number;
  isTrending: boolean;
  createdAt: string;
}

export interface OrderItem {
  productId: number;
  quantity: number;
  size: string;
  color: string;
}

export interface Order {
  id: number;
  userId: number;
  items: OrderItem[];
  totalAmount: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  orderType: "purchase" | "manufacturing";
  createdAt: string;
  notes?: string;
}

export interface ManufacturingOrder {
  id: number;
  userId: number;
  productName: string;
  description: string;
  quantity: number;
  size: string;
  color: string;
  fabricType: string;
  specialRequirements: string;
  estimatedPrice: number;
  status: "pending" | "approved" | "in_production" | "completed" | "cancelled";
  createdAt: string;
  estimatedDelivery: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, "id">) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}
