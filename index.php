<!doctype html>
<!--[if IE 7]> <html class="ie ie7" lang="sv" xmlns:fb="https://www.facebook.com/2008/fbml" xmlns:og="http://ogp.me/ns#"> <![endif]-->
<!--[if IE 8]> <html class="ie ie8" lang="sv" xmlns:fb="https://www.facebook.com/2008/fbml" xmlns:og="http://ogp.me/ns#"> <![endif]-->
<!--[if IE 9]> <html class="ie ie9" lang="sv" xmlns:fb="https://www.facebook.com/2008/fbml" xmlns:og="http://ogp.me/ns#"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="sv" xmlns:fb="https://www.facebook.com/2008/fbml" xmlns:og="http://ogp.me/ns#"> <!--<![endif]-->

<head>

<meta charset="utf-8" />
<meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1" />

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta property="fb:app_id" content="222327831309448" />
<meta property='og:locale' content='sv_SE'/>
<meta property="og:title" content="Browsersverige"/>
<meta property="og:description" content="Vad surfar svenskarna med?"/>
<meta property="og:url" content="http://browsersverige.se"/>
<meta property="og:image" content="http://browsersverige.se/images/icon.png?94fe699d6fbbbaa0d9e39cc9ca4d5123"/>
<meta property="og:site_name" content="Browsersverige"/>

<title>Browsersverige</title>

<link rel="stylesheet" href="css/b.css?1549efb7c537b9a0fdce15a956da1535" type="text/css" media="all" />

<link rel="shortcut icon" type="image/png" href="/images/icon.png?94fe699d6fbbbaa0d9e39cc9ca4d5123"/>
<link rel="apple-touch-icon-precomposed" href="/images/icon.png?94fe699d6fbbbaa0d9e39cc9ca4d5123" />

<!--[if lt IE 9]>
<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

</head>

<body class="start">

<a href="/om" class="about">Om</a>

<header role="banner">
    <a href="/">
	   <h1>Browser<span>sverige</span></h1><div id="loader"></div>
    </a>
    <p class="tagline">Vad surfar svenskarna med?</p>
    <input type="search" id="comboBox" placeholder="Vad surfar svenskarna med?"/>
</header>

<div id="container"> </div>

      <script id="browser-template" type="text/x-handlebars-template">
      <ul>
        {{#each browsers}}
            <li>
              <div class="icon-holder">
                <span aria-hidden="true" class="icon-{{ this.icon }}"></span>

                <div class="device-icon">
                  <span aria-hidden="true" class="icon-{{ this.device }} device"></span>
                <span class="ranking">{{math @index "+" 1}}</span>
              </div>

              </div>
              <span class="name">{{ this.browser }}</span>
              <span class="number timer" data-from="0" data-to="{{ this.market }}">{{ this.market }}</span>%
          </li>
        {{/each}}
    </ul>
      </script>

      <section class="donut">
        <div id="browserdonut"></div>
      </section>


      <footer role="contentinfo">
        <section>
            <a href="/om">Hur funkar det här?</a>
            <a href="http://twitter.com/urre">av @urre</a>
        </section>
      </footer>

</div>
</div>

<script src="js/min/b.js?d112d8513cff1fe52e1e19493739806f"></script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-5407647-53', 'browsersverige.se');
  ga('send', 'pageview');

</script>

</body>
</html>