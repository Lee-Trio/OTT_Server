from extractors.recommend import *
import sys
sys.stdout.reconfigure(encoding='utf-8')

# 매개변수 읽기
df_path = sys.argv[1] if len(sys.argv) > 1 else None
df2_path = sys.argv[2] if len(sys.argv) > 2 else None

# 파일 내용 읽기
df_content = open(df_path, 'r', encoding='utf-8').read()
df2_content = open(df2_path, 'r', encoding='utf-8').read()

# JSON 데이터 파싱
df = pd.read_json(df_content)
df2 = pd.read_json(df2_content)

# 추천 받기
recommended_contents = get_recommendations_wishlist(df, df2)

# 데이터프레임을 사전의 리스트로 변환
result_data = [item.to_dict(orient='records') for item in recommended_contents]

# 데이터를 JSON으로 출력
print(json.dumps(result_data, ensure_ascii=False))