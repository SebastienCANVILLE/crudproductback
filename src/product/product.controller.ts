import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {

    const createProduct = await this.productService.createProduct(createProductDto);

    return {
      statusCode: 201,
      data: createProduct,
      message: "Création réussi de votre produit"
    }
  }

  @Get()
  async findAll() {
    const productExist = await this.productService.findAllProduct();

    if (!productExist) {
      throw new HttpException("Aucune liste de produits n'existe", HttpStatus.NOT_FOUND);
    };
    return {
      statusCode: 200,
      data: productExist,
      message: "Voici votre produit"
    };
  };

  @Get(':id')
  async findOneById(@Param('id') id: string) {

    const productById = await this.productService.findOneById(+id);

    if (!productById) {
      throw new HttpException("Le produit n'existe pas", HttpStatus.NOT_FOUND);
    };

    return {
      statusCode: 200,
      data: productById,
      message: "Voici votre produit"
    };
  };

  @Patch(':id')
  async updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {

    const productExist = await this.productService.findOneById(+id);

    if (!productExist) {
      throw new HttpException("Le produit n'existe pas", HttpStatus.NOT_FOUND);
    };

    const updateProduct = await this.productService.updateProduct(+id, updateProductDto);

    return {
      statusCode: 200,
      message: 'La modification du produit a bien été prise en compte',
      data: updateProduct,
    };
  };

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {

    const productExist = await this.productService.findOneById(+id);

    if (!productExist) {
      throw new HttpException("Le produit n'existe pas", HttpStatus.NOT_FOUND);
    };

    const deleted = this.productService.deleteProduct(+id);

    return {
      statusCode: 200,
      message: "Ce produit a bien été supprimé",
    };
  };
};
