from extractors.recommend import *

# add_key_data.json, wishlist.json 파일을 이용하여 콘텐츠 추천
# 추천된 콘텐츠를 recommended_contents.json 파일에 저장

file_root = './datas'
df = pd.read_json(f'{file_root}/add_key_data.json')
df2 = pd.read_json(f'{file_root}/wishlist.json')

recommended_contents = get_recommendations_wishlist(df, df2)

# 콘텐츠 데이터를 하나로 합쳐 json으로 변환 후 저장
recommended_df = pd.concat(recommended_contents, ignore_index=True)
json_data = recommended_df.to_json(orient='records', lines=False, force_ascii=False, date_format='iso', default_handler=str, indent=4)

with open(f'{file_root}/recommended_contents.json', 'w', encoding='utf-8') as f:
    f.write(json_data)
