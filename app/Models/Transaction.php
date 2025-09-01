<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Transaction extends Model
{
    protected $fillable = ['user_id', 'wallet_id', 'category_id', 'description', 'amount', 'date', 'type'];

    /**
     * Get the user for the transaction.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the wallet for the transaction.
     */
    public function wallet(): BelongsTo
    {
        return $this->belongsTo(Wallet::class);
    }

    /**
     * Get the category for the transaction.
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
