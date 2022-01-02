# Müsilaj Takip Projesi Notları

## Takip Sistemi Bileşenleri

Uydu ve dron görüntüleri ile gerçekleştirilen uzaktan algılama teknikleri ile 

- müsilajın yayılımı, 

- deniz suyu sıcaklığı, 

- zararlı alg yayılımı, 

- petrol sızıntısı ve kirlilik yayılımı

gibi durumlar takip edilebilir. Buna ek olarak müsilaj oluşumu ve Marmara Denizi'nin sağlığına etki edecek bazı parametrelerin deniz üzerine yerleştirilen istasyonlar ile takibi yapılabilir. Farklı yaklaşımlarla toplanan çok katmanlı veriler derlenerek, Marmara Denizi'nin dijital ikizi olarak nitelendirilecek bir platformda sunulabilir.

Bu yaklaşıma [Marmara Denizi Koruma Eylem Planı'nın](https://twitter.com/murat_kurum/status/1401640842822045701/photo/1) 12 maddesinde şu şekilde değinilmiştir:

> 12- Çevre ve Şehircilik Bakanlığı tarafından yapılan çalışmalar çerçevesinde alıcı ortama deşarj yapan atık su arıtma tesislerinin tamamı 7/24 online izlenecek. Marmara Denizi'ndeki 91 izleme noktası 150'ye çıkarılacak. Türkiye Çevre Ajansı eliyle Marmara Denizi ile ilişkili tüm havzalardaki denetimler uzaktan algılama, uydu ve erken uyarı sistemleri, insansız hava araçları ve radar sistemleri kullanılarak artırılacak.

- [ ] <u>Maddede bahsedilen izleme noktalarının mevcut durumu ve sayılarının nasıl arttırılacağı araştırılmalı.</u>

- [ ] <u>IoT destekli sabit yüzen istasyonlarla -duba- müzilaj ve deniz kirliliğine dair hangi ölçümlerin yapılabileceği araştırılmalı.</u>

### Uzaktan Algılama Yöntemi

Uzaktan algılama sisteme ilişkin ayrıntılı bir inceleme İTÜ tarafından yayınlanan, [MARMARA DENİZİ’NDE DENİZ SALYASI SORUNU ile İlgili Görüş ve Öneriler](https://haberler.itu.edu.tr/docs/default-source/default-document-library/deniz-salyas%C4%B1-(musilaj)-itu_rapor.pdf?sfvrsn=54235df0_2) raporunda yer almaktadır. (Raporun 10-14'üncü sayfalarını okumak faydalı olacaktır.) Uydu görüntülerine ek olarak, dron ve diğer hava araçlarının görüntüleri hassas bölgelerin detaylı incelenmesinde önemli rol oynamaktadır. Uydu harici cihazlarda kullanılan kameraların yeterli dalgaboylarını sağlaması durumunda görüntü işleme açısından aşağıda uydu görüntüsü için anlatılanların dışında bir işlem gerekmemektedir.

#### Müsilajın Yayılımının Uydu Görüntüleriyle Haritalandırılması

Ücretli ve ücretsiz uydu görüntülerine Google Earth ve [Sentinel Hub](https://www.sentinel-hub.com/) üzerinden erişmek mümkündür. Bu platformlar görsel arayüzlerinin yanında api destekleri sayesinde görüntülerin otomatik toplanması ve işlenmesine olanak sağlayacak bir altyapıya sahiptirler.

Şimdiye kadarki denemelerimde Sentinel Hub'ı kullandım. Kamuya açık uydu görüntülerine erişim sağlamak için platform yıllık 5 bin dolar istemektedir. Üyelik gerektiren Airbus Spot-7 ve WorldView uydu fotoğrafları ayrıca ücretlendirilmektedir. Ücretlendirmeye ait detaylı bilgi websitesinin [pricing ](https://www.sentinel-hub.com/pricing/)bölümünde mevcuttur.

Orta ve yüksek çözünürlüklü uyduların aynı bölge üzerinden geçmeleri birkaç gün sürmektedir. Dolayısıyla, daha fazla zamana ait uydu verisi elde etmek için birden fazla uydunun görüntülerini incelemek faydalı olacaktır. <u>Bulutlu günlerde kirlilik takibi kısmen yapılabilirken, müsilaj yüzey haritası çıkarmak mümkün olmayacaktır.</u>

Bulabildiğim kadarıyla müsilaj yayılımı takibinde kullanılabilecek 4 uydu mevcuttur. Bunlar kamuya açık görüntü sağlayan Landsat-8 ve Sentinel-2'nin yanı sıra ücretli abonelik gerektiren Airbus SPOT-7 ve Maxar WorldView uydularıdır. İTÜ raporunda yer alan bir diğer uydu MODIS'in çözünürlüğü bence yeterli değildir.

Müsilajın deniz yüzeyindeki yayılımı görünür ışık spektrumunda gözükse de görünür ışık ile bazı kızılötesi dalga boyları kullanılarak oluşturulmuş bazı formüller müsilajın resimdeki diğer objelerden ayrıştırılmasını kolaylaştırmaktadır. İTÜ raporunda Normalize Edilmiş Su İndeksi kullanılmıştır.

Bu endeks şu şekilde formüle edilmiş ve bu alakalı bantları destekleyen tüm uydularda rahatlıkla kullanılabilmektedir:

> NDWI = (Yeşil Bant - Yakın Kızılötesi Bant) / ( Yeşil Bant + Yakın Kızılötesi Bant )

22 Mart 2021 Sentinel-2 L2A - Görünür Işık

![Ekran görüntüsü 2022-01-01 192325.png](./images/22%20Mart%202021%20Sentinel-2%20L2A%20-%20Görünür%20Işık.png)

22 Mart 2021 Sentinel-2 L2A - NDWI

![Ekran görüntüsü 2022-01-02 001702.png](./images/22%20Mart%202021%20Sentinel-2%20L2A%20-%20NDWI.png)

[Determination of Mucilage in The Sea of Marmara Using Remote Sensing Techniques with Google Earth Engine](https://www.researchgate.net/publication/352777348_Determination_of_Mucilage_in_The_Sea_of_Marmara_Using_Remote_Sensing_Techniques_with_Google_Earth_Engine_Determination_of_Mucilage_in_The_Sea_of_Marmara_Using_Remote_Sensing_Techniques_with_Google_Ear) (Acar, 2021) makalesinde çok daha kullanışlı bulduğum bir kaç formülün bileşimi kullanılmıştır. Bu model müsilajın mavi pikseller ile gösterildiği ve alakasız pek çok unsurun alpha layer ile atıldığı bir görüntü vermektedir. 

Bu formüller ve Sentinel-2 L2A uydu görüntülerine ait bantlar şu şekilde açıklanmıştır:

| Indexes                                   | Abrivations | Equations                                      | Referances            |
| ----------------------------------------- | ----------- |:----------------------------------------------:| --------------------- |
| Normalized Difference Vegetation Index    | NDVI        | $\frac{NIR-RED}{NIR+RED}$                      | (Rouse et al., 1974)  |
| Normalized Difference Water Index         | NDWI        | $\frac{GREEN-NIR}{GREEN+NIR}$                  | (McFeeters, 1996)     |
| Modifed Normalized Difference Water Index | MNDWI       | $\frac{GREEN-SWIR1}{GREEN+SWIR1}$              | (Xu, 2006)            |
| Automated Water Extraction Index          | AWEI_nsh    | 4 * (GREEN-SWIR1) -(0,25 * NIR + 2,75 * SWIR2) | (Feyisa et al., 2014) |

| Band         | Wavelength (nm) | Resolution (m) |
| ------------ | --------------- | -------------- |
| B2 (Blue)    | 496.6           | 10             |
| B3 (Green)   | 560.0           | 10             |
| B4 (Red)     | 664.5           | 10             |
| B8 (NIR)     | 835.1           | 10             |
| B11 (SWIR-1) | 1,613.7         | 20             |
| B12 (SWIR-2) | 2,202.4         | 20             |

Diğer uyduların bantları ile eşleştirmek için aşağıdaki tablo yararlı olacaktır:

![Ekran görüntüsü 2022-01-02 010450.png](./images/uydu%20bant%20frekans%20tabloso.png)

##### Sentinel-2 Uydusu ile Müsilaj Haritası Çıkarma

(Acar, 2021) makalesindeki formüller Sentinel Hub üzerinde oluşturulan bir javascript kodu ile işlenebilmektedir. Bu bağlamda, bu 4 formülü, RGB ve alpha layer katmanları olarak tanımlayan ve Sentinel-2 uydusunun alakalı bantlarını içeren aşağıdaki kodu hazırladım:

###### Sentinel-2 Custom Script

```javascript
//VERSION=3
function setup() {
  return {
    input: ["B02","B03","B04", "B08", "B11", "B12", "dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(sample) {
return [(sample.B08 - sample.B04)/ (sample.B08 + sample.B04),  (sample.B03 - sample.B08) / (sample.B03 + sample.B08) , (sample.B03 - sample.B11) / (sample.B03 + sample.B11) , 4 * ( sample.B03 - sample.B11) - ( 0.25 * sample.B08 - 2.75 * sample.B12) ];
}  
```

###### 22 Mart 2021 Sentinel-2 L2A (Acar, 2021) formülleri ile oluşturulan ön izleme görüntüsü:

![2022-01-01-17-57-45-image.png](./images/22%20Mart%202021%20Sentinel-2%20L2A%20(Acar%2C%202021).png)

Bu noktada elde edilen görüntü segmentasyona imkan veren bir görüntü işleme algoritması ile işlenerek doğrudan karar destek sistemini basleyecek bir formata dönüştürülebilir.

###### Müsilaj Miktarı Ölçümü Testi

Görüntü işleme eğitimi uzun süreceği için daha basit bir yöntemle müsilaj ölçümü sağlayacak bir test tertip ettim. Müsilaj sadece mavi pikseller ile temsil edildiği için belli skalada mavi olan pikselleri sayma yoluna gittim. İzlediğim adımlar şu şekilde:

1) Yukardaki Sentinel-2 uydusuna ait custom script ile denizin genelinin gözüktüğü bulutsuz 17 Mart 2021 gününden yüksek çözünürlüklü bir görüntü istedim.

2) Bu görüntünün altına siyah bir katman ekleyip denizin etrafındaki fazlalıkları cropladım.

3) Aşağıdaki python scripti ile mavi pikselleri saydım ve bu piksellerin temsil ettiği müsilaj ile kaplı alanı ve bu alanın Marmara'nın tümüne olan oranı nı hesapladım: 

```python
import cv2
import numpy as np

img = cv2.imread("test2.png")
BLUE_MIN = np.array([50, 0, 0], np.uint8)
BLUE_MAX = np.array([255, 50, 50], np.uint8)

dst = cv2.inRange(img, BLUE_MIN, BLUE_MAX)
no_blue = cv2.countNonZero(dst) * 0.0447020408
sea_perthousand = no_blue / 11350
print('Müsilaj alanı: ' + str(no_blue) + ' hektar')
print("Marmara Denizi'nin müsilaj ile kaplı alanı: % " + str(sea_perthousand))
cv2.waitKey(0)
```

Çıktı:

```bash
Müsilaj alanı: 6381.0375160368 hektar
Marmara Denizi'nin müsilaj ile kaplı alanı: % 0.5622059485494978
```

##### Diğer Uydular ile Müsilaj haritalandırma

(Acar, 2021) makalesindeki formülleri erişebildiğim diğer ücretsiz uydu olan Landsat 8 uydusuna da uyarladım.

###### Landsat 8 Custom Script

```javascript
//VERSION=3
function setup() {
  return {
    input: ["B05","B07","B06", "B03", "B04", "dataMask"],
    output: { bands: 4 }
  };
}

function evaluatePixel(sample) {
return [(sample.B05 - sample.B04)/ (sample.B05 + sample.B04),  (sample.B03 - sample.B05) / (sample.B03 + sample.B05) , (sample.B03 - sample.B06) / (sample.B03 + sample.B6) , 4 * ( sample.B03 - sample.B06) - ( 0.25 * sample.B05 - 2.75 * sample.B07) ];
}
```

24 Mart 2021 Landsat 8 L2 çıktısı şu şekilde oldu:

![2022-01-01-18-13-04-image.png](./images/24%20Mart%202021%20Landsat%208%20L2.png)

- [ ] Neden mavi değil de siyah anlamadım kodu kontrol etmek lazım.

##### Deniz Sıcaklığı Haritası

Deniz sıcaklığı harıtaları Landsat 8 gibi termal görüntüleme imkanı veren uydularla yapılabilmekte.

###### 17 Mart Landsat 8 L2 Termal görüntü (B10 Bantı)

![2022-01-01-18-35-38-image.png](./images/17%20Mart%20Landsat%208%20L2%20Termal.png)

##### Deniz Kirliliği, Alg, Kloroplast-a, Yağ Sızıntısı Haritaları

- [ ] Alg haritası için şu makaleyi incelemek faydalı olacaktır: [(O'Reilly et al., 1998)](https://sci-hub.se/https://doi.org/10.1029/98JC02160)

- [ ] Bu kaynakta Sentinel Hub için ilginç custom scriptler mevcut, incelenmesi faydalı olabilir: [A repository of custom scripts to be used with Sentinel Hub](https://github.com/sentinel-hub/custom-scripts)

Sentinel-1 SAR uydusu bulutlu havalarda bile deniz kirliliği, alg ve yağ sızıntısı bilgisi verebilmekte. 

###### Sentinel-1 ile Deniz Kirliliği Haritalandırma Custom Code

```javascript
      //Oil slicks and Red tide monitoring  
//By TIZNEGAR Startup Co, www.tiznegar.com
//Dataset:Sentinel-1 AWS-IW-VVVH

var ORM = Math.log(0.01/(0.01+VV*2)); 

if (ORM < [ 0] &&  VV< [ 0.018]&&  VH< [ 0.00126]) { 

   return colorBlend   
    (ORM,                
         [-1.6, -1.4, -1.2, -1, -.8, -.6, -.4, -.2, 0], 
        [     

     [0,0,.1 ],
     [0,0,.4 ],
     [0,0,.8],
     [1,0,.5],
     [1,0,0],
     [1,.5,.2],
     [1,.8,.2],
     [1,1,.4],
     [.5,.8,.3],


      ]);
}
else {
 return [2.5*VV,2.5*VV,2.5*VV]
}
```

###### 23 Mayıs Sentinel-1 SAR Deniz Kirliliği Haritası

![Ekran görüntüsü 2022-01-02 020156.png](./images/23%20May%C4%B1s%20Sentinel-1%20SAR%20Deniz%20Kirlili%C4%9Fi.png)
