export interface CategoryType {
  id: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductType {
  id: string;
  name: string;
  slug: string;
  categoryId: {
    id: string,
    name: string,
  };
  imageUrl: string;
  createdAt: string;
  updatedAt: string
}
