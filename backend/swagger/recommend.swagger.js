/**
 * @swagger
 * /recommend:
 *   post:
 *     summary:
 *     tags: [recommend]
 *     parameters:
 *       - in: 찜목록
 *         name: body
 *         type: json
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
 */
