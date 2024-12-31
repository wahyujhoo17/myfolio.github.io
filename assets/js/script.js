document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.getElementById('checkLanguage');
  
  const texts = {
    english: {
      home: "Home",
      about: "About",
      services: "Services",
      work: "Work",
      contact: "Contact",
      heroTitle: "Wahyu Bagus Setiawan",
      profile_1: "About me",
      about1:"I am a fresh graduate in Informatics Engineering from Universitas Surabaya with a strong foundation in web and mobile application development. I have gained practical experience in programming through academic projects and internships, where I developed web-based applications using technologies such as PHP, JavaScript, Laravel, and MySQL.",
      about2:"I am passionate about learning new technologies, adaptable to different environments, and have excellent problem-solving and teamwork skills. I am looking for opportunities to contribute my expertise and grow in the field of programming.",
      services:"Services",
      s_title1:"Web Development",
      s_title2:"Mobile App Development",
      s_title3:"UI/UX Design",
      s_title4:"Database Management",
      s_title5:"System Analysis and Design",
      s_title6:"Software Testing & Debugging",
      s_desk1:"Full-stack web development using PHP, Laravel, and JavaScript,Front-end development with HTML, CSS, and React,Back-end development with MySQL and SQL Server.",
      s_desk2:"Cross-platform mobile app development using Flutter and Dart, Android app development with Android Studio.",
      s_desk3:"User interface and experience design using Figma, Responsive and user-friendly designs for web and mobile apps.",
      s_desk4:"Database design and optimization, Implementation of MySQL, SQL Server, and other relational databases.",
      s_desk5:"Analyzing business needs and developing technical specifications,Designing database architecture and workflows for complex systems.",
      s_desk6:"Conducting functional testing, identifying bugs, and optimizing software performance.",
      porto:"Portfolio",
      msg:"Send Message",
      contact2:"Contact Me",
      mInfo:"Feel free to get in touch for any questions or potential opportunities. I am eager to connect and explore new projects together.",
      language : "Language",
      name:"Name",
      age:"Age",
    },
    indonesian: {
      home: "Beranda",
      about: "Tentang",
      services: "Layanan",
      work: "Pekerjaan",
      contact: "Kontak",
      heroTitle: "Wahyu Bagus Setiawan",
      profile_1: "Tentang saya",
      about1:"Saya adalah lulusan baru dari Teknik Informatika Universitas Surabaya dengan dasar yang kuat dalam pengembangan aplikasi web dan mobile. Saya telah mendapatkan pengalaman praktis dalam pemrograman melalui proyek akademik dan kerja praktek, di mana saya mengembangkan aplikasi berbasis web menggunakan teknologi seperti PHP, JavaScript, Laravel, dan MySQL.",
      about2:"Saya memiliki semangat untuk mempelajari teknologi baru, mudah beradaptasi dengan lingkungan yang berbeda, serta memiliki kemampuan pemecahan masalah dan kerja sama tim yang baik. Saya mencari kesempatan untuk berkontribusi dengan keahlian saya dan berkembang di bidang pemrograman.",
      services:"Layanan",
      s_title1:"Pengembangan Web",
      s_title2:"Pengembangan Aplikasi Mobile",
      s_title3:"Desain UI/UX",
      s_title4:"Manajemen Basis Data",
      s_title5:"Analisis dan Desain Sistem",
      s_title6:"Pengujian dan Debugging Perangkat Lunak",
      s_desk1:"Pengembangan web full-stack menggunakan PHP, Laravel, dan JavaScript. Pengembangan front-end dengan HTML, CSS, dan React, serta pengembangan back-end dengan MySQL dan SQL Server.",
      s_desk2:"Pengembangan aplikasi mobile lintas platform menggunakan Flutter dan Dart. Pengembangan aplikasi Android dengan Android Studio.",
      s_desk3:"Desain antarmuka dan pengalaman pengguna (UI/UX) menggunakan Figma. Desain yang responsif dan ramah pengguna untuk aplikasi web dan mobile.",
      s_desk4:"Desain dan optimasi basis data, serta implementasi MySQL, SQL Server, dan basis data relasional lainnya.",
      s_desk5:"Menganalisis kebutuhan bisnis dan mengembangkan spesifikasi teknis. Merancang arsitektur basis data dan alur kerja untuk sistem yang kompleks.",
      s_desk6:"Melakukan pengujian fungsional, mengidentifikasi bug, serta mengoptimalkan kinerja perangkat lunak.",
      porto:"Portofolio",
      msg:"Kirim Pesan",
      contact2:"Hubungi Saya",
      mInfo:"Jangan ragu untuk menghubungi kami jika ada pertanyaan atau peluang potensial. Saya ingin sekali terhubung dan menjelajahi proyek baru bersama.",
      language : "Bahasa",
      name:"Nama",
      age:"Usia",
    }
  };

  function switchLanguage(isIndonesian) {
    const elements = document.querySelectorAll('[data-text]');
    elements.forEach(function(element) {
      const key = element.getAttribute('data-text');
      element.textContent = isIndonesian ? texts.indonesian[key] : texts.english[key];
    });
  }
  
  // Initial language switch based on the checkbox state
  switchLanguage(toggleSwitch.checked);
  
  toggleSwitch.addEventListener('change', function() {
    switchLanguage(toggleSwitch.checked);
  });
});
