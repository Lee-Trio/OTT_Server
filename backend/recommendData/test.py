import sys
import json

# 입력 데이터 받기
plain_text_data = sys.stdin.read()

# 받은 데이터 출력
print('Python에서 받은 데이터:', plain_text_data)

# JSON 형식으로 파싱
try:
    json_data = json.loads(plain_text_data)
    print('JSON으로 파싱된 데이터:', json_data)
except json.JSONDecodeError as e:
    print('JSON 파싱 오류:', e)
