# OTT_Server

![TodayOTT](https://github.com/Lee-Trio/OTT_Server/assets/109287950/bb9347a5-ed7f-4e7b-9709-eccb787cfae9)

## 설명
ToDayOTT는 사용자 맞춤 OTT서비스를 목적으로 합니다.
사용자는 이 소프트 웨어를 이용해 아래와 같은 기능을 사용할수 있습니다.
1. OTT 컨탠츠를 빠르게 찾기
2. 사용자 맞춤 OTT 서비스 추천
3. 사용자 맞춤 OTT 컨탠츠 추천

## 개발 환경
- Ubuntu 22.04.04 LTS
- MongoDB 6.0.11
- Node.JS 20.9.0
- Visual Stdio Code 1.88.1
- Docker 26.0.1
- Yarn 1.22.19
- npm 10.1.0
- Python 3.10.12

## 설치 방법
해당 레퍼지토리는 ToDayOTT Server의 사용방법만 제시하고 있습니다.

해당 레퍼지토리를 clone 을 한 다음 레퍼지토리 클론이 위치한 폴더로 들어가주세요.
```bash
cd backend
pip install pandas
pip install numpy
pip install scikit-learn
pip install konlpy
yarn install
```

```bash
mkdir securities
```
이후 CA(인증 기관) 에서 인증서를 받습니다.
공개키와 개인키를 securities에 넣어줍니다.


```vi .env
# port number
PORT=<port>

# coolsms api Key
MY_COOLSMS_API_KEY = <api_key>
MY_COOLSMS_SECRET_API_KEY = <secret_api_key>

# email
MY_EMAIL = <email>
MY_GOOGLE_PASSWORD = <email_password>

# phone
PHONENUMBER = <number>

# Search Limit
LIMIT = 20

# MongoDB URI
# MONGO_URI=mongodb://localhost:27017/<db-name>
CONTENTDB=mongodb://localhost:27017/contents_data
RANKINGDB=mongodb://localhost:27017/ranking_data
USERDB=mongodb://localhost:27017/user_data

# key 
SECRET_KEY = <secret_key>
```
.env 파일을 생성하셔서 위와 같은 내용을 입력하시고 <> 로 되어있는 것을 변경해주세요.

## 실행 방법
```bash
sudo service mongod start
yarn start:dev
```
이후 "Start Today Ott HTTPS Server with Cloudflare..." 가 나오면 실행이 된것입니다.


## API 
API 내용은 Swagger Docs를 확인 가능합니다
https://localhost/api-docs/

