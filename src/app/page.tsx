import LoginButton from "./components/LoginButton";
import Header from "./components/organics/Header";
import WelcomeSection from "./components/WelcomeSection";
import { Container } from "./components/layout/Container/Container";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Container>
        <div className="py-8 space-y-8">
          <WelcomeSection />
          <LoginButton />
        </div>
      </Container>
    </div>
  )
}