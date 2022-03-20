from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)


@app.get("/api/hoge")
def index1():
    return {"message": "hogehoge"}


@app.get("/api/fuga")
def index2():
    return {"message": "fugafuga"}

@app.get("/api/todo_list")
def getTodoList():
    return [
        {
            "id"    : 1,
            "title" : "起きる",
            "done"  : False
        },
        {
            "id"    : 2,
            "title" : "着替える",
            "done"  : False
        }
    ]

# Dockerfileからuvicorn(FastAPIサーバー）を起動する
if __name__ == "__main__":
    uvicorn.run(
        app="main:app",
        host="0.0.0.0",
        reload=True,
        port=3000,
        log_level="debug",)
