
import dynamic from 'next/dynamic';


const Header = dynamic(() => import('./components/Header'), {
  loading: () => <p>Header Loading</p>
});

const Story = dynamic(() => import('./components/Story'), {
  loading: () => <p> Loading</p>
});

const EveryStick = dynamic(() => import('./components/EveryStick'), {
  loading: () => <p> Loading</p>
});

const How_to_use = dynamic(() => import('./components/How_to_use'), {
  loading: () => <p> Loading</p>
});

const Home_gardening = dynamic(() => import('./components/Home_gardening'), {
  loading: () => <p> Loading</p>
});


const Footer = dynamic(() => import('@/pages/commonUse/Footer'), {
  loading: () => <p>loader</p>
});

const FooterP = dynamic(() => import('@/pages/commonUse/bottompopup/BottomHandler'), {
  loading: () => <p>loader</p>
});

export default function Home() {

  return (
    <main className="">


      <title> Plantify Garden </title>


      <section className="">

        <Header />

        <Story />

        <EveryStick />

        <How_to_use />

        <Home_gardening />


        <Footer />

        <FooterP />

      </section>
    </main>
  );
}
