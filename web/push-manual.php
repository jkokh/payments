<?php
include(dirname(__FILE__).DIRECTORY_SEPARATOR.'Q.inc.php');

$devices = Users_Device::select('*')->fetchDbRows();

foreach($devices as $device) {
	$device::$device = $device;
	$device->handlePushNotification([
		'alert' => [
			'title' => 'Hello ' . $device->fields['platform'],
			'body' => 'PHP notifications'
		],
		'icon' => "https://cdn4.iconfinder.com/data/icons/logos-3/504/php-128.png",
		'url' => "https://yandex.ru"
	]);
	$device->sendPushNotifications();
}