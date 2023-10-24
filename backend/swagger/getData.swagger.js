/**
 * @swagger
 *  /oneDataWithNumber:
 *   get:
 *     summary: 하나의 콘텐츠 데이터 가져오기
 *     tags: [getData]
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
 * /allDataList:
 *   get:
 *     summary: 모든 콘텐츠 데이터 가져오기
 *     tags: [getData]
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
 * /oneDataWithTitle:
 *   get:
 *     summary: 하나의 제목 콘텐츠 데이터 가져오기
 *     tags: [getData]
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
 * /multiDataWithNumbers:
 *   get:
 *     summary: 여러개의 콘텐츠 데이터 가져오기
 *     tags: [getData]
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
 * /multiDataWithTitles:
 *   get:
 *     summary: 여러개의 콘텐츠 데이터 가져오기
 *     tags: [getData]
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
 * /allDataCount:
 *   get:
 *     summary: 콘텐츠 갯수 가져오기
 *     tags: [getData]
 *     responses:
 *       200:
 *         description: "총 갯수는: 3500"
 */
