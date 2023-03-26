<?php

namespace App\Models;

class Book
{
    public int $id = -1;
    public string $title;
    public string $description;
    public int $pages;
    public int $price;

    public function __construct(array $data = [])
    {
        $this->fill($data);
    }

    public static function all(): array
    {
        $books = [];

        $query = PDO()->prepare('select * from books');
        $query->execute();
        while ($row = $query->fetch()) {
            $book = new Book();
            $book->fillFromDb($row);
            $books[] = $book;
        }

        return $books;
    }

    public function save()
    {
        $result = false;

        if ($this->id >= 0) {
            $query = PDO()->prepare('update books set title = :title, description = :description,
                            pages_count = :pages_count, price = :price where id = :id');
            $result = $query->execute([
                'id' => $this->id,
                'title' => $this->title,
                'description' => $this->description,
                'pages_count' => $this->pages,
                'price' => $this->price
            ]);
        } else {
            $query = PDO()->prepare('insert into books (title, description, pages_count, price)
                            values (:title, :description, :pages_count, :price)');
            $result = $query->execute([
                'title' => $this->title,
                'description' => $this->description,
                'pages_count' => $this->pages,
                'price' => $this->price
            ]);
            if ($result) {
                $this->id = PDO()->lastInsertId();
            }
        }

        return $result;
    }

    public function delete()
    {
        $query = PDO()->prepare('delete from books where id = :id');
        return $query->execute(['id' => $this->id]);
    }

    public static function findById(int $id)
    {
        $query = PDO()->prepare('select * from books where id = :id');
        $query->execute(['id' => $id]);
        if ($row = $query->fetch()) {
            $book = new Book();
            $book->fillFromDb($row);
            return $book;
        }
        return null;
    }

    protected function fillFromDb(array $row)
    {
        $this->id = $row['id'];
        $this->title = $row['title'];
        $this->description = $row['description'];
        $this->pages = $row['pages_count'];
        $this->price = $row['price'];
        return $this;
    }

    public function fill(array $data)
    {
        $this->title = $data['title'] ?? '';
        $this->description = $data['description'] ?? '';
        $this->pages = $data['pages'] ?? 0;
        $this->price = $data['price'] ?? 0;
        return $this;
    }
}
