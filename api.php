<?php

require_once('lib/getdata.php');

$url = 'http://gs.statcounter.com/chart.php?201402=undefined&bar=1&device=Desktop%20%26%20Mobile%20%26%20Tablet&device_hidden=desktop%2Bmobile%2Btablet&statType_hidden=browser_version&region_hidden=SE&granularity=monthly&statType=Browser%20Version&region=Sweden&fromInt=201312&toInt=201402&fromMonthYear=2013-12&toMonthYear=2014-02&multi-device=true&csv=1';

$returned_content = get_data($url);

$stats = explode(',', $returned_content);


$keys = array();
$newArray = array();

function csvToArray($file, $delimiter) {
  if (($handle = fopen($file, 'r')) !== FALSE) {
    $i = 0;
    while (($lineArray = fgetcsv($handle, 4000, $delimiter, '"')) !== FALSE) {
      for ($j = 0; $j < count($lineArray); $j++) {
        switch ($j) :
        	case 0:
        		$arr[$i][$j] = $lineArray[$j];

        		# Remove everything for verson numbers behhind the dot (.), i.e ignore decimals
        		// $str = explode('.', $arr[$i][$j]);
        		// $strk = $str[0];
        		// $arr[$i][$j] = $strk;

        		# Remove empty zero ( 0)
        		$stro = str_replace(" 0", "", $arr[$i][$j]);
        		$arr[$i][$j] = $stro;

	        	# Replace "IE" with "Internet Explorer"
	        	if(strpos($arr[$i][$j],'IE') !== false):
	        		$arr[$i][$j] = str_replace("IE","Internet Explorer", $arr[$i][$j]);
	        	endif;

            # Replace "IE" with "Internet Explorer"
            if(strpos($arr[$i][$j],'iPhone') !== false):
              $arr[$i][$j] = str_replace("iPhone","Safari iPhone", $arr[$i][$j]);
            endif;

            # Replace "Chrome for Android" with "Chrome Android"
            if(strpos($arr[$i][$j],'Chrome for Android') !== false):
              $arr[$i][$j] = str_replace("Chrome for Android", "Chrome Android", $arr[$i][$j]);
            endif;

        		break;
        	default:
        		$arr[$i][$j] = $lineArray[$j];
        		break;
        endswitch;
      }
      $i++;
    }
    fclose($handle);
  }
  return $arr;
}

// Do it
$data = csvToArray($url, ',');

// Set number of elements (minus 1 because we shift off the first row)
$count = count($data) - 1;

//Use first row for key names
$labels = array_shift($data);

foreach ($labels as $label) {
	$keys[] = $label;
}

# Add Ids, just in case we want them later
$keys[] = 'device';

for ($i = 0; $i < $count; $i++) {

	if(preg_match('[Android|iPhone|ExplorerMobile|Touch]', $data[$i][0])) :
		$data[$i][] = 'mobile';
	elseif(preg_match('[iPad]', $data[$i][0])) :
		$data[$i][] = 'tablet';
	else:
		$data[$i][] = 'desktop';
	endif;
}

# Add Ids, just in case we want them later
$keys[] = 'icon';

for ($i = 0; $i < $count; $i++) {

	if(preg_match('[Android]', $data[$i][0])) :
		$data[$i][] = 'android';
	elseif(preg_match('[Safari]', $data[$i][0])) :
		$data[$i][] = 'safari';
	elseif(preg_match('[Firefox]', $data[$i][0])) :
		$data[$i][] = 'firefox';
	elseif(preg_match('[Opera]', $data[$i][0])) :
		$data[$i][] = 'opera';
	elseif(preg_match('[Chrome]', $data[$i][0])) :
		$data[$i][] = 'chrome';
	elseif(preg_match('[iPhone]', $data[$i][0])) :
		$data[$i][] = 'safari';
	else:
		$data[$i][] = 'IE';
	endif;
}

# Bring it all together
for ($j = 0; $j < $count && $j < 18; $j++) {
  $d = array_combine($keys, $data[$j]);
  $newArray[$j] = $d;
}

# Rename keys
foreach ( $newArray as $k=>$v ) :

  $newArray[$k] ['market'] = $newArray[$k] ['Market Share Perc. (Dec 2013 to Feb 2014)'];
  unset($newArray[$k]['Market Share Perc. (Dec 2013 to Feb 2014)']);

  $newArray[$k] ['browser'] = $newArray[$k] ['Browser Version'];
  unset($newArray[$k]['Browser Version']);

endforeach;

# Set correct content type
header('Content-Type: application/json');

# Print it out as JSON
// echo json_encode($newArray);

# Save a local JSON file
file_put_contents('browsers.json', json_encode($newArray));

?>