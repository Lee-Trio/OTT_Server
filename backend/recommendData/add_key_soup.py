from extractors.recommend import *

# all_data.json에서
# add_key_data.json 파일 생성
# 전체 데이터가 변경되었을 때만 실행하면 됨

######################################### 키값 추가
file_root = "./datas"

with open(f'{file_root}/key_list.json', 'r', encoding='UTF8') as f:
    key_list = json.load(f)

df = pd.read_json(f'{file_root}/db_all_data.json')

print('키 값 추가중...')
add_key_list = add_key(key_list, df)
print(type(add_key_list))
print(add_key_list[0])

########################################### soup 추가

df = pd.DataFrame(add_key_list)
df = set_element_three(df)

print('soup 추가중')
df['soup'] = ''
idx = 0
for _ in df['description']:
    df['soup'][idx] = f"{df['key'][idx]} {df['cast'][idx]} {df['director'][idx]} {df['genre'][idx]}".strip()
    idx += 1

print('soup 추가 완료')
# ott가 int로 저장이 안되서 str로 일단 저장해둠
results_data = []
for i in range(df.shape[0]):
    data = {
        "title": df['title'][i],
        "href": df['href'][i],
        "img": df['img'][i],
        "ott": str(df['ott'][i]),
        "mt": df['mt'][i],
        "description": df['description'][i],
        "genre": df['genre'][i],
        "director": df['director'][i],
        "cast": df['cast'][i],
        "year": df['year'][i],
        "film_rating": df['film_rating'][i],
        "key": df['key'][i],
        "soup": df["soup"][i]
    }
    results_data.append(data)

with open(f'{file_root}/add_soup_data.json', 'w', encoding="UTF-8") as f :
    json.dump(results_data, f, indent=4, ensure_ascii=False)

print('완료')