/**
 * @swagger
 * /DB/__create:
 *   post:
 *     summary: 데이터들을 저장함
 *     tags: [DB]
 *     parameters:
 *       - in: 저장할 데이터들
 *         name: jsonData
 *         type: json
 *     responses: 200
 * /DB/__read:
 *   get:
 *     summary: 데이터를 찾아옴
 *     tags: [DB]
 *     parameters:
 *       - in: 제목
 *         name: title
 *         type: string
 *       - in: 년도
 *         name: title
 *         type: string
 *     responses: 200
 * /DB/__update:
 *   put:
 *     summary: 데이터들을 업데이트함
 *     tags: [DB]
 *     parameters:
 *       - in: 업데이트할 데이터들
 *         name: jsonData
 *         type: json
 *     responses: 200
 * /DB/__delete:
 *   delete:
 *     summary: 데이터들을 삭제함
 *     tags: [DB]
 *     parameters:
 *       - in: 삭제할 데이터들
 *         name: jsonData
 *         type: json
 *     responses: 200
 * /DB/DBFinder:
 *   get:
 *     summary: 데이터들을 찾아옴
 *     tags: [DB]
 *     parameters:
 *       - in: ID
 *         name: ID
 *         type: string or null
 *       - in: string
 *         name: string
 *         type: string or null
 *     responses: 200
 * /DB/DBOutputJson:
 *   post:
 *     summary: 기존데이터를 JSON 파일로 출력하고 백업
 *     tags: [DB]
 *     responses: 200
 */
