<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'category_id' => rand(1,10),
            'user_id' => rand(1,10),
            'title' => $this->faker->name(),
            'content' => $this->faker->paragraph(),
            'img' => $this->faker->imageUrl(),
            'slug' => Str::slug($this->faker->name()),
            'status' => 'Publish',
        ];
    }
}
