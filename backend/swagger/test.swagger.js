/**
 * @swagger
 * /test/ping:
 *   get:
 *     summary: 서버연결 테스트
 *     tags: [Test]
 *     responses:
 *       200:
 *         description: "pong"
 * /test/:
 *   get:
 *     summary: 서버연결 테스트
 *     tags: [Test]
 *     parameters:
 *       - in: 데이터
 *         name: jsonData
 *         type: json
 *     responses:
 *       200:
 *         description: "jsonData"
 */
