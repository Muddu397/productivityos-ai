from backend.deployment.ai_service import generate_response

response = generate_response(
    tool="planner",
    user_input="""
Finish AWS Builder Challenge blog

Prepare for interview

Complete React frontend

Go to gym
"""
)

print(response)