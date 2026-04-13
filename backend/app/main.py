from fastapi import FastAPI

app = FastAPI()

# root endpoint
@app.get("/")
async def readroot():
    return {"message" : "hello"}  # response in JSON format

# endpoint with an input
@app.get("/items/{item_id}")
async def read_item(item_id : int):
    return {"item_id" : item_id}