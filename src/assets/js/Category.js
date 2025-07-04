import { generateId,getFromLocalStorage,saveToLocalStorage} from "./Utils";
import { Product } from "../components/Product";

const CATEGORY_KEY = "categories";

export class Category {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.categories = getFromLocalStorage(CATEGORY_KEY) || [];
  }

  addCategory(name) {
    const newId = generateCategoryId();
    const products = [];
    const newCategory = new Category(newId, name, products);
    this.Category.push(newCategory);
    this.save();
  }

  addProduct(name, description, price) {
    const id = generateId(STORAGE_KEY);
    const category = this.categories.find(
      (cat) => cat.id == parseInt(categoryId)
    );
    const newproduct = new Product(
      id,
      name,
      description,
      parseFloat(price)
    );
    if (category) {
      category.products.push(newproduct);
      this.save();
    }
  }
  getAllCategories() {
    return this.categories;
  }
  save() {
    saveToLocalStorage(CATEGORY_KEY, this.categories);
  }
}
