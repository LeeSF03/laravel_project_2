<?php

namespace App\Http\Controllers;

use App\Interfaces\PostRepositoryInterface;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public $post;

    public function __construct(PostRepositoryInterface $post)
    {
        $this->post = $post;
    }

    public function getPostList()
    {
        $posts = $this->post->getAllPosts();

        return $posts;
    }
}