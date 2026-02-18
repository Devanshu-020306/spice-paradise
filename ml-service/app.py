from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

app = Flask(__name__)
CORS(app)

menu_data = []

def load_menu_data():
    global menu_data
    try:
        df = pd.read_csv('data/menu_items.csv')
        menu_data = df.to_dict('records')
    except:
        menu_data = []

@app.route('/recommend', methods=['GET'])
def recommend():
    if not menu_data:
        return jsonify([])
    
    df = pd.DataFrame(menu_data)
    popular = df.nlargest(5, 'orderCount') if 'orderCount' in df.columns else df.head(5)
    return jsonify(popular.to_dict('records'))

@app.route('/similar/<item_id>', methods=['GET'])
def similar_items(item_id):
    if not menu_data:
        return jsonify([])
    
    df = pd.DataFrame(menu_data)
    df['combined'] = df['name'] + ' ' + df['description'] + ' ' + df['category']
    
    tfidf = TfidfVectorizer(stop_words='english')
    tfidf_matrix = tfidf.fit_transform(df['combined'])
    cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)
    
    idx = df[df['_id'] == item_id].index[0] if item_id in df['_id'].values else 0
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)[1:6]
    
    indices = [i[0] for i in sim_scores]
    return jsonify(df.iloc[indices].to_dict('records'))

if __name__ == '__main__':
    load_menu_data()
    app.run(port=5001, debug=True)
