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

# example of getting the score
sadness_score = sadness["score"]
sadness_score = round(score, 2)

print(model_outputs[0])
print(sadness_score)

