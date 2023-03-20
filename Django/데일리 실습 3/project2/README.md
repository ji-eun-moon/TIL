1. 데이터 입력하기
Movie.objects.create(title='Venom: Let There Be Carnage', genre='action')
Movie.objects.create(title='Rons Gone Wrong', genre='animation')
Movie.objects.create(title='007 No Time To Die', genre='action')
Movie.objects.create(title='Dune', genre='adventure')

2. id에 대해 내림차순으로 조회 
Movie.objects.order_by('-id')

3. genre가 action인 것만 조회
Movie.objects.filter(genre="action")

4. title이 e로 끝나는 것만 조회
Movie.objects.filter(title__endswith='e')

5. 전체 데이터 조회
Movie.objects.all()