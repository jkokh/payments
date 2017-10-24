<?php

function Teaching_payments_response_content() {
	Q_Response::addStylesheet('css/payments.css');
	Q_Response::addScript('js/pages/payments.js');
	return Q::view('Teaching/content/payments.php');
}

