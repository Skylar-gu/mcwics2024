import requests
import json

API_KEY_FILE = '/Users/skylargu/Desktop/NewAPI key.txt'

f = open(API_KEY_FILE, "r")
API_key = f.read().strip()

key_word = "banana"
# key_word = input("Enter keyword: ")
if not isinstance(key_word, str) or ' ' in key_word:
    raise TypeError("Please input one word")

date = "2024-02-05"
# date = input("Enter date (year-month-day): ")  # format: 2024-02-05

url = ('https://newsapi.org/v2/everything?'
       f'q={key_word}&'
       f'from={date}&'
       # 'sources=bbc-news&'
       # 'country=canada&'
       'sortBy=popularity&'
       'language=en&'
       f'apiKey={API_key}')

response = requests.get(url)
json_response = response.json()

# load data
data = json_response["articles"]

articles_list = []

for i in range(4):
    current_data = data[i]
    # parse different components
    title = current_data["title"]
    description = current_data["description"]
    # url = current_data["url"]
    content = current_data["content"]
    source = current_data["source"]["name"]

    articles_list.append({
        "title": title,
        "description": description,
        "content": content,
        "source": source
    })

# title1 = articles_list[0]["title"]
# title2 = articles_list[0]["title"]
# title3 = articles_list[0]["title"]
# title4 = articles_list[0]["title"]
# title5 = articles_list[0]["title"]

# print(articles_list)
