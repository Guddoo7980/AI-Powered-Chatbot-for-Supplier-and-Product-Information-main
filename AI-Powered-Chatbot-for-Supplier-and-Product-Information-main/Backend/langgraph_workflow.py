from langgraph import LangGraph, Node
from services.database_service import get_db
from services.llm_service import summarize_text
from models.product import Product
from models.supplier import Supplier

class FetchProductInfo(Node):
    def run(self, query, db):
        products = db.query(Product).filter(Product.name.ilike(f"%{query}%")).all()
        return products

class FetchSupplierInfo(Node):
    def run(self, query, db):
        suppliers = db.query(Supplier).filter(Supplier.product_categories.ilike(f"%{query}%")).all()
        return suppliers

class SummarizeSupplierInfo(Node):
    def run(self, supplier_info):
        summary = summarize_text(supplier_info)
        return summary

graph = LangGraph()
graph.add_node(FetchProductInfo())
graph.add_node(FetchSupplierInfo())
graph.add_node(SummarizeSupplierInfo())