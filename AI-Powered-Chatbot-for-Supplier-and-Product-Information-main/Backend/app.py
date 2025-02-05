from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from services.database_service import get_db, init_db
from langgraph_workflow import graph

app = FastAPI()

@app.on_event("startup")
def on_startup():
    init_db()

@app.post("/query")
def query_chatbot(query: str, db: Session = Depends(get_db)):
    try:
        result = graph.run(query, db)
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))