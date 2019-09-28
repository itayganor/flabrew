<?php

/*
 * This file is part of the Hebrew language pack for Flarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Flarum\Extend;

return [
    new Extend\LanguagePack,
    (new Extend\Frontend('forum'))->css(__DIR__ . '/less/forum/extension.less'),
];
