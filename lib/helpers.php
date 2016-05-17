<?php

	# Month short names
	class Config {
		static $MONTH_ALL  = array( "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec");
	}

	# Month and year
	$CURRENT_DAY_NUMBER             = date('d');

	$YEAR_THIS                      = date('Y');
	$CURRENT_MONTH_NAME_FULL        = date('F');
	$PREVIOUS_MONTH_NUMBER          = intval(date('m')-1);
	$CURRENT_MONTH_NUMBER           = date('m');
	$CURRENT_MONTH_NUMBER_NO_ZEROES = date('n');
	$CURRENT_MONTH_NAME_SHORT       = Config::$MONTH_ALL[$CURRENT_MONTH_NUMBER_NO_ZEROES-1];


	if($CURRENT_MONTH_NUMBER_NO_ZEROES == 01):
		$PREVIOUS_MONTH_NAME_SHORT = 01;
	else:
		$PREVIOUS_MONTH_NAME_SHORT      = Config::$MONTH_ALL[$CURRENT_MONTH_NUMBER_NO_ZEROES-2];
	endif;

	# Two month before current
	$TWO_MONTHS_BEFORE_NAME_FULL = date('F',strtotime($CURRENT_MONTH_NAME_FULL . date('Y') . ' -2 month'));
	$TWO_MONTHS_BEFORE_NUMBER = (array_search($TWO_MONTHS_BEFORE_NAME_FULL, Config::$MONTH_ALL)+1);
	$TWO_MONTHS_BEFORE_NAME_SHORT = Config::$MONTH_ALL[$TWO_MONTHS_BEFORE_NUMBER-1];

	# Add leading zero
	if ($TWO_MONTHS_BEFORE_NUMBER < 10) :
		$TWO_MONTHS_BEFORE_NUMBER = '0'.$TWO_MONTHS_BEFORE_NUMBER;
	endif;


	# Slugify http://stackoverflow.com/questions/2955251/php-function-to-make-slug-url-string
	function slugify($text) { 
	  // replace non letter or digits by -
	  $text = preg_replace('~[^\\pL\d]+~u', '-', $text);

	  // trim
	  $text = trim($text, '-');

	  // transliterate
	  $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

	  // lowercase
	  $text = strtolower($text);

	  // remove unwanted characters
	  $text = preg_replace('~[^-\w]+~', '', $text);

	  if (empty($text))
	  {
	    return 'n-a';
	  }

	  return $text;
	}

?>