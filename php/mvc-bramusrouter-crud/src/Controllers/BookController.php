<?php

namespace App\Controllers;

use App\Models\Book;

class BookController
{
	public function index()
	{
		render_view('home', [
			'books' => Book::all()
		]);
	}

	public function showAddPage()
	{
		$data = [
			'title' => 'Thêm mới sách',
			'error' => session_get_flash('error'),
			'post_url' => '/books',
			'book' => new Book()
		];

		render_view('edit', $data);
	}

	public function create()
	{
		$book = new Book();
		if ($book->fill($_POST)->save()) {
			redirect('/');
		}

		$_SESSION['error'] = 'Đã có lỗi xảy ra.';
		redirect('/books/add');
	}

	public function showEditPage($id)
	{
		$book = Book::findById($id);
		if (!$book) {
			redirect('/errors/404');
		}
		$data = [
			'title' => 'Cập nhật sách',
			'error' => session_get_flash('error'),
			'post_url' => '/books/' . $id,
			'book' => $book
		];

		render_view('edit', $data);
	}

	public function update($id)
	{
		$book = Book::findById($id);
		if ($book && $book->fill($_POST)->save()) {
			redirect('/');
		}

		$_SESSION['error'] = 'Đã có lỗi xảy ra.';
		redirect('/books/edit/' . $id);
	}

	public function delete($id)
	{
		$book = Book::findById($id);
		if ($book) {
			$book->delete();
		}

		redirect('/');
	}
}
