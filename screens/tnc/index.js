import ReactMarkdown from 'react-markdown'
import styles from './styles'
import Hero from '../../components/hero-header'
import Footer from '../../components/footer'

export default function TnCScreen() {
    return (
        <>
            <Hero title="Terms & Conditions" />
            <div className="wrapper">
                <ReactMarkdown>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Tristique et egestas quis ipsum suspendisse ultrices
                    gravida dictum. Suspendisse interdum consectetur libero id.
                    Venenatis tellus in metus vulputate eu scelerisque felis
                    imperdiet proin. Amet nisl suscipit adipiscing bibendum est.
                    Vitae purus faucibus ornare suspendisse sed nisi lacus sed.
                    Aliquet risus feugiat in ante metus dictum. Convallis a cras
                    semper auctor. Risus feugiat in ante metus dictum at tempor
                    commodo ullamcorper. Cursus metus aliquam eleifend mi in.
                    Nunc lobortis mattis aliquam faucibus purus in. Iaculis nunc
                    sed augue lacus viverra vitae congue eu consequat. Quis
                    varius quam quisque id diam vel. Vulputate dignissim
                    suspendisse in est ante in nibh mauris cursus. Dignissim
                    sodales ut eu sem integer vitae justo eget magna. In ante
                    metus dictum at tempor. Lobortis scelerisque fermentum dui
                    faucibus in ornare quam. Pellentesque elit eget gravida cum
                    sociis natoque penatibus et. Bibendum ut tristique et
                    egestas. Non curabitur gravida arcu ac tortor dignissim
                    convallis aenean et. Facilisis sed odio morbi quis commodo.
                    Id diam maecenas ultricies mi eget. Blandit massa enim nec
                    dui. Sed vulputate odio ut enim blandit volutpat maecenas.
                    Massa enim nec dui nunc mattis. Blandit cursus risus at
                    ultrices mi tempus imperdiet nulla malesuada. Arcu cursus
                    vitae congue mauris rhoncus aenean vel elit scelerisque.
                    Praesent semper feugiat nibh sed. Congue quisque egestas
                    diam in arcu cursus euismod quis. Enim nulla aliquet
                    porttitor lacus. Non consectetur a erat nam. Malesuada fames
                    ac turpis egestas integer. Accumsan lacus vel facilisis
                    volutpat. Diam in arcu cursus euismod quis viverra. Nullam
                    eget felis eget nunc. Vel facilisis volutpat est velit
                    egestas dui id ornare arcu. Morbi blandit cursus risus at
                    ultrices mi. Dui ut ornare lectus sit amet est placerat.
                    Quis varius quam quisque id diam vel quam elementum
                    pulvinar. Scelerisque in dictum non consectetur a erat nam
                    at. Dis parturient montes nascetur ridiculus mus mauris
                    vitae ultricies leo. Aliquam purus sit amet luctus. Mauris
                    in aliquam sem fringilla ut morbi. Commodo sed egestas
                    egestas fringilla phasellus faucibus scelerisque. Lobortis
                    scelerisque fermentum dui faucibus in ornare quam viverra
                    orci. Purus non enim praesent elementum facilisis leo vel
                    fringilla. Aliquet nibh praesent tristique magna sit. Porta
                    non pulvinar neque laoreet. Dignissim enim sit amet
                    venenatis urna cursus eget nunc scelerisque. Faucibus a
                    pellentesque sit amet porttitor eget dolor morbi. In aliquam
                    sem fringilla ut. Quis ipsum suspendisse ultrices gravida
                    dictum fusce. Eu sem integer vitae justo eget. Rutrum
                    quisque non tellus orci ac. Nibh sed pulvinar proin gravida
                    hendrerit lectus a. Faucibus in ornare quam viverra orci
                    sagittis. In egestas erat imperdiet sed euismod nisi porta.
                    Id leo in vitae turpis massa. Ullamcorper dignissim cras
                    tincidunt lobortis. Aenean vel elit scelerisque mauris
                    pellentesque pulvinar. Sit amet volutpat consequat mauris
                    nunc. Mauris rhoncus aenean vel elit scelerisque mauris
                    pellentesque. Volutpat est velit egestas dui. Dictum sit
                    amet justo donec enim diam vulputate. Nunc pulvinar sapien
                    et ligula. Dignissim diam quis enim lobortis scelerisque
                    fermentum. Sed ullamcorper morbi tincidunt ornare massa eget
                    egestas. Imperdiet dui accumsan sit amet. Integer enim neque
                    volutpat ac tincidunt vitae. Quam viverra orci sagittis eu
                    volutpat odio facilisis mauris. Vel eros donec ac odio
                    tempor orci. Mus mauris vitae ultricies leo integer. Massa
                    ultricies mi quis hendrerit dolor. Sed euismod nisi porta
                    lorem mollis. Et odio pellentesque diam volutpat commodo sed
                    egestas. At elementum eu facilisis sed odio morbi.
                    Ullamcorper malesuada proin libero nunc consequat interdum.
                    Id faucibus nisl tincidunt eget. Sit amet dictum sit amet
                    justo. Purus ut faucibus pulvinar elementum integer enim
                    neque volutpat ac. At imperdiet dui accumsan sit amet nulla
                    facilisi morbi tempus. Dui vivamus arcu felis bibendum ut
                    tristique et. Euismod nisi porta lorem mollis aliquam ut. Ut
                    tortor pretium viverra suspendisse potenti nullam. Vel
                    pretium lectus quam id leo in vitae turpis massa. Nunc
                    aliquet bibendum enim facilisis gravida neque convallis. Et
                    malesuada fames ac turpis egestas maecenas pharetra.
                    Vestibulum rhoncus est pellentesque elit. Aliquam etiam erat
                    velit scelerisque in dictum non consectetur a. Et ligula
                    ullamcorper malesuada proin libero nunc consequat.
                </ReactMarkdown>
            </div>
            <Footer />
            <style jsx>{styles}</style>
        </>
    )
}
