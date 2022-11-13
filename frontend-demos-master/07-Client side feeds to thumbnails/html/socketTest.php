<?php

$homepage = file_get_contents('http://gdata.youtube.com/feeds/base/users/acmionline/uploads?alt=rss&v=2&orderby=published');
echo $homepage;