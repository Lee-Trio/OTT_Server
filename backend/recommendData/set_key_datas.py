from extractors.recommend import *

# all_data.json에서
# add_key_data.json 파일 생성
# 전체 데이터가 변경되었을 때만 실행하면 됨

file_root = './datas'
with open(f'{file_root}/all_data.json', 'r', encoding='UTF8') as f:
    data = json.load(f)

print('명사 추출중...')
nouns = get_nouns(data)
    
# 빈도수 구하기
print('빈도 추출중...')
frequency = get_frequency(nouns)

# 키 값에서 f~r 까지 데이터를 추출
print('키 값 추출중...')
key_lst = get_key_values(frequency, f=0.05, r=0.4)

# 키 값을 데이터프레임에 추가 후, json파일에 저장
file_path = f'{file_root}/all_data.json'
df = pd.read_json(file_path)

print('키 값 추가중...')
add_key_data = add_key(key_lst, df)
with open(f'{file_root}/add_key_data.json', 'w', encoding="UTF-8") as f :
    json.dump(add_key_data, f, indent=4, ensure_ascii=False)

print('완료')
