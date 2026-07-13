import boto3
from pathlib import Path

# Initialize the Bedrock Runtime client
bedrock = boto3.client(
    "bedrock-runtime",
    region_name="us-east-1"
)

MODEL_ID = "amazon.nova-lite-v1:0"


def load_prompt(tool: str) -> str:
    """
    Load the prompt template for the selected tool.
    """
    prompt_file = Path(__file__).parent / "prompts" / f"{tool}.txt"

    if not prompt_file.exists():
        raise FileNotFoundError(f"Prompt file '{tool}.txt' not found.")

    return prompt_file.read_text(encoding="utf-8")


def generate_response(tool: str, user_input: str) -> str:
    """
    Generate an AI response using Amazon Bedrock.
    """

    system_prompt = load_prompt(tool)

    full_prompt = f"""
{system_prompt}

User Input:
{user_input}
"""

    response = bedrock.converse(
        modelId=MODEL_ID,
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "text": full_prompt
                    }
                ]
            }
        ]
    )

    return response["output"]["message"]["content"][0]["text"]