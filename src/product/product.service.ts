import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    
    const newproduct = new Product()
    newproduct.name = createProductDto.name
    newproduct.price = createProductDto.price
    newproduct.quantity = createProductDto.quantity
    await newproduct.save()
    
    return newproduct;
  }

  async findAllProduct() : Promise<Product[]> {
    return await Product.find();
  }

  async findOneById(id: number) {
    return await Product.findOneBy({ id: id })
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    
    const updateProduct = await Product.findOneBy({ id }); // const permettant de retrouver une présentation par son id

    updateProduct.name = updateProductDto.name; // presentation.name = actuelle ; updatePresentationDto.name = nouvelle
    updateProduct.price = updateProductDto.price;
    updateProduct.quantity = updateProductDto.quantity;


    await updateProduct.save() // sauvegarde de la nouvelle presentation

    return updateProduct
  }

  async deleteProduct(id: number) {
    return await Product.delete(id); //({ id })
  }
}
