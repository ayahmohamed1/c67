// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "Habiby",                                     // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#38bdf8",                             // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `To my male version , my only one best friend and Habiby♥️🫂
يا أجمل صدفة في حياتي و يا حياتي كلها و عمري كله .. وأغلى حد موجود في قلبي.. كل سنة وأنت منورني وموجود معايا .. وكل سنة وأنا بحبك أكتر من السنة اللي قبلها
 ربك يرزقك أيام أحلى من كل اللي فاتوا، ويحقق لك كل أحلامك وطموحاتك وتفضل ضحكتك منورة دنيتي كلها
وجودك في حياتي هو أحلى هدية ربنا رزقني بيها .. كل سنة وأنت حبيبي وسندي وكل الدنيا بالنسبة لي`,
};

const giftData: Record<string, GiftData> = {
  ahmed: defaultGift,
  aya: defaultGift,
};

export default giftData;