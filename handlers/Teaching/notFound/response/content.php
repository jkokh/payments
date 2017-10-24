<?php

function Teaching_notFound_response_content($params)
{
    header("HTTP/1.0 404 Not Found");
    $url = Q_Request::url();
	if (Q_Request::isAjax()) {
		throw new Q_Exception_NotFound(compact('url'));
	}
	Q_Dispatcher::uri()->action = 'notFound';
    return Q::view("Teaching/content/notFound.php", compact('url'));
}
