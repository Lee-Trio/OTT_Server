/**
 * @swagger
 * /temp/all_data:
 *   get:
 *     summary:
 *     tags: [temp]
 *     responses:
 *       200:
 *         description: 성공한 경우
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   title:
 *                     type: String
 *                     example: 잉투기
 *                   href:
 *                     type: URL
 *                     example: https://watcha.com/contents/mW4LMVl
 *                   img:
 *                     type: URL
 *                     example: https://images.justwatch.com/poster/190224047/s166/ingtoogi-the-battle-of-internet-trolls
 *                   OTT:
 *                     type: String
 *                     example: Watcha
 *                   mt:
 *                     type: Strnig
 *                     example: movie
 *                   description:
 *                     type: String
 *                     example: 인터넷 커뮤니티에서 ‘칡콩팥’으로 활동하는 태식은 같은 커뮤니티에서 사사건건 대립하는 ‘젖존슨’에게 속아 급습을 당하고, ‘젖존슨’에게 복수를 다짐하며 종합격투기를 배우기 시작하면서 격투소녀 영자를 만난다.
 *                   genre:
 *                     type: String
 *                     example: 액션
 *                   director:
 *                     type: String
 *                     example: 엄태호
 *                   cast:
 *                     type: String
 *                     example: 엄태구, 류혜영, 권율, 박종환, 김준배, 김희상, 정영기, 길해연, 오희준, 차청화, 박소담
 *                   year:
 *                     type: String
 *                     example: 2020
 *                   film_rating:
 *                     type: String
 *                     example: 15
 *                   duration:
 *                     type: String
 *                     example: 1시간 38분
 * /temp/allDataCount:
 *   get:
 *     summary: 콘텐츠 갯수 가져오기
 *     tags: [temp]
 *     responses:
 *       200:
 *         description: "총 갯수는: 3500"
 * /temp/allDataList:
 *   get:
 *     summary: 모든 콘텐츠 데이터 가져오기
 *     tags: [temp]
 *     responses:
 *       200:
 *         description: 성공한 경우
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   title:
 *                     type: String
 *                     example: "러블리 라이터"
 *                   href:
 *                     type: URL
 *                     example: https://www.tving.com/contents/P001616613
 *                   img:
 *                     type: URL
 *                     example: https://image.tving.com/upload/cms/caip/CAIP0900/P001616613.jpg/dims/resize/480
 *                   OTT:
 *                     type: String
 *                     example: TVING
 *                   description:
 *                     type: String
 *                     example: 판타지 작가인 진이 쓴 BL 소설이 대형 방송사의 드라마로 제작되면서, 출판사 편집장은 또다시 진에게 BL 소설을 써 달라고 한다. 진은 편집장 부탁에 못 이겨 한 편만 더 쓰겠다고 승낙하고, 방송국 오디션에 참관하는데 넙십이라는 배우에게 봉변을 당한다. 넙십이 지낼 곳이 없다며 한 달만 같이 살아달라는 부탁을 하여 둘은 한집에서 같이 생활하게 되는데...
 *                   film_rating:
 *                     type: String
 *                     example: 15+
 *                   year:
 *                     type: String
 *                     example: 2020
 *                   genre:
 *                     type: String
 *                     example: 드라마
 *                   distributor:
 *                     type: String
 *                     example: 엔케이컨텐츠
 *                   season:
 *                     type: String
 *                     example: 시즌 1개
 *                   director:
 *                     type: String
 *                     example: 번딧 신타나파라디
 *                   cast:
 *                     type: String
 *                     example: 까오, 업
 *                   original:
 *                     type: Number
 *                     example: 0
 * /temp/oneDataWithNumber:
 *   get:
 *     summary: 하나의 콘텐츠 데이터 가져오기
 *     tags: [temp]
 *     parameters:
 *       - in: 가져올 ID 입력
 *         name: dataNumber
 *         type: int
 *     responses:
 *       200:
 *         description: 성공한 경우
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   title:
 *                     type: String
 *                     example: "러블리 라이터"
 *                   href:
 *                     type: URL
 *                     example: https://www.tving.com/contents/P001616613
 *                   img:
 *                     type: URL
 *                     example: https://image.tving.com/upload/cms/caip/CAIP0900/P001616613.jpg/dims/resize/480
 *                   OTT:
 *                     type: String
 *                     example: TVING
 *                   description:
 *                     type: String
 *                     example: 판타지 작가인 진이 쓴 BL 소설이 대형 방송사의 드라마로 제작되면서, 출판사 편집장은 또다시 진에게 BL 소설을 써 달라고 한다. 진은 편집장 부탁에 못 이겨 한 편만 더 쓰겠다고 승낙하고, 방송국 오디션에 참관하는데 넙십이라는 배우에게 봉변을 당한다. 넙십이 지낼 곳이 없다며 한 달만 같이 살아달라는 부탁을 하여 둘은 한집에서 같이 생활하게 되는데...
 *                   film_rating:
 *                     type: String
 *                     example: 15+
 *                   year:
 *                     type: String
 *                     example: 2020
 *                   genre:
 *                     type: String
 *                     example: 드라마
 *                   distributor:
 *                     type: String
 *                     example: 엔케이컨텐츠
 *                   season:
 *                     type: String
 *                     example: 시즌 1개
 *                   director:
 *                     type: String
 *                     example: 번딧 신타나파라디
 *                   cast:
 *                     type: String
 *                     example: 까오, 업
 *                   original:
 *                     type: Number
 *                     example: 0
 * /temp/oneDataWithTitle:
 *   get:
 *     summary: 하나의 제목 콘텐츠 데이터 가져오기
 *     tags: [temp]
 *     parameters:
 *       - in: 가져올 Title 입력
 *         name: dataTitle
 *         type: String
 *     responses:
 *       200:
 *         description: 성공한 경우
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   title:
 *                     type: String
 *                     example: "러블리 라이터"
 *                   href:
 *                     type: URL
 *                     example: https://www.tving.com/contents/P001616613
 *                   img:
 *                     type: URL
 *                     example: https://image.tving.com/upload/cms/caip/CAIP0900/P001616613.jpg/dims/resize/480
 *                   OTT:
 *                     type: String
 *                     example: TVING
 *                   description:
 *                     type: String
 *                     example: 판타지 작가인 진이 쓴 BL 소설이 대형 방송사의 드라마로 제작되면서, 출판사 편집장은 또다시 진에게 BL 소설을 써 달라고 한다. 진은 편집장 부탁에 못 이겨 한 편만 더 쓰겠다고 승낙하고, 방송국 오디션에 참관하는데 넙십이라는 배우에게 봉변을 당한다. 넙십이 지낼 곳이 없다며 한 달만 같이 살아달라는 부탁을 하여 둘은 한집에서 같이 생활하게 되는데...
 *                   film_rating:
 *                     type: String
 *                     example: 15+
 *                   year:
 *                     type: String
 *                     example: 2020
 *                   genre:
 *                     type: String
 *                     example: 드라마
 *                   distributor:
 *                     type: String
 *                     example: 엔케이컨텐츠
 *                   season:
 *                     type: String
 *                     example: 시즌 1개
 *                   director:
 *                     type: String
 *                     example: 번딧 신타나파라디
 *                   cast:
 *                     type: String
 *                     example: 까오, 업
 *                   original:
 *                     type: Number
 *                     example: 0
 * /temp/multiDataWithNumbers:
 *   get:
 *     summary: 여러개의 콘텐츠 데이터 가져오기
 *     tags: [temp]
 *     parameters:
 *       - in: 가져올 Numbers 입력 예) 35,4,3
 *         name: dataNumbers
 *         type: String
 *     responses:
 *       200:
 *         description: 성공한 경우
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   title:
 *                     type: String
 *                     example: "러블리 라이터"
 *                   href:
 *                     type: URL
 *                     example: https://www.tving.com/contents/P001616613
 *                   img:
 *                     type: URL
 *                     example: https://image.tving.com/upload/cms/caip/CAIP0900/P001616613.jpg/dims/resize/480
 *                   OTT:
 *                     type: String
 *                     example: TVING
 *                   description:
 *                     type: String
 *                     example: 판타지 작가인 진이 쓴 BL 소설이 대형 방송사의 드라마로 제작되면서, 출판사 편집장은 또다시 진에게 BL 소설을 써 달라고 한다. 진은 편집장 부탁에 못 이겨 한 편만 더 쓰겠다고 승낙하고, 방송국 오디션에 참관하는데 넙십이라는 배우에게 봉변을 당한다. 넙십이 지낼 곳이 없다며 한 달만 같이 살아달라는 부탁을 하여 둘은 한집에서 같이 생활하게 되는데...
 *                   film_rating:
 *                     type: String
 *                     example: 15+
 *                   year:
 *                     type: String
 *                     example: 2020
 *                   genre:
 *                     type: String
 *                     example: 드라마
 *                   distributor:
 *                     type: String
 *                     example: 엔케이컨텐츠
 *                   season:
 *                     type: String
 *                     example: 시즌 1개
 *                   director:
 *                     type: String
 *                     example: 번딧 신타나파라디
 *                   cast:
 *                     type: String
 *                     example: 까오, 업
 *                   original:
 *                     type: Number
 *                     example: 0
 * /temp/multiDataWithTitles:
 *   get:
 *     summary: 여러개의 콘텐츠 데이터 가져오기
 *     tags: [temp]
 *     parameters:
 *       - in: 가져올 Numbers 입력 예) 마계학교! 이루마군,오 마이 라이프,스타골프빅리그
 *         name: dataTitles
 *         type: String
 *     responses:
 *       200:
 *         description: 성공한 경우
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   title:
 *                     type: String
 *                     example: "러블리 라이터"
 *                   href:
 *                     type: URL
 *                     example: https://www.tving.com/contents/P001616613
 *                   img:
 *                     type: URL
 *                     example: https://image.tving.com/upload/cms/caip/CAIP0900/P001616613.jpg/dims/resize/480
 *                   OTT:
 *                     type: String
 *                     example: TVING
 *                   description:
 *                     type: String
 *                     example: 판타지 작가인 진이 쓴 BL 소설이 대형 방송사의 드라마로 제작되면서, 출판사 편집장은 또다시 진에게 BL 소설을 써 달라고 한다. 진은 편집장 부탁에 못 이겨 한 편만 더 쓰겠다고 승낙하고, 방송국 오디션에 참관하는데 넙십이라는 배우에게 봉변을 당한다. 넙십이 지낼 곳이 없다며 한 달만 같이 살아달라는 부탁을 하여 둘은 한집에서 같이 생활하게 되는데...
 *                   film_rating:
 *                     type: String
 *                     example: 15+
 *                   year:
 *                     type: String
 *                     example: 2020
 *                   genre:
 *                     type: String
 *                     example: 드라마
 *                   distributor:
 *                     type: String
 *                     example: 엔케이컨텐츠
 *                   season:
 *                     type: String
 *                     example: 시즌 1개
 *                   director:
 *                     type: String
 *                     example: 번딧 신타나파라디
 *                   cast:
 *                     type: String
 *                     example: 까오, 업
 *                   original:
 *                     type: Number
 *                     example: 0
 * /temp/rankingData:
 *   get:
 *     summary: 각 OTT별 랭킹를 가져옴
 *     tags: [temp]
 *     parameters:
 *       - in: 가져올 OTT 입력 예1) Disney Plus 예2) Netflix 예3) Watcha 예4) TVING
 *         name: company
 *         type: String
 *       - in: 가져올 type 입력 예1) all 예2) tv 예3) movie
 *         name: type
 *         type: String
 *     responses:
 *       200:
 *         description: 성공한 경우
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   title:
 *                     type: String
 *                     example: "러블리 라이터"
 *                   href:
 *                     type: URL
 *                     example: https://www.tving.com/contents/P001616613
 *                   img:
 *                     type: URL
 *                     example: https://image.tving.com/upload/cms/caip/CAIP0900/P001616613.jpg/dims/resize/480
 *                   OTT:
 *                     type: String
 *                     example: TVING
 * /temp/rankingDataTemp:
 *   get:
 *     summary:
 *     tags: [temp]
 *     parameters:
 *       - in: 가져올 OTT 입력 예1) Disney Plus 예2) Netflix 예3) Watcha 예4) TVING
 *         name: company
 *         type: String
 *     responses:
 *       200:
 *         description: 임시
 */
