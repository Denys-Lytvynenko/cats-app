import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Root from "./routes/root";

import "./index.scss";

const rootElement = document.getElementById("root") as HTMLElement;

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: (
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio nesciunt alias eos voluptate accusantium. Tempora
                        dicta explicabo provident quo pariatur modi inventore
                        ullam corrupti laboriosam molestias voluptas, harum est
                        necessitatibus! Dolore minima ipsa unde nisi tenetur
                        optio quam magnam, animi at rerum consequuntur enim
                        velit molestias voluptatum temporibus, corporis
                        nesciunt, dolorem dignissimos soluta. Molestias repellat
                        in odit modi laudantium deleniti. Nihil sed eligendi
                        pariatur officia earum ullam quibusdam aspernatur, in
                        tempora voluptatem perspiciatis natus ab tempore!
                        Voluptatum, deleniti nesciunt, tempore veniam repellat,
                        aliquam commodi exercitationem aut quisquam facere
                        cumque corporis? Numquam nesciunt odio ea explicabo
                        nulla totam voluptates molestias officia. Iusto
                        repudiandae possimus dolorum corrupti totam! In atque
                        tenetur a temporibus harum quia corrupti dicta
                        recusandae eaque assumenda, alias ex. Magni eveniet eum
                        veritatis et repudiandae illo quibusdam modi deleniti
                        quas, repellendus vitae suscipit voluptate natus. Quasi
                        sequi, possimus consectetur corporis aliquam laborum
                        ipsam cupiditate ut suscipit numquam perspiciatis
                        veniam! Minus, itaque quibusdam! Corporis laudantium
                        quisquam dolorem iusto atque. Hic, saepe aut. Atque est
                        itaque cupiditate, quidem in aliquam id doloribus at
                        eligendi ex quod provident quam facilis, asperiores
                        dolorum. Maxime quisquam sequi nemo veniam animi quaerat
                        odit, officia, repudiandae nihil doloribus recusandae
                        quos iusto beatae quo corrupti sit nostrum natus quam
                        tempora vitae laborum voluptatem ullam labore?
                        Provident, nam! Quasi neque molestias beatae ducimus
                        sapiente in, cumque voluptate consequuntur earum animi
                        iure consectetur nobis at necessitatibus eveniet quod
                        quam, hic fuga eum blanditiis ipsum labore aspernatur
                        architecto eos! Nostrum! Eligendi, veniam. Tempora autem
                        dolor quae debitis, illo quasi non repudiandae obcaecati
                        eos nisi reprehenderit, voluptate cum? Repellat cum,
                        alias labore, temporibus, sequi reiciendis delectus
                        impedit iusto distinctio sint ea. Error placeat, est
                        deleniti provident voluptas facilis impedit dolore
                        dolores, expedita ad autem iste architecto, repellendus
                        perferendis qui consequuntur. Nam ipsa amet neque,
                        doloremque a aliquam eum earum voluptatem aut. At
                        repellat omnis, in dolore odio ut iure voluptas minima
                        sapiente quidem quam eius laudantium autem atque
                        veritatis id libero eaque maxime iste! Autem nisi
                        veritatis rem quo ex praesentium. Quis sed iste natus
                        magnam nisi eveniet dignissimos quasi facilis nemo illum
                        dolores ipsam atque fuga provident eius, molestiae omnis
                        obcaecati labore hic? Recusandae esse dolor natus quas
                        quia delectus. Maxime distinctio magnam perferendis sit
                        aliquam vel qui repudiandae eligendi fugit quae aperiam
                        doloremque blanditiis cumque itaque ducimus, repellat
                        nemo maiores aspernatur cum est iusto, reprehenderit
                        eveniet consequatur quos. Facere! Perspiciatis nam
                        architecto qui sunt! Vero porro veniam, excepturi libero
                        animi in ipsam fugiat possimus, saepe maxime distinctio
                        laudantium aliquam aut ad soluta magnam error totam eos
                        doloremque laborum aperiam! Omnis sed neque atque
                        deleniti, perspiciatis in nulla et expedita nisi eum
                        delectus autem! Nisi, ex labore vero, reprehenderit
                        quisquam aut inventore doloribus neque hic corporis
                        possimus laboriosam! Libero, nulla. In odio recusandae
                        eos animi consectetur atque sit corporis impedit, quasi,
                        doloremque suscipit hic rem! Ad optio eum dolore illum
                        officiis aperiam unde velit, possimus consequuntur, eius
                        eos labore architecto. Assumenda aut quasi quis beatae
                        ratione optio ullam commodi dignissimos eaque nihil?
                        Inventore omnis assumenda ad aut harum! Cum ab sint
                        quasi quidem dolorum iure, esse sunt fugiat nam magni?
                        Blanditiis soluta debitis possimus architecto, unde
                        suscipit culpa dolores assumenda, nesciunt dolor velit!
                        Optio, qui eum magnam voluptas laboriosam, officia,
                        incidunt alias laudantium voluptatibus rem praesentium
                        consequatur eveniet? Dolorum, ut. Ipsam, inventore!
                        Molestiae nobis consequatur vel totam voluptatem
                        recusandae a porro deleniti, explicabo perspiciatis
                        beatae pariatur. Pariatur corporis cupiditate debitis
                        adipisci unde deleniti autem minima veniam perspiciatis
                        id. Labore, soluta! Quod ex fuga praesentium placeat
                        eligendi est dolor, aut voluptates eos ipsum sunt odio
                        aspernatur, doloribus quasi odit eum corporis magnam
                        nobis rem, repellendus consequuntur magni repellat quam?
                        Nihil, voluptatum. Quod temporibus fuga dicta laborum
                        illum perspiciatis suscipit esse, quasi saepe repellat
                        ab. Blanditiis ipsam fugiat nostrum deserunt iure
                        maiores quod ea pariatur, illum tempora earum, eius
                        soluta voluptatem autem. Iusto natus voluptatem enim
                        distinctio. Reiciendis a omnis deserunt molestias?
                        Excepturi doloribus ea laborum optio rem. Expedita
                        dignissimos, ducimus asperiores veritatis natus error
                        quisquam velit quasi cumque, vitae eligendi magni. Esse
                        nulla dolores ratione id, laborum asperiores voluptatum
                        officiis rerum sunt corrupti iure error neque doloremque
                        repellat vitae delectus earum repudiandae quos, aut rem
                        reiciendis officia. Dolores eaque molestiae quibusdam?
                        Laudantium magnam consequatur excepturi qui officiis.
                        Quaerat doloribus expedita non debitis quis nisi dicta
                        laborum dolor culpa error inventore cum, iure voluptatum
                        enim totam fuga ab eius ad? Dignissimos, reprehenderit?
                        Earum quidem molestiae deserunt ab rerum voluptatibus
                        quaerat fugit itaque, fuga quam ullam ipsam, consectetur
                        accusamus, deleniti debitis non eaque? Dicta libero
                        soluta recusandae dolorum fugiat delectus molestiae vel.
                        Facilis? Aut, quis neque accusamus pariatur quidem
                        asperiores facere! Voluptate itaque corporis, corrupti
                        est optio cum excepturi animi aliquam natus mollitia?
                        Praesentium porro, quidem temporibus id repudiandae
                        soluta hic aliquam unde! Enim dolorem voluptas a. Vel
                        perferendis quod culpa! Repellendus fuga voluptas culpa
                        architecto, ducimus quo sit. Tenetur impedit, illum
                        reprehenderit repellendus architecto animi dignissimos
                        quae atque maiores earum blanditiis labore. Asperiores
                        qui iusto inventore, eius est aspernatur aliquid magni
                        magnam quidem beatae quae quasi sed numquam. Dolore vero
                        aspernatur qui. Aspernatur, veritatis delectus quod
                        tempore voluptatum nam iusto voluptates molestiae?
                        Animi, ipsum enim provident debitis ullam fugit magnam
                        excepturi officiis nemo quas! Quis sed expedita
                        deleniti, cupiditate ipsam, adipisci recusandae tenetur
                        ipsa voluptate quae minima a aut optio, corporis quam?
                        Explicabo, rem impedit. Tempora ipsum optio facere! Hic
                        voluptas, quidem esse fugit repellendus iste reiciendis,
                        pariatur quo provident odit labore a molestias facere id
                        recusandae impedit odio officiis iusto? Magni. Eius
                        dolor natus eligendi harum voluptate sequi aperiam
                        reiciendis odio fugiat aut ducimus delectus cumque a
                        animi voluptatum inventore cum, placeat illo velit.
                        Atque unde consequuntur vitae, ipsum vel porro? Suscipit
                        soluta, fugit consequatur ab ex incidunt repellendus
                        excepturi! Distinctio exercitationem deleniti maxime,
                        quaerat eius inventore hic blanditiis quae, unde, animi
                        saepe. Expedita id modi numquam a voluptatem placeat
                        natus! Eum necessitatibus modi recusandae illum at
                        nobis, repellat incidunt, voluptatem blanditiis, natus
                        consequuntur rem velit vel iure culpa cumque illo?
                        Suscipit soluta nisi quos possimus consectetur illum
                        iure beatae voluptates. Quam sapiente consequuntur minus
                        id laboriosam eum assumenda fugit praesentium
                        cupiditate. Odio, expedita? Nemo praesentium aliquid
                        natus ad dolorum, consequuntur quidem! Quod quos
                        cupiditate accusantium vitae, voluptatum excepturi
                        ratione officia? Veritatis eaque reiciendis, quis veniam
                        iste sequi, aperiam minima pariatur, ullam itaque earum
                        illum soluta ut nihil quas asperiores? Sit voluptatibus,
                        vitae eos esse repellendus commodi hic placeat illum
                        voluptatem. Et, voluptates distinctio deserunt iusto
                        quis facilis officiis enim debitis ipsam at sit omnis
                        expedita numquam quo sed adipisci ex quos sapiente.
                        Impedit voluptatum ut aperiam asperiores at quibusdam
                        nam. Aliquid necessitatibus inventore dolore iste quia
                        quis unde accusamus debitis voluptate, exercitationem
                        optio possimus consequuntur, molestiae, eveniet
                        cupiditate! Molestiae quam culpa ipsa velit ea adipisci
                        dolore numquam alias sed vero! Doloremque porro dolor
                        cumque velit! Sed non delectus hic laboriosam molestiae
                        corrupti aliquid amet sequi deserunt quis itaque, harum
                        quasi ex illo magni facilis eum. Quasi odio perspiciatis
                        omnis in. Qui dicta repellendus ratione sint vel, natus
                        doloribus nesciunt consectetur? Nesciunt possimus
                        blanditiis ab unde praesentium nostrum iste. Doloremque
                        nemo impedit ad molestiae? Similique quia minima magni
                        sunt ad blanditiis. Ipsum quo nobis quisquam fugit velit
                        voluptas, delectus distinctio officia? Harum eos beatae
                        fugiat ex ipsa assumenda asperiores ratione maxime
                        laboriosam sunt, hic quas eveniet quibusdam fuga earum
                        odio modi. Officia consequuntur suscipit ducimus, ipsa
                        corrupti natus eius neque architecto eum itaque
                        doloremque vero ratione blanditiis sit obcaecati dolorum
                        quasi. Laboriosam facere provident ab consequatur quidem
                        architecto expedita debitis nam. Ipsum sed ullam
                        tempora. Vitae reprehenderit quasi culpa nam tempore
                        eligendi ratione alias impedit consequatur? Eius
                        provident fugiat distinctio eveniet suscipit, ipsa
                        veritatis quia fuga iure eligendi quis voluptatum totam.
                        A ad itaque quaerat deserunt consequuntur quasi porro
                        quidem sapiente ab nobis perferendis natus deleniti at
                        adipisci doloremque cumque quas, aut sequi omnis quia.
                        Repellendus sed doloribus quod nihil accusamus.
                        Molestiae, vitae accusamus fugit quisquam facere aperiam
                        ex ipsam vel nihil sunt fuga exercitationem. Cum at
                        nihil quam, beatae consectetur unde accusamus,
                        doloremque nulla iusto porro consequatur quis modi
                        perferendis! Eveniet nisi qui fugit natus rem incidunt
                        debitis dolorem repudiandae, error perspiciatis autem
                        provident velit beatae, at, aspernatur maxime quaerat.
                        Soluta, provident id sunt suscipit consectetur omnis et
                        blanditiis tempora. Possimus ea deleniti vitae labore
                        debitis nam molestias autem! Atque quaerat reprehenderit
                        dolorem eveniet expedita magni aspernatur minus soluta
                        aperiam nisi. At cumque consectetur adipisci eius ex,
                        amet accusantium illum? Expedita sed quos illum est,
                        dolore nobis ab, molestiae sit nesciunt, corporis
                        suscipit aspernatur. Asperiores doloribus esse ullam,
                        eligendi ut ducimus facere placeat ab vel adipisci a
                        culpa in magnam? Enim fugiat vel commodi laborum,
                        inventore necessitatibus iste facilis sit molestias?
                        Omnis, nostrum! Ex consequatur assumenda, cum voluptatem
                        animi quam eligendi accusantium id saepe! Error ad
                        aspernatur possimus dolores ex. Necessitatibus quae ad,
                        voluptate, reiciendis tempora accusamus deserunt esse
                        perferendis dicta eum doloremque vitae ullam illum
                        consequuntur dignissimos nemo, corrupti soluta neque
                        eius modi est ducimus quaerat dolorum? Officia, quas.
                        Animi perferendis distinctio culpa est tenetur ad
                        aperiam rerum aut, veritatis architecto? Error itaque
                        unde quidem illum repellat, adipisci vero dolorem,
                        beatae earum nam aspernatur fuga aut nihil? Rerum,
                        earum. Ipsa nostrum soluta similique cumque eligendi
                        esse, laudantium quo quis. Necessitatibus id odio
                        labore, cupiditate dignissimos atque ut deserunt. Aut,
                        ut consectetur dignissimos vero est ullam facilis
                        dolores sequi consequuntur. Animi exercitationem aperiam
                        placeat iure ipsum rem doloremque nobis blanditiis,
                        repellendus non dicta ad officia possimus eligendi nemo
                        voluptates nulla quod pariatur. Quae in illum ullam
                        repudiandae obcaecati magni eius. Repellendus corporis
                        dolor quisquam reprehenderit fugiat ratione quam earum.
                        Suscipit repudiandae minima culpa ab ut in eum ullam
                        totam voluptas nostrum rerum, mollitia dolorum amet
                        ducimus a quos, sint sapiente. Accusamus, mollitia hic
                        quo iste praesentium corporis, adipisci impedit id
                        consequatur delectus vero quas, ab veniam recusandae
                        consequuntur neque ipsa voluptas eaque obcaecati illo
                        facilis nostrum fugiat voluptatum. Debitis, obcaecati!
                        Et tempore sit vitae perspiciatis sint voluptatibus,
                        mollitia error, quas voluptatem autem debitis laudantium
                        temporibus recusandae similique perferendis, corrupti
                        accusamus! Impedit amet nihil corporis mollitia iure,
                        harum repudiandae molestiae officiis? Possimus quidem
                        labore quis sequi, quas accusantium maiores in officia
                        eveniet dolore, consectetur quae laudantium eaque est
                        nesciunt vero! Magni, fuga totam sapiente sed atque
                        voluptatum. Beatae autem amet perferendis. Modi
                        repellendus adipisci consequatur eaque quia autem sequi
                        numquam! Nisi dolor hic consequatur temporibus error
                        voluptatibus voluptates esse magnam molestias magni
                        dolorem similique aut libero quod, aperiam, soluta iste
                        officia. Perferendis illo amet, reprehenderit vero
                        inventore, dolorem aliquid nam accusamus necessitatibus
                        neque, qui animi? Adipisci, excepturi vero dolorem dolor
                        harum id error obcaecati repudiandae quas eaque ipsum
                        dicta! Sequi, similique. Sed placeat eligendi veritatis
                        aspernatur quis nemo ipsum atque, blanditiis doloribus
                        quos, vero velit neque animi, officia fuga repellendus
                        veniam? Officia itaque quisquam, sequi quas earum ullam
                        voluptas error iste. Corrupti, animi, harum ducimus
                        quisquam omnis praesentium saepe unde nesciunt laborum a
                        laudantium atque amet blanditiis iure pariatur ad quod
                        excepturi consequuntur voluptates deserunt totam
                        sapiente! Voluptatem nostrum commodi modi? Quisquam enim
                        praesentium id quasi officia debitis vero aperiam
                        corporis tempore, sapiente, voluptatum fuga eum incidunt
                        asperiores quae adipisci atque ducimus repudiandae,
                        dolorem deserunt sequi. Iusto alias consequatur
                        inventore. Illum! Minus laboriosam ut, nostrum vel atque
                        quidem qui dolore repellendus quaerat dolorum odit.
                        Magnam repellendus eius vero tempora. Voluptas ducimus
                        quas mollitia veniam consectetur enim porro earum
                        aliquid accusantium voluptatum. Provident officia ullam
                        commodi, sapiente laborum adipisci ipsum illum esse
                        assumenda. Porro, error? Excepturi, eligendi veniam
                        praesentium distinctio, nostrum incidunt numquam unde
                        corrupti asperiores nobis obcaecati quae, repellat amet
                        libero? Recusandae autem aliquam iure voluptatum impedit
                        sint quidem modi quisquam ipsa illo deserunt, nisi
                        deleniti fugiat corporis qui nulla sed incidunt
                        voluptate blanditiis similique obcaecati expedita!
                        Incidunt blanditiis dolor praesentium! Quidem qui est
                        dolores ullam quo harum, voluptatibus expedita.
                        Aspernatur, doloribus. Adipisci eius, alias itaque saepe
                        optio at quis! Voluptas iusto nesciunt perferendis
                        labore dignissimos alias porro tempora optio deleniti.
                        Ullam nulla, repellat sapiente, eveniet beatae excepturi
                        saepe illo ratione dolorem tenetur praesentium voluptas
                        omnis fuga. Culpa iure, voluptatibus aliquam voluptates
                        at sapiente, nam accusamus repellat earum quaerat
                        quisquam quo. Id natus quam quos quod repellat nemo
                        praesentium, voluptatem laborum sunt, culpa voluptates
                        accusantium blanditiis cupiditate. In soluta debitis
                        repudiandae minima omnis magni labore. Magnam voluptatum
                        incidunt facilis placeat ipsa. Recusandae facere est
                        quod illum quia natus voluptates suscipit rerum
                        inventore exercitationem, voluptate odio pariatur
                        laboriosam quisquam ipsam. Consectetur, eaque. Repellat
                        eius voluptatibus ipsum voluptates voluptatem
                        necessitatibus tempora reiciendis mollitia! Rem sint
                        beatae perspiciatis, maiores itaque, obcaecati officiis
                        odio ullam velit sequi perferendis delectus sed ex
                        accusantium vitae dignissimos repellendus, tempore nobis
                        quas explicabo! Et vitae amet quia eius. Repudiandae.
                        Temporibus blanditiis odio pariatur, est ullam
                        laudantium architecto quam ducimus tempora illo a
                        eveniet optio aperiam ab ea minus commodi reiciendis
                        dicta ut nesciunt! Praesentium cupiditate quia libero
                        quisquam. Facilis. A praesentium culpa quod corporis
                        animi nemo, distinctio totam eum nobis vel! Illo
                        praesentium eum, eaque doloremque provident assumenda
                        esse nisi iste recusandae nihil laboriosam ab ad porro
                        soluta laudantium! Delectus reiciendis optio illo,
                        quisquam fugiat nam fuga assumenda modi sed quibusdam
                        aperiam harum. Adipisci sequi, neque repellat dolorem a
                        ut atque natus obcaecati perferendis dolor illo hic
                        corrupti sit? Dolor, in quas error fugit sapiente ad
                        similique dignissimos, corporis voluptatibus expedita
                        maiores perspiciatis ipsa temporibus aliquam explicabo
                        sed numquam reprehenderit dolore quos, natus vel quasi
                        optio? Libero, officiis dolorum. Pariatur ullam, modi
                        numquam iusto alias natus rem cupiditate, aliquam
                        officiis aliquid libero ad sed unde consequuntur error
                        optio odio atque at. Iste, quos assumenda. Cum, illo!
                        Voluptatum, necessitatibus aliquam. Perspiciatis porro
                        eveniet dolores consequatur laborum architecto atque
                        dignissimos ad quasi nulla accusantium voluptate in unde
                        quisquam voluptatem alias iusto, numquam, necessitatibus
                        incidunt aperiam suscipit a neque iure? Voluptatibus,
                        rerum. Quam ullam maiores impedit illum a possimus
                        fugiat! Provident ea consequuntur ad quidem repellat!
                        Minus, repudiandae? Sequi iste, ut necessitatibus saepe,
                        accusamus fugit, qui iure alias esse aspernatur
                        repudiandae corporis. Tempora nemo aut quae velit illum
                        earum perspiciatis, totam voluptatibus eum quasi unde
                        dolore adipisci ex, quod aliquid magnam, minima
                        explicabo animi dolorum! Architecto natus sint suscipit
                        quos aspernatur perferendis! Dolorum sit veritatis
                        perspiciatis ipsam amet ut mollitia eaque ex dolorem
                        odio sed provident autem voluptatibus, doloribus
                        explicabo minus consequuntur quae illum reiciendis,
                        officia praesentium. Debitis vitae delectus et eligendi?
                        Ad asperiores tempora similique nemo nihil aut, non
                        rerum voluptate eius ex architecto tempore dignissimos
                        commodi eum! Impedit soluta earum aperiam! Dignissimos
                        quidem maiores error quo voluptate optio dolorem?
                        Doloribus? Repudiandae accusamus iusto fuga ipsa
                        dolores, nisi consequuntur fugit tempora nihil
                        necessitatibus ipsum esse eius minima magnam
                        reprehenderit quisquam aperiam nostrum, veniam est illo
                        repellendus molestiae. Assumenda modi dolor quibusdam.
                        Velit natus fuga, tempora, possimus perspiciatis, sint
                        quibusdam recusandae nam nulla voluptas molestias! Quo
                        velit dignissimos eveniet, a atque cumque sequi iste id
                        commodi natus laudantium impedit. Recusandae, ipsam
                        soluta? Eveniet expedita consequuntur repudiandae
                        cupiditate quasi sit fugiat, placeat eligendi alias
                        magnam ab, numquam nisi neque natus amet ipsa omnis at
                        a, aperiam excepturi? Soluta facilis delectus dolores
                        quidem quas. Molestiae voluptate incidunt nam hic modi
                        dolor doloremque ratione aliquam, labore optio numquam
                        corporis facilis totam rem dicta cumque! Cumque eaque
                        nesciunt hic similique quas suscipit vero ratione
                        sapiente magnam. Temporibus dolores vel sapiente tenetur
                        ducimus unde, voluptatum tempore esse error sint odit
                        quo id a ad possimus ratione odio officiis, laborum
                        maiores harum. Illum sequi explicabo sit ullam ipsum.
                        Eos repellat nostrum laudantium explicabo asperiores
                        modi ratione neque adipisci ab eaque porro deleniti
                        necessitatibus quibusdam illum, itaque obcaecati
                        perferendis doloribus aperiam consequuntur accusamus
                        excepturi blanditiis, atque natus magni! Accusantium.
                        Cum, placeat a adipisci saepe sint ut modi eveniet
                        inventore reiciendis ratione unde voluptas dolore maxime
                        dignissimos voluptatibus eligendi esse officiis fugiat
                        aspernatur, repellat expedita natus. Officia accusamus
                        in illum. Harum earum adipisci ipsum quod ea nihil dolor
                        tempora sapiente maiores magnam quidem ex, quis mollitia
                        delectus, fugiat labore eius, quaerat dicta? Quam,
                        quidem placeat laborum repellat asperiores nam veniam.
                        Tempora qui id quam, reiciendis, nesciunt quasi
                        similique, veniam assumenda possimus sunt illo? Magnam
                        reprehenderit natus rerum maxime nobis vel eaque
                        perferendis doloremque tenetur, sit assumenda debitis
                        placeat autem deleniti! Numquam quia laboriosam tenetur
                        saepe ducimus magnam nostrum vero quam maxime
                        necessitatibus! Velit illo, mollitia tempore dolores
                        libero perspiciatis iste suscipit, voluptatibus,
                        similique nam omnis dicta architecto ex eligendi
                        tempora? Quis alias laudantium ex explicabo earum
                        voluptate ullam id in. Quibusdam necessitatibus quaerat
                        reprehenderit, assumenda ullam consectetur a id ab
                        voluptas obcaecati. Cum harum modi officia corporis
                        porro aliquam quos? Voluptatibus ratione nisi,
                        reiciendis nulla accusantium pariatur explicabo quam
                        placeat itaque illo, velit excepturi, nihil cum delectus
                        non autem consequatur! Porro dolore deserunt fuga cum
                        cumque similique molestias aut doloribus. Aut harum
                        mollitia illo rem vitae minima, veritatis dolore
                        blanditiis ducimus ullam non praesentium assumenda
                        facilis voluptates temporibus nemo tempore asperiores
                        qui quasi ea sit eveniet id. Vel, laborum assumenda.
                        Nemo fuga tenetur accusantium autem placeat quae! Quod
                        expedita aliquam magni temporibus magnam consectetur
                        praesentium rerum ducimus, repellat corporis at
                        accusantium quia. Sunt eius vero beatae pariatur quidem.
                        Quis, magnam! Quaerat consequuntur nisi architecto
                        consectetur ullam obcaecati omnis nobis eligendi odit!
                        Eius odit quis repellendus, quod quisquam sed libero
                        laudantium deserunt rerum similique reiciendis? Modi
                        commodi consectetur ratione? Debitis, praesentium?
                        Beatae, itaque asperiores! Tenetur esse unde facere nam
                        cum provident ipsam iusto aspernatur voluptas dolores
                        eligendi, odit dolor consequatur nesciunt distinctio
                        itaque? Quaerat eos cumque eius quas, sequi inventore
                        sed? Vel magnam sed consectetur dolorem magni provident
                        facere hic quaerat ad eligendi, accusantium nisi? Nobis,
                        distinctio voluptates. Quas aut porro, obcaecati earum
                        eaque vel neque ratione laudantium illum, dolores
                        sapiente. Non nobis at doloremque, laborum cum dolor
                        suscipit esse asperiores ab repellat accusamus excepturi
                        quos beatae. Eveniet dolore provident aliquam, officiis
                        ut enim quis, fuga repellat esse aut necessitatibus
                        saepe? Ea dolorem, deleniti ut molestias tenetur
                        repellendus suscipit, quo odio culpa eius est voluptatum
                        tempora ratione ab, non ipsa quasi debitis? Iusto
                        laudantium suscipit dolor ipsum magni deserunt
                        aspernatur modi. Quas saepe dicta asperiores accusamus
                        iste deserunt repudiandae quae explicabo exercitationem,
                        voluptatem laboriosam voluptate id minus facilis maiores
                        ipsam, corporis nesciunt eos. Rem possimus similique
                        voluptatum animi odio quasi nobis. Soluta ipsum omnis
                        sint unde odit at minus maxime minima fugit, ipsa
                        perspiciatis dolorem provident laborum dolor eligendi
                        suscipit ea necessitatibus id iste dignissimos corporis
                        illo, cumque tenetur placeat. Velit.
                    </div>
                ),
            },
        ],
    },
]);

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
