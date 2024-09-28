from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LogisticRegression

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from the React frontend

# Sample dataset (same as before)
data = {
    'sentence': [
        "I feel anxious about my career prospects.",
        "Money issues are causing me great tension.",
        "I am lonely without my partner.",
        "Career pressures are making me anxious.",
        "Relationship problems make me feel lonely.",
        "I'm in fear of losing my job.",
        "I have tension because of financial problems.",
        "Loneliness strikes when I think of my career.",
        "Anxious thoughts about my money situation.",
        "Fear of failing in my career.",
        "I feel tension in my relationship.",
        "Loneliness due to lack of money.",
        "Anxious about the future of my relationship.",
        "Fear about career changes.",
        "Tension due to financial instability.",
        "Loneliness from recent breakup.",
        "Anxiety over career advancement.",
        "Fear from losing money.",
        "Tension between career and personal life.",
        "Loneliness from relationship issues."
    ],
    'emotion': [
        "anxious", "tension", "loneliness", "anxious", "loneliness",
        "fear", "tension", "loneliness", "anxious", "fear",
        "tension", "loneliness", "anxious", "fear", "tension",
        "loneliness", "fear", "tension", "loneliness", "fear"  # Added one more element to match the length
    ],
    'cause': [
        "career", "money", "relationship", "career", "relationship",
        "career", "money", "career", "money", "career",
        "relationship", "money", "relationship", "career", "money",
        "relationship", "career", "money", "career", "relationship"
    ]
}


df = pd.DataFrame(data)

# Initialize the TF-IDF Vectorizer
vectorizer = TfidfVectorizer()

# Fit and transform the sentences
X = vectorizer.fit_transform(df['sentence'])

# Convert emotion and cause labels to numerical format
label_encoder_emotion = LabelEncoder()
label_encoder_cause = LabelEncoder()

y_emotion = label_encoder_emotion.fit_transform(df['emotion'])
y_cause = label_encoder_cause.fit_transform(df['cause'])

# Train the classifiers
emotion_classifier = LogisticRegression()
cause_classifier = LogisticRegression()

emotion_classifier.fit(X, y_emotion)
cause_classifier.fit(X, y_cause)

# Function to predict emotion and cause from a sentence
def predict_emotion_and_cause(sentence):
    X_new = vectorizer.transform([sentence])
    predicted_emotion = label_encoder_emotion.inverse_transform(emotion_classifier.predict(X_new))
    predicted_cause = label_encoder_cause.inverse_transform(cause_classifier.predict(X_new))
    return predicted_emotion[0], predicted_cause[0]

# Route to handle prediction
@app.route('/predict', methods=['POST'])
def predict():
    sentence = request.json['sentence']
    emotion, cause = predict_emotion_and_cause(sentence)
    return jsonify({'emotion': emotion, 'cause': cause})

if __name__ == '__main__':
    app.run(debug=True)


