// Valeo giriş ekranı — istemci tarafı demo mantığı.
// NOT: Gerçek kimlik doğrulama backend gerektirir. Buradaki kontrol yalnızca
// boş alan doğrulaması ve örnek geri bildirim içindir; güvenlik sağlamaz.

const form = document.getElementById("giris-form");
const kullanici = document.getElementById("kullanici");
const sifre = document.getElementById("sifre");
const hata = document.getElementById("hata");
const gosterBtn = document.getElementById("goster-btn");

// Şifre göster / gizle
gosterBtn.addEventListener("click", () => {
  const gizli = sifre.type === "password";
  sifre.type = gizli ? "text" : "password";
  gosterBtn.setAttribute("aria-pressed", String(gizli));
  gosterBtn.setAttribute("aria-label", gizli ? "Şifreyi gizle" : "Şifreyi göster");
});

// Form gönderimi
form.addEventListener("submit", (e) => {
  e.preventDefault();
  hata.textContent = "";

  const kullaniciDeger = kullanici.value.trim();
  const sifreDeger = sifre.value.trim();

  if (!kullaniciDeger || !sifreDeger) {
    hata.textContent = "Lütfen kullanıcı adı ve şifreyi doldurun.";
    (kullaniciDeger ? sifre : kullanici).focus();
    return;
  }

  // Buraya backend'e istek (fetch) eklenir. Demo amaçlı başarılı kabul ediliyor.
  hata.textContent = "";
  alert(`Giriş başarılı (demo): ${kullaniciDeger}`);
  form.reset();
});
