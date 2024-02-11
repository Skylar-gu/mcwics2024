import os
from openai import OpenAI
from articleProcessing import articles_list

content1 = articles_list[0]["content"]


def get_key():
    GPT_KEY_FILE = '/Users/skylargu/Desktop/Chatgpt key.txt'
    # GPT_KEY_FILE = "/Users/skylargu/Desktop/Desktop - Skylar’s MacBook Air/Academics/API_code.txt"
    file = open(GPT_KEY_FILE, "r")
    key = file.read()
    file.close()
    return key


client = OpenAI(
    api_key=get_key()
)

prompt = '''Give me the score of this text on these 5 categories
- give me the result as a python dictionary named emotion_scores
- scores should range from 0 to 10 with one decimal place: appropriateness, readability, neutrality, educational value, and positivity
- child appropriateness: consider explicit content, violence, swearing etc
- readability: 1 for child in grade 1, 2 for grade 2, ... 10 for grade 10 (or adult)
- neutrality: political/social neutrality
- give me nothing except the dictionary (no other words)'''


def detect_emotion(content):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": f"{prompt} news article: {content}"},
                ],
            }
        ],
        max_tokens=300,
    )

    return response.choices[0].message.content


test1 = detect_emotion(content1)
print(test1)
