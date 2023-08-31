import { useTranslation } from "react-i18next";
import FAQHeaderimage from "../../assets/images/FaqHeader.jpg";

const PrivacyHeader = () => {

    const [t] = useTranslation()
  return (
    <section className="lg:px-0 px-2">
    <img src={FAQHeaderimage} className="w-full" />
    <div className="text-left md:max-w-7xl max-w-4lg mx-auto py-6 text-blackw">
        <h1 className="text-4xl font-semibold">
        Privacy Policy
        </h1>
        </div>
    <div className="text-left md:max-w-7xl max-w-4lg mx-auto py-6 text-black">
      <p className=" whitespace-pre-line">{t("privacy_text1")}</p>
      <p className="text-2xl py-4">{t("privacy_header1")}</p>
      <p className=" whitespace-pre-line">{t("privacy_text2")}</p>
      <p className="text-2xl py-4">{t("privacy_header2")}</p>
      <p className=" whitespace-pre-line">{t("privacy_text3")}</p>
      <p className="text-2xl py-4">{t("privacy_header3")}</p>
      <p className=" whitespace-pre-line">{t("privacy_text4")}</p>
      <p className="text-2xl py-4">{t("privacy_header4")}</p>
      <p className=" whitespace-pre-line">{t("privacy_text5")}</p>
      <p className="text-2xl py-4">{t("privacy_header5")}</p>
      <p className=" whitespace-pre-line">{t("privacy_text6")}</p>
      <p className="text-2xl py-4">{t("privacy_header6")}</p>
      <p className=" whitespace-pre-line">{t("privacy_text7")}</p>
      <p className="text-2xl py-4">{t("privacy_header7")}</p>
      <p className=" whitespace-pre-line">{t("privacy_text8")}</p>

    </div>
  </section>
  )
}

export default PrivacyHeader