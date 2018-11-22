<!DOCTYPE html>
<html lang="tr">
<head>
	<meta charset="UTF-8" />
	<title>Hanoi Kulesi</title>
	<link rel="stylesheet" type="text/css" href="style.css" />

	<script type="text/javascript" src="jquery.js"></script>
	<script type="text/javascript" src="js.js?v=1"></script>
</head>
<body>

	<?php $kule = isset($_GET['disk']) ? $_GET['disk'] : 5; ?>

	<div class="kapsaUst">
		<a href="?disk=1">1 Disk</a>
		<a href="?disk=2">2 Disk</a>
		<a href="?disk=3">3 Disk</a>
		<a href="?disk=4">4 Disk</a>
		<a href="?disk=5">5 Disk</a>
		<a href="?disk=6">6 Disk</a>
		<a href="?disk=7">7 Disk</a>
		<a href="?disk=8">8 Disk</a>
	</div>

	<div class="kapsa">

		<div class="adimlar<?php echo $kule > 5 ? ' overlay' : '' ?>"></div>

		<div class="kuleler">
			<div class="kuleTek kule_A">
				<?php

					for ( $i = $kule; $i >= 1; $i-- ){
						
						echo '<div class="kutu kutu'.$i.'"></div>';

					}

				?>
			</div>
			<div class="kuleTek kule_B"></div>
			<div class="kuleTek kule_C"></div>
		</div>
		
	</div>

	<div class="kapsaAlt">
		<div class="info">
			<p>Toplam <?php echo $kule ?> diskten oluşan hanoi kulesi uygulaması için <b>minimum</b> hamle sayısı <b class="min"></b> olarak hesaplanmıştır.</p>
		</div>
		<div class="run">BAŞLAT</div>
	</div>

	<div class="ugurdalkiran">
		<a target="_blank" href="https://www.ugurdalkiran.com/">ugurdalkiran.com</a>
	</div>

	<!--
		Description: Hanoi kulesi uygulaması.
		Author: Uğur Dalkıran
		Author URI: https://ugurdalkiran.com/
	-->
		
</body>
</html>