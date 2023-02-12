from .db import db

class Product(db.Document):
    name = db.StringField(required = True)
    description = db.StringField()
    price = db.FloatField(required = True)

