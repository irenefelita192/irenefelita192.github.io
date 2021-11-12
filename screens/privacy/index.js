import styles from './styles'
import globalStyles from './global-styles'

import Footer from 'components/footer'

export default function PrivacyScreen({ isWebView }) {
    const openBrowser = (url) => {
        if (typeof JavascriptChannel !== 'undefined') {
            JavascriptChannel.postMessage(`externalbrowser_${url}`)
        }
    }

    return (
        <>
            <div className="wrapper">
                <h1>{`Syarat & Ketentuan`}</h1>
                <p>
                    Pengguna aplikasi, calon pemegang polis dan/atau calon
                    tertanggung ("<strong>Anda</strong>") diharapkan membaca
                    syarat dan ketentuan di bawah ini dengan seksama. Selain
                    itu, Anda juga diharapkan untuk membaca ketentuan umum yang
                    tercantum setelah bagian syarat dan ketentuan ini.
                </p>
                <ol type="A">
                    <li>
                        <strong>Umum</strong>
                        <ol type="1">
                            <li>
                                Vida merupakan aplikasi untuk mencari dan/atau
                                membeli produk asuransi, yang dimiliki dan
                                dikembangkan oleh PT Lippo Life Assurance ("
                                <strong>Penanggung</strong>") ("
                                <strong>Aplikasi</strong>"),
                            </li>
                            <li>
                                Penanggung merupakan perseroan terbatas yang
                                didirikan secara sah dan tunduk pada hukum
                                negara Republik Indonesia serta menjalankan
                                kegiatan usaha perasuransian.
                            </li>
                            <li>
                                Anda bertanggung jawab untuk memastikan bahwa
                                produk asuransi yang anda pilih dalam Aplikasi
                                ini sesuai dengan kebutuhan Anda.
                            </li>
                            <li>
                                Setiap kali mengakses dan menggunakan Aplikasi
                                ini, Anda setuju untuk terikat dengan semua
                                syarat dan ketentuan.
                            </li>
                            <li>
                                Setiap perubahan terhadap syarat dan ketentuan
                                dapat Anda lihat melalui situs{' '}
                                {isWebView && (
                                    <a
                                        onClick={() => {
                                            openBrowser('https://kenalvida.com')
                                        }}
                                    >
                                        www.kenalvida.com
                                    </a>
                                )}
                                {!isWebView && (
                                    <a
                                        target="_blank"
                                        href="https://kenalvida.com"
                                    >
                                        www.kenalvida.com
                                    </a>
                                )}
                                . Jika Anda tidak menyetujui perubahan tersebut,
                                Anda dapat tidak melanjutkan penggunaan
                                Aplikasi.
                            </li>
                            <li>
                                Syarat dan ketentuan ini berlaku selama Anda
                                menggunakan Aplikasi dan sepanjang Penanggung
                                tidak mengakhiri atau menutup Aplikasi.
                            </li>
                            <li>
                                Selain syarat dan ketentuan ini, Anda dengan ini
                                juga tunduk pada syarat dan ketentuan produk
                                asuransi yang Anda pilih. Karena itu Anda wajib
                                memastikan Anda telah membaca dan memahami
                                seluruh syarat dan ketentuan dari produk
                                Asuransi, termasuk di antaranya ringkasan
                                informasi produk dan layanan serta syarat dan
                                ketentuan dalam polis.
                            </li>
                        </ol>
                    </li>
                    <li>
                        <strong>Aspek Aplikasi </strong>
                        <ol type="1">
                            <li>
                                Umum
                                <ol type="a">
                                    <li>
                                        Materi dalam Aplikasi diberikan
                                        "sebagaimana adanya" dan "sebagaimana
                                        tersedia". Penanggung tidak memberikan
                                        jaminan terkait hal apapun sehubungan
                                        dengan Aplikasi dan materinya.
                                    </li>
                                    <li>
                                        Anda membebaskan Penanggung dari segala
                                        tuntutan sehubungan dengan Penggunaan
                                        Aplikasi.
                                    </li>
                                    <li>
                                        Penanggung dapat setiap saat menghapus
                                        atau mengganti materi di dalam Aplikasi,
                                        serta melakukan pembaruan atau perbaikan
                                        berkala terhadap Aplikasi.
                                    </li>
                                    <li>
                                        Platform adalah Aplikasi (versi Android
                                        atau IOS) dan aplikasi web (aplikasi
                                        yang dapat diakses melalui web), yang
                                        dikelola oleh Penanggung dari waktu ke
                                        waktu.
                                    </li>

                                    <li>
                                        Aplikasi tersebut berfungsi untuk
                                        memasarkan produk asuransi yang dimiliki
                                        dan dikembangkan oleh Penanggung.
                                    </li>
                                    <li>
                                        Dalam Aplikasi tersebut terdapat fitur
                                        utama yang akan memfasilitasi Anda untuk
                                        mengajukan permohonan dan penutupan
                                        asuransi yang dikembangkan oleh
                                        Penanggung. Selain itu, Anda juga dapat
                                        memilih perlindungan tambahan yang
                                        ditawarkan oleh produk asuransi melalui
                                        Aplikasi.
                                    </li>
                                    <li>
                                        Selain fitur-fitur tersebut, akan
                                        terdapat fitur lain yang dapat
                                        ditambahkan oleh Penanggung dari waktu
                                        ke waktu.
                                    </li>
                                    <li>
                                        Setiap fitur dalam Aplikasi dapat
                                        diperbarui atau diubah oleh Penanggung
                                        sesuai dengan kebutuhan dan perkembangan
                                        Aplikasi.
                                    </li>

                                    <li>
                                        Aplikasi memungkinkan Anda untuk
                                        mengirimkan permintaan atas suatu fitur
                                        kepada Penanggung. Akan tetapi,
                                        Penanggung memiliki kebijakan dan
                                        kewenangan penuh untuk menerima atau
                                        menolak permintaan Anda atas fitur dalam
                                        Aplikasi. Jika Penanggung menerima
                                        permintaan Anda, maka Aplikasi akan
                                        menyampaikan pemberitahuan kepada Anda
                                        serta memberikan informasi kepada
                                        Penanggung.
                                    </li>
                                    <li>
                                        Penanggung tidak membuat pernyataan atau
                                        jaminan apapun atas kelengkapan ataupun
                                        keakuratan dari informasi di Aplikasi.
                                        Anda tidak akan meminta Penanggung
                                        bertanggung jawab sepenuhnya sebagai
                                        sumber informasi untuk pengambilan
                                        keputusan Anda dan Anda diharapkan untuk
                                        memastikan atau memverifikasi informasi
                                        tersebut dengan menghubungi Penanggung.
                                        Setiap informasi yang disediakan di
                                        Aplikasi mungkin mengandung kesalahan
                                        typographical atau ketidakakuratan
                                        teknis, yang akan tunduk pada perubahan
                                        dan perbaikan Aplikasi.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                Akses
                                <ol type="a">
                                    <li>
                                        Penanggung memberikan Anda akses
                                        terbatas yang dapat ditarik, tidak
                                        eksklusif, dan tidak dapat dialihkan
                                        untuk mengunduh dan menggunakan Aplikasi
                                        untuk penggunaan asuransi dan layanan
                                        yang terkait. Anda bertanggungjawab
                                        sepenuhnya terhadap penggunaan akses ke
                                        Aplikasi. Anda harus memastikan bahwa
                                        hanya Anda yang akan mengakses Aplikasi
                                        ini, serta Anda akan rutin mengecek
                                        Aplikasi ini karena notifikasi ataupun
                                        komunikasi yang ditujukan kepada Anda
                                        mungkin diberikan melalui Aplikasi ini.
                                    </li>
                                    <li>
                                        Anda dapat mengakses asuransi dan
                                        layanan yang terkait dari Penanggung
                                        pada Aplikasi melalui ponsel ataupun
                                        komputer apabila Anda telah mendaftarkan
                                        diri dan telah memiliki akun. Penanggung
                                        menghubungkan akun dengan alamat e-mail
                                        dan/atau nomor telepon Anda.
                                    </li>
                                    <li>
                                        Anda akan bertanggung jawab sepenuhnya
                                        atas keamanan dan aksesibilitas dari
                                        fitur ketika Anda mengakses atau
                                        menggunakan Aplikasi Penanggung yang
                                        mungkin dapat mempengaruhi kegiatan atau
                                        preferensi Anda, termasuk namun tidak
                                        terbatas pada:
                                        <ol type="1">
                                            <li>
                                                mengelola dan memperbarui
                                                pengaturan pada peramban,
                                                perangkat ponsel atau komputer
                                                Anda untuk mengakses dan
                                                mengunduh Aplikasi;
                                            </li>
                                            <li>
                                                mengumpulkan dan menyimpan
                                                cookies pada perangkat yang Anda
                                                gunakan;
                                            </li>
                                            <li>
                                                masuk dan keluar dengan benar
                                                dan tuntas dari perangkat yang
                                                Anda gunakan;
                                            </li>
                                            <li>melacak aktivitas Anda;</li>
                                            <li>
                                                memperbarui informasi akun Anda
                                                serta pengaturan aktivitas atau
                                                pesan pemberitahuan di Aplikasi.
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        Anda bertanggungjawab sepenuhnya untuk
                                        memelihara kerahasiaan credentials Anda
                                        untuk mengakses dan menggunakan
                                        Aplikasi. Oleh karenanya, Anda
                                        disarankan untuk melakukan log out
                                        setelah menggunakan Aplikasi.
                                    </li>
                                    <li>
                                        Anda tidak diperkenankan untuk mengubah,
                                        menyalahgunakan, atau memodifikasi
                                        Aplikasi dengan cara apapun.
                                    </li>

                                    <li>
                                        Penanggung tidak menjamin ketersediaan
                                        akses dan keamanan koneksi internet yang
                                        diperlukan untuk Anda mengakses
                                        Aplikasi. Ketersediaan akses dan
                                        keamanan koneksi internet tersebut
                                        merupakan tanggung jawab Anda
                                        sepenuhnya.
                                    </li>
                                    <li>
                                        Anda bertanggung jawab untuk memelihara
                                        kerahasiaan data Anda dalam mengakses
                                        dan menggunakan Aplikasi. Anda juga
                                        bertanggung jawab untuk segala aktivitas
                                        yang terjadi di bawah akun Anda.
                                    </li>
                                    <li>
                                        Penanggung berhak untuk membatasi akses
                                        ke akun Anda ataupun menghentikan
                                        aktivitas apapun pada akun Anda apabila
                                        Penanggung menemukan pelanggaran
                                        terhadap ketentuan hukum yang berlaku,
                                        syarat dan ketentuan, atau dokumen hukum
                                        lain yang mengikat Anda dan Penanggung,
                                        atau jika diperlukan untuk perlindungan
                                        terhadap Aplikasi.
                                    </li>
                                    <li>
                                        Anda dianggap telah mengetahui bahwa
                                        akses, pembagian, dan pengalihan
                                        informasi dapat terjadi melalui internet
                                        dan Penanggung tidak mempunyai kapasitas
                                        penuh untuk mengeliminasi seluruh risiko
                                        yang berkaitan dengan keamanan transmisi
                                        internet, karenanya hal ini adalah
                                        risiko yang diakui dan diterima oleh
                                        Anda dalam melanjutkan penggunaan atau
                                        mengizinkan akses terhadap informasi
                                        Anda melalui Aplikasi.
                                    </li>

                                    <li>
                                        Akses dan Penggunaan terhadap Aplikasi
                                        harus dilakukan sesuai dengan ketentuan
                                        hukum yang berlaku sehubungan dengan
                                        akses digital atau transmisi data dan
                                        keamanan siber. Anda tidak diperbolehkan
                                        untuk menggunakan Aplikasi untuk
                                        melakukan tindak pidana apapun,
                                        khususnya tindak pidana keuangan dan
                                        tindak pidana siber, antara lain tindak
                                        pidana pendanaan terorisme dan tindak
                                        pidana pencucian uang.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                Jasa Pihak Ketiga
                                <ol type="a">
                                    <li>
                                        Aplikasi mungkin akan menampilkan atau
                                        menyediakan konten atau tautan dari
                                        pihak ketiga yang tidak dimiliki atau
                                        dipelihara oleh Penanggung.
                                    </li>
                                    <li>
                                        Anda mengakui dan setuju bahwa
                                        Penanggung tidak akan bertanggung jawab
                                        atas konten dan/atau tautan pihak ketiga
                                        tersebut. Penggunaan dan akses yang Anda
                                        lakukan merupakan tanggung jawab Anda
                                        dan tunduk pada syarat dan ketentuan
                                        pihak ketiga tersebut.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                Kerahasiaan Komunikasi
                                <ol type="a">
                                    <li>
                                        Segala bentuk komunikasi, informasi,
                                        tanggapan atas umpan balik, komentar,
                                        saran, dan pertanyaan sehubungan dengan
                                        Aplikasi dan/atau asuransi dan layanan
                                        yang terkait wajib dirahasiakan oleh
                                        Anda.
                                    </li>
                                    <li>
                                        Penanggung dapat atas diskresinya
                                        menggunakan informasi tersebut, untuk
                                        tujuan antara lain meningkatkan dan
                                        memasarkan produk asuransi dari
                                        Penanggung.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                Hak Atas Kekayaan Intelektual
                                <ol type="a">
                                    <li>
                                        Semua merek dagang, merek layanan, nama
                                        dagang, logo, dan ikon (secara
                                        bersama-sama disebut sebagai "
                                        <strong>Merek Dagang</strong>") yang
                                        muncul dalam Aplikasi ini adalah Merek
                                        Dagang terdaftar dan tidak terdaftar
                                        dari Penanggung atau afiliasinya,
                                        kecuali tegas dinyatakan sebaliknya.
                                    </li>
                                    <li>
                                        Anda atau siapapun yang mendapat akses
                                        Aplikasi dari Anda baik langsung maupun
                                        tidak langsung, tidak dapat menyalin,
                                        menggunakan, atau mendistribusikan Merek
                                        Dagang tanpa izin tertulis dari
                                        Penanggung.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                Kebijakan Privasi
                                <ol type="a">
                                    <li>
                                        Umum
                                        <ol type="1">
                                            <li>
                                                Penanggung menghormati hak
                                                privasi Anda dan menghargai
                                                kepercayaan yang telah Anda
                                                berikan kepada Penanggung, oleh
                                                karenanya Penanggung memiliki
                                                komitmen untuk bertanggung jawab
                                                dalam menggunakan dan melindungi
                                                informasi dan data pribadi Anda.
                                            </li>
                                            <li>
                                                Bagian kebijakan privasi ini
                                                akan menjelaskan bagaimana
                                                Penanggung memperoleh,
                                                mengumpulkan, menggunakan,
                                                menampilkan, mengumumkan,
                                                mengungkapkan, memproses,
                                                membuka akses, menyimpan,
                                                mengirim, memberi, mengalihkan,
                                                mengolah, mengelola,
                                                memusnahkan, dan melindungi
                                                informasi dan data pribadi yang
                                                Anda berikan melalui Aplikasi (“
                                                <strong>
                                                    Kebijakan Privasi
                                                </strong>
                                                ”). Perlu diperhatikan bahwa
                                                yang dimaksud dengan informasi
                                                dan data pribadi tidak mencakup
                                                informasi dan data pribadi yang
                                                telah tersedia di domain publik.
                                            </li>
                                            <li>
                                                Kebijakan Privasi merupakan
                                                bagian dari syarat dan
                                                ketentuan, sehingga dengan
                                                menggunakan Aplikasi berarti
                                                Anda telah menyetujui
                                                keberlakuan dari Kebijakan
                                                Privasi tersebut.
                                            </li>
                                            <li>
                                                Anda menjamin bahwa seluruh
                                                pernyataan terkait informasi
                                                ataupun data pribadi yang Anda
                                                ungkapkan sehubungan dengan
                                                penggunaan asuransi dan layanan
                                                yang terkait melalui Aplikasi
                                                merupakan informasi dan data
                                                yang benar dan lengkap serta
                                                sesuai dengan keadaan
                                                sebenarnya. Anda menyetujui
                                                bahwa apabila pernyataan
                                                tersebut tidak benar, maka
                                                Penanggung berhak untuk
                                                membatalkan pendaftaran Anda di
                                                Aplikasi, kepesertaan pada polis
                                                sejak awal dan/atau melakukan
                                                tindakan lainnya sesuai dengan
                                                ketentuan dalam polis dan/atau
                                                peraturan perundang-undangan.
                                            </li>
                                            <li>
                                                Dengan menggunakan asuransi dan
                                                layanan yang terkait di
                                                Aplikasi, Anda memberikan
                                                persetujuan dan wewenang kepada
                                                Penanggung untuk menyimpan
                                                informasi Anda dalam sistem
                                                Aplikasi. Anda juga memberikan
                                                persetujuan terhadap segala
                                                bentuk perolehan, pemanfaatan,
                                                dan pengungkapan data pribadi
                                                ataupun data-data lainnya milik
                                                Anda yang diperoleh Penanggung
                                                atau afiliasinya, termasuk
                                                pengungkapan kepada pihak
                                                ketiga, sejauh sehubungan dengan
                                                penggunaan asuransi dan layanan
                                                yang terkait melalui Aplikasi.
                                            </li>
                                            <li>
                                                Penanggung memiliki kewenangan
                                                untuk menolak atau menghapus
                                                secara sebagian maupun
                                                keseluruhan profil Anda serta
                                                data yang relevan yang dianggap
                                                melanggar syarat dan ketentuan
                                                ini dan ketentuan hukum yang
                                                berlaku di wilayah negara
                                                Republik Indonesia.
                                            </li>
                                            <li>
                                                Anda akan bertanggung jawab,
                                                sejauh yang diperbolehkan oleh
                                                hukum, untuk memastikan
                                                kerahasiaan dari data pribadi
                                                Anda, khususnya terhadap akses
                                                data pribadi yang dilakukan
                                                melalui perangkat atau komputer
                                                Anda, ataupun akses yang tidak
                                                sah terhadap data pribadi Anda
                                                yang terjadi akibat kelalaian
                                                Anda.
                                            </li>
                                        </ol>
                                    </li>

                                    <li>
                                        Pendaftaran, Informasi dan Data Pribadi
                                        <ol type="1">
                                            <li>
                                                Anda diharuskan melakukan
                                                pendaftaran melalui Aplikasi
                                                sebelum dapat menggunakan
                                                fitur-fitur dalam Aplikasi.
                                            </li>
                                            <li>
                                                Untuk melakukan pendaftaran,
                                                Anda akan diminta untuk
                                                memberikan informasi yang
                                                dibutuhkan oleh Penanggung. Oleh
                                                karenanya, Anda dianggap
                                                mengetahui dan menyetujui bahwa
                                                Penanggung mengumpulkan data
                                                pribadi yang Anda berikan pada
                                                saat Anda melakukan pendaftaran
                                                maupun saat Anda menggunakan
                                                fitur-fitur yang terdapat dalam
                                                Aplikasi.
                                            </li>
                                            <li>
                                                Informasi dan data pribadi yang
                                                Anda berikan saat melakukan
                                                pendaftaran di Aplikasi antara
                                                lain adalah nama lengkap anda
                                                dan/atau identitas lain sesuai
                                                dengan Kartu Tanda Penduduk Anda
                                                serta nomor telepon genggam
                                                Anda. Selain itu, Anda juga akan
                                                diminta untuk mengisi berapa
                                                data pribadi lainnya, antara
                                                lain (i) informasi kontak Anda
                                                seperti e-mail dan/atau alamat
                                                untuk mengirim surat: (ii)
                                                informasi keuangan dan
                                                kesehatan; dan (iii) nomor kartu
                                                kredit.
                                            </li>
                                            <li>
                                                Saat menggunakan Aplikasi, Anda
                                                dapat mengaktifkan atau
                                                menonaktifkan akses terhadap
                                                lokasi Anda melalui teknologi
                                                Global Positioning System,
                                                trackers, atau perangkat lokasi
                                                lainnya. Apabila Anda memberikan
                                                akses kepada perangkat anda
                                                untuk memberikan informasi
                                                lokasi Anda kepada Aplikasi,
                                                Penanggung akan menggunakan
                                                informasi tersebut untuk
                                                memperkirakan lokasi Anda dan
                                                memberikan layanan yang bersifat
                                                lebih personal. Penanggung tidak
                                                akan memantau GPS Anda atau
                                                informasi lokasi Anda dan tidak
                                                menyimpan informasi ini.
                                            </li>
                                            <li>
                                                Apabila diperlukan, Penanggung
                                                dapat melakukan verifikasi
                                                langsung kepada Anda tentang
                                                data pribadi yang telah Anda
                                                berikan melalui Aplikasi. Selain
                                                itu, Penanggung juga dapat
                                                melengkapi informasi yang Anda
                                                berikan secara online dengan
                                                melengkapinya melalui informasi
                                                dan data pribadi Anda lainnya
                                                yang dimiliki oleh Penanggung,
                                                termasuk informasi dari afiliasi
                                                dan vendor Penanggung, serta
                                                informasi dan data yang
                                                diperoleh Penanggung sehubungan
                                                dengan diri Anda dari catatan
                                                publik dan nonpublik.
                                            </li>
                                            <li>
                                                Informasi dan data pribadi yang
                                                Anda berikan melalui Aplikasi
                                                akan digunakan oleh Penanggung
                                                untuk penggunaan asuransi dan
                                                layanan yang terkait melalui
                                                Aplikasi, antara lain:
                                                <ol type="a">
                                                    <li>
                                                        permohonan dan penutupan
                                                        asuransi;
                                                    </li>
                                                    <li>
                                                        memproses pembayaran
                                                        asuransi;
                                                    </li>
                                                    <li>memproses klaim;</li>
                                                    <li>
                                                        menyediakan informasi
                                                        kepada Anda sehubungan
                                                        dengan produk asuransi
                                                        Penanggung;
                                                    </li>
                                                    <li>
                                                        mengirimkan informasi
                                                        seputar kesehatan yang
                                                        akan membantu Anda
                                                        menjaga kesehatan Anda;
                                                    </li>
                                                    <li>
                                                        mengirimkan informasi
                                                        administratif;
                                                    </li>
                                                    <li>
                                                        menyediakan dan
                                                        meningkatkan layanan
                                                        pelanggan, termasuk
                                                        melalui komunikasi email
                                                        atau pesan, atau pesan
                                                        singkat, atau fitur
                                                        lainnya yang serupa;
                                                    </li>
                                                    <li>
                                                        menanggapi pertanyaan,
                                                        komentar, dan masukan
                                                        Anda;
                                                    </li>
                                                    <li>
                                                        melakukan promosi kepada
                                                        Anda;
                                                    </li>
                                                    <li>
                                                        memberikan kutipan untuk
                                                        satu atau lebih produk
                                                        kami;
                                                    </li>
                                                    <li>
                                                        mengirimkan survei
                                                        kepada Anda;
                                                    </li>
                                                    <li>
                                                        mengotentikasi atau
                                                        mengkonfirmasi identitas
                                                        Anda pada saat Anda
                                                        kembali ke Aplikasi
                                                        secara online;
                                                    </li>
                                                    <li>
                                                        menjalankan bisnis
                                                        Penanggung, seperti
                                                        analisis data, audit,
                                                        mengembangkan produk
                                                        baru, meningkatkan,
                                                        memperbaiki, atau
                                                        memodifikasi layanan
                                                        Penanggung,
                                                        mengidentifikasi tren
                                                        penggunaan, menentukan
                                                        efektivitas kampanye
                                                        promosi kami dan
                                                        mengoperasikan serta
                                                        melakukan ekspansi atas
                                                        kegiatan bisnis
                                                        Penanggung;
                                                    </li>
                                                    <li>
                                                        mengambil tindakan
                                                        apapun yang menurut
                                                        Penanggung penting atau
                                                        wajar;
                                                    </li>
                                                    <li>
                                                        melakukan investigasi,
                                                        mencegah, dan mendeteksi
                                                        aktivitas ilegal
                                                        berdasarkan hukum yang
                                                        berlaku;
                                                    </li>
                                                    <li>
                                                        tujuan lainnya yang
                                                        secara spesifik
                                                        diungkapkan pada saat
                                                        kami meminta informasi
                                                        Anda.
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                Penanggung menjamin bahwa
                                                informasi dan data pribadi yang
                                                Anda berikan bersifat rahasia
                                                dan tidak akan disebarluaskan
                                                kecuali untuk hal-hal yang
                                                tercantum dalam Kebijakan
                                                Privasi ini. Penanggung akan
                                                menerapkan standar keamanan
                                                fisik, elektronik, maupun
                                                manajerial untuk melindungi
                                                informasi dan data pribadi Anda.
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        Pengungkapan
                                        <ol type="1">
                                            <li>
                                                Dalam menjalankan Aplikasi dan
                                                memasarkan asuransi, Penanggung
                                                bekerja sama dengan pihak ketiga
                                                yang menyediakan layanan,
                                                seperti hosting situs web,
                                                analisis data, proses
                                                pembayaran, pemenuhan pesanan,
                                                penyediaan teknologi informasi
                                                dan infrastruktur, layanan
                                                pelanggan, pengiriman email,
                                                pemrosesan kartu kredit, serta
                                                pemeriksaan dan layanan serupa
                                                lainnya. Penanggung dapat
                                                mengungkapkan informasi pribadi
                                                Anda dengan pihak ketiga lainnya
                                                yang berkepentingan agar mereka
                                                dapat menyediakan layanan yang
                                                dibutuhkan.
                                            </li>
                                            <li>
                                                Penanggung juga dapat berbagi
                                                informasi mengenai Anda dalam
                                                beberapa keadaan tertentu,
                                                antara lain:
                                                <ol type="a">
                                                    <li>
                                                        mematuhi hukum yang
                                                        berlaku;
                                                    </li>
                                                    <li>
                                                        merespon permintaan dari
                                                        pemerintah atau bekerja
                                                        sama dengan pemerintah
                                                        mengenai hal-hal yang
                                                        berkaitan dengan hukum;
                                                    </li>
                                                    <li>
                                                        merespon hal-hal yang
                                                        berhubungan dengan
                                                        keselamatan personal
                                                        atau publik;
                                                    </li>
                                                    <li>
                                                        dalam persidangan,
                                                        investigasi, dan perihal
                                                        hukum lainnya;
                                                    </li>
                                                    <li>
                                                        menginvestigasi
                                                        insiden-insiden
                                                        keamanan;
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                <p>
                                                    Penanggung mengumpulkan
                                                    informasi mengenai aktivitas
                                                    Anda dengan menggunakan
                                                    teknologi seperti cookies,
                                                    termasuk cookies pihak
                                                    ketiga, web beacons, kode
                                                    Javascript, HTML5, databases
                                                    dan server log files.
                                                    Informasi yang kami
                                                    kumpulkan dengan menggunakan
                                                    teknologi ini adalah
                                                    termasuk alamat Media Access
                                                    Control (MAC), sistem dan
                                                    versi operasi, resolusi
                                                    layar, pembuat perangkat dan
                                                    model, bahasa, tipe dan
                                                    versi internet browser,
                                                    versi dari layanan yang Anda
                                                    gunakan, tanggal dan waktu
                                                    Anda mengakses layanan,
                                                    halaman yang Anda kunjungi,
                                                    durasi Anda membuka layanan,
                                                    informasi lokasi umum, dan
                                                    data aktivitas lainnya.
                                                </p>

                                                <p>
                                                    Informasi ini secara
                                                    otomatis muncul dan mungkin
                                                    tergabung dengan informasi
                                                    dan data pribadi Anda.
                                                    Penanggung tidak menerima
                                                    fitur "do not track" pada
                                                    situs browser. Penanggung
                                                    dan pihak ketiga partner
                                                    bisnis kami menggunakan
                                                    informasi ini untuk
                                                    menjalankan aktivitas
                                                    seperti mengukur efektivitas
                                                    dari iklan Penanggung dan
                                                    interaksi Anda dengan iklan
                                                    Penanggung, mengatur tawaran
                                                    dan iklan atas produk atau
                                                    layanan yang dapat
                                                    bermanfaat bagi Anda dalam
                                                    layanan Penanggung dan
                                                    situs-situs pihak ketiga,
                                                    serta untuk tujuan analisis.
                                                </p>
                                            </li>
                                            <li>
                                                "IP Address" (nomor yang secara
                                                otomatis telah diatur dalam
                                                komputer yang Anda gunakan oleh
                                                Penyedia Jasa Internet Anda)
                                                dapat teridentifikasi dan
                                                terdaftar secara otomatis dalam
                                                file server log Penanggung
                                                kapanpun seorang pengguna
                                                mengakses layanan, sekaligus
                                                dengan waktu dan halaman apa
                                                saja yang dikunjungi.
                                                Mengumpulkan IP Address
                                                merupakan hal standar dan telah
                                                dilakukan secara otomatis oleh
                                                banyak situs web, aplikasi, dan
                                                layanan lainnya. Penanggung
                                                menggunakan IP Address untuk
                                                tujuan antara lain menghitung
                                                tingkat penggunaan dari layanan,
                                                membantu mendiagnosis masalah
                                                server Penanggung, dan
                                                administrasi layanan. Apabila
                                                Anda mengakses email atau
                                                layanan jaringan sosial melalui
                                                layanan Penanggung, Penanggung
                                                dapat memperbolehkan layanan
                                                tersebut untuk mengumpulkan
                                                beberapa informasi yang sifatnya
                                                anonim mengenai kunjungan Anda
                                                ke layanan Penanggung agar
                                                mereka dapat memberi Anda
                                                iklan-iklan mengenai layanan
                                                yang mereka tawarkan yang
                                                mungkin menarik bagi Anda.
                                            </li>
                                            <li>
                                                Layanan-layanan pihak ketiga di
                                                atas menggunakan cookies atau
                                                web beacons untuk mendapatkan
                                                informasi.
                                            </li>
                                            <li>
                                                Pada beberapa keadaan,
                                                Penanggung dapat menggabungkan
                                                beberapa informasi lainnya
                                                dengan informasi pribadi Anda
                                                (seperti menggabungkan nama Anda
                                                dengan lokasi geografis), di
                                                mana Penanggung akan
                                                memperlakukan informasi gabungan
                                                tersebut sebagai informasi
                                                pribadi, selama kedua informasi
                                                tersebut tergabung menjadi satu.
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        Penyatuan Informasi dan Informasi Anonim
                                        <ol type="1">
                                            <li>
                                                Penanggung dapat menyatukan
                                                informasi dan data pribadi
                                                sehingga informasi dan data
                                                tersebut tidak secara personal
                                                mengidentifikasikan diri Anda
                                                atau pengguna lainnya.
                                            </li>
                                            <li>
                                                Penanggung juga dapat
                                                menghilangkan informasi yang
                                                dapat teridentifikasi secara
                                                personal guna membuat data
                                                anonim.
                                            </li>
                                            <li>
                                                Penanggung menggunakan informasi
                                                yang disatukan dan informasi
                                                anonim tersebut untuk tujuan
                                                historik, statistik, atau tujuan
                                                perencanaan usaha. Penanggung
                                                juga dapat menggunakan dan
                                                berbagi informasi tersebut untuk
                                                tujuan apapun kecuali diatur
                                                sebaliknya oleh undang-undang
                                                yang berlaku.
                                            </li>
                                        </ol>
                                    </li>

                                    <li>
                                        Statistik Pengguna Aplikasi
                                        <p>
                                            Anda dengan ini mengetahui dan
                                            menyetujui bahwa Penanggung melalui
                                            Aplikasi, akan mengumpulkan
                                            informasi tentang penggunaan
                                            Aplikasi, seperti jumlah pengguna,
                                            sumber pengguna, dan aktivitas
                                            pengguna. Informasi ini dikumpulkan
                                            dan digunakan oleh Penanggung untuk
                                            tujuan meningkatkan pelayanan kepada
                                            para pengguna termasuk Anda.
                                        </p>
                                    </li>
                                    <li>
                                        Tautan ke Platform Pihak Ketiga
                                        <p>
                                            Aplikasi dapat memuat tautan ke
                                            platform maupun konten milik pihak
                                            ketiga. Oleh karenanya, untuk
                                            keamanan Anda, Anda perlu
                                            memperhatikan dengan seksama
                                            kebijakan privasi yang diterapkan
                                            oleh pihak ketiga tersebut.
                                        </p>
                                    </li>

                                    <li>
                                        Keamanan
                                        <ol type="1">
                                            <li>
                                                Penanggung akan berupaya sebaik
                                                mungkin untuk memastikan
                                                keamanan dari informasi dan data
                                                pribadi yang Anda berikan,
                                                sehingga informasi dan data
                                                pribadi tersebut tidak akan
                                                digunakan oleh pihak ketiga yang
                                                tidak bertanggung jawab.
                                                Sehubungan dengan hal tersebut,
                                                Penanggung menganjurkan kepada
                                                Anda untuk selalu memperbarui
                                                Aplikasi Anda dan tidak
                                                mengungkapkan data pribadi anda
                                                maupun informasi rahasia
                                                sehubungan dengan Aplikasi
                                                (seperti kata sandi atau kode
                                                One Time Password/OTP) kepada
                                                pihak manapun.
                                            </li>
                                            <li>
                                                Penanggung tidak menjamin
                                                transmisi data internet maupun
                                                sistem penyimpanan data memiliki
                                                keamanan 100%. Oleh karenanya,
                                                apabila Anda merasa terdapat
                                                interaksi antara Anda dengan
                                                Penanggung atau pihak lainnya
                                                yang tidak aman sehubungan
                                                dengan penggunaan Aplikasi,
                                                harap segera menginformasikan
                                                hal tersebut kepada Penanggung.
                                            </li>
                                            <li>
                                                Anda dengan ini juga menyetujui
                                                bahwa Penanggung akan menyimpan
                                                informasi dan data pribadi Anda
                                                pada server yang terletak di
                                                pusat data yang berlokasi di
                                                Republik Indonesia yang
                                                Penanggung tentukan.
                                            </li>
                                        </ol>
                                    </li>

                                    <li>
                                        Masa Penyimpanan
                                        <p>
                                            Penanggung akan menyimpan dan
                                            mempertahankan informasi dan data
                                            pribadi Anda untuk periode yang
                                            diperlukan guna memenuhi tujuan yang
                                            diatur dalam Kebijakan Privasi dan
                                            sesuai dengan peraturan
                                            perundang-undangan yang berlaku.
                                        </p>
                                    </li>
                                    <li>
                                        Promosi Online
                                        <p>
                                            Penanggung dapat mengirimkan surat
                                            berita dan informasi elektronik
                                            mengenai produk atau layanan
                                            Penanggung, dan komunikasi pemasaran
                                            lainnya. Apabila Anda tidak ingin
                                            menerima e-mail pemasaran dari
                                            Penanggung, Anda dapat berhenti
                                            berlangganan dengan mengklik tautan
                                            berhenti berlangganan yang terdapat
                                            pada bagian bawah setiap e-mail
                                            kami. Akan tetapi fitur berhenti
                                            berlangganan tersebut hanya akan
                                            tersedia untuk informasi pemasaran.
                                            Anda akan tetap mendapatkan
                                            informasi melalui e-mail seputar
                                            pesan administratif.
                                        </p>
                                    </li>
                                    <li>
                                        Kepatuhan dan Hukum yang Berlaku
                                        <p>
                                            Setiap tindakan Penanggung terhadap
                                            informasi dan data pribadi Anda
                                            adalah sesuai dengan peraturan
                                            perundang-undangan yang berlaku di
                                            Negara Republik Indonesia.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                Pemberian Kuasa
                                <ol type="a">
                                    <li>
                                        Anda memberikan kuasa kepada Penanggung
                                        untuk meminta, mengakses, dan/atau
                                        mendapatkan setiap rekam medis atau
                                        dokumen terkait lainnya dari pihak
                                        manapun, yang berhubungan dengan
                                        asuransi dan layanan yang terkait milik
                                        Anda.
                                    </li>
                                    <li>
                                        Anda bersedia membuat dan menandatangani
                                        dokumen yang diperlukan, seperti kuasa
                                        dan/atau surat persetujuan, untuk
                                        keperluan Penanggung memperoleh rekam
                                        medis atau dokumen yang terkait.
                                    </li>
                                    <li>
                                        Anda memberikan kuasa kepada Penanggung
                                        untuk menggunakan, mengungkapkan
                                        dan/atau memberikan informasi mengenai
                                        diri Anda sehubungan dengan penggunaan
                                        dan pelaksanaan asuransi dan layanan
                                        yang terkait, termasuk kepada afiliasi
                                        Penanggung maupun kepada pihak ketiga.
                                    </li>
                                    <li>
                                        Pemberian kuasa tidak dapat dibatalkan
                                        termasuk karena sebab-sebab dalam Pasal
                                        1813 j.o Pasal 1814 j.o Pasal 1816 Kitab
                                        Undang-Undang Hukum Perdata Indonesia.
                                    </li>
                                    <li>
                                        Anda setuju untuk membantu Penanggung
                                        dalam menjalankan seluruh kuasa
                                        tersebut.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                Hal-hal terkait Polis Asuransi
                                <ol type="a">
                                    <li>
                                        Setelah permohonan dan penutupan
                                        asuransi selesai dilakukan oleh Anda
                                        melalui Aplikasi, Anda diwajibkan
                                        membayar biaya premi untuk setiap jangka
                                        waktu tertentu atas kepesertaan Anda
                                        dalam asuransi Penanggung.
                                    </li>
                                    <li>
                                        Pembayaran dilakukan melalui kartu
                                        kredit yang mana Penanggung akan
                                        mendebet kartu kredit Anda secara
                                        otomatis untuk pembayaran premi
                                        tersebut. Pembayaran premi dinyatakan
                                        lunas apabila premi telah diterima atau
                                        masuk dalam rekening Penanggung.
                                    </li>
                                    <li>
                                        Keamanan dan kerahasiaan dari detail
                                        pembayaran serta metode pembayaran
                                        merupakan tanggung jawab Anda sepenuhnya
                                        dan pihak ketiga yang menyelenggarakan
                                        jasa pembayaran tersebut. Oleh
                                        karenanya, segala bentuk kerugian dan
                                        risiko sehubungan dengan keamanan dan
                                        kerahasiaan tersebut akan ditanggung
                                        oleh Anda dan pihak ketiga terkait.
                                        Segala bentuk input data pembayaran
                                        termasuk rincian akun pembayaran untuk
                                        keperluan reimburse merupakan tanggung
                                        jawab Anda sepenuhnya. Anda tidak dapat
                                        melakukan perubahan atas data pembayaran
                                        setelah pembayaran selesai dilakukan
                                        oleh Penanggung. Untuk meminimalkan
                                        kesalahan atas input terhadap data
                                        pembayaran, Penanggung akan meminta
                                        konfirmasi Anda atas kebenaran data
                                        tersebut sebelum pembayaran dilakukan.
                                    </li>
                                    <li>
                                        Anda menyatakan telah memahami manfaat,
                                        biaya, dan risiko produk asuransi yang
                                        ditawarkan.
                                    </li>
                                    <li>
                                        Anda menyatakan dan menjamin bahwa
                                        pembayaran premi yang Anda lakukan tidak
                                        berasal dari dan/atau untuk tujuan
                                        tindak pidana pencucian uang, tindak
                                        pidana pendanaan terorisme, dan/atau
                                        tindak pidana lain berdasarkan peraturan
                                        perundang-undangan yang berlaku di
                                        Indonesia. Apabila ada indikasi
                                        pelanggaran atas tindakan pidana
                                        tersebut, maka Penanggung akan
                                        melaksanakan kewajibannya sesuai dengan
                                        polis dan/atau peraturan
                                        perundang-undangan yang berlaku.
                                    </li>
                                    <li>
                                        Penanggung akan menerbitkan polis dalam
                                        bentuk digital/elektronik, yang dapat
                                        diakses melalui Aplikasi setelah Anda
                                        menyelesaikan pembayaran premi asuransi.
                                    </li>
                                    <li>
                                        Hardcopy ikhtisar polis akan dikirimkan
                                        ke alamat Anda.
                                    </li>
                                </ol>
                            </li>
                            <li>
                                Lain-lain
                                <p>
                                    Anda juga dapat menghubungi pusat layanan
                                    24/7 kami untuk memperoleh informasi lainnya
                                    melalui nomor hotline{' '}
                                    {!isWebView && (
                                        <a href="tel:1500868">1500 868</a>
                                    )}
                                    {isWebView && <>1500 868</>}.
                                </p>
                            </li>
                        </ol>
                    </li>
                </ol>
                {/* <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                    /> */}
            </div>

            <Footer />
            <style jsx>{styles}</style>
            <style jsx global>
                {globalStyles}
            </style>
        </>
    )
}
