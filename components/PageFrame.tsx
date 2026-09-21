import Header from "./Header";
import Footer from "./Footer";
import InquiryDialog from "./InquiryDialog";

export default function PageFrame({ children }: { children: React.ReactNode }) {
  return <><Header />{children}<Footer /><InquiryDialog /></>;
}
