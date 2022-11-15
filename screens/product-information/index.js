import styles from './styles'
import globalStyles from './global-styles'

import Footer from 'components/footer'

export default function ProductInfoScreen({ isWebView }) {
    const download = () => {
        document.location =
            'data:text/attachment;,' + //here is the trick
            document.getElementById('content').innerHTML
    }

    const openBrowser = (url) => {
        if (typeof JavascriptChannel !== 'undefined') {
            JavascriptChannel.postMessage(`externalbrowser_${url}`)
        }
    }
    return (
        <>
            {/* <a onClick={() => download()} style={{ lineHeight: 1 }}>
                DOWNLOAD
            </a> */}
            <div id="content" className="wrapper">
                <section>
                    <h1>
                        Ringkasan Informasi Produk dan Layanan (RIPLAY) - Versi
                        Umum
                    </h1>

                    <h2>Fitur Produk</h2>

                    <table className="table-full">
                        <tbody>
                            <tr>
                                <th>Nama Penerbit</th>
                                <td>:</td>
                                <td>PT LIPPO LIFE ASSURANCE</td>
                            </tr>
                            <tr>
                                <th>Nama Produk</th>
                                <td>:</td>
                                <td>Solusi Asuransi Kesehatan</td>
                            </tr>
                            <tr>
                                <th>Deskripsi Produk</th>
                                <td>:</td>
                                <td>
                                    Produk asuransi kesehatan bagi perorangan
                                    yang memberikan perlindungan atas rawat inap
                                    dan dapat ditambahkan juga untuk memberikan
                                    perlindungan atas rawat jalan, gigi,
                                    kehamilan dan persalinan dalam periode
                                    pertanggungan asuransi.
                                </td>
                            </tr>
                            <tr>
                                <th>Jenis Produk</th>
                                <td>:</td>
                                <td>Asuransi Kesehatan</td>
                            </tr>
                            <tr>
                                <th>Mata Uang</th>
                                <td>:</td>
                                <td>Rupiah</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>Fitur Utama Asuransi Kesehatan</h2>

                    <table className="table-full">
                        <tbody>
                            <tr>
                                <th>Usia Masuk Tertanggung</th>
                                <td>:</td>
                                <td>0 - 60 Tahun</td>
                            </tr>
                            <tr>
                                <th>Masa Pembayaran Premi</th>
                                <td>:</td>
                                <td>Bulanan atau Tahunan</td>
                            </tr>
                            <tr>
                                <th>Masa Pertanggungan</th>
                                <td>:</td>
                                <td>
                                    Tahunan dan dapat diperpanjang otomatis
                                    sampai tertanggung mencapai usia 99 tahun
                                </td>
                            </tr>
                            <tr>
                                <th>Uang Pertanggungan</th>
                                <td>:</td>
                                <td>
                                    <p>
                                        Manfaat Utama: Rp2.000.000,- hingga Rp
                                        20.000.000.000,-
                                    </p>
                                    <br />
                                    <p>
                                        Manfaat Tambahan: Rp10.000.000,- hingga
                                        Rp100.000.000,-
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th>Plan</th>
                                <td>:</td>
                                <td>
                                    Plan A00 - E16 (Rawat Inap), Plan O01 - O12
                                    (Rawat Jalan), Plan G01 - G12 (Manfaat
                                    Gigi), Plan M01 - M12 (Manfaat Kehamilan dan
                                    Persalinan)
                                </td>
                            </tr>
                            <tr>
                                <th>Total Premi Tahunan</th>
                                <td>:</td>
                                <td>
                                    Berdasarkan plan produk asuransi yang
                                    dipilih
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section>
                    <h2>Biaya</h2>
                    <p>
                        Premi Asuransi yang Pemegang Polis bayarkan sudah
                        memperhitungkan komponen biaya pertanggungan, biaya
                        akuisisi dan pemasaran (jika ada).
                    </p>

                    <h2>Risiko</h2>
                    <h3>Risiko Operasional</h3>
                    <p>
                        Suatu risiko di mana kemungkinan adanya ketidaknyamanan
                        dan/atau kerugian yang disebabkan karena tidak
                        berjalannya atau gagalnya proses internal, manusia dan
                        sistem, serta oleh peristiwa eksternal.
                    </p>

                    <h3>Risiko Kredit dan Likuiditas</h3>
                    <p>
                        Suatu risiko kerugian yang berkaitan dengan kemampuan
                        Penanggung membayar kewajiban terhadap nasabahnya.
                    </p>
                    <h3>Risiko Lain - Lain</h3>
                    <ul className="dash" style={{ paddingLeft: '30px' }}>
                        <li>
                            Pembatalan sepihak /ditutup oleh Penanggung apabila
                            premi tidak dibayar sampai dengan masa leluasa
                            berakhir atau klaim ditolak apabila perawatan
                            diakibatkan oleh hal-hal yang dikecualikan dalam
                            polis.
                        </li>
                        <li>
                            Risiko klaim ditolak karena tidak mencantumkan
                            riwayat sakit saat mengajukan asuransi di awal.
                        </li>
                    </ul>
                </section>
                <section
                    className="table-nested"
                    style={{ 'page-break-before': 'always' }}
                >
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
                                    <td style={{ width: '33%' }}>Manfaat</td>
                                    <td style={{ width: '33%' }}>Plan A</td>
                                    <td style={{ width: '33%' }}>
                                        Plan B,C,D,E
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Maksimum limit tahunan</td>
                                    <td>500.000.000</td>
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
                                    <td>Area pertanggungan</td>
                                    <td>Indonesia</td>
                                    <td>
                                        Sesuai area yang dipilih antara
                                        Indonesia, Indonesia & Malaysia, Asia,
                                        atau seluruh dunia (kecuali Amerika).
                                    </td>
                                </tr>
                                <tr>
                                    <td>Biaya akomodasi harian</td>
                                    <td>Kamar dengan limit maksimum 750.000</td>
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
                                    <td colSpan="3">
                                        <h4>
                                            Perawatan rawat inap dan rawat
                                            harian
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Biaya rumah sakit</td>
                                    <td>Maksimum hingga 20.000.000</td>
                                    <td>Ditanggung</td>
                                </tr>
                                <tr>
                                    <td>Bedah implant</td>
                                    <td>Ditanggung</td>
                                    <td>Ditanggung</td>
                                </tr>
                                <tr>
                                    <td>Biaya bedah (per perawatan)</td>
                                    <td>Ditanggung</td>
                                    <td>Ditanggung</td>
                                </tr>
                                <tr>
                                    <td>Biaya praktisi medis</td>
                                    <td>
                                        <p>300.000 per hari</p>
                                        <p>
                                            Maksimum hingga 1 kali kunjungan per
                                            hari
                                        </p>
                                    </td>
                                    <td>
                                        <p>Ditanggung</p>
                                        <p>
                                            Maksimum hingga 1 kali kunjungan per
                                            hari
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Biaya dokter spesialis</td>
                                    <td>
                                        <p>300.000 per hari</p>
                                        <p>
                                            Maksimum hingga 1 kali kunjungan per
                                            hari
                                        </p>
                                    </td>
                                    <td>
                                        <p>Ditanggung</p>
                                        <p>
                                            Maksimum hingga 1 kali kunjungan per
                                            hari
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Biaya akomodasi pendamping</td>
                                    <td>
                                        <p>300.000 per hari</p>
                                    </td>
                                    <td>
                                        <p>1.000.000 per hari</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Biaya akomodasi bayi baru lahir</td>
                                    <td>Ditanggung</td>
                                    <td>Ditanggung</td>
                                </tr>
                                <tr>
                                    <td>Manfaat tunai</td>
                                    <td>300.000 per hari</td>
                                    <td>1.000.000 per hari</td>
                                </tr>
                                <tr>
                                    <td>
                                        Rawat inap untuk perawatan psikiatri
                                    </td>
                                    <td>
                                        Ditanggung maksimum hingga 100 hari
                                        dalam seumur hidup
                                    </td>
                                    <td>
                                        Ditanggung maksimum hingga 100 hari
                                        dalam seumur hidup
                                    </td>
                                </tr>
                                <tr>
                                    <td>Rehabilitasi rawat inap</td>
                                    <td>Maksimum hingga 28 hari</td>
                                    <td>Maksimum hingga 28 hari</td>
                                </tr>

                                <tr className="th-child">
                                    <td colSpan="3">
                                        <h4>
                                            Perawatan sebelum dan sesudah rawat
                                            inap (sebagai bagian dari rawat
                                            inap)
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pra perawatan rawat inap</td>
                                    <td>
                                        <p>Maksimum hingga 3.000.000 </p>
                                    </td>
                                    <td>
                                        <p>Ditanggung</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pasca rawat inap</td>
                                    <td>
                                        <p>Maksimum hingga 3.000.000</p>
                                    </td>
                                    <td>
                                        <p>Ditanggung</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Prostesis eksternal</td>
                                    <td>
                                        <p>3.000.000 setiap 3 tahun</p>
                                    </td>
                                    <td>
                                        <p>15.000.000 setiap 3 tahun</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Fisioterapi, terapi okupasi, dan terapi
                                        wicara terkait dengan perawatan rawat
                                        inap
                                    </td>
                                    <td>
                                        <p>Hingga limit pasca rawat inap</p>
                                        <p>
                                            Hingga 5 sesi untuk setiap otorisasi
                                        </p>
                                        <p>Maksimum hingga 300.000 per sesi</p>
                                        <p>
                                            Hingga 60 hari setelah perawatan
                                            pasien rawat inap
                                        </p>
                                    </td>
                                    <td>
                                        <p>Hingga limit pasca rawat inap</p>
                                        <p>
                                            Hingga 5 sesi untuk setiap otorisasi
                                        </p>
                                        <p>
                                            Maksimum hingga 1.500.000 per sesi
                                        </p>
                                        <p>
                                            Hingga 60 hari setelah perawatan
                                            pasien rawat inap
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Pengobatan tradisional Cina (sebagai
                                        bagian sesudah rawat inap)
                                    </td>

                                    <td>
                                        <p>Hingga limit pasca rawat inap</p>
                                        <p>Hingga 30 sesi per tahun</p>
                                        <p>Maksimum hingga 300.000 per sesi</p>
                                    </td>
                                    <td>
                                        <p>Hingga limit pasca rawat inap</p>
                                        <p>Hingga 30 sesi per tahun</p>
                                        <p>
                                            Maksimum hingga 2.500.000 per sesi
                                        </p>
                                    </td>
                                </tr>
                                <tr className="th-child">
                                    <td colSpan="3">
                                        <h4>Perawatan rawat jalan</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Perawatan gawat darurat karena
                                        kecelakaan
                                    </td>
                                    <td>
                                        <p>Maksimum hingga 3.000.000</p>
                                    </td>
                                    <td>
                                        <p>
                                            Tidak ada maksimum tahunan, termasuk
                                            dalam keseluruhan tunjangan manfaat
                                            polis
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Kerusakan pada gigi karena kecelakaan
                                    </td>
                                    <td>
                                        <p>Maksimum hingga 3.000.000</p>
                                    </td>
                                    <td>
                                        <p>
                                            Tidak ada maksimum tahunan, termasuk
                                            dalam keseluruhan tunjangan manfaat
                                            polis
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dialisis ginjal</td>
                                    <td>
                                        <p>
                                            Maksimum hingga 20.000.000 per tahun
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            Tidak ada maksimum tahunan, termasuk
                                            dalam keseluruhan tunjangan manfaat
                                            polis
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Radioterapi dan kemoterapi</td>
                                    <td>
                                        <p>
                                            Maksimum hingga 20.000.000 per tahun
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            Tidak ada maksimum tahunan, termasuk
                                            dalam keseluruhan tunjangan manfaat
                                            polis
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Jalan lokal transportasi ambulans</td>
                                    <td>300.000 per tahun</td>
                                    <td>
                                        Tidak ada maksimum tahunan, termasuk
                                        dalam keseluruhan tunjangan manfaat
                                        polis
                                    </td>
                                </tr>
                                <tr>
                                    <td>Perawatan di rumah</td>
                                    <td>
                                        <p>300.000 per hari</p>
                                    </td>
                                    <td>
                                        <p>
                                            Tidak ada maksimum tahunan, termasuk
                                            dalam keseluruhan tunjangan manfaat
                                            polis
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Perawatan HIV/AIDS</td>
                                    <td>
                                        <p>
                                            Maksimum hingga 20.000.000 dalam
                                            seumur hidup
                                        </p>
                                        <p>
                                            Tersedia setelah keanggotaan 36
                                            bulan berturut-turut
                                        </p>
                                    </td>
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
                                    <td>Perawatan hospice dan paliatif</td>
                                    <td>
                                        <p>
                                            Maksimum hingga 20.000.000 dalam
                                            seumur hidup
                                        </p>
                                        <p>
                                            Tersedia setelah keanggotaan 365
                                            hari berturut-turut
                                        </p>
                                    </td>
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
                                    <td>Perawatan psikiatri rawat jalan</td>
                                    <td>
                                        <p>
                                            Maksimum hingga 3.000.000 per tahun
                                            polis
                                        </p>
                                    </td>
                                    <td>
                                        <p>
                                            Maksimum hingga 5.000.000 per tahun
                                            polis
                                        </p>
                                    </td>
                                </tr>
                                <tr className="th-child">
                                    <td colSpan="3">
                                        <h4>Evakuasi darurat dan repatriasi</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Bantuan medis darurat internasional
                                        (IEMA)
                                    </td>
                                    <td>
                                        <p>Ditanggung</p>
                                    </td>
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
                    <table className="table-fit-mobile">
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
                    <table className="table-fit-mobile">
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
                    <table className="table-fit-mobile">
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
                <section style={{ 'page-break-before': 'always' }}>
                    <h2>Pengecualian Solusi Asuransi Kesehatan</h2>
                    <h3>
                        Pertanggungan Solusi Asuransi Kesehatan tidak berlaku
                        karena hal-hal berikut ini:
                    </h3>
                    <ol style={{ marginLeft: '20px' }} type="1">
                        <li>
                            Perawatan atas suatu kondisi yang sudah ada
                            sebelumnya (pre-existing condition) termasuk
                            kondisi-kondisi medis;
                        </li>
                        <li>
                            Suatu perawatan yang hanya menghilangkan gejalanya
                            untuk sementara dan bukannya mengobati kondisi medis
                            yang menjadi akarnya, yang seharusnya wajar
                            dilakukan;
                        </li>
                        <li>
                            Kehamilan atau kelahiran anak (persalinan) normal,
                            kontrol pra dan pasca melahirkan, operasi sesar dan
                            komplikasinya kecuali apabila hal ini jelas-jelas
                            termasuk dalam tabel manfaat pemegang polis;
                        </li>
                        <li>
                            Perawatan yang dimulai, atau yang atasnya telah
                            timbul kebutuhan, selama 90 (sembilan puluh) hari
                            pertama setelah melahirkan untuk setiap anak yang
                            dikandung dengan cara buatan atau segala bentuk
                            konsepsi yang dibantu termasuk inseminasi buatan dan
                            ibu pengganti, operasi janin;{' '}
                        </li>
                        <li>
                            Pengguguran kehamilan atau suatu konsekuensi dari
                            pengguguran itu, kecuali apabila memenuhi syarat
                            berdasarkan manfaat komplikasi pra dan pasca
                            kelahiran;
                        </li>
                        <li>
                            Pemeriksaan dan perawatan terhadap kemandulan,
                            kontrasepsi, reproduksi yang dibantu, sterilisasi
                            (atau sebaliknya) atau suatu konsekuensi dari salah
                            satu dari tertanggung atau dari suatu perawatan
                            terhadap tertanggung;
                        </li>
                        <li>Perawatan impotensi, penurunan fungsi seksual;</li>
                        <li>
                            Perawatan penyakit-penyakit yang menular secara
                            seksual;
                        </li>
                        <li>
                            Ganti kelamin termasuk perawatan yang timbul akibat
                            secara langsung atau tidak langsung diperlukan
                            akibat ganti kelamin; atau konfirmasi ulang gender,
                            termasuk psikoterapi atau layanan serupa yang
                            terkait dengannya;
                        </li>
                        <li>
                            Perawatan terhadap suatu kondisi medis yang timbul
                            akibat dari infeksi Human Immunodeficiency Virus
                            (HIV), Acquired Immune Deficiency Syndrome (AIDS),
                            AIDS related complexes (ARC) kecuali ditentukan
                            dalam plan pemegang polis;
                        </li>
                        <li>
                            Perawatan untuk obesitas atau semua kondisi medis
                            yang timbul atau terkait dengan obesitas, dengan
                            cara apapun tetapi tidak terbatas pada tindakan
                            gastric banding atau stapling, pembuangan lemak atau
                            jaringan yang lebih dari suatu bagian tubuh baik itu
                            dibutuhkan atau tidak karena alasan medis atau
                            alasan psikologis;
                        </li>
                        <li>
                            Biaya pengumpulan organ-organ donor untuk bedah
                            pencangkokan atau biaya pengobatan sekalipun apabila
                            pencangkokan itu diperbolehkan menurut
                            ketentuan-ketentuan dalam plan ini;
                        </li>
                        <li>
                            Perawatan yang timbul akibat atau yang secara
                            langsung atau tidak langsung disebabkan oleh luka
                            akibat perbuatan sendiri atau dalam usaha bunuh
                            diri;
                        </li>
                        <li>
                            Perawatan yang timbul akibat atau dalam suatu hal
                            terkait dengan penyalahgunaan alkohol atau
                            penyalahgunaan zat atau obat-obatan;
                        </li>
                        <li>
                            Setiap Perawatan/pengobatan untuk memperbaiki
                            kelainan refraksi mata, seperti rabun jauh atau
                            rabun dekat atau astigmatisme; semua jenis gangguan
                            tidur, studi tidur atau mendengkur; kehilangan
                            rambut atau penggantian rambut; jerawat;
                        </li>
                        <li>
                            Semua Perawatan untuk gangguan tumbuh kembang anak,
                            gangguan perkembangan neurologis, gangguan
                            perkembangan kognitif, gangguan perkembangan,
                            gangguan belajar, keterlambatan bicara, masalah
                            pendidikan, masalah perilaku, perkembangan fisik
                            atau perkembangan psikologis termasuk penilaian atau
                            penilaian masalah tersebut. Ini termasuk, namun
                            tidak terbatas pada masalah seperti disleksia,
                            dyspraxia, gangguan spektrum autistik, attention
                            deficit hyperactivity (ADHD) dan masalah bicara atau
                            bahasa;
                        </li>
                        <li>
                            Pengobatan preventif (profilaksis); pengobatan untuk
                            meredakan gejala yang umumnya terkait dengan
                            perubahan tubuh yang timbul dari penyebab fisiologis
                            atau alami seperti penuaan, menopause atau pubertas
                            dan yang bukan karena kondisi medis yang
                            mendasarinya; kelas parenting atau semua jenis
                            kursus/program untuk sebelum atau sesudah
                            melahirkan;
                        </li>
                        <li>
                            Vaksinasi dan pemeriksaan kesehatan rutin (medical
                            check-up) atau yang bersifat mencegah, termasuk
                            konsultasi tindak lanjut rutin, kecuali apabila
                            diperbolehkan menurut tabel manfaat dan diterima
                            secara tertulis oleh penanggung;
                        </li>
                        <li>
                            Bedah robotik kecuali untuk prostatektomi,
                            nefrektomi parsial, dan pyeloplasty menggunakan
                            robot da Vinci;
                        </li>
                        <li>
                            Obat-obat atau alat kesehatan rawat jalan, prostesis
                            eksternal, orthosis, peralatan medis tahan lama,
                            bantuan dan peralatan medis kecuali diizinkan oleh
                            persyaratan rencana atau segala komplikasinya;
                        </li>
                        <li>
                            Barang-barang keperluan pribadi umumnya, seperti
                            namun tidak terbatas pada shampo, sabun, pasta gigi,
                            alat kontrasepsi, obat kumur, pembersih, pelembab,
                            obat tetes mata buatan, obat sakit kepala dan flu,
                            dan vitamin, mineral, zat organik, suplemen yang
                            dibeli sendiri tanpa resep dokter/praktisi medis di
                            toko obat setempat dan penanggung juga tidak
                            menanggung biaya telepon, biaya tambahan dan biaya
                            administrasi lainnya;
                        </li>
                        <li>
                            Perawatan ortodontik, periodontitis, endodontik,
                            perawatan yang bersifat mencegah untuk masalah gigi,
                            dan perawatan gigi pada umumnya, termasuk penambalan
                            gigi, terlepas dari siapa yang melakukan perawatan
                            tersebut kecuali apabila ditentukan dalam plan
                            pemegang polis dan disetujui secara tertulis oleh
                            penanggung;
                        </li>
                        <li>
                            Klaim-klaim untuk perawatan yang diterima di luar
                            wilayah pertanggungan atau jika tertanggung
                            bepergian sementara anjuran medis melarangnya
                            sekalipun di dalam wilayah pertanggungan;
                        </li>
                        <li>
                            Perawatan atas luka-luka yang diderita akibat
                            bermain olahraga profesional atau akibat loncat dari
                            ketinggian, memanjat tebing, terbang dalam suatu
                            pesawat yang tidak berlisensi atau sebagai siswa
                            belajar, bela diri, panjat bebas, mendaki gunung
                            dengan atau tanpa tali, bermain scuba diving sampai
                            pada kedalaman lebih dari 10 meter, menelusuri medan
                            berat sampai pada ketinggian di atas 2.500 (dua ribu
                            lima ratus) meter, bermain bungee jumping,
                            canyoning, bermain seluncur gantung, bermain
                            seluncur parasut atau bermain microlighting, terjun
                            payung, bermain potholing, bermain ski jauh di
                            daerah salju atau kegiatan olahraga musim dingin
                            lainnya di daerah salju;
                        </li>
                        <li>
                            Perawatan-perawatan yang jelas-jelas dikecualikan
                            menurut ketentuan-ketentuan yang tertera dalam data
                            polis pemegang polis atau
                            dukungan/ketentuan-ketentuan yang merupakan bagian
                            dari polis;
                        </li>
                        <li>
                            Biaya-biaya yang dikeluarkan untuk tujuan sosial
                            atau untuk keperluan rumah tangga atau untuk
                            keperluan-keperluan yang tidak ada kaitan
                            langsungnya dengan perawatan;
                        </li>
                        <li>
                            Biaya-biaya yang dibebankan oleh tempat-tempat hidro
                            kesehatan, spa, klinik (atau praktisi kesehatan)
                            perawatan alamiah atau tempat-tempat sejenisnya,
                            sekalipun tempat itu terdaftar sebagai rumah sakit;
                        </li>
                        <li>
                            Klaim atau bagian dari suatu klaim yang atasnya
                            pemegang polis harus membayar kelebihan (atau beban
                            sendiri atau co-payment). Dalam hal ini penanggung
                            hanya membayar sisa dari klaim tersebut setelah
                            penanggung mengurangi jumlah kelebihan (atau biaya
                            sendiri atau co-payment) tersebut;
                        </li>
                        <li>
                            Biaya-biaya yang dibebankan oleh praktisi medis,
                            rumah sakit, laboratorium atau layanan-layanan medis
                            yang tidak wajar dan umum (reasonable and customary,
                            R&C);
                        </li>
                        <li>
                            Biaya-biaya perawatan yang terkait dengan dan/atau
                            perbaikan atas kondisi dan/atau kelainan bawaan
                            apakah yang nyata atau tidak nyata dan/atau yang
                            didiagnosa atau yang diketahui sejak lahir;
                        </li>

                        <li>
                            Biaya-biaya untuk hal-hal yang tidak disebutkan
                            dalam tabel manfaat yang berlaku terhadap plan
                            pemegang polis;
                        </li>

                        <li>
                            Pemeriksaan genetik, termasuk konseling yang
                            diperlukan setelah pemeriksaan genetis, bahkan jika
                            pemeriksaan itu dilakukan untuk memastikan apakah
                            tertanggung secara genetika rentan terhadap
                            perkembangan suatu kondisi medis atau tidak di
                            kemudian hari;
                        </li>

                        <li>
                            Perawatan yang diberikan kepada tertanggung oleh
                            siapapun yang memiliki kepentingan asuransi atas
                            diri tertanggung atau pemegang polis;
                        </li>
                        <li>
                            Pemeliharaan kehidupan buatan selama lebih dari enam
                            puluh (60) hari terus menerus, jika tertanggung
                            dalam keadaan vegetatif yang persisten dan hanya
                            dipertahankan hidup dengan alat ventilasi medis
                            seperti ventilator mekanik; Perawatan sementara
                            tinggal di rumah sakit selama lebih dari enam puluh
                            (60) hari terus menerus untuk kerusakan neurologis
                            permanen atau jika tertanggung berada dalam keadaan
                            vegetatif persisten, yang didefinisikan sebagai
                            kondisi tidak responsif yang mendalam, tanpa tanda
                            kesadaran atau fungsi pikiran, bahkan jika orang
                            tersebut dapat membuka mata dan bernafas tanpa
                            bantuan, dan orang tersebut tidak ada respons untuk
                            menanggapi rangsangan seperti memanggil namanya atau
                            menyentuh. Keadaan ini harus bertahan setidaknya
                            selama empat (4) minggu tanpa ada tanda-tanda
                            perbaikan atau tidak mungkin ada pemulihan;
                        </li>
                        <li>
                            Kriopreservasi, atau pemanenan atau penyimpanan sel
                            punca (stem cells) sebagai tindakan pencegahan
                            terhadap kemungkinan penyakit/cedera di masa depan
                            atau implantasi atau re-implantasi sel hidup atau
                            jaringan hidup baik autologus atau disediakan oleh
                            donor kecuali ditentukan dalam tabel manfaat dan
                            telah disetujui oleh kami secara tertulis;
                        </li>
                    </ol>
                    <p>
                        <strong>
                            Ketentuan pengecualian lainnya diatur secara lebih
                            lengkap pada ketentuan umum polis Solusi Asuransi
                            Kesehatan.
                        </strong>
                    </p>
                </section>
                <section
                    style={{ 'page-break-before': 'always' }}
                    id="conditions"
                >
                    <h2>Persyaratan dan Tata Cara</h2>
                    <ol>
                        <li>
                            <strong>Syarat Kepesertaan</strong>
                            <ol>
                                <li>
                                    Usia masuk pemegang polis : 18 - 99 tahun
                                </li>
                                <li>Usia masuk tertanggung : 0 - 60 tahun</li>
                                <li>
                                    Spesifik untuk manfaat persalinan, usia
                                    masuk tertanggung 18-45 tahun
                                </li>
                            </ol>
                        </li>

                        <li>
                            <strong>
                                Tata Cara Pengajuan Pendaftaran Produk Asuransi:
                            </strong>
                            <ol>
                                <li>
                                    Pemegang polis mengajukan permohonan
                                    pertanggungan asuransi kesehatan atas
                                    tertanggung kepada penanggung dengan
                                    memberikan berbagai informasi secara benar
                                    dan menyiapkan surat permintaan asuransi
                                    kesehatan. Langkah - langkah dapat
                                    dipelajari dari{' '}
                                    {!isWebView && (
                                        <a
                                            target="_blank"
                                            href="https://www.lippolife.co.id/solusianda"
                                        >
                                            www.lippolife.co.id/solusianda
                                        </a>
                                    )}
                                    {isWebView && (
                                        <a
                                            onClick={() => {
                                                openBrowser(
                                                    'https://www.lippolife.co.id/solusianda'
                                                )
                                            }}
                                        >
                                            www.lippolife.co.id/solusianda
                                        </a>
                                    )}
                                    .
                                </li>
                                <li>
                                    Penanggung melakukan seleksi risiko dalam
                                    memutuskan untuk (atau untuk tidak)
                                    mempertanggungkan tertanggung dan/atau
                                    menentukan ketentuan pertanggungan asuransi
                                    dalam polis, dengan merujuk kepada semua
                                    keterangan, data atau pernyataan yang
                                    diberikan pemegang polis kepada penanggung.
                                </li>
                            </ol>
                        </li>

                        <li>
                            <strong>Tata Cara Pembayaran Premi</strong>
                            <ol>
                                <li>
                                    Premi dapat dibayar secara tahunan atau
                                    diangsur secara bulanan. Pembayaran premi
                                    akan dianggap sah apabila dana sudah
                                    diterima penuh di rekening bank penanggung.
                                </li>
                                <li>
                                    Premi wajib dibayar pada tanggal jatuh tempo
                                    pembayaran premi Solusi Asuransi Kesehatan,
                                    penanggung memberikan masa leluasa selama
                                    (30) tiga puluh hari sejak tanggal jatuh
                                    tempo pembayaran premi. Apabila premi tidak
                                    dibayar setelah masa leluasa, berakhir ,
                                    maka Polis akan berakhir (lapse).
                                </li>
                            </ol>
                        </li>
                        <li>
                            <strong>Tata Cara Klaim</strong>
                            <p>
                                Yang berhak mengajukan permintaan pembayaran
                                manfaat asuransi adalah pemegang polis,
                                tertanggung, atau pihak lain yang diatur dalam
                                polis. Apabila tertanggung berumur di bawah (18)
                                delapan belas tahun, maka orang tua/wali dari
                                tertanggung juga dapat mengajukan permintaan
                                pembayaran manfaat asuransi atas nama
                                tertanggung.
                            </p>
                            <h4>
                                <u>Kebijakan pembayaran langsung</u>
                            </h4>
                            <p>
                                Pemegang polis dapat menikmati manfaat dari
                                kemudahan-kemudahan pembayaran langsung di
                                berbagai rumah sakit untuk perawatan rawat inap
                                atau rawat harian, rawat jalan, perawatan gigi
                                dan persalinan yang memenuhi syarat di dalam
                                direktori rumah sakit penanggung. Kebijakan
                                pembayaran secara langsung diatur lebih lengkap
                                pada ketentuan polis Solusi Asuransi Kesehatan.
                                Direktori rumah sakit dengan fasilitas ini dapat
                                dilihat pada{' '}
                                {!isWebView && (
                                    <a
                                        target="_blank"
                                        href="https://www.lippolife.co.id/solusianda"
                                    >
                                        www.lippolife.co.id/solusianda
                                    </a>
                                )}
                                {isWebView && (
                                    <a
                                        onClick={() => {
                                            openBrowser(
                                                'https://www.lippolife.co.id/solusianda'
                                            )
                                        }}
                                    >
                                        www.lippolife.co.id/solusianda
                                    </a>
                                )}
                                .
                            </p>
                            <h4>
                                <u>Kebijakan pengajuan penggantian biaya</u>
                            </h4>
                            <ol>
                                <li>
                                    Apabila pemegang polis melakukan pengajuan
                                    penggantian biaya, pengajuan klaim dilakukan
                                    secara online, email atau aplikasi dan harus
                                    disertai dengan dokumen-dokumen asli yang
                                    diminta penanggung. Penanggung hanya
                                    mempertimbangkan klaim-klaim yang diajukan
                                    dalam waktu (90) sembilan puluh hari sejak
                                    diterimanya perawatan.
                                </li>
                                <li>
                                    Dokumen yang diperlukan untuk pengajuan
                                    klaim rawat inap atau rawat harian dan
                                    manfaat tunai terkait rawat inap
                                    <ul
                                        className="dash"
                                        style={{ paddingLeft: '30px' }}
                                    >
                                        <li>
                                            resume medis perawatan rumah sakit
                                            yang ditandatangani oleh praktisi
                                            medis yang merawat tertanggung,
                                        </li>
                                        <li>
                                            kuitansi/bukti pembayaran asli
                                            dengan perincian biaya tindakan,
                                            biaya pemeriksaan penunjang dan
                                            biaya obat-obatan yang diberikan
                                            selama perawatan di rumah sakit dan
                                        </li>
                                        <li>dokumen penunjang lainnya.</li>
                                    </ul>
                                </li>

                                <li>
                                    Dokumen yang diperlukan untuk pengajuan
                                    klaim rawat jalan dan perawatan gigi
                                    <ul
                                        className="dash"
                                        style={{ paddingLeft: '30px' }}
                                    >
                                        <li>
                                            kuitansi/bukti pembayaran asli
                                            dengan perincian biaya dari setiap
                                            jenis layanan yang diberikan,
                                        </li>
                                        <li>
                                            hasil diagnosa praktisi medis, dan
                                            salinan resep dokter apabila sudah
                                            membeli obat.
                                        </li>
                                        <li>
                                            hasil laboratorium dan pemeriksaan
                                            penunjang (jika ada).
                                        </li>
                                    </ul>
                                    Hal ini harus diajukan untuk setiap
                                    kunjungan yang dilakukan apakah itu ke
                                    praktisi medis, rumah sakit, klinik,
                                    farmasi, klinik diagnosa ataukah tempat lain
                                    yang memberi layanan kesehatan.
                                </li>

                                <li>
                                    Kelengkapan dokumen untuk pengajuan
                                    pembayaran manfaat lainnya dan ketentuan
                                    kebijakan penggantian biaya diatur lebih
                                    lengkap pada ketentuan polis Solusi Asuransi
                                    Kesehatan.
                                </li>
                            </ol>
                            <h4>
                                <u>Tata cara pembayaran klaim</u>
                            </h4>
                            <p>
                                Penanggung akan menginformasikan hasil dari
                                proses klaim secepatnya setelah dokumen-dokumen
                                yang dibutuhkan sebagaimana yang diatur dalam
                                polis diterima oleh penanggung. Pembayaran
                                manfaat asuransi akan dibayarkan setelah
                                penanggung memberikan keputusan bahwa manfaat
                                dapat dibayarkan dengan memperhatikan ketentuan
                                polis.
                            </p>
                            <p>
                                Untuk klaim-klaim penggantian biaya, penanggung
                                akan membayarkan klaim-klaim yang diajukan dalam
                                waktu (14) empat belas hari kerja sejak dokumen
                                persyaratan klaim diterima lengkap oleh
                                penanggung.
                            </p>
                            <p>
                                Prosedur pengajuan dan pembayaran klaim secara
                                lengkap mengacu pada ketentuan polis.
                            </p>
                        </li>
                        <li>
                            <strong>Tata Cara Perubahan</strong>
                            <p>
                                Penanggung wajib untuk menginformasikan segala
                                perubahan atas manfaat, biaya, risiko, syarat
                                dan ketentuan Produk dan Layanan melalui surat
                                atau melalui cara-cara lainnya sesuai dengan
                                syarat dan ketentuan yang berlaku. Pemberitahuan
                                tersebut akan diinformasikan (30) tiga puluh
                                hari sebelum efektif berlakunya perubahan.
                            </p>
                        </li>
                    </ol>
                </section>
                <section style={{ 'page-break-before': 'always' }}>
                    <h2>Simulasi</h2>

                    <h3>Data Calon Pemegang Polis</h3>
                    <table className="table-full">
                        <tbody>
                            <tr>
                                <th>Nama Pemegang Polis</th>
                                <td>:</td>
                                <td>Tuan A</td>
                            </tr>
                            <tr>
                                <th>Jenis Kelamin</th>
                                <td>:</td>
                                <td>Laki Laki</td>
                            </tr>
                            <tr>
                                <th>Tanggal Lahir</th>
                                <td>:</td>
                                <td>01/01/1981</td>
                            </tr>
                            <tr>
                                <th>Usia</th>
                                <td>:</td>
                                <td>41 tahun</td>
                            </tr>
                            <tr>
                                <th>Mata Uang Polis</th>
                                <td>:</td>
                                <td>Rupiah</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Data Calon Tertanggung</h3>
                    <table className="table-full">
                        <tbody>
                            <tr>
                                <th>Nama Tertanggung</th>
                                <td>:</td>
                                <td>Tuan A</td>
                            </tr>
                            <tr>
                                <th>Jenis Kelamin</th>
                                <td>:</td>
                                <td>Laki Laki</td>
                            </tr>
                            <tr>
                                <th>Tanggal Lahir</th>
                                <td>:</td>
                                <td>01/01/1981</td>
                            </tr>
                            <tr>
                                <th>Usia Masuk</th>
                                <td>:</td>
                                <td>41 tahun</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Pilihan Asuransi</h3>
                    <div className="table-flex">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Plan Rawat Inap</th>
                                    <td>B09</td>
                                </tr>
                                <tr>
                                    <th>Uang Pertanggungan:</th>
                                    <td>Rp2.000.000.000</td>
                                </tr>
                                <tr>
                                    <th>Kamar:</th>
                                    <td>
                                        Standar kamar 1 bed atau Rp 5.000.000
                                    </td>
                                </tr>
                                <tr>
                                    <th>Area Pertanggungan:</th>
                                    <td>Indonesia</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Plan Rawat Jalan</th>
                                    <td>O06</td>
                                </tr>
                                <tr>
                                    <th>Uang Pertanggungan:</th>
                                    <td>Rp20.000.000</td>
                                </tr>
                                <tr>
                                    <th>Co-payment:</th>
                                    <td>20%</td>
                                </tr>
                                <tr>
                                    <th>Area Pertanggungan:</th>
                                    <td>Indonesia</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Rincian Premi</h3>

                    <table>
                        <tbody>
                            <tr>
                                <th>Metode pembayaran premi</th>
                                <td>:</td>
                                <td>Bulanan</td>
                            </tr>
                            <tr>
                                <th>Masa Pembayaran Premi</th>
                                <td>:</td>
                                <td>12 bulan</td>
                            </tr>
                            <tr>
                                <th>Total Premi Bulanan*</th>
                                <td>:</td>
                                <td>Rp. 2.052.000,-</td>
                            </tr>
                            <tr>
                                <th>Total Premi Tahunan*</th>
                                <td>:</td>
                                <td>Rp. 24.624.000,-</td>
                            </tr>
                        </tbody>
                    </table>

                    <p style={{ paddingTop: '5px' }}>
                        <i>
                            *Jumlah Total Premi Tahunan di atas hanya
                            berdasarkan pada informasi yang ada dalam ilustrasi
                            ini saja. Dalam hal terdapat informasi lain yang
                            ditemukan ketika dilakukan proses underwriting, maka
                            underwriter berhak mengubah ketentuan Total Premi
                            Tahunan tersebut sesuai kondisi yang sebenarnya.
                        </i>
                    </p>

                    <h3>
                        Tabel Ilustrasi (dalam Rupiah)** - untuk Seluruh
                        Tertanggung
                    </h3>
                    <div className="table-overflow">
                        <table className="table-justify">
                            <thead>
                                <tr>
                                    <th>Total premi tahun ke-1</th>
                                    <th>
                                        Proyeksi total premi tahun ke-2 - Rendah
                                        (0%)
                                    </th>
                                    <th>
                                        Proyeksi total premi tahun ke-2 - Sedang
                                        (10%)
                                    </th>
                                    <th>
                                        Proyeksi total premi tahun ke-2 - Tinggi
                                        (15%)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>24.624.000</td>
                                    <td>25.668.000</td>
                                    <td>28.235.000</td>
                                    <td>29.519.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p style={{ paddingTop: '5px' }}>
                        <i>
                            **Premi akan berubah sesuai dengan perubahan usia.
                            Sebagai catatan, premi juga dapat berubah seiring
                            waktu untuk menutupi biaya manfaat kesehatan yang
                            disebabkan dengan meningkatnya biaya medis. Terdapat
                            tiga asumsi di mana biaya medis mengalami kenaikan
                            sebesar 0%, 10%, dan 15%. Proyeksi diatas tidak
                            mewakili batas potensi perubahan premi dan kenaikan
                            lebih tinggi dari 15%.
                        </i>
                    </p>

                    <h3>Ilustrasi manfaat (dalam rupiah)</h3>
                    <p style={{ paddingBottom: '10px' }}>
                        Tertanggung Tuan A membeli plan rawat inap B09 dan plan
                        rawat jalan O06 dengan detail manfaat sesuai tabel
                        manfaat polis. Tertanggung Tuan A menjalani rawat inap
                        selama (7) tujuh hari dengan perincian biaya sebagai
                        berikut.
                    </p>

                    <div className="table-overflow">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Detail</th>
                                    <th>Hari </th>
                                    <th>Biaya </th>
                                    <th>Total biaya perawatan</th>
                                    <th>Biaya yang ditanggung</th>
                                </tr>
                                <tr>
                                    <td>Biaya kamar</td>
                                    <td>7</td>
                                    <td>2.000.000</td>
                                    <td>14.000.000</td>
                                    <td>14.000.000</td>
                                </tr>
                                <tr>
                                    <td>Biaya konsultasi dokter</td>
                                    <td>7</td>
                                    <td>1.000.000</td>
                                    <td>7.000.000</td>
                                    <td>7.000.000</td>
                                </tr>
                                <tr>
                                    <td>Biaya bedah</td>
                                    <td></td>
                                    <td>70.000.000</td>
                                    <td>70.000.000</td>
                                    <td>70.000.000</td>
                                </tr>
                                <tr>
                                    <td>Biaya rumah sakit lain lain</td>
                                    <td>7</td>
                                    <td>5.000.000</td>
                                    <td>35.000.000</td>
                                    <td>35.000.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p style={{ paddingTop: '10px' }}>
                        Total biaya perawatan Tuan A selama rawat inap dapat
                        ditanggung seluruhnya oleh Solusi Asuransi Kesehatan
                        karena sesuai dengan limit plan yang berlaku.
                    </p>
                </section>
                <section style={{ 'page-break-before': 'always' }}>
                    <h2>Informasi Tambahan</h2>
                    <ol className="list-upper-alpha">
                        <li>
                            <strong>Definisi Penting</strong>
                            {/* <table className="table-definition">
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>Penanggung</td>
                                        <td>:</td>
                                        <td>PT. Lippo Life Assurance</td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>Pemegang polis</td>
                                        <td>:</td>
                                        <td>
                                            Seseorang atau badan hukum yang
                                            mengadakan perjanjian asuransi
                                            dengan penanggung dan yang namanya
                                            tertulis dalam data polis.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>Tertanggung</td>
                                        <td>:</td>
                                        <td>
                                            Orang yang terhadap dirinya diadakan
                                            suatu pertanggungan asuransi, yang
                                            mana terdapat kepentingan asuransi
                                            atau hubungan kepentingan asuransi
                                            dengan pemegang polis dan disebutkan
                                            dalam data polis.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4.</td>
                                        <td>Premi</td>
                                        <td>:</td>
                                        <td>
                                            Uang yang harus dibayarkan oleh
                                            pemegang polis kepada penanggung
                                            sehubungan dengan pertanggungan
                                            asuransi dalam polis.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5.</td>
                                        <td>Tanggal berlakunya polis</td>
                                        <td>:</td>
                                        <td>
                                            Tanggal dimulainya pertanggungan
                                            asuransi sebagaimana tercantum dalam
                                            data polis.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6.</td>
                                        <td>Masa asuransi</td>
                                        <td>:</td>
                                        <td>
                                            Masa berlakunya perlindungan
                                            asuransi, yaitu sejak tanggal
                                            berlaku polis sampai dengan tanggal
                                            berakhir polis, dengan memperhatikan
                                            ketentuan polis.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7.</td>
                                        <td>Uang pertanggungan</td>
                                        <td>:</td>
                                        <td>
                                            Sejumlah nilai uang yang tercantum
                                            pada data polis yang merupakan nilai
                                            pertanggungan berdasarkan polis ini
                                            dan ketentuan tambahan (jika ada).
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8.</td>
                                        <td>Masa bebas lihat</td>
                                        <td>:</td>
                                        <td>
                                            Periode tertentu yang mulai dihitung
                                            sejak tanggal berlakunya polis, dan
                                            merupakan periode dimana pemegang
                                            polis mempelajari dan memastikan
                                            bahwa isi dari polis yang
                                            diterbitkan tersebut telah sesuai
                                            dengan keinginan dan kebutuhan
                                            pemegang polis.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9.</td>
                                        <td>Masa tunggu</td>
                                        <td>:</td>
                                        <td>
                                            Jumlah waktu dimana tertanggung
                                            memiliki polis yang sama sebelum
                                            mereka dapat mengklaim manfaat
                                            tersebut. Tidak ada manfaat yang
                                            dibayarkan untuk setiap biaya
                                            perawatan yang dikeluarkan selama
                                            masa tunggu. Ketika masa tunggu
                                            tidak ditentukan, tidak ada masa
                                            tunggu yang berlaku. Masa tunggu
                                            yang berlaku diatur secara lengkap
                                            di dalam ketentuan polis.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10.</td>
                                        <td>Masa leluasa</td>
                                        <td>:</td>
                                        <td>
                                            Masa penundaan pembayaran premi
                                            lanjutan selama (30) tiga puluh hari
                                            kalender sejak ulang tahun polis, di
                                            mana selama masa tersebut polis
                                            tetap berlaku.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>11.</td>
                                        <td>Co-payment </td>
                                        <td>:</td>
                                        <td>
                                            Bagian dari biaya perawatan dan/atau
                                            pengobatan yang memenuhi syarat yang
                                            harus dibayar oleh pemegang polis.
                                            Tabel manfaat dan/atau polis
                                            memiliki informasi persentase
                                            pembayaran bersama (co-payment) yang
                                            telah pemegang polis pilih di awal
                                            periode polis.
                                        </td>
                                    </tr>
                                </tbody>
                            </table> */}
                            <ol type="1" style={{ paddingLeft: '30px' }}>
                                <li>
                                    <strong>Penanggung</strong>
                                    <p>PT. Lippo Life Assurance</p>
                                </li>
                                <li>
                                    <strong>Pemegang polis</strong>
                                    <p>
                                        Seseorang atau badan hukum yang
                                        mengadakan perjanjian asuransi dengan
                                        penanggung dan yang namanya tertulis
                                        dalam data polis.
                                    </p>
                                </li>
                                <li>
                                    <strong>Tertanggung </strong>
                                    <p>
                                        Orang yang terhadap dirinya diadakan
                                        suatu pertanggungan asuransi, yang mana
                                        terdapat kepentingan asuransi atau
                                        hubungan kepentingan asuransi dengan
                                        pemegang polis dan disebutkan dalam data
                                        polis.
                                    </p>
                                </li>

                                <li>
                                    <strong>Premi </strong>
                                    <p>
                                        Uang yang harus dibayarkan oleh pemegang
                                        polis kepada penanggung sehubungan
                                        dengan pertanggungan asuransi dalam
                                        polis.
                                    </p>
                                </li>

                                <li>
                                    <strong>Tanggal berlakunya polis</strong>
                                    <p>
                                        Tanggal dimulainya pertanggungan
                                        asuransi sebagaimana tercantum dalam
                                        data polis.
                                    </p>
                                </li>

                                <li>
                                    <strong>Masa asuransi </strong>
                                    <p>
                                        Masa berlakunya perlindungan asuransi,
                                        yaitu sejak tanggal berlaku polis sampai
                                        dengan tanggal berakhir polis, dengan
                                        memperhatikan ketentuan polis.
                                    </p>
                                </li>

                                <li>
                                    <strong>Uang pertanggungan </strong>
                                    <p>
                                        Sejumlah nilai uang yang tercantum pada
                                        data polis yang merupakan nilai
                                        pertanggungan berdasarkan polis ini dan
                                        ketentuan tambahan (jika ada).
                                    </p>
                                </li>

                                <li>
                                    <strong>Masa bebas lihat </strong>
                                    <p>
                                        Periode tertentu yang mulai dihitung
                                        sejak tanggal berlakunya polis, dan
                                        merupakan periode di mana pemegang polis
                                        mempelajari dan memastikan bahwa isi
                                        dari polis yang diterbitkan tersebut
                                        telah sesuai dengan keinginan dan
                                        kebutuhan pemegang polis.
                                    </p>
                                </li>

                                <li>
                                    <strong>Masa tunggu </strong>
                                    <p>
                                        {' '}
                                        Jumlah waktu di mana tertanggung
                                        memiliki polis yang sama sebelum mereka
                                        dapat mengklaim manfaat tersebut. Tidak
                                        ada manfaat yang dibayarkan untuk setiap
                                        biaya perawatan yang dikeluarkan selama
                                        masa tunggu. Ketika masa tunggu tidak
                                        ditentukan, tidak ada masa tunggu yang
                                        berlaku. Masa tunggu yang berlaku diatur
                                        secara lengkap di dalam ketentuan polis.
                                    </p>
                                </li>

                                <li>
                                    <strong>Masa leluasa </strong>
                                    <p>
                                        {' '}
                                        Masa penundaan pembayaran premi lanjutan
                                        selama (30) tiga puluh hari kalender
                                        sejak ulang tahun polis, di mana selama
                                        masa tersebut polis tetap berlaku.
                                    </p>
                                </li>

                                <li>
                                    <strong>Co-payment </strong>
                                    <p>
                                        {' '}
                                        Bagian dari biaya perawatan dan/atau
                                        pengobatan yang memenuhi syarat yang
                                        harus dibayar oleh pemegang polis. Tabel
                                        manfaat dan/atau polis memiliki
                                        informasi persentase pembayaran bersama
                                        (co-payment) yang telah pemegang polis
                                        pilih di awal periode polis.
                                    </p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <strong>Prosedur, Tata Cara, dan Syarat</strong>
                            <p style={{ paddingTop: '10px' }}>
                                Ringkasan persyaratan dan tata cara
                                pertanggungan asuransi, pengajuan pendaftaran
                                produk asuransi, pembayaran premi dan klaim
                                dapat dilihat pada bagian persyaratan dan tata
                                cara pada ringkasan informasi produk dan layanan
                                ini. Prosedur, tata cara, dan syarat diatur
                                lebih detil dalam Polis Asuransi.
                            </p>
                        </li>
                        <li>
                            <strong>
                                Prosedur Pelayanan dan Penyelesaian Pengaduan
                            </strong>
                            <p style={{ paddingTop: '10px' }}>
                                Anda dapat mengajukan pengaduan konsumen melalui
                                call center kami yang beroperasi selama 24 (dua
                                puluh empat) jam sehari melalui{' '}
                                {!isWebView && (
                                    <a href="tel:1500868">1500868</a>
                                )}
                                {isWebView && <>1500868</>} atau melalui surel
                                ke{' '}
                                {!isWebView && (
                                    <a href="mailto:solusianda@lippolife.co.id">
                                        solusianda@lippolife.co.id
                                    </a>
                                )}
                                {isWebView && <>solusianda@lippolife.co.id</>}.
                            </p>
                            <p>
                                Pengaduan yang anda sampaikan akan
                                ditindaklanjuti dalam jangka waktu paling lambat
                                20 (dua puluh) hari kerja setelah tanggal
                                penerimaan pengaduan, dan dapat diperpanjang
                                maksimal 20 (dua puluh) hari kerja dengan
                                melakukan pemberitahuan terlebih dahulu kepada
                                anda dalam hal:
                            </p>
                            <ul
                                className="dash"
                                style={{ paddingLeft: '30px' }}
                            >
                                <li>
                                    Kantor penanggung yang menerima pengaduan
                                    tidak sama dengan kantor penanggung tempat
                                    terjadinya permasalahan yang diadukan dan
                                    terdapat kendala usaha di antara kedua
                                    kantor penanggung tersebut;
                                </li>
                                <li>
                                    Transaksi keuangan yang diadukan oleh anda
                                    memerlukan penelitian khusus terhadap
                                    dokumen-dokumen penanggung; dan/atau
                                </li>
                                <li>
                                    Terdapat hal-hal lain di luar kendali
                                    penanggung seperti adanya keterikatan pihak
                                    ketiga di luar penanggung.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Kontak Penanggung</strong>
                            <p style={{ paddingTop: '10px' }}>
                                Anda dapat menghubungi kami melalui:
                            </p>
                            <ul
                                className="dash"
                                style={{ paddingLeft: '30px' }}
                            >
                                <li>
                                    Lippo Kuningan, Lt. 17 Floor Unit E. Jl. HR.
                                    Rasuna Said Kav. B12, Jakarta Selatan –
                                    12920, Indonesia.
                                </li>
                                <li>
                                    E-mail:{' '}
                                    {!isWebView && (
                                        <a href="mailto:solusianda@lippolife.co.id">
                                            solusianda@lippolife.co.id
                                        </a>
                                    )}
                                    {isWebView && (
                                        <>solusianda@lippolife.co.id</>
                                    )}
                                </li>
                                <li>
                                    Nomor telepon:{' '}
                                    {!isWebView && (
                                        <a href="tel:1500868">1500868</a>
                                    )}
                                    {isWebView && <>1500868</>}
                                </li>
                            </ul>
                        </li>
                    </ol>
                    <h2>
                        <i>Disclaimer</i> (penting untuk dibaca)
                    </h2>
                    <ol type="1" style={{ paddingLeft: '30px' }}>
                        <li>
                            Anda harus membaca dengan teliti dan memahami
                            Ringkasan Informasi Produk dan Layanan ini sebelum
                            menyetujui pembelian produk dan berhak bertanya
                            kepada pegawai PT Lippo Life Assurance atas semua
                            hal terkait Ringkasan Informasi Produk dan Layanan
                            ini.
                        </li>
                        <li>
                            Ringkasan Informasi Produk dan Layanan ini merupakan
                            penjelasan singkat dari produk asuransi kesehatan
                            “Solusi Asuransi Kesehatan” dan bukan merupakan
                            bagian dari polis. Syarat dan ketentuan lengkap
                            mengenai produk asuransi dapat anda pelajari pada
                            polis yang diterbitkan penanggung.
                        </li>
                        <li>
                            Informasi lain mengenai biaya, manfaat, dan risiko
                            juga dapat diakses melalui website di{' '}
                            {!isWebView && (
                                <a
                                    target="_blank"
                                    href="https://www.lippolife.co.id/solusianda"
                                >
                                    www.lippolife.co.id/solusianda
                                </a>
                            )}
                            {isWebView && (
                                <a
                                    onClick={() => {
                                        openBrowser(
                                            'https://www.lippolife.co.id/solusianda'
                                        )
                                    }}
                                >
                                    www.lippolife.co.id/solusianda
                                </a>
                            )}
                            .
                        </li>
                        <li>
                            Anda telah membaca, memahami, serta menyatakan
                            terikat atas seluruh syarat dan ketentuan
                            sebagaimana tercantum dalam ketentuan umum, polis,
                            ataupun dokumen lainnya yang relevan.
                        </li>
                        <li>
                            Penanggung dapat menyetujui atau menolak asuransi
                            berdasarkan keputusan seleksi risiko (
                            <i>underwriting</i>) penanggung. Keputusan klaim
                            sepenuhnya merupakan keputusan penanggung, dengan
                            mengikuti ketentuan yang tercantum pada ketentuan
                            polis.
                        </li>
                        <li>
                            Untuk anak di bawah umur/ anggota keluarga yang
                            berusia di bawah 18 tahun, anda bertindak sebagai
                            orang tua atau wali mereka dan memberikan informasi
                            tentang kesehatan mereka.
                        </li>
                        <li>
                            Anda memahami jika terdapat perubahan informasi yang
                            anda berikan sebelum tanggal dimulainya polis, anda
                            harus memberitahukannya kepada penanggung secara
                            tertulis.
                        </li>
                        <li>
                            Dengan menandatangani halaman ini, anda
                            mengkonfirmasi bahwa pernyataan yang dimuat dalam
                            Ringkasan Informasi Produk dan Layanan, surat
                            permintaan asuransi kesehatan, ataupun dokumen
                            lainnya yang relevan adalah benar dan lengkap, dan
                            anda memiliki hak dan kewenangan untuk
                            menandatangani polis ini untuk dan atas nama anak di
                            bawah umur/anggota keluarga.
                        </li>
                        <li>
                            Informasi yang tercakup dalam Ringkasan Informasi
                            Produk dan Layanan ini berlaku sejak tanggal cetak
                            dokumen sampai dengan adanya pembaharuan lebih
                            lanjut dari PT. Lippo Life Assurance.
                        </li>
                    </ol>
                </section>
                <p style={{ paddingTop: '60px' }}>
                    PT LIPPO LIFE ASSURANCE terdaftar dan diawasi oleh Otoritas
                    Jasa Keuangan
                </p>
                <br />
                <br />
                <p>Tanggal Cetak Dokumen</p>
                <p>
                    {new Date(Date.now()).toLocaleString('en-GB').split(',')[0]}
                </p>
            </div>
            <Footer />
            <style jsx>{styles}</style>
            <style jsx global>
                {globalStyles}
            </style>
        </>
    )
}
