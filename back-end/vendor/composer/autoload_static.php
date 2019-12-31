<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit71bb695eb47f1d0a805cc4ef7a0f50c0
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit71bb695eb47f1d0a805cc4ef7a0f50c0::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit71bb695eb47f1d0a805cc4ef7a0f50c0::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
