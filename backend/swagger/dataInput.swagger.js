/**
 * @swagger
 * /dataInput/dataBackup:
 *   post:
 *     summary: contents_data 전부 backup 함
 *     tags: [dataInput]
 *     responses:
 *       200:
 *         description: archiver has been finalized and the output file descriptor has closed.
 * /dataInput/:
 *   post:
 *     summary: contents_data 를 update 할 수 있음 ( dataBackup auto )
 *     tags: [dataInput]
 *     parameters:
 *       - in: update 할 부분 ex) rank, all(권장 X)
 *         name: type
 *         type: String
 *     body:
 *       - in: json 형태로 전송
 *     responses:
 *       200:
 *         description: OK.
 */
