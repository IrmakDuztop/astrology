// IMPORTANT: For this workshop demo context ONLY, the API key is placed directly in the frontend code.
// This is NOT acceptable for production applications as it exposes your private key to users!
// For real deployments, you must use a backend proxy.
const GEMINI_API_KEY = 'YOUR_API_KEY';

const SYSTEM_PROMPT = `Sana bir dogum haritasi gorseli ve/veya dogum bilgilerimi (dogum tarihi, dogum saati, dogum yeri) gonderecegim.

Gorevin, dogum haritasini astrolojik semboller, gezegen yerlesimleri, burclar, evler, acilar, yoneticiler, element dagilimi, modaliteler, Ay Dugumleri, Chiron, MC ve diger onemli gostergeleri dikkate alarak detayli sekilde analiz etmektir.

Analizi yalnizca yuzeysel yorumlarla sinirlama. Tum haritayi butunsel olarak degerlendir ve birbirleriyle etkilesimlerini acikla.

Onemli:
- Kesin hukumler verme.
- Gelecegi kesin olarak bildigini iddia etme.
- Tum yorumlari "potansiyeller", "egilimler" ve "olasi ozellikler" olarak ifade et.
- Saglik konusunda teshis koyma, yalnizca dikkat edilmesi gereken egilimleri belirt.
- Belirsiz veya eksik bilgiler varsa bunu acikca soyle.
- Hem guclu hem de gelistirilmesi gereken yonleri durustce belirt.
- Sadece olumlu yorumlar yapma; dengeli ve gercekci ol.
- Turkce yaz.
- Cok detayli analiz yap.

Asagidaki basliklarda inceleme yap:

# 1. Genel Kisilik Analizi
- Karakter yapisi
- Insanlara yansittigi imaj
- Ic dunyasi
- Motivasyon kaynaklari
- Hayata yaklasimi
- Baskin kisilik ozellikleri

# 2. Psikolojik Profil
- Duygusal ihtiyaclar
- Bilincalti egilimleri
- Guvensizlikleri
- Korkulari
- Stres altinda davranis bicimi
- Kriz yonetimi
- Ozguven seviyesi
- Duygusal dayaniklilik

# 3. Cocukluk ve Aile
- Cocukluk doneminin olasi etkileri
- Anne figuru
- Baba figuru
- Aileden alinan kaliplar
- Erken yasta ogrenilen dersler
- Cocukluk travmalarina isaret edebilecek temalar

# 4. Genclik ve Gelisim Sureci
- Ergenlik donemi egilimleri
- Kimlik olusumu
- Sosyal cevre iliskileri
- Karsilasabilecegi temel dersler

# 5. Zeka ve Ogrenme Tarzi
- Nasil ogrenir?
- Analitik dusunme seviyesi
- Yaraticilik duzeyi
- Problem cozme yaklasimi
- Iletisim tarzi
- Guclu zihinsel beceriler

# 6. Yetenek Analizi
- Dogustan gelen yetenekler
- Sonradan gelistirilebilecek yetenekler
- Gizli potansiyeller
- Insanlarin onda fark ettigi guclu yonler

# 7. Kariyer Analizi
- Kariyer motivasyonlari
- Calisma tarzi
- Liderlik potansiyeli
- Yonetici olma egilimi
- Girisimcilik potansiyeli
- Kurumsal hayata uygunluk
- Serbest calisma uygunlugu
- En verimli calisacagi ortamlar

# 8. Meslek Uygunlugu
En uygun:
- Ilk 20 meslek onerisi
- Her meslek icin kisa aciklama
- Neden uygun oldugu
- Basari potansiyeli

# 9. Para ve Finans
- Para kazanma tarzi
- Maddi guclu yonler
- Finansal riskler
- Birikim yapma egilimi
- Yatirim yaklasimi

# 10. Egitim
- Hangi alanlarda daha basarili olabilir?
- Akademik potansiyel
- Ogrenme stratejileri
- Universite ve uzmanlik alani onerileri

# 11. Sosyal Hayat
- Arkadaslik tarzi
- Insan iliskileri
- Sosyal cevredeki rolu
- Insanlarin onu nasil gordugu

# 12. Ask ve Iliskiler
- Iliski beklentileri
- Partner tercihleri
- Askta guclu yonleri
- Askta zorlandigi alanlar
- Evlilik potansiyeli
- Uzun iliski dinamikleri

# 13. Saglik Egilimleri
- Dikkat edilmesi gereken genel alanlar
- Stresin bedene yansima bicimi
- Enerji seviyesi
- Uyku duzeni egilimleri
- Saglikli yasam onerileri

(Bu bolumde teshis koyma.)

# 14. Spor ve Fiziksel Aktiviteler
- En uygun spor dallari
- Takim sporlari mi bireysel sporlar mi?
- Dayaniklilik mi guc mu?
- Rekabet seviyesi
- Fiziksel performans potansiyeli

# 15. Hayat Boyunca Dikkat Edilmesi Gereken Temalar
- Tekrarlayan dersler
- Zorlayici donguler
- Sabote edici aliskanliklar
- Kacinilmasi gereken davranis kaliplari

# 16. Kisisel Gelisim
- Gelistirmesi gereken yonler
- Basariyi artiracak aliskanliklar
- Kendini gerceklestirme yollari

# 17. Yasam Amaci
- Haritanin isaret ettigi temel yasam temalari
- Ruhsal ve kisisel gelisim alanlari
- Hayat misyonuna dair olasi gostergeler

# 18. Yas Donemleri Analizi
Ayri ayri degerlendir:
- 0-12 yas
- 13-18 yas
- 19-25 yas
- 26-35 yas
- 36-50 yas
- 50 yas sonrasi

Her donemde one cikabilecek gelisim alanlarini belirt.

# 19. Guclu ve Zayif Yonler Tablosu

Ayri ayri listele:
- En guclu 10 yon
- En cok gelistirilmesi gereken 10 yon

# 20. Sonuc

En sonda su basliklarla kisa ozet cikar:

- En guclu ozellikleri
- En buyuk potansiyeli
- En uygun kariyer alanlari
- En uygun sporlar
- Dikkat etmesi gereken konular
- Kisisel gelisim tavsiyeleri
- Genel degerlendirme puani (potansiyel, liderlik, yaraticilik, disiplin, sosyal beceri, kariyer uyumu gibi alanlarda 10 uzerinden puanlama yap ve bunun oznel astrolojik bir yorum oldugunu belirt)

Not: Bu uygulamada gercek bir efemeris (astronomik) hesaplama motoru kullanilmamaktadir. Sana sadece kisinin adi, dogum tarihi, dogum saati ve dogum yeri metin olarak verilecek. Gunes burcunu tarihten net cikarabilirsin, ancak Ay burcu, yukselen burc, ev yerlesimleri ve acilar gibi hassas hesap gerektiren unsurlar icin kesin efemeris verisi olmadigini ACIKCA belirt ve bunlari "tahmini" ve "yaklasik" olarak ifade et, kesin hesaplanmis gibi sunma.`;

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('chart-form');
    const formSection = document.getElementById('form-section');
    const loadingSection = document.getElementById('loading-section');
    const resultSection = document.getElementById('result-section');
    const resultContent = document.getElementById('result-content');
    const resetBtn = document.getElementById('reset-btn');
    const btnText = document.querySelector('.btn-text');
    const loadingStatus = document.getElementById('loading-status');
    const tooltip = document.getElementById('zodiac-tooltip');
    const birthDateInput = document.getElementById('birth_date');

    // Configure marked.js
    marked.setOptions({
        breaks: true,
        gfm: true
    });

    drawAstroWheel();

    let planetInterval;
    let linesInterval;

    function getZodiacSignIndex(day, month) {
        if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return 0; // Koç
        if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return 1; // Boğa
        if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return 2; // İkizler
        if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return 3; // Yengeç
        if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return 4; // Aslan
        if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return 5; // Başak
        if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return 6; // Terazi
        if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return 7; // Akrep
        if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return 8; // Yay
        if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return 9; // Oğlak
        if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return 10; // Kova
        if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return 11; // Balık
        return -1;
    }

    birthDateInput.addEventListener('input', (e) => {
        const val = e.target.value;
        if (!val) {
            document.querySelectorAll('.zodiac-glyph').forEach(el => el.classList.remove('zodiac-highlight'));
            return;
        }
        
        const date = new Date(val);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        
        const zodiacIdx = getZodiacSignIndex(day, month);
        
        document.querySelectorAll('.zodiac-glyph').forEach(el => el.classList.remove('zodiac-highlight'));
        if (zodiacIdx !== -1) {
            const activeZodiac = document.getElementById(`zodiac-${zodiacIdx}`);
            if (activeZodiac) activeZodiac.classList.add('zodiac-highlight');
        }
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        btnText.style.opacity = '0.5';
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const birthDate = formData.get('birth_date');
        const birthTime = formData.get('birth_time');
        const birthPlace = formData.get('birth_place');

        // Transition to loading screen
        setTimeout(() => {
            formSection.classList.add('hidden');
            loadingSection.classList.remove('hidden');
            
            // Animate wheel lines drawing sequentially
            let lineIdx = 0;
            const totalLines = 12;
            linesInterval = setInterval(() => {
                if(lineIdx < totalLines) {
                    const el = document.getElementById(`wheel-line-${lineIdx}`);
                    if (el) el.style.strokeDashoffset = '0';
                    lineIdx++;
                } else {
                    clearInterval(linesInterval);
                }
            }, 150);

            // Animate planets appearing after lines
            let planetIdx = 0;
            const totalPlanets = 7;
            setTimeout(() => {
                planetInterval = setInterval(() => {
                    if(planetIdx < totalPlanets) {
                        const el = document.getElementById(`planet-${planetIdx}`);
                        if (el) el.style.opacity = 1;
                        planetIdx++;
                    } else {
                        clearInterval(planetInterval);
                    }
                }, 1500);
            }, 1800);

            let statuses = [
                "Ev konumları hesaplanıyor...",
                "Astrolojik semboller diziliyor...",
                "Gezegen açıları oluşturuluyor...",
                "Yapay zeka analizi başlıyor...",
                "Yorumlar teknik dilde derleniyor..."
            ];
            let statusIndex = 0;
            const statusInterval = setInterval(() => {
                statusIndex = Math.min(statusIndex + 1, statuses.length - 1);
                loadingStatus.textContent = statuses[statusIndex];
            }, 4000);

            const promptText = `İsim: ${name}, Doğum Tarihi: ${birthDate}, Doğum Saati: ${birthTime}, Doğum Yeri: ${birthPlace}`;

            fetchChartAnalysis(promptText, statusInterval);
        }, 300);
    });

    resetBtn.addEventListener('click', () => {
        resultSection.classList.add('hidden');
        formSection.classList.remove('hidden');
        form.reset();
        resultContent.innerHTML = '';
        btnText.style.opacity = '1';
        
        // Reset interactive elements
        document.querySelectorAll('.zodiac-glyph').forEach(el => el.classList.remove('zodiac-highlight'));
        document.querySelectorAll('.planet-glyph').forEach(el => el.style.opacity = 0);
        document.querySelectorAll('.house-line').forEach(el => el.style.strokeDashoffset = '130');
    });

    async function fetchChartAnalysis(userText, statusInterval) {
        try {
            if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_API_KEY' || GEMINI_API_KEY.includes('paste-your-key-here')) {
                throw new Error('MISSING_KEY');
            }

            const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
            
            const requestBody = {
                systemInstruction: {
                    parts: [
                        { text: SYSTEM_PROMPT }
                    ]
                },
                contents: [
                    {
                        role: "user",
                        parts: [
                            { text: userText }
                        ]
                    }
                ]
            };

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            clearInterval(statusInterval);
            clearInterval(planetInterval);
            clearInterval(linesInterval);
            // Ensure all elements are visible if request finishes fast
            document.querySelectorAll('.planet-glyph').forEach(el => el.style.opacity = 1);
            document.querySelectorAll('.house-line').forEach(el => el.style.strokeDashoffset = 0);

            if (response.status === 429) {
                throw new Error('RATE_LIMIT');
            }

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Gemini API Error:", errorData);
                throw new Error('API_ERROR');
            }

            const data = await response.json();
            const responseText = data.candidates[0].content.parts[0].text;

            loadingSection.classList.add('hidden');
            resultSection.classList.remove('hidden');
            
            // Format output into collapsible sections (Details/Summary)
            const htmlContent = formatResponseToCollapsible(responseText);
            resultContent.innerHTML = htmlContent;
            
        } catch (error) {
            clearInterval(statusInterval);
            clearInterval(planetInterval);
            clearInterval(linesInterval);
            loadingSection.classList.add('hidden');
            formSection.classList.remove('hidden');
            btnText.style.opacity = '1';
            
            if (error.message === 'MISSING_KEY') {
                alert('Eksik API Anahtarı: Lütfen app.js dosyasını açarak GEMINI_API_KEY sabitine kendi API anahtarınızı yapıştırın.');
            } else if (error.message === 'RATE_LIMIT') {
                alert('Şu anda çok fazla istek var, lütfen birkaç dakika sonra tekrar deneyin.');
            } else {
                alert('Harita analizi sırasında bir hata oluştu. Lütfen bağlantınızı veya API ayarlarınızı kontrol edin.');
            }
        }
    }

    function formatResponseToCollapsible(markdown) {
        const rawHtml = marked.parse(markdown);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = rawHtml;
        
        let finalHtml = '';
        let currentSection = null;
        
        Array.from(tempDiv.children).forEach(el => {
            if (el.tagName === 'H1') {
                if (currentSection) {
                    finalHtml += currentSection + '</details>';
                }
                const openAttr = finalHtml === '' ? 'open' : '';
                currentSection = `<details class="astro-section" ${openAttr}><summary><h2>${el.innerHTML}</h2></summary><div class="section-content">`;
            } else {
                if (currentSection) {
                    currentSection += el.outerHTML;
                } else {
                    finalHtml += el.outerHTML;
                }
            }
        });
        
        if (currentSection) {
            finalHtml += currentSection + '</div></details>';
        }
        
        return finalHtml;
    }

    function drawAstroWheel() {
        const cx = 200, cy = 200;
        const innerR = 50, middleR = 140, outerR = 180;
        
        const houseLinesGroup = document.getElementById('house-lines');
        const zodiacGroup = document.getElementById('zodiac-glyphs');
        const planetGroup = document.getElementById('planet-glyphs');
        
        const zodiacSigns = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
        const zodiacNames = ['Koç', 'Boğa', 'İkizler', 'Yengeç', 'Aslan', 'Başak', 'Terazi', 'Akrep', 'Yay', 'Oğlak', 'Kova', 'Balık'];
        
        for(let i = 0; i < 12; i++) {
            const angle = (i * 30) * Math.PI / 180;
            
            // Draw line (length is outerR - innerR = 130)
            const x1 = cx + innerR * Math.cos(angle);
            const y1 = cy + innerR * Math.sin(angle);
            const x2 = cx + outerR * Math.cos(angle);
            const y2 = cy + outerR * Math.sin(angle);
            
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", x1);
            line.setAttribute("y1", y1);
            line.setAttribute("x2", x2);
            line.setAttribute("y2", y2);
            line.setAttribute("class", "wheel-line house-line");
            line.id = `wheel-line-${i}`;
            // Set up for animation
            line.style.strokeDasharray = "130";
            line.style.strokeDashoffset = "130";
            line.style.transition = "stroke-dashoffset 0.6s ease-out";
            
            houseLinesGroup.appendChild(line);
            
            // Draw zodiac glyphs
            const textAngle = ((i * 30) + 15) * Math.PI / 180;
            const textR = 160;
            const tx = cx + textR * Math.cos(textAngle);
            const ty = cy + textR * Math.sin(textAngle);
            
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", tx);
            text.setAttribute("y", ty);
            text.setAttribute("class", "glyph zodiac-glyph");
            text.id = `zodiac-${i}`;
            text.textContent = zodiacSigns[i];
            zodiacGroup.appendChild(text);

            // Tooltip interactivity
            text.addEventListener('mouseenter', () => {
                text.classList.add('zodiac-hover');
                tooltip.textContent = zodiacNames[i];
                tooltip.classList.remove('hidden');
                tooltip.style.opacity = 1;
            });
            text.addEventListener('mousemove', (e) => {
                tooltip.style.left = (e.pageX + 15) + 'px';
                tooltip.style.top = (e.pageY + 15) + 'px';
            });
            text.addEventListener('mouseleave', () => {
                text.classList.remove('zodiac-hover');
                tooltip.style.opacity = 0;
                setTimeout(() => tooltip.classList.add('hidden'), 200);
            });
        }
        
        // Prepare planet glyphs
        const planets = ['☉', '☽', '☿', '♀', '♂', '♃', '♄'];
        planets.forEach((p, idx) => {
            const angle = (Math.random() * 360) * Math.PI / 180;
            const radius = 65 + Math.random() * 55; // between 65 and 120
            const px = cx + radius * Math.cos(angle);
            const py = cy + radius * Math.sin(angle);
            
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", px);
            text.setAttribute("y", py);
            text.setAttribute("class", "glyph planet-glyph");
            text.id = `planet-${idx}`;
            text.textContent = p;
            planetGroup.appendChild(text);
        });
    }
});
