import axios from "axios";
import { User, Product, Order, ManufacturingOrder, Category } from "../types";

const API_BASE_URL = "http://localhost:3001";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Auth API
export const authAPI = {
  login: async (email: string, password: string): Promise<User | null> => {
    try {
      const response = await api.get(
        `/users?email=${email}&password=${password}`
      );
      const users = response.data;
      return users.length > 0 ? users[0] : null;
    } catch (error) {
      console.error("Login error:", error);
      return null;
    }
  },

  register: async (userData: Omit<User, "id">): Promise<User | null> => {
    try {
      const response = await api.post("/users", userData);
      return response.data;
    } catch (error) {
      console.error("Registration error:", error);
      return null;
    }
  },
};

// Products API
export const productsAPI = {
  getAll: async (): Promise<Product[]> => {
    try {
      const response = await api.get("/products");
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },

  getById: async (id: number): Promise<Product | null> => {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
  },

  getTrending: async (): Promise<Product[]> => {
    try {
      const response = await api.get("/products?isTrending=true");
      return response.data;
    } catch (error) {
      console.error("Error fetching trending products:", error);
      return [];
    }
  },

  getByCategory: async (category: string): Promise<Product[]> => {
    try {
      const response = await api.get(`/products?category=${category}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products by category:", error);
      return [];
    }
  },

  create: async (product: Omit<Product, "id">): Promise<Product | null> => {
    try {
      const response = await api.post("/products", product);
      return response.data;
    } catch (error) {
      console.error("Error creating product:", error);
      return null;
    }
  },

  update: async (
    id: number,
    product: Partial<Product>
  ): Promise<Product | null> => {
    try {
      const response = await api.put(`/products/${id}`, product);
      return response.data;
    } catch (error) {
      console.error("Error updating product:", error);
      return null;
    }
  },

  delete: async (id: number): Promise<boolean> => {
    try {
      await api.delete(`/products/${id}`);
      return true;
    } catch (error) {
      console.error("Error deleting product:", error);
      return false;
    }
  },
};

// Orders API
export const ordersAPI = {
  getAll: async (): Promise<Order[]> => {
    try {
      const response = await api.get("/orders");
      return response.data;
    } catch (error) {
      console.error("Error fetching orders:", error);
      return [];
    }
  },

  getByUser: async (userId: number): Promise<Order[]> => {
    try {
      const response = await api.get(`/orders?userId=${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user orders:", error);
      return [];
    }
  },

  create: async (order: Omit<Order, "id">): Promise<Order | null> => {
    try {
      const response = await api.post("/orders", order);
      return response.data;
    } catch (error) {
      console.error("Error creating order:", error);
      return null;
    }
  },

  updateStatus: async (
    id: number,
    status: Order["status"]
  ): Promise<boolean> => {
    try {
      await api.patch(`/orders/${id}`, { status });
      return true;
    } catch (error) {
      console.error("Error updating order status:", error);
      return false;
    }
  },
};

// Manufacturing Orders API
export const manufacturingOrdersAPI = {
  getAll: async (): Promise<ManufacturingOrder[]> => {
    try {
      const response = await api.get("/manufacturingOrders");
      return response.data;
    } catch (error) {
      console.error("Error fetching manufacturing orders:", error);
      return [];
    }
  },

  getByUser: async (userId: number): Promise<ManufacturingOrder[]> => {
    try {
      const response = await api.get(`/manufacturingOrders?userId=${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user manufacturing orders:", error);
      return [];
    }
  },

  create: async (
    order: Omit<ManufacturingOrder, "id">
  ): Promise<ManufacturingOrder | null> => {
    try {
      const response = await api.post("/manufacturingOrders", order);
      return response.data;
    } catch (error) {
      console.error("Error creating manufacturing order:", error);
      return null;
    }
  },

  updateStatus: async (
    id: number,
    status: ManufacturingOrder["status"]
  ): Promise<boolean> => {
    try {
      await api.patch(`/manufacturingOrders/${id}`, { status });
      return true;
    } catch (error) {
      console.error("Error updating manufacturing order status:", error);
      return false;
    }
  },
};

// Categories API
export const categoriesAPI = {
  getAll: async (): Promise<Category[]> => {
    try {
      const response = await api.get("/categories");
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  },
};

export default api;
