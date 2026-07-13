import boto3
import json

client = boto3.client(
    "bedrock-runtime",
    region_name="us-east-1"
)

model_id = "amazon.nova-lite-v1:0"

response = client.converse(
    modelId=model_id,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "text": "Say hello from Amazon Bedrock and tell me what ProductivityOS is in one sentence."
                }
            ]
        }
    ]
)

print(json.dumps(response, indent=2, default=str))