import Link from "next/link";
import { Container } from "../layout/Container/Container";
import NavBar from "../layout/Header/NavBar";

export default function Header() {
  return (
    <header>
      <Container>
        <NavBar />
      </Container>
    </header>
  );
}