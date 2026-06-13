# CLAUDE.md — Valeo Giriş Ekranı

Bu dosya, **Valeo Giriş (Login) Ekranı** projesinde çalışan Claude Code için ana
talimatları içerir. Her oturumun başında okunur. Amaç; kurumsal kimliğe uygun,
mobil uyumlu ve erişilebilir bir giriş ekranı üretmektir.

## Proje Hakkında

Valeo firması için **kullanıcı adı / şifre** ile giriş yapılan bir web giriş
ekranı. Tek sayfa, hafif ve bağımlılıksız olacak şekilde tasarlanır.

- **Teknoloji**: Vanilla HTML + CSS + JavaScript (build aracı yok, çerçeve yok)
- **Hedef**: Tek `index.html` üzerinden çalışan, mobil uyumlu (responsive) ekran
- **Tarayıcı**: Güncel Chrome, Firefox, Safari, Edge (son 2 sürüm)

> ℹ️ Çerçeve (React/Vue) veya CSS framework (Tailwind/Bootstrap) gerekiyorsa
> önce kullanıcıya sor; varsayılan olarak saf HTML/CSS/JS kullan.

## Dizin Yapısı

```
valeo-giris-ekrani/
├── CLAUDE.md          # Bu dosya — proje talimatları
├── index.html         # Giriş ekranı (tek sayfa)
├── css/
│   └── style.css      # Tüm stiller (responsive dahil)
├── js/
│   └── giris.js       # Form doğrulama ve giriş mantığı
└── assets/
    └── valeo-logo.svg # Valeo logosu (görseldeki gibi)
```

## Ekran Gereksinimleri

Giriş ekranı **mutlaka** şunları içermeli:

1. **Logo** — Üstte ortalanmış Valeo logosu (görseldeki kurumsal logo).
2. **Kullanıcı adı alanı** — `<label>` ile etiketlenmiş, `type="text"`.
3. **Şifre alanı** — `type="password"`, yanında göster/gizle (👁) seçeneği.
4. **Giriş butonu** — Tam genişlik, Valeo yeşili arka plan.
5. **Hata mesajı alanı** — Boş alan veya hatalı girişte kullanıcıya geri bildirim.

## Marka / Görsel Kimlik

Logo ve renkler görseldeki Valeo kurumsal kimliğine uygun olmalı:

| Öğe              | Değer                  | Açıklama                          |
| ---------------- | ---------------------- | --------------------------------- |
| Ana renk (yeşil) | `#84BD00` (Valeo yeşili) | Buton, vurgu, logo yazısı         |
| İkincil renk     | `#5B6770` (gri)        | Logodaki "swoosh"/alt çizgi, metin|
| Arka plan        | `#FFFFFF` / `#F5F6F7`  | Sayfa zemini                      |
| Hata rengi       | `#D32F2F`              | Hata mesajları                    |

- Logo: "valeo" yazısı **yeşil ve kalın**, altında **gri kavisli çizgi (swoosh)**.
- Logo `assets/valeo-logo.svg` olarak vektörel tutulur (her ekranda net görünür).

## Mobil Uyumluluk (Responsive)

- `<meta name="viewport" content="width=device-width, initial-scale=1">` zorunlu.
- Mobilde form kartı ekran genişliğine yayılır; masaüstünde ortada ~360px kart.
- Dokunmatik hedefler **en az 44×44 px** olsun.
- Sadece sabit `px` değil; `rem`, `%`, `max-width` ve `clamp()` tercih et.
- En az şu kırılma noktasını destekle: `@media (max-width: 480px)`.

## Erişilebilirlik (a11y)

- Her input için bağlı `<label>` (görsel gizlense bile `aria-label`).
- Form gönderiminde hata mesajı `aria-live="polite"` ile duyurulsun.
- Klavye ile tab sırası mantıklı; butona Enter ile erişilebilsin.
- Renk kontrastı WCAG AA (en az 4.5:1) sağlasın.

## Genel Kurallar

1. **Türkçe iletişim**: Kullanıcıyla Türkçe konuş; kod içi değişken/sınıf
   isimleri açık ve okunabilir olsun (Türkçe veya İngilizce tutarlı).
2. **Bağımlılık ekleme**: Onaysız harici kütüphane/CDN ekleme. Gerekirse sor.
3. **Gizli bilgi yok**: Şifre, API anahtarı vb. kodda sabit yazılmaz.
4. **Sahte kimlik doğrulama**: Backend yoksa giriş mantığı yalnızca istemci
   tarafı demo olduğunu kod yorumunda belirt; gerçek doğrulama backend ister.
5. **Doğrulama**: Boş alan kontrolü yap; hatada kullanıcıya net mesaj göster.

## Komutlar

| Amaç              | Komut                                              |
| ----------------- | -------------------------------------------------- |
| Yerelde çalıştır  | `python3 -m http.server 8000` → `localhost:8000`   |
| Sadece dosyayı aç | Tarayıcıda `index.html` dosyasını aç               |
