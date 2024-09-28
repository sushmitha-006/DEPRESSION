import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import joblib

# Sample dataset
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
        "loneliness", "anxious", "fear", "tension", "loneliness"
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

# Split the data into training and testing sets
X_train, X_test, y_train_emotion, y_test_emotion, y_train_cause, y_test_cause = train_test_split(X, y_emotion, y_cause, test_size=0.2, random_state=42)

# Train the emotion classifier
emotion_classifier = LogisticRegression()
emotion_classifier.fit(X_train, y_train_emotion)

# Train the cause classifier
cause_classifier = LogisticRegression()
cause_classifier.fit(X_train, y_train_cause)
# Predict emotions and causes for the test set
y_pred_emotion = emotion_classifier.predict(X_test)
y_pred_cause = cause_classifier.predict(X_test)

# Calculate accuracy
emotion_accuracy = accuracy_score(y_test_emotion, y_pred_emotion)
cause_accuracy = accuracy_score(y_test_cause, y_pred_cause)

print(f"Emotion Classifier Accuracy: {emotion_accuracy * 100:.2f}%")
print(f"Cause Classifier Accuracy: {cause_accuracy * 100:.2f}%")

def predict_emotion_and_cause(sentence):
    X_new = vectorizer.transform([sentence])
    predicted_emotion = label_encoder_emotion.inverse_transform(emotion_classifier.predict(X_new))
    predicted_cause = label_encoder_cause.inverse_transform(cause_classifier.predict(X_new))
    return predicted_emotion[0], predicted_cause[0]

# Test the function with a new sentence
new_sentence = "I am feeling anxious about my financial situation."
emotion, cause = predict_emotion_and_cause(new_sentence)
print(f"Predicted Emotion: {emotion}, Predicted Cause: {cause}")


# Save the model
joblib.dump(emotion_classifier, 'model.pkl')

# Save the TF-IDF vectorizer
joblib.dump(vectorizer, 'vectorizer.pkl')

