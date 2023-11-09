/**
 * @swagger
 * /search/all/title:
 *   get:
 *     summary: 모든 데이터에서 입력한 제목으로 검색을 해옴
 *     tags: [search]
 *     parameters:
 *       - in: 검색할 제목 입력 ex) 캐릭
 *         name: searchString
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
 *                     example: "Netflix 기획 시리즈: 캐릭터즈"
 *                   href:
 *                     type: URL
 *                     example: https://www.netflix.com/kr/title/80073289
 *                   img:
 *                     type: URL
 *                     example: https://images.justwatch.com/poster/308763010/s166/nespeulrigseu-gihoeg-sirijeu-kaerigteojeu
 *                   OTT:
 *                     type: String
 *                     example: Netflix
 *                   mt:
 *                     type: Strnig
 *                     example: tvSeries
 *                   description:
 *                     type: String
 *                     example: 신인 코미디언 여덟 명이 그들만의 프로그램을 만들어 달라는 Netflix 요청을 받고 제작한 전대미문의 코미디 시리즈. 스케치 코미디와 폭풍 애드립의 무한질주가 시작된다.
 *                   genre:
 *                     type: String
 *                     example: 코미디
 *                   cast:
 *                     type: String
 *                     example: 로런 랩커스,존 얼리,헨리 제브로스키
 *                   year:
 *                     type: String
 *                     example: 2016
 *                   film_rating:
 *                     type: String
 *                     example: 청불
 *                   season:
 *                     type: String
 *                     example: 시즌 1개
 * /search/all/number:
 *   get:
 *     summary: 모든 데이터에서 입력한 아이디로 검색을 해옴
 *     tags: [search]
 *     parameters:
 *       - in: 검색할 번호 입력 ex) 40
 *         name: searchNumber
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
 *                     example: 플루토와 소시지
 *                   href:
 *                     type: URL
 *                     example: https://www.disneyplus.com/ko-kr/movies/plutos-purchase/5xddVi2E4ft6
 *                   img:
 *                     type: URL
 *                     example: https://images.justwatch.com/poster/245124654/s166/plutos-purchase
 *                   OTT:
 *                     type: String
 *                     example: Disney Plus
 *                   mt:
 *                     type: Strnig
 *                     example: movie
 *                   description:
 *                     type: String
 *                     example: 미키의 부탁으로 정육점에 살라미를 사러 간 플루토에게 생각지도 못한 일이 생긴다. 불독 부치가 살라미를 훔치려고 했던 것. 플루토는 살라미를 지키기 위해 부치와 싸운다. 플루토가 살라미를 가지고 집에 돌아오자, 미키는 살라미를 부치에게 생일 선물로 준다.
 *                   genre:
 *                     type: String
 *                     example: 가족, 애니메이션
 *                   director:
 *                     type: String
 *                     example: 찰스 니콜스
 *                   cast:
 *                     type: String
 *                     example: 핀토 콜비그제임스 맥도날드
 *                   running_time:
 *                     type: String
 *                     example: 7분
 *                   year:
 *                     type: String
 *                     example: 1948
 *                   film_rating:
 *                     type: String
 *                     example: rating_kcc_all
 *                   season:
 *                     type: String
 *                     example: 7분
 * /search/tv/title:
 *   get:
 *     summary: TV 시리즈 데이터에서 입력한 제목로 검색을 해옴
 *     tags: [search]
 *     parameters:
 *       - in: 검색할 제목 입력 ex) 하트랜드
 *         name: searchString
 *         type: String
 *       - in: 검색할 회사 입력 ex) netflix
 *         name: company
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
 *                     example: 하트랜드
 *                   href:
 *                     type: URL
 *                     example: https://www.netflix.com/kr/title/70171946
 *                   img:
 *                     type: URL
 *                     example: https://images.justwatch.com/poster/242326487/s166/heartland
 *                   OTT:
 *                     type: String
 *                     example: Netflix
 *                   mt:
 *                     type: Strnig
 *                     example: tvSeries
 *                   description:
 *                     type: String
 *                     example: 야무진 소녀 에이미는 어머니의 갑작스럽게 죽은 충격에서 헤어나지 못 한다. 한편 에이미와 그녀의 할아버지는 목장을 잃을 수 있는 위기에 봉착한다.
 *                   genre:
 *                     type: String
 *                     example: 드라마 장르
 *                   cast:
 *                     type: String
 *                     example: 앰버 마셜,미셸 모건,그레이엄 워들
 *                   year:
 *                     type: String
 *                     example: 2007
 *                   film_rating:
 *                     type: String
 *                     example: 12+
 *                   season:
 *                     type: String
 *                     example: 10개
 * /search/tv/number:
 *   get:
 *     summary: TV 시리즈 데이터에서 입력한 아이디로 검색을 해옴
 *     tags: [search]
 *     parameters:
 *       - in: 검색할 번호 입력 ex) 40
 *         name: searchNumber
 *         type: String
 *       - in: 검색할 회사 입력 ex) netflix
 *         name: company
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
 *                     example: 하트랜드
 *                   href:
 *                     type: URL
 *                     example: https://www.netflix.com/kr/title/70171946
 *                   img:
 *                     type: URL
 *                     example: https://images.justwatch.com/poster/242326487/s166/heartland
 *                   OTT:
 *                     type: String
 *                     example: Netflix
 *                   mt:
 *                     type: Strnig
 *                     example: tvSeries
 *                   description:
 *                     type: String
 *                     example: 야무진 소녀 에이미는 어머니의 갑작스럽게 죽은 충격에서 헤어나지 못 한다. 한편 에이미와 그녀의 할아버지는 목장을 잃을 수 있는 위기에 봉착한다.
 *                   genre:
 *                     type: String
 *                     example: 드라마 장르
 *                   cast:
 *                     type: String
 *                     example: 앰버 마셜,미셸 모건,그레이엄 워들
 *                   year:
 *                     type: String
 *                     example: 2007
 *                   film_rating:
 *                     type: String
 *                     example: 12+
 *                   season:
 *                     type: String
 *                     example: 10개
 * /search/movie/title:
 *   get:
 *     summary: 무비 데이터에서 입력한 제목으로 검색을 해옴
 *     tags: [search]
 *     parameters:
 *       - in: 검색할 제목 입력 ex) 흐르는
 *         name: searchString
 *         type: String
 *       - in: 검색할 회사 입력 ex) netflix
 *         name: company
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
 *                     example: 흐르는 강물처럼
 *                   href:
 *                     type: URL
 *                     example: https://www.netflix.com/kr/title/911839
 *                   img:
 *                     type: URL
 *                     example: https://images.justwatch.com/poster/19584309/s166/a-river-runs-through-it
 *                   OTT:
 *                     type: String
 *                     example: Netflix
 *                   mt:
 *                     type: Strnig
 *                     example: movie
 *                   description:
 *                     type: String
 *                     example: 1900년대 초, 미국 몬태나주의 외딴 마을. 원칙과 도덕을 중시하고, 플라이 낚시를 사랑하는 아버지 밑에서 자란 형제. 아버지의 가르침은 두 형제를 서로 다른 길로 인도한다.
 *                   genre:
 *                     type: String
 *                     example: 드라마 장르
 *                   cast:
 *                     type: String
 *                     example: 크레이그 셰퍼,브래드 피트,톰 스커릿
 *                   year:
 *                     type: String
 *                     example: 1992
 *                   film_rating:
 *                     type: String
 *                     example: 12+
 *                   duration:
 *                     type: String
 *                     example: 2시간 4분
 * /search/movie/number:
 *   get:
 *     summary: 무비 데이터에서 입력한 아이디로 검색을 해옴
 *     tags: [search]
 *     parameters:
 *       - in: 검색할 제목 입력 ex) 40
 *         name: searchNumber
 *         type: String
 *       - in: 검색할 회사 입력 ex) netflix
 *         name: company
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
 *                     example: 흐르는 강물처럼
 *                   href:
 *                     type: URL
 *                     example: https://www.netflix.com/kr/title/911839
 *                   img:
 *                     type: URL
 *                     example: https://images.justwatch.com/poster/19584309/s166/a-river-runs-through-it
 *                   OTT:
 *                     type: String
 *                     example: Netflix
 *                   mt:
 *                     type: Strnig
 *                     example: movie
 *                   description:
 *                     type: String
 *                     example: 1900년대 초, 미국 몬태나주의 외딴 마을. 원칙과 도덕을 중시하고, 플라이 낚시를 사랑하는 아버지 밑에서 자란 형제. 아버지의 가르침은 두 형제를 서로 다른 길로 인도한다.
 *                   genre:
 *                     type: String
 *                     example: 드라마 장르
 *                   cast:
 *                     type: String
 *                     example: 크레이그 셰퍼,브래드 피트,톰 스커릿
 *                   year:
 *                     type: String
 *                     example: 1992
 *                   film_rating:
 *                     type: String
 *                     example: 12+
 *                   duration:
 *                     type: String
 *                     example: 2시간 4분
 */
