/**
 * @swagger
 * /DBrank/DBCreate:
 *   post:
 *     summary: 랭킹 데이터을 저장함
 *     tags: [DBrank]
 *     parameters:
 *       - in: 저장할 랭킹 데이터
 *         name: jsonData
 *         type: json
 *     responses: 200
 * /DBrank/DBRead:
 *   get:
 *     summary: 랭킹 데이터(단일)를 가져옴
 *     tags: [DBrank]
 *     parameters:
 *       - in: 제목
 *         name: title
 *         type: string
 *       - in: 년도
 *         name: type
 *         type: string
 *       - in: OTT
 *         name: type
 *         type: string
 *     responses: 200
 * /DBrank/DBUpdate:
 *   put:
 *     summary: 랭킹 데이터을 업데이트함
 *     tags: [DBrank]
 *     parameters:
 *       - in: 업데이트할 랭킹 데이터
 *         name: jsonData
 *         type: json
 *     responses: 200
 * /DBrank/DBDelete:
 *   delete:
 *     summary: 랭킹 데이터을 삭제함
 *     tags: [DBrank]
 *     parameters:
 *       - in: 삭제할 데이터의 아이디
 *         name: id
 *         type: number
 *     responses: 200
 * /DBrank/__create:
 *   post:
 *     summary: 랭킹 데이터들을 저장함
 *     tags: [DBrank]
 *     parameters:
 *       - in: 저장할 랭킹 데이터들
 *         name: jsonData
 *         type: json
 *     responses: 200
 * /DBrank/__read:
 *   get:
 *     summary: 각 회사별 랭킹 데이터를 가져옴
 *     tags: [DBrank]
 *     parameters:
 *       - in: 제목
 *         name: company
 *         type: string
 *       - in: 년도
 *         name: type
 *         type: string
 *     responses: 200
 * /DBrank/__update:
 *   put:
 *     summary: 랭킹 데이터들을 업데이트함
 *     tags: [DBrank]
 *     parameters:
 *       - in: 업데이트할 랭킹 데이터들
 *         name: jsonData
 *         type: json
 *     responses: 200
 * /DBrank/__delete:
 *   delete:
 *     summary: 랭킹 데이터들을 삭제함
 *     tags: [DBrank]
 *     parameters:
 *       - in: 삭제할 데이터들의 아이디
 *         name: idArray
 *         type: Array
 *     responses: 200
 * /DBrank/DBOutputJson:
 *   post:
 *     summary: 기존데이터를 JSON 파일로 출력하고 백업
 *     tags: [DBrank]
 *     responses: 200
 */
