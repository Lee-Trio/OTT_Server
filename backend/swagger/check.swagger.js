/**
 * @swagger
 * /check/all_data:
 *   get:
 *     summary:
 *     tags: [check]
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
 * /check/DisneyPlusMovie:
 *   get:
 *     summary: 디즈니 플러스 무비 데이터를 가져옴
 *     tags: [check]
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
 *                     example: 증기선 윌리
 *                   href:
 *                     type: URL
 *                     example: https://www.disneyplus.com/ko-kr/movies/steamboat-willie/1Lh1k4ammOG5
 *                   img:
 *                     type: URL
 *                     example: https://images.justwatch.com/poster/303423987/s166/jeunggiseon-wilri
 *                   OTT:
 *                     type: String
 *                     example: Disney Plus
 *                   mt:
 *                     type: Strnig
 *                     example: movie
 *                   description:
 *                     type: String
 *                     example: 첫 미키 마우스 애니메이션 개봉작이자 동시 녹음을 활용한 최초의 애니메이션. 미키 마우스는 포악한 피트 선장의 지휘를 받는 배의 장난꾸러기 선원이다.
 *                   genre:
 *                     type: String
 *                     example: 가족, 키즈, 애니메이션
 *                   director:
 *                     type: String
 *                     example: 월트 디즈니,  어브 이웍스
 *                   cast:
 *                     type: String
 *                     example: 월트 디즈니
 *                   running_time:
 *                     type: String
 *                     example: 7분
 *                   year:
 *                     type: String
 *                     example: 1928
 *                   film_rating:
 *                     type: String
 *                     example: g
 *                   season:
 *                     type: String
 *                     example: 7분
 * /check/NetflixMovie:
 *   get:
 *     summary: 넷플릭스 무비 데이터를 가져옴
 *     tags: [check]
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
 *                     example: 쉘부르의 우산
 *                   href:
 *                     type: URL
 *                     example: https://www.netflix.com/kr/title/1077059
 *                   img:
 *                     type: URL
 *                     example: https://www.justwatch.com/images/poster/139243597/s166/les-parapluies-de-cherbourg
 *                   OTT:
 *                     type: String
 *                     example: Netflix
 *                   mt:
 *                     type: Strnig
 *                     example: movie
 *                   description:
 *                     type: String
 *                     example: 프랑스의 작은 항구 도시, 쉘부르. 자동차 수리공인 남자와 우산 가게에서 일하는 여자가 사랑에 빠진다. 세상이 장밋빛으로 보일 만큼 설렘 가득한 사랑. 하지만 갑작스러운 남자의 군 입대로 이들의 만남은 위기를 맞는다.
 *                   genre:
 *                     type: String
 *                     example: 뮤지컬 콘텐츠
 *                   cast:
 *                     type: String
 *                     example: 카트린 드뇌브,니노 카스텔누오보,안 베르농
 *                   year:
 *                     type: String
 *                     example: 1964
 *                   film_rating:
 *                     type: String
 *                     example: 12+
 *                   duration:
 *                     type: String
 *                     example: 1시간 32분
 * /check/WatchaMovie:
 *   get:
 *     summary: 왓챠 무비 데이터를 가져옴
 *     tags: [check]
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
 *                     example: 족장
 *                   href:
 *                     type: URL
 *                     example: https://watcha.com/contents/m5aaNPp
 *                   img:
 *                     type: URL
 *                     example: https://www.justwatch.com/images/poster/10820142/s166/the-sheik
 *                   OTT:
 *                     type: String
 *                     example: Watcha
 *                   mt:
 *                     type: Strnig
 *                     example: movie
 *                   description:
 *                     type: String
 *                     example: 매력적인 아라비아의 족장 아흐메드는 영국에서 온 다이애나를 보자마자 첫눈에 반한다. 그는 사하라 사막에서 다이애나를 납치해 집으로 데려오고, 이를 거부하던 그녀는 서서히 마음을 연다.
 *                   genre:
 *                     type: String
 *                     example: 모험
 *                   director:
 *                     type: String
 *                     example: 조지 멜포드
 *                   cast:
 *                     type: String
 *                     example: 루돌프 발렌티노, 아그네스 아이레스, 루스 밀러, 조지 와그너, 프랑크 버틀러, 찰스 브린리, 루시엔 리틀필드, 아돌프 멘주, 월터 롱
 *                   year:
 *                     type: String
 *                     example: 1921
 *                   film_rating:
 *                     type: String
 *                     example: 15
 *                   duration:
 *                     type: String
 *                     example: 1시간 26분
 * /check/TvingMovie:
 *   get:
 *     summary: 티빙 무비 데이터를 가져옴
 *     tags: [check]
 *     responses:
 *       200:
 *         description: coming soon
 * /DisneyPlusTVSeries:
 *   get:
 *     summary: 디즈니 플러스 TV 시리즈 데이터를 가져옴
 *     tags: [check]
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
 *                     example: 스쿨하우스 락!
 *                   href:
 *                     type: URL
 *                     example: https://www.disneyplus.com/ko-kr/series/schoolhouse-rock/4AbEzzTxhWxZ
 *                   img:
 *                     type: URL
 *                     example: https://images.justwatch.com/poster/249705769/s166/schoolhouse-rock
 *                   OTT:
 *                     type: String
 *                     example: Disney Plus
 *                   mt:
 *                     type: Strnig
 *                     example: tvSeries
 *                   description:
 *                     type: String
 *                     example: 3은 마법의 숫자'에서 '나는 법안이에요'와 '롤리, 롤리'까지, "스쿨하우스 락!"을 사랑하는 팬들의 머릿속에 여전히 떠오르는 노래들은 따라 부를 수밖에 없다.
 *                   genre:
 *                     type: String
 *                     example: 키즈, 애니메이션, 뮤지컬
 *                   cast:
 *                     type: String
 *                     example: 밥 도로우그레이디 테이트블러섬 디어리
 *                   running_time:
 *                     type: String
 *                     example: 3분
 *                   year:
 *                     type: String
 *                     example: 1973 - 1994
 *                   film_rating:
 *                     type: String
 *                     example: g
 *                   season:
 *                     type: String
 *                     example: 1994 • 시즌 3개
 * /check/NetflixTVSeries:
 *   get:
 *     summary: 넷플릭스 TV 시리즈 데이터를 가져옴
 *     tags: [check]
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
 *                     example: 스타트렉
 *                   href:
 *                     type: URL
 *                     example: https://www.netflix.com/kr/title/70136140
 *                   img:
 *                     type: URL
 *                     example: https://www.justwatch.com/images/poster/307716135/s166/seuta-teureg
 *                   OTT:
 *                     type: String
 *                     example: Netflix
 *                   mt:
 *                     type: Strnig
 *                     example: tvSeries
 *                   description:
 *                     type: String
 *                     example: 동요하지 않는 커크 선장이 이끄는 우주선 엔터프라이즈호의 선원들은 우주 저 멀리까지 깊이 탐사하며 새로운 세계와 문명을 탐험한다.
 *                   genre:
 *                     type: String
 *                     example: 액션
 *                   cast:
 *                     type: String
 *                     example: 윌리엄 샤트너,레너드 니모이,드포레스트 켈리
 *                   year:
 *                     type: String
 *                     example: 1966
 *                   film_rating:
 *                     type: String
 *                     example: 12+
 *                   season:
 *                     type: String
 *                     example: 시즌 3개
 * /check/WatchaTVSeries:
 *   get:
 *     summary: 왓챠 TV 시리즈 데이터를 가져옴
 *     tags: [check]
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
 *                     example: 마징가 Z
 *                   href:
 *                     type: URL
 *                     example: https://watcha.com/contents/tRwxWWP
 *                   img:
 *                     type: URL
 *                     example: https://images.justwatch.com/poster/177001744/s166/majingga-z
 *                   OTT:
 *                     type: String
 *                     example: Watcha
 *                   mt:
 *                     type: Strnig
 *                     example: tvSeries
 *                   description:
 *                     type: String
 *                     example: 카부토 박사는 야욕을 불태우던 닥터 헬로부터 평화를 지키기 위해 슈퍼로봇 마징가 Z를 비밀리에 완성시킨다. 손자 카부토는 할아버지를 이어 마징가 Z와 함께 닥터 헬과 싸워나간다.
 *                   genre:
 *                     type: String
 *                     example: 애니메이션
 *                   director:
 *                     type: String
 *                     example: 평균 3.7
 *                   cast:
 *                     type: String
 *                     example: 김영선, 정미숙, 이지현, 야나미 조지, 마츠시마 미노리, 이시마루 히로야, 키타하마 하루코, 오타케 히로시, 시바타 히데카츠, 사와다 카즈코, 토미타 코세이
 *                   year:
 *                     type: String
 *                     example: 1972
 *                   film_rating:
 *                     type: String
 *                     example: 12
 *                   season:
 *                     type: String
 *                     example: 시즌 1개
 *                   episode:
 *                     type: String
 *                     example: 92개
 * /check/TvingTVSeries:
 *   get:
 *     summary: 티빙 TV 시리즈 데이터를 가져옴
 *     tags: [check]
 *     responses:
 *       200:
 *         description: coming soon
 */
