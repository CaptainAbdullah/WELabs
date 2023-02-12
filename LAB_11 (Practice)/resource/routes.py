from resource.resource import ProductApi, searchProduct, deleteProd

def initialize_api(api):
    api.add_resource(ProductApi,'/getProd')
    api.add_resource(searchProduct,'/searchProd/<id>')
    api.add_resource(deleteProd,'/deleteProd/<name>')
    # api.add_resource(deleteProd,'/deleteProd/<id>')
    
