<?php

	# Month short names
	class Config {
		static $MONTH_ALL  = array( "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec");
	}

	# Month and year
	$YEAR_THIS                      = date('Y');
	$CURRENT_MONTH_NAME_FULL        = date('F');
	$CURRENT_MONTH_NUMBER           = date('m');
	$CURRENT_MONTH_NUMBER_NO_ZEROES = date('n');
	$CURRENT_MONTH_NAME_SHORT       = Config::$MONTH_ALL[$CURRENT_MONTH_NUMBER_NO_ZEROES-1];

	# Two month before current
	$TWO_MONTHS_BEFORE_NAME_FULL = date('F',strtotime($CURRENT_MONTH_NAME_FULL . date('Y') . ' -2 month'));
	$TWO_MONTHS_BEFORE_NUMBER = (array_search($TWO_MONTHS_BEFORE_NAME_FULL, Config::$MONTH_ALL)+1);
	$TWO_MONTHS_BEFORE_NAME_SHORT = Config::$MONTH_ALL[$TWO_MONTHS_BEFORE_NUMBER-1];

	# Add leading zero
	if ($TWO_MONTHS_BEFORE_NUMBER < 10) :
		$TWO_MONTHS_BEFORE_NUMBER = '0'.$TWO_MONTHS_BEFORE_NUMBER;
	endif;


?>