<?php defined('SYSPATH') or die('No direct script access.');

class Model_Books extends Model {

    public function all_books()
    {
        return array(
            'Книга_1' => "Автор_1" ,
            'Книга_2' => "Автор_2", );
    }
}