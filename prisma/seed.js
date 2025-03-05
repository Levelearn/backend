// prisma/seed.js
const { PrismaClient, Role, QuestType, BadgeType } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  try {

    // Create Users
    const hashedPassword = await bcrypt.hash('password', 10);
    
    const administrator = await prisma.user.create({
      data: {
        username: 'admin',
        password: hashedPassword,
        name: 'Admin',
        role: Role.ADMIN,
        image: '',
      },
    });

    const administrator2 = await prisma.user.create({
      data: {
        username: 'archico',
        password: hashedPassword,
        name: 'Archico',
        role: Role.ADMIN,
        image: '',
      },
    });

    const instructor = await prisma.user.create({
      data: {
        username: 'rafael',
        password: hashedPassword,
        name: 'Rafael',
        role: Role.INSTRUCTOR,
        instructorId: '11S21028',
        instructorCourses: 0,
        image: '',
      },
    });   

    const instructor2 = await prisma.user.create({
      data: {
        username: 'ranty',
        password: hashedPassword,
        name: 'Ranty',
        role: Role.INSTRUCTOR,
        instructorId: 'RDS',
        instructorCourses: 0,
        image: '',
      },
    });   
    
    const student = await prisma.user.create({
      data: {
        username: 'benhard',
        password: hashedPassword,
        name: 'Benhard',
        role: Role.STUDENT,
        studentId: '11S21003',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const student2 = await prisma.user.create({
      data: {
        username: 'emely',
        password: hashedPassword,
        name: 'Emely',
        role: Role.STUDENT,
        studentId: '11S21052',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const student3 = await prisma.user.create({
      data: {
        username: 'boy',
        password: hashedPassword,
        name: 'Boy',
        role: Role.STUDENT,
        studentId: '11S21025',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const student4 = await prisma.user.create({
      data: {
        username: 'enrico',
        password: hashedPassword,
        name: 'Enrico',
        role: Role.STUDENT,
        studentId: '11S21034',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const student5 = await prisma.user.create({
      data: {
        username: 'gerry',
        password: hashedPassword,
        name: 'Gerry',
        role: Role.STUDENT,
        studentId: '11S21055',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const student6 = await prisma.user.create({
      data: {
        username: 'tabitha',
        password: hashedPassword,
        name: 'Tabitha',
        role: Role.STUDENT,
        studentId: '11S21042',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const student7 = await prisma.user.create({
      data: {
        username: 'tesalonika',
        password: hashedPassword,
        name: 'Tesalonika',
        role: Role.STUDENT,
        studentId: '11S21005',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const student8 = await prisma.user.create({
      data: {
        username: 'dedi',
        password: hashedPassword,
        name: 'Dedi',
        role: Role.STUDENT,
        studentId: '11S21014',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const student9 = await prisma.user.create({
      data: {
        username: 'gerald',
        password: hashedPassword,
        name: 'Gerald',
        role: Role.STUDENT,
        studentId: '11S21015',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });

    // Create Courses
    const course1 = await prisma.course.create({
      data: {
        code: 'IMK',
        name: 'Interaksi Manusia Komputer',
        description: 'Human Computer Interaction',
      },
    });

    const course2 = await prisma.course.create({
      data: {
        code: 'UI/UX',
        name: 'UI/UX',
        description: 'Learn the fundamentals of UI/UX Design',
      },
    });

    const course3 = await prisma.course.create({
      data: {
        code: 'RPL',
        name: 'Rekayasa Perangkat Lunak',
        description: 'Learn basic of software engineering',
      },
    });

    // Create Chapters for Course IMK
    const chapter1 = await prisma.chapter.create({
      data: {
        name: 'Introduction to Human-computer Interaction',
        description: 'Konsep dasar IMK, ruang lingkup, sejarah perkembangan, dan peran human centered',
        level: 1,
        courseId: course1.id,
      },
    });

    const chapter2 = await prisma.chapter.create({
      data: {
        name: 'Human Factors and Ergonomic Principles in Design Interaction',
        description: 'Human factors: persepsi, kognisi, motorik, serta prinsip ergonomi dalam desain interaksi',
        level: 2,
        courseId: course1.id,
      },
    });

    const chapter3 = await prisma.chapter.create({
      data: {
        name: 'Usability',
        description: 'Prinsip usability (efektivitas, efisiensi, kepuasan) dan 10 Usability Heuristics',
        level: 3,
        courseId: course1.id,
        isCheckpoint: 1
      },
    });

    const chapter4 = await prisma.chapter.create({
      data: {
        name: 'Heuristic Evaluation: Nielsen’s 10 Principles',
        description: 'Heuristic Evaluation: Nielsen’s 10 Principles',
        level: 4,
        courseId: course1.id,
      },
    });

    const chapter5 = await prisma.chapter.create({
      data: {
        name: 'Visual Elements, Information Hierarchy, Consistency, and Interface Readability',
        description: 'Elemen visual, hierarki informasi, konsistensi, dan keterbacaan antarmuka',
        level: 5,
        courseId: course1.id,
      },
    });

    const chapter6 = await prisma.chapter.create({
      data: {
        name: 'Control Structures',
        description: 'Tahapan user centered design, identifikasi kebutuhan pengguna, pembuatan persona, dan user journey map',
        level: 6,
        courseId: course1.id,
        isCheckpoint: 2
      },
    });

    const chapter7 = await prisma.chapter.create({
      data: {
        name: 'IDEM',
        description: 'IDEM',
        level: 7,
        courseId: course1.id,
      },
    });

    const chapter8 = await prisma.chapter.create({
      data: {
        name: 'UTS',
        description: 'Ujian Tengah Semester',
        level: 8,
        courseId: course1.id,
        isCheckpoint: 3
      },
    });

    const chapter9 = await prisma.chapter.create({
      data: {
        name: 'Judul Materi Week 9',
        description: 'Deskripsi Materi Week 9',
        level: 9,
        courseId: course1.id,
      },
    });

    const chapter10 = await prisma.chapter.create({
      data: {
        name: 'Judul Materi Week 10',
        description: 'Deskripsi Materi Week 10',
        level: 10,
        courseId: course1.id,
      },
    });

    const chapter11 = await prisma.chapter.create({
      data: {
        name: 'Judul Materi Week 11',
        description: 'Deskripsi Materi Week 11',
        level: 11,
        courseId: course1.id,
      },
    });

    const chapter12 = await prisma.chapter.create({
      data: {
        name: 'Judul Materi Week 12',
        description: 'Deskripsi Materi Week 12',
        level: 12,
        courseId: course1.id,
      },
    });

    const chapter13 = await prisma.chapter.create({
      data: {
        name: 'Judul Materi Week 13',
        description: 'Deskripsi Materi Week 13',
        level: 13,
        courseId: course1.id,
      },
    });

    const chapter14 = await prisma.chapter.create({
      data: {
        name: 'Judul Materi Week 14',
        description: 'Deskripsi Materi Week 14',
        level: 14,
        courseId: course1.id,
      },
    });

    const chapter15 = await prisma.chapter.create({
      data: {
        name: 'Judul Materi Week 15',
        description: 'Deskripsi Materi Week 15',
        level: 15,
        courseId: course1.id,
      },
    });

    const chapter16 = await prisma.chapter.create({
      data: {
        name: 'Judul Materi Week 16',
        description: 'Deskripsi Materi Week 16',
        level: 16,
        courseId: course1.id,
      },
    });

    // Content for Chapter 1
    const material1 = await prisma.material.create({
      data: {
        chapterId: chapter1.id,
        name: 'Pengantar',
        content: `
          <p>HCI adalah bidang studi yang mulai 
          berkembang pada tahun 1980-an, tetapi 
          konsep interaksi manusia dan mesin 
          sudah ada sebelumnya dengan berbagai 
          istilah seperti Man-Machine Interaction 
          (MMI) pada 1970-an, Computer and Human 
          Interaction (CHI), dan Human-Machine 
          Interaction (HMI). HCI mempelajari 
          cara manusia dan komputer bekerja 
          bersama untuk menyelesaikan tugas 
          tertentu. Fokus utama HCI adalah 
          perancangan, evaluasi, dan implementasi 
          sistem interaktif yang digunakan manusia. 
          HCI juga berhubungan dengan usability 
          (daya guna), yang berarti sistem harus 
          mudah digunakan, dipelajari, dan memberikan 
          keamanan bagi pengguna.</p>
          <p>HCI terdiri dari tiga elemen utama, 
          yaitu <strong>manusia, komputer, dan interaksi</strong></p>
          <ul>
            <li><strong>Manusia</strong> sebagai pengguna memiliki 
            kebutuhan dan keterbatasan yang harus 
            dipertimbangkan dalam desain sistem. </li>
            <li><strong>Komputer </strong> mencakup 
            perangkat keras dan lunak yang digunakan 
            untuk berinteraksi dengan manusia.  </li>
            <li><strong>Interaksi </strong>terjadi 
            melalui antarmuka yang harus dirancang 
            agar nyaman dan efisien. </li>
          </ul>
          <p>
            Fokus utama HCI adalah perancangan dan 
            evaluasi user interface (UI), yaitu bagian 
            dari sistem komputer yang memungkinkan manusia 
            berinteraksi dengan komputer. 
          </p>
          <p><img src="asset:lib/assets/alurHCI.png"></p>
          <p>
            UI harus dirancang dengan mempertimbangkan <strong>human factors</strong>, seperti kognisi dan ergonomi, agar pengguna dapat berinteraksi dengan nyaman dan efektif.
          </p>
          <p>
            Dalam desain sistem interaktif, sering 
            kali desainer atau programmer tidak memahami 
            dengan tepat kebutuhan dan lingkungan kerja 
            pengguna. Masalah lain yang sering terjadi 
            adalah sistem komputer yang mengharuskan 
            pengguna mengingat terlalu banyak informasi, 
            kurang toleran terhadap kesalahan pengguna, 
            serta tidak mempertimbangkan variasi 
            pengguna yang berbeda-beda. Kesalahan 
            utama dalam desain HCI adalah mengasumsikan 
            bahwa <strong>semua pengguna itu sama</strong> 
            dan bahwa <strong>pengguna memiliki cara berpikir 
            yang sama dengan desainer</strong>. Untuk menciptakan 
            sistem yang baik, penting untuk mempertanyakan 
            desain yang buruk dan memastikan bahwa 
            sistem memungkinkan pengguna menyelesaikan 
            tugas dengan aman, efektif, efisien, dan 
            menyenangkan.
          </p>
          <p>
            Tujuan utama HCI adalah meningkatkan <strong>kualitas hidup pengguna</strong> dengan membuat sistem interaktif yang baik dan mudah digunakan. Sebuah sistem yang baik memiliki beberapa karakteristik <strong>user-friendly</strong>, seperti tampilan yang menarik, kemudahan penggunaan, cepat dipelajari, memberikan pengalaman positif, dan direkomendasikan oleh pengguna lain. Tujuan dalam rekayasa sistem meliputi beberapa aspek penting:
          </p>
          <ol>
            <li><strong>Fungsionalitas yang sesuai</strong>, yaitu memastikan sistem memiliki fitur yang benar-benar dibutuhkan pengguna.</li>
            <li><strong>Keandalan, ketersediaan, keamanan, dan integritas data</strong>, sehingga sistem dapat digunakan kapan saja tanpa risiko kehilangan atau pencurian data.</li>
            <li><strong>Standardisasi, integrasi, konsistensi, dan portabilitas</strong>, yang memastikan antarmuka mudah dipahami dan data dapat digunakan di berbagai perangkat.</li>
            <li><strong>Penjadwalan dan anggaran</strong>, agar proyek selesai tepat waktu dan sesuai dengan biaya yang telah direncanakan.</li>
          </ol>
          <p>
            HCI adalah bidang multidisipliner yang dipengaruhi oleh berbagai bidang ilmu, termasuk:
          </p>
          <ul>
            <li><strong>Psikologi dan ilmu kognitif </strong> untuk memahami persepsi dan pemrosesan informasi oleh manusia. </li>
            <li><strong>Ergonomi </strong>untuk mempertimbangkan aspek fisik pengguna.</li>
            <li><strong>Sosiologi </strong>untuk memahami interaksi sosial dalam penggunaan teknologi.</li>
            <li><strong>Ilmu komputer dan teknik </strong>untuk mengembangkan sistem teknologi.</li>
            <li><strong>Bisnis dan pemasaran </strong>untuk memahami kebutuhan pasar.</li>
            <li><strong>Desain grafis </strong>untuk menciptakan antarmuka yang menarik dan fungsional.</li>
          </ul>
          <p>
            HCI telah berkembang sejak 1960-an, dimulai dengan komputer mainframe dan interaksi berbasis teks. Pada 1970-an, muncul konsep Graphical User Interface (GUI) yang lebih visual dan intuitif. Pada 1990-an, perhatian lebih difokuskan pada usability dan pendekatan desain yang berpusat pada pengguna (user-centered design). Hingga kini, HCI terus berkembang dengan kemajuan teknologi seperti mobile computing, AI, dan interaksi berbasis sensor. Human-centered design adalah pendekatan dalam HCI yang menempatkan manusia sebagai fokus utama dalam pengembangan sistem. Prinsip utama dalam pendekatan ini meliputi memahami kebutuhan pengguna, melibatkan pengguna dalam proses desain, dan mengevaluasi sistem berdasarkan pengalaman pengguna.
          </p>
        `,
      },
    });

    const material2 = await prisma.material.create({
      data: {
        chapterId: chapter2.id,
        name: 'Pengantar',
        content: `
          <p>HCI adalah bidang studi yang mulai 
          berkembang pada tahun 1980-an, tetapi 
          konsep interaksi manusia dan mesin 
          sudah ada sebelumnya dengan berbagai 
          istilah seperti Man-Machine Interaction 
          (MMI) pada 1970-an, Computer and Human 
          Interaction (CHI), dan Human-Machine 
          Interaction (HMI). HCI mempelajari 
          cara manusia dan komputer bekerja 
          bersama untuk menyelesaikan tugas 
          tertentu. Fokus utama HCI adalah 
          perancangan, evaluasi, dan implementasi 
          sistem interaktif yang digunakan manusia. 
          HCI juga berhubungan dengan usability 
          (daya guna), yang berarti sistem harus 
          mudah digunakan, dipelajari, dan memberikan 
          keamanan bagi pengguna.</p>
          <p>HCI terdiri dari tiga elemen utama, 
          yaitu <strong>manusia, komputer, dan interaksi</strong></p>
          <ul>
            <li><strong>Manusia</strong> sebagai pengguna memiliki 
            kebutuhan dan keterbatasan yang harus 
            dipertimbangkan dalam desain sistem. </li>
            <li><strong>Komputer </strong> mencakup 
            perangkat keras dan lunak yang digunakan 
            untuk berinteraksi dengan manusia.  </li>
            <li><strong>Interaksi </strong>terjadi 
            melalui antarmuka yang harus dirancang 
            agar nyaman dan efisien. </li>
          </ul>
          <p>
            Fokus utama HCI adalah perancangan dan 
            evaluasi user interface (UI), yaitu bagian 
            dari sistem komputer yang memungkinkan manusia 
            berinteraksi dengan komputer. 
          </p>
          <p><img src="asset:lib/assets/alurHCI.png"></p>
          <p>
            UI harus dirancang dengan mempertimbangkan <strong>human factors</strong>, seperti kognisi dan ergonomi, agar pengguna dapat berinteraksi dengan nyaman dan efektif.
          </p>
          <p>
            Dalam desain sistem interaktif, sering 
            kali desainer atau programmer tidak memahami 
            dengan tepat kebutuhan dan lingkungan kerja 
            pengguna. Masalah lain yang sering terjadi 
            adalah sistem komputer yang mengharuskan 
            pengguna mengingat terlalu banyak informasi, 
            kurang toleran terhadap kesalahan pengguna, 
            serta tidak mempertimbangkan variasi 
            pengguna yang berbeda-beda. Kesalahan 
            utama dalam desain HCI adalah mengasumsikan 
            bahwa <strong>semua pengguna itu sama</strong> 
            dan bahwa <strong>pengguna memiliki cara berpikir 
            yang sama dengan desainer</strong>. Untuk menciptakan 
            sistem yang baik, penting untuk mempertanyakan 
            desain yang buruk dan memastikan bahwa 
            sistem memungkinkan pengguna menyelesaikan 
            tugas dengan aman, efektif, efisien, dan 
            menyenangkan.
          </p>
          <p>
            Tujuan utama HCI adalah meningkatkan <strong>kualitas hidup pengguna</strong> dengan membuat sistem interaktif yang baik dan mudah digunakan. Sebuah sistem yang baik memiliki beberapa karakteristik <strong>user-friendly</strong>, seperti tampilan yang menarik, kemudahan penggunaan, cepat dipelajari, memberikan pengalaman positif, dan direkomendasikan oleh pengguna lain. Tujuan dalam rekayasa sistem meliputi beberapa aspek penting:
          </p>
          <ol>
            <li><strong>Fungsionalitas yang sesuai</strong>, yaitu memastikan sistem memiliki fitur yang benar-benar dibutuhkan pengguna.</li>
            <li><strong>Keandalan, ketersediaan, keamanan, dan integritas data</strong>, sehingga sistem dapat digunakan kapan saja tanpa risiko kehilangan atau pencurian data.</li>
            <li><strong>Standardisasi, integrasi, konsistensi, dan portabilitas</strong>, yang memastikan antarmuka mudah dipahami dan data dapat digunakan di berbagai perangkat.</li>
            <li><strong>Penjadwalan dan anggaran</strong>, agar proyek selesai tepat waktu dan sesuai dengan biaya yang telah direncanakan.</li>
          </ol>
          <p>
            HCI adalah bidang multidisipliner yang dipengaruhi oleh berbagai bidang ilmu, termasuk:
          </p>
          <ul>
            <li><strong>Psikologi dan ilmu kognitif </strong> untuk memahami persepsi dan pemrosesan informasi oleh manusia. </li>
            <li><strong>Ergonomi </strong>untuk mempertimbangkan aspek fisik pengguna.</li>
            <li><strong>Sosiologi </strong>untuk memahami interaksi sosial dalam penggunaan teknologi.</li>
            <li><strong>Ilmu komputer dan teknik </strong>untuk mengembangkan sistem teknologi.</li>
            <li><strong>Bisnis dan pemasaran </strong>untuk memahami kebutuhan pasar.</li>
            <li><strong>Desain grafis </strong>untuk menciptakan antarmuka yang menarik dan fungsional.</li>
          </ul>
          <p>
            HCI telah berkembang sejak 1960-an, dimulai dengan komputer mainframe dan interaksi berbasis teks. Pada 1970-an, muncul konsep Graphical User Interface (GUI) yang lebih visual dan intuitif. Pada 1990-an, perhatian lebih difokuskan pada usability dan pendekatan desain yang berpusat pada pengguna (user-centered design). Hingga kini, HCI terus berkembang dengan kemajuan teknologi seperti mobile computing, AI, dan interaksi berbasis sensor. Human-centered design adalah pendekatan dalam HCI yang menempatkan manusia sebagai fokus utama dalam pengembangan sistem. Prinsip utama dalam pendekatan ini meliputi memahami kebutuhan pengguna, melibatkan pengguna dalam proses desain, dan mengevaluasi sistem berdasarkan pengalaman pengguna.
          </p>
        `,
      },
    });

    const material3 = await prisma.material.create({
      data: {
        chapterId: chapter3.id,
        name: 'Pengantar',
        content: `
          <p>HCI adalah bidang studi yang mulai 
          berkembang pada tahun 1980-an, tetapi 
          konsep interaksi manusia dan mesin 
          sudah ada sebelumnya dengan berbagai 
          istilah seperti Man-Machine Interaction 
          (MMI) pada 1970-an, Computer and Human 
          Interaction (CHI), dan Human-Machine 
          Interaction (HMI). HCI mempelajari 
          cara manusia dan komputer bekerja 
          bersama untuk menyelesaikan tugas 
          tertentu. Fokus utama HCI adalah 
          perancangan, evaluasi, dan implementasi 
          sistem interaktif yang digunakan manusia. 
          HCI juga berhubungan dengan usability 
          (daya guna), yang berarti sistem harus 
          mudah digunakan, dipelajari, dan memberikan 
          keamanan bagi pengguna.</p>
          <p>HCI terdiri dari tiga elemen utama, 
          yaitu <strong>manusia, komputer, dan interaksi</strong></p>
          <ul>
            <li><strong>Manusia</strong> sebagai pengguna memiliki 
            kebutuhan dan keterbatasan yang harus 
            dipertimbangkan dalam desain sistem. </li>
            <li><strong>Komputer </strong> mencakup 
            perangkat keras dan lunak yang digunakan 
            untuk berinteraksi dengan manusia.  </li>
            <li><strong>Interaksi </strong>terjadi 
            melalui antarmuka yang harus dirancang 
            agar nyaman dan efisien. </li>
          </ul>
          <p>
            Fokus utama HCI adalah perancangan dan 
            evaluasi user interface (UI), yaitu bagian 
            dari sistem komputer yang memungkinkan manusia 
            berinteraksi dengan komputer. 
          </p>
          <p><img src="asset:lib/assets/alurHCI.png"></p>
          <p>
            UI harus dirancang dengan mempertimbangkan <strong>human factors</strong>, seperti kognisi dan ergonomi, agar pengguna dapat berinteraksi dengan nyaman dan efektif.
          </p>
          <p>
            Dalam desain sistem interaktif, sering 
            kali desainer atau programmer tidak memahami 
            dengan tepat kebutuhan dan lingkungan kerja 
            pengguna. Masalah lain yang sering terjadi 
            adalah sistem komputer yang mengharuskan 
            pengguna mengingat terlalu banyak informasi, 
            kurang toleran terhadap kesalahan pengguna, 
            serta tidak mempertimbangkan variasi 
            pengguna yang berbeda-beda. Kesalahan 
            utama dalam desain HCI adalah mengasumsikan 
            bahwa <strong>semua pengguna itu sama</strong> 
            dan bahwa <strong>pengguna memiliki cara berpikir 
            yang sama dengan desainer</strong>. Untuk menciptakan 
            sistem yang baik, penting untuk mempertanyakan 
            desain yang buruk dan memastikan bahwa 
            sistem memungkinkan pengguna menyelesaikan 
            tugas dengan aman, efektif, efisien, dan 
            menyenangkan.
          </p>
          <p>
            Tujuan utama HCI adalah meningkatkan <strong>kualitas hidup pengguna</strong> dengan membuat sistem interaktif yang baik dan mudah digunakan. Sebuah sistem yang baik memiliki beberapa karakteristik <strong>user-friendly</strong>, seperti tampilan yang menarik, kemudahan penggunaan, cepat dipelajari, memberikan pengalaman positif, dan direkomendasikan oleh pengguna lain. Tujuan dalam rekayasa sistem meliputi beberapa aspek penting:
          </p>
          <ol>
            <li><strong>Fungsionalitas yang sesuai</strong>, yaitu memastikan sistem memiliki fitur yang benar-benar dibutuhkan pengguna.</li>
            <li><strong>Keandalan, ketersediaan, keamanan, dan integritas data</strong>, sehingga sistem dapat digunakan kapan saja tanpa risiko kehilangan atau pencurian data.</li>
            <li><strong>Standardisasi, integrasi, konsistensi, dan portabilitas</strong>, yang memastikan antarmuka mudah dipahami dan data dapat digunakan di berbagai perangkat.</li>
            <li><strong>Penjadwalan dan anggaran</strong>, agar proyek selesai tepat waktu dan sesuai dengan biaya yang telah direncanakan.</li>
          </ol>
          <p>
            HCI adalah bidang multidisipliner yang dipengaruhi oleh berbagai bidang ilmu, termasuk:
          </p>
          <ul>
            <li><strong>Psikologi dan ilmu kognitif </strong> untuk memahami persepsi dan pemrosesan informasi oleh manusia. </li>
            <li><strong>Ergonomi </strong>untuk mempertimbangkan aspek fisik pengguna.</li>
            <li><strong>Sosiologi </strong>untuk memahami interaksi sosial dalam penggunaan teknologi.</li>
            <li><strong>Ilmu komputer dan teknik </strong>untuk mengembangkan sistem teknologi.</li>
            <li><strong>Bisnis dan pemasaran </strong>untuk memahami kebutuhan pasar.</li>
            <li><strong>Desain grafis </strong>untuk menciptakan antarmuka yang menarik dan fungsional.</li>
          </ul>
          <p>
            HCI telah berkembang sejak 1960-an, dimulai dengan komputer mainframe dan interaksi berbasis teks. Pada 1970-an, muncul konsep Graphical User Interface (GUI) yang lebih visual dan intuitif. Pada 1990-an, perhatian lebih difokuskan pada usability dan pendekatan desain yang berpusat pada pengguna (user-centered design). Hingga kini, HCI terus berkembang dengan kemajuan teknologi seperti mobile computing, AI, dan interaksi berbasis sensor. Human-centered design adalah pendekatan dalam HCI yang menempatkan manusia sebagai fokus utama dalam pengembangan sistem. Prinsip utama dalam pendekatan ini meliputi memahami kebutuhan pengguna, melibatkan pengguna dalam proses desain, dan mengevaluasi sistem berdasarkan pengalaman pengguna.
          </p>
        `,
      },
    });

    const material4 = await prisma.material.create({
      data: {
        chapterId: chapter4.id,
        name: 'Pengantar',
        content: `
          <p>HCI adalah bidang studi yang mulai 
          berkembang pada tahun 1980-an, tetapi 
          konsep interaksi manusia dan mesin 
          sudah ada sebelumnya dengan berbagai 
          istilah seperti Man-Machine Interaction 
          (MMI) pada 1970-an, Computer and Human 
          Interaction (CHI), dan Human-Machine 
          Interaction (HMI). HCI mempelajari 
          cara manusia dan komputer bekerja 
          bersama untuk menyelesaikan tugas 
          tertentu. Fokus utama HCI adalah 
          perancangan, evaluasi, dan implementasi 
          sistem interaktif yang digunakan manusia. 
          HCI juga berhubungan dengan usability 
          (daya guna), yang berarti sistem harus 
          mudah digunakan, dipelajari, dan memberikan 
          keamanan bagi pengguna.</p>
          <p>HCI terdiri dari tiga elemen utama, 
          yaitu <strong>manusia, komputer, dan interaksi</strong></p>
          <ul>
            <li><strong>Manusia</strong> sebagai pengguna memiliki 
            kebutuhan dan keterbatasan yang harus 
            dipertimbangkan dalam desain sistem. </li>
            <li><strong>Komputer </strong> mencakup 
            perangkat keras dan lunak yang digunakan 
            untuk berinteraksi dengan manusia.  </li>
            <li><strong>Interaksi </strong>terjadi 
            melalui antarmuka yang harus dirancang 
            agar nyaman dan efisien. </li>
          </ul>
          <p>
            Fokus utama HCI adalah perancangan dan 
            evaluasi user interface (UI), yaitu bagian 
            dari sistem komputer yang memungkinkan manusia 
            berinteraksi dengan komputer. 
          </p>
          <p><img src="asset:lib/assets/alurHCI.png"></p>
          <p>
            UI harus dirancang dengan mempertimbangkan <strong>human factors</strong>, seperti kognisi dan ergonomi, agar pengguna dapat berinteraksi dengan nyaman dan efektif.
          </p>
          <p>
            Dalam desain sistem interaktif, sering 
            kali desainer atau programmer tidak memahami 
            dengan tepat kebutuhan dan lingkungan kerja 
            pengguna. Masalah lain yang sering terjadi 
            adalah sistem komputer yang mengharuskan 
            pengguna mengingat terlalu banyak informasi, 
            kurang toleran terhadap kesalahan pengguna, 
            serta tidak mempertimbangkan variasi 
            pengguna yang berbeda-beda. Kesalahan 
            utama dalam desain HCI adalah mengasumsikan 
            bahwa <strong>semua pengguna itu sama</strong> 
            dan bahwa <strong>pengguna memiliki cara berpikir 
            yang sama dengan desainer</strong>. Untuk menciptakan 
            sistem yang baik, penting untuk mempertanyakan 
            desain yang buruk dan memastikan bahwa 
            sistem memungkinkan pengguna menyelesaikan 
            tugas dengan aman, efektif, efisien, dan 
            menyenangkan.
          </p>
          <p>
            Tujuan utama HCI adalah meningkatkan <strong>kualitas hidup pengguna</strong> dengan membuat sistem interaktif yang baik dan mudah digunakan. Sebuah sistem yang baik memiliki beberapa karakteristik <strong>user-friendly</strong>, seperti tampilan yang menarik, kemudahan penggunaan, cepat dipelajari, memberikan pengalaman positif, dan direkomendasikan oleh pengguna lain. Tujuan dalam rekayasa sistem meliputi beberapa aspek penting:
          </p>
          <ol>
            <li><strong>Fungsionalitas yang sesuai</strong>, yaitu memastikan sistem memiliki fitur yang benar-benar dibutuhkan pengguna.</li>
            <li><strong>Keandalan, ketersediaan, keamanan, dan integritas data</strong>, sehingga sistem dapat digunakan kapan saja tanpa risiko kehilangan atau pencurian data.</li>
            <li><strong>Standardisasi, integrasi, konsistensi, dan portabilitas</strong>, yang memastikan antarmuka mudah dipahami dan data dapat digunakan di berbagai perangkat.</li>
            <li><strong>Penjadwalan dan anggaran</strong>, agar proyek selesai tepat waktu dan sesuai dengan biaya yang telah direncanakan.</li>
          </ol>
          <p>
            HCI adalah bidang multidisipliner yang dipengaruhi oleh berbagai bidang ilmu, termasuk:
          </p>
          <ul>
            <li><strong>Psikologi dan ilmu kognitif </strong> untuk memahami persepsi dan pemrosesan informasi oleh manusia. </li>
            <li><strong>Ergonomi </strong>untuk mempertimbangkan aspek fisik pengguna.</li>
            <li><strong>Sosiologi </strong>untuk memahami interaksi sosial dalam penggunaan teknologi.</li>
            <li><strong>Ilmu komputer dan teknik </strong>untuk mengembangkan sistem teknologi.</li>
            <li><strong>Bisnis dan pemasaran </strong>untuk memahami kebutuhan pasar.</li>
            <li><strong>Desain grafis </strong>untuk menciptakan antarmuka yang menarik dan fungsional.</li>
          </ul>
          <p>
            HCI telah berkembang sejak 1960-an, dimulai dengan komputer mainframe dan interaksi berbasis teks. Pada 1970-an, muncul konsep Graphical User Interface (GUI) yang lebih visual dan intuitif. Pada 1990-an, perhatian lebih difokuskan pada usability dan pendekatan desain yang berpusat pada pengguna (user-centered design). Hingga kini, HCI terus berkembang dengan kemajuan teknologi seperti mobile computing, AI, dan interaksi berbasis sensor. Human-centered design adalah pendekatan dalam HCI yang menempatkan manusia sebagai fokus utama dalam pengembangan sistem. Prinsip utama dalam pendekatan ini meliputi memahami kebutuhan pengguna, melibatkan pengguna dalam proses desain, dan mengevaluasi sistem berdasarkan pengalaman pengguna.
          </p>
        `,
      },
    });

    const material5 = await prisma.material.create({
      data: {
        chapterId: chapter5.id,
        name: 'Pengantar',
        content: `
          <p>HCI adalah bidang studi yang mulai 
          berkembang pada tahun 1980-an, tetapi 
          konsep interaksi manusia dan mesin 
          sudah ada sebelumnya dengan berbagai 
          istilah seperti Man-Machine Interaction 
          (MMI) pada 1970-an, Computer and Human 
          Interaction (CHI), dan Human-Machine 
          Interaction (HMI). HCI mempelajari 
          cara manusia dan komputer bekerja 
          bersama untuk menyelesaikan tugas 
          tertentu. Fokus utama HCI adalah 
          perancangan, evaluasi, dan implementasi 
          sistem interaktif yang digunakan manusia. 
          HCI juga berhubungan dengan usability 
          (daya guna), yang berarti sistem harus 
          mudah digunakan, dipelajari, dan memberikan 
          keamanan bagi pengguna.</p>
          <p>HCI terdiri dari tiga elemen utama, 
          yaitu <strong>manusia, komputer, dan interaksi</strong></p>
          <ul>
            <li><strong>Manusia</strong> sebagai pengguna memiliki 
            kebutuhan dan keterbatasan yang harus 
            dipertimbangkan dalam desain sistem. </li>
            <li><strong>Komputer </strong> mencakup 
            perangkat keras dan lunak yang digunakan 
            untuk berinteraksi dengan manusia.  </li>
            <li><strong>Interaksi </strong>terjadi 
            melalui antarmuka yang harus dirancang 
            agar nyaman dan efisien. </li>
          </ul>
          <p>
            Fokus utama HCI adalah perancangan dan 
            evaluasi user interface (UI), yaitu bagian 
            dari sistem komputer yang memungkinkan manusia 
            berinteraksi dengan komputer. 
          </p>
          <p><img src="asset:lib/assets/alurHCI.png"></p>
          <p>
            UI harus dirancang dengan mempertimbangkan <strong>human factors</strong>, seperti kognisi dan ergonomi, agar pengguna dapat berinteraksi dengan nyaman dan efektif.
          </p>
          <p>
            Dalam desain sistem interaktif, sering 
            kali desainer atau programmer tidak memahami 
            dengan tepat kebutuhan dan lingkungan kerja 
            pengguna. Masalah lain yang sering terjadi 
            adalah sistem komputer yang mengharuskan 
            pengguna mengingat terlalu banyak informasi, 
            kurang toleran terhadap kesalahan pengguna, 
            serta tidak mempertimbangkan variasi 
            pengguna yang berbeda-beda. Kesalahan 
            utama dalam desain HCI adalah mengasumsikan 
            bahwa <strong>semua pengguna itu sama</strong> 
            dan bahwa <strong>pengguna memiliki cara berpikir 
            yang sama dengan desainer</strong>. Untuk menciptakan 
            sistem yang baik, penting untuk mempertanyakan 
            desain yang buruk dan memastikan bahwa 
            sistem memungkinkan pengguna menyelesaikan 
            tugas dengan aman, efektif, efisien, dan 
            menyenangkan.
          </p>
          <p>
            Tujuan utama HCI adalah meningkatkan <strong>kualitas hidup pengguna</strong> dengan membuat sistem interaktif yang baik dan mudah digunakan. Sebuah sistem yang baik memiliki beberapa karakteristik <strong>user-friendly</strong>, seperti tampilan yang menarik, kemudahan penggunaan, cepat dipelajari, memberikan pengalaman positif, dan direkomendasikan oleh pengguna lain. Tujuan dalam rekayasa sistem meliputi beberapa aspek penting:
          </p>
          <ol>
            <li><strong>Fungsionalitas yang sesuai</strong>, yaitu memastikan sistem memiliki fitur yang benar-benar dibutuhkan pengguna.</li>
            <li><strong>Keandalan, ketersediaan, keamanan, dan integritas data</strong>, sehingga sistem dapat digunakan kapan saja tanpa risiko kehilangan atau pencurian data.</li>
            <li><strong>Standardisasi, integrasi, konsistensi, dan portabilitas</strong>, yang memastikan antarmuka mudah dipahami dan data dapat digunakan di berbagai perangkat.</li>
            <li><strong>Penjadwalan dan anggaran</strong>, agar proyek selesai tepat waktu dan sesuai dengan biaya yang telah direncanakan.</li>
          </ol>
          <p>
            HCI adalah bidang multidisipliner yang dipengaruhi oleh berbagai bidang ilmu, termasuk:
          </p>
          <ul>
            <li><strong>Psikologi dan ilmu kognitif </strong> untuk memahami persepsi dan pemrosesan informasi oleh manusia. </li>
            <li><strong>Ergonomi </strong>untuk mempertimbangkan aspek fisik pengguna.</li>
            <li><strong>Sosiologi </strong>untuk memahami interaksi sosial dalam penggunaan teknologi.</li>
            <li><strong>Ilmu komputer dan teknik </strong>untuk mengembangkan sistem teknologi.</li>
            <li><strong>Bisnis dan pemasaran </strong>untuk memahami kebutuhan pasar.</li>
            <li><strong>Desain grafis </strong>untuk menciptakan antarmuka yang menarik dan fungsional.</li>
          </ul>
          <p>
            HCI telah berkembang sejak 1960-an, dimulai dengan komputer mainframe dan interaksi berbasis teks. Pada 1970-an, muncul konsep Graphical User Interface (GUI) yang lebih visual dan intuitif. Pada 1990-an, perhatian lebih difokuskan pada usability dan pendekatan desain yang berpusat pada pengguna (user-centered design). Hingga kini, HCI terus berkembang dengan kemajuan teknologi seperti mobile computing, AI, dan interaksi berbasis sensor. Human-centered design adalah pendekatan dalam HCI yang menempatkan manusia sebagai fokus utama dalam pengembangan sistem. Prinsip utama dalam pendekatan ini meliputi memahami kebutuhan pengguna, melibatkan pengguna dalam proses desain, dan mengevaluasi sistem berdasarkan pengalaman pengguna.
          </p>
        `,
      },
    });

    const material6 = await prisma.material.create({
      data: {
        chapterId: chapter6.id,
        name: 'Pengantar',
        content: `
          <p>HCI adalah bidang studi yang mulai 
          berkembang pada tahun 1980-an, tetapi 
          konsep interaksi manusia dan mesin 
          sudah ada sebelumnya dengan berbagai 
          istilah seperti Man-Machine Interaction 
          (MMI) pada 1970-an, Computer and Human 
          Interaction (CHI), dan Human-Machine 
          Interaction (HMI). HCI mempelajari 
          cara manusia dan komputer bekerja 
          bersama untuk menyelesaikan tugas 
          tertentu. Fokus utama HCI adalah 
          perancangan, evaluasi, dan implementasi 
          sistem interaktif yang digunakan manusia. 
          HCI juga berhubungan dengan usability 
          (daya guna), yang berarti sistem harus 
          mudah digunakan, dipelajari, dan memberikan 
          keamanan bagi pengguna.</p>
          <p>HCI terdiri dari tiga elemen utama, 
          yaitu <strong>manusia, komputer, dan interaksi</strong></p>
          <ul>
            <li><strong>Manusia</strong> sebagai pengguna memiliki 
            kebutuhan dan keterbatasan yang harus 
            dipertimbangkan dalam desain sistem. </li>
            <li><strong>Komputer </strong> mencakup 
            perangkat keras dan lunak yang digunakan 
            untuk berinteraksi dengan manusia.  </li>
            <li><strong>Interaksi </strong>terjadi 
            melalui antarmuka yang harus dirancang 
            agar nyaman dan efisien. </li>
          </ul>
          <p>
            Fokus utama HCI adalah perancangan dan 
            evaluasi user interface (UI), yaitu bagian 
            dari sistem komputer yang memungkinkan manusia 
            berinteraksi dengan komputer. 
          </p>
          <p><img src="asset:lib/assets/alurHCI.png"></p>
          <p>
            UI harus dirancang dengan mempertimbangkan <strong>human factors</strong>, seperti kognisi dan ergonomi, agar pengguna dapat berinteraksi dengan nyaman dan efektif.
          </p>
          <p>
            Dalam desain sistem interaktif, sering 
            kali desainer atau programmer tidak memahami 
            dengan tepat kebutuhan dan lingkungan kerja 
            pengguna. Masalah lain yang sering terjadi 
            adalah sistem komputer yang mengharuskan 
            pengguna mengingat terlalu banyak informasi, 
            kurang toleran terhadap kesalahan pengguna, 
            serta tidak mempertimbangkan variasi 
            pengguna yang berbeda-beda. Kesalahan 
            utama dalam desain HCI adalah mengasumsikan 
            bahwa <strong>semua pengguna itu sama</strong> 
            dan bahwa <strong>pengguna memiliki cara berpikir 
            yang sama dengan desainer</strong>. Untuk menciptakan 
            sistem yang baik, penting untuk mempertanyakan 
            desain yang buruk dan memastikan bahwa 
            sistem memungkinkan pengguna menyelesaikan 
            tugas dengan aman, efektif, efisien, dan 
            menyenangkan.
          </p>
          <p>
            Tujuan utama HCI adalah meningkatkan <strong>kualitas hidup pengguna</strong> dengan membuat sistem interaktif yang baik dan mudah digunakan. Sebuah sistem yang baik memiliki beberapa karakteristik <strong>user-friendly</strong>, seperti tampilan yang menarik, kemudahan penggunaan, cepat dipelajari, memberikan pengalaman positif, dan direkomendasikan oleh pengguna lain. Tujuan dalam rekayasa sistem meliputi beberapa aspek penting:
          </p>
          <ol>
            <li><strong>Fungsionalitas yang sesuai</strong>, yaitu memastikan sistem memiliki fitur yang benar-benar dibutuhkan pengguna.</li>
            <li><strong>Keandalan, ketersediaan, keamanan, dan integritas data</strong>, sehingga sistem dapat digunakan kapan saja tanpa risiko kehilangan atau pencurian data.</li>
            <li><strong>Standardisasi, integrasi, konsistensi, dan portabilitas</strong>, yang memastikan antarmuka mudah dipahami dan data dapat digunakan di berbagai perangkat.</li>
            <li><strong>Penjadwalan dan anggaran</strong>, agar proyek selesai tepat waktu dan sesuai dengan biaya yang telah direncanakan.</li>
          </ol>
          <p>
            HCI adalah bidang multidisipliner yang dipengaruhi oleh berbagai bidang ilmu, termasuk:
          </p>
          <ul>
            <li><strong>Psikologi dan ilmu kognitif </strong> untuk memahami persepsi dan pemrosesan informasi oleh manusia. </li>
            <li><strong>Ergonomi </strong>untuk mempertimbangkan aspek fisik pengguna.</li>
            <li><strong>Sosiologi </strong>untuk memahami interaksi sosial dalam penggunaan teknologi.</li>
            <li><strong>Ilmu komputer dan teknik </strong>untuk mengembangkan sistem teknologi.</li>
            <li><strong>Bisnis dan pemasaran </strong>untuk memahami kebutuhan pasar.</li>
            <li><strong>Desain grafis </strong>untuk menciptakan antarmuka yang menarik dan fungsional.</li>
          </ul>
          <p>
            HCI telah berkembang sejak 1960-an, dimulai dengan komputer mainframe dan interaksi berbasis teks. Pada 1970-an, muncul konsep Graphical User Interface (GUI) yang lebih visual dan intuitif. Pada 1990-an, perhatian lebih difokuskan pada usability dan pendekatan desain yang berpusat pada pengguna (user-centered design). Hingga kini, HCI terus berkembang dengan kemajuan teknologi seperti mobile computing, AI, dan interaksi berbasis sensor. Human-centered design adalah pendekatan dalam HCI yang menempatkan manusia sebagai fokus utama dalam pengembangan sistem. Prinsip utama dalam pendekatan ini meliputi memahami kebutuhan pengguna, melibatkan pengguna dalam proses desain, dan mengevaluasi sistem berdasarkan pengalaman pengguna.
          </p>
        `,
      },
    });

    const material7 = await prisma.material.create({
      data: {
        chapterId: chapter7.id,
        name: 'Pengantar',
        content: `
          <p>HCI adalah bidang studi yang mulai 
          berkembang pada tahun 1980-an, tetapi 
          konsep interaksi manusia dan mesin 
          sudah ada sebelumnya dengan berbagai 
          istilah seperti Man-Machine Interaction 
          (MMI) pada 1970-an, Computer and Human 
          Interaction (CHI), dan Human-Machine 
          Interaction (HMI). HCI mempelajari 
          cara manusia dan komputer bekerja 
          bersama untuk menyelesaikan tugas 
          tertentu. Fokus utama HCI adalah 
          perancangan, evaluasi, dan implementasi 
          sistem interaktif yang digunakan manusia. 
          HCI juga berhubungan dengan usability 
          (daya guna), yang berarti sistem harus 
          mudah digunakan, dipelajari, dan memberikan 
          keamanan bagi pengguna.</p>
          <p>HCI terdiri dari tiga elemen utama, 
          yaitu <strong>manusia, komputer, dan interaksi</strong></p>
          <ul>
            <li><strong>Manusia</strong> sebagai pengguna memiliki 
            kebutuhan dan keterbatasan yang harus 
            dipertimbangkan dalam desain sistem. </li>
            <li><strong>Komputer </strong> mencakup 
            perangkat keras dan lunak yang digunakan 
            untuk berinteraksi dengan manusia.  </li>
            <li><strong>Interaksi </strong>terjadi 
            melalui antarmuka yang harus dirancang 
            agar nyaman dan efisien. </li>
          </ul>
          <p>
            Fokus utama HCI adalah perancangan dan 
            evaluasi user interface (UI), yaitu bagian 
            dari sistem komputer yang memungkinkan manusia 
            berinteraksi dengan komputer. 
          </p>
          <p><img src="asset:lib/assets/alurHCI.png"></p>
          <p>
            UI harus dirancang dengan mempertimbangkan <strong>human factors</strong>, seperti kognisi dan ergonomi, agar pengguna dapat berinteraksi dengan nyaman dan efektif.
          </p>
          <p>
            Dalam desain sistem interaktif, sering 
            kali desainer atau programmer tidak memahami 
            dengan tepat kebutuhan dan lingkungan kerja 
            pengguna. Masalah lain yang sering terjadi 
            adalah sistem komputer yang mengharuskan 
            pengguna mengingat terlalu banyak informasi, 
            kurang toleran terhadap kesalahan pengguna, 
            serta tidak mempertimbangkan variasi 
            pengguna yang berbeda-beda. Kesalahan 
            utama dalam desain HCI adalah mengasumsikan 
            bahwa <strong>semua pengguna itu sama</strong> 
            dan bahwa <strong>pengguna memiliki cara berpikir 
            yang sama dengan desainer</strong>. Untuk menciptakan 
            sistem yang baik, penting untuk mempertanyakan 
            desain yang buruk dan memastikan bahwa 
            sistem memungkinkan pengguna menyelesaikan 
            tugas dengan aman, efektif, efisien, dan 
            menyenangkan.
          </p>
          <p>
            Tujuan utama HCI adalah meningkatkan <strong>kualitas hidup pengguna</strong> dengan membuat sistem interaktif yang baik dan mudah digunakan. Sebuah sistem yang baik memiliki beberapa karakteristik <strong>user-friendly</strong>, seperti tampilan yang menarik, kemudahan penggunaan, cepat dipelajari, memberikan pengalaman positif, dan direkomendasikan oleh pengguna lain. Tujuan dalam rekayasa sistem meliputi beberapa aspek penting:
          </p>
          <ol>
            <li><strong>Fungsionalitas yang sesuai</strong>, yaitu memastikan sistem memiliki fitur yang benar-benar dibutuhkan pengguna.</li>
            <li><strong>Keandalan, ketersediaan, keamanan, dan integritas data</strong>, sehingga sistem dapat digunakan kapan saja tanpa risiko kehilangan atau pencurian data.</li>
            <li><strong>Standardisasi, integrasi, konsistensi, dan portabilitas</strong>, yang memastikan antarmuka mudah dipahami dan data dapat digunakan di berbagai perangkat.</li>
            <li><strong>Penjadwalan dan anggaran</strong>, agar proyek selesai tepat waktu dan sesuai dengan biaya yang telah direncanakan.</li>
          </ol>
          <p>
            HCI adalah bidang multidisipliner yang dipengaruhi oleh berbagai bidang ilmu, termasuk:
          </p>
          <ul>
            <li><strong>Psikologi dan ilmu kognitif </strong> untuk memahami persepsi dan pemrosesan informasi oleh manusia. </li>
            <li><strong>Ergonomi </strong>untuk mempertimbangkan aspek fisik pengguna.</li>
            <li><strong>Sosiologi </strong>untuk memahami interaksi sosial dalam penggunaan teknologi.</li>
            <li><strong>Ilmu komputer dan teknik </strong>untuk mengembangkan sistem teknologi.</li>
            <li><strong>Bisnis dan pemasaran </strong>untuk memahami kebutuhan pasar.</li>
            <li><strong>Desain grafis </strong>untuk menciptakan antarmuka yang menarik dan fungsional.</li>
          </ul>
          <p>
            HCI telah berkembang sejak 1960-an, dimulai dengan komputer mainframe dan interaksi berbasis teks. Pada 1970-an, muncul konsep Graphical User Interface (GUI) yang lebih visual dan intuitif. Pada 1990-an, perhatian lebih difokuskan pada usability dan pendekatan desain yang berpusat pada pengguna (user-centered design). Hingga kini, HCI terus berkembang dengan kemajuan teknologi seperti mobile computing, AI, dan interaksi berbasis sensor. Human-centered design adalah pendekatan dalam HCI yang menempatkan manusia sebagai fokus utama dalam pengembangan sistem. Prinsip utama dalam pendekatan ini meliputi memahami kebutuhan pengguna, melibatkan pengguna dalam proses desain, dan mengevaluasi sistem berdasarkan pengalaman pengguna.
          </p>
        `,
      },
    });

    const material8 = await prisma.material.create({
      data: {
        chapterId: chapter8.id,
        name: 'Pengantar',
        content: `
          <p>HCI adalah bidang studi yang mulai 
          berkembang pada tahun 1980-an, tetapi 
          konsep interaksi manusia dan mesin 
          sudah ada sebelumnya dengan berbagai 
          istilah seperti Man-Machine Interaction 
          (MMI) pada 1970-an, Computer and Human 
          Interaction (CHI), dan Human-Machine 
          Interaction (HMI). HCI mempelajari 
          cara manusia dan komputer bekerja 
          bersama untuk menyelesaikan tugas 
          tertentu. Fokus utama HCI adalah 
          perancangan, evaluasi, dan implementasi 
          sistem interaktif yang digunakan manusia. 
          HCI juga berhubungan dengan usability 
          (daya guna), yang berarti sistem harus 
          mudah digunakan, dipelajari, dan memberikan 
          keamanan bagi pengguna.</p>
          <p>HCI terdiri dari tiga elemen utama, 
          yaitu <strong>manusia, komputer, dan interaksi</strong></p>
          <ul>
            <li><strong>Manusia</strong> sebagai pengguna memiliki 
            kebutuhan dan keterbatasan yang harus 
            dipertimbangkan dalam desain sistem. </li>
            <li><strong>Komputer </strong> mencakup 
            perangkat keras dan lunak yang digunakan 
            untuk berinteraksi dengan manusia.  </li>
            <li><strong>Interaksi </strong>terjadi 
            melalui antarmuka yang harus dirancang 
            agar nyaman dan efisien. </li>
          </ul>
          <p>
            Fokus utama HCI adalah perancangan dan 
            evaluasi user interface (UI), yaitu bagian 
            dari sistem komputer yang memungkinkan manusia 
            berinteraksi dengan komputer. 
          </p>
          <p><img src="asset:lib/assets/alurHCI.png"></p>
          <p>
            UI harus dirancang dengan mempertimbangkan <strong>human factors</strong>, seperti kognisi dan ergonomi, agar pengguna dapat berinteraksi dengan nyaman dan efektif.
          </p>
          <p>
            Dalam desain sistem interaktif, sering 
            kali desainer atau programmer tidak memahami 
            dengan tepat kebutuhan dan lingkungan kerja 
            pengguna. Masalah lain yang sering terjadi 
            adalah sistem komputer yang mengharuskan 
            pengguna mengingat terlalu banyak informasi, 
            kurang toleran terhadap kesalahan pengguna, 
            serta tidak mempertimbangkan variasi 
            pengguna yang berbeda-beda. Kesalahan 
            utama dalam desain HCI adalah mengasumsikan 
            bahwa <strong>semua pengguna itu sama</strong> 
            dan bahwa <strong>pengguna memiliki cara berpikir 
            yang sama dengan desainer</strong>. Untuk menciptakan 
            sistem yang baik, penting untuk mempertanyakan 
            desain yang buruk dan memastikan bahwa 
            sistem memungkinkan pengguna menyelesaikan 
            tugas dengan aman, efektif, efisien, dan 
            menyenangkan.
          </p>
          <p>
            Tujuan utama HCI adalah meningkatkan <strong>kualitas hidup pengguna</strong> dengan membuat sistem interaktif yang baik dan mudah digunakan. Sebuah sistem yang baik memiliki beberapa karakteristik <strong>user-friendly</strong>, seperti tampilan yang menarik, kemudahan penggunaan, cepat dipelajari, memberikan pengalaman positif, dan direkomendasikan oleh pengguna lain. Tujuan dalam rekayasa sistem meliputi beberapa aspek penting:
          </p>
          <ol>
            <li><strong>Fungsionalitas yang sesuai</strong>, yaitu memastikan sistem memiliki fitur yang benar-benar dibutuhkan pengguna.</li>
            <li><strong>Keandalan, ketersediaan, keamanan, dan integritas data</strong>, sehingga sistem dapat digunakan kapan saja tanpa risiko kehilangan atau pencurian data.</li>
            <li><strong>Standardisasi, integrasi, konsistensi, dan portabilitas</strong>, yang memastikan antarmuka mudah dipahami dan data dapat digunakan di berbagai perangkat.</li>
            <li><strong>Penjadwalan dan anggaran</strong>, agar proyek selesai tepat waktu dan sesuai dengan biaya yang telah direncanakan.</li>
          </ol>
          <p>
            HCI adalah bidang multidisipliner yang dipengaruhi oleh berbagai bidang ilmu, termasuk:
          </p>
          <ul>
            <li><strong>Psikologi dan ilmu kognitif </strong> untuk memahami persepsi dan pemrosesan informasi oleh manusia. </li>
            <li><strong>Ergonomi </strong>untuk mempertimbangkan aspek fisik pengguna.</li>
            <li><strong>Sosiologi </strong>untuk memahami interaksi sosial dalam penggunaan teknologi.</li>
            <li><strong>Ilmu komputer dan teknik </strong>untuk mengembangkan sistem teknologi.</li>
            <li><strong>Bisnis dan pemasaran </strong>untuk memahami kebutuhan pasar.</li>
            <li><strong>Desain grafis </strong>untuk menciptakan antarmuka yang menarik dan fungsional.</li>
          </ul>
          <p>
            HCI telah berkembang sejak 1960-an, dimulai dengan komputer mainframe dan interaksi berbasis teks. Pada 1970-an, muncul konsep Graphical User Interface (GUI) yang lebih visual dan intuitif. Pada 1990-an, perhatian lebih difokuskan pada usability dan pendekatan desain yang berpusat pada pengguna (user-centered design). Hingga kini, HCI terus berkembang dengan kemajuan teknologi seperti mobile computing, AI, dan interaksi berbasis sensor. Human-centered design adalah pendekatan dalam HCI yang menempatkan manusia sebagai fokus utama dalam pengembangan sistem. Prinsip utama dalam pendekatan ini meliputi memahami kebutuhan pengguna, melibatkan pengguna dalam proses desain, dan mengevaluasi sistem berdasarkan pengalaman pengguna.
          </p>
        `,
      },
    });


    const assessment1 = await prisma.assessment.create({
      data: {
        chapterId: chapter1.id,
        instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
        questions: JSON.stringify([
          { 
            question: 'Apa yang dimaksud dengan Interaksi Manusia-Komputer (IMK)?', 
            options: [
              'Proses komunikasi antara dua komputer', 
              'Proses interaksi antara manusia dan perangkat keras komputer', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Proses komunikasi antara manusia dan komputer melalui antarmuka',
            type: 'MC'
          },
          { 
            question: 'Apa yang menjadi tujuan utama dalam desain User Interface (UI)?', 
            options: [
              'Membuat perangkat keras komputer lebih efisien', 
              'Mempermudah pengguna dalam berinteraksi dengan sistem', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Mempermudah pengguna dalam berinteraksi dengan sistem',
            type: 'MC'
          },
          { 
            question: 'User Experience (UX) merujuk pada:', 
            options: [
              'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
              'Desain tampilan antarmuka pengguna',
              'Penggunaan teknologi dalam pengembangan aplikasi',
              'Pemrograman perangkat lunak untuk pengguna'
            ],
            answer: 'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
            type: 'MC'
          },
          { 
            question: 'Apa yang dimaksud dengan usability dalam konteks desain UI/UX?', 
            options: [
              'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
              'Kualitas grafis yang ditampilkan pada antarmuka',
              'Jumlah fitur yang ada pada aplikasi',
              'Kecepatan loading aplikasi'
            ],
            answer: 'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
            type: 'MC'
          },
          { 
            question: 'Wireframe adalah:', 
            options: [
              'Proses pengkodean aplikasi', 
              'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi', 
              'Proses pengujian aplikasi', 
              'Desain grafis yang menonjolkan warna dan font'
            ],
            answer: 'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi',
            type: 'MC'
          },
          { 
            question: 'Jelaskan Apa itu Penelitian', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Preferensi Pengguna seperti apa yang kalian maksud?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Elearning seperti apa yang akan dibangun disini?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
        ]),
      },
    });

    const assessment2 = await prisma.assessment.create({
      data: {
        chapterId: chapter2.id,
        instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
        questions: JSON.stringify([
          { 
            question: 'Apa yang dimaksud dengan Interaksi Manusia-Komputer (IMK)?', 
            options: [
              'Proses komunikasi antara dua komputer', 
              'Proses interaksi antara manusia dan perangkat keras komputer', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Proses komunikasi antara manusia dan komputer melalui antarmuka',
            type: 'MC'
          },
          { 
            question: 'Apa yang menjadi tujuan utama dalam desain User Interface (UI)?', 
            options: [
              'Membuat perangkat keras komputer lebih efisien', 
              'Mempermudah pengguna dalam berinteraksi dengan sistem', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Mempermudah pengguna dalam berinteraksi dengan sistem',
            type: 'MC'
          },
          { 
            question: 'User Experience (UX) merujuk pada:', 
            options: [
              'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
              'Desain tampilan antarmuka pengguna',
              'Penggunaan teknologi dalam pengembangan aplikasi',
              'Pemrograman perangkat lunak untuk pengguna'
            ],
            answer: 'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
            type: 'MC'
          },
          { 
            question: 'Apa yang dimaksud dengan usability dalam konteks desain UI/UX?', 
            options: [
              'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
              'Kualitas grafis yang ditampilkan pada antarmuka',
              'Jumlah fitur yang ada pada aplikasi',
              'Kecepatan loading aplikasi'
            ],
            answer: 'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
            type: 'MC'
          },
          { 
            question: 'Wireframe adalah:', 
            options: [
              'Proses pengkodean aplikasi', 
              'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi', 
              'Proses pengujian aplikasi', 
              'Desain grafis yang menonjolkan warna dan font'
            ],
            answer: 'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi',
            type: 'MC'
          },
          { 
            question: 'Jelaskan Apa itu Penelitian', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Preferensi Pengguna seperti apa yang kalian maksud?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Elearning seperti apa yang akan dibangun disini?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
        ]),
      },
    });

    const assessment3 = await prisma.assessment.create({
      data: {
        chapterId: chapter3.id,
        instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
        questions: JSON.stringify([
          { 
            question: 'Apa yang dimaksud dengan Interaksi Manusia-Komputer (IMK)?', 
            options: [
              'Proses komunikasi antara dua komputer', 
              'Proses interaksi antara manusia dan perangkat keras komputer', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Proses komunikasi antara manusia dan komputer melalui antarmuka',
            type: 'MC'
          },
          { 
            question: 'Apa yang menjadi tujuan utama dalam desain User Interface (UI)?', 
            options: [
              'Membuat perangkat keras komputer lebih efisien', 
              'Mempermudah pengguna dalam berinteraksi dengan sistem', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Mempermudah pengguna dalam berinteraksi dengan sistem',
            type: 'MC'
          },
          { 
            question: 'User Experience (UX) merujuk pada:', 
            options: [
              'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
              'Desain tampilan antarmuka pengguna',
              'Penggunaan teknologi dalam pengembangan aplikasi',
              'Pemrograman perangkat lunak untuk pengguna'
            ],
            answer: 'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
            type: 'MC'
          },
          { 
            question: 'Apa yang dimaksud dengan usability dalam konteks desain UI/UX?', 
            options: [
              'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
              'Kualitas grafis yang ditampilkan pada antarmuka',
              'Jumlah fitur yang ada pada aplikasi',
              'Kecepatan loading aplikasi'
            ],
            answer: 'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
            type: 'MC'
          },
          { 
            question: 'Wireframe adalah:', 
            options: [
              'Proses pengkodean aplikasi', 
              'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi', 
              'Proses pengujian aplikasi', 
              'Desain grafis yang menonjolkan warna dan font'
            ],
            answer: 'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi',
            type: 'MC'
          },
          { 
            question: 'Jelaskan Apa itu Penelitian', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Preferensi Pengguna seperti apa yang kalian maksud?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Elearning seperti apa yang akan dibangun disini?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
        ]),
      },
    });

    const assessment4 = await prisma.assessment.create({
      data: {
        chapterId: chapter4.id,
        instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
        questions: JSON.stringify([
          { 
            question: 'Apa yang dimaksud dengan Interaksi Manusia-Komputer (IMK)?', 
            options: [
              'Proses komunikasi antara dua komputer', 
              'Proses interaksi antara manusia dan perangkat keras komputer', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Proses komunikasi antara manusia dan komputer melalui antarmuka',
            type: 'MC'
          },
          { 
            question: 'Apa yang menjadi tujuan utama dalam desain User Interface (UI)?', 
            options: [
              'Membuat perangkat keras komputer lebih efisien', 
              'Mempermudah pengguna dalam berinteraksi dengan sistem', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Mempermudah pengguna dalam berinteraksi dengan sistem',
            type: 'MC'
          },
          { 
            question: 'User Experience (UX) merujuk pada:', 
            options: [
              'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
              'Desain tampilan antarmuka pengguna',
              'Penggunaan teknologi dalam pengembangan aplikasi',
              'Pemrograman perangkat lunak untuk pengguna'
            ],
            answer: 'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
            type: 'MC'
          },
          { 
            question: 'Apa yang dimaksud dengan usability dalam konteks desain UI/UX?', 
            options: [
              'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
              'Kualitas grafis yang ditampilkan pada antarmuka',
              'Jumlah fitur yang ada pada aplikasi',
              'Kecepatan loading aplikasi'
            ],
            answer: 'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
            type: 'MC'
          },
          { 
            question: 'Wireframe adalah:', 
            options: [
              'Proses pengkodean aplikasi', 
              'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi', 
              'Proses pengujian aplikasi', 
              'Desain grafis yang menonjolkan warna dan font'
            ],
            answer: 'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi',
            type: 'MC'
          },
          { 
            question: 'Jelaskan Apa itu Penelitian', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Preferensi Pengguna seperti apa yang kalian maksud?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Elearning seperti apa yang akan dibangun disini?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
        ]),
      },
    });

    const assessment5 = await prisma.assessment.create({
      data: {
        chapterId: chapter5.id,
        instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
        questions: JSON.stringify([
          { 
            question: 'Apa yang dimaksud dengan Interaksi Manusia-Komputer (IMK)?', 
            options: [
              'Proses komunikasi antara dua komputer', 
              'Proses interaksi antara manusia dan perangkat keras komputer', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Proses komunikasi antara manusia dan komputer melalui antarmuka',
            type: 'MC'
          },
          { 
            question: 'Apa yang menjadi tujuan utama dalam desain User Interface (UI)?', 
            options: [
              'Membuat perangkat keras komputer lebih efisien', 
              'Mempermudah pengguna dalam berinteraksi dengan sistem', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Mempermudah pengguna dalam berinteraksi dengan sistem',
            type: 'MC'
          },
          { 
            question: 'User Experience (UX) merujuk pada:', 
            options: [
              'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
              'Desain tampilan antarmuka pengguna',
              'Penggunaan teknologi dalam pengembangan aplikasi',
              'Pemrograman perangkat lunak untuk pengguna'
            ],
            answer: 'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
            type: 'MC'
          },
          { 
            question: 'Apa yang dimaksud dengan usability dalam konteks desain UI/UX?', 
            options: [
              'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
              'Kualitas grafis yang ditampilkan pada antarmuka',
              'Jumlah fitur yang ada pada aplikasi',
              'Kecepatan loading aplikasi'
            ],
            answer: 'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
            type: 'MC'
          },
          { 
            question: 'Wireframe adalah:', 
            options: [
              'Proses pengkodean aplikasi', 
              'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi', 
              'Proses pengujian aplikasi', 
              'Desain grafis yang menonjolkan warna dan font'
            ],
            answer: 'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi',
            type: 'MC'
          },
          { 
            question: 'Jelaskan Apa itu Penelitian', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Preferensi Pengguna seperti apa yang kalian maksud?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Elearning seperti apa yang akan dibangun disini?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
        ]),
      },
    });

    const assessment6 = await prisma.assessment.create({
      data: {
        chapterId: chapter6.id,
        instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
        questions: JSON.stringify([
          { 
            question: 'Apa yang dimaksud dengan Interaksi Manusia-Komputer (IMK)?', 
            options: [
              'Proses komunikasi antara dua komputer', 
              'Proses interaksi antara manusia dan perangkat keras komputer', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Proses komunikasi antara manusia dan komputer melalui antarmuka',
            type: 'MC'
          },
          { 
            question: 'Apa yang menjadi tujuan utama dalam desain User Interface (UI)?', 
            options: [
              'Membuat perangkat keras komputer lebih efisien', 
              'Mempermudah pengguna dalam berinteraksi dengan sistem', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Mempermudah pengguna dalam berinteraksi dengan sistem',
            type: 'MC'
          },
          { 
            question: 'User Experience (UX) merujuk pada:', 
            options: [
              'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
              'Desain tampilan antarmuka pengguna',
              'Penggunaan teknologi dalam pengembangan aplikasi',
              'Pemrograman perangkat lunak untuk pengguna'
            ],
            answer: 'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
            type: 'MC'
          },
          { 
            question: 'Apa yang dimaksud dengan usability dalam konteks desain UI/UX?', 
            options: [
              'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
              'Kualitas grafis yang ditampilkan pada antarmuka',
              'Jumlah fitur yang ada pada aplikasi',
              'Kecepatan loading aplikasi'
            ],
            answer: 'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
            type: 'MC'
          },
          { 
            question: 'Wireframe adalah:', 
            options: [
              'Proses pengkodean aplikasi', 
              'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi', 
              'Proses pengujian aplikasi', 
              'Desain grafis yang menonjolkan warna dan font'
            ],
            answer: 'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi',
            type: 'MC'
          },
          { 
            question: 'Jelaskan Apa itu Penelitian', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Preferensi Pengguna seperti apa yang kalian maksud?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Elearning seperti apa yang akan dibangun disini?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
        ]),
      },
    });

    const assessment7 = await prisma.assessment.create({
      data: {
        chapterId: chapter7.id,
        instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
        questions: JSON.stringify([
          { 
            question: 'Apa yang dimaksud dengan Interaksi Manusia-Komputer (IMK)?', 
            options: [
              'Proses komunikasi antara dua komputer', 
              'Proses interaksi antara manusia dan perangkat keras komputer', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Proses komunikasi antara manusia dan komputer melalui antarmuka',
            type: 'MC'
          },
          { 
            question: 'Apa yang menjadi tujuan utama dalam desain User Interface (UI)?', 
            options: [
              'Membuat perangkat keras komputer lebih efisien', 
              'Mempermudah pengguna dalam berinteraksi dengan sistem', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Mempermudah pengguna dalam berinteraksi dengan sistem',
            type: 'MC'
          },
          { 
            question: 'User Experience (UX) merujuk pada:', 
            options: [
              'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
              'Desain tampilan antarmuka pengguna',
              'Penggunaan teknologi dalam pengembangan aplikasi',
              'Pemrograman perangkat lunak untuk pengguna'
            ],
            answer: 'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
            type: 'MC'
          },
          { 
            question: 'Apa yang dimaksud dengan usability dalam konteks desain UI/UX?', 
            options: [
              'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
              'Kualitas grafis yang ditampilkan pada antarmuka',
              'Jumlah fitur yang ada pada aplikasi',
              'Kecepatan loading aplikasi'
            ],
            answer: 'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
            type: 'MC'
          },
          { 
            question: 'Wireframe adalah:', 
            options: [
              'Proses pengkodean aplikasi', 
              'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi', 
              'Proses pengujian aplikasi', 
              'Desain grafis yang menonjolkan warna dan font'
            ],
            answer: 'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi',
            type: 'MC'
          },
          { 
            question: 'Jelaskan Apa itu Penelitian', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Preferensi Pengguna seperti apa yang kalian maksud?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Elearning seperti apa yang akan dibangun disini?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
        ]),
      },
    });

    const assessment8 = await prisma.assessment.create({
      data: {
        chapterId: chapter8.id,
        instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
        questions: JSON.stringify([
          { 
            question: 'Apa yang dimaksud dengan Interaksi Manusia-Komputer (IMK)?', 
            options: [
              'Proses komunikasi antara dua komputer', 
              'Proses interaksi antara manusia dan perangkat keras komputer', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Proses komunikasi antara manusia dan komputer melalui antarmuka',
            type: 'MC'
          },
          { 
            question: 'Apa yang menjadi tujuan utama dalam desain User Interface (UI)?', 
            options: [
              'Membuat perangkat keras komputer lebih efisien', 
              'Mempermudah pengguna dalam berinteraksi dengan sistem', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Mempermudah pengguna dalam berinteraksi dengan sistem',
            type: 'MC'
          },
          { 
            question: 'User Experience (UX) merujuk pada:', 
            options: [
              'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
              'Desain tampilan antarmuka pengguna',
              'Penggunaan teknologi dalam pengembangan aplikasi',
              'Pemrograman perangkat lunak untuk pengguna'
            ],
            answer: 'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
            type: 'MC'
          },
          { 
            question: 'Apa yang dimaksud dengan usability dalam konteks desain UI/UX?', 
            options: [
              'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
              'Kualitas grafis yang ditampilkan pada antarmuka',
              'Jumlah fitur yang ada pada aplikasi',
              'Kecepatan loading aplikasi'
            ],
            answer: 'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
            type: 'MC'
          },
          { 
            question: 'Wireframe adalah:', 
            options: [
              'Proses pengkodean aplikasi', 
              'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi', 
              'Proses pengujian aplikasi', 
              'Desain grafis yang menonjolkan warna dan font'
            ],
            answer: 'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi',
            type: 'MC'
          },
          { 
            question: 'Jelaskan Apa itu Penelitian', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Preferensi Pengguna seperti apa yang kalian maksud?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Elearning seperti apa yang akan dibangun disini?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
        ]),
      },
    });

    const assignment1 = await prisma.assignment.create({
      data: {
        chapterId: chapter1.id,
        instruction: 'Kerjakan tugas berikut dalam kertas A4 dengan metode Cornell Method!',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/0fa579a231624800ad8ab9db25f23481',
      },
    });

    const assignment2 = await prisma.assignment.create({
      data: {
        chapterId: chapter2.id,
        instruction: 'Kerjakan tugas berikut dalam kertas A4 dengan metode Cornell Method!',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/0fa579a231624800ad8ab9db25f23481',
      },
    });

    const assignment3 = await prisma.assignment.create({
      data: {
        chapterId: chapter3.id,
        instruction: 'Kerjakan tugas berikut dalam kertas A4 dengan metode Cornell Method!',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/0fa579a231624800ad8ab9db25f23481',
      },
    });

    const assignment4 = await prisma.assignment.create({
      data: {
        chapterId: chapter4.id,
        instruction: 'Kerjakan tugas berikut dalam kertas A4 dengan metode Cornell Method!',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/0fa579a231624800ad8ab9db25f23481',
      },
    });

    const assignment5 = await prisma.assignment.create({
      data: {
        chapterId: chapter5.id,
        instruction: 'Kerjakan tugas berikut dalam kertas A4 dengan metode Cornell Method!',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/0fa579a231624800ad8ab9db25f23481',
      },
    });

    const assignment6 = await prisma.assignment.create({
      data: {
        chapterId: chapter6.id,
        instruction: 'Kerjakan tugas berikut dalam kertas A4 dengan metode Cornell Method!',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/0fa579a231624800ad8ab9db25f23481',
      },
    });

    const assignment7 = await prisma.assignment.create({
      data: {
        chapterId: chapter7.id,
        instruction: 'Kerjakan tugas berikut dalam kertas A4 dengan metode Cornell Method!',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/0fa579a231624800ad8ab9db25f23481',
      },
    });

    const assignment8 = await prisma.assignment.create({
      data: {
        chapterId: chapter8.id,
        instruction: 'Kerjakan tugas berikut dalam kertas A4 dengan metode Cornell Method!',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/0fa579a231624800ad8ab9db25f23481',
      },
    });


    // Create UserCourse relationship
    await prisma.userCourse.create({
      data: {
        userId: student.id,
        courseId: course1.id,
        progress: 0,
        currentChapter: 1,
        isCompleted: false,
      },
    });

    // Create UserChapter relationship
    await prisma.userChapter.create({
      data: {
        userId: student.id,
        chapterId: chapter1.id,
        isCompleted: false,
        materialDone: false,
        assessmentDone: false,
        assignmentDone: false,
        assessmentAnswer: JSON.stringify([]),
        assessmentGrade: 0,
        submission: '',
      },
    });

    const badge1 = await prisma.badge.create({
      data: {
        name: 'Beginner Designer',
        type: BadgeType.BEGINNER,
        courseId: course1.id,
        chapterId: chapter3.id,
      },
    });

    const badge2 = await prisma.badge.create({
      data: {
        name: 'Intermediate Designer',
        type: BadgeType.INTERMEDIATE,
        courseId: course1.id,
        chapterId: chapter6.id,
      },
    });

    const badge3 = await prisma.badge.create({
      data: {
        name: 'Advance Designer',
        type: BadgeType.ADVANCE,
        courseId: course1.id,
        chapterId: chapter8.id,
      },
    });

    // Create UserBadge relationship
    await prisma.userBadge.create({
      data: {
        userId: student.id,
        badgeId: badge1.id,
      },
    });

    // TRADES

    const trade1 = await prisma.trade.create({
      data: {
        image: 'lib/assets/pictures/icon.png',
        title: 'Voucher Belanja Cafetaria Del',
        description: 'Voucher Belanja senilai Rp.10.000,- untuk transaksi di Cafetaria Del. Berlaku sampai 1 semester kedepan.',
        requiredBadgeType: 'ADVANCE',
      }
    });

    const trade2 = await prisma.trade.create({
      data: {
        image: 'lib/assets/pictures/icon.png',
        title: 'Sticky Notes UTS',
        description: 'Sticky Notes berupa cemilan makanan dan minuman dengan ucapan semangat menjalani UTS',
        requiredBadgeType: 'BEGINNER',
      }
    });

    const trade3 = await prisma.trade.create({
      data: {
        image: 'lib/assets/pictures/icon.png',
        title: 'Nilai Tambah UTS +5',
        description: 'Penambahan Nilai UTS sebanyak 5. Maksimal nilai yang bisa diperoleh dengan penambahan adalah 80',
        requiredBadgeType: 'INTERMEDIATE',
      }
    });

    await prisma.userTrade.create({
      data: {
        userId: student.id,
        tradeId: trade3.id,
      },
    });

    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });