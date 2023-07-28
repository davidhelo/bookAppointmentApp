import Link from "next/link";
import './styles/global.css';

export default function Page() {
  return <h1>Hello, clic to <Link href="/book-appointment">book an appointment.</Link></h1>
}