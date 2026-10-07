<?php

namespace App;

enum Role: string
{
    case SUPER_ADMIN = 'super_admin';
    case ADMIN = 'admin';
    case EMPLOYEE = 'employee';
    case CUSTOMER = 'customer';
}