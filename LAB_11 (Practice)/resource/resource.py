from flask import jsonify, Response, request
from flask_restful import Resource
from database.models import Product

class ProductApi(Resource):
    def get(self):
        # Product(name = 'Harry Potter', description = 'A novel by J.K. Rowling', price=25.50).save()
        data = Product.objects.all().to_json()
        print(data)
        return Response(data, mimetype='application/json', status=200)
    
    def post(self):
        body = request.get_json()
        data = Product(**body).save()
        id = data.id
        return {'id' :str(id)}, 200
    
    def delete(self):
        body = request.get_json()
        Product.objects.get(name=body).delete()
    
class searchProduct(Resource):
    def get(self, id):
        data = Product.objects.get(id=id).to_json()
        return Response(data, mimetype="application/json",status=200)

class deleteProd(Resource):
    def delete(self,name):
        Product.objects.get(name=name).delete()
 
    def delete(self,id):
        Product.objects.get(id=id).delete()
    # Can we define these methods? or should we define separate classes?
    