import json
from ai_service import generate_response


def lambda_handler(event, context):
    try:
        body = json.loads(event.get("body", "{}"))

        tool = body.get("tool", "planner")
        user_input = body.get("userInput", "")

        if not user_input.strip():
            return {
                "statusCode": 400,
                "headers": {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                "body": json.dumps({
                    "error": "userInput is required."
                })
            }

        ai_response = generate_response(tool, user_input)

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps({
                "tool": tool,
                "response": ai_response
            })
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps({
                "error": str(e)
            })
        }