import { useTranslation } from "react-i18next";
import FAQHeaderimage from "../../assets/images/FaqHeader.jpg";

const WarrantyHeader = () => {

    const [t] = useTranslation()
  return (
    <section className="lg:px-0 px-2">
    <img src={FAQHeaderimage} className="w-full" />
    <div className="text-left md:max-w-7xl max-w-4lg mx-auto py-6 text-blackw">
        <h1 className="text-4xl font-semibold">
        Warranty Terms
        </h1>
        </div>
    <div className="text-left md:max-w-7xl max-w-4lg mx-auto py-6 text-black">
      <p className=" whitespace-pre-line py-2">{t("warranty_text1")}</p>
      <p className=" whitespace-pre-line py-2">{t("warranty_text2")}</p>
      <p className=" whitespace-pre-line py-2">{t("warranty_text3")}</p>
      

    </div>
  </section>
  )
}

export default WarrantyHeader