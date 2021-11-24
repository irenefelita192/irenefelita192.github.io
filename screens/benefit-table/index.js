import styles from './styles'
import globalStyles from './global-styles'

import Footer from 'components/footer'

export default function BenefitTableScreen({ isWebView }) {
    const download = () => {
        document.location =
            'data:text/attachment;,' + //here is the trick
            document.getElementById('content').innerHTML
    }
    return (
        <>
            {/* <a onClick={() => download()} style={{ lineHeight: 1 }}>
                DOWNLOAD
            </a> */}
            <div id="content" className="wrapper">
                <section className="table-nested">
                    <h2>TABEL MANFAAT</h2>
                    <p>
                        Manfaat yang dipertanggungkan dalam Solusi Asuransi
                        Kesehatan bergantung pada jenis plan yang dipilih.
                        Informasi di dalam tabel manfaat adalah maksimum manfaat
                        (dalam Rupiah)
                    </p>
                    <h3>Manfaat Rawat Inap</h3>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <td style={{ width: '60%' }}>Manfaat</td>
                                    <td>Plan B,C,D,E</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        <u>Maksimum limit tahunan</u>
                                        <p>
                                            Merupakan jumlah maksimum yang akan
                                            dibayarkan kepada tertanggung setiap
                                            tahun polis. Semua manfaat yang
                                            dibayar selama masa polis akan
                                            diperhitungkan terhadap jumlah
                                            maksimum per tahun.
                                        </p>
                                    </th>

                                    <td>
                                        Sesuai limit yang dipilih:
                                        <ul className="dash">
                                            <li>2.000.000.000</li>
                                            <li>5.000.000.000</li>
                                            <li>10.000.000.000</li>
                                            <li>20.000.000.000</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Area pertanggungan</u>
                                    </th>

                                    <td>
                                        Sesuai area yang dipilih antara
                                        Indonesia, Indonesia & Malaysia, Asia,
                                        atau seluruh dunia (kecuali Amerika).
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Biaya akomodasi harian</u>
                                        <p>
                                            Manfaat ini membayarkan biaya
                                            akomodasi sesuai dengan tipe dan
                                            limit kamar, ketika dirawat sebagai
                                            pasien rawat inap atau rawat harian.
                                        </p>
                                    </th>

                                    <td>
                                        Sesuai dengan limit kamar yang dipilih
                                        tertanggung:
                                        <ul className="dash">
                                            <li>standar ruang 2 bed</li>
                                            <li>
                                                standar kamar 1 bed atau Rp
                                                1.000.000
                                            </li>
                                            <li>
                                                standar kamar 1 bed atau Rp
                                                5.000.000
                                            </li>
                                            <li>
                                                standar kamar 1 bed atau Rp
                                                10.000.000
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="th-child">
                                    <td colspan="2">
                                        <h4>
                                            Perawatan rawat inap dan rawat
                                            harian
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Biaya rumah sakit</u>
                                        <p>
                                            Manfaat ini membayarkan penggantian
                                            biaya rumah sakit sejak masuk sampai
                                            keluar, termasuk:
                                        </p>
                                        <ol>
                                            <li>prosedur diagnosis;</li>
                                            <li>biaya kamar operasi;</li>
                                            <li>
                                                biaya perawatan, obat-obatan,
                                                dan alat kesehatan;
                                            </li>
                                            <li>
                                                biaya ahli bedah dan anestesi;
                                            </li>
                                            <li>biaya ICU;</li>
                                            <li>
                                                radioterapi dan/atau kemoterapi;
                                            </li>
                                            <li>
                                                biaya tomografi (CT),
                                                pengambilan gambar resonansi
                                                magnetic (MRI), sinar-x dan
                                                teknik-teknik pengambilan gambar
                                                medis yang terbukti lainnya.
                                            </li>
                                        </ol>
                                    </th>

                                    <td>Ditanggung</td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Bedah implant</u>
                                        <p>
                                            Manfaat ini membayarkan perangkat
                                            medis yang ditanamkan ke dalam tubuh
                                            melalui pembedahan sebagai bagian
                                            dari perawatan (tidak termasuk
                                            implan gigi).
                                        </p>
                                    </th>

                                    <td>Ditanggung</td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Biaya bedah (per perawatan)</u>
                                    </th>

                                    <td>Ditanggung</td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Biaya praktisi medis</u>
                                        <p>
                                            Biaya yang dikenakan oleh praktisi
                                            medis untuk kunjungan pasien rawat
                                            inap.
                                        </p>
                                    </th>
                                    <td>
                                        <p>Ditanggung</p>
                                        <p>
                                            Maksimum hingga 1 kali kunjungan per
                                            hari
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Biaya dokter spesialis</u>
                                        <p>
                                            Biaya yang dikenakan oleh dokter
                                            spesialis untuk kunjungan pasien
                                            rawat inap.
                                        </p>
                                    </th>
                                    <td>
                                        <p>Ditanggung</p>
                                        <p>
                                            Maksimum hingga 1 kali kunjungan per
                                            hari
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Biaya akomodasi pendamping</u>
                                        <p>
                                            Manfaat ini membayarkan akomodasi di
                                            kamar yang sama untuk satu
                                            pendamping, jika tertanggung
                                            menerima perawatan rawat inap yang
                                            memenuhi syarat di dalam area
                                            pertanggungan.
                                        </p>
                                        <p>
                                            Tidak terdapat manfaat yang
                                            dibayarkan untuk biaya lainnya
                                            (termasuk biaya makan) dalam manfaat
                                            untuk pendamping.
                                        </p>
                                    </th>
                                    <td>
                                        <p>1.000.000 per hari</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Biaya akomodasi bayi baru lahir</u>
                                        <p>
                                            Manfaat ini dibayarkan untuk bayi
                                            yang kurang dari 16 minggu untuk
                                            tinggal di rumah sakit ketika ibu
                                            tertanggung (pasangan) menerima
                                            perawatan rawat inap yang memenuhi
                                            syarat.
                                        </p>
                                    </th>

                                    <td>Ditanggung</td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Manfaat tunai</u>
                                        <p>
                                            Manfaat yang dibayarkan ketika
                                            tertanggung menerima perawatan dalam
                                            area pertanggungan dan asalkan tidak
                                            ada biaya perawatan yang diklaim di
                                            bawah plan ini.
                                        </p>
                                    </th>

                                    <td>1.000.000 per hari</td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>
                                            Rawat inap untuk perawatan psikiatri
                                        </u>
                                    </th>
                                    <td>
                                        Ditanggung maksimum hingga 100 hari
                                        dalam seumur hidup
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Rehabilitasi rawat inap</u>
                                    </th>
                                    <td>Maksimum hingga 28 hari</td>
                                </tr>

                                <tr className="th-child">
                                    <td colspan="2">
                                        <h4>
                                            Perawatan sebelum dan sesudah rawat
                                            inap (sebagai bagian dari rawat
                                            inap)
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Pra perawatan rawat inap</u>
                                        <p>
                                            Penanggung akan membayarkan
                                            konsultasi, investigasi yang
                                            ditentukan, dan obat-obatan
                                            esensial.
                                        </p>
                                        <p>
                                            Manfaat ini dibayarkan untuk
                                            perawatan rawat jalan dalam waktu
                                            (30) tiga puluh hari sebelum rawat
                                            inap, di mana perawatan rawat jalan
                                            berhubungan dengan rawat inap.
                                        </p>
                                    </th>

                                    <td>
                                        <p>Ditanggung</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Pasca rawat inap</u>
                                        <p>
                                            Manfaat ini dibayarkan untuk
                                            konsultasi dan perawatan lanjutan
                                            rawat jalan setelah operasi rawat
                                            inap atau rawat harian yang memenuhi
                                            syarat dalam waktu (60) enam puluh
                                            hari setelah keluar dari rumah sakit
                                            atau tanggal operasi rawat harian.
                                        </p>
                                    </th>

                                    <td>
                                        <p>Ditanggung</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Prostesis eksternal</u>
                                    </th>

                                    <td>
                                        <p>15.000.000 setiap 3 tahun</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>
                                            Fisioterapi, terapi okupasi, dan
                                            terapi wicara terkait dengan
                                            perawatan rawat inap
                                        </u>
                                        <p>
                                            Manfaat ini diberikan untuk
                                            tertanggung yang telah terus menerus
                                            ditanggung oleh polis sejak sebelum
                                            perawatan rawat inap dimulai.
                                        </p>
                                        <p>
                                            Perawatan yang diberikan oleh salah
                                            satu praktisi ini harus di bawah
                                            pengawasan medis dari praktisi
                                            medis. Pengawasan medis berarti
                                            bahwa pilihan terapi, jika
                                            memungkinkan, telah dimulai oleh
                                            praktisi medis yang telah menetapkan
                                            diagnosis. Harus ada rencana
                                            perawatan yang jelas dari praktisi
                                            medis dengan hasil yang diharapkan
                                            dan tanggal berakhirnya perawatan.
                                        </p>
                                        <p>
                                            Layanan ini bergantung pada
                                            pra-otorisasi
                                        </p>
                                    </th>

                                    <td>
                                        <p>Hingga limit pasca rawat inap</p>
                                        <br />
                                        <p>
                                            Hingga 5 sesi untuk setiap otorisasi
                                        </p>
                                        <br />
                                        <p>
                                            Maksimum hingga 1.500.000 per sesi
                                        </p>
                                        <br />
                                        <p>
                                            Hingga 60 hari setelah perawatan
                                            pasien rawat inap
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>
                                            Pengobatan tradisional Cina (sebagai
                                            bagian sesudah rawat inap)
                                        </u>
                                        <p>
                                            Manfaat ini diberikan untuk
                                            konsultasi lanjutan yang memenuhi
                                            syarat, pengobatan Cina yang
                                            diresepkan (tidak termasuk vitamin,
                                            tonik, suplemen makanan, dan
                                            sejenisnya) dan terapi (terbatas
                                            pada akupuntur) yang dilakukan oleh
                                            Praktisi Medis Tiongkok yang diakui
                                            sebagai bagian dari perawatan pasca
                                            rawat inap dengan jangka waktu (60)
                                            enam puluh hari kalender setelah
                                            perawatan rawat inap.
                                        </p>
                                        <p>
                                            Hanya berhak atas satu (1)
                                            konsultasi atau tindak lanjut pasca
                                            rawat inap per hari di dalam
                                            "Manfaat Pasca Rawat Inap" atau
                                            "Manfaat pengobatan tradisional
                                            Cina" ini.
                                        </p>
                                    </th>

                                    <td>
                                        <p>Hingga limit pasca rawat inap</p>
                                        <br />
                                        <p>Hingga 30 sesi per tahun</p>
                                        <br />
                                        <p>
                                            Maksimum hingga 2.500.000 per sesi
                                        </p>
                                    </td>
                                </tr>
                                <tr className="th-child">
                                    <td colspan="2">
                                        <h4>Perawatan rawat jalan</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>
                                            Perawatan gawat darurat karena
                                            kecelakaan
                                        </u>
                                        <p>
                                            Manfaat ini menanggung perawatan
                                            rawat jalan akibat kecelakaan yang
                                            dibutuhkan segera (dalam waktu (24)
                                            dua puluh empat jam setelah
                                            kecelakaan terjadi) setelah cedera
                                            yang timbul dari suatu kecelakaan,
                                            dengan ketentuan tertanggung telah
                                            terus menerus dijamin dalam polis
                                            sejak sebelum kecelakaan terjadi.
                                        </p>
                                        <p>
                                            Perawatan lanjutan untuk cedera yang
                                            sama akan ditanggung hingga (30)
                                            tiga puluh hari sejak tanggal
                                            kecelakaan.
                                        </p>
                                    </th>

                                    <td>
                                        <p>
                                            Tidak ada maksimum tahunan, termasuk
                                            dalam keseluruhan tunjangan manfaat
                                            polis
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>
                                            Kerusakan pada gigi karena
                                            kecelakaan
                                        </u>
                                        <p>
                                            Manfaat ini menanggung perawatan
                                            rawat jalan akibat kecelakaan yang
                                            dibutuhkan segera (dalam waktu (24)
                                            dua puluh empat jam setelah
                                            kecelakaan terjadi).
                                        </p>
                                    </th>

                                    <td>
                                        <p>
                                            Tidak ada maksimum tahunan, termasuk
                                            dalam keseluruhan tunjangan manfaat
                                            polis
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Dialisis ginjal</u>
                                        <p>
                                            Penanggung akan membayarkan dialisis
                                            ginjal yang diterima sebagai pasien
                                            rawat jalan untuk kondisi medis yang
                                            memenuhi syarat pada fasilitas medis
                                            terdaftar yang diakui oleh
                                            penanggung.
                                        </p>
                                    </th>

                                    <td>
                                        <p>
                                            Tidak ada maksimum tahunan, termasuk
                                            dalam keseluruhan tunjangan manfaat
                                            polis
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Radioterapi dan kemoterapi</u>
                                        <p>
                                            Manfaat ini termasuk biaya untuk
                                            radioterapi (penggunaan radiasi
                                            untuk mengobati kanker) dan
                                            kemoterapi (penggunaan obat-obatan
                                            untuk mengobati kanker).
                                        </p>
                                        <p>
                                            Manfaat ini juga termasuk konsultasi
                                            dengan spesialis pengobatan kanker
                                            tertanggung (seperti ahli onkologi,
                                            ahli bedah, ahli radioterapi atau
                                            ahli hematologi) dan tes diagnostik
                                            yang terkait langsung dengan
                                            pengobatan kanker aktif tertanggung.
                                        </p>
                                    </th>
                                    <td>
                                        <p>
                                            Tidak ada maksimum tahunan, termasuk
                                            dalam keseluruhan tunjangan manfaat
                                            polis
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Jalan lokal transportasi ambulans</u>
                                        <p>
                                            Manfaat ini untuk membayar
                                            perjalanan ambulans, untuk
                                            transportasi darurat ke atau antar
                                            rumah sakit, atau ketika praktisi
                                            medis menegaskan bahwa secara medis
                                            penting.
                                        </p>
                                    </th>

                                    <td>
                                        Tidak ada maksimum tahunan, termasuk
                                        dalam keseluruhan tunjangan manfaat
                                        polis
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Perawatan di rumah</u>
                                        <p>
                                            Manfaat ini menanggung layanan
                                            perawat yang memenuhi syarat dan
                                            terdaftar, yang diakui oleh
                                            penanggung, terkait kebutuhan medis
                                            untuk penyediaan perawatan
                                            berkelanjutan, di rumah tertanggung.
                                        </p>
                                        <p>
                                            Layanan ini harus dilakukan dengan
                                            segera setelah perawatan rawat inap
                                            yang memenuhi syarat yang tercantum
                                            dalam plan, dan dengan rencana
                                            perawatan, yang ditentukan
                                            sebelumnya oleh praktisi medis yang
                                            merawat, dengan tanggal berakhir
                                            yang jelas dan hasil yang
                                            diharapkan.
                                        </p>
                                        <p>
                                            Pra-otorisasi untuk manfaat ini
                                            diperlukan sebelum perawatan
                                            dimulai.
                                        </p>
                                        <p>
                                            Terbatas pada layanan oleh satu
                                            perawat saja.
                                        </p>
                                    </th>
                                    <td>
                                        <p>
                                            Tidak ada maksimum tahunan, termasuk
                                            dalam keseluruhan tunjangan manfaat
                                            polis
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Perawatan HIV/AIDS</u>{' '}
                                        <span>
                                            sebagai hasil dari kecelakaan kerja
                                            atau transfusi darah
                                        </span>
                                        <p style={{ height: '15px' }}></p>
                                        <p>
                                            Manfaat ini akan tersedia ketika
                                            tanda atau gejala muncul untuk
                                            pertama kalinya setelah keanggotaan
                                            selama 36 bulan berturut turut.
                                        </p>
                                    </th>
                                    <td>
                                        <p>
                                            Maksimum hingga 1.000.000.000 dalam
                                            seumur hidup
                                        </p>
                                        <p>
                                            Tersedia setelah keanggotaan 36
                                            bulan berturut-turut
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Perawatan hospice dan paliatif</u>
                                        <p>
                                            Manfaat ini akan tersedia ketika
                                            tertanggung dirawat di pusat
                                            spesialis perawatan paliatif atau
                                            hospice, yang diakui oleh
                                            penanggung, setelah diagnosis,
                                            konfirmasi tertulis (termasuk bukti
                                            medis) oleh praktisi medis bahwa
                                            tertanggung menderita kondisi medis
                                            atau kondisi medis terminal yang
                                            memenuhi syarat.
                                        </p>
                                    </th>
                                    <td>
                                        <p>
                                            Maksimum hingga 500.000.000 dalam
                                            seumur hidup
                                        </p>
                                        <p>
                                            Tersedia setelah keanggotaan 365
                                            hari berturut-turut
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Perawatan psikiatri rawat jalan</u>
                                        <p>
                                            Seluruh perawatan yang diberikan
                                            oleh psikolog, psikoterapis, atau
                                            orang lain selain psikiater
                                            terdaftar harus melalui
                                            pre-otorisasi oleh penanggung.
                                        </p>
                                    </th>
                                    <td>
                                        <p>
                                            Maksimum hingga 5.000.000 per tahun
                                            polis
                                        </p>
                                    </td>
                                </tr>
                                <tr className="th-child">
                                    <td colspan="2">
                                        <h4>Evakuasi darurat dan repatriasi</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>
                                            Bantuan medis darurat internasional
                                            (IEMA)
                                        </u>
                                        <p>
                                            Manfaat ini membayarkan layanan
                                            berikut ini:
                                        </p>
                                        <ul
                                            className="dash"
                                            style={{ paddingLeft: '30px' }}
                                        >
                                            <li>
                                                Evakuasi di mana fasilitas medis
                                                setempat tidak memadai menurut
                                                dokter yang ditunjuk oleh
                                                penanggung;
                                            </li>
                                            <li>
                                                Evakuasi akan dilakukan ke
                                                fasilitas medis terdekat di mana
                                                perawatan memadai;
                                            </li>
                                            <li>
                                                Transportasi untuk kembali ke
                                                negara tempat tinggal utama
                                                setelah evakuasi;
                                            </li>
                                            <li>
                                                Biaya atas satu orang pendamping
                                                ketika tertanggung dievakuasi;
                                            </li>
                                            <li>
                                                Akomodasi hotel untuk satu orang
                                                pendamping hingga 10 hari;
                                            </li>
                                            <li>
                                                Membawa jenazah/abu kembali ke
                                                pelabuhan atau bandara di negara
                                                tempat tinggal utama atau negara
                                                asal, jika tertanggung meninggal
                                                dunia di luar negeri.
                                            </li>
                                        </ul>
                                    </th>
                                    <td>
                                        <p>Ditanggung</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3>
                        Manfaat Rawat Jalan - Opsional (hanya tersedia untuk
                        rawat inap plan B-E)
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <td>Manfaat</td>
                                <td>Plan O</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Biaya konsultasi</td>
                                <td>
                                    <p>Sesuai tagihan</p>
                                </td>
                            </tr>
                            <tr>
                                <td>Obat yang diresepkan dan alat kesehatan</td>
                                <td>
                                    <p>Sesuai tagihan</p>
                                </td>
                            </tr>
                            <tr>
                                <td>Tes diagnosa, tes laboratorium</td>
                                <td>
                                    <p>Sesuai tagihan</p>
                                </td>
                            </tr>
                            <tr>
                                <td>Vaksinasi</td>
                                <td>
                                    <p>Sesuai tagihan</p>
                                </td>
                            </tr>
                            <tr>
                                <td>Pengobatan tradisional Cina</td>
                                <td>
                                    <p>Maksimum hingga 1.000.000/ kunjungan</p>
                                    <p>Maksimum hingga 5 kunjungan per tahun</p>
                                </td>
                            </tr>
                            <tr>
                                <td>Perawatan fisioterapi dan kiropraktor</td>
                                <td>
                                    <p>Maksimum hingga 1.000.000/ kunjungan</p>
                                    <p>Maksimum hingga 5 kunjungan per tahun</p>
                                </td>
                            </tr>
                            <tr>
                                <td>Co-payment (pembayaran bersama)</td>
                                <td>
                                    <p>
                                        Sesuai opsi yang dipilih: 0%, 20%, atau
                                        50%
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>Limit tahunan</td>
                                <td>
                                    <p>Sesuai limit yang dipilih:</p>
                                    <ul className="dash">
                                        <li>10.000.000</li>
                                        <li>20.000.000</li>
                                        <li>50.000.000</li>
                                        <li>100.000.000</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>
                        Manfaat Gigi - Opsional (harus memilih manfaat rawat
                        jalan)
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <td>Manfaat</td>
                                <td>Plan G</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pencegahan</td>
                                <td>
                                    <p>Sesuai tagihan</p>
                                </td>
                            </tr>
                            <tr>
                                <td>Perawatan gigi rutin dan dasar</td>
                                <td>
                                    <p>Sesuai tagihan</p>
                                </td>
                            </tr>
                            <tr>
                                <td>Perawatan gigi kompleks</td>
                                <td>
                                    <p>Sesuai tagihan</p>
                                    <p>
                                        Tersedia setelah keanggotaan 6 bulan
                                        berturut-turut
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>Mahkota, implan, prostesis</td>
                                <td>
                                    <p>Sesuai tagihan</p>
                                    <p>
                                        Tersedia setelah keanggotaan 6 bulan
                                        berturut-turut
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>Co-payment (pembayaran bersama)</td>
                                <td>
                                    <p>
                                        Sesuai opsi yang dipilih: 0%, 20%, atau
                                        50%
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>Limit tahunan</td>
                                <td>
                                    <p>Sesuai limit yang dipilih:</p>
                                    <ul className="dash">
                                        <li>10.000.000</li>
                                        <li>20.000.000</li>
                                        <li>35.000.000</li>
                                        <li>50.000.000</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>
                        Manfaat Kehamilan dan Persalinan - Opsional (harus
                        memilih manfaat rawat jalan)*
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <td>Manfaat</td>
                                <td>Plan M</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Komplikasi prenatal dan postnatal</td>
                                <td>
                                    <p>Sesuai tagihan</p>
                                    <p>
                                        Tersedia setelah keanggotaan 12 bulan
                                        berturut-turut
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>Kehamilan dan persalinan</td>
                                <td>
                                    <p>Sesuai tagihan</p>
                                    <p>
                                        Tersedia setelah keanggotaan 12 bulan
                                        berturut-turut
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>Co-payment (pembayaran bersama)</td>
                                <td>
                                    <p>
                                        Sesuai opsi yang dipilih: 0%, 20%, atau
                                        50%
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>Limit tahunan</td>
                                <td>
                                    <p>Sesuai limit yang dipilih:</p>
                                    <ul className="dash">
                                        <li>30.000.000</li>
                                        <li>50.000.000</li>
                                        <li>80.000.000</li>
                                        <li>100.000.000</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        <small>*Usia masuk tertanggung: 18 - 45 tahun</small>
                    </p>
                </section>
            </div>
            <Footer />
            <style jsx>{styles}</style>
            <style jsx global>
                {globalStyles}
            </style>
        </>
    )
}
