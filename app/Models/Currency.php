<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Currency extends Model
{
    protected $fillable = ['name', 'code', 'type'];

    /**
     * Get the wallets for the currency.
     */
    public function wallets(): HasMany
    {
        return $this->hasMany(Wallet::class);
    }
}
