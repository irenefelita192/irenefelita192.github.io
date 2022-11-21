import styles from './styles'
import globalStyles from './global-styles'

import Footer from 'components/footer'

export default function BenefitTableScreen({ isWebView }) {
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
                        Kesehatan Ekonomis bergantung pada jenis{' '}
                        <strong>plan</strong> yang dipilih. Informasi di dalam{' '}
                        <strong>tabel manfaat</strong> adalah maksimum manfaat
                        (dalam Rupiah)
                    </p>
                    <h3>Manfaat Rawat Inap</h3>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <td style={{ width: '60%' }}>Manfaat</td>
                                    <td>Plan P, Q</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        <u>Maksimum limit tahunan</u>
                                        <p>
                                            Merupakan jumlah maksimum yang akan
                                            dibayarkan kepada{' '}
                                            <strong>tertanggung</strong> setiap{' '}
                                            <strong>tahun polis</strong>. Semua
                                            manfaat yang dibayar selama masa
                                            polis akan diperhitungkan terhadap
                                            jumlah maksimum per{' '}
                                            <strong>tahun</strong>.
                                        </p>
                                    </th>

                                    <td>
                                        Sesuai{' '}
                                        <strong>Area pertanggungan</strong> yang
                                        dipilih:
                                        <ul className="dash">
                                            <li>100.000.000</li>
                                            <li>60.000.000</li>
                                            <li>40.000.000</li>
                                            <li>20.000.000</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Area pertanggungan (*)</u>
                                    </th>

                                    <td>
                                        Sesuai{' '}
                                        <strong>Area pertanggungan</strong> yang
                                        dipilih:
                                        <ul className="dash">
                                            <li>
                                                514 Kota/Kabupaten di Indonesia
                                            </li>
                                            <li>
                                                403 Kota/Kabupaten di Indonesia
                                            </li>
                                            <li>
                                                332 Kota/Kabupaten di Indonesia
                                            </li>
                                            <li>
                                                174 Kota/Kabupaten di Indonesia
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Biaya akomodasi harian</u>
                                        <p>
                                            Manfaat ini membayarkan{' '}
                                            <strong>biaya</strong> akomodasi
                                            sesuai dengan tipe dan limit kamar,
                                            ketika dirawat sebagai pasien{' '}
                                            <strong>rawat inap</strong> atau
                                            rawat harian.
                                        </p>
                                    </th>

                                    <td>
                                        Sesuai kelas kamar yang dipilih{' '}
                                        <strong>tertanggung</strong>:
                                        <ul className="dash">
                                            <li>
                                                Kelas 1 (1 kamar 2 tempat tidur)
                                            </li>
                                            <li>
                                                Kelas 2 (1 kamar 3 tempat tidur)
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="th-child">
                                    <td colSpan="2">
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
                                            Manfaat ini membayarkan penggantian{' '}
                                            <strong>biaya rumah sakit</strong>{' '}
                                            sejak masuk sampai keluar, termasuk:
                                        </p>
                                        <ol>
                                            <li>prosedur diagnosis;</li>
                                            <li>
                                                <strong>biaya</strong> kamar
                                                operasi;
                                            </li>
                                            <li>
                                                <strong>biaya perawatan</strong>
                                                , obat-obatan, dan alat
                                                kesehatan;
                                            </li>
                                            <li>
                                                <strong>biaya</strong> ahli
                                                bedah dan anestesi;
                                            </li>
                                            <li>
                                                <strong>biaya</strong> ICU;
                                            </li>
                                            <li>
                                                radioterapi dan/atau kemoterapi;
                                            </li>
                                            <li>
                                                <strong>biaya</strong> tomografi
                                                (CT), pengambilan gambar
                                                resonansi magnetic (MRI),
                                                sinar-x dan teknik-teknik
                                                pengambilan gambar medis yang
                                                terbukti lainnya.
                                            </li>
                                        </ol>
                                    </th>

                                    <td>Ditanggung</td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Persalinan Normal (**)</u>
                                    </th>

                                    <td>Ditanggung</td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Bedah bedah (per perawatan)</u>
                                    </th>

                                    <td>Ditanggung</td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Biaya praktisi medis</u>
                                        <p>
                                            <strong>Biaya</strong> yang
                                            dikenakan oleh praktisi medis untuk{' '}
                                            <strong>kunjungan</strong> pasien{' '}
                                            <strong>rawat inap</strong>.
                                        </p>
                                    </th>
                                    <td>
                                        <p>Ditanggung</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <u>Biaya dokter spesialis</u>
                                        <p>
                                            <strong>Biaya</strong> yang
                                            dikenakan oleh dokter{' '}
                                            <strong>spesialis</strong> untuk{' '}
                                            <strong>kunjungan</strong> pasien{' '}
                                            <strong>rawat inap</strong>.
                                        </p>
                                    </th>
                                    <td>
                                        <p>Ditanggung</p>
                                    </td>
                                </tr>

                                <tr className="th-child">
                                    <td colSpan="2">
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
                                            <strong>Penanggung</strong> akan
                                            membayarkan konsultasi, investigasi
                                            yang ditentukan, dan obat-obatan
                                            esensial.
                                        </p>
                                        <p>
                                            Manfaat ini dibayarkan untuk{' '}
                                            <strong>
                                                perawatan rawat jalan
                                            </strong>{' '}
                                            dalam waktu (30) tiga puluh hari
                                            kalender sebelum{' '}
                                            <strong>rawat inap</strong>, dimana{' '}
                                            <strong>
                                                perawatan rawat jalan
                                            </strong>{' '}
                                            berhubungan dengan{' '}
                                            <strong>rawat inap</strong>.
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
                                            konsultasi dan{' '}
                                            <strong>perawatan</strong> lanjutan{' '}
                                            <strong>rawat jalan</strong> setelah
                                            operasi <strong>rawat inap</strong>{' '}
                                            atau rawat harian yang memenuhi
                                            syarat dalam waktu (60) enam puluh
                                            hari setelah keluar dari{' '}
                                            <strong>rumah sakit</strong> atau
                                            tanggal operasi rawat harian.
                                        </p>
                                    </th>

                                    <td>
                                        <p>Ditanggung</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="note">
                        <div>
                            (*) Detil kabupaten / kota per setiap{' '}
                            <strong>plan</strong> dapat dilihat pada Lampiran 1
                        </div>
                        <div>
                            (**) Usia masuk <strong>tertanggung</strong> 18-45{' '}
                            <strong>tahun</strong>
                        </div>
                    </div>
                    <h3>
                        Manfaat Rawat Jalan - Opsional (harus memilih manfaat
                        rawat inap)
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <td>Manfaat</td>
                                <td>Plan R, S, T, U</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Biaya</strong> telekonsultasi (*)
                                </td>
                                <td>
                                    Sesuai <strong>plan</strong> yang dipilih{' '}
                                    <strong>tertanggung</strong>:
                                    <ul className="dash">
                                        <li>
                                            1x konsultasi dengan Dokter Umum
                                            (maksimum 25.000) dalam sebulan,
                                        </li>
                                        <li>
                                            1x konsultasi dengan Dokter Umum
                                            (maksimum 25.000) atau{' '}
                                            <strong>Spesialis</strong>
                                            (maksimum 50.000) dalam sebulan
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Obat yang diresepkan saat{' '}
                                    <strong>sesi</strong> telekonsultasi (**)
                                </td>
                                <td>
                                    Sesuai <strong>plan</strong> yang dipilih
                                    oleh <strong>tertanggung</strong>:
                                    <ul className="dash">
                                        <li>Tanpa Obat</li>
                                        <li>
                                            1x obat yang diresepkan dokter saat
                                            telekonsultasi hingga maksimum
                                            50.000.
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Biaya</strong> konsultasi tatap muka
                                    sesuai rujukan telekonsultasi (***)
                                </td>
                                <td>
                                    <div>100.000 per konsultasi </div>
                                    <div>
                                        Max 3x konsultasi per{' '}
                                        <strong>tahun(****)</strong>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Biaya</strong> obat-obatan atau
                                    pemeriksaan penunjang dari konsultasi tatap
                                    muka atau vaksinasi dasar (untuk Anak sampai
                                    dengan 5 <strong>tahun</strong>) hingga 3x
                                    konsultasi/<strong>tahun</strong>
                                </td>
                                <td>150.000 per konsultasi</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="note">
                        <div>
                            (*) Manfaat dapat diakumulasikan per bulan (30
                            hari), dengan maksimum 12 bulan (dengan catatan
                            pembayaran terus menerus dilakukan terhadap premi
                            yang terkait). Maksimum 1x konsultasi per hari. Pada
                            saat ulang <strong>tahun polis</strong> (bulan ke -
                            13), manfaat akan diulang dari 1x konsultasi.
                        </div>
                        <div>
                            (**) Obat yang diresepkan berlaku sesuai ketentuan
                            penyedia layanan telekonsultasi yang sudah
                            ditentukan oleh <strong>penanggung</strong>
                        </div>
                        <div>
                            (***) Sesuai <strong>Area Pertanggungan</strong>{' '}
                            Manfaat <strong>Rawat Inap Tertanggung</strong>
                        </div>
                        <div>
                            (****) Berlaku prorata untuk pembayaran polis
                            bulanan
                        </div>
                    </div>

                    <h3>
                        Manfaat Penyakit Kritis (*) – Opsional (harus memilih
                        manfaat rawat inap)
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <td>Penyakit Kritis</td>
                                <td>Plan V</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Kanker (**)</strong>
                                </td>
                                <td rowSpan="5">
                                    <p>
                                        Sesuai uang pertanggungan yang dipilih
                                    </p>
                                    <ul className="dash">
                                        <li>50.000.000</li>
                                        <li>100.000.000</li>
                                        <li>200.000.000</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Serangan Jantung</td>
                            </tr>
                            <tr>
                                <td>Gangguan Neurologi</td>
                            </tr>
                            <tr>
                                <td>Gagal Ginjal Kronis</td>
                            </tr>
                            <tr>
                                <td>Diabetes Melitus</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="note">
                        <div>
                            (*) Usia masuk <strong>tertanggung</strong> 18-60{' '}
                            <strong>tahun</strong>
                        </div>
                        <div>
                            (**) tahap rendah mendapatkan 25% dari uang
                            pertanggungan sesuai <strong>plan</strong> yang
                            dipilih oleh <strong>tertanggung</strong>
                        </div>
                    </div>
                </section>
                <section className="appendix">
                    <h3>Lampiran 1 – Area Perlindungan</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Kabupaten Aceh Barat</td>
                                <td>Kabupaten Sampang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Barat Daya</td>
                                <td>Kabupaten Sidoarjo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Besar</td>
                                <td>Kabupaten Situbondo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Jaya</td>
                                <td>Kabupaten Sumenep</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Selatan</td>
                                <td>Kabupaten Trenggalek</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Singkil</td>
                                <td>Kabupaten Tuban</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Tamiang</td>
                                <td>Kabupaten Tulungagung</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Tengah</td>
                                <td>Kota Batu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Tenggara</td>
                                <td>Kota Blitar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Timur</td>
                                <td>Kota Kediri</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Utara</td>
                                <td>Kota Madiun</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bener Meriah</td>
                                <td>Kota Malang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bireuen</td>
                                <td>Kota Mojokerto</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Gayo Lues</td>
                                <td>Kota Pasuruan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nagan Raya</td>
                                <td>Kota Probolinggo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pidie</td>
                                <td>Kota Surabaya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pidie Jaya</td>
                                <td>Kabupaten Badung</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Simeulue</td>
                                <td>Kabupaten Bangli</td>
                            </tr>
                            <tr>
                                <td>Kota Banda Aceh</td>
                                <td>Kabupaten Buleleng</td>
                            </tr>
                            <tr>
                                <td>Kota Langsa</td>
                                <td>Kabupaten Gianyar</td>
                            </tr>
                            <tr>
                                <td>Kota Lhokseumawe</td>
                                <td>Kabupaten Jembrana</td>
                            </tr>
                            <tr>
                                <td>Kota Sabang</td>
                                <td>Kabupaten Karangasem</td>
                            </tr>
                            <tr>
                                <td>Kota Subulussalam</td>
                                <td>Kabupaten Klungkung</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Asahan</td>
                                <td>Kabupaten Tabanan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Batu Bara</td>
                                <td>Kota Denpasar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Dairi</td>
                                <td>Kabupaten Bima</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Deli Serdang</td>
                                <td>Kabupaten Dompu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Humbang Hasundutan</td>
                                <td>Kabupaten Lombok Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Karo</td>
                                <td>Kabupaten Lombok Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Labuhanbatu</td>
                                <td>Kabupaten Lombok Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Labuhanbatu Selatan</td>
                                <td>Kabupaten Lombok Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Labuhanbatu Utara</td>
                                <td>Kabupaten Sumbawa</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Langkat</td>
                                <td>Kabupaten Sumbawa Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Mandailing Natal</td>
                                <td>Kota Bima</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nias</td>
                                <td>Kota Mataram</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nias Barat</td>
                                <td>Kabupaten Alor</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nias Selatan</td>
                                <td>Kabupaten Belu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nias Utara</td>
                                <td>Kabupaten Ende</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Padang Lawas</td>
                                <td>Kabupaten Flores Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Padang Lawas Utara</td>
                                <td>Kabupaten Kupang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pakpak Bharat</td>
                                <td>Kabupaten Lembata</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Samosir</td>
                                <td>Kabupaten Malaka</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Serdang Bedagai</td>
                                <td>Kabupaten Manggarai</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Simalungun</td>

                                <td>Kabupaten Manggarai Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tapanuli Selatan</td>
                                <td>Kabupaten Manggarai Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tapanuli Tengah</td>
                                <td>Kabupaten Nagekeo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tapanuli Utara</td>
                                <td>Kabupaten Ngada</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Toba</td>
                                <td>Kabupaten Rote Ndao</td>
                            </tr>
                            <tr>
                                <td>Kota Binjai</td>
                                <td>Kabupaten Sabu Raijua</td>
                            </tr>
                            <tr>
                                <td>Kota Gunungsitoli</td>
                                <td>Kabupaten Sikka</td>
                            </tr>
                            <tr>
                                <td>Kota Medan</td>
                                <td>Kabupaten Sumba Barat</td>
                            </tr>
                            <tr>
                                <td>Kota Padang Sidempuan</td>
                                <td>Kabupaten Sumba Barat Daya</td>
                            </tr>
                            <tr>
                                <td>Kota Pematangsiantar</td>
                                <td>Kabupaten Sumba Tengah</td>
                            </tr>
                            <tr>
                                <td>Kota Sibolga</td>
                                <td>Kabupaten Sumba Timur</td>
                            </tr>
                            <tr>
                                <td>Kota Tanjungbalai</td>
                                <td>Kabupaten Timor Tengah Selatan</td>
                            </tr>
                            <tr>
                                <td>Kota Tebing Tinggi</td>
                                <td>Kabupaten Timor Tengah Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Agam</td>
                                <td>Kota Kupang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Dharmasraya</td>
                                <td>Kabupaten Bengkayang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kepulauan Mentawai</td>
                                <td>Kabupaten Kapuas Hulu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lima Puluh Kota</td>
                                <td>Kabupaten Kayong Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Padang Pariaman</td>
                                <td>Kabupaten Ketapang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pasaman</td>
                                <td>Kabupaten Kubu Raya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pasaman Barat</td>
                                <td>Kabupaten Landak</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pesisir Selatan</td>
                                <td>Kabupaten Melawi</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sijunjung</td>
                                <td>Kabupaten Mempawah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Solok</td>
                                <td>Kabupaten Sambas</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Solok Selatan</td>
                                <td>Kabupaten Sanggau</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tanah Datar</td>
                                <td>Kabupaten Sekadau</td>
                            </tr>
                            <tr>
                                <td>Kota Bukittinggi</td>
                                <td>Kabupaten Sintang</td>
                            </tr>
                            <tr>
                                <td>Kota Padang</td>
                                <td>Kota Pontianak</td>
                            </tr>
                            <tr>
                                <td>Kota Padang Panjang</td>
                                <td>Kota Singkawang</td>
                            </tr>
                            <tr>
                                <td>Kota Pariaman</td>

                                <td>Kabupaten Balangan</td>
                            </tr>
                            <tr>
                                <td>Kota Payakumbuh</td>

                                <td>Kabupaten Banjar</td>
                            </tr>
                            <tr>
                                <td>Kota Sawahlunto</td>
                                <td>Kabupaten Barito Kuala</td>
                            </tr>
                            <tr>
                                <td>Kota Solok</td>

                                <td>Kabupaten Hulu Sungai Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bengkalis</td>
                                <td>Kabupaten Hulu Sungai Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Indragiri Hilir</td>
                                <td>Kabupaten Hulu Sungai Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Indragiri Hulu</td>
                                <td>Kabupaten Kotabaru</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kampar</td>
                                <td>Kabupaten Tabalong</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kepulauan Meranti</td>
                                <td>Kabupaten Tanah Bumbu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kuantan Singingi</td>
                                <td>Kabupaten Tanah Laut</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pelalawan</td>
                                <td>Kabupaten Tapin</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Rokan Hilir</td>
                                <td>Kota Banjarbaru</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Rokan Hulu</td>
                                <td>Kota Banjarmasin</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Siak</td>
                                <td>Kabupaten Barito Selatan</td>
                            </tr>
                            <tr>
                                <td>Kota Dumai</td>
                                <td>Kabupaten Barito Timur</td>
                            </tr>
                            <tr>
                                <td>Kota Pekanbaru</td>
                                <td>Kabupaten Barito Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bintan</td>
                                <td>Kabupaten Gunung Mas</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Karimun</td>
                                <td>Kabupaten Kapuas</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kepulauan Anambas</td>
                                <td>Kabupaten Katingan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lingga</td>
                                <td>Kabupaten Kotawaringin Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Natuna</td>
                                <td>Kabupaten Kotawaringin Timur</td>
                            </tr>
                            <tr>
                                <td>Kota Batam</td>
                                <td>Kabupaten Lamandau</td>
                            </tr>
                            <tr>
                                <td>Kota Tanjungpinang</td>
                                <td>Kabupaten Murung Raya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Batanghari</td>
                                <td>Kabupaten Pulang Pisau</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bungo</td>
                                <td>Kabupaten Sukamara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kerinci</td>
                                <td>Kabupaten Seruyan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Merangin</td>
                                <td>Kota Palangka Raya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Muaro Jambi</td>
                                <td>Kabupaten Berau</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sarolangun</td>
                                <td>Kabupaten Kutai Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tanjung Jabung Barat</td>
                                <td>Kabupaten Kutai Kartanegara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tanjung Jabung Timur</td>
                                <td>Kabupaten Kutai Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tebo</td>
                                <td>Kabupaten Mahakam Ulu</td>
                            </tr>
                            <tr>
                                <td>Kota Jambi</td>
                                <td>Kabupaten Paser</td>
                            </tr>
                            <tr>
                                <td>Kota Sungai Penuh</td>
                                <td>Kabupaten Penajam Paser Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bengkulu Selatan</td>
                                <td>Kota Balikpapan</td>{' '}
                            </tr>
                            <tr>
                                <td>Kabupaten Bengkulu Tengah</td>
                                <td>Kota Bontang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bengkulu Utara</td>
                                <td>Kota Samarinda</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kaur</td>
                                <td>Kabupaten Bulungan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kepahiang</td>
                                <td>Kabupaten Malinau</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lebong</td>
                                <td>Kabupaten Nunukan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Mukomuko</td>
                                <td>Kabupaten Tana Tidung</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Rejang Lebong</td>
                                <td>Kota Tarakan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Seluma</td>
                                <td>Kabupaten Boalemo</td>
                            </tr>
                            <tr>
                                <td>Kota Bengkulu</td>
                                <td>Kabupaten Bone Bolango</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Banyuasin</td>
                                <td>Kabupaten Gorontalo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Empat Lawang</td>
                                <td>Kabupaten Gorontalo Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lahat</td>
                                <td>Kabupaten Pohuwato</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Muara Enim</td>
                                <td>Kota Gorontalo</td>{' '}
                            </tr>
                            <tr>
                                <td>Kabupaten Musi Banyuasin</td>
                                <td>Kabupaten Majene</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Musi Rawas</td>
                                <td>Kabupaten Mamasa</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Musi Rawas Utara</td>
                                <td>Kabupaten Mamuju</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Ogan Ilir</td>
                                <td>Kabupaten Mamuju Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Ogan Komering Ilir</td>
                                <td>Kabupaten Pasangkayu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Ogan Komering Ulu</td>
                                <td>Kabupaten Polewali Mandar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Ogan Komering Ulu Selatan</td>
                                <td>Kabupaten Bantaeng</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Ogan Komering Ulu Timur</td>
                                <td>Kabupaten Barru</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Penukal Abab Lematang Ilir</td>
                                <td>Kabupaten Bone</td>
                            </tr>
                            <tr>
                                <td>Kota Lubuklinggau</td>
                                <td>Kabupaten Bulukumba</td>
                            </tr>
                            <tr>
                                <td>Kota Pagar Alam</td>
                                <td>Kabupaten Enrekang</td>
                            </tr>
                            <tr>
                                <td>Kota Palembang</td>
                                <td>Kabupaten Gowa</td>
                            </tr>
                            <tr>
                                <td>Kota Prabumulih</td>
                                <td>Kabupaten Jeneponto</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bangka</td>
                                <td>Kabupaten Kepulauan Selayar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bangka Barat</td>
                                <td>Kabupaten Luwu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bangka Selatan</td>
                                <td>Kabupaten Luwu Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bangka Tengah</td>
                                <td>Kabupaten Luwu Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Belitung</td>
                                <td>Kabupaten Maros</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Belitung Timur</td>
                                <td>Kabupaten Pangkajene dan Kepulauan</td>
                            </tr>
                            <tr>
                                <td>Kota Pangkal Pinang</td>
                                <td>Kabupaten Pinrang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lampung Barat</td>
                                <td>Kabupaten Sidenreng Rappang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lampung Selatan</td>
                                <td>Kabupaten Sinjai</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lampung Tengah</td>
                                <td>Kabupaten Soppeng</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lampung Timur</td>
                                <td>Kabupaten Takalar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lampung Utara</td>
                                <td>Kabupaten Tana Toraja</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Mesuji</td>
                                <td>Kabupaten Toraja Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pesawaran</td>
                                <td>Kabupaten Wajo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pesisir Barat</td>
                                <td>Kota Makassar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pringsewu</td>
                                <td>Kota Palopo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tanggamus</td>
                                <td>Kota Parepare</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tulang Bawang</td>
                                <td>Kabupaten Bombana</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tulang Bawang Barat</td>
                                <td>Kabupaten Buton</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Way Kanan</td>
                                <td>Kabupaten Buton Selatan</td>
                            </tr>
                            <tr>
                                <td>Kota Bandar Lampung</td>
                                <td>Kabupaten Buton Tengah</td>
                            </tr>
                            <tr>
                                <td>Kota Metro</td>
                                <td>Kabupaten Buton Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lebak</td>
                                <td>Kabupaten Kolaka</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pandeglang</td>
                                <td>Kabupaten Kolaka Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Serang</td>
                                <td>Kabupaten Kolaka Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tangerang</td>
                                <td>Kabupaten Konawe</td>
                            </tr>
                            <tr>
                                <td>Kota Cilegon</td>
                                <td>Kabupaten Konawe Kepulauan</td>
                            </tr>
                            <tr>
                                <td>Kota Serang</td>
                                <td>Kabupaten Konawe Selatan</td>
                            </tr>
                            <tr>
                                <td>Kota Tangerang</td>
                                <td>Kabupaten Konawe Utara</td>
                            </tr>
                            <tr>
                                <td>Kota Tangerang Selatan</td>
                                <td>Kabupaten Muna</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bandung</td>
                                <td>Kabupaten Muna Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bandung Barat</td>
                                <td>Kabupaten Wakatobi</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bekasi</td>
                                <td>Kota Baubau</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bogor</td>
                                <td>Kota Kendari</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Ciamis</td>
                                <td>Kabupaten Banggai</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Cianjur</td>
                                <td>Kabupaten Banggai Kepulauan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Cirebon</td>
                                <td>Kabupaten Banggai Laut</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Garut</td>
                                <td>Kabupaten Buol</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Indramayu</td>
                                <td>Kabupaten Donggala</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Karawang</td>
                                <td>Kabupaten Morowali</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kuningan</td>
                                <td>Kabupaten Morowali Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Majalengka</td>
                                <td>Kabupaten Parigi Moutong</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pangandaran</td>
                                <td>Kabupaten Poso</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Purwakarta</td>
                                <td>Kabupaten Sigi</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Subang</td>
                                <td>Kabupaten Tojo Una-Una</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sukabumi</td>
                                <td>Kabupaten Tolitoli</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sumedang</td>
                                <td>Kota Palu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tasikmalaya</td>
                                <td>Kabupaten Bolaang Mongondow</td>
                            </tr>
                            <tr>
                                <td>Kota Bandung</td>
                                <td>Kabupaten Bolaang Mongondow Selatan</td>
                            </tr>
                            <tr>
                                <td>Kota Banjar</td>
                                <td>Kabupaten Bolaang Mongondow Timur</td>
                            </tr>
                            <tr>
                                <td>Kota Bekasi</td>
                                <td>Kabupaten Bolaang Mongondow Utara</td>
                            </tr>
                            <tr>
                                <td>Kota Bogor</td>
                                <td>Kabupaten Kepulauan Sangihe</td>
                            </tr>
                            <tr>
                                <td>Kota Cimahi</td>
                                <td>
                                    Kabupaten Kepulauan Siau Tagulandang Biaro
                                </td>
                            </tr>
                            <tr>
                                <td>Kota Cirebon</td>
                                <td>Kabupaten Kepulauan Talaud</td>
                            </tr>
                            <tr>
                                <td>Kota Depok</td>
                                <td>Kabupaten Minahasa</td>
                            </tr>
                            <tr>
                                <td>Kota Sukabumi</td>
                                <td>Kabupaten Minahasa Selatan</td>
                            </tr>
                            <tr>
                                <td>Kota Tasikmalaya</td>
                                <td>Kabupaten Minahasa Tenggara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Administrasi Kepulauan Seribu</td>
                                <td>Kabupaten Minahasa Utara</td>
                            </tr>
                            <tr>
                                <td>Kota Administrasi Jakarta Barat</td>
                                <td>Kota Bitung</td>
                            </tr>
                            <tr>
                                <td>Kota Administrasi Jakarta Pusat</td>
                                <td>Kota Kotamobagu</td>
                            </tr>
                            <tr>
                                <td>Kota Administrasi Jakarta Selatan</td>
                                <td>Kota Manado</td>
                            </tr>
                            <tr>
                                <td>Kota Administrasi Jakarta Timur</td>
                                <td>Kota Tomohon</td>
                            </tr>
                            <tr>
                                <td>Kota Administrasi Jakarta Utara</td>
                                <td>Kabupaten Buru</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Banjarnegara</td>
                                <td>Kabupaten Buru Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Banyumas</td>
                                <td>Kabupaten Kepulauan Aru</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Batang</td>
                                <td>Kabupaten Kepulauan Tanimbar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Blora</td>
                                <td>Kabupaten Maluku Barat Daya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Boyolali</td>
                                <td>Kabupaten Maluku Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Brebes</td>
                                <td>Kabupaten Maluku Tenggara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Cilacap</td>
                                <td>Kabupaten Seram Bagian Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Demak</td>
                                <td>Kabupaten Seram Bagian Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Grobogan</td>
                                <td>Kota Ambon</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Jepara</td>
                                <td>Kota Tual</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Karanganyar</td>
                                <td>Kabupaten Halmahera Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kebumen</td>
                                <td>Kabupaten Halmahera Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kendal</td>
                                <td>Kabupaten Halmahera Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Klaten</td>
                                <td>Kabupaten Halmahera Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kudus</td>
                                <td>Kabupaten Halmahera Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Magelang</td>
                                <td>Kabupaten Kepulauan Sula</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pati</td>
                                <td>Kabupaten Pulau Morotai</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pekalongan</td>
                                <td>Kabupaten Pulau Taliabu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pemalang</td>
                                <td>Kota Ternate</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Purbalingga</td>
                                <td>Kota Tidore Kepulauan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Purworejo</td>
                                <td>Kabupaten Biak Numfor</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Rembang</td>
                                <td>Kabupaten Jayapura</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Semarang</td>
                                <td>Kabupaten Keerom</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sragen</td>
                                <td>Kabupaten Kepulauan Yapen</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sukoharjo</td>
                                <td>Kabupaten Mamberamo Raya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tegal</td>
                                <td>Kabupaten Sarmi</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Temanggung</td>
                                <td>Kabupaten Supiori</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Wonogiri</td>
                                <td>Kabupaten Waropen</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Wonosobo</td>
                                <td>Kota Jayapura</td>
                            </tr>
                            <tr>
                                <td>Kota Magelang</td>
                                <td>Kabupaten Fakfak</td>
                            </tr>
                            <tr>
                                <td>Kota Pekalongan</td>
                                <td>Kabupaten Kaimana</td>
                            </tr>
                            <tr>
                                <td>Kota Salatiga</td>
                                <td>Kabupaten Manokwari</td>
                            </tr>
                            <tr>
                                <td>Kota Semarang</td>
                                <td>Kabupaten Manokwari Selatan</td>
                            </tr>
                            <tr>
                                <td>Kota Surakarta</td>
                                <td>Kabupaten Maybrat</td>
                            </tr>
                            <tr>
                                <td>Kota Tegal</td>
                                <td>Kabupaten Pegunungan Arfak</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bantul</td>
                                <td>Kabupaten Raja Ampat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Gunungkidul</td>
                                <td>Kabupaten Sorong</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kulon Progo</td>
                                <td>Kabupaten Sorong Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sleman</td>
                                <td>Kabupaten Tambrauw</td>
                            </tr>
                            <tr>
                                <td>Kota Yogyakarta</td>
                                <td>Kabupaten Teluk Bintuni</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bangkalan</td>
                                <td>Kabupaten Teluk Wondama</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Banyuwangi</td>
                                <td>Kota Sorong</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Blitar</td>
                                <td>Kabupaten Jayawijaya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bojonegoro</td>
                                <td>Kabupaten Lanny Jaya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bondowoso</td>
                                <td>Kabupaten Mamberamo Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Gresik</td>
                                <td>Kabupaten Nduga</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Jember</td>
                                <td>Kabupaten Pegunungan Bintang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Jombang</td>
                                <td>Kabupaten Tolikara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kediri</td>
                                <td>Kabupaten Yalimo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lamongan</td>
                                <td>Kabupaten Yahukimo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lumajang</td>
                                <td>Kabupaten Asmat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Madiun</td>
                                <td>Kabupaten Boven Digoel</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Magetan</td>
                                <td>Kabupaten Mappi</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Malang</td>
                                <td>Kabupaten Merauke</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Mojokerto</td>
                                <td>Kabupaten Deiyai</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nganjuk</td>
                                <td>Kabupaten Dogiyai</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Ngawi</td>
                                <td>Kabupaten Intan Jaya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pacitan</td>
                                <td>Kabupaten Mimika</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pamekasan</td>
                                <td>Kabupaten Nabire</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pasuruan</td>
                                <td>Kabupaten Paniai</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Ponorogo</td>
                                <td>Kabupaten Puncak</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Probolinggo</td>
                                <td>Kabupaten Puncak Jaya</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>Daftar 403 Kota / Kabupaten di Indonesia:</h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>Kabupaten Aceh Barat</td>
                                <td>Kabupaten Gresik</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Barat Daya</td>
                                <td>Kabupaten Jember</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Besar</td>
                                <td>Kabupaten Jombang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Jaya</td>
                                <td>Kabupaten Kediri</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Selatan</td>
                                <td>Kabupaten Lamongan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Singkil</td>
                                <td>Kabupaten Lumajang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Tamiang</td>
                                <td>Kabupaten Madiun</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Tengah</td>
                                <td>Kabupaten Magetan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Tenggara</td>
                                <td>Kabupaten Malang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Timur</td>
                                <td>Kabupaten Mojokerto</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Utara</td>
                                <td>Kabupaten Nganjuk</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bener Meriah</td>
                                <td>Kabupaten Ngawi</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bireuen</td>
                                <td>Kabupaten Pacitan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Gayo Lues</td>
                                <td>Kabupaten Pamekasan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nagan Raya</td>
                                <td>Kabupaten Pasuruan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pidie</td>
                                <td>Kabupaten Ponorogo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pidie Jaya</td>
                                <td>Kabupaten Probolinggo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Simeulue</td>
                                <td>Kabupaten Sampang</td>
                            </tr>
                            <tr>
                                <td>Kota Banda Aceh</td>
                                <td>Kabupaten Situbondo</td>
                            </tr>
                            <tr>
                                <td>Kota Langsa</td>
                                <td>Kabupaten Sumenep</td>
                            </tr>
                            <tr>
                                <td>Kota Lhokseumawe</td>
                                <td>Kabupaten Trenggalek</td>
                            </tr>
                            <tr>
                                <td>Kota Sabang</td>
                                <td>Kabupaten Tuban</td>
                            </tr>
                            <tr>
                                <td>Kota Subulussalam</td>
                                <td>Kabupaten Tulungagung</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Asahan</td>
                                <td>Kota Batu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Batu Bara</td>
                                <td>Kota Blitar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Dairi</td>
                                <td>Kota Kediri</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Deli Serdang</td>
                                <td>Kota Madiun</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Humbang Hasundutan</td>
                                <td>Kota Mojokerto</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Karo</td>
                                <td>Kota Pasuruan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Labuhanbatu</td>
                                <td>Kota Probolinggo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Labuhanbatu Selatan</td>
                                <td>Kabupaten Badung</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Labuhanbatu Utara</td>
                                <td>Kabupaten Bangli</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Langkat</td>
                                <td>Kabupaten Buleleng</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Mandailing Natal</td>
                                <td>Kabupaten Gianyar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nias</td>
                                <td>Kabupaten Jembrana</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nias Barat</td>
                                <td>Kabupaten Karangasem</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nias Selatan</td>
                                <td>Kabupaten Klungkung</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nias Utara</td>
                                <td>Kabupaten Tabanan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Padang Lawas</td>
                                <td>Kota Denpasar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Padang Lawas Utara</td>
                                <td>Kabupaten Bima</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pakpak Bharat</td>
                                <td>Kabupaten Dompu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Samosir</td>
                                <td>Kabupaten Lombok Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Serdang Bedagai</td>
                                <td>Kabupaten Lombok Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Simalungun</td>
                                <td>Kabupaten Lombok Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tapanuli Selatan</td>
                                <td>Kabupaten Lombok Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tapanuli Tengah</td>
                                <td>Kabupaten Sumbawa</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tapanuli Utara</td>
                                <td>Kabupaten Sumbawa Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Toba</td>
                                <td>Kota Bima</td>
                            </tr>
                            <tr>
                                <td>Kota Binjai</td>
                                <td>Kota Mataram</td>
                            </tr>
                            <tr>
                                <td>Kota Gunungsitoli</td>
                                <td>Kabupaten Alor</td>
                            </tr>
                            <tr>
                                <td>Kota Padang Sidempuan</td>
                                <td>Kabupaten Belu</td>
                            </tr>
                            <tr>
                                <td>Kota Pematangsiantar</td>
                                <td>Kabupaten Ende</td>
                            </tr>
                            <tr>
                                <td>Kota Sibolga</td>
                                <td>Kabupaten Flores Timur</td>
                            </tr>
                            <tr>
                                <td>Kota Tanjungbalai</td>
                                <td>Kabupaten Kupang</td>
                            </tr>
                            <tr>
                                <td>Kota Tebing Tinggi</td>
                                <td>Kabupaten Lembata</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Agam</td>
                                <td>Kabupaten Malaka</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Dharmasraya</td>
                                <td>Kabupaten Manggarai</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lima Puluh Kota</td>
                                <td>Kabupaten Manggarai Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pasaman</td>
                                <td>Kabupaten Manggarai Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pasaman Barat</td>
                                <td>Kabupaten Nagekeo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sijunjung</td>
                                <td>Kabupaten Ngada</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Solok</td>
                                <td>Kabupaten Rote Ndao</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Solok Selatan</td>
                                <td>Kabupaten Sabu Raijua</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tanah Datar</td>
                                <td>Kabupaten Sikka</td>
                            </tr>
                            <tr>
                                <td>Kota Bukittinggi</td>
                                <td>Kabupaten Sumba Barat</td>
                            </tr>
                            <tr>
                                <td>Kota Padang Panjang</td>
                                <td>Kabupaten Sumba Barat Daya</td>
                            </tr>
                            <tr>
                                <td>Kota Payakumbuh</td>
                                <td>Kabupaten Sumba Tengah</td>
                            </tr>
                            <tr>
                                <td>Kota Sawahlunto</td>
                                <td>Kabupaten Sumba Timur</td>
                            </tr>
                            <tr>
                                <td>Kota Solok</td>
                                <td>Kabupaten Timor Tengah Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bengkalis</td>
                                <td>Kabupaten Timor Tengah Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Indragiri Hulu</td>
                                <td>Kota Kupang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kampar</td>
                                <td>Kabupaten Bengkayang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kepulauan Meranti</td>
                                <td>Kabupaten Kayong Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kuantan Singingi</td>
                                <td>Kabupaten Ketapang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pelalawan</td>
                                <td>Kabupaten Landak</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Rokan Hilir</td>
                                <td>Kabupaten Melawi</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Rokan Hulu</td>
                                <td>Kabupaten Sambas</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Siak</td>
                                <td>Kabupaten Sekadau</td>
                            </tr>
                            <tr>
                                <td>Kota Dumai</td>
                                <td>Kota Singkawang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bintan</td>
                                <td>Kabupaten Balangan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Karimun</td>
                                <td>Kabupaten Banjar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kepulauan Anambas</td>
                                <td>Kabupaten Barito Kuala</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lingga</td>
                                <td>Kabupaten Hulu Sungai Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Natuna</td>
                                <td>Kabupaten Hulu Sungai Tengah</td>
                            </tr>
                            <tr>
                                <td>Kota Tanjungpinang</td>
                                <td>Kabupaten Hulu Sungai Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Batanghari</td>
                                <td>Kabupaten Kotabaru</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bungo</td>
                                <td>Kabupaten Tabalong</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kerinci</td>
                                <td>Kabupaten Tanah Bumbu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Merangin</td>
                                <td>Kabupaten Tanah Laut</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Muaro Jambi</td>
                                <td>Kabupaten Tapin</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sarolangun</td>
                                <td>Kota Banjarbaru</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tanjung Jabung Barat</td>
                                <td>Kota Banjarmasin</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tanjung Jabung Timur</td>
                                <td>Kabupaten Barito Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tebo</td>
                                <td>Kabupaten Barito Timur</td>
                            </tr>
                            <tr>
                                <td>Kota Jambi</td>
                                <td>Kabupaten Barito Utara</td>
                            </tr>
                            <tr>
                                <td>Kota Sungai Penuh</td>
                                <td>Kabupaten Gunung Mas</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bengkulu Selatan</td>
                                <td>Kabupaten Kapuas</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bengkulu Tengah</td>
                                <td>Kabupaten Katingan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bengkulu Utara</td>
                                <td>Kabupaten Kotawaringin Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kaur</td>
                                <td>Kabupaten Kotawaringin Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kepahiang</td>
                                <td>Kabupaten Lamandau</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lebong</td>
                                <td>Kabupaten Murung Raya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Mukomuko</td>
                                <td>Kabupaten Pulang Pisau</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Rejang Lebong</td>
                                <td>Kabupaten Sukamara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Seluma</td>
                                <td>Kabupaten Seruyan</td>
                            </tr>
                            <tr>
                                <td>Kota Bengkulu</td>
                                <td>Kota Palangka Raya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Empat Lawang</td>
                                <td>Kabupaten Berau</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lahat</td>
                                <td>Kabupaten Kutai Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Muara Enim</td>
                                <td>Kabupaten Kutai Kartanegara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Musi Rawas Utara</td>
                                <td>Kabupaten Kutai Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Ogan Komering Ulu</td>
                                <td>Kabupaten Mahakam Ulu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Ogan Komering Ulu Selatan</td>
                                <td>Kabupaten Paser</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Ogan Komering Ulu Timur</td>
                                <td>Kabupaten Penajam Paser Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Penukal Abab Lematang Ilir</td>
                                <td>Kota Balikpapan</td>
                            </tr>
                            <tr>
                                <td>Kota Lubuklinggau</td>
                                <td>Kota Bontang</td>
                            </tr>
                            <tr>
                                <td>Kota Pagar Alam</td>
                                <td>Kota Samarinda</td>
                            </tr>
                            <tr>
                                <td>Kota Prabumulih</td>
                                <td>Kabupaten Bulungan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bangka</td>
                                <td>Kabupaten Malinau</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bangka Barat</td>
                                <td>Kabupaten Nunukan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bangka Selatan</td>
                                <td>Kabupaten Tana Tidung</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bangka Tengah</td>
                                <td>Kota Tarakan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Belitung</td>
                                <td>Kabupaten Boalemo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Belitung Timur</td>
                                <td>Kabupaten Bone Bolango</td>
                            </tr>
                            <tr>
                                <td>Kota Pangkal Pinang</td>
                                <td>Kabupaten Gorontalo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lampung Barat</td>
                                <td>Kabupaten Gorontalo Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lampung Selatan</td>
                                <td>Kabupaten Pohuwato</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lampung Tengah</td>
                                <td>Kota Gorontalo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lampung Timur</td>
                                <td>Kabupaten Majene</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lampung Utara</td>
                                <td>Kabupaten Mamasa</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Mesuji</td>
                                <td>Kabupaten Mamuju</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pesawaran</td>
                                <td>Kabupaten Mamuju Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pesisir Barat</td>
                                <td>Kabupaten Pasangkayu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pringsewu</td>
                                <td>Kabupaten Polewali Mandar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tanggamus</td>
                                <td>Kabupaten Luwu Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tulang Bawang</td>
                                <td>Kabupaten Tana Toraja</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tulang Bawang Barat</td>
                                <td>Kabupaten Toraja Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Way Kanan</td>
                                <td>Kota Palopo</td>
                            </tr>
                            <tr>
                                <td>Kota Metro</td>
                                <td>Kota Parepare</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lebak</td>
                                <td>Kabupaten Bombana</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pandeglang</td>
                                <td>Kabupaten Buton</td>
                            </tr>
                            <tr>
                                <td>Kota Cilegon</td>
                                <td>Kabupaten Buton Selatan</td>
                            </tr>
                            <tr>
                                <td>Kota Serang</td>
                                <td>Kabupaten Buton Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bandung Barat</td>
                                <td>Kabupaten Buton Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Ciamis</td>
                                <td>Kabupaten Kolaka</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Cianjur</td>
                                <td>Kabupaten Kolaka Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Cirebon</td>
                                <td>Kabupaten Kolaka Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Garut</td>
                                <td>Kabupaten Konawe</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Indramayu</td>
                                <td>Kabupaten Konawe Kepulauan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Majalengka</td>
                                <td>Kabupaten Konawe Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pangandaran</td>
                                <td>Kabupaten Konawe Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Subang</td>
                                <td>Kabupaten Muna</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sumedang</td>
                                <td>Kabupaten Muna Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tasikmalaya</td>
                                <td>Kabupaten Wakatobi</td>
                            </tr>
                            <tr>
                                <td>Kota Banjar</td>
                                <td>Kota Baubau</td>
                            </tr>
                            <tr>
                                <td>Kota Cimahi</td>
                                <td>Kota Kendari</td>
                            </tr>
                            <tr>
                                <td>Kota Cirebon</td>
                                <td>Kabupaten Banggai</td>
                            </tr>
                            <tr>
                                <td>Kota Sukabumi</td>
                                <td>Kabupaten Banggai Kepulauan</td>
                            </tr>
                            <tr>
                                <td>Kota Tasikmalaya</td>
                                <td>Kabupaten Banggai Laut</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Banjarnegara</td>
                                <td>Kabupaten Buol</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Banyumas</td>
                                <td>Kabupaten Donggala</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Batang</td>
                                <td>Kabupaten Morowali</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Blora</td>
                                <td>Kabupaten Morowali Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Boyolali</td>
                                <td>Kabupaten Parigi Moutong</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Brebes</td>
                                <td>Kabupaten Poso</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Cilacap</td>
                                <td>Kabupaten Sigi</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Demak</td>
                                <td>Kabupaten Tojo Una-Una</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Grobogan</td>
                                <td>Kabupaten Tolitoli</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Jepara</td>
                                <td>Kota Palu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Karanganyar</td>
                                <td>Kabupaten Buru</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kebumen</td>
                                <td>Kabupaten Buru Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kendal</td>
                                <td>Kabupaten Kepulauan Aru</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Klaten</td>
                                <td>Kabupaten Kepulauan Tanimbar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kudus</td>
                                <td>Kabupaten Maluku Barat Daya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Magelang</td>
                                <td>Kabupaten Maluku Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pati</td>
                                <td>Kabupaten Maluku Tenggara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pekalongan</td>
                                <td>Kabupaten Seram Bagian Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pemalang</td>
                                <td>Kabupaten Seram Bagian Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Purbalingga</td>
                                <td>Kota Ambon</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Purworejo</td>
                                <td>Kota Tual</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Rembang</td>
                                <td>Kabupaten Halmahera Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Semarang</td>
                                <td>Kabupaten Halmahera Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sragen</td>
                                <td>Kabupaten Halmahera Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sukoharjo</td>
                                <td>Kabupaten Halmahera Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tegal</td>
                                <td>Kabupaten Halmahera Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Temanggung</td>
                                <td>Kabupaten Kepulauan Sula</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Wonogiri</td>
                                <td>Kabupaten Pulau Morotai</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Wonosobo</td>
                                <td>Kabupaten Pulau Taliabu</td>
                            </tr>
                            <tr>
                                <td>Kota Magelang</td>
                                <td>Kota Ternate</td>
                            </tr>
                            <tr>
                                <td>Kota Pekalongan</td>
                                <td>Kota Tidore Kepulauan</td>
                            </tr>
                            <tr>
                                <td>Kota Salatiga</td>
                                <td>Kabupaten Fakfak</td>
                            </tr>
                            <tr>
                                <td>Kota Semarang</td>
                                <td>Kabupaten Kaimana</td>
                            </tr>
                            <tr>
                                <td>Kota Tegal</td>
                                <td>Kabupaten Manokwari</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bantul</td>
                                <td>Kabupaten Manokwari Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Gunungkidul</td>
                                <td>Kabupaten Maybrat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kulon Progo</td>
                                <td>Kabupaten Pegunungan Arfak</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sleman</td>
                                <td>Kabupaten Raja Ampat</td>
                            </tr>
                            <tr>
                                <td>Kota Yogyakarta</td>
                                <td>Kabupaten Sorong</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bangkalan</td>
                                <td>Kabupaten Sorong Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Banyuwangi</td>
                                <td>Kabupaten Tambrauw</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Blitar</td>
                                <td>Kabupaten Teluk Bintuni</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bojonegoro</td>
                                <td>Kabupaten Teluk Wondama</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bondowoso</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4> Daftar 332 Kota / Kabupaten di Indonesia:</h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>Kabupaten Aceh Barat</td>
                                <td>Kabupaten Bantul</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Barat Daya</td>
                                <td>Kabupaten Gunungkidul</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Besar</td>
                                <td>Kabupaten Kulon Progo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Jaya</td>
                                <td>Kota Yogyakarta</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Selatan</td>
                                <td>Kabupaten Bangkalan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Singkil</td>
                                <td>Kabupaten Banyuwangi</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Tamiang</td>
                                <td>Kabupaten Blitar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Tengah</td>
                                <td>Kabupaten Bojonegoro</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Tenggara</td>
                                <td>Kabupaten Bondowoso</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Timur</td>
                                <td>Kabupaten Jember</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bener Meriah</td>
                                <td>Kabupaten Jombang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bireuen</td>
                                <td>Kabupaten Kediri</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Gayo Lues</td>
                                <td>Kabupaten Lamongan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nagan Raya</td>
                                <td>Kabupaten Lumajang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pidie</td>
                                <td>Kabupaten Madiun</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pidie Jaya</td>
                                <td>Kabupaten Magetan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Simeulue</td>
                                <td>Kabupaten Malang</td>
                            </tr>
                            <tr>
                                <td>Kota Banda Aceh</td>
                                <td>Kabupaten Mojokerto</td>
                            </tr>
                            <tr>
                                <td>Kota Langsa</td>
                                <td>Kabupaten Nganjuk</td>
                            </tr>
                            <tr>
                                <td>Kota Sabang</td>
                                <td>Kabupaten Ngawi</td>
                            </tr>
                            <tr>
                                <td>Kota Subulussalam</td>
                                <td>Kabupaten Pacitan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Asahan</td>
                                <td>Kabupaten Pamekasan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Batu Bara</td>
                                <td>Kabupaten Pasuruan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Dairi</td>
                                <td>Kabupaten Ponorogo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Deli Serdang</td>
                                <td>Kabupaten Probolinggo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Humbang Hasundutan</td>
                                <td>Kabupaten Sampang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Karo</td>
                                <td>Kabupaten Situbondo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Labuhanbatu</td>
                                <td>Kabupaten Sumenep</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Labuhanbatu Selatan</td>
                                <td>Kabupaten Trenggalek</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Labuhanbatu Utara</td>
                                <td>Kabupaten Tuban</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Langkat</td>
                                <td>Kabupaten Tulungagung</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Mandailing Natal</td>
                                <td>Kota Batu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nias</td>
                                <td>Kota Blitar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nias Barat</td>
                                <td>Kota Kediri</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nias Selatan</td>
                                <td>Kota Madiun</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nias Utara</td>
                                <td>Kota Mojokerto</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Padang Lawas</td>
                                <td>Kota Probolinggo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Padang Lawas Utara</td>
                                <td>Kabupaten Bangli</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pakpak Bharat</td>
                                <td>Kabupaten Buleleng</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Samosir</td>
                                <td>Kabupaten Gianyar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Simalungun</td>
                                <td>Kabupaten Jembrana</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tapanuli Selatan</td>
                                <td>Kabupaten Karangasem</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tapanuli Tengah</td>
                                <td>Kabupaten Klungkung</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tapanuli Utara</td>
                                <td>Kabupaten Tabanan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Toba</td>
                                <td>Kabupaten Bima</td>
                            </tr>
                            <tr>
                                <td>Kota Binjai</td>
                                <td>Kabupaten Dompu</td>
                            </tr>
                            <tr>
                                <td>Kota Gunungsitoli</td>
                                <td>Kabupaten Lombok Barat</td>
                            </tr>
                            <tr>
                                <td>Kota Padang Sidempuan</td>
                                <td>Kabupaten Lombok Tengah</td>
                            </tr>
                            <tr>
                                <td>Kota Sibolga</td>
                                <td>Kabupaten Lombok Utara</td>
                            </tr>
                            <tr>
                                <td>Kota Tanjungbalai</td>
                                <td>Kabupaten Sumbawa</td>
                            </tr>
                            <tr>
                                <td>Kota Tebing Tinggi</td>
                                <td>Kabupaten Sumbawa Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Agam</td>
                                <td>Kota Bima</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Dharmasraya</td>
                                <td>Kota Mataram</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lima Puluh Kota</td>
                                <td>Kota Kupang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pasaman</td>
                                <td>Kabupaten Bengkayang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pasaman Barat</td>
                                <td>Kabupaten Kayong Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sijunjung</td>
                                <td>Kabupaten Ketapang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Solok</td>
                                <td>Kabupaten Landak</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Solok Selatan</td>
                                <td>Kabupaten Melawi</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tanah Datar</td>
                                <td>Kabupaten Sambas</td>
                            </tr>
                            <tr>
                                <td>Kota Bukittinggi</td>
                                <td>Kabupaten Sekadau</td>
                            </tr>
                            <tr>
                                <td>Kota Padang Panjang</td>
                                <td>Kota Singkawang</td>
                            </tr>
                            <tr>
                                <td>Kota Payakumbuh</td>
                                <td>Kabupaten Balangan</td>
                            </tr>
                            <tr>
                                <td>Kota Sawahlunto</td>
                                <td>Kabupaten Banjar</td>
                            </tr>
                            <tr>
                                <td>Kota Solok</td>
                                <td>Kabupaten Barito Kuala</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bengkalis</td>
                                <td>Kabupaten Hulu Sungai Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Indragiri Hulu</td>
                                <td>Kabupaten Hulu Sungai Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kampar</td>
                                <td>Kabupaten Hulu Sungai Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kepulauan Meranti</td>
                                <td>Kabupaten Kotabaru</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kuantan Singingi</td>
                                <td>Kabupaten Tabalong</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pelalawan</td>
                                <td>Kabupaten Tanah Bumbu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Rokan Hilir</td>
                                <td>Kabupaten Tanah Laut</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Rokan Hulu</td>
                                <td>Kabupaten Tapin</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Siak</td>
                                <td>Kota Banjarbaru</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bintan</td>
                                <td>Kota Banjarmasin</td>
                            </tr>
                            <tr>
                                <td>Kota Tanjungpinang</td>
                                <td>Kabupaten Barito Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Batanghari</td>
                                <td>Kabupaten Barito Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bungo</td>
                                <td>Kabupaten Barito Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kerinci</td>
                                <td>Kabupaten Gunung Mas</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Merangin</td>
                                <td>Kabupaten Kapuas</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sarolangun</td>
                                <td>Kabupaten Katingan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tebo</td>
                                <td>Kabupaten Kotawaringin Barat</td>
                            </tr>
                            <tr>
                                <td>Kota Sungai Penuh</td>
                                <td>Kabupaten Kotawaringin Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bengkulu Selatan</td>
                                <td>Kabupaten Lamandau</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bengkulu Tengah</td>
                                <td>Kabupaten Murung Raya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bengkulu Utara</td>
                                <td>Kabupaten Pulang Pisau</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kaur</td>
                                <td>Kabupaten Sukamara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kepahiang</td>
                                <td>Kabupaten Seruyan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lebong</td>
                                <td>Kota Palangka Raya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Mukomuko</td>
                                <td>Kabupaten Kutai Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Rejang Lebong</td>
                                <td>Kabupaten Kutai Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Seluma</td>
                                <td>Kabupaten Mahakam Ulu</td>
                            </tr>
                            <tr>
                                <td>Kota Bengkulu</td>
                                <td>Kota Bontang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Empat Lawang</td>
                                <td>Kabupaten Bulungan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lahat</td>
                                <td>Kabupaten Malinau</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Muara Enim</td>
                                <td>Kabupaten Nunukan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Musi Rawas Utara</td>
                                <td>Kabupaten Tana Tidung</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Ogan Komering Ulu</td>
                                <td>Kota Tarakan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Ogan Komering Ulu Selatan</td>
                                <td>Kabupaten Boalemo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Ogan Komering Ulu Timur</td>
                                <td>Kabupaten Bone Bolango</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Penukal Abab Lematang Ilir</td>
                                <td>Kabupaten Gorontalo</td>
                            </tr>
                            <tr>
                                <td>Kota Lubuklinggau</td>
                                <td>Kabupaten Gorontalo Utara</td>
                            </tr>
                            <tr>
                                <td>Kota Pagar Alam</td>
                                <td>Kabupaten Pohuwato</td>
                            </tr>
                            <tr>
                                <td>Kota Prabumulih</td>
                                <td>Kota Gorontalo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bangka</td>
                                <td>Kabupaten Majene</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bangka Barat</td>
                                <td>Kabupaten Mamasa</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bangka Selatan</td>
                                <td>Kabupaten Mamuju</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bangka Tengah</td>
                                <td>Kabupaten Mamuju Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Belitung</td>
                                <td>Kabupaten Pasangkayu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Belitung Timur</td>
                                <td>Kabupaten Polewali Mandar</td>
                            </tr>
                            <tr>
                                <td>Kota Pangkal Pinang</td>
                                <td>Kabupaten Luwu Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lampung Barat</td>
                                <td>Kabupaten Tana Toraja</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lampung Selatan</td>
                                <td>Kabupaten Toraja Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lampung Timur</td>
                                <td>Kota Palopo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lampung Utara</td>
                                <td>Kota Parepare</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Mesuji</td>
                                <td>Kabupaten Bombana</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pesawaran</td>
                                <td>Kabupaten Buton</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pesisir Barat</td>
                                <td>Kabupaten Buton Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pringsewu</td>
                                <td>Kabupaten Buton Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tanggamus</td>
                                <td>Kabupaten Buton Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tulang Bawang</td>
                                <td>Kabupaten Kolaka</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Way Kanan</td>
                                <td>Kabupaten Kolaka Timur</td>
                            </tr>
                            <tr>
                                <td>Kota Metro</td>
                                <td>Kabupaten Kolaka Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lebak</td>
                                <td>Kabupaten Konawe</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pandeglang</td>
                                <td>Kabupaten Konawe Kepulauan</td>
                            </tr>
                            <tr>
                                <td>Kota Serang</td>
                                <td>Kabupaten Konawe Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Ciamis</td>
                                <td>Kabupaten Konawe Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Cianjur</td>
                                <td>Kabupaten Muna</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Garut</td>
                                <td>Kabupaten Muna Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Indramayu</td>
                                <td>Kabupaten Wakatobi</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Majalengka</td>
                                <td>Kota Baubau</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pangandaran</td>
                                <td>Kota Kendari</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Subang</td>
                                <td>Kabupaten Banggai</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sumedang</td>
                                <td>Kabupaten Banggai Kepulauan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tasikmalaya</td>
                                <td>Kabupaten Banggai Laut</td>
                            </tr>
                            <tr>
                                <td>Kota Banjar</td>
                                <td>Kabupaten Buol</td>
                            </tr>
                            <tr>
                                <td>Kota Cimahi</td>
                                <td>Kabupaten Donggala</td>
                            </tr>
                            <tr>
                                <td>Kota Cirebon</td>
                                <td>Kabupaten Morowali</td>
                            </tr>
                            <tr>
                                <td>Kota Sukabumi</td>
                                <td>Kabupaten Morowali Utara</td>
                            </tr>
                            <tr>
                                <td>Kota Tasikmalaya</td>
                                <td>Kabupaten Parigi Moutong</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Banjarnegara</td>
                                <td>Kabupaten Poso</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Batang</td>
                                <td>Kabupaten Sigi</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Blora</td>
                                <td>Kabupaten Tojo Una-Una</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Boyolali</td>
                                <td>Kabupaten Tolitoli</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Brebes</td>
                                <td>Kota Palu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Cilacap</td>
                                <td>Kabupaten Buru</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Grobogan</td>
                                <td>Kabupaten Buru Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Jepara</td>
                                <td>Kabupaten Kepulauan Aru</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Karanganyar</td>
                                <td>Kabupaten Kepulauan Tanimbar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kebumen</td>
                                <td>Kabupaten Maluku Barat Daya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kendal</td>
                                <td>Kabupaten Maluku Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Klaten</td>

                                <td>Kabupaten Maluku Tenggara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kudus</td>

                                <td>Kabupaten Seram Bagian Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Magelang</td>
                                <td>Kabupaten Seram Bagian Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pati</td>

                                <td>Kota Ambon</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pekalongan</td>

                                <td>Kota Tual</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pemalang</td>

                                <td>Kabupaten Halmahera Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Purbalingga</td>
                                <td>Kabupaten Halmahera Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Purworejo</td>
                                <td>Kabupaten Halmahera Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Rembang</td>
                                <td>Kabupaten Halmahera Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sragen</td>
                                <td>Kabupaten Halmahera Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Temanggung</td>
                                <td>Kabupaten Kepulauan Sula</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Wonogiri</td>
                                <td>Kabupaten Pulau Morotai</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Wonosobo</td>
                                <td>Kabupaten Pulau Taliabu</td>
                            </tr>
                            <tr>
                                <td>Kota Pekalongan</td>
                                <td>Kota Ternate</td>
                            </tr>
                            <tr>
                                <td>Kota Tegal</td>
                                <td>Kota Tidore Kepulauan</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>Daftar 174 Kota / Kabupaten di Indonesia:</h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>Kabupaten Aceh Barat</td>
                                <td>Kabupaten Tulang Bawang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Barat Daya</td>
                                <td>Kabupaten Way Kanan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Besar</td>
                                <td>Kota Metro</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Jaya</td>
                                <td>Kabupaten Cianjur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Selatan</td>
                                <td>Kabupaten Pangandaran</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Singkil</td>
                                <td>Kabupaten Tasikmalaya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Tengah</td>
                                <td>Kota Banjar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Tenggara</td>
                                <td>Kabupaten Banjarnegara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Aceh Timur</td>
                                <td>Kabupaten Blora</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bener Meriah</td>
                                <td>Kabupaten Boyolali</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bireuen</td>
                                <td>Kabupaten Cilacap</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Gayo Lues</td>
                                <td>Kabupaten Grobogan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nagan Raya</td>
                                <td>Kabupaten Jepara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pidie</td>
                                <td>Kabupaten Karanganyar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pidie Jaya</td>
                                <td>Kabupaten Kebumen</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Simeulue</td>
                                <td>Kabupaten Kendal</td>
                            </tr>
                            <tr>
                                <td>Kota Sabang</td>
                                <td>Kabupaten Magelang</td>
                            </tr>
                            <tr>
                                <td>Kota Subulussalam</td>
                                <td>Kabupaten Pati</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Asahan</td>
                                <td>Kabupaten Pekalongan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Batu Bara</td>
                                <td>Kabupaten Purworejo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Labuhanbatu</td>
                                <td>Kabupaten Rembang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Labuhanbatu Selatan</td>
                                <td>Kabupaten Sragen</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Labuhanbatu Utara</td>
                                <td>Kabupaten Temanggung</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Langkat</td>
                                <td>Kabupaten Wonogiri</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Mandailing Natal</td>
                                <td>Kabupaten Wonosobo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nias</td>
                                <td>Kabupaten Bantul</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nias Barat</td>
                                <td>Kabupaten Gunungkidul</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nias Selatan</td>
                                <td>Kabupaten Kulon Progo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Nias Utara</td>
                                <td>Kabupaten Bangkalan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Padang Lawas</td>
                                <td>Kabupaten Banyuwangi</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Padang Lawas Utara</td>
                                <td>Kabupaten Blitar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Simalungun</td>
                                <td>Kabupaten Bojonegoro</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tapanuli Selatan</td>
                                <td>Kabupaten Bondowoso</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tapanuli Tengah</td>
                                <td>Kabupaten Jember</td>
                            </tr>
                            <tr>
                                <td>Kota Binjai</td>
                                <td>Kabupaten Jombang</td>
                            </tr>
                            <tr>
                                <td>Kota Gunungsitoli</td>
                                <td>Kabupaten Kediri</td>
                            </tr>
                            <tr>
                                <td>Kota Sibolga</td>
                                <td>Kabupaten Lumajang</td>
                            </tr>
                            <tr>
                                <td>Kota Tanjungbalai</td>
                                <td>Kabupaten Madiun</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Agam</td>
                                <td>Kabupaten Magetan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Dharmasraya</td>
                                <td>Kabupaten Nganjuk</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lima Puluh Kota</td>
                                <td>Kabupaten Ngawi</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pasaman</td>
                                <td>Kabupaten Pacitan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pasaman Barat</td>
                                <td>Kabupaten Pamekasan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sijunjung</td>
                                <td>Kabupaten Ponorogo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Solok</td>
                                <td>Kabupaten Sampang</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Solok Selatan</td>
                                <td>Kabupaten Situbondo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tanah Datar</td>
                                <td>Kabupaten Sumenep</td>
                            </tr>
                            <tr>
                                <td>Kota Padang Panjang</td>
                                <td>Kabupaten Trenggalek</td>
                            </tr>
                            <tr>
                                <td>Kota Sawahlunto</td>
                                <td>Kota Mojokerto</td>
                            </tr>
                            <tr>
                                <td>Kota Solok</td>
                                <td>Kota Probolinggo</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bengkalis</td>
                                <td>Kabupaten Bangli</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Indragiri Hulu</td>
                                <td>Kabupaten Buleleng</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kampar</td>
                                <td>Kabupaten Karangasem</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kepulauan Meranti</td>
                                <td>Kabupaten Bima</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pelalawan</td>
                                <td>Kabupaten Dompu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Rokan Hulu</td>
                                <td>Kabupaten Sumbawa</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Siak</td>
                                <td>Kabupaten Sumbawa Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Batanghari</td>
                                <td>Kota Bima</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bungo</td>
                                <td>Kabupaten Balangan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kerinci</td>
                                <td>Kabupaten Hulu Sungai Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Merangin</td>
                                <td>Kabupaten Hulu Sungai Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Sarolangun</td>
                                <td>Kabupaten Hulu Sungai Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tebo</td>
                                <td>Kabupaten Kotabaru</td>
                            </tr>
                            <tr>
                                <td>Kota Sungai Penuh</td>
                                <td>Kabupaten Tabalong</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bengkulu Selatan</td>
                                <td>Kabupaten Tanah Bumbu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bengkulu Tengah</td>
                                <td>Kabupaten Barito Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bengkulu Utara</td>
                                <td>Kabupaten Barito Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kaur</td>
                                <td>Kabupaten Barito Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Kepahiang</td>
                                <td>Kabupaten Kapuas</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lebong</td>
                                <td>Kabupaten Murung Raya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Mukomuko</td>
                                <td>Kota Palangka Raya</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Rejang Lebong</td>
                                <td>Kabupaten Kutai Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Seluma</td>
                                <td>Kabupaten Kutai Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Empat Lawang</td>
                                <td>Kabupaten Mahakam Ulu</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lahat</td>
                                <td>Kabupaten Luwu Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Musi Rawas Utara</td>
                                <td>Kabupaten Tana Toraja</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Ogan Komering Ulu Timur</td>
                                <td>Kabupaten Toraja Utara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Penukal Abab Lematang Ilir</td>
                                <td>Kota Baubau</td>
                            </tr>
                            <tr>
                                <td>Kota Lubuklinggau</td>
                                <td>Kabupaten Buru</td>
                            </tr>
                            <tr>
                                <td>Kota Pagar Alam</td>
                                <td>Kabupaten Buru Selatan</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bangka</td>
                                <td>Kabupaten Kepulauan Aru</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Bangka Selatan</td>
                                <td>Kabupaten Kepulauan Tanimbar</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lampung Barat</td>
                                <td>Kabupaten Maluku Tengah</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Lampung Timur</td>
                                <td>Kabupaten Maluku Tenggara</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Mesuji</td>
                                <td>Kabupaten Seram Bagian Barat</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Pesisir Barat</td>
                                <td>Kabupaten Seram Bagian Timur</td>
                            </tr>
                            <tr>
                                <td>Kabupaten Tanggamus</td>
                                <td>Kota Tual</td>
                            </tr>
                        </tbody>
                    </table>
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
