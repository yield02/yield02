<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Books</title>
	<style>
		input {
			display: block;
			margin-top: 5px;
		}

		button {
			margin-top: 5px;
		}

		.error-message {
			color: red;
		}
	</style>
</head>

<body>
	<a href="/">Trang chủ</a>
	<h2><?= $title ?></h2>
	<?php
	if (!empty($error)) {
		echo "<h6 class='error-message'>$error</h6>";
	}
	?>
	<form action="<?= $post_url ?>" method="post">
		<input type="hidden" name="id" value="<?= $book->id ?>">
		Tên sách: <input type="text" name="title" value="<?= $book->title ?>">
		Miêu tả: <input type="text" name="description" value="<?= $book->description ?>">
		Số trang: <input type="number" name="pages" value="<?= ($book->pages > 0 ? $book->pages : '') ?>">
		Giá: <input type="number" name="price" value="<?= ($book->price > 0 ? $book->price : '') ?>">
		<button>Lưu</button>
	</form>
</body>

</html>