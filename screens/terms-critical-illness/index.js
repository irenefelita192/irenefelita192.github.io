import styles from './styles'
import globalStyles from './global-styles'
import Footer from 'components/footer'

export default function TermsCriticalIllness({ isWebView }) {
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
                <section
                    className="table-nested"
                    style={{ 'page-break-before': 'always' }}
                >
                    <h2>
                        Syarat dan Ketentuan untuk Mendapatkan Santunan Penyakit Kritis
                    </h2>
                    <p>Sehubungan dengan plan <strong>tertanggung</strong>,  jika <strong>tertanggung</strong> terdiagnosa salah satu dari penyakit kritis yang dijelaskan dalam tabel di bawah ini setelah masa tunggu selama (30) tiga puluh hari dengan masa bertahan hidup selama 14 hari sejak <strong>tertanggung</strong> didiagnosa menderita salah satu dari penyakit kritis dibawah, dan selama masa pertanggungan asuransi, maka <strong>tertanggung</strong> akan dibayarkan manfaat asuransi sebesar uang pertanggungan sesuai dengan plan <strong>tertanggung</strong>.</p>
                    <br></br>
                    <p>Silakan merujuk ke <strong>tabel manfaat</strong> yang memuat penjelasan dan/atau kriteria yang harus dipenuhi apabila suatu klaim hendak diajukan. Kondisi Penyakit Kritis yang ditanggung adalah seperti yang tercantum dalam tabel di bawah ini.</p>
                    <br></br>
                    <p>Silakan merujuk ke Pasal 15 tentang Pengecualian dan Pembatasan Kebijakan ini.</p>
                    <br></br>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <td style={{ width: '30%' }}>Penyakit Kritis</td>
                                    <td>Keterangan Jenis Penyakit Kritis</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>Kanker</p></td>
                                    <td>
                                        <p>Diberikan 25% uang pertanggungan di tahap awal. Definisi tahap awal yaitu:</p>
                                        <ul>
                                            <li>Carcinoma in situ terbatas pada organ: payudara, rahim, indung telur (ovarium), tuba falopii, vulva, vagina, leher rahim (cervix uteri), testis, penis, lambung (gaster), colon, rectum, hati (liver), paru-paru, dan nasopharynx</li>
                                            <li><b>Kanker</b> prostat, gondok (thyroid), kandung kencing (berjenis papillary microcarcinoma) yang secara histologis termasuk pada tingkatan T1N0M0 sesuai dengan klasifikasi TNM atau yang setara.</li>
                                        </ul>
                                        <p>Carcinoma in situ berarti pertumbuhan baru focal autonomous dari sel karsinomatus yang terbatas pada sel di mana sel tersebut berasal dan belum mengakibatkan penyebaran dan/atau kerusakan jaringan sekitar. "Penyebaran" berarti infiltrasi dan/atau penghancuran aktif jaringan normal yang melewati membran dasar.</p>

                                        <p>Diberikan sisa uang pertanggungan di tahap lanjut <strong>kanker</strong>. Definisi tahap lanjut yaitu:</p>

                                        <p>Pertumbuhan sel yang tidak terkendali serta invasi ke jaringan normal.</p>
                                        <p>Diagnosa harus ditegakkan berdasarkan pemeriksaan jaringan dan didiagnosa oleh <strong>praktisi medis</strong> yang memiliki spesialisasi dalam bidang tumor dan dibuktikan dengan hasil patologi anatomi.</p>

                                        <p><i>penyakit-penyakit</i> yang dikecualikan :</p>
                                        <ul>
                                            <li>Carsinoma In Situ dan tumor yang secara histologi menggambarkan pra <b>kanker</b> atau tidak invasive, termasuk namun tidak terbatas pada Carsinoma In Situ payudara, Cervical Displasia CIN 1, CIN 2, CIN 3,</li>
                                            <li>Semua jenis kanker kulit selain melanoma ganas,</li>
                                            <li><b>Kanker</b> kelenjar prostat yang berdasarkan pemeriksaan jaringan demikian juga dengan TNM klasifikasi T1a atau T1b atau <b>kanker</b> kelenjar prostat berdasarkan klasifikasi yang sama atau klasifikasi Lesser,</li>
                                            <li>T1NoMo Papillary Microcarcinoma kelenjar thyroid dengan diameter kurang dari 1 cm,</li>
                                            <li>Papillary Microcarsinoma kantung kemih,</li>
                                            <li>Chronic Lymphocytic leukemia kurang dari RAI stage 3,</li>
                                            <li>Semua tumor yang disebabkan karena infeksi HIV.</li>

                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td><p>Serangan Jantung</p></td>
                                    <td>
                                        <p>
                                            Matinya sebagian otot jantung sebagai akibat kurangnya suplai darah ke jantung. 
                                            Kriteria diagnostik yang harus dipenuhi pada saat terjadinya serangan tersebut adalah wajib memenuhi paling sedikit 
                                            (3) tiga kriteria dari (5) lima kriteria  di bawah ini yang sesuai dengan diagnosa serangan jantung pertama:
                                        </p>
                                        <ul>
                                            <li>adanya riwayat nyeri dada yang khas pada saat serangan,</li>
                                            <li>terjadinya perubahan-perubahan gambaran electrokardiogram (EKG) yang khas untuk Acute Infark Myocardial,</li>
                                            <li>terjadinya peningkatan pada kadar enzim jantung, yaitu CK-MB,</li>
                                            <li>terjadinya peningkatan Troponin (T atau I), atau</li>
                                            <li>left ventricular ejection fraction kurang dari 50% (lima puluh persen) yang berlangsung selama (3) tiga bulan atau lebih setelah serangan.</li>
                                        </ul>
                                        <p>Untuk definisi di atas, hal-hal berikut tidak ditanggung:</p>
                                        <ul>
                                            <li>Sindrom koroner akut (angina stabil atau tidak stabil);</li>
                                            <li>Peningkatan troponin yang bukan merupakan penyakit jantung iskemik (misalnya miokarditis,</li>
                                            <li>pemasangan balon pada apikal, memar jantung, emboli paru, keracunan obat);</li>
                                            <li>Infark miokard dengan arteri koroner normal atau disebabkan oleh vasospasme koroner,</li>
                                            <li>myocardial bridging atau penyalahgunaan obat; atau</li>
                                            <li>Infark miokard yang terjadi dalam waktu (14) empat belas hari kalender setelah angioplasti koroner atau operasi bypass</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td><p>Gangguan Neurologi</p></td>
                                    <td>
                                        <p><u>Koma (Kategori2)</u></p>
                                        <p>Diagnosis oleh <strong>praktisi medis</strong> <strong>spesialis</strong> saraf berada dalam keadaan tidak sadar tanpa reaksi terhadap rangsangan eksternal atau kebutuhan internal yang:</p>
                                        <ol type="1">
                                            <li>memerlukan penggunaan sistem pendukung kehidupan untuk jangka waktu terus menerus minimal 96 jam; dan</li>
                                            <li>dengan defisit neurologis terkait dengan gejala klinis yang menetap. Bagaimanapun, ketidaksadaran yang disebabkan secara medis, atau ketidaksadaran akibat penyalahgunaan alkohol atau obat-obatan terlarang.</li>
                                        </ol>

                                        <p><u>Aneurisma serebral</u></p>
                                        <p style={{ marginBottom: '5px' }}> dikonfirmasi oleh angiogram serebrovaskular dari Ahli Saraf yang menyatakan bahwa <strong>tertanggung</strong> memiliki aneurisma otak yang memerlukan pembedahan otak dengan kraniotomi untuk menjepit, memperbaiki, atau menghilangkan aneurisma. <strong>tertanggung</strong> harus dirawat oleh ahli bedah saraf.</p>
                                    
                                        <p><u>Penyakit Alzheimer</u></p>
                                        <p style={{ marginBottom: '5px' }}>Diagnosa dari <strong>praktisi medis</strong> <strong>spesialis</strong> saraf yang menyatakan bahwa <strong>tertanggung</strong> menderita penyakit Alzheimer bersama-sama dengan gangguan saraf, menyebabkan ketidakmampuan permanen untuk melakukan tiga atau lebih aktifitas kehidupan Sehari-hari sendiri.</p>

                                        <p><u>Penyakit Parkinson</u></p>
                                        <p style={{ marginBottom: '5px' }}>Diagnosa dari <strong>praktisi medis spesialis</strong> saraf yang menyatakan bahwa <strong>tertanggung</strong> menderita penyakit parkinson yang terjadi karena penyebab idiopatik dan memenuhi semua kondisi berikut:</p>
                                        <ol type="1">
                                            <li>Keadaan penyakit <b>tertanggung</b> tidak dapat dikendalikan dengan obat atau tindakan klinis apapun; dan</li>
                                            <li><b>Tertanggung</b> tidak dapat melakukan sendiri (3) tiga atau lebih aktifitas kehidupan sehari-hari untuk jangka waktu terus menerus sekurang-kurangnya (180) seratus delapan puluh hari sejak tanggal diagnosa, kecuali jika <b>tertanggung</b> meninggal dunia sebelum berakhirnya jangka waktu (180) seratus delapan puluh hari akibat penyakit parkinson ini atau sebagai akibat langsung dari penyakit parkinson ini.</li>
                                        </ol>
                                        <p>Aktivitas Kehidupan Sehari-hari (ADL) adalah sebagai berikut:</p>
                                        <ol type="a">
                                            <li>
                                                <p>Mandi dan mencuci</p>
                                                <p>Kemampuan untuk mandi di bak mandi atau pancuran (termasuk masuk atau keluar dari bak mandi atau pancuran) atau mencuci diri dengan cara lain apa pun.</p>
                                            </li>
                                            <li>
                                                <p>Kontinesia</p>
                                                <p>Kemampuan untuk mengendalikan impuls fungsi usus dan kandung kemih seperti untuk menjaga kebersihan pribadi.</p>
                                            </li>
                                            <li>
                                                <p>Berpakaian</p>
                                                <p>Berarti Kemampuan untuk memakai, melepas, mengamankan, dan membuka semua pakaian dan, sebagaimana mestinya, setiap penjepit, kaki palsu, atau peralatan bedah lainnya.</p>
                                            </li>
                                            <li>
                                                <p>Makan</p>
                                                <p>Berarti Semua tugas memasukkan makanan ke dalam tubuh setelah disiapkan.</p>
                                            </li>
                                            <li>
                                                <p>Mobilitas</p>
                                                <p>Berarti Kemampuan  untuk berpindah dari  satu tempat ke tempat  lain tanpa memerlukan bantuan fisik</p>
                                            </li>
                                            <li>
                                                <p>Berpindah Tempat</p>
                                                <p>Berarti Kemampuan untuk berpindah dari tempat tidur ke kursi tegak atau kursi roda dan sebalikny</p>
                                            </li>
                                        </ol>

                                        <p><i>Pengecualian Khusus:</i></p>
                                        <p><u>Koma (Kategori 2)</u></p>
                                        <p>Ketidaksadaran yang disebabkan oleh penyakit yang ditularkan oleh Nyamuk atau penyakit Pernafasan tidak termasuk.</p>

                                        <p><u>Aneurisma serebral</u></p>
                                        <p>Infeksi dan aneurisma mikotik dikecualikan. Operasi aneurisma serebral menggunakan kateter arteri serebral, kraniektomi atau lubang duri juga dikecualikan.</p>

                                        <p><u>Penyakit Alzheimer</u></p>
                                        <p>Gangguan neurologis yang disebabkan oleh alkohol, penyalahgunaan obat-obatan atau gangguan psikologis tidak termasuk.</p>

                                        <p><u>Penyakit Parkinson</u></p>
                                        <p>Penyakit Parkinson yang disebabkan oleh obat-obatan atau paparan racun tidak termasuk.</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td><p>Gagal Ginjal Kronis</p></td>
                                    <td>
                                        <p>Diagnosa dari dokter <strong>spesialis</strong> bahwa <strong>tertanggung</strong> menderita penyakit ginjal kronis atau gagal ginjal tahap akhir dari kedua ginjal yang fungsinya tidak dapat dipulihkan secara efektif, sehingga perlu dilakukan cuci darah secara berkala atau melakukan transplantasi ginjal.</p>
                                        <p><i>Pengecualian khusus: gagal ginjal yang disebabkan oleh penyakit yang ditularkan oleh nyamuk atau penyakit pernapasan.</i></p>
                                    </td>
                                </tr>

                                <tr>
                                    <td><p>Diabetes Melitus</p></td>
                                    <td>
                                        <p>Jika <strong>tertanggung</strong> didiagnosa menderita salah satu dari 4 kondisi penyakit kritis komplikasi diabetes, maka <strong>penanggung</strong> akan membayarkan manfaat sebesar 20% (dua puluh persen) dari Manfaat Pertanggungan penyakit kritis.</p>
                                        <p>Komplikasi diabetes sebagai berikut  :</p>
                                        <ol type="1">
                                            <li>
                                                <p><u>Diabetic Retinopathy</u></p>
                                                <p>Yang membutuhkan <strong>perawatan</strong> laser dimana tindakan tersebut diperlukan secara medis dan dinyatakan oleh <strong>praktisi medis spesialis</strong> mata dengan didukung hasil pemeriksaan angiografi pada mata (Flourecent Fundus Angiography)</p>
                                            </li>
                                            <li>
                                                <p><u>Diabetic Nephropathy</u></p>
                                                <p>yang dibuktikan dengan hasil pemeriksaan eGFR kurang dari 30 ml/menit/1,7&#13217; dengan proteinuria terus-menerus diatas 300mg/24 jam. Diagnosnis harus diteggakan oleh <strong>praktisi medis spesialis</strong> ginjal.</p>
                                            </li>
                                            <li>
                                                <p><u>Diabetic Amputation</u></p>
                                                <p>menjalani amputasi pada tungkai atau kaki atau lengan atau tangan untuk mengobati gangrene yang telah terjadi karena adanya komplikasi dari kencing manis.</p>
                                            </li>
                                            <li>
                                                <p><u>Diabetic Coma</u></p>
                                                <p>kondisi tidak sadar dimana tidak ada reaksi terhadap rangsangan eksternal atau kebutuhan internal yang:</p>
                                                <ul>
                                                    <li>merupakan komplikasi diabetes; dan</li>
                                                    <li>membutuhkan penggunaan sistem penunjang kehidupan secara terus menerus minimal (72) tujuh puluh dua jam; dan</li>
                                                    <li>mengakibatkan defisit (gangguan) neurologis permanen dengan gejala klinis yang menetap. Koma yang diakibatkan langsung atau tidak langsung dari penyebab yang lain dikecualikan.</li>                                                        
                                                </ul>
                                            </li>
                                        </ol>

                                        <p><i>Pengecualian Khusus:</i></p>
                                        <ul>
                                            <li>Gestational Diabetes atau tingkat intoleransi glukosa dengan onset atau identifikasi pertama selama dalam masa kandungan; atau</li>
                                            <li>Diabetes Mellitus yang disebabkan oleh pankreatitis beralkohol; atau</li>
                                            <li>Diabetes Mellitus yang disebabkan oleh penggunaan steroid; atau</li>
                                            <li>Prediabetes (termasuk gangguan toleransi glukosa atau gangguan glukosa puasa) ataupun jika <strong>tertanggung</strong> telah menggunakan pengobatan hipoglikemik oral.</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
