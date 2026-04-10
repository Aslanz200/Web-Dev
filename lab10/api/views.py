from rest_framework import viewsets
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['name']
    ordering_fields = ['name', 'price']

    def get_queryset(self):
        queryset = Product.objects.all()

        category = self.request.query_params.get('category')
        is_active = self.request.query_params.get('is_active')

        if category:
            queryset = queryset.filter(category_id=category)
        if is_active == 'true':
            queryset = queryset.filter(is_active=True)
        elif is_active == 'false':
            queryset = queryset.filter(is_active=False)

        return queryset

    @action(detail=False, methods=['get'])
    def active(self, request):
        queryset = Product.objects.filter(is_active=True)
        queryset = SearchFilter().filter_queryset(request, queryset, self)
        queryset = OrderingFilter().filter_queryset(request, queryset, self)
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)