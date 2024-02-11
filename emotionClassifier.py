from transformers import pipeline
from articleProcessing import articles_list
import os

# Set the environment variable
os.environ['TOKENIZERS_PARALLELISM'] = 'false'

classifier = pipeline(task="text-classification", model="SamLowe/roberta-base-go_emotions", top_k=None)

content1 = articles_list[0]["content"]
sentences = [content1]

model_outputs = classifier(sentences)
emotion_outputs = model_outputs[0]

sadness = emotion_outputs[1]
neutral = emotion_outputs[3]
joy = emotion_outputs[8]
anger = emotion_outputs[12]
grief = emotion_outputs[14]
fear = emotion_outputs[19]
optimism = emotion_outputs[20]


def sadness_score():
  return round(sadness["score"], 2)

def neutral_score():
  return round(neutral["score"], 2)

def joy_score():
  return round(joy["score"], 2)

def anger_score():
  return round(anger["score"], 2)

def grief_score():
  return round(grief["score"], 2)

def fear_score():
  return round(fear["score"], 2)

def optimism_score():
  return round(optimism["score"], 2)


# print(model_outputs[0])
# print(sadness_score)

