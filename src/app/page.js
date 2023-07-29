import './styles/global.css';
import Link from "next/link";
 
export const metadata = {
  title: 'Book appointment App',
  description: 'Book appointment App. By David',
}

export default function Page() {
  return <h1>Hello, clic to <Link href="/book-appointment">book an appointment.</Link></h1>
}