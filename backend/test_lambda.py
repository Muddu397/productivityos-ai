import json
from backend.deployment.lambda_function import lambda_handler

event = {
    "body": json.dumps({
        "tool": "planner",
        "userInput": """
Finish AWS Builder Challenge

Update LinkedIn

Apply for AI Engineer jobs

Prepare interview
"""
    })
}

response = lambda_handler(event, None)

print(response)