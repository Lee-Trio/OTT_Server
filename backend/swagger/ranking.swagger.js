/**
 * @swagger
 * /ranking/rankingData:
 *   get:
 *     summary: 각 OTT별 랭킹를 TV or Movie or All 데이터를 가져옴
 *     tags: [ranking]
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
 *                     example: 어바웃 타임
 *                   href:
 *                     type: URL
 *                     example: https://watcha.com/contents/mO2x9k5
 *                   img:
 *                     type: URL
 *                     example: https://an2-img.amz.wtchn.net/image/v2/jENE7VlqUpBKBIfpyHRing.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMmt3WjNsdlpEbDFlRzFwZUdrNVltUjZhV2xySW4wLjRjRFByUGhqQUt2c2tsdndzWmRmUmM2bjlYbGc1OWJaaWhXWXJmaEdMeWc
 *                   OTT:
 *                     type: String
 *                     example: netflix
 *                   mt:
 *                     type: Strnig
 *                     example: movie
 *                   description:
 *                     type: String
 *                     example: 아버지에게 가문 대대로 시간을 돌리는 능력을 타고났다는 사실을 들은 팀. 우연히 만난 메리에게 반한 팀은 완벽한 사랑을 위해 능력을 마음껏 사용하고, 그럴 때마다 주변 상황들이 점점 어긋나기 시작한다.
 *                   genre:
 *                     type: String
 *                     example: 판타지
 *                   director:
 *                     type: String
 *                     example: 리처드 커티스
 *                   cast:
 *                     type: String
 *                     example: 리처드 커티스, 도널 글리슨, 레이첼 맥아담스, 빌 나이, 린제이 던칸, 마고 로비, 리디아 윌슨, 리처드 코더리, 조슈아 맥과이어, 톰 홀랜더, 바네사 커비, 윌 메릭
 *                   year:
 *                     type: String
 *                     example: 2013
 *                   film_rating:
 *                     type: String
 *                     example: 15
 *                   duration:
 *                     type: String
 *                     example: 2시간 3분
 *                   rank:
 *                     type: String
 *                     example: 10
 */
