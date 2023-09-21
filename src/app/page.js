import Appbar from './components/Appbar';
import Bottom from './components/Bottom';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Appbar></Appbar>

      <Bottom></Bottom>
    </main>
  )
}