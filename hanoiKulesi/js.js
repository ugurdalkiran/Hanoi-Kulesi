$(function(){

	/*
		Description: Hanoi kulesi uygulaması.
		Author: Uğur Dalkıran
		Author URI: https://ugurdalkiran.com/
	*/

	let tumCozumAdimlari = new Array();

	let currentAdim = 0;

	function hanoiKulesi(toplam, cubuk1, cubuk2, cubuk3){

		if ( toplam == 1 ){

			tumCozumAdimlari.push( cubuk1 + ' → ' + cubuk3 );

		}else{

			hanoiKulesi(toplam - 1, cubuk1, cubuk3, cubuk2);
			hanoiKulesi(1, cubuk1, cubuk2, cubuk3);
			hanoiKulesi(toplam - 1, cubuk2, cubuk1, cubuk3);

		}

	}

	let count = $('.kule_A').find('.kutu').length;

	hanoiKulesi(count, 'A', 'B', 'C');

	$.each(tumCozumAdimlari, function(index, value){

		$('.adimlar').append('<li class="index_'+ index +'">'+ value +'</li>');

	});

	$('b.min').html( tumCozumAdimlari.length + ' hamle' );

	$('.adimlar').append('<li>SON</li>');

	let otomatik = null;

	$('.run').click(function(){

		if ( otomatik == null ){

			otomatik = setInterval(function(){ otomatikAdim() }, 375);

		}

	});

	function otomatikAdim(){

		let siradakiAdim = tumCozumAdimlari[currentAdim];

		if ( siradakiAdim == undefined ){

			alert('Hanoi kulesi başarıyla tamamlandı.');

			clearInterval(otomatik);

		}else{

			siradakiAdim = siradakiAdim.split(' → ');

			hanoiAdimAttir(siradakiAdim[0], siradakiAdim[1]);

			$('.index_'+ currentAdim ).addClass('gec');
			currentAdim++;

		}

	}

	function hanoiAdimAttir(nereden, nereye){

		$('.kule_' + nereden).find('.kutu:last').addClass('opacitySil');

		let silinecekClass = $('.kule_' + nereden).find('.kutu:last').attr('class').split(' ')[1];

		setTimeout( () => {

			$('.kule_' + nereden).find('.kutu:last').remove();

		}, 250);

		$('.kule_' + nereye).append('<div class="kutu '+ silinecekClass +' opacityOlus"></div>');

	}

});