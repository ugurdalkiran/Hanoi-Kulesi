# Hanoi Kulesi - Yapay Zekaya Giriş - PHP ve JavaScript

Hanoi kulesi, bir matematik oyunu veya bulmacadır. Üç kule ve farklı boyutlarda disklerden oluşur. Bu diskleri 3 kule arasında aktarmaya dayalı bir bulmacadır. Bulmaca, en baştaki kuledeki en küçük disk yukarıda olacak şekilde, küçükten büyüğe kule üzerinde dizilmiş olarak başlar. Böylece konik bir şekil oluşmuş olur. En baştaki kulede bulunan diskleri en sondaki kuleye büyük olandan küçük olana doğru sırayla yerleştirmeniz gerekmektedir.

Hızlıca incelemek için: [https://www.ugurdalkiran.com/hanoiKulesi/](https://www.ugurdalkiran.com/hanoiKulesi/)

## Hanoi Kulesi Kuralları

* Birinci kuledeki tüm diskleri üçüncü kuleye aktaracaksınız.
* Her hamlede yalnızca 1 disk taşıyabilirsiniz.
* Hiçbir disk kendisinden küçük bir diskin üzerine yerleştirilemez.
* Küçük diskler kendinden büyük disklerin üzerine yerleştirilebilir.
* Zeka oyunudur.
* Oyunun amacı, oyun başındaki birinci kuledeki disk sırasını üçüncü kulede elde etmektir.

![PNG](https://raw.githubusercontent.com/ugurdalkiran/Hanoi-Kulesi/master/imgs/1.png)

Yukarıdaki görselde görüldüğü üzere 3 disk ile oynanan oyun en kısa çözüm olarak 7 adımda tamamlanabiliyor.

* 3 disk = 7 adım
* 5 disk = 31 adım
* 7 disk = 127 adım
* N disk = (2 üzeri N - 1) adım

Sistemin minimum çözüm adımları 2'nin disk sayısı kuvveti - 1 üzerine dayalıdır. Örneğin 5 disk için (2.2.2.2.2) - 1 = 31 olarak hesaplanmıştır.

## Hanoi Kulesi Bulmacasının Çözüm Fonksiyonu

Bu bulmacayı çözebilmek için 3 adımlı ve kendini tekrar eden (Rekürsif) bir fonksiyon kullanacağız.

**Genetik algoritma** kullanarak oluşturduğum fonksiyon aşağıdaki gibidir.

hanoiKulesi(N, A, B, C)

```
hanoiKulesi = Fonksiyon ismi.
N = Bulmacadaki toplam disk sayısı.
A = Birinci kulenin ismi.
B = İkinci kulenin ismi.
C = Üçüncü kulenin ismi.
```

Fonksiyonun 3 adımı ise aşağıdaki gibidir.

```
hanoiKulesi(N - 1, A, C, B)
hanoiKulesi(N, A, B, C)
hanoiKulesi(N - 1, B, A, C)
```

## Çözüm Fonksiyonunu Kullanarak 3 Disk ile Çözüm

Yazımın kısa olması açısından fonksiyon ismi hanoiKulesi, H olarak kullanılmıştır.

```
H(3, A, B, C) -> H(2, A, C, B) -> H(1, A, B, C) -> -> -> A kulesinden C kulesine taşı.
                               -> H(1, A, C, B) -> -> -> A kulesinden B kulesine taşı.
                               -> H(1, C, A, B) -> -> -> C kulesinden B kulesine taşı.

              -> H(1, A, B, C) -> ------------------> -> A kulesinden C kulesine taşı.

              -> H(2, B, A, C) -> H(1, B, C, A) -> -> -> B kulesinden A kulesine taşı.
                               -> H(1, B, A, C) -> -> -> B kulesinden C kulesine taşı.
                               -> H(1, A, B, C) -> -> -> A kulesinden C kulesine taşı.
```

Fonksiyona ilk giren toplam disk sayısı her bir adımda azaltılarak yapılacak olan 1 hamle bulunmaktadır. Bu hesaplamada işlemlerin doğru bir sırada yapılması son derece önemlidir. 

Yukarıda 3 disk ile çözüm üretilmiş olup, bu çözüm fonksiyonu kullanılarak istenilen boyuttaki disk sayıları içinde çözüm üretilebilir.

## Çözüm Fonksiyonunun Pseudo Code (Sözde Kodu)

```php
hanoiKulesi(N, A, B, C)
Begin
	if N = 1 then
		Print: A -> C
	else
		Call hanoiKulesi(N-1, A, C, B);
		Call hanoiKulesi(1, A, B, C);
		Call hanoiKulesi(N-1, B, A, C);
	endif
End
```

## Hanoi Kulesi Bulmacasının Kodlama Aşaması

Bulmacanın çözümü için HTML, CSS, **PHP ve JavaScript** kullanılarak web ortamında bir sayfa hazırlanmıştır.

PHP ile sayfaya gönderilen GET parametresi (?disk=3) değeri ile istenilen sayıda diskler oluşturulabilir ve çözüm hatasız bir şekilde uygulanabilir. Bu sayede bulmaca yalnızca 5 diskten oluşan Hanoi kulesi için kodlanmamış olup, istenilen sayıdaki disk ile çözümlenmiştir.

HTML ve CSS kullanılarak uygulamaya görsellik ve animasyonlar eklenmiştir.

Bulmacanın çözümü ve temelde uygulamada kullanılan ağırlıklı dil **JavaScript** olarak seçilmiştir. Böylece sayfa yüklendiğinde GET parametresi ile gelen disk sayısına bağlı olarak yapılacak olan işlem adımları oluşturuluyor ve bir adım ilerle butonuna tıklandığında sayfa herhangi bir şekilde yenilenmeden veya değişmeden adımlar ilerletilebiliyor.

## JavaScript ile Çözüm Fonksiyonu

```js
let tumCozumAdimlari = new Array();
function hanoiKulesi(toplam, cubuk1, cubuk2, cubuk3){

if ( toplam == 1 ){

		tumCozumAdimlari.push( cubuk1 + ' → ' + cubuk3 );

	}else{

		hanoiKulesi(toplam - 1, cubuk1, cubuk3, cubuk2);
		hanoiKulesi(1, cubuk1, cubuk2, cubuk3);
		hanoiKulesi(toplam - 1, cubuk2, cubuk1, cubuk3);

	}

}
```

## Hanoi Kulesi Uygulama Görselleri

![JPG](https://raw.githubusercontent.com/ugurdalkiran/Hanoi-Kulesi/master/imgs/2.jpg)
![JPG](https://raw.githubusercontent.com/ugurdalkiran/Hanoi-Kulesi/master/imgs/3.jpg)

## JavaScript ile Disklerin Kuleler Üzerinde Hareket Etmesi

Öncelikle bir adım ilerle butonuna tıklandığını yakalamam gerekiyor. Bunun için jQuery click() metodu ile butona tıklanmış ise otomatik her 300 milisaniyede çalışan bir fonksiyon ile tumCozumAdimlari dizisinde en son kalınan noktayı uygulayıp, bir sonraki noktaya geçmek için arttırmam gerekiyor.

```js
function otomatikAdim(){

	let siradakiAdim = tumCozumAdimlari[currentAdim];

	if ( siradakiAdim == undefined ){

		alert('Hanoi kulesi başarıyla tamamlandı.'); clearInterval(otomatik);

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

	setTimeout( () => { $('.kule_' + nereden).find('.kutu:last').remove(); }, 250);

	$('.kule_' + nereye).append('<div class="kutu '+ silinecekClass +' opacityOlus"></div>');

}
```

tumCozumAdimlari dizisinde değerler **"A -> B"** formatında tutuluyor. JavaScript split() metodu ile bu değeri parçalayıp hanoiAdimAttir fonksiyonuna nereden ve nereye olarak gönderiyorum.

İlgili fonksiyonda önce nereden kulesinde bulunan son diske opacitySil CSS özelliklerini atıyorum. Böylece bu disk yavaş bir animasyon ile soluklaşarak ekrandan kayboluyor. Ekrandan kaybolma animasyonu yaklaşık 250 milisaniye sürdüğü için, 250 milisaniye bekledikten sonra o diski tamamen HTML’den kaldırıyorum.
Taşıma yapacağım kuleye ise silinen diskin CSS özelliklerinden oluşan yeni bir disk oluşturup, kulenin en sonuna jQuery append() metodu ile ekliyorum. En sonuna ekliyorum fakat CSS **display:flex** özelliklerinden yararlanarak 5, 4, 3, 2, 1 şeklinde sıralanan bir diziyi **flex-direction:column-reverse** özelliği ile 1, 2, 3, 4, 5 şeklinde ekranda gösterebiliyorum.

## Uygulamanın Tamamlanması

Uygulama aşağıdaki adres üzerinden erişilebilir bir şekilde yayınlanmaktadır.

[https://www.ugurdalkiran.com/hanoiKulesi/](https://www.ugurdalkiran.com/hanoiKulesi/)
