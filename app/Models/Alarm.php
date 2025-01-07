<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alarm extends Model
{
    use HasFactory;

    protected $fillable = [
        'ioslave_id',
        'message',
        'modbus_data'
    ];

    // Relationship with IOSlave
    public function ioslave()
    {
        return $this->belongsTo(IOSlave::class);
    }
}
