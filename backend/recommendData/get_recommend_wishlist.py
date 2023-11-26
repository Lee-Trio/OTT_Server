from extractors.recommend import *
import os
import sys
import json

# df2_content = sys.argv[1] if len(sys.argv) > 1 else None
# 환경 변수에서 데이터 읽기
json_data_string = os.environ.get('JSON_DATA')

# JSON 형식의 데이터로 변환
# df2_content = json.dumps(json_data_string)
df2_content = json.loads(json_data_string)
# print([{"type": type(df2_content)}])

file_path = './recommendData/datas/add_key_data.json'
df = pd.read_json(file_path)
# df2_content가 None이 아닌 경우에만 데이터프레임으로 변환
if df2_content is not None:
    # print(df2_content)
    # df2 = pd.read_json(df2_content)
    df2 = pd.DataFrame(df2_content)
else:
    # df2_content가 None인 경우, 빈 데이터프레임 생성
    df2 = pd.DataFrame()

recommended_contents = get_recommendations_wishlist(df, df2)

# 데이터프레임을 사전의 리스트로 변환
if recommended_contents == None:
    # print(empty)
    pass
else:
    result_data = [item.to_dict(orient='records') for item in recommended_contents]

    # 데이터를 JSON으로 출력
    print(json.dumps(result_data, ensure_ascii=False), end='')


# recommended_df = pd.concat(recommended_contents, ignore_index=True)
# json_data = recommended_df.to_json(orient='records', lines=False, force_ascii=False, date_format='iso', default_handler=str, indent=4)

    # print(json_data)
