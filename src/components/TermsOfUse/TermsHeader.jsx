import { useTranslation } from "react-i18next";
import FAQHeaderimage from "../../assets/images/FaqHeader.jpg";

const TermsHeader = () => {

    const [t] = useTranslation()
  return (
    <section className="lg:px-0 px-2">
    <img src={FAQHeaderimage} className="w-full" />
    <div className="text-left md:max-w-7xl max-w-4lg mx-auto py-6 text-blackw">
        <h1 className="text-4xl font-semibold">
        Terms Of Use
        </h1>
        </div>
    <div className="text-left md:max-w-7xl max-w-4lg mx-auto py-6 text-black">
      <p className=" whitespace-pre-line">{t("terms_text1")}</p>
      <p className="text-2xl py-4">{t("terms_header1")}</p>
      <p className=" whitespace-pre-line">{t("terms_text2")}</p>
      <p className="text-2xl py-4">{t("terms_header2")}</p>
      <p className=" whitespace-pre-line">{t("terms_text3")}</p>
      <p className="text-2xl py-4">{t("terms_header3")}</p>
      <p className=" whitespace-pre-line">{t("terms_text4")}</p>
      <p className="text-2xl py-4">{t("terms_header4")}</p>
      <p className=" whitespace-pre-line">{t("terms_text5")}</p>
      <p className="text-2xl py-4">{t("terms_header5")}</p>
      <p className=" whitespace-pre-line">{t("terms_text6")}</p>
      <p className="text-2xl py-4">{t("terms_header6")}</p>
      <p className=" whitespace-pre-line">{t("terms_text7")}</p>
      <p className="text-2xl py-4">{t("terms_header7")}</p>
      <p className=" whitespace-pre-line">{t("terms_text8")}</p>
      <p className="text-2xl py-4">{t("terms_header8")}</p>
      <p className=" whitespace-pre-line">{t("terms_text9")}</p>
      <p className="text-2xl py-4">{t("terms_header9")}</p>
      <p className=" whitespace-pre-line">{t("terms_text10")}</p>
      <p className="text-2xl py-4">{t("terms_header10")}</p>
      <p className=" whitespace-pre-line">{t("terms_text11")}</p>
      <p className="text-2xl py-4">{t("terms_header11")}</p>
      <p className=" whitespace-pre-line">{t("terms_text12")}</p>
      <p className="text-2xl py-4">{t("terms_header12")}</p>
      <p className=" whitespace-pre-line">{t("terms_text13")}</p>
      <p className="text-2xl py-4">{t("terms_header13")}</p>
      <p className=" whitespace-pre-line">{t("terms_text14")}</p>
      <p className="text-2xl py-4">{t("terms_header14")}</p>
      <p className=" whitespace-pre-line">{t("terms_text15")}</p>
      <p className="text-2xl py-4">{t("terms_header15")}</p>
      <p className=" whitespace-pre-line">{t("terms_text16")}</p>
      <p className="text-2xl py-4">{t("terms_header16")}</p>
      <p className=" whitespace-pre-line">{t("terms_text17")}</p>

    </div>
  </section>
  )
}

export default TermsHeader