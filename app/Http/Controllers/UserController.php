<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
  public function index() {
    $users = ['Sebastian', 'Santiago', 'Nico', 'Marina', 'Lizdey', 'Yulieth'];

    return Inertia::render('User', [
      'users' => $users 
    ]);
  }
}
