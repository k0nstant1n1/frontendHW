<?php defined('SYSPATH') or die('No direct script access.');

class Controller_Hello extends Controller_Template
{
    public $template = 'index';

    public function action_index()
    {
        $this->template->content = 'Главная страница';
    }
    public function action_allbooks()
    {
        $books = array(
            'book_1' => 'author_1',
            'book_2' => 'author_2',);
        $this->template->content = View::factory('allbooks',array('books'=>$books,));
    }
}