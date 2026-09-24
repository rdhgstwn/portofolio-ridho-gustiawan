const projects = [
  {title:'Instalasi Ulang Sistem Operasi & Penggantian HDD',scope:'Instalasi ulang Windows OS pada unit laptop klien, pemeriksaan kondisi hardware, persiapan HDD pengganti untuk unit backup.',hw:'Laptop Klien, HDD 2.5", Installer Windows OS',img:"assets/images/proj-01-os-install.jpg",tag:'OS INSTALLATION',cat:'JARINGAN & KABEL'},
  {title:'Penarikan Kabel Daya CCTV Jalur Outdoor',scope:'Penarikan kabel pada jalur outdoor menuju titik kamera, pengukuran panjang dari gulungan, persiapan jalur sebelum masuk konduit.',hw:'Kabel Power 2x1.5mm, Cable Reel',img:"assets/images/proj-02-cable-pulling.jpg",tag:'CABLE PULLING',cat:'JARINGAN & KABEL'},
  {title:'Monitoring Multi-Channel CCTV Area Residensial',scope:'Konfigurasi split-view 16 kamera pada monitor NVR, verifikasi sudut pandang tiap titik, pengecekan status rekaman aktif.',hw:'NVR 16-Channel, Monitor, Kamera IP Indoor/Outdoor',img:"assets/images/proj-03-cctv-multiview.jpg",tag:'16-CH MULTIVIEW',cat:'SURVEILLANCE CCTV'},
  {title:'Setup Rack Jaringan, UPS & Access Point Ruang Server',scope:'Perapian kabel pada rack, instalasi UPS & router WiFi, pengecekan status koneksi melalui laptop teknisi di lapangan.',hw:'Server Rack 6U, UPS Inforce, Router Tri-Antenna, Patch Cable',img:"assets/images/proj-04-rack-setup.jpg",tag:'NETWORK RACK SETUP',cat:'JARINGAN & KABEL'},
  {title:'Distribusi Unit Telepon Panasonic KX-TS505MX',scope:'Penerimaan & sortir unit telepon PABX per lantai, pengecekan kelengkapan dus sebelum proses instalasi ekstensi.',hw:'Panasonic KX-TS505MX x12, Kabel Ekstensi',img:"assets/images/proj-05-phone-deployment.jpg",tag:'TELEPHONE UNIT DEPLOYMENT',cat:'IP PBX & TOA'},
  {title:'Konfigurasi Access Point & Pemetaan Titik Pangkalan',scope:'Login web-admin access point, pengaturan jaringan WiFi, pencatatan manual titik pangkalan & ID perangkat.',hw:'D-Link DAP-X1810, Laptop Konfigurasi, Logbook Lapangan',img:"assets/images/proj-06-ap-config.jpg",tag:'AP CONFIGURATION',cat:'JARINGAN & KABEL'},
  {title:'Instalasi Jalur Kabel di Atas Plafon Koridor Gedung',scope:'Penarikan kabel jaringan di atas plafon gedung, pemasangan dudukan kabel, kerja pada ketinggian sesuai prosedur K3.',hw:'Tangga Alumunium, Kabel UTP, Cable Clip',img:"assets/images/proj-07-ceiling-cable.jpg",tag:'CEILING CABLE ROUTING',cat:'JARINGAN & KABEL'},
  {title:'Terminasi Panel Power Supply & Video Balun CCTV',scope:'Pemasangan power supply 8-channel, terminasi kabel BNC ke video balun, perapian jalur kabel pada dinding.',hw:'CCTV Power Supply 8CH, Video Balun, Kabel Coaxial',img:"assets/images/proj-08-power-termination.jpg",tag:'POWER & SIGNAL TERMINATION',cat:'SURVEILLANCE CCTV'},
  {title:'Deployment CCTV 8-Channel Area Dapur & Produksi',scope:'Instalasi kamera fisheye & standar pada area produksi, konfigurasi DVR, monitoring bandwidth tiap channel.',hw:'DVR 8-Channel, Kamera Fisheye, Monitor',img:"assets/images/proj-09-dvr-deployment.jpg",tag:'DVR DEPLOYMENT',cat:'SURVEILLANCE CCTV'},
  {title:'Instalasi & Pengujian Ekstensi Telepon PABX',scope:'Unboxing unit telepon, pengujian nada sambung per ekstensi, pencocokan nomor sebelum serah terima ke klien.',hw:'Panasonic KX-TS505MX, Kabel Line Telepon',img:"assets/images/proj-10-extension-testing.jpg",tag:'EXTENSION TESTING',cat:'IP PBX & TOA'},
  {title:'Pemasangan Unit Telepon & Printer pada Meja Kerja',scope:'Penempatan unit telepon PABX pada meja kerja staf, pengujian sambungan line telepon, integrasi dengan printer & PC kerja.',hw:'Panasonic Telephone Unit, Epson L210 Printer, PC Monitor',img:"assets/images/proj-11-desk-unit.jpg",tag:'DESK UNIT INSTALLATION',cat:'IP PBX & TOA'},
  {title:'Instalasi Line Telepon pada Titik Kerja Baru',scope:'Pemasangan unit telepon pada titik kerja baru, penyambungan kabel line ke roset dinding, pengujian nada panggil.',hw:'Panasonic Telephone Unit, Line Roset',img:"assets/images/proj-12-line-install.jpg",tag:'LINE INSTALLATION',cat:'IP PBX & TOA'},
  {title:'Verifikasi Rekaman CCTV Saat Instalasi Line Telepon',scope:'Pengecekan hasil rekaman kamera fisheye secara langsung di lokasi, memastikan sudut pandang & kualitas gambar sudah sesuai.',hw:'Kamera Fisheye Indoor, DVR/NVR',img:"assets/images/proj-13-footage-verify.jpg",tag:'FOOTAGE VERIFICATION',cat:'SURVEILLANCE CCTV'},
  {title:'Konfigurasi Live View NVR Hikvision via Web',scope:'Login web-interface NVR Hikvision, pengaturan tampilan multi-kamera, pengecekan status live tiap channel.',hw:'Hikvision NVR, Kamera IP 12-Channel, Laptop Konfigurasi',img:"assets/images/proj-14-hikvision-webview.jpg",tag:'HIKVISION WEB LIVE VIEW',cat:'SURVEILLANCE CCTV'},
  {title:'Pemasangan Kamera Dome pada Sudut Plafon',scope:'Pemasangan kamera dome indoor pada sudut ruangan, pengaturan sudut pandang optimal, perapian jalur kabel menuju plafon.',hw:'Dome Camera Indoor, Kabel Coaxial/UTP',img:"assets/images/proj-15-dome-mounting.jpg",tag:'DOME CAMERA MOUNTING',cat:'SURVEILLANCE CCTV'}
];

const grid = document.getElementById('pgrid');

document.querySelectorAll('.fbtn').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.fbtn').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    const f = b.dataset.f;
    grid.querySelectorAll('.pcard').forEach(c => {
      c.style.display = (f === 'all' || c.dataset.cat === f) ? '' : 'none';
    });
  });
});

function openModal(i) {
  const p = projects[i];
  document.getElementById('mimg').src = p.img;
  document.getElementById('mcat').textContent = p.cat;
  document.getElementById('mtag').textContent = p.tag;
  document.getElementById('mtitle').textContent = p.title;
  document.getElementById('mscope').innerHTML = '<span>SCOPE OF WORK</span>' + p.scope;
  document.getElementById('mhw').innerHTML = '<span>HARDWARE TERPASANG</span>' + p.hw;
  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
