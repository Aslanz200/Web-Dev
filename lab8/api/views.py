from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from .models import Product , Category

class ProductListView(View):
    def get(self , request):
        products = list(Product.objects.all().values())
        return JsonResponse(products , safe=False)
    

class ProductDetailView(View):
    def get(self , request , id):
        try:
            product = Product.objects.get(id=id)
            return JsonResponse({
                "id" : product.id,
                "name" : product.name,
                "price" : product.price,
                "description" : product.description,
                "count" : product.count,
                "is_active" : product.is_active,
                "category" : product.category_id,
            }) 
        except Product.DoesNotExist:
            return JsonResponse({"error" : "Not found"})
        

class CategoryListView(View):
    def get(self , request):
        categories = list(Category.objects.all().values())
        return JsonResponse(categories , safe=False)
    

class CategoryDetailView(View):
    def get(self , request , id):
        try:
            category = Category.objects.get(id=id)
            return JsonResponse({
                "id" : category.id,
                "name" : category.name
            })
        except Category.DoesNotExist:
            return JsonResponse({"error" : "Not found"})
        

class CategoryProductsView(View):
    def get(self , request , id):
        try:
            category = Category.objects.get(id=id)
            products = list(category.products.all().values())
            return JsonResponse(products , safe=False)
        except Category.DoesNotExist:
            return JsonResponse({"error": "Not found"})