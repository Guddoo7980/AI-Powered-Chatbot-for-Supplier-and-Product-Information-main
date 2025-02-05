# AI-Powered Chatbot for Supplier and Product Information

## Overview

This project is an AI-powered chatbot that allows users to query a product and supplier database using natural language. The chatbot interacts with an open-source LLM (Large Language Model) and utilizes the LangGraph framework for agent workflows to fetch relevant information from a MySQL/PostgreSQL database and summarize the data using the LLM.

## Tech Stack

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: A promise-based HTTP client for making API requests.

### Backend
- **FastAPI**: A modern, fast (high-performance), web framework for building APIs with Python 3.6+.
- **SQLAlchemy**: The Python SQL toolkit and Object-Relational Mapping (ORM) library.
- **LangGraph**: A framework for building agent workflows.
- **Transformers**: A library from Hugging Face for state-of-the-art Natural Language Processing.

### Database
- **PostgreSQL**: A powerful, open-source object-relational database system.

## Features

- **Natural Language Querying**: Users can input queries like "Show me all products under brand X" or "Which suppliers provide laptops?".
- **Data Retrieval**: The chatbot fetches relevant data from the database.
- **Data Summarization**: Supplier data is summarized using an open-source LLM.
- **Graceful Error Handling**: The system handles missing or incorrect queries gracefully.


UI :

![image](https://github.com/user-attachments/assets/a2aa0156-95f7-46b6-a704-fce0382e9b4f)
![image](https://github.com/user-attachments/assets/ec923995-a435-4f9e-b322-5113905717b0)


## Directory Structure ##

```filetree
ai-powered-chatbot
├── backend
│   ├── app.py
│   ├── langgraph_workflow.py
│   ├── models
│   │   ├── __init__.py
│   │   ├── product.py
│   │   └── supplier.py
│   ├── services
│   │   ├── database_service.py
│   │   └── llm_service.py
│   ├── requirements.txt
│   └── README.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── Chatbot.jsx
│   │   │   ├── ChatInput.jsx
│   │   │   ├── QueryHistory.jsx
│   │   │   └── ProductComparison.jsx
│   │   ├── services
│   │   │   └── api.js
│   │   ├── redux
│   │   │   ├── actions.js
│   │   │   ├── reducers.js
│   │   │   └── store.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   ├── package.json
│   └── README.md
