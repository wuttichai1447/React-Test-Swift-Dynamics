import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en.json'; // เปลี่ยนตามภาษาที่คุณต้องการ
import translationTH from './locales/th.json'; // เปลี่ยนตามภาษาที่คุณต้องการ

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      th: {
        translation: translationTH
      }
    },
    fallbackLng: 'en', // ภาษาที่จะใช้ในกรณีที่ภาษาไม่สามารถตรวจสอบได้หรือไม่สามารถใช้งานได้
    debug: true, // เปิดใช้งานโหมดดีบักของ i18next สำหรับการพิมพ์ข้อความเตือนในคอนโซล
    interpolation: {
      escapeValue: false // ไม่ต้องการการหนีไฟล์ HTML ในข้อความแปล
    }
  });

export default i18next;
