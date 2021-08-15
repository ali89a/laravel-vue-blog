<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::resource('category', App\Http\Controllers\CategoryController::class);
Route::resource('posts', App\Http\Controllers\PostController::class);


Route::get('edit-post/{slug}', [App\Http\Controllers\PostController::class,'edit']);
Route::post('update-post', [App\Http\Controllers\PostController::class,'update']);

Route::get('get-category/{slug}', [App\Http\Controllers\CategoryController::class,'edit']);
Route::post('update-category', [App\Http\Controllers\CategoryController::class,'update']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
