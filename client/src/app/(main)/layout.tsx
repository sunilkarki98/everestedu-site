import Header from "@/components/layout/Header";
import dynamic from "next/dynamic";

const FooterSection = dynamic(() => import("@/components/sections/FooterSection"));
const PreFooterContact = dynamic(() => import("@/components/sections/PreFooterContact"));
const QuickActionsBar = dynamic(() => import("@/components/layout/QuickActionsBar").then(mod => mod.QuickActionsBar));
const EligibilityModal = dynamic(() => import("@/components/ui/EligibilityModal").then(mod => mod.EligibilityModal));
const GlobalFaqRenderer = dynamic(() => import("@/components/sections/GlobalFaqRenderer").then(mod => mod.GlobalFaqRenderer));

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <PreFooterContact />
      <GlobalFaqRenderer />
      <FooterSection />
      <QuickActionsBar />
      <EligibilityModal />
    </>
  );
}
