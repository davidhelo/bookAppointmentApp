import '../styles/global.css';
import styles from '../styles/styles.module.css';

import Link from "next/link";
import Layout from "./layout";
import Navbar from '../components/Navbar.js';

 
export const metadata = {
  title: 'Project Come',
  description: 'Cosme Project',
}

export default function Page() {
  return (
    <Layout>
      <Navbar  />
      <div id="home">
        <h1>Cosmetología Profesional</h1>
        <h3>Cuidados de la piel para lucir increible.</h3>
        <p>Remoción de vello y cuidado de la piel facial y corporal.</p>
        <Link href="#services" className={styles.pButton} >Ver servicios</Link>
      </div>
      <div id="services">
        <h1>Servicios. <Link href="/book-appointment">book appointment.</Link></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales sagittis tincidunt. Sed ac justo porta, posuere lectus vitae, ornare leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ultrices efficitur mauris, a tempor ex luctus at. In luctus quam et imperdiet vehicula. Donec quis est id orci consequat euismod in at tellus. Pellentesque venenatis ac neque et vehicula. Curabitur ex velit, mattis gravida convallis quis, sollicitudin sed risus. Sed eleifend rutrum nisi nec molestie.

Maecenas ornare turpis ante, vel efficitur erat dictum non. Maecenas fringilla lacinia dictum. Maecenas ornare ipsum a massa efficitur, ut bibendum eros rutrum. Suspendisse massa massa, semper vitae efficitur id, facilisis eu elit. Vivamus sed leo elementum, cursus lorem vel, aliquam nisl. Praesent et libero non dui tristique sollicitudin. Nulla eu accumsan augue, sed porttitor nulla. Aliquam justo velit, feugiat nec maximus ut, rutrum sed leo. Vestibulum vestibulum quam sed tempus mollis. Quisque quis risus sit amet purus facilisis ullamcorper. Fusce facilisis sagittis orci et sagittis. Pellentesque nec lectus id lorem pretium viverra. Vivamus euismod porttitor dapibus. Phasellus ut imperdiet erat.

In pharetra turpis ligula, eget pellentesque lorem mattis nec. Nam ultrices volutpat arcu vitae tempor. Maecenas lobortis sodales est, at bibendum sapien mattis at. Ut nisi turpis, facilisis a vulputate vitae, tempus vitae metus. Vivamus non augue eget justo euismod efficitur. Donec eu malesuada nulla. Morbi tincidunt egestas erat, pretium volutpat orci molestie vitae. In hac habitasse platea dictumst.

Pellentesque rhoncus libero ac orci semper gravida. Morbi sed elit vel eros posuere laoreet quis quis dui. Sed sodales lacus id magna pretium, nec ultricies magna lacinia. Praesent erat magna, dapibus sed lacinia ut, sodales id lacus. Nullam id massa nec metus porta sodales nec in nisi. Duis in risus ut ligula vehicula suscipit a vitae dui. Aenean egestas odio at commodo viverra. Praesent id porta erat. Ut sit amet laoreet purus. Etiam lacinia pharetra libero, nec vestibulum metus sagittis ut. Proin leo ligula, ornare et aliquam eu, placerat ut enim. Sed nec rhoncus urna.

Donec ut pulvinar enim. Praesent tempus nisl ac purus accumsan placerat. Aenean mollis egestas ipsum et tristique. Nullam scelerisque nunc sed diam consectetur, in sagittis ipsum facilisis. Etiam bibendum orci at lorem efficitur, non rhoncus tellus dignissim. Duis vitae massa vel tellus gravida pretium. Duis sit amet pellentesque eros, quis consectetur ex.

Suspendisse potenti. Fusce viverra lectus vel neque gravida placerat eu at diam. Donec pulvinar leo vel nunc ultricies, id tincidunt quam ultrices. Ut vitae ipsum vestibulum, condimentum mi vitae, dapibus nulla. Pellentesque in urna mi. In tincidunt semper eros ut finibus. Cras vel lobortis mi. Vestibulum felis elit, sodales nec orci vitae, consequat pellentesque leo. Nulla vel diam risus.

Ut aliquet ipsum id dapibus consequat. Morbi convallis leo vel tortor imperdiet, ut lacinia leo semper. Cras malesuada aliquam semper. Nunc elit nisi, dapibus at nisi dictum, condimentum ultrices nisi. Quisque non neque mi. Sed vel elit augue. Proin dignissim placerat dui, id varius elit congue quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent porttitor justo a quam posuere, quis aliquam nisi congue. Ut commodo neque sed quam accumsan, ut molestie tortor auctor. Fusce semper tortor elit. Nulla lacus libero, condimentum vitae nunc sed, sagittis ullamcorper neque. Nullam bibendum dignissim mauris, non rutrum metus iaculis non. Aenean eu nunc sem.

Maecenas dictum elementum libero tristique facilisis. Vestibulum mattis dui sit amet justo tincidunt, a pulvinar elit tempus. Aenean semper est vehicula porttitor mollis. Mauris vel dolor et velit lacinia efficitur. Proin pellentesque dui sed massa elementum, sed gravida tellus placerat. Phasellus sit amet faucibus ipsum, vitae efficitur eros. Aenean bibendum a diam eu scelerisque. Curabitur nec arcu arcu. Ut placerat risus leo, facilisis efficitur augue ultricies eget. Pellentesque tincidunt purus sem, sed sollicitudin tortor lobortis tempus. Maecenas arcu enim, lacinia rutrum lacus eget, venenatis luctus velit. Aliquam sit amet scelerisque felis. Suspendisse id ligula luctus, volutpat tellus vitae, scelerisque augue. Integer pretium maximus tortor ut congue.</p>
        <h1> no homeee</h1>
      </div>
      <div id="contact">
         <h2>Contactanos section</h2>
      </div>
    </Layout>
  );
}