<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<title>Login</title>
<link rel="stylesheet" href="asserts/css/login.css" />
</head>
<body>
	<header>
		<nav class="header-nav">
			<div>
				<a href="asserts/main.html"><h1>Petrip</h1></a>
			</div>
		</nav>
	</header>
	<main class="container">
	<div class="login-page">
		<img src="asserts/img/로고_배경제거.png" width="350" />
		<div class="form">
			<form method="post" action="${root}/member">
				<input type="hidden" name="action" value="login" />
				<input id="id" name="id" type="text" placeholder="ID" />
				<input id="password" name="password" type="password" min="4" placeholder="password" />
				<button class="login-btn">로그인</button>
				<button id="register">회원가입</button>
			</form>
		</div>
	</div>
	</main>
	<script type="text/javascript" src="asserts/js/login-regsiter.js">
	
	
	
	</script>
</body>