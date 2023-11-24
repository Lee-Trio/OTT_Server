import pandas as pd
import numpy as np
import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from konlpy.tag import Okt
from collections import Counter
import warnings
from pandas.core.common import SettingWithCopyWarning
warnings.filterwarnings("ignore", category=SettingWithCopyWarning)


# 모든 데이터의 description에서 명사를 추출
def get_nouns(data):
    okt = Okt()

    data_lst = []
    for d in data:
        data_lst.extend(okt.nouns(d['description']))

    return data_lst

# 문자 빈도가 많은순으로 정렬해서 word 리턴
def get_frequency(data):
    # Counter를 사용하여 빈도수 계산
    counter = Counter(data)

    # 빈도수에 따라 정렬된 항목 리스트 생성
    word = [item for item, count in counter.most_common()]

    return word


# 키 값을 추출하여 f~r 까지의 데이터 리턴
def get_key_values(data, f=0.05, r=0.4):
    f = int(len(data) * f) 
    r = int(len(data) * r)

    data = data[f:r]

    return data



# 키 값 콘텐츠 데이터에 추가된 데이터 리턴
def add_key(key_lst, df):
    # okt 클래스 선언
    okt = Okt()

    # 데이터 프레임에 key 추가
    df['key'] = ''

    idx = 0
    # 설명을 명사 단위로 분리하여 key값과 일치한 값이 있으면 추가
    for desc in df['description']:
        nouns_lst = ''
        for d in okt.nouns(desc):
            if d in key_lst:
                nouns_lst = f'{nouns_lst} {d}'
        df['key'][idx] = nouns_lst[1:]
        idx += 1

    # null값이 있으면 ''으로 채워넣음
    df = df.fillna(value='')

    # key값이 추가된 데이터를 저장
    results_data = []
    for i in range(df.shape[0]):
        data = {
            "title": df['title'][i],
            "href": df['href'][i],
            "img": df['img'][i],
            "ott": df['ott'][i],
            "mt": df['mt'][i],
            "description": df['description'][i],
            "genre": df['genre'][i],
            "director": df['director'][i],
            "cast": df['cast'][i],
            "year": df['year'][i],
            "film_rating": df['film_rating'][i],
            "season": df['season'][i],
            "duration": df['duration'][i],
            "key": df['key'][i]
        }
        results_data.append(data)

    return results_data


# 요소를 3개만 가져오게 함
def set_element_three(df):
    features = ['cast', 'director', 'key', 'genre']
    for feature in features:
        df[feature] = df[feature].str.split(',').apply(lambda x: ','.join(x[:3]))
    return df


def create_soup(df):
    return f"{df['key']} {df['cast']} {df['director']} {df['genre']}"


def get_cosine_sim(df):
    # df = set_element_three(df)
    df['soup'] = df.apply(create_soup, axis=1)

    # TF-IDF = 단어 빈도-역 문서 빈도
    tfidf = TfidfVectorizer()
    tfidf_matrix = tfidf.fit_transform(df['soup'])

    # 코사인 유사도 구하기
    cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
    return cosine_sim


# 영화의 제목을 입력 받으면 코사인 유사도를 통해 가장 유사도가 높은 상위 10개의 영화 목록 반환
def get_recommendations(title, cosine_sim, df):
  # 컨텐츠 제목으로 인덱스를 찾기 위함, 중복 제거
    indices = pd.Series(df.index, index=df['title']).drop_duplicates()
    # 영화 제목을 통해서 전체 데이터 기준 그 영화의 index 값을 얻기
    idx = indices[title]
    # 코사인 유사도 매트릭스 (cosine_sim)에서 idx에 해당하는 데이터를 (idx, 유사도) 형태로 얻기
    sim_scores = list(enumerate(cosine_sim[idx]))
    # 코사인 유사도 기준으로 내림차순 정렬
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    # 자기 자신을 제외한 10개의 추천 영화를 슬라이싱
    sim_scores = sim_scores[1:11]
    # 추천 영화 목록 10개의 인덱스 정보 추출
    movie_indices = [i[0] for i in sim_scores]
    # 인덱스 정보를 통해 영화 제목 추출
    return df['title'].iloc[movie_indices]


def get_recommendations_data(title, cosine_sim, df, n = 10):
    indices = pd.Series(df.index, index=df['title']).drop_duplicates()
    idx = indices[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:n+1]
    contents_indices = [i[0] for i in sim_scores]
    recommended_contents = df.iloc[contents_indices] 

    return recommended_contents


# 영화의 제목을 입력 받으면 코사인 유사도를 통해 가장 유사도가 높은 상위 10개의 영화 목록 반환
def get_recommendations_wishlist(df, df2):
    df = set_element_three(df)

    # 각 열의 값을 문자열로 변환하여 해당 열에 덮어쓰기
    for col in df2.columns:
        df2[col] = ', '.join(df2[col].astype(str))

    df2 = df2.drop_duplicates()

    # df, df2 합침
    result_df = pd.concat([df2, df], ignore_index=True)
    df = result_df

    df['soup'] = df.apply(create_soup, axis=1)

    tfidf = TfidfVectorizer()
    tfidf_matrix = tfidf.fit_transform(df['soup'])

    # 코사인 유사도 구하기
    cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

    # 영화 제목으로 인덱스를 찾기 위함, 중복 제거
    indices = pd.Series(df.index, index=df['title']).drop_duplicates()

    # 영화의 제목을 입력 받으면 코사인 유사도를 통해 가장 유사도가 높은 상위 10개의 영화 목록 반환

    idx = indices[df['title'][0]]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:21]
    contents_indices = [i[0] for i in sim_scores]

    # rec를 활용해 콘텐츠 데이터 저장
    recommended_contents = [get_data(df, idx) for idx in contents_indices]
    return(recommended_contents)

def get_data(df, idx):
  return df.iloc[[idx]]

def get_data_title(title, indices):
  idx = indices[title]
  return get_data(idx)