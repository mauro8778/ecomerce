import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  getCategory() {
    return this.categoryRepository.getCategory();
  }

  addCategory() {
    return this.categoryRepository.addCategories()

  }
}
