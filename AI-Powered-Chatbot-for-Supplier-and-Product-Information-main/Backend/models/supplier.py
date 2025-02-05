from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from . import Base

class Supplier(Base):
    __tablename__ = 'suppliers'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    contact_info = Column(String, nullable=False)
    product_categories = Column(String, nullable=False)

    products = relationship("Product", back_populates="supplier")