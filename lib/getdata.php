<?php

function get_data($url) {
	$ch = curl_init();
	$timeout = 5;
	$options = array(
		CURLOPT_URL => $url,
		CURLOPT_RETURNTRANSFER => 1,
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_CONNECTTIMEOUT => $timeout,
		CURLOPT_HTTPHEADER => array('Content-type: application/json')
	);

	curl_setopt_array( $ch, $options );
	$data = curl_exec($ch);
	curl_close($ch);
	return $data;
}

?>